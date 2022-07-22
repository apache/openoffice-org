#!/usr/bin/perl

use warnings;
use strict;

# Nice colours:
#
# Red:     800
# Green:   080
# Blue:    008
# Cyan:    088
# Magneta: 808
# Yellow:  880
# Purple:  50a
# LightB:  05a
# LightG:  5a0
# ------   a37
# ------   a73
# ------   37a
# xxxxxx   458
# xxxxxx   854
# xxxxxx   548
# Mustard: 890
# Brown:   753
# LightP:  b28
# Green2:  8a5
# Purple2: 53a

my @colours = qw( 800 080 008 088 808 880 50a 05a 5a0 a73 a37 37a 
                  458 854 548 890 753 b28 8a5 53a );

#
# Sanity check.
#
$ARGV[0] or die "Usage: secure filename";
my $file = $ARGV[0];
unless (-e $file) { die "No such file: $file" }

#
# Extract the nicks from the file.
#
open INPUT, "<$file";
my @lines = ();
while (<INPUT>) {
    chomp;
    my $line = $_;

    # Leave only the nick, which has form <DanielC>
    $line =~ s/^\w\w\w\s\d\d\s\d\d:\d\d:\d\d\s<(\w+)>.*/$1/;

    push @lines, $line;
}
close INPUT;

#
# Sort, and remove duplicate lines.
#
@lines = sort @lines;
my @nicks = ($lines[0]);
for (my $i = 1; $i < @lines; $i++) {
    push @nicks, $lines[$i] if ($lines[$i] ne $lines[$i-1]);
}

#
# Print out.
#

print <<EOH
#
#  Include file with nick colours.
#

our %colours = qw(
EOH
;
for my $nick (@nicks) {
   my $col = shift @colours;
   printf ("%15s   #$col\n", $nick);
}
print ");\n";
print "1;\n"
