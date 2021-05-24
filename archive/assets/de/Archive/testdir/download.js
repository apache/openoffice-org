/*
 * JavaScript fuer das Download-Portal von de.openoffice.org
 * 16.1.2010 - Simon Wilper
 *
 */


// OOo-Version
version	= "3.1.1";

// ooodev - PrOOo-Box-DVD, Portable-OOo und ggf. weitere Zusatzprojekte

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

	// Mirrors zur Liste hinzufuegen
	for ( i=0; i<mirror_list.length; i++ ) {
		E = document.createElement( "option" );
		E.setAttribute( "label", mirror_list[i][1] );
		E.setAttribute( "value", mirror_list[i][2] );

		T = document.createTextNode( mirror_list[i][1] );
		E.appendChild(T);

		lstMirrors.appendChild(E);
	}

	// Zufaellig einen auswaehlen
	add_mk_dl_link(Math.floor(Math.random() * mirror_list.length));
}

function add_set_href( id, download_link) {
	document.getElementById(id).setAttribute("href",download_link);
}

function add_mk_dl_link( index ) {
	mirror	= mirror_list[index][2];
	tracker	= "http://ooodev.org:6969/torrents";

	// --- PrOOoBox ---

	add_set_href( "prooo_win_cd", mirror+"prooo-box-cd/prooo-box-"+version+"-1_CD_Win_de.iso" );
	add_set_href( "prooo_win_cd_torrent", tracker+"/OOo_"+version+"-1_CD_Win_prooo-box_de.iso.torrent?info_hash=0c987ed1fed0c63e87e7554661b2fd85d970cbb0" );

	add_set_href( "prooo_rpm_cd", mirror+"prooo-box-cd/prooo-box-"+version+"-1_CD_Linux-rpm_de.iso" );
	add_set_href( "prooo_rpm_cd_torrent", tracker+"/OOo_"+version+"-1_CD_Linux-rpm_prooo-box_de.iso.torrent?info_hash=e70e90c2d16fa971e1046a99b19b0061302168f7" );

	add_set_href( "prooo_deb_cd", mirror+"prooo-box-cd/prooo-box-"+version+"-1_CD_Linux-deb_de.iso" );
	add_set_href( "prooo_deb_cd_torrent", tracker+"/OOo_"+version+"-1_CD_Linux-deb_prooo-box_de.iso.torrent?info_hash=fd9224cab4d00fcc8c4ffb23c39868025f6f352f" );

	add_set_href( "prooo_dvd", mirror+"prooo-box-dvd/prooo-box-"+version+"-1_DVD_de.iso" );
	add_set_href( "prooo_dvd_torrent", tracker+"/OOo_"+version+"-1_DVD_prooo-box_allplatforms_de.iso.torrent?info_hash=17464aff190288ea950000be346884a615d70783" );
	
	// --- OOoPortable ---

	add_set_href( "ooop_win_py", mirror+"oooportable/OpenOfficePortable_3.1.0_German.paf.exe" );
	add_set_href( "ooop_win_nopy", mirror+"oooportable-plus/new/OpenOffice_Portable_2.2.1_de-de.paf.exe" );

	// SimonAW [14.1.2010]: Gibt erstmal keine neue...
	//add_set_href( "ooop_plus", mirror+"oooportable-plus/new/OpenOfficePortablePlus_2.2.1.exe" );
}

// ---

os_name		= "";
filename	= "";

function os_detect() {
	uastring = new String( navigator.userAgent ).toLowerCase();

	if ( uastring.indexOf( "linux" ) >= 0 ) {
		if ( uastring.indexOf( "debian" ) >= 0 || uastring.indexOf( "untu" ) >= 0 ) {
			os_name = "Linux (DEB)";
			filename = "OOo_"+version+"_LinuxIntel_install_de_deb.tar.gz";
			return;
		} else {
			os_name = "Linux (RPM)";
			filename = "OOo_"+version+"_LinuxIntel_install_de.tar.gz";
			return;
		}
	} else
		if ( uastring.indexOf( "windows" ) >= 0 ) {
			os_name = "Windows";
			filename="OOo_"+version+"_Win32Intel_install_de.exe";
		return;
	} else
		if ( uastring.indexOf( "macintosh" ) >= 0 ) {
			os_name = "MacOS X";
			filename="OOo_"+version+"_MacOSXIntel_install_de.dmg";
		return;
	} else {
		os_name = "Linux (RPM)";
		filename = "OOo_"+version+"_LinuxIntel_install_de.tar.gz";
		return;
	}
}

function write_download_link() {
	os_detect();

	document.writeln( "<a href=\"http://download.services.openoffice.org/files/localized/de/"+version+"/"+filename+"\">" );
	document.writeln( "OpenOffice.org f&uuml;r " + os_name + " herunterladen</a>" );
}

function write_torrent_link() {
	document.writeln( "<a href=\"http://borft.student.utwente.nl/~adrian/torrentphp/torrent.php/" +
			filename +
			".torrent\">&Uuml;ber BitTorrent herunterladen</a> &middot; <a href=\"http://borft.student.utwente.nl/~adrian/bt.php\">&Uuml;bersicht</a>" );
}
