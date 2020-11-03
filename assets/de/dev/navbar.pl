# Version 2.0.1 - 2004-05-07

# Perl-script for replacing the navbar in all HTM- and HTML-files
# in the directory specified with the first command line
# parameter. All subdirectories of this directory are
# processed.
# HTML files, which don't have a navbar are ignored.
#
# WARNING
# The current version can only process one link per line in the
# navbar-source-file. Please check the navbar file before applying
# the script
#
# Syntax: perl navbar.pl path/to/html-files navbar.html
#                                           ^^^^^^^^^^^
#                                    if this file is not
#                                    in the current directory,
#                                    specify the path to it.
#    e.g. perl navbar.pl path/to/html-files path/bla/navbar.html
#                                                    ^^^^^^^^^^^
#                                             the file with the
#                                             navbar-code can also
#                                             have another filename
#    e.g perl navbar.pl path/to/html-files path/bla/navbar.txt

# GERMAN VERSION:
# Perl-Skript, um die Navigationsleiste in allen HTM- und HTML-Dateien
# im mit dem ersten Parameter angegebenen Verzeichnis und
# dessen Unterverzeichnissen zu ersetzen.
#
# NEU2.0 Es wird der Bereich zwischen <!-- Start Navbar --> und
# NEU2.0 <!-- End Navbar --> ersetzt. Dieser Bereich kann mittels zweier
# NEU2.0 optionaler Parameter auch verändert werden (s.u.)
#
# HTML-Dateien ohne Navigationsleiste werden ignoriert.
#
# WARNUNG
# Die aktuelle Version kann nur einen Link pro Zeile in der
# Navbar-Quelldatei bearbeiten. Bitte pr&uuml;fe die Datei vor
# Anwendung des Skripts daraufhin
# (mehrere Links k&ouml;nnen schon bearbeitet werden, aber sobald
#  einer dabei ist, der mit http anf&auml;ngt werden alle Links in
#  dieser Zeile ignoriert -> das hei&szlig;t alle Links in dieser
#  Zeile werden tote Links (abgesehen von dem absoluten Link,
#  der mit http anf&auml;ngt))
#
# Syntax: perl navbar.pl path/to/html-files navbar.html
#                                           ^^^^^^^^^^^
#                                    falls diese Datei nicht im
#                                    aktuellen Verzeichnis ist,
#                                    muss der Pfad angegeben
#                                    werden
#
#    z.B. perl navbar.pl path/to/html-files path/bla/navbar.html
#                                                    ^^^^^^^^^^^
#                                             die hier navbar.html
#                                             genannte Datei kann auch
#                                             einen anderen Namen haben
#    z.B. perl navbar.pl path/to/html-files path/bla/navbar.txt
#
# NEU2.0 Es gibt auch zwei optionale Parameter, und zwar der Beginn und
# NEU2.0 das Ende des zu ersetzenden Bereiches. Parameter 3 ist der Beginn
# NEU2.0 und Parameter 4 das Ende. Beispiel:
# NEU2.0  perl navbar.pl . header_neu '<!-- Start de-header -->' '<!-- End de-header -->'
# NEU2.0  um den Header zu ersetzen


use Symbol;
use strict;

my (%pfadliste);

my $htmlstr = '';
my $top = $ARGV[0];
my $navbar = $ARGV[1];

my $startstring = $ARGV[2];
my $endstring = $ARGV[3];

$startstring = '<!-- Start Navbar -->' if ($startstring eq '');
$endstring = '<!-- End Navbar -->' if ($endstring eq '');

my $localpath = $top;
my $changedfiles = 0;

my $einzug = 1;

if (not -e $navbar) {
  die "Navbar-file [ $navbar ] doesn't exist";
}

if (not -e $top) {
  die "Directory [ $top ] doesn't exist.";
}

traverse($top);
generate();

sub traverse {
        my $localtop = shift;
        my $dirh     = gensym;
        my $fname;

        unless (opendir($dirh, $localtop)) {
                warn "Err: $localtop ($!)\n";
                return;
        }

        while (defined ($fname = readdir($dirh))) {
                next if $fname eq '.' or $fname eq '..';
                my $pname = $localtop . '/' . $fname;

                $pfadliste{$pname} = $einzug;
                if (-d $pname) {
                  $einzug++;
                  traverse($pname);
                }
        }

        closedir($dirh);
        $einzug--;
}

sub generate {
       my ($dirblock, $path);

       foreach $path (sort keys %pfadliste) {
                 $einzug = $pfadliste{$path};
                 my $ispath = 0;
                 if ($path =~ /.html*$/) {
                         my $line = '';
                         my $processvh = 1;
                         my $processnh = 0;

                         my $navbarvh = 0;

                         my @vorher = ('');         # vor der Navbar
                         my @nachher = ('');        # nach der Navbar

                         open(HTMLQUELLE, "<$path") or die "Cannot open file: $path";
                           my $relpfad = '';
                           for (my $i=0; $i<$einzug-1; $i++) {
                             $relpfad .= '../';
                           }

                           while (defined ($line = <HTMLQUELLE>)) {
                             chomp $line;
                             if ($processvh == 1) {
                               my $leerzeile = 0;
                               if ($line =~ /$startstring/i) {
                                 $line =~ s/$startstring//ig;
                                 $processvh = 0;
                                 $navbarvh = 1;
                                 $leerzeile = 1 if ($line eq ''); # Nur in diesem speziellen Fall Leerzeile nicht in Array übernehmen - ansonsten schon
                               }
                               push(@vorher, "$line\n") if ($leerzeile == 0);
                             }
                             if (($processvh == 0) && ($processnh == 0)) {
                               if ($line =~ /$endstring/i) {
                                 $line =~ s/$endstring//ig;
                                 $processnh = 1;
#                                 push(@nachher, $line) if (chomp($line) ne '');
                               }
                             }
                             push(@nachher, "$line\n") if ($processnh == 1);
                           }
                         close(HTMLQUELLE);

                         if ($navbarvh == 1) {
                           print "Updating navbar: [ $path ]\n";
                           open(HTMLZIEL, ">$path") or die "Cannot open file: $path";
                             #chomp @vorher;
                             print HTMLZIEL join("", @vorher);
                             print HTMLZIEL "$startstring\n";
                             open(NAVBARQUELLE, "<$navbar") or die "Cannot open file: $navbar";
                               while (defined ($line = <NAVBARQUELLE>)) {
                                 $line =~ s/href=\"/href=\"$relpfad/ig if (not ($line =~ /href=\"http/));
                                 print HTMLZIEL $line;
                               }
                             close(NAVBARQUELLE);
                             print HTMLZIEL "$endstring";
                             print HTMLZIEL join("", @nachher);
                           close(HTMLZIEL);
                           $changedfiles++;
                         }
                 }
       }
}
print "Updated navbar in $changedfiles files.\n";
