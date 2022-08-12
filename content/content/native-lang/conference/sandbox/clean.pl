#!/usr/bin/perl

use warnings;
use strict;

#
# Sanity check.
#
$ARGV[0] or die "Usage: secure filename";
my $file = $ARGV[0];
unless (-e $file) { die "No such file: $file" }

#
#  Remove background noise.
#
open INPUT, "<$file";
while (<INPUT>) {
    #
    # Mar 20 17:32:05 <--     SomeNicks has left #room
    #
    next if (/^\w\w\w\s\d\d\s\d\d:\d\d:\d\d\s<--\s/); # Nick leaves.
    next if (/^\w\w\w\s\d\d\s\d\d:\d\d:\d\d\s-->\s/); # Nick enters.
    next if (/^\w\w\w\s\d\d\s\d\d:\d\d:\d\d\s---\s/); # Nick changes.
    next if (/^\w\w\w\s\d\d\s\d\d:\d\d:\d\d\s>/);     # Private msg.
    next if (/^\w\w\w\s\d\d\s\d\d:\d\d:\d\d\s\*/);    # 3rd person.
    print
}
close INPUT;

####
#Mar 20 17:32:05 <--     simonbr (~Simon@simonbr.xs4all.nl) has left #ooonlc   #
#Mar 20 17:33:51 <--     Jzarecta has quit ("Leaving")   #
###
