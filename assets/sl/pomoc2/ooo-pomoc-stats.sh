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

<html lang="sl">
<head>
<title>Statistika prevajanja pomoči 2</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="Content-Style-Type" content="text/css" />
</head>
<body>
<p>Zadnjič posodobljeno: 
EOF

date +%e.%m.%Y >> whead.tmp

cat >> whead.tmp << "EOF"
</p>
<table align=center border=1>
<tr><td>Datoteka</td><td>Prevedeno</td><td>Ohlapno</td><td>Neprevedeno</td><td>Prevajalec</td></tr>
EOF
}

# write HTML tail procedure
write_html_tail()
{
    cat > wtail.tmp << "EOF"
</table>
<br>
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

	# if this is not Martin, write someone else in the field "Prevajalec"
	case "$i" in
		"./sbasic/shared.po" | "./scalc/01.po" | "./scalc/guide.po" | "./shared/00.po" | "./shared/01.po" | "./shared/02.po" | "./shared/autopi.po" | "./shared/explorer/database.po" | "./shared/guide.po" | "./shared/optionen.po" | "./simpress/01.po" | "./simpress/guide.po" | "./smath/01.po"| "./swriter/guide.po")
		translator=" - "
		;;

		"./sdraw/guide.po" )
	        translator="Toni Tomanič"
		;;

		"./swriter/01.po" )
		translator="Polona Gorjup"
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
    echo "<tr><td><a href="/pomoc2/$i">$i</a></td><td align=center>$TR</td><td align=center>$FZ</td><td align=center>$UT</td><td>$translator</td></tr>" >> stats.tmp

done

	#sum all together
	let "sum = $sumTR+$sumFZ+$sumUT"

# clear some chars, sort
cat stats.tmp | sort | sed 's/\.\///' > stats.tmp1
rm stats.tmp

#write last row
echo "<tr><td>SKUPAJ:</td><td align=center>$sumTR</td><td align=center>$sumFZ</td><td align=center>$sumUT</td><td>$sum</td></tr>" >> stats.tmp1

#write HTML tail
write_html_tail

#create final HTML
cat whead.tmp stats.tmp1 wtail.tmp > stats-pomoc2.html

#clear
rm *.tmp *.tmp1

echo "Done, good job :-)"

