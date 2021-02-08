#!/bin/bash

# ****************************************************************************
# ** Ce programme permet de cr�er les zip de la documentation de OOo        **
# **                                                                        **
# ** Programme cr��     le 01/09/04 par Tony GALMICHE                       **
# **           modifi�  le 27/08/06 par Tony GALMICHE                       **
# ****************************************************************************

# ****************************************************************************
function ZipOOo()
{
	CHEMIN=/CVS/fr/www
	echo
	date
	echo "********************************************************************"
	echo "** Traitement $2/$3 "
	echo "********************************************************************"

	NbModif=`find $CHEMIN/$1 -newer $CHEMIN/$2/$3 | wc -l`
	if [ $NbModif != 0 ] ; then
			cd $CHEMIN/$1
			rm -f $CHEMIN/$2/$3
			#zip -r $CHEMIN/$2/$3 . -i *.*
			#zip -r $CHEMIN/$2/$3 . -x \*Root -x \*Entries -x \*Repository -x \*Template -x \*CVS\/
			# Le param�tre -x permet de ne pas prendre en compte les dossiers CVS
			zip -r $CHEMIN/$2/$3 . -x \*CVS\/\*
		
			cd $CHEMIN/$2
			cvs -t commit -m "Mise � jour du Zip" $3
	else
		echo "Aucune mise � jour � �ffectuer"
	fi
}
# ****************************************************************************

ZipOOo "/Documentation/Exemples" 		"Documentation/zip/exemples.zip" 	"exemplessxw.zip" 	
ZipOOo "/Documentation/Exercices" 		"Documentation/zip/exercices.zip"	"exercicessxw.zip" 	
ZipOOo "/Documentation/Gallery" 	 	"Documentation/zip/gallery.zip" 	"galleryzip.zip" 	
ZipOOo "/Documentation/Guides"       		"Documentation/zip/guides.zip" 		"guidessxw.zip"    	

ZipOOo "/Documentation/Macros"       		"Documentation/zip/macros.zip" 		"macrossxw.zip"    	
ZipOOo "/Documentation/modele"      		"Documentation/zip/modele.zip" 		"modelesxw.zip"  	
ZipOOo "/Documentation/Outils"       		"Documentation/zip/outils.zip" 		"outilszip.zip"    	

ZipOOo "/Documentation/How-to/Basic" 		"Documentation/How-to/zip" 		"basic2_zip.zip" 	
ZipOOo "/Documentation/How-to/Bdd"	 	"Documentation/How-to/zip" 		"bdd_zip.zip" 		
ZipOOo "/Documentation/How-to/calc" 		"Documentation/How-to/zip" 		"calc_zip.zip" 		
ZipOOo "/Documentation/How-to/Draw" 		"Documentation/How-to/zip" 		"draw_zip.zip" 		
ZipOOo "/Documentation/How-to/General"		"Documentation/How-to/zip" 		"general_zip.zip" 	
ZipOOo "/Documentation/How-to/impress" 		"Documentation/How-to/zip" 		"impress.zip" 		
ZipOOo "/Documentation/How-to/Math" 		"Documentation/How-to/zip" 		"math_zip.zip" 		
ZipOOo "/Documentation/How-to/programmation"	"Documentation/How-to/zip" 		"programmation.zip" 	
ZipOOo "/Documentation/How-to/writer" 		"Documentation/How-to/zip" 		"writer2_zip.zip" 	
 
ZipOOo "/Marketing/matexpo/Documents"		"Documentation/zip/migration.zip"	"migrationsxw.zip" 	"$sxw" 
