#!/bin/bash
# Copyright 2005, Robert Ludvik <r@aufbix.org>
# Thanks to Tim Kosse <tim.kosse@filezilla-project.org> for inspiration
# and
# Martin Srebotnjak <miles@filmsi.net> for pointing me 'there'.
#
# This script is free software; you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation; either version 2 of the License, or
# (at your option) any later version.
#
# It is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this file; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA



# set sums to 0
sumTR=0
sumFZ=0
sumUT=0

# write HTML head procedure
write_html_head()
{
    cat > whead.tmp << "EOF"

 <!--
<html lang="sl">
 -->
<title>Statistika prevoda OpenOffice.org</title>

 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <meta http-equiv="Content-Style-Type" content="text/css" />
 <meta name="version" content="3.5.1.19.8" />
 <style type="text/css"> /* <![CDATA[ */
 <!--
 @import "branding/css/tigris.css";
 @import "branding/css/inst.css";
 -->
 /* ]]> */</style>
     <link rel="stylesheet" type="text/css" href="/branding/css/print.css" media="print" />
 <link rel="shortcut icon" href="http://www.openoffice.org/favicon.ico" />
  <script src="/branding/scripts/tigris.js" type="text/javascript"></script>
	<meta name="keywords" content="OpenOffice.org, Open Office, OpenOffice, openoffice, StarOffice, Star Office, OOo, ooo, xml, open source, developer, UNO" />
	<meta name="description" content="OpenOffice.org: Odprt pisarniški paket" />
	<meta name="GENERATOR" content="OpenOffice.org 2.0" />
	<meta name="CREATED" content="20060212;16131300" />
	<meta name="CHANGED" content="20060212;22553100" />
	<meta name="KEYWORDS" content="OpenOffice, open office, office suite, office, international office, linux, Linux, Linux Office, Collaboration, Companies, Open Source, UNO, Java, StarOffice" />
</head>
<body>
<h4>Različica <a href="ftp://ftp.linux.cz/pub/localization/OpenOffice.org/devel/680/OOF680_m4/">OOF680_m4</a> - za OOo 2.2</h4>
<p>Zadnjič posodobljeno: 
EOF

date +%e.%m.%Y >> whead.tmp

cat >> whead.tmp << "EOF"
</p>
<h4>Legenda</h4>
<table width="80%" style="margin: auto;" border="1">
<tr><td><img src="/pics/prevedeno.png" style="border:0" alt="Prevedeno" /></td>
<td>Prevedeno</td><td><img src="/pics/rdeca-pika.png" style="border:0" alt="Neprevedeno" /></td><td>Neprevedeno</td></tr> <tr>
<td><img src="/pics/skarje.png" style="border:0" alt="Prvi pregled" /></td><td>Prvi pregled</td>
<td><img src="/pics/lupa.png" style="border:0" alt="Preverjanje črkovanja" /></td><td>Preverjanje črkovanja</td></tr>
<tr><td><img src="/pics/lektoriranje.png" style="border:0" alt="Lektoriranje" /></td><td>Lektoriranje</td>
<td><img src="/pics/kljukica.png" style="border:0" alt="Dokončano" /></td><td>Dokončano</td></tr>
</table>

<!--
<h4>Legenda</h4>
<table border="1">
<tr><td><img src="/pics/kljukica.png" alt="stanje"/></td><td>Datoteka je v celoti pregledana</td><td><img src="/pics/lupa.png" alt="stanje"/></td><td>Potreben je še mehanski pregled (črkovanje)</td></tr>
<tr><td><img src="/pics/skarje.png" alt="stanje"/></td><td>Pred mehanskim pregledom</td><td><img src="/pics/rdeca-pika.png" alt="stanje"/></td><td>Datoteka ima neprevedene nize</td></tr>
</table>
-->

<br/>
<table border="1">
<tr><td>Datoteka</td><td>Stanje</td><td>Prevedeno</td><td>Ohlapno</td><td>Neprevedeno</td><td>Prevajalec</td></tr>
EOF
}

# write HTML tail procedure
write_html_tail()
{
    cat > wtail.tmp << "EOF"
</table>
<p>
<a name="ff"></a>
<b>Podrobnosti o pomoči Filozofske fakultete</b><br/>
<a href="http://lojze.lugos.si/~spela/lokalizacija/">Spletna stran projekta</a> in 
<a href="http://prevajalci.ataco.si">oddelka za prevajalstvo</a>.<br/>
Seznam prevajalcev/prevajalk pod vodtsvom Špele Vintar, ki sodelujejo pri prevajanju:
</p>
<table border="0">
	<tr>
		<td style="width:150px">Bizjak Katja</td>
		<td style="width:150px">Karče Tina</td>
		<td>Prkič Katja</td>
	</tr>
	<tr>

		<td>Budkovič Neža</td>
		<td>Kobentar Jaka</td>
		<td>Rajhman Tina</td>
	</tr>
	<tr>
		<td>Debelak Anja</td>
		<td>Kogej Maja</td>

		<td>Semibratov Katja</td>
	</tr>
	<tr>
		<td>Dejak Špela</td>
		<td>Kordič Saša</td>
		<td>Simšič Tanja</td>
	</tr>

	<tr>
		<td>Džombič Edina</td>
		<td>Lešnik Urška</td>
		<td>Šraj Maja</td>
	</tr>
	<tr>
		<td>Gorjup Polona</td>

		<td>Lipovd Franci</td>
		<td>Šuster Simon</td>
	</tr>
	<tr>
		<td>Grajš Anja</td>
		<td>Ožura Ana</td>
		<td>Toni Tjaša</td>

	</tr>
	<tr>
		<td>Grčar Doroteja</td>
		<td>Praznik Irena</td>
		<td>Turk Petra</td>
	</tr>
</table>
<p><a href="http://validator.w3.org/check?uri=referer"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="Veljaven XHTML 1.0 Strict" height="31" width="88" /></a></p>
</body>
</html>
EOF
}

# OK, let's start

write_html_head

# for every PO file I find I run statistics
# define translator

for i in `find . -name "*.po"`;
	do
	echo $i;

	# the greatest translator ;-)
	translator="Martin Srebotnjak"
	# first case is for defining translator
	# if this is not Martin, write someone else in the field "Prevajalec"
	case "$i" in
		"./scalc/01.po" | "./scalc/guide.po" | "./shared/01.po" | "./shared/02.po" | "./shared/explorer/database.po" | "./shared/guide.po" | "./shared/optionen.po")
		translator="<a href=\"/pomoc2-1/stats-pomoc2.html#ff\">Filozofska fakulteta</a>"
		;;
		"./shared/autopi.po")
		translator="Martin Srebotnjak, Urška Colner"
		;;
		"./shared/00.po")
		translator="Martin Srebotnjak, <a href=\"/pomoc2-1/stats-pomoc2.html#ff\">Filozofska fakulteta</a>"
		;;
		"./sbasic/shared.po")
		translator="Vito Smolej"
		;;
		"./sdraw/guide.po" )
	        translator="Toni Tomanič"
		;;
		"./swriter/01.po" | "./swriter/guide.po")
		translator="Polona Gorjup"
		;;
		"./smath/01.po")
                translator="Vito Smolej"
                ;;
	esac

	# another case - for use of the state of the file (Stanje, 2nd column). 
	case "$i" in
		"./sbasic/guide.po" | "./sbasic/shared/01.po" | "./sbasic/shared/02.po" | "./scalc/00.po" | "./scalc/02.po" | "./scalc/04.po" | "./scalc/05.po" | "./scalc.po" | "./schart/00.po" | "./schart/01.po" | "./schart/02.po" | "./schart/04.po" | "./schart.po" | "./sdraw/00.po" | "./sdraw/01.po" | "./sdraw/04.po" | "./sdraw/guide.po" | "./sdraw.po" | "./shared/04.po" | "./shared/05.po" | "./shared/07.po" | "./shared/autokorr.po" | "./shared.po" | "./simpress/00.po" | "./simpress/01.po" | "./simpress/02.po" | "./simpress/04.po" | "./simpress/guide.po" | "./simpress.po" | "./smath/00.po" | "./smath/01.po" | "./smath/02.po" | "./smath/04.po" | "./smath/guide.po" | "./smath.po" | "./swriter/00.po" | "./swriter/02.po" | "./swriter/04.po" | "./swriter/guide.po" | "./swriter.po")
		STANJE="<img src=\"/pics/lektoriranje.png\" alt=\"Na poti v lektoriranje\"/>"
		;;
		"./scalc/01.po" | "./scalc/guide.po" | "./shared/00.po" | "./shared/01.po" | "./shared/02.po" | "./shared/explorer/database.po" | "./shared/guide.po" | "./shared/optionen.po" | "./swriter/01.po" | "./sbasic/shared.po" | "./shared/autopi.po")
		STANJE="<img src=\"/pics/skarje.png\" alt=\"Prvi pregled\"/>"
		;;
	esac

	# msgfmt don't return 0 if there is no string of one of the types
	# so we need to add one of all and then -1

	cp $i $i~
cat >> $i~ << "EOF"
	msgid "foobar1"
	msgstr ""
	
	msgid "foobar2"
	msgstr "foobar2"

	#, fuzzy
	msgid "foobar3"
	msgstr "foobar3"
EOF

    RES=`msgfmt $i~ -o /dev/null --statistics 2>&1`
    TR=$[`echo $RES | sed -e 's/^[^0-9]*\([0-9]\+\)[^0-9]\+\([0-9]\+\)[^0-9]\+\([0-9]\+\)[^0-9]\+/\1/'` - 1]
    FZ=$[`echo $RES | sed -e 's/^[^0-9]*\([0-9]\+\)[^0-9]\+\([0-9]\+\)[^0-9]\+\([0-9]\+\)[^0-9]\+/\2/'` - 1]
    UT=$[`echo $RES | sed -e 's/^[^0-9]*\([0-9]\+\)[^0-9]\+\([0-9]\+\)[^0-9]\+\([0-9]\+\)[^0-9]\+/\3/'` - 1]

	# take care of sums
	let "sumTR += $TR"
	let "sumFZ += $FZ"
	let "sumUT += $UT"

	#clear
	rm $i~

	# write a row
	# if a file has untranslated strings ($UT > 0) then add red point pic (rdeca-pika.png) 
	
	SLIKCE="$STANJE"
	if [ $UT -gt 0 ]
	then
		SLIKCE="<img src=\"/pics/rdeca-pika.png\" alt=\"Neprevedeno\"/> ""$STANJE"
	fi
	if [ $UT -eq 0 ]
	then
		SLIKCE="<img src=\"/pics/prevedeno.png\" alt=\"Prevedeno\"/> ""$STANJE"
	fi
    echo "<tr><td><a href=\"/pomoc2-1/$i\">$i</a></td><td align=\"center\">$SLIKCE</td><td align=\"center\">$TR</td><td align=\"center\">$FZ</td><td align=\"center\">$UT</td><td>$translator</td></tr>" >> stats.tmp

done

	#sum all together
	let "sum = $sumTR+$sumFZ+$sumUT"

# clear some chars, sort
cat stats.tmp | sort | sed 's/\.\///' > stats.tmp1
rm stats.tmp

#write last row
echo "<tr><td>SKUPAJ:</td><td>&nbsp;</td><td align=\"center\">$sumTR</td><td align=\"center\">$sumFZ</td><td align=\"center\">$sumUT</td><td>$sum</td></tr>" >> stats.tmp1

#write HTML tail
write_html_tail

#create final HTML
cat whead.tmp stats.tmp1 wtail.tmp > stats-pomoc2.html

#clear
rm *.tmp *.tmp1

echo "Done, good job :-)"

