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

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="sl" xml:lang="sl">
<head>
 <title>Statistika prevoda OpenOffice.org</title>
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <meta http-equiv="Content-Style-Type" content="text/css" />
 <meta name="version" content="3.5.1.19.8" />
 <meta name="keywords" content="OpenOffice.org, Open Office, OpenOffice, openoffice, StarOffice, Star Office, OOo, ooo, xml, open source, statistika, odprta koda" />
 <meta name="description" content="OpenOffice.org: Odprt pisarniški paket" />
 <link rel="stylesheet" type="text/css" href="/branding/css/print.css" media="print" />
 <link rel="shortcut icon" href="http://www.openoffice.org/favicon.ico" />
 <script src="/branding/scripts/tigris.js" type="text/javascript"></script>
 <style type="text/css"> /* <![CDATA[ */
 <!--
 @import "branding/css/tigris.css";
 @import "branding/css/inst.css";
 -->
 /* ]]> */</style>
</head>
<body>
<h2>Statistika prevodov za OOo - različica <a href="http://ftp.linux.cz/pub/localization/OpenOffice.org/devel/DEV300/DEV300_m71/">DEV300_m71</a> za OOo 3.x</h2>
<!--
<h2>Statistika prevodov za OOo - različica <a href="http://ftp.linux.cz/pub/localization/OpenOffice.org/devel/680/SRC680_m241/Build-1/"> m241 </a> - za OOo 3.0</h2>
-->
<p>Spodnje datoteke PO si lahko prenesete tudi kot <a href="/po/po.tar.gz">paket ZIP.</a> Za gradnjo jezikovnega paketa na svojem računalniku potrebujete <a href="http://aufbix.org/~r/gsi/GSI_sl.sdf.gz">izdelano datoteko GSI</a> (če je na voljo).</p>
</p>
<p>Orodje poconflict, ki je del paketa <a href="http://translate.sourceforge.net/wiki/">Translate toolkit</a> nam prikaže različne prevode istega sporočila v datotekah PO ("poconflicts --accelerator=~ po conflict", datoteke PO so v mapi "po", rezultat dobimo v mapi "conflict"). <a href="conflict.tar.gz">Datoteka z rezultati.</a></p>
<p>Stanje sporov: 136/49598 (oz. 290/48425 ob nerazlikovanju velikih/malih črk)</p>
<p>Prejšnje vrednosti: OOo 3.2 - 136/49479, OOo 3.1 - 126/50117, OOo 3.0 - 128/47944 (m19: 134/47927, m18: 145/47927, m6 - 153/47773, m5 - 235/47768, m4 - 385/47770, m2 - 484/47098), OOo 2.4 - 876/45723, OOo 2.3 - 1067/45870);</p>
<p>Zadnjič posodobljeno:
EOF

date +%e.%m.%Y. >> whead.tmp

cat >> whead.tmp << "EOF"
<br/>
Arhiv: datoteke pomoči za <a href="/pomoc2-1/stats-pomoc2.0.html">OOo 2.0.</a>, za 2.4.x pa <a href="/po/po-2.4.zip">te datoteke PO</a> oziroma <a href="http://aufbix.org/~r/gsi/GSI_sl-2.4.sdf.gz">GSI.</a>
</p>

<h4>Avtorske pravice</h4>
<p>Slovenski prevod OpenOffice.org je delo <a href="#slooo">ekipe OOo</a>. Prevod je izdan pod licenco LGPL. Uporaba prevoda brez navedbe imen prevajalcev je kazniva.</p>

<p4>Ekipa sl.ooo<a name="slooo"></a></p>
<p>Aktivni prevajalci: Martin Srebotnjak (vodja), Urška Colner (lektorica).</p>
<p>Pri prevodu pomoči od 2.1 do 3.0 so sodelovali Robert Ludvik, Martin Srebotnjak, Urška Colner, Vito Smolej.</p>
<p>Pri prevodu pomoči za različico 2.1 je pomagala Filozofska fakulteta.</p>

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
<tr><td>Datoteka</td><td>Stanje</td><td>Prevedeno</td><td>Ohlapno</td><td>Neprevedeno</td></tr>
EOF
}

# write HTML tail procedure
write_html_tail()
{
    cat > wtail.tmp << "EOF"
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
	translator = "<a href=\"/po/stats-ooo.html#slooo\">Ekipa sl.ooo</a>"
# prvi match je za Martina, drugi za Ursko, tretji za oba

	case "$i" in
		"./helpcontent2/source/text/sbasic/shared.po" | "./helpcontent2/source/text/scalc/guide.po")
		STANJE="<img src=\"/pics/skarje.png\" alt=\"Prvi pregled\" />"
		;;
		"./helpcontent2/source/text/swriter/guide.po")
		STANJE="<img src=\"/pics/lektoriranje.png\" alt=\"Lektoriranje\" />"
		;;
		"./helpcontent2/source/text/scalc/01.po" | "./helpcontent2/source/text/shared/01.po" | "./helpcontent2/source/text/shared/02.po" | "./helpcontent2/source/text/shared/autopi.po" | "./helpcontent2/source/text/shared/guide.po" | "./helpcontent2/source/text/swriter/01.po")
		STANJE="<img src=\"/pics/skarje.png\" alt=\"Prvi pregled\"/><img src=\"/pics/lektoriranje.png\" alt=\"Lektoriranje\" />"
		;;
		*)STANJE="<img src=\"/pics/kljukica.png\" alt=\"Dokončano\" />"
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

	# clear
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
    echo "<tr><td><a href=\"/po/$i\">$i</a></td><td align=\"center\">$SLIKCE</td><td align=\"center\">$TR</td><td align=\"center\">$FZ</td><td align=\"center\">$UT</td></tr>" >> stats.tmp

done

# sum all together
let "sum = $sumTR+$sumFZ+$sumUT"

# clear some chars, sort
cat stats.tmp | sort | sed 's/\.\///' > stats.tmp1
rm stats.tmp

#write sum of each status
echo "<tr><td>SKUPAJ:</td><td>$sum</td><td align=\"center\">$sumTR</td><td align=\"center\">$sumFZ</td><td align=\"center\">$sumUT</td></tr>" >> stats.tmp1

#write HTML tail
write_html_tail

#create final HTML
cat whead.tmp stats.tmp1 wtail.tmp > stats-ooo.html

# clear temporary files
rm *.tmp *.tmp1

echo "Done, good job ;-)"

