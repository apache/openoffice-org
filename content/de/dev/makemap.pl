#!/usr/bin/perl
=head1 NAME

Makemap

=head1 SYNOPSIS

 zur Erzeugung von Sitemap und Navigationsleisten

 Syntax:   makemap.pl Aufgabe [Optionen]
 Beispiel: makemap.pl mn -v
   
 mit --hilfe Abschnitt erhaelt man weitere Hilfe. Abschnitte sind:
 OPTIONEN, AUFGABEN, BESCHREIBUNG, SITEMAP, NAVBAR, DATENBANK,
 VERSION, HISTORY, BUGS, TODO.

=head1 AUFGABEN

=over 4

=item B<a>

Aktualisieren der Informationen in der Datenbank site.data

=item B<m>

Maps erstellen

=item B<n>

Navbars erstellen, in eigene Dateien schreiben
aber nicht in die html-Dateien einpflegen

=item B<w>

erstellte Navbars in alle html Dateien schreiben

=back


=head1 OPTIONEN
 
=over 12

=item B<--verbose>

Ausgaben zur Bearbeitung der Einzelschritte

=item B<--verbosefile=s>

Ausgabe in Datei umlenken

=item B<--debug>

zur Ausgabe von Debug infos. Die Angabe kann mehrfach erfolgen, 
dann werden evtl. entsprechend mehr Informationen gegeben.

=item B<--debugfile=s>

Ausgabe in Datei umlenken


=item B<--hilfe>

Hilfe finden

mit --hilfe Abschnitt erhaelt man weitere Hilfe. 
Abschnitte sind: OPTIONEN, AUFGABEN, BESCHREIBUNG, SITEMAP, NAVBAR, DATENBANK,
VERSION, HISTORY, BUGS, TODO.

=back


=head1 BESCHREIBUNG

Die Idee des Programms besteht darin, die Erstellung der Sitemap
und der Navigationsleisten von Webseiten des deutsprachigen 
OpenOffice.org Projektes zu erleichtern. Im Zusammenspiel mit 
der Datenbankdatei site.data erledigt das Skript dabei vier
zentrale Aufgaben auf dem Datenbestand im lokalen CVS.
Die in der Datenbank gespeicherten Links werden mit den vorhandenen
html (htm/pdf/odt/...) Dateien verglichen und evtl. abgeglichen.
Aus der Datenbank wird die Sitemap erstellt.
Ebenso werden aus der Datenbank die Navigationsleisten erstellt.
Und schliesslich koennen die Navigationsleisten in die einzelnen
html Dateien geschrieben werden, wenn sie sich geaendert haben.
Nachdem das Skript die lokalen Dateien aktualisiert hat, muessen
die neuen Dateien per CVS neu commited werden.

=head1 SITEMAP

to write

=head1 NAVBAR

to write

=head1 DATENBANK

to write

=head1 VERSION

 Version 0.5.6 29.01.2006 Michael Kirchner
 Copyright (c) 2005 Michael Kirchner, Marko Moeller
 Bei Fragen, Wünschen, Anregungen mail to: michael@hirnreck.de
 This program is free software; you can redistribute it and/or
 modify it under the same terms as Perl itself.
    I AM NOT RESPOSIBLE FOR ANY PROBLEMS THAT
         THIS MAY CAUSE WHATSOEVER.


=head1 HISTORY

=over

=item 0508280000

M. Moeller: Auf neue Navtabs angepasst, Navigationshilfe und w3c eingepflegt

=item 0511160000

M. Kirchner: viel Aenderungen, UTF-8, Dokumentation, Aufgaben statt Durchlauf

=item 0511180000

Gruppen koennen Gruppen enthalten

=item 0601290000

Kleinere Aenderungen, Navbartitel

=back

=head1 TODO

=over

=item 
Schreiben der Dokumention zu Sitemap, Navbar und Datenbank

=item 
Verbessern der Aktualisierung, Anzeige von fehlenden Dateien
Ausgabe von neuen Dateien

=item 
Einbinden von pdf und sonstigen Dokumentformaten in die Sitemap.
Am besten so, dass jeweils nur die Dateiendung und Groesse angezeigt wird.

=item 
Einbinden von Joachims Navbar-ersetzungs-skript und 
verwendung desselben mit zusaetzlichen Spalte in
site.data um spezifisch jede html-Datei mit einer
eigenen Navbar auszustatten. Hierzu muss besonders
ein Mechanismus erdacht werden, der es erlaubt nur die
geaenderten Navbars auszutauschen.

=item
Pflege der site.data erleichtern, indem fuer neue Seiten gleich
eine Eingabemaske bereitgestellt wird, in der neue Seiten
plaziert werden koennen.


=back

=head1 BUGS

Bugs? Welche Bugs? Bei mir gibt es keine Felher!
Ansonsten: michael@hirnreck.de
		 
=cut



use File::Find;
require HTML::HeadParser;
use POSIX qw(strftime);
POSIX::setlocale(LC_TIME, "De");
use Getopt::Long;
use Pod::Usage;
use warnings;

my $verbose = 0;                    # frequently referred
my $debug = 0;                      # frequently referred
my %options = ('verbose' => \$verbose, 'debug' => \$debug );
Getopt::Long::Configure ("bundling");
GetOptions (
		\%options, 
		'verbose|v', 
		'verbosefile=s',
		'debug|d+',
		'debugfile=s',
		'hilfe|help|h|?:s'
		) or Pod::Usage->pod2usage(1)
		;


 
$datafile = 'site.data';        # Dateiname der Flattext Datenbank
$unsorted = 'Nicht zugeordnet'; # Gruppe, mit noch nicht zugeordneten Elementen
$noshow = 'Nicht anzeigen';     # Gruppe, mit nicht anzuzeigenden Elementen
$urlmatch = qr/^\./;            # Wird in der Ausgabe
$urlreplace = '.';              # in jedem relativen Link ersetzt
$newdir = '..';                 # Zielverzeichnis fuer Start
$navbarkopf = '';               # Initalisierung Navbarkopf
$Version = '0.5.6';



my @files;    # Enthaelt die gefundenen *.html/*.htm Dateinamen mit Pfad von ./
my @pdffiles; # Enthaelt die gefundenen *.pdf Dateinamen mit Pfad von ./
my %navbar;   # Enthaelt die erzeugeten Navbars als Hash of Lists
my %datafiles;# Enthaelt die Dateinamen im datafile ./
my %data;     # Enthaelt die Eintraege von $datafile als Hash of Lists


if (exists $options{'hilfe'}) {
	if ($options{'hilfe'} eq '' ) {
		pod2usage(1);
	}
	else {
		pod2usage( { -verbose => 99,
				-exitval => 1,
				-sections => "$options{'hilfe'}", });
	}
}


if (@ARGV < 1 ) {
	Pod::Usage->pod2usage(0);
}



if ($verbose) {
	if (exists($options{'verbosefile'})) {
		open VERBOSEOUT, ">$options{'verbosefile'}" 
				or die "Cannot open verbose output %s", $options{'verbosefile'};
	}
	else { open VERBOSEOUT, ">-" or die "Cannot open verbose output to console.";}
}
if ($debug) {
	if (exists($options{'debugfile'})) {
		open DEBUGOUT, ">$options{'debugfile'}" 
				or die "Cannot open debug output %s", $options{'debugfile'};
	}
	else { open DEBUGOUT, ">-" or die "Cannot open debug output to console.";}
}


my $Aufgabe = shift @ARGV;
unless (defined ($Aufgabe)) {
		die ('Keine Aufgabe angegeben');
};

# Main

#Zielverzeichnis zum aktuellen Verzeichnis machen
chdir ($newdir);

# amn = aktualisieren, map erstellen, navbar erstellen
# => es muss die site.data eingelesen werden
if ($Aufgabe =~ /[amnw]/i) {
	&readsite;
	&crawl;
	&checknew;
}

# a = aktualisieren
# => es werden die vorhandenen Daten abgesucht und neu in site.data geschrieben
if ($Aufgabe =~ /a/i) {
	&validatesite;
	&writesite;
}

# amn = aktualisieren, map erstellen, navbar erstellen
# => links relativ zur sitemap setzen
# aus dem Header der HTML evtl. Titel nachlesen
if ($Aufgabe =~ /[mn]/i) {
	&baselinks;
	&readheader;
}

# m = map erstellen
if ($Aufgabe =~ /m/i) {
	&makesitemap;
}

# n = navbar erstellen
if ($Aufgabe =~ /n/i) {
	&makenavbar;
}

# w = navbar einlesen und einpflegen
if ($Aufgabe =~ /w/i) {
	&readnavbar;
	&writenavbar;
}

close VERBOSEOUT if $verbose;
close DEBUGOUT if $debug;

# Ende von Main


sub wanted {
# Wird fuer die Suche mit file::find benoetigt und gibt die gewuenschten Dateien an.
if (/\.html?$/) {push @files, $File::Find::name};
if (/\.pdf$/) {push @pdffiles, $File::Find::name};
}

sub crawl {
# sucht im aktuellen Verzeichnis und darunter nach Dateien, fuer jede wird Wanted
# aufgerufen
print VERBOSEOUT "Suche nach Dateien mit passenden Endungen" if $verbose;
find(\&wanted, '.');
print VERBOSEOUT ".\n" if $verbose;
}

sub readsite {
# Einlesen des Datafiles
		
print VERBOSEOUT "Lese Flattext Datenbank der Site" if $verbose;

open (DATAFILE, "<:utf8",$datafile) or die "Kann $datafile nicht oeffnen";
BASE: while (<DATAFILE>) {
# Wenn es eine Kommentarzeile ist
if (/^\s*#/) {
	push @Lines, $_;
	next BASE;
}

# Wenn es ein Eintrag ist, wo Dateien zu Gruppen geordnet werden
# Bzw die Kategorien und Ausgaben definiert werden
if (/^([^#].*)\t(.*)\t(.*)\t(.*)\t(.*)\t(.*)$/) {
	$adata = {};
	$adata->{'Gruppe'}=$1;
	if ($2 eq '' or $2 == 0 ) { $adata->{'Level'}='99' }
	else { $adata->{'Level'}=$2 ; }
	$adata->{'Stil'}=$3;
	$adata->{'Text'}=$4;
	$adata->{'Link'}=$5;
	$adata->{'Beschreibung'}=$6;
	$adata->{'Position'}=$.;
	# Kommentarzeilen werden zum folgenden Eintrag dazugerechnet
	@{$adata->{'Kommentar'}}=@Lines;
	@Lines = ();
	push @{$data{$1}}, $adata;
	# In Datafiles werden alle Dateinamen aus dem Datafile geschrieben
	# Dies ist notwendig, um nachher mit den gescannten Dateien zu vergleichen
	if ( not $adata->{'Link'} =~ /^http/i  ) {
		push @{$datafiles{$adata->{'Link'}}{'Ref'}} , $adata };
	}
}
close DATAFILE;

print VERBOSEOUT ".\n" if $verbose;
} # readsite


sub checknew {
# Die Liste der gescannten Dateien wird durchgesehen und mit
# den Dateien im Datafile verglichen um geloeschte und neue zu identifizieren
print VERBOSEOUT "Vergleiche Datenbank mit aktuellen html-Dateien" if $verbose;

foreach $file (@files) {
# Wenn die Datein im Datafile schon bekannt war,
# wird sie ihr eintrag in den datafiles markiert
if (exists $datafiles{$file} ) {
	$datafiles{$file}{'Nochda'} = 1;
	# hier kann auf Doppelte Eintraege gepfrueft werden
}
# neue Dateien werden in die Gruppe $unsorted genommen
# und ein Datafileeintrag angelegt
# Spaeter sollte dies interaktiv erfolgen
else {
	$adata = {};
	$adata->{'Gruppe'}=$unsorted;
	$adata->{'Level'}='99';
	$adata->{'Stil'}='';
	$adata->{'Text'}='';
	$adata->{'Link'}=$file;
	$adata->{'Beschreibung'}='';
	push @{$data{$unsorted}}, $adata;
	$datafiles{$file}{'Nochda'} = 1;
	push @{$datafiles{$file}{'Ref'}} , $adata ;
} #else exists
} # foreach file
print VERBOSEOUT ".\n" if $verbose;

print VERBOSEOUT "Vergleiche Datenbank mit aktuellen pdf-Dateien" if $verbose;
foreach $pdffile (@pdffiles) {
# Wenn die Pdf-Datei im Datafile schon bekannt war,
# wird sie ihr eintrag in den datafiles markiert
if (exists $datafiles{$pdffile} ) {
	$datafiles{$pdffile}{'Nochda'} = 1;
}
# neue Dateien werden in die Gruppe $unsorted genommen
# und ein Datafileeintrag angelegt
# Spaeter sollte dies interaktiv erfolgen
else {
	$adata = {};
	$adata->{'Gruppe'}=$unsorted;
	$adata->{'Level'}='99';
	$adata->{'Stil'}='';
	$adata->{'Text'}='';
	$adata->{'Link'}=$pdffile;
	$adata->{'Beschreibung'}='';
	push @{$data{$unsorted}}, $adata;
	$datafiles{$pdffile}{'Nochda'} = 1;
	push @{$datafiles{$pdffile}{'Ref'}} , $adata ;
} #else exists
} # foreach pdffile
print VERBOSEOUT ".\n" if $verbose;

} # sub checknew

sub validatesite {
print VERBOSEOUT "Suche nach fehlenden Links in der Datenbank" if $verbose;
# Jetzt soll geprueft werden, ob in $datafiles noch links
# zu Dateien, die nicht mehr existieren, ueberiggeblieben sind.
my $alleda=1;
foreach $file (keys %datafiles) {
	if (not (exists $datafiles{$file}{'Nochda'}) 
					and ($file =~ /^\.\//i)) {
		if ($alleda == 1) {
			print "\n\nFolgende Links aus $datafile sind nicht mehr aufzufinden.\n";
			print "Die entsprechenden Dateien sind vermutlich geloescht und sollten\n";
			print "auch per Hand aus $datafile enfernt werden.\n";
			print "Im Momement werden sie weiter in der Sitemap erscheinen,\n";
			print "wenn sie dort vorher aufgetaucht waren.\n";
			$alleda = 0;
			# Hier koennte spaeter evtl. eine Routine ansetzten, die
			# gleich die bearbeitung der Eintraege erlaubt
		}
		print ($file,"\n");
		# Der Eintrag wird auch in datafiles geloescht
		# um spaeter nicht noch als Datei angesprochen zu werden
		# allerdings bleibt der Eintrag in %data erhalten.
		delete $datafile{$file};
	}	
}
if ($verbose and $alleda) {
	print ".\nKeine fehlenden Links in $datafile gefunden.\n";
}

# Ausgabe der Dateien, die im site.data vorhanden 
# sind, aber noch nicht zugeordnet wurden
if (exists $data{$unsorted} and @{$data{$unsorted}}) {
	print ".\nFolgende Dateien sind im $datafile als nicht zugeordnet gekennzeichnet.\n";
	print "Die entsprechenden Dateien wurden vermutlich nach der letzten Bearbeitung\n";
	print "von $datafile ins CVS zugefuegt und muessen von Hand an die richtigen \n";
	print "Stellen $datafile eingepflegt werden. Zur Erleichterung wurden sie jetzt\n";
	print "bereits ans Ende von $datafile eingetragen.\n";
	print "Im Moment wuerden sie nicht in der Sitemap erscheinen.\n";
	# Hier koennte spaeter evtl. eine Routine ansetzten, die
	# gleich die bearbeitung der Eintraege erlaubt
	foreach $adata (@{$data{$unsorted}}){
		print ($adata->{'Link'},"\n");
	}
}


} # validatesite


sub writesite {

print VERBOSEOUT "Die Datenbank wird neu geschrieben" if $verbose;
# Das Datafile wird neu geschrieben, jetzt mit den neuen, nicht zugeordneten Dateien
open (DATAFILE, '>:utf8',$datafile) or die "Kann $datafile nicht oeffnen";

foreach $agroup (sort {
	# Die Sortierreihenfolge entspricht der Reihenfolge im Datafile
	# 'Position' enthaelt jeweils die Zeilennummer
	(exists($data{$a}[0]->{'Position'}) ? $data{$a}[0]->{'Position'} : 999999)
			<=>
	(exists($data{$b}[0]->{'Position'}) ? $data{$b}[0]->{'Position'} : 999999)
			||
		$a  cmp  $b
    	}
	keys %data) {
	foreach $adata (@{$data{$agroup}}){

		foreach (@{$adata->{'Kommentar'}}) {print DATAFILE};

		printf DATAFILE "%s\t%s\t%s\t%s\t%s\t%s\n",
			$adata->{'Gruppe'},
			$adata->{'Level'},
			$adata->{'Stil'},
			$adata->{'Text'},
			$adata->{'Link'},
			$adata->{'Beschreibung'}
			;
	} # foreach adata
} # foreach group

close DATAFILE;
print VERBOSEOUT ".\n" if $verbose;
} #writesite

sub baselinks {
print VERBOSEOUT "Anpassung der Links, wenn die Sitemap nicht in Siteroot ist" if $verbose;
# Nachdem das Datafile geschrieben ist, werden die Links
# veraendert, damit die Sitemap auch an einer anderen Stelle 
# als der siteroot stehen kann.
foreach $agroup (keys %data) {
	foreach $adata (@{$data{$agroup}}){
		if ( not $adata->{'Link'} =~ /^http/i  ) {
			$adata->{'Link'} =~ s/$urlmatch/$urlreplace/  ;
		}
	} # foreach adata
} # foreach group
print VERBOSEOUT ".\n" if $verbose;
}

sub readheader {
print VERBOSEOUT "Fehlende Texte aus den html-Headern auslesen" if $verbose;
# Jede Datei wird geprueft, wenn schon ein Text vorliegt
# wird er verwendet, sonst schaut man nach dem Titel der html-datei.
# und in den <Meta name="title" content="XXXX"> eintrag im Header
# All das funktioniert nicht gut, weil gemischt vorhandene Elemente
# nicht geprueft werden und fuer die neuen Dateien keine Infos
# aufgenommen werden
foreach $file (@files) {

	foreach $adata (@{$datafiles{$file}{'Ref'}}){
		if ( not exists($adata->{'Text'})
				or ($adata->{'Text'} eq "" )) {
		
			# Einen Parser oeffnen und den Header der Datei lesen
			# vielleicht finden wir ja da einen Text zum Eintrag
			
			$p = HTML::HeadParser->new;
			open (my $fh, "<:utf8",$file) or die "Kann $file nicht oeffnen";
			$p->parse_file($fh);

			$title = $p->header('Title');
			if (not defined $title) {$title = $p->header('X-Meta-title') }
			if (not defined $title) {$title = "" }
			close ($fh);

			# Eine kurze Bemerkung zum Thema Unicode:
			# Da site.data und die map_*.html in UTF8 sind
			# und alle anderen eingelesenen Seiten in utf8 oder 8859-1
			# macht perl alle Konversionen automatisch. Dies wird
			# schiefgehen, sobald jemand sich nicht an die encodings haelt
			# oder eine Euro in den Ueberschriften haben will.
			#open (my $fh, "<",$file) or die ("Konnte $file nicht oeffnen.\n");
			#ein versuch mit Unicode
			#$type = $p->header('Content-Type');
			#if (not defined $type) {$type = "Not defined" }
		    #unless ($type =~ /charset=UTF-8/i) {
			#	if ($debug) {print DEBUGOUT $file."\t".$type."\t"};
			#	if ($debug) {print DEBUGOUT $title."\t"};

			#	#$title =~ s/ü/&uuml;/;
			#	#$title =~ s/Ü/&Uuml;/;
			#	#$title =~ s/ö/&ouml;/;
			#	#$title =~ s/Ö/&Ouml;/;
			#	#$title =~ s/ä/&auml;/;
			#	#$title =~ s/Ä/&Auml;/;
			#	#$title =~ s/ß/&szlig;/;
			#	if ($debug) {print DEBUGOUT $title};
			#	if ($debug) {print DEBUGOUT "\n"};
			#}
			#close $fh;

			$adata->{'Text'} = $title;
		}
	} # foreach adata
} # foreach file

print VERBOSEOUT ".\n" if $verbose;
} #readheader


sub makesitemap { 

sub writemapgroup {

my ($agroup,$level) = @_;

my $intro = "";
		

# soll die Gruppe ueberhaupt ausgegeben werden?
if (($agroup->{'Level'}<=$sitemaplevel)and ($agroup->{'Beschreibung'} ne $noshow)) {
	for ($i=2;$i<$level;$i++) { $intro .= "\t" };

	# Fuer jede Gruppe einen Link, wenn es das oberste Level ist
	if ($level == 2) {
		printf OUTFILE "\n$intro<a name=\"%s\"></a>\n",$agroup->{'Link'};
	}
			
	# Fuer jede Gruppe eine Ueberschrift, wenn nicht leer
	if ($agroup->{'Text'} ne '') {
		printf OUTFILE "\n$intro<h$level>%s ",
				$agroup->{'Text'};
		if ($level == 2) { printf OUTFILE "<a href='#Top'>^</a>"; }
		printf OUTFILE "</h$level>\n";
	}
			
	# Fuer jede Gruppe einen Beschreibungstext
	if ($agroup->{'Beschreibung'} ne '') {
		printf OUTFILE "$intro%s\n", $agroup->{'Beschreibung'};
	}

	
	# und jetzt eine Liste
	if ($agroup->{'Link'} ne '') {
		print OUTFILE "$intro<ul>\n";
		# und jetzt die Elemente der Gruppe
		foreach $adata (@{$data{$agroup->{'Link'}}}){
			if (($adata->{'Level'}<=$sitemaplevel) 
					and ($adata->{'Beschreibung'} ne $noshow)) {
					
				# Eine Gruppe als Link -> Untergruppe
				if ($adata->{'Link'} !~ /^http|\./) {
					printf OUTFILE "$intro<li> ";
					&writemapgroup ($adata,$level+1);
					printf OUTFILE "$intro</li>\n",
				}
				# Keine Untergruppe 
				else {
					# wenn kein Text definiert ist, wird Pfad+Datei verwendet
					printf OUTFILE "$intro<li> <a href=\"%s\"> %s </a>\n$intro\t%s </li>\n",
				       	$adata->{'Link'},
				       	($adata->{'Text'} ne "")? $adata->{'Text'}:$adata->{'Link'},
				       	($adata->{'Beschreibung'} ne "")?
								$adata->{'Beschreibung'}:" ";
				}
			}
		} # foreach adata
		printf OUTFILE "$intro</ul>";
	}

	

} # sitemaplevel

} # sub writemapgroup

		
print VERBOSEOUT "Die Sitemap(s) werden geschrieben: " if $verbose;
# Nun werden die Ausgabe-html Dateien geschrieben.
foreach $atype (@{$data{'perl-sitemap'}}) {
	$outfile = $atype->{'Text'};
	#$sitemapstil = $atype->{'Stil'};
	$sitemaplevel = $atype->{'Level'};
	$sitemaptitle = $atype->{'Beschreibung'};
	$kato = $atype->{'Link'};
    print VERBOSEOUT $outfile if $verbose;
	open (OUTFILE, '>:utf8',$outfile) or die "Kann $outfile nicht oeffnen";
	$Datum = strftime "%A, %d. %B %Y %H:%M:%S", localtime( time);

	$sitemapkopf = <<EOT;
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html lang="de">
<head>
	<title>$sitemaptitle</title>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" href="styles/de.css" media="screen" type="text/css" />
	<link rel="stylesheet" href="styles/de_print.css" media="print" type="text/css" />
	<link rel="stylesheet" title="mit Navbar" href="styles/de_navbar.css" media="screen" type="text/css" />
	<link rel="alternate stylesheet" title="ohne Navbar" media="screen" href="styles/de_nonavbar.css" type="text/css" />
	<meta http-equiv="Content-Style-Type" content="text/css" />
	<meta name="version" content="$outfile,V$Version $Datum $ENV{'USERNAME'}" />
	<meta name="author" content="$ENV{'USERNAME'}" />
	<style type="text/css">
        	/*<![CDATA[*/
        	<!--
        	\@import url("styles/inst_de.css");
        	-->
        	/*]]>*/
        </style>
     <link rel="stylesheet" type="text/css" href="http://www.openoffice.org/branding/css/print.css" media="print" />
     <link rel="shortcut icon" href="http://www.openoffice.org/favicon.ico" />

	<meta name="keywords" content="OpenOffice.org, Open Office, OpenOffice, openoffice, StarOffice, Star Office, OOo, ooo, xml, open source, developer, UNO" />
	<meta name="description" content="de.OpenOffice.org: Sitemap" />

<!-- >
	Kommentare zur Seite
	Achtung: Diese Seite wird automatisch mit dem Skript makemap.pl erzeugt.
	Sie kann zwar direkt verändert und korrigiert werden, allerdings gehen
	Änderungen, die	nicht auch in der Flattext Datenbank site.data eingepflegt
	werden, beim nächsten überschreiben verloren. Im Zweifelsfall bitte auf
	devde um die Änderung bitten.
	\$Id: makemap.pl,v 1.8 2006/08/15 06:52:27 markomlm Exp $
< -->



</head>
<body>


<a name="Top"></a>
<div id="body2">
<table id="main2" summary="body2">
<tr>
<td id="body2td">
<div id="body2col">

<div id="toptabs2">

EOT

$sitemapfuss = <<EOT2;


<p>
    <a href="http://validator.w3.org/check?uri=referer"><img
        src="http://www.w3.org/Icons/valid-xhtml10"
        alt="Valid XHTML 1.0 Transitional" height="31" width="88" /></a>
</p>
</div>
</body>
</html>
EOT2

	print OUTFILE $sitemapkopf;
	# ueber alle Gruppen in der Kategorie
	# Eine Linkliste zu den Gruppen steht am Anfang.
	print OUTFILE "\n<ul>";
	foreach $agroup (@{$data{$kato}}) {
		if (($agroup->{'Level'}<=$sitemaplevel) 
					and ($agroup->{'Beschreibung'} ne $noshow)){
			printf OUTFILE "\n<li><a href=\"#%s\">%s</a></li>",
					$agroup->{'Link'},
					$agroup->{'Text'};
		}
	}
	print OUTFILE "\n</ul>\n</div>\n<br /><br />";
	print OUTFILE '<hr noshade="noshade" size="1" />';
	print OUTFILE "\n</div>\n</td>\n</tr>\n</table>";



	# Dann folgt die Seitenueberschrift
	print OUTFILE "\n<h1>$sitemaptitle</h1>\n";


	
	# Jetzt wird Gruppenweise geschrieben
	# wobei jeder Gruppe von einer Zeile mit der
	# Richtigen Kategorie referenziert wird
	foreach $agroup (@{$data{$kato}}) {
    	&writemapgroup ($agroup,2);
	} 

	print OUTFILE $sitemapfuss;
	close OUTFILE;
    print VERBOSEOUT ", " if $verbose;
} # foreach perl-sitemap

print VERBOSEOUT ".\n" if $verbose;
} #makesitemap



sub makenavbar { 

sub writenavgroup {

my ($agroup,$level,$auswahl) = @_;

my $intro = "";
		

# soll die Gruppe ueberhaupt ausgegeben werden?
if ($agroup->{'Level'}<=$navbarlevel) {
	for ($i=1;$i<$level;$i++) { $intro .= "  " };

	# die liste oeffnen
	if ($level == 1) {
		print OUTFILE "$intro<ul id=\"$navbarstil\">\n";
		#Ueberschrift der gesamten Navbar
		print OUTFILE "$intro    <li><div >de-links</div></li>\n";
	}
	elsif ($level > 2 ) {
		# Fuer jede Gruppe eine Ueberschrift,
		# In Level=2 ist es eine Pseudokategorie,
		# die nur eine Auswahl aus einer Kategorie darstellen
		if ($agroup->{'Text'} ne '') {
			printf OUTFILE "$intro<li>%s\n", $agroup->{'Text'};
		}
		print OUTFILE "$intro  <ul>\n";
	}

	# und jetzt eine Liste
	if ($agroup->{'Link'} ne '') {
		foreach $adata (@{$data{$agroup->{'Link'}}}){
			if ($adata->{'Level'}<=$navbarlevel){
					
				# Eine Gruppe als Link -> Untergruppe
				if ($adata->{'Link'} !~ /^http|\./) {
						
					# Es gibt zwei Moeglichkeiten
					# entweder soll wirklich die gesamte Gruppe ausgegeben
					# werden oder es soll nur ein element der Gruppe
					# ausgegeben werden, der Rest nur mit einem Link auf
					# eine UEbersichtsseite
					if ($auswahl eq '') {
						# 1a) gesamte Gruppe, keine 2.Ebene ausgewaehlt, deshalb alle
						&writenavgroup ($adata,$level+1,$adata->{'Stil'});
					}
					elsif ($auswahl eq $adata->{'Link'} ) {
						# 1b) gesamte Gruppe die der gewaehlen 2. Ebene entspricht
						&writenavgroup ($adata,$level+1,$adata->{'Stil'});
					} else {
						# 2)	
						# Ausgabe als Ueberschrift mit
						# dem ersten Link mit passendem Level in der Gruppe
						foreach $bdata (@{$data{$adata->{'Link'}}}){
							if (($bdata->{'Link'} =~ /^http|\./) and 
									($bdata->{'Level'}<=$navbarlevel)) {
								printf OUTFILE
								"$intro  <li> <a href=\"%s\" title=\"%s\"> %s </a></li>\n",
				    			   	$bdata->{'Link'},
									(($adata->{'Beschreibung'} eq "") or
									($adata->{'Beschreibung'} eq $noshow))
									? " ": $adata->{'Beschreibung'},
								# wenn kein Text definiert ist, wird Ein Dummy verwendet
		    					   	($adata->{'Text'} ne "")? $adata->{'Text'}:'?????';
								last;
							}
						}
					}
				}
				# Keine Untergruppe als Link, es ist eine Datei oder URL angegeben
				else {
					printf OUTFILE
					"$intro  <li> <a href=\"%s\" title=\"%s\"> %s </a></li>\n",
				       	$adata->{'Link'},
						(($adata->{'Beschreibung'} eq "") or
						($adata->{'Beschreibung'} eq $noshow))
						? " ": $adata->{'Beschreibung'},
					# wenn kein Text definiert ist, wird Ein Dummy verwendet
		    		   	($adata->{'Text'} ne "")? $adata->{'Text'}:'?????';
						
				}
			}
		} # foreach adata
	}

	
	# die liste schliessen
	if ($level == 1) {
		printf OUTFILE "$intro</ul>\n";
	}
	elsif ($level > 2 ) {
		# Fuer jede Gruppe eine Ueberschrift
		print OUTFILE "$intro  </ul>\n";
		if ($agroup->{'Text'} ne '') {
			printf OUTFILE "$intro</li>\n";
		}
	}


	
} # navbarlevel
} # sub writenavgroup


		
	
print VERBOSEOUT "Die Navbars werden erzeugt und gespeichert:\n" if $verbose;
foreach $atype (@{$data{'perl-navbar'}}) {

	$outfile = $atype->{'Text'};
    print VERBOSEOUT $outfile if $verbose;
	$navbarstil = $atype->{'Stil'};
	# hack: ursprünglich sollten die Navbars mal unterschieden werden
	# dies sollte sich im Stil ausdruecken
	$navbarstil = 'navbar_de';
	# hack:ende
	$navbarlevel = $atype->{'Level'};
	$navbartitle = $atype->{'Beschreibung'};
	$kato = $atype->{'Link'};
	open (OUTFILE, '>:utf8', $outfile) or die "Kann $outfile nicht oeffnen";
	$Datum = strftime "%A, %d. %B %Y %H:%M:%S", localtime( time);

$navbarkopf = <<EOT;
	<!-- >
	Kommentare zur Navbar $navbartitle
	Makemapversion:
	\$Id: makemap.pl,v 1.8 2006/08/15 06:52:27 markomlm Exp $
	Navbar:
	$outfile ,V $Version $Datum $ENV{'USERNAME'}
	< -->
EOT

$navbarfuss = <<EOT;
EOT

	print OUTFILE $navbarkopf;

    &writenavgroup ($atype,1,'');

	print OUTFILE $navbarfuss;
	close OUTFILE;
    print VERBOSEOUT ", " if $verbose;
} # foreach perl-navbar

print VERBOSEOUT ".\n" if $verbose;
} #makenavbar


sub readnavbar {
# Einlesen der Navbars
		
print VERBOSEOUT "Lese Navbar:\n" if $verbose;

foreach $atype (@{$data{'perl-navbar'}}) {
		
	my $navfile = $atype->{'Text'};
	my $navstil = $atype->{'Stil'};
    print VERBOSEOUT $navfile if $verbose;
	open (NAVFILE, "<:utf8",$navfile) or die "Kann $navfile nicht oeffnen";
	NAVREAD: while (<NAVFILE>) {
		push @{$navbar{$navstil}}, $_;
	}
	close NAVFILE;
    print VERBOSEOUT " " if $verbose;
}

print VERBOSEOUT ".\n" if $verbose;
} # readnavbar


sub writenavbar {

my @sourcefile; 
my @navbar ;
my $startpos; 
my $endpos;
my $startnavflag= qr/<!-- Start Navbar -->/;
my $endnavflag= qr/<!-- End Navbar -->/;
		
# Schreiben der Navbars
print VERBOSEOUT "Schreibe Navbar(s) in html-Dateien: \n" if $verbose;


ALLFILE: foreach $file (@files)  {

   	print VERBOSEOUT "\n$file" if $verbose;
	# soll ueberhaupt eine Navbar angelegt werden?

	# ersmal alle File-styles pruefen
	$navbarstil = '';
	foreach $adata ( @{$datafiles{$file}{'Ref'}}) {
		if ($adata->{'Stil'} ne '') {
			$navbarstil = $adata->{'Stil'};
			last; 
		}
	}
	
	# wenn er immer noch fehlt, dann den ersten gruppenstil nehmen, wenn existent
	if ($navbarstil eq '' ) {
		$adata = $datafiles{$file}{'Ref'}[0];
		$gruppe = $adata->{'Gruppe'};
		if ($gruppe ne $unsorted) {
			$adata = $data{$gruppe}[0];
			$navbarstil = $adata->{'Stil'};
		}
	}

	
	if ($navbarstil ne '' ) {

		# Einlesen der html-Datei in ein Array
		open (HTMLFILE, "<:utf8",$file) or die "Kann $file nicht oeffnen";
		@sourcefile = ();
		local ($/) = "\012";
		while (<HTMLFILE>) {
			s/\015?\012/\n/g;
			push @sourcefile, $_;
			print DEBUGOUT if ($debug);
		}
    	print VERBOSEOUT "<" if $verbose;
		close HTMLFILE;

		

		# Finden der Start und Endpunkte der Navbar		
		$startpos = -1;
		$endpos = -1;
		for ($i = 0; $i <= $#sourcefile; $i++) {
			if ($sourcefile[$i] =~ /$startnavflag/ig) { $startpos = $i }
			if ($sourcefile[$i] =~ /$endnavflag/ig) { $endpos = $i }
		} 

		# Fehlende oder falsche Endpunkte?		
		print DEBUGOUT ($startpos,' ',$endpos) if $debug>1;	
		if (($startpos == -1) or ( $startpos >= $endpos)) {next ALLFILE;}

		# Alle Links in der vorbereiteten Navbar sind Relativ von siteroot
		# das muss geaendert werden
		@navbar = ();
		foreach my $Line (@{$navbar{$navbarstil}}) {
			$newLine = $Line;
			while ($newLine =~ m/href=\"(\.\/[^"]*)\"/ ) {
				# ueber alle _relativen_ Links in der Navbar
				# achtung, dabei wird der fuehrende Punkt 
				# als Indikator fuer die aenderung entfernt
				# das sollte mit \G noch besser gehen, aber wie?
				$link = $1;
				print DEBUGOUT ($link," -> ") if $debug>1;	
				# Aufspalten in Verzeichnisebenen
    			@filetree = split /\//,$file;
				# Aufspalten in Verzeichnisebenen, fuer jeden Link
    			@linktree = split /\//,$link;

				# Gleiche Ebenen loeschen, mindestens den Punkt behalten
				while (     ($#filetree > 0) 
						and ($#linktree > 0) 
						and ($filetree[1] eq $linktree[1]) ) {
					print DEBUGOUT (" -> ") if $debug>1;	
					splice @filetree,1,1;
					splice @linktree,1,1;
				} 

				#Fuer jede verbliebene Ebene im file ein .. zufuegen
				for (1 .. $#filetree-1) {
					print DEBUGOUT (" .. -> ") if $debug>1;	
					splice @linktree,1,0,('..');
				}

				# den Punkt weg
				shift @linktree;
				
				# und wieder zusammen
				$linknew = join ('/',@linktree);
				print DEBUGOUT ("\n",$link,"=>",$linknew,"\n") if $debug;	
				if (length($linknew)) {
					$newLine =~ s/$link/$linknew/;
					print DEBUGOUT ($newLine,"\n") if $debug;	
				}
				# wenn der neue Link leer ist, sind wir auf der Seite
				# Diese soll besonders behandelt werden, der Link
				# verschwindet, stattdessen nur Text
				else {
					$newLine =~ s/\<a href=\"$link\" .*?> (.*) \<\/a\>/$1 /;
					print DEBUGOUT ($newLine,"\n") if $debug;	
				}
			}
			push @navbar, $newLine;
		}
		
		# Einfuegen der Navbar in das Dateiarray
    	@removed = splice @sourcefile,$startpos+1,$endpos-$startpos-1,@navbar;

		# wenn die entfernten gleich den neuen sind, brauchen wir die Datei nicht
		# schreiben.
    	if (&compare_navbar(\@removed,\@navbar)) {
    		print VERBOSEOUT "-> " if $verbose;
			next ALLFILE;
		} 
		

		# Schreiben der Datei
		open (HTMLFILE, ">:utf8",$file) or die "Kann $file nicht oeffnen";
		foreach (@sourcefile) {
			print HTMLFILE;
		}
    	print VERBOSEOUT "w> " if $verbose;
		close HTMLFILE;
	} # if defined stil
}

print VERBOSEOUT ".\n" if $verbose;


} # writenavbar

    sub compare_navbar {
        my ($first, $second) = @_;
        no warnings;  # silence spurious -w undef complaints
        return 0 unless @$first == @$second;
        for (my $i = 4; $i < @$first; $i++) {
            return 0 if $first->[$i] ne $second->[$i];
        }
        return 1;
    }

