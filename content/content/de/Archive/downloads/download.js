/*
 * JavaScript fuer das Download-Portal von de.openoffice.org
 * 16.1.2010 - Simon Wilper
 * 10.02.2010 - Anpassungen für Parameterübergabe und  Seitenweiterleitung
 *
 */


// OOo-Version
var version	= "3.2.1";

function DPLoad( ) {
/* extrahiert den Wert für den übergebenen Parameter aus der URL */
x=getParam( "version");
if ( x !=null ) {
			if ( version != x ) {
				/* wenn Eintrag der übergebenen Version entspricht -> Index merken
					und später setzen */
				version = x;
			}
		}
}

// ooodev - PrOOo-Box-DVD, Portable-OOo und ggf. weitere Zusatzprojekte

function getParam( par_name ) {
/* extrahiert den Wert für den übergebenen Parameter aus der URL */

	var dc = window.location.href;
	var prefix = par_name;
	var begin = dc.indexOf("?" + prefix);
	if (begin == -1) {
		begin = dc.indexOf("&" + prefix);
		if (begin == -1 )
			return null;
		else
			begin += 2;
	} else
		begin += 2;
	var end = dc.indexOf("&", begin);
	if (end == -1)
		end = dc.length;
	return unescape(dc.substring(begin + prefix.length, end));
}


mirror_list = [
	['ooodev_akl1',				'files.akl.lt (FTP)',						'ftp://files.akl.lt/OpenOffice.org-extras/ooodev/'],
	['ooodev_akl2',				'files.akl.lt (HTTP)',						'http://files.akl.lt/OpenOffice.org-extras/ooodev/'],
	['ooodev_chemnitz',			'ftp.tu-chemnitz.de (FTP)',					'ftp://ftp.tu-chemnitz.de/pub/ooodev/'],
	['ooodev_chemnitz2',		'ftp.tu-chemnitz.de (HTTP)',				'http://ftp.tu-chemnitz.de/pub/ooodev/'],
	['ooodev_esslingen1',		'ftp-stud.fht-esslingen.de (FTP)',			'ftp://ftp-stud.fht-esslingen.de/pub/Mirrors/ooodev/'],
	['ooodev_esslingen2',		'ftp-stud.fht-esslingen.de (HTTP)',			'http://ftp-stud.fht-esslingen.de/pub/Mirrors/ooodev/'],
	['ooodev_garr1',			'ooodev.mirror.garr.it (FTP)',				'ftp://ooodev.mirror.garr.it/mirrors/ftp.ooodev.org/'],
	['ooodev_gwdg',				'ftp5.gwdg.de (FTP)',						'ftp://ftp5.gwdg.de/pub/misc/ooodev/'],
	['ooodev_gwdg2',			'ftp5.gwdg.de (HTTP)',						'http://ftp5.gwdg.de/pub/misc/ooodev/'],
	['ooodev_heanet1',			'ftp.heanet.ie (FTP)',						'ftp://ftp.heanet.ie/mirrors/ftp.ooodev.org/'],
	['ooodev_heanet2',			'ftp.heanet.ie (HTTP)',						'http://ftp.heanet.ie/mirrors/ftp.ooodev.org/'],
	['ooodev_kddi1',			'ftp.kddilabs.jp (FTP)',					'ftp://ftp.kddilabs.jp/office/openoffice-dev/'],
	['ooodev_mirrorservice1',	'ftp.mirrorservice.org (FTP)',				'ftp://ftp.mirrorservice.org/sites/ftp.ooodev.org/ooodev/'],
	['ooodev_mirrorservice2',	'www.mirrorservice.org (HTTP)',				'http://www.mirrorservice.org/sites/ftp.ooodev.org/ooodev/'],
	['ooodev_muenster',			'ftp.uni-muenster.de (FTP)',				'ftp://ftp.uni-muenster.de/pub/software/OOoDev/'],
	['ooodev_muenster2',		'ftp.uni-muenster.de (HTTP)',				'http://ftp.uni-muenster.de/pub/software/OOoDev/'],
	['ooodev_pacific',			'mirror.pacific.net.au (FTP)',				'ftp://mirror.pacific.net.au/pub/ooodev/'],
	['ooodev_secsup1',			'ooodev.secsup.org (FTP)',					'ftp://ooodev.secsup.org/pub/software/ooodev/'],
	['ooodev_solnet1',			'ftp.solnet.ch (FTP)',						'ftp://ftp.solnet.ch/mirror/ooodev/'],
	['ooodev_solnet2',			'ooodev.mirror.solnet.ch (HTTP)',			'http://ooodev.mirror.solnet.ch/'],
	['ooodev_sunsite',			'sunsite.informatik.rwth-aachen.de (FTP)',	'ftp://sunsite.informatik.rwth-aachen.de/pub/mirror/ftp.ooodev.org/'],
	['ooodev_switch1',			'mirror.switch.ch (FTP)',					'ftp://mirror.switch.ch/mirror/ooodev/'],
	['ooodev_switch2',			'mirror.switch.ch (HTTP)',					'http://mirror.switch.ch/ftp/mirror/ooodev/'],
	['ooodev_tds1',				'openoffice.mirrors.tds.net (FTP)',			'ftp://openoffice.mirrors.tds.net/pub/openoffice-ooodev/'],
	['ooodev_tds2',				'openoffice.mirrors.tds.net (HTTP)',		'http://openoffice.mirrors.tds.net/pub/openoffice-ooodev/'],
	['ooodev_tubs',				'ftp.rz.tu-bs.de (FTP)',					'ftp://ftp.rz.tu-bs.de/pub/mirror/ALL_primary_servers/rsync/ftp.ooodev.org/ooodev/'],
	['ooodev_tubs2',			'ftp.rz.tu-bs.de (HTTP)',					'http://ftp.rz.tu-bs.de/pub/mirror/ALL_primary_servers/rsync/ftp.ooodev.org/ooodev/'],
	['ooodev_tuwien',			'gd.tuwien.ac.at (FTP)',					'ftp://gd.tuwien.ac.at/office/ooodev/'],
	['ooodev_utah1',			'ooodev.cs.utah.edu (FTP)',					'http://ooodev.cs.utah.edu/'],
	['ooodev_utah2',			'ooodev.cs.utah.edu (HTTP)',				'ftp://ooodev.cs.utah.edu/pub/ooodev/']
];

/* Initialisieren
 */
function add_init() {
	// <select>-Element "lstMirrors"
	lstMirrors = document.getElementById( "lstMirrors" );

	// Alle Kind-Elemente loeschen, damit der Eintrag "Auswahl nur mit JavaScript" verschwindet
	while( lstMirrors.firstChild ) {
		lstMirrors.removeChild(lstMirrors.firstChild);
	}

	// Zufaellig einen auswaehlen
	rndMirror = Math.floor(Math.random() * mirror_list.length);

	// Mirrors zur Liste hinzufuegen
	for ( i=0; i<mirror_list.length; i++ ) {
		E = document.createElement( "option" );
		E.setAttribute( "label", mirror_list[i][1] );
		E.setAttribute( "value", mirror_list[i][2] );

		// den zufaelligen Mirror in der List auswaehlen
		if ( rndMirror == i ) {
			E.setAttribute( "selected", "true" );
		}

		T = document.createTextNode( mirror_list[i][1] );
		E.appendChild(T);

		lstMirrors.appendChild(E);
	}

	// Links aendern zum zufaellig ausgewaehlten Mirror
	add_mk_dl_link(rndMirror);
}

function add_set_href( id, download_link) {
	document.getElementById(id).setAttribute("href",download_link);
}

function add_mk_dl_link( index ) {
	mirror	= mirror_list[index][2];
	tracker	= "http://torrent.projects.ooodev.org:6969/torrents";

	// --- PrOOoBox --- Version ist extra definiertändern, wenn noch nicht aktuelle Version verfügbar!
	version = "3.2.1";
	version_dvd = "3.2.1";
	add_set_href( "prooo_win_cd", mirror+"prooo-box-cd/prooo-box-"+version+"-1_CD_Win_de.iso" );
	add_set_href( "prooo_win_cd_torrent", tracker+"/OOo_"+version+"-1_CD_Win_prooo-box_de.iso.torrent?info_hash=5cd96d24769773173094c14ca390125d98647d6c" );

	add_set_href( "prooo_rpm_cd", mirror+"prooo-box-cd/prooo-box-"+version+"-1_CD_Linux-rpm_de.iso" );
	add_set_href( "prooo_rpm_cd_torrent", tracker+"/OOo_"+version+"-1_CD_Linux-rpm_prooo-box_de.iso.torrent?info_hash=79f3aec014a7d1177076052b36d18b1518f0127d" );

	add_set_href( "prooo_deb_cd", mirror+"prooo-box-cd/prooo-box-"+version+"-1_CD_Linux-deb_de.iso" );
	add_set_href( "prooo_deb_cd_torrent", tracker+"/OOo_"+version+"-1_CD_Linux-deb_prooo-box_de.iso.torrent?info_hash=8de7cee43cd61764e2b5502ca1c9f5b610785c3e" );

	add_set_href( "prooo_dvd", mirror+"prooo-box-dvd/prooo-box-"+version_dvd+"-1_DVD_de.iso" );
	add_set_href( "prooo_dvd_torrent", tracker+"/OOo_"+version_dvd+"-1_DVD_prooo-box_allplatforms_de.iso.torrent?info_hash=59c4d74931156212b1bd1e7f64d9411c00e5663f" );

	// --- PrOOo-Box --- außer der Reihe..
	add_set_href( "prooo_2.4_dvd", mirror+"prooo-box-dvd/prooo-box-2.4.3-1_DVD_de.iso" );
	add_set_href( "prooo_2.4_dvd_torrent", "http://torrent.projects.ooodev.org:6969/torrents/OOo_2.4.3-1_DVD_prooo-box_allplatforms_de.iso.torrent?info_hash=9503234b88a186392d43e91727690eeb89db9e4a" );

	
	// --- OOoPortable ---Version ist extra definiertändern, wenn noch nicht aktuelle Version verfügbar!
	version = "3.1.1";

	// ---  add_set_href( "ooop_win_py", mirror+"oooportable/OpenOfficePortable_"+version+"_German.paf.exe" );
	// ---  add_set_href( "ooop_win_nopy", mirror+"oooportable-plus/new/OpenOffice_Portable_2.2.1_de-de.paf.exe" );
}

// ---

os_name		= "";
filename	= "";

function os_detect() {
	uastring = new String( navigator.userAgent ).toLowerCase();

	if ( uastring.indexOf( "linux" ) >= 0 ) {
		if ( uastring.indexOf( "debian" ) >= 0 || uastring.indexOf( "untu" ) >= 0 || uastring.indexOf( "iceweasel" ) >= 0) {
			os_name = "Linux (DEB)";
			filename = "OOo_"+version+"_Linux_x86_install-deb_de.tar.gz";
			return;
		} else {
			os_name = "Linux (RPM)";
			filename = "OOo_"+version+"_Linux_x86_install-rpm-wJRE_de.tar.gz";
			return;
		}
	} else
		if ( uastring.indexOf( "windows" ) >= 0 ) {
			os_name = "Windows";
			filename="OOo_"+version+"_Win_x86_install_de.exe";
		return;
	} else
		if ( uastring.indexOf( "macintosh" ) >= 0 ) {
			os_name = "MacOS X";
			filename="OOo_"+version+"_MacOS_x86_install_de.dmg";
		return;
	} else
		if ( uastring.indexOf( "sunos" ) >= 0 ) {
			os_name = "SunOS";
			if ( uastring.indexOf( "i86pc" ) >= 0 ) {
				filename="OOo_"+version+"_Solaris_x86_install-wJRE_de.tar.gz";
			} else {
				filename="OOo_"+version+"_Solaris_Sparc_install-wJRE_de.tar.gz";
			}
			
		return;
	} else {
		os_name = "weitere nicht automatisch erkannte Systeme";
		filename = "";
		return;
	}
}

function write_download_link() {
	DPLoad( );
	os_detect();
	if (filename == ""){
		document.writeln( "<a href=\"../about-ooo/about_unterstuetzung.html?dl=http://de.openoffice.org/downloads/other.html\">" );
	}
	else {
		document.writeln( "<a href=\"../about-ooo/about_unterstuetzung.html?dl=http://download.services.openoffice.org/files/localized/de/"+version+"/"+filename+"\">" );
	}
	document.writeln( "OpenOffice.org " + version + " f&uuml;r " + os_name + " (*) jetzt herunterladen</a>" );
}

function write_torrent_link() {
	DPLoad( )
	document.writeln( "<a href=\"../about-ooo/about_unterstuetzung.html?dl=http://openoffice.student.utwente.nl/torrents/torrent.php/" +
			filename +
			".torrent\">&Uuml;ber BitTorrent herunterladen</a> &middot; <a href=\"http://borft.student.utwente.nl/~mike/oo/bt.php\">&Uuml;bersicht</a>" );
}
