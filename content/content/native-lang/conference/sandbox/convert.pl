#!/usr/bin/perl

use warnings;
use strict;

require "colours.pl";

#
# Sanity check.
#
$ARGV[0] or die "Usage: secure filename";
my $file = $ARGV[0];
unless (-e $file) { die "No such file: $file" }

#
# Put the entire log in an array.
#
open INPUT, "<$file";
my @lines = ();
while (<INPUT>) {chomp; push @lines, $_ }
close INPUT;

#
# Remove the time, and set the colour of the nick (from colours.pl).
# Nicks have the form <DanielC>.
#
# %colours
for (my $i = 0; $i < @lines; $i++) {
    $lines[$i] =~ /.*?<(.*?)>/;
    my $nick = $1;
    my $col  = ($main::colours{$nick} ? $main::colours{$nick} : '#000');
    my $bold = "<span style='color:$col; font-weight:900'>$nick</span>";
    $lines[$i] =~ s/.*?<$nick>/[$bold]\n/;
}

#
# Print out.
#
print <<EOH
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <title>IRC Conference log</title>
  <style type="text/css">
    #tabs, #apphead, #leftcol, #projecttools,
    .docs, #toc, .docs, .courtesylinks { display: none }
  </style>
</head>
<body>

<h1>IRC Conference log</h1>
<h2>
   <!-- Talk Title   <br /> -->
   <!-- by Speaker   <br /> -->
   <!-- <a href="../slides/">Download slides</a> -->
</h2>

<!--  ====================  -->
<!--       LOG STARTS       -->
<!--  ====================  -->

EOH
;
for my $line (@lines) {
   print "   $line\n<br />\n";
}
