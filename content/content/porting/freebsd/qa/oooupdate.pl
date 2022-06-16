#!/usr/bin/perl

use POSIX 'strftime';

#how to use..
#perl ~/oooupdate.pl -tag OOG680_m3
#1. checkout ooo ports
#2. update Makefile
#3. build test

sub parse_option {
        while ($_ = shift) {
                if (substr($_, 0, 1) eq '-') {
                        if ($_ eq '-help') {
                                print "oooupdate [-tag tag]\n";
                                exit;
                        } elsif ($_ eq '-tag') {
                                $ooo_tag = shift;
                                $infinite_mode=0;
                        } else {
                                die "Invalid option: \"$_\"\n";
                        }
                }
        }
}

##main

parse_option(@ARGV);

$ooo_hostname=`hostname -s`;
chop $ooo_hostname;
$ooo_workdir="/work/OOO/$ooo_hostname/$ooo_tag";

if (! -d $ooo_workdir ){
	system("sudo -u maho mkdir -p $ooo_workdir\n");
} else{
	print "Work directory already exists!\n";
}

if ($ooo_tag=~/SRC680/o) {
	$ooo_version="openoffice.org-2-devel";
}
if ($ooo_tag=~/OO[A-Z]680/o) {
	$ooo_version="openoffice.org-2-RC";
}


split('_',$ooo_tag);
$ooo_tagprefix=@_[0];
$ooo_milestone=@_[1];
$ooo_milestone=~ s/m//; 
$ooo_snapdate= strftime "%Y%m%d", localtime;

print "Tagprefix : $ooo_tagprefix\n";
print "Miilestone: $ooo_milestone\n";
print "Snapdate  : $ooo_snapdate\n";

chdir("$ooo_workdir");
print "DIR $ooo_workdir\n";
print "Checkout ports tree $ooo_version\n";
system("sudo -u maho cvs -d maho\@pcvs.freebsd.org:/home/pcvs co ports/editors/$ooo_version");
print "checkout done\n";

print ("Update Makefile...\n");
chdir("$ooo_workdir/ports/editors/$ooo_version");
$makefile_input="Makefile";
open (MAKEFILEIN,"<$makefile_input")  || die "Can't open file $makefile_input\n";

$pattern1 = "MILESTONE";
$pattern2 = "SNAPDATE";
$pattern3 = "OOOTAG";


$lines=0;
while(<MAKEFILEIN>)
{
  if(/^$pattern1/o) {
    $tmp[$lines]="MILESTONE?=		$ooo_milestone\n";
  } elsif (/^$pattern2/o) {
    $tmp[$lines]="SNAPDATE=		$ooo_snapdate\n";
  } elsif (/^$pattern3/o) {
    $tmp[$lines]="OOOTAG?=		$ooo_tagprefix"."_m\${MILESTONE}\n";
  } else {
    $tmp[$lines]=$_;
  }
  $lines++;
}

close(MAKEFILEIN);

$makefile_output="Makefile";
open (MAKEFILEOUT,">$makefile_output") || die "Can't open file $makefile_output\n";
for($i=0;$i<$lines;$i++)
{
  print MAKEFILEOUT $tmp[$i];
}
close(MAKEFILEOUT);

print "Diff to previous\n";
system("sudo -u maho cvs -d maho\@pcvs.freebsd.org:/home/pcvs diff -u");

print "Making new md5 and sha256\n";
system("make -DWITH_GPC makesum\n");

print "Build start!\n";
#system("make NUMOFPROCESSES=4 LOCALIZED_LANG=ja install deinstall >log.ja 2>&1\n");
system("/usr/bin/time -h sudo -u maho make NUMOFPROCESSES=4 >log.en 2>&1\n");

print "Install start!\n";
system("/usr/bin/time -h make NUMOFPROCESSES=4 deinstall package >> log.en 2>&1\n");

print "Deinstall\n";
system("/usr/bin/time -h make NUMOFPROCESSES=4 deinstall >> log.en 2>&1\n");

