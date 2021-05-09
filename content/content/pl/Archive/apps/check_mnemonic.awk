#Copyright (c) 2007 Marcin Milkowski, milek_pl [at] openoffice.org
#License: LGPL
#
#use: #gawk -f check_mnemonic.txt <wiki_file_to_check> >report_file
#The script will also create a file called "wikifile.txt" in the current dir,
#which marks inconsistent mnemonics with ugly red tabs.

BEGIN {FS ="\\|\\|"
WIKIFILE="wikifile.txt"
print " " >WIKIFILE}
/\*\*\*\*\*\*\*\*\*\*/ {current_menu=gensub(/\*\*\*\*\*\*\*\*\*\*/,"","g",$3)
application_index[current_menu]++

new_com=gensub(/align="center"[ ]*\|[ ]*/,"","g",$5)
old_com=gensub(/align="center"[ ]*\|[ ]*/,"","g",$3)

new_com=gensub(/&nbsp;/,"","g",new_com)
new_com=gensub(/  /," ","g",new_com)
new_com=gensub(/^ /,"","g",new_com)

old_com=gensub(/&nbsp;/,"","g",old_com)
old_com=gensub(/  /," ","g",old_com)
old_com=gensub(/^ /,"","g",old_com)

#print new_com "lalal"
#print old_com "lalal"

if (new_com!="") 
	item=new_com
else
	item=old_com
	
shortcut=tolower(substr(item, index(item, "~")+1, 1))
if (menukey[shortcut]=="")
	menukey[shortcut]=gensub(/~/,"","g",item)
else
	if (menukey[shortcut]!=gensub(/~/,"","g",item))
		{
		print "Different shortcuts for command in across menus" $1 " - " translation[$1] " - " item " - " menukey[shortcut]
		report="Another shortcut:" menukey[shortcut]
		}

main_menu="yes"
}
{if (NF>2) {
if (main_menu!=yes) report=""

new_com=gensub(/align="center"[ ]*\|[ ]*/,"","g",$5)
old_com=gensub(/align="center"[ ]*\|[ ]*/,"","g",$3)

new_com=gensub(/&nbsp;/,"","g",new_com)
new_com=gensub(/  /," ","g",new_com)
new_com=gensub(/^ /,"","g",new_com)

old_com=gensub(/&nbsp;/,"","g",old_com)
old_com=gensub(/  /," ","g",old_com)
old_com=gensub(/^ /,"","g",old_com)

if (new_com!="") 
	item=new_com
else
	item=old_com

key=gensub(/^\| /,"","g",$1)

if (translation[key]=="")
	translation[key]=item
else
	{if (translation[key]!=item)
		{
		print "Different shortcuts for command " key " - " translation[key] " - " item
		report="Another shortcut: " translation[key] "<br/>"
		}
	}	

if (item~/~/) shortcut=tolower(substr(item, index(item, "~")+1, 1))
else shortcut=""

if (shortcut~/[A-Za-z]/ && main_menu!="yes") {
ind=current_menu shortcut application_index[current_menu]
if (localmenu[ind]=="")
	localmenu[ind] = item
else 
	{if (localmenu[ind] != item)
		{
		print "Menu" current_menu " contains duplicated shortcuts for commands: " localmenu[ind] "-and- " item
		report=report "Duplicated shortcut:" localmenu[ind]
		}
	}
}
}
if (report!="")
	wikiline=$0 "|| style=\"background:red\"|" report
else
	wikiline =$0
print wikiline >>WIKIFILE
main_menu="no"
report=""
}

