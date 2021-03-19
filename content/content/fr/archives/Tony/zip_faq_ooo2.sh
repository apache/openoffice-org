#!/bin/bash

# ****************************************************************************
# ** Ce programme permet de créer le zip de la FAQ de OOo                   **
# **                                                                        **
# ** Programme créé     le 19/10/04 par Tony GALMICHE                       **
# **           modifié  le __/__/__ par                                     **
# ****************************************************************************

function wget2()
{
	wget -r --no-parent $1
}


CHEMIN=/SAMBA/FaqOOo

cd $CHEMIN

rm -Rf $CHEMIN/fr.openoffice.org

wget2 http://fr.openoffice.org/FAQ/general_fr/index.html
wget2 http://fr.openoffice.org/FAQ/writer_fr/indexfr.html
wget2 http://fr.openoffice.org/FAQ/calc_fr/indexfr.html
wget2 http://fr.openoffice.org/FAQ/draw_fr/indexfr.html
wget2 http://fr.openoffice.org/FAQ/presentation_fr/index.html
wget2 http://fr.openoffice.org/FAQ/math_fr/index.html
wget2 http://fr.openoffice.org/FAQ/bdd_fr/indexfr.html
wget2 http://fr.openoffice.org/FAQ/shortk_fr.html
wget2 http://fr.openoffice.org/Mac/faq103.htm
wget2 http://fr.openoffice.org/FAQ/xml_fr/indexfr.html

wget -P $CHEMIN/fr.openoffice.org http://fr.openoffice.org/faq-fr.html

rm -f $CHEMIN/fr.openoffice.org/robots.txt

rm  -f faqooohtml.zip
zip -r faqooohtml.zip .

# ** Envoie sur le serveur CVS **********************************************
cp faqooohtml.zip /SAMBA/CVS/fr/www/Documentation/zip/faq.zip/
cd /SAMBA/CVS/fr/www/Documentation/zip/faq.zip
cvs -t commit -m "Mise à jour du Zip de la FAQ" faqooohtml.zip
# ***************************************************************************

