use Symbol;
use strict;

my (%pfadliste);

my $htmlstr = '';
my $top = $ARGV[0];

my $zielpfad = $ARGV[1];
my $localzielpfad = $zielpfad;

my $header = $ARGV[2];
my $footer = $ARGV[3];

my $localpath = $top;
my $changedfiles = 0;

my $einzug = 1;

mkdir($zielpfad, 0777) || warn "Konnte Verzeichnis $zielpfad nicht anlegen";

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

                $pfadliste{$pname} = $einzug if (not ($pname =~ /\/CVS$/));
                if (-d $pname) {
                  $localzielpfad = $pname;
                  $localzielpfad =~ s/$top/$zielpfad/ieg;
		  if (not ($pname =~ /\/CVS$/)) {
                    print "Lege Verzeichnis an: [ $localzielpfad ]\n";
                    mkdir($localzielpfad, 0777) || warn "Konnte Verzeichnis $zielpfad nicht anlegen";
                    $einzug++;
                    traverse($pname);
		  }
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

                 my $zieldatei = $path;
                 $zieldatei =~ s/$top/$zielpfad/ig;

                 if ($path =~ /.html*$/) {

                         my $line = '';
                         my $process = 1;

                         my @ergebnis = ('');

                         my $relpfad = '';
                         for (my $i=0; $i<$einzug-1; $i++) {
                           $relpfad .= '../';
                         }

                         open(HTMLZIEL, ">$zieldatei") or die "Kann Zieldatei $zieldatei nicht öffnen!";
                         open(HTMLQUELLE, "<$header") or die "Cannot open file: $header";
                           while (defined ($line = <HTMLQUELLE>)) {
                             chomp $line;
                             $line =~ s/href=\"/href=\"$relpfad/ig if (not ($line =~ /href=\"http/));;
                             print HTMLZIEL $line . "\n";
                           }
			 close(HTMLQUELLE);

                         open(HTMLQUELLE, "<$path") or die "Cannot open file: $path";
                           while (defined ($line = <HTMLQUELLE>)) {
                             chomp $line;
                             print HTMLZIEL $line . "\n";
                           }
			 close(HTMLQUELLE);

                         open(HTMLQUELLE, "<$footer") or die "Cannot open file: $footer";
                           while (defined ($line = <HTMLQUELLE>)) {
                             chomp $line;
                             print HTMLZIEL $line . "\n";
                           }
			 close(HTMLQUELLE);
		         close(HTMLZIEL);
			 $changedfiles++;
                 } else {
                  if (not (-d $path)) {
                   system("cp",$path,$zieldatei);
		 }}
       }
}
print "There are $changedfiles files in the offline version.\n";
