#!/bin/bash

# ****************************************************************************
# ** Ce programme permet de créer le zip de la FAQ du Wiki de OOo           **
# **                                                                        **
# ** Programme créé     le 16/06/07 par Tony GALMICHE                       **
# **           modifié  le __/__/__ par                                     **
# ****************************************************************************

function wgetFaqWiki()
{
	wget -r --level=1 --no-parent --html-extension --convert-links $1/$2
  	CHEM=/tmp/FaqWiki/wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ
	RetraiteFichier $CHEM/$2.html
	for fichier in $CHEM/$2/*
	do
		RetraiteFichier $fichier
	done

}

function RetraiteFichier()
{
	fichier=$1
	echo "-> Retraitement du fichier $fichier"
	cat $fichier | grep -B 10000 "Retrieved from" > /tmp/tmp.html
	cat $fichier | grep -B 10000 "</head>" > /tmp/head.html
	cat /tmp/head.html > $fichier
	echo '<body>' >> $fichier
	cat /tmp/tmp.html | grep -A 10000 "title=\"Edit section" >> $fichier
	DateZip=`date +%d-%m-%Y`
	echo "(ZIP du $DateZip)" >> $fichier
	echo '</body>' >> $fichier
}

CHEMIN=/tmp/FaqWiki

rm -Rf $CHEMIN
mkdir $CHEMIN
cd $CHEMIN

wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Generale"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Writer"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Calc"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Draw"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Impress"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Math"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Base"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Mac"
wgetFaqWiki "http://wiki.services.openoffice.org/wiki/Fr.openoffice.org/FAQ" "Xml"

cd /tmp/FaqWiki/wiki.services.openoffice.org/wiki/Fr.openoffice.org/
zip -r FAQ.zip FAQ
 
# # ** Envoie sur le serveur CVS **********************************************
cp FAQ.zip /CVS/fr/www/Documentation/zip/faq.zip/faqooohtml.zip
cd /CVS/fr/www/Documentation/zip/faq.zip
cvs -t commit -m "Mise à jour du Zip de la FAQ" faqooohtml.zip
# # ***************************************************************************

