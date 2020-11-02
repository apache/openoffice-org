var menuArray = new Array(
	new Array("<strong>lang/lt</strong>"
		, new Array("index.html", "Įžanga")
		)
	,new Array("Produktas"
		, new Array("http://openoffice.lt/oo/apie_openoffice", "Aprašas")
		, new Array("http://openoffice.lt/oo/parsisiusti_openoffice", "Parsiųsti")
//		, new Array("/about-cdrom.html", "CD-ROM")
		, new Array("http://openoffice.lt/oo/parsisiusti_openoffice/zodynai", "Žodynai")
		) 
	,new Array("Projektas"
		, new Array("http://openoffice.lt/oo/projektas/istorija", "Istorija")
//		, new Array("/about-documentation.html", "Dokumentacija")
		, new Array("http://openoffice.lt/oo/projektas/kaip_galima_dalyvauti_projekto_kurime", "Kaip padėti?")
		, new Array("http://openoffice.lt/oo/projektas/kaip_pranesti_apie_klaidas", "Pranešk apie klaidą")
		, new Array("http://openoffice.org/issues/buglist.cgi?Submit+query=Submit+query&component=l10n&component=lt&email1=dagiene&emailtype1=substring&emailassigned_to1=1&email2=&emailtype2=exact&emailreporter2=1&issueidtype=include&issue_id=&changedin=&votes=&chfieldfrom=&chfieldto=Now&chfieldvalue=&short_desc=&short_desc_type=substring&long_desc=&long_desc_type=substring&issue_file_loc=&issue_file_loc_type=substring&status_whiteboard=&status_whiteboard_type=substring&keywords=&keywords_type=anytokens&field0-0-0=noop&type0-0-0=noop&value0-0-0=&cmdtype=doit&namedcmd=dagiene&newqueryname=&order=Issue+Number", 
				"Lietuviškos versijos problemos")
		) 
	,new Array("Pagalba naudotojams"
		, new Array("http://openoffice.lt/oo/pagalba_naudotojams/knygos", "Knygos")
		, new Array("http://openoffice.lt/oo/pagalba_naudotojams", "Forumai el.paštu")
//		, new Array("/about-documentation.html", "Dokumentacija")
		, new Array("http://openoffice.lt/oo/pagalba_naudotojams/duk", "DUK (FAQ)")
		, new Array("/link.html", "Naudingos nuorodos")
		) 
	,new Array("Kontaktai"
		, new Array("http://openoffice.lt/oo/pagalba_naudotojams", "Forumai el.paštu")
		, new Array("/adresses.html", "Adresai")
		) 
	,new Array("Įvairūs"
		, new Array("http://openoffice.lt/oo/apie_openoffice/padeka", "Padėka")
		, new Array("http://openoffice.lt/oo/licenzijavimas", "Licencijavimas")
		) 
);

function createMenu()
{
	document.writeln('<div id="navcolumn" style="width: 15%; float: right;" class="right_nav">');
	document.writeln('<div class="toolgroup" id="toolgroup_r">');
	for(i=0; i<menuArray.length; i++ )
	{
		createMenuTitle(menuArray[i][0]);	
		document.writeln('<div class="body" id="body_r">');
		for(j=1; j<menuArray[i].length; j++ )
		{
			createMenuItem(menuArray[i][j][0],menuArray[i][j][1]);	
		}
		document.writeln('</div>');
	}
	document.writeln('</div>');
	document.writeln('</div>');
}

function createMenuTitle(name)
{
	document.writeln('<div class="label" id="label_r"><strong>'+name+'</strong></div>');
}

function createMenuItem(link, name)
{
	document.writeln('<div><a href="'+link+'">'+name+'</a></div>')	
}

createMenu();
