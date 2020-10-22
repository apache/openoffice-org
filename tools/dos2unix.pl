#! /usr/bin/perl

# dos2unix.pl by David Efflandt <efflandt@xnet.com>
# Modification of script from "Learning perl" p.353
# O'Reilly & Associates, Inc.
#
# Run after transfering text files from DOS to UNIX system.
# Strips carriage returns from DOS files for use UNIX.
# Transfers file permissions to new file (except suid bit).
#
#       Usage:\tdos2unix.pl FILELIST
#       where FILELIST = one or more filenames
#
# If you edit this file in DOS you can run it on itself by typing:
#       perl dos2unix.pl dos2unix.pl
#
# Modify variables below for other search and replace functions.

$find = "\r";   # find this
$sub = "";   # substitute with this
$rm_bak = 1;    # remove old file after conversion: 0 = no, 1 = yes

while (<>) {
    if ($ARGV ne $oldargv) {
	($dev,$ino,$mode,$nlink,$uid,$gid) = stat($ARGV);
	$backup = $ARGV . '.bak';
	rename($ARGV, $backup);
	open (ARGVOUT, ">$ARGV");
	chmod $mode, $ARGV;
	select(ARGVOUT);
	$oldargv = $ARGV;
    }
    s/$find/$sub/g;
    s/\t/  /g;
        s/
	    /\n/g;
} continue {
    print;
    if (eof) {
	print STDOUT "Converted: $oldargv\n";
	unlink $backup if $rm_bak;
    }
}
select(STDOUT);
