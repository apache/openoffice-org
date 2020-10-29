#!/usr/bin/perl
# Copyright 2007 Nakata Maho
# automatically checks out some milestones 

use File::chdir; #ports/devel/p5-File-chdir
use LWP::Simple; #ports/www/p5-LWP-Authen-Wsse
use XML::RSS;    #ports/textproc/p5-XML-RSS
use LWP::UserAgent; #ports/???

$eis_url = 'http://eis.services.openoffice.org/EIS2/cws.rss.CWSAnnounceNewsFeed/mws';
$ooo_codeline="680";
$ooo_checkoutdir="/work/tmp/ooocheckout";
$ooo_checkoutlog="/work/tmp/ooocheckoutlog";
$ooo_sourcedir="/home/ftp/pub/OpenOffice.org/sources/";
$ooo_cvs_server="-z3 -d:pserver:anoncvs\@anoncvs.services.openoffice.org:/cvs";
$ooo_sourcesite="build.good-day.net";
$ooo_sourcedir="/pub/OpenOffice.org/sources/";
$ooo_tag="";
$ooo_alias="";
$infinite_mode=1;
$|=1;
$ooo_alreadycheckedout=0;

sub parse_option {
        while ($_ = shift) {
                if (substr($_, 0, 1) eq '-') {
                        if ($_ eq '-help') {
                                print "ooocheckout [-tag tag]\n";
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
while (1) {

if(open(CHECKOUTLOG,"<$ooo_checkoutlog"))
{

if ( $ooo_tag eq '' || $infinite_mode) { 
########################
# determine newest tag #
########################
$data_from_web = get($eis_url);
$rss = new XML::RSS;
$rss->parse($data_from_web);

$item=@{$rss->{'items'}}[0];
split (' ',$item->{'title'});
$ooo_tag=@_[1];
print "Current newst tag is $ooo_tag\n";
} else {
print "You specified tag : $ooo_tag\n";
}

while(<CHECKOUTLOG>) {
   if(/$ooo_tag/o) {
      $ooo_alreadycheckedout=1;
   } else {
      $ooo_alreadycheckedout=0;
   }
}
close(CHECKOUTLOG);
}

$ooo_archive_name="OOo_" . "$ooo_tag" . "_source.tar.bz2" ;
$ooo_archive_name_md5="OOo_" . "$ooo_tag" . "_source.tar.bz2.md5" ;
$ENV{'LANG'}="C";
$ENV{'LC_ALL'}="C";

########################
# checkout source code #
########################
print "Checked out source code tar ball will be : $ooo_archive_name\n";
my $ua = LWP::UserAgent->new;
$ua->timeout(10);
$url="http://" . "$ooo_sourcesite" . "$ooo_sourcedir". "$ooo_archive_name";
if ((!head($url) || !$infinite_mode) && !$ooo_alreadycheckedout )  {
if(!head($url))
{
	print "OOo source doesn't exist on $ooo_sourcesite !\n";
}
if($infinite_mode)
{
	print "Infinte mode\n";
}
if($ooo_alreadycheckedout)
{
	print "$ooo_tag has already been checked out\n";
}

print "OOo checkout start!\n";
system("date\n");
system("mkdir -p $ooo_checkoutdir\n");
system("rm -rf $ooo_checkoutdir/$ooo_tag\n");
system("mkdir -p $ooo_checkoutdir/$ooo_tag\n");

$CWD="$ooo_checkoutdir/$ooo_tag";
$ooo_alias="OpenOffice2";

if ($ooo_tag=~/SRC680/o)
{
$ooo_alias="OpenOffice2";
}

if ($ooo_tag=~/SRX645/o)
{
$ooo_alias="OpenOffice";
}

system("cvs $ooo_cvs_server checkout -r $ooo_tag $ooo_alias \n");
system ("cd .. ; tar cvfj $ooo_archive_name $ooo_tag \n");
system ("cd .. ; md5 $ooo_archive_name > $ooo_archive_name_md5 \n");

print "OOo checkout done!\n";
system("date\n");
######################
# upload source code #
######################
print "scp'ing to master site...\n";
system ("scp ../$ooo_archive_name $ooo_sourcesite" . ":/home/ftp" . "$ooo_sourcedir\n"); 
system ("scp ../$ooo_archive_name_md5 $ooo_sourcesite" . ":/home/ftp" . "$ooo_sourcedir\n"); 
open(CHECKOUTLOG,">>$ooo_checkoutlog") || die "cannot open $ooo_checkoutlog\n";
print CHECKOUTLOG "$ooo_tag\n";
close(CHECKOUTLOG);
print "scp done\n";
$ooo_alreadycheckedout=0;
} else {

if(head($url))
{
	print "Sleep one hour : OOo source had already been checked out $ooo_sourcesite !\n";
}

if($ooo_alreadycheckedout)
{
	print "Sleep one hour : $ooo_tag has already been checked out\n";
}
system("date\n");
sleep 3600;
}

if (!$infinite_mode)  {
exit;
}

}




