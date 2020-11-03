/* $Id: quickdl.js,v 1.296 2009/12/16 17:05:10 richteruwe Exp $ */
/*-------------------------------------------------------------------
--- Beim Einpflegen neuer Downloads bitte nicht vergessen auch die
--- md5-Summen unter www/md5sums.txt und www/de/downloads/md5.html
--- einzutragen und ggf. im Text Links mit Versionierung anzupassen
--------------------------------------------------------------------- 
--- Liste der möglichen Platformen (sortiert nach nach Auftreten in
---	der Auswahlbox)
---	 <key>,<Bezeichnung>
-------------------------------------------------------------------*/

var platforms =	[
    ['ooo', '--- Bitte waehlen! ---'],
	['win', 'Windows'],
	['winj', 'Windows (inkl. JRE)'],
	['lin_x86', 'Linux x86 (RPM)'],
	['lin_x86i', 'Linux x86 (inkl. JRE + Installer)'],
	['lin_64d', 'Linux x86-64 (DEB)' ],
	['lin_64', 'Linux x86-64 (RPM)' ],
	['lin_x86d', 'Linux x86 (DEB)'],
	['mac',	 'Mac OS X PPC'],
	['macIntel',	 'Mac OS X Intel'],
	['sol_x86', 'Solaris x86'],
	['sol_x86i', 'Solaris x86 (inkl. JRE + Installer)'],
	['sol_sparc', 'Solaris Sparc'],
	['lin_ppc', 'Linux PowerPC'],
    
    ['proo', '--- PrOOo-Box ---'],
	['prooobox',	'PrOOo-Box (CD für Windows)'],
	['prooobox_lr', 'PrOOo-Box (CD für Linux rpm)'],
	['prooobox_ld', 'PrOOo-Box (CD für Linux deb)'],
	/*
	['prooobox_s', 'PrOOo-Box (CD für Solaris)'],
	['prooobox_f', 'PrOOo-Box (CD für FreeBSD)'],
	['prooobox_m', 'PrOOo-Box (CD für Mac)'],
	*/
	['prooobox_dvd', 'PrOOo-Box (DVD)'],

    ['port','--- OpenOffice.org Portable ---'],
	['pooo_winp', 'Windows (mit Python)'],
	['pooo_win', 'Windows (ohne Python)'],
	['pooop_win', 'Windows (OOoPortable Plus)'],

    ['dic', '--- Woerterbuecher ---'],
	['dicooofull', 'DicOOoFull'],
	
    ['rc_', '--- ReleaseKandidaten (RC)'],
    ['rc_all', 'alle Plattformen'],
    

    ['arch', '--- alte OOo-Versionen ---'],
	['win_archive', 'Windows'],
	['win_archivej', 'Windows (inkl. JRE + Installer)'],
	['lin_x86_archive', 'Linux x86 (RPM)'],
	['lin_x86_archivej', 'Linux x86 (RPM) (inkl. JRE)'],
	['lin_x86d_archive', 'Linux x86 (DEB)'],
	['mac_archive', 'Mac OS X PPC'],
        ['mac_archive_intel', 'macIntel'],
	['sol_x86_archive', 'Solaris x86'],
	['sol_x86i_archive', 'Solaris x86 (inkl. JRE + Installer)'],
	['sol_sparc_archive', 'Solaris Sparc'],
	['lin_ppc_archive', 'Linux PowerPC']

];

/*-------------------------------------------------------------------
--- Liste der möglichen Versionen nach Plattform
---	(sortiert nach Auftreten in der Auswahlbox)
---		<platform_key>, <key>, <Bezeichnung>, <pfad auf server>
-------------------------------------------------------------------*/
var versions =	[
    ['win', '3.1.1', '3.1.1','localized/de/3.1.1/OOo_3.1.1_Win32Intel_install_de.exe'],
    ['win', '3.1.0', '3.1.0','localized/de/3.1.0/OOo_3.1.0_Win32Intel_install_de.exe'],
    ['win', '3.0.0', '3.0.0','localized/de/3.0.0/OOo_3.0.0_Win32Intel_install_de.exe'],
    ['win', '2.4.3', '2.4.3','localized/de/2.4.3/OOo_2.4.3_Win32Intel_install_de.exe'],

    ['winj', '3.1.1', '3.1.1','localized/de/3.1.1/OOo_3.1.1_Win32Intel_install_wJRE_de.exe'],
    ['winj', '3.1.0', '3.1.0','localized/de/3.1.0/OOo_3.1.0_Win32Intel_install_wJRE_de.exe'],
    ['winj', '3.0.0', '3.0.0','localized/de/3.0.0/OOo_3.0.0_Win32Intel_install_wJRE_de.exe'],

	['win_archive', '2.4.1', '2.4.1', 'localized/de/2.4.1/OOo_2.4.1_Win32Intel_install_de.exe'],
	['win_archivej', '2.4.1', '2.4.1','localized/de/2.4.1/OOo_2.4.1_Win32Intel_install_wJRE_de.exe'],
	['win_archive', '2.2',	'2.2.1','localized/de/2.2.1/OOo_2.2.1_Win32Intel_install_de.exe'],

	/* EOL, aber weiterhin im Archiv: */
	['win_archive', '1.1.5', '1.1.5','localized/de/1.1.5/OOo_1.1.5_Win32Intel_install_de.zip'],
	['win_archive', '1.1.5_secpatch1',	'1.1.5 (Sicherheitspatch 1)','stable/1.1.5secpatch/Win32Intel/'],
	['win_archive', '1.1.5_secpatch2',	'1.1.5 (Sicherheitspatch 2)','stable/1.1.5secpatch2/Win32Intel/'],
	['win_archive', '1.1.0',	'1.1.0','localized/de/1.1.0/OOo_1.1.0_Win32Intel_install_de.zip'],

    ['lin_x86', '3.1.1', '3.1.1','localized/de/3.1.1/OOo_3.1.1_LinuxIntel_install_de.tar.gz'],
    ['lin_x86', '3.1.0', '3.1.0','localized/de/3.1.0/OOo_3.1.0_LinuxIntel_install_de.tar.gz'],
    ['lin_x86', '3.0.0', '3.0.0','localized/de/3.0.0/OOo_3.0.0_LinuxIntel_install_de.tar.gz'],
    ['lin_x86', '2.4.3', '2.4.3','localized/de/2.4.3/OOo_2.4.3_LinuxIntel_install_de.tar.gz'],

    ['lin_x86i', '3.1.0', '3.1.0','localized/de/3.1.0/OOo_3.1.0_LinuxIntel_install_wJRE_de.tar.gz'],
    ['lin_x86i', '3.0.0', '3.0.0','localized/de/3.0.0/OOo_3.0.0_LinuxIntel_install_wJRE_de.tar.gz'],
    ['lin_x86_archive', '2.4.1', '2.4.1','localized/de/2.4.1/OOo_2.4.1_LinuxIntel_install_de.tar.gz'],
	['lin_x86_archivej', '2.4.1', '2.4.1','localized/de/2.4.1/OOo_2.4.1_LinuxIntel_install_wJRE_de.tar.gz '],

	/* EOL, aber weiterhin im Archiv: */
	['lin_x86_archive', '1.1.5',	'1.1.5','localized/de/1.1.5/OOo_1.1.5_LinuxIntel_install_de.tar.gz'],
	['lin_x86_archive', '1.1.0',	'1.1.0','localized/de/1.1.0/OOo_1.1.0_LinuxIntel_install_de.tar.gz'],


    ['lin_64d', '3.1.1', '3.1.1','localized/de/3.1.1/OOo_3.1.1_LinuxX86-64_install_de_deb.tar.gz'],
    ['lin_64d', '3.1.0', '3.1.0','localized/de/3.1.0/OOo_3.1.0_LinuxX86-64_install_de_deb.tar.gz'],
    ['lin_64', '3.1.1', '3.1.1','localized/de/3.1.1/OOo_3.1.1_LinuxX86-64_install_wJRE_de.tar.gz'],
    ['lin_x86d', '3.1.1', '3.1.1','localized/de/3.1.1/OOo_3.1.1_LinuxIntel_install_de_deb.tar.gz'],
    ['lin_x86d', '3.0.0', '3.0.0','localized/de/3.0.0/OOo_3.0.0_LinuxIntel_install_de_deb.tar.gz'],
    ['lin_x86d', '2.4.3', '2.4.3','localized/de/2.4.3/OOo_2.4.3_LinuxIntel_install_de_deb.tar.gz'],
	['lin_x86d_archive', '2.4.1', '2.4.1','localized/de/2.4.1/OOo_2.4.1_LinuxIntel_install_de_deb.tar.gz'],
	['lin_x86d_archive', '2.2', '2.2.1','localized/de/2.2.1/OOo_2.2.1_LinuxIntel_install_de_deb.tar.gz'],

	['macIntel','3.1.1', '3.1.1', 'localized/de/3.1.1/OOo_3.1.1_MacOSXIntel_install_de.dmg'],
	['macIntel','3.1.0', '3.1.0', 'localized/de/3.1.0/OOo_3.1.0_MacOSXIntel_install_de.dmg'],
	['macIntel','3.0.0', '3.0.0', 'localized/de/3.0.0/OOo_3.0.0_MacOSXIntel_AQUA_install_de.dmg'],
	['macIntel','2.4.3', '2.4.3', 'localized/de/2.4.3/OOo_2.4.3_MacOSXIntel_install_de.dmg'],
	['macMaho', '3.0.0', '3.0.0', 'localized/de/3.0.0/OOo_3.0.0_MacOSXPowerPC_install_de.dmg'],
	['mac_archive_intel','2.4.1', '2.4.1 (ab 10.4)', 'localized/de/2.4.1/OOo_2.4.1_MacOSXIntel_install_de.dmg'],
	['mac_archive_intel','2.0', '2.0.3 (ab 10.4)', 'localized/de/2.0.3/OOo_2.0.3_MacOSXIntel_install_de.dmg'],

	['mac','3.1.0', '3.1.0', 'localized/de/3.1.0/OOo_3.1.0_MacOSXPPC_install_de.dmg'],
	['mac','3.0.0', '3.0.0', 'localized/de/3.0.0/OOo_3.0.0_MacOSXPPC_install_de.dmg'],
	['mac_archive','2.4.1', '2.4.1 (ab 10.4)', 'localized/de/2.4.1/OOo_2.4.1_MacOSXPPC_install_de.dmg'],

	/* EOL, aber weiterhin im Archiv: */
	['mac_archive','2.1', '2.1.0 (ab 10.3)', 'localized/de/2.1.0/OOo_2.1.0_MacOSXPPC_install_de.dmg'],
	['mac_archive','1.1.4', '1.1.4 (ab 10.3)', 'localized/de/1.1.4/OOo_1.1.4_MacOSX_Panther_de.dmg'],
	['mac_archive', '1.1.4_secpatch ',	'1.1.4 Sicherheitspatch (ab 10.3)','stable/1.1.4secpatch/libsot645mxp.dylib'],


	['pooo_win','2.2', '2.2.1', 'oooportable-plus/new/OpenOffice_Portable_2.2.1_de-de.paf.exe'],
	['pooo_winp','3.1.0', '3.1.0', 'oooportable/OpenOfficePortable_3.1.0_German.paf.exe'],
	/* ['pooo_win','1.1.5', '1.1.5', 'oooportable/portableooo115de_20060801.zip'], */
	
	['pooop_win','2.2.1', '2.2.1', 'oooportable-plus/new/OpenOfficePortablePlus_2.2.1.exe'],
	/*['pooop_win','3.0.1', '3.0.1', 'oooportable-plus/new/OpenOfficePortablePlus_3.0.1.exe'],*/


	['prooobox',	 '3.1.1',	'3.1.1-1',	'prooo-box-cd/prooo-box-3.1.1-1_CD_Win_de.iso'], 
	['prooobox_ld',	 '3.1.1',	'3.1.1-1',	'prooo-box-cd/prooo-box-3.1.1-1_CD_Linux-deb_de.iso'],
	['prooobox_lr',	 '3.1.1',	'3.1.1-1',	'prooo-box-cd/prooo-box-3.1.1-1_CD_Linux-rpm_de.iso'],
	/*
	['prooobox_f',	 '2.4',	'2.4.1-1',	'prooo-box-cd/prooo-box-2.4.1-1_CD_Freebsd_de.iso'],
	['prooobox_s',	 '3.0',	'3.0.0-1',	'prooo-box-cd/prooo-box-3.0.0-1_CD_Solaris_de.iso'],
	['prooobox_m',	 '3.0',	'3.0.0-1',	'prooo-box-cd/prooo-box-3.0.0-1_CD_Mac_de.iso'],
	*/
	['prooobox_dvd', '3.1.1', '3.1.1-1',	'prooo-box-dvd/prooo-box-3.1.1-1_DVD_de.iso'],
	['prooobox_dvd', '2.4.3', '2.4.3-1',	'prooo-box-dvd/prooo-box-2.4.3-1_DVD_de.iso'],

	['sol_x86i', '3.0.0', '3.0.0','localized/de/3.0.0/OOo_3.0.0_Solarisx86_install_wJRE_de.tar.gz'],
	['sol_x86_archive', '2.4.0', '2.4.0','localized/de/2.4.0/OOo_2.4.0_Solarisx86_install_de.tar.gz'],
	['sol_x86i_archive', '2.4.0', '2.4.0','localized/de/2.4.0/OOo_2.4.0_Solarisx86_install_wJRE_de.tar.gz'],
	['sol_x86_archive', '2.3', '2.3.1','localized/de/2.3.1/OOo_2.3.1_Solarisx86_install_de.tar.gz'],
	['sol_x86i_archive', '2.3', '2.3.1','localized/de/2.3.1/OOo_2.3.1_Solarisx86_install_wJRE_de.tar.gz'],
	['sol_x86_archive', '2.2', '2.2.1','localized/de/2.2.1/OOo_2.2.1_Solarisx86_install_de.tar.gz'],

	/* EOL, aber weiterhin im Archiv: */
	['sol_x86_archive', '1.1.5', '1.1.5','localized/de/1.1.5/OOo_1.1.5_Solarisx86_install_de.tar.gz'],
	['sol_x86_archive', '1.0.1', '1.0.1','localized/de/1.0.1/OOo_1.0.1_SolarisIntel_install_de.tar.gz'],


	['sol_sparc', '3.0.0', '3.0.0','localized/de/3.0.0/OOo_3.0.0_SolarisSparc_install_wJRE_de.tar.gz'],
	['sol_sparc_archive', '2.1', '2.1.0','localized/de/2.1.0/OOo_2.1.0_SolarisSparc_install_de.tar.gz'],

	/* EOL, aber weiterhin im Archiv: */
	['sol_sparc_archive', '1.1.5', '1.1.5RC','1.1.5rc4/OOo_1.1.5rc_050903_SolarisSparc_install_de.tar.gz'],
	['sol_sparc_archive', '1.0.1', '1.0.1','localized/de/1.0.1/OOo_1.0.1_SolarisSparc_install_de.tar.gz'],


	/* ['lin_ppc_archive','1.0.0',	'1.0.0', 'localized/de/1.0.0/OOo_1.0.0_LinuxPPC_install_de.tar.gz'], */

	['dicooofull', '20070914', '20070914', 'dicooofull/pack_full_20070914.zip'],

    /* RCs */
    ['rc_all', '3.1.0RC2', '3.1.0RC2', '3.1.0rc2/']

];

/*-------------------------------------------------------------------
--- Mirrorliste (sortiert nach nach Auftreten in der Auswahlbox)
---		<key>, <Bezeichnung>, <Basis-URL>
-------------------------------------------------------------------*/
var mirrors =	[
	// Reguläre Mirrors (für freigegebene OOo-Versionen und PrOOo-Box CD)
	['hage_f', 'Hagen (FTP)',	'ftp://ftp.fernuni-hagen.de/pub/mirrors/www.openoffice.org/'],
	['hage_h', 'Hagen (HTTP)',	'http://ftp.fernuni-hagen.de/ftp-dir/pub/mirrors/www.openoffice.org/'],
	['gwdg_f', 'GWDG (FTP)',	'ftp://ftp5.gwdg.de/pub/openoffice/'],
	['gwdg_h', 'GWDG (HTTP)',	'http://ftp5.gwdg.de/pub/openoffice/'],
	['aach_f', 'Aachen (FTP)',	'ftp://sunsite.informatik.rwth-aachen.de/pub/mirror/OpenOffice/'],
	['aach_h', 'Aachen (HTTP)',	'http://sunsite.informatik.rwth-aachen.de/ftp/pub/mirror/OpenOffice/'],
	['brau_f', 'Braunschweig (FTP)', 'ftp://ftp.rz.tu-bs.de/pub/mirror/OpenOffice.org/'],
	['brau_h', 'Braunschweig (HTTP)', 'http://mistral.ext.rz.tu-bs.de/ftp/pub/mirror/OpenOffice.org/'],
	['chem_f', 'Chemnitz (FTP)',	'ftp://ftp.tu-chemnitz.de/pub/openoffice/'],
	['chem_h', 'Chemnitz (HTTP)',	'http://wftp.tu-chemnitz.de/pub/openoffice/'],
	['frfm_f', 'Frankfurt (FTP)',	'ftp://ftp.plusline.de/pub/OpenOffice/'],
	['frfm_h', 'Frankfurt (HTTP)',	'http://ftp.plusline.de/OpenOffice/'],
	['essl_f', 'Esslingen (FTP)',	'ftp://ftp-stud.fht-esslingen.de/pub/Mirrors/ftp.openoffice.org/'],
	['mnst_f', 'Muenster (FTP)',	'ftp://ftp.join.uni-muenster.de/pub/software/OpenOffice/'],
	['wien_f', 'Wien (FTP)',	'ftp://gd.tuwien.ac.at/office/openoffice/'],
	['wien_h', 'Wien (HTTP)',	'http://gd.tuwien.ac.at/office/openoffice/'],
	['wolf_f', 'Wolfenbuettel (FTP)', 'ftp://ftp.uasw.edu/pub/openoffice.org/'],
	['wolf_h', 'Wolfenbuettel (HTTP)', 'http://ftp.uasw.edu/pub/openoffice.org/'],
	['soln_f', 'SolNet (FTP)',	'ftp://ftp.solnet.ch/mirror/OpenOffice/'],
	['zuer_f', 'Zuerich (FTP)',	'ftp://mirror.switch.ch/mirror/OpenOffice/'],
	['zuer_h', 'Zuerich (HTTP)',	'http://mirror.switch.ch/ftp/mirror/OpenOffice/'],
	// Mahos Server und fbirchers mirror (MacOSX builds PPC)
	['maho_goodday_http',		'Good-Day (Japan) HTTP',	'http://ooopackages.good-day.net/pub/OpenOffice.org/MacOSX/'],
	['maho_goodday_ftp',		'Good-Day (Japan) FTP',		 'ftp://ooopackages.good-day.net/pub/OpenOffice.org/MacOSX/'],
	['maho_fbircher_http',		'unlogisch.ch (HTTP)',		'http://unlogisch.ch/mirror/ooopackages.good-day.net/pub/OpenOffice.org/MacOSX/'],
	['maho_fbircher_ftp',		'unlogisch.ch (FTP)',		    'ftp://www.unlogisch.ch/ooopackages.good-day.net/pub/OpenOffice.org/MacOSX/'],
 
	// Mirrors mit erweitertem Angebot (extended)  (u.A. ISOs und PrOOo-Box CD)
	// Deutschsprachiger Raum
	['ext_gwdg_f',    'GWDG (FTP)',		'ftp://ftp5.gwdg.de/pub/openoffice/extended/'],
	['ext_gwdg_h',    'GWDG (HTTP)',	'http://ftp5.gwdg.de/pub/openoffice/extended/'],
	['ext_brau_f',    'Braunschweig (FTP)',	'ftp://ftp.rz.tu-bs.de/pub/mirror/OpenOffice.org/extended/'],
	['ext_brau_h',    'Braunschweig (HTTP)', 'http://mistral.ext.rz.tu-bs.de/ftp/pub/mirror/OpenOffice.org/extended/'],
	['ext_chem_f',    'Chemnitz (FTP)',	'ftp://ftp.tu-chemnitz.de/pub/openoffice-extended/extended/'],
	['ext_chem_h',    'Chemnitz (HTTP)',	'http://wftp.tu-chemnitz.de/pub/openoffice-extended/extended/'],
	['ext_soln_f',    'SolNet (FTP)',	'ftp://ftp.solnet.ch/mirror/OpenOffice/extended/'],
	/* Ausser Betrieb:
	['ext_wu_wien_f', 'WU_Wien (FTP)',	'ftp://esda.wu-wien.ac.at/pub/openoffice-extended/extended/'],
	*/

	// Mirrors mit früheren Versionen
	['archive_f',    'Archive (FTP)',	'ftp://archive.services.openoffice.org/pub/openoffice-archive/'],
	['archive_h',    'Archive (HTTP)',	'http://archive.services.openoffice.org/pub/openoffice-archive/'],
		
	// ooodev - PrOOo-Box-DVD, Portable-OOo und ggf. weitere Zusatzprojekte
	['ooodev_akl1',		'files.akl.lt (FTP)',		'ftp://files.akl.lt/OpenOffice.org-extras/ooodev/'],
	['ooodev_akl2',		'files.akl.lt (HTTP)',		'http://files.akl.lt/OpenOffice.org-extras/ooodev/'],
	['ooodev_chemnitz',	'ftp.tu-chemnitz.de (FTP)',	'ftp://ftp.tu-chemnitz.de/pub/ooodev/'],
	['ooodev_chemnitz2',	'ftp.tu-chemnitz.de (HTTP)',	'http://ftp.tu-chemnitz.de/pub/ooodev/'],
	['ooodev_esslingen1',	'ftp-stud.fht-esslingen.de (FTP)', 'ftp://ftp-stud.fht-esslingen.de/pub/Mirrors/ooodev/'],
	['ooodev_esslingen2',	'ftp-stud.fht-esslingen.de (HTTP)', 'http://ftp-stud.fht-esslingen.de/pub/Mirrors/ooodev/'],
	['ooodev_garr1',	'ooodev.mirror.garr.it (FTP)',	'ftp://ooodev.mirror.garr.it/mirrors/ftp.ooodev.org/'],
	['ooodev_gwdg',		'ftp5.gwdg.de (FTP)',		'ftp://ftp5.gwdg.de/pub/misc/ooodev/'],
	['ooodev_gwdg2',	'ftp5.gwdg.de (HTTP)',		'http://ftp5.gwdg.de/pub/misc/ooodev/'],
	['ooodev_heanet1',	'ftp.heanet.ie (FTP)',		'ftp://ftp.heanet.ie/mirrors/ftp.ooodev.org/'],
	['ooodev_heanet2',	'ftp.heanet.ie (HTTP)',		'http://ftp.heanet.ie/mirrors/ftp.ooodev.org/'],
	['ooodev_kddi1',	'ftp.kddilabs.jp (FTP)',	'ftp://ftp.kddilabs.jp/office/openoffice-dev/'],
	['ooodev_mirrorservice1', 'ftp.mirrorservice.org (FTP)', 'ftp://ftp.mirrorservice.org/sites/ftp.ooodev.org/ooodev/'],
	['ooodev_mirrorservice2', 'www.mirrorservice.org (HTTP)', 'http://www.mirrorservice.org/sites/ftp.ooodev.org/ooodev/'],
	['ooodev_muenster',	'ftp.uni-muenster.de (FTP)',	'ftp://ftp.uni-muenster.de/pub/software/OOoDev/'],
	['ooodev_muenster2',	'ftp.uni-muenster.de (HTTP)',	'http://ftp.uni-muenster.de/pub/software/OOoDev/'],

	/* kein ooodev repo vorhanden Friedrich 19.02.2009 17:50
	['ooodev_neacm1',	'neacm.fe.up.pt (HTTP)',	'http://neacm.fe.up.pt/pub/ooodev/'],
	['ooodev_neacm2',	'neacm.fe.up.pt (FTP)',		'ftp://neacm.fe.up.pt/pub/ooodev/'],
	*/

	['ooodev_pacific',	'mirror.pacific.net.au (FTP)',	'ftp://mirror.pacific.net.au/pub/ooodev/'],
	['ooodev_secsup1',	'ooodev.secsup.org (FTP)',	'ftp://ooodev.secsup.org/pub/software/ooodev/'],
	['ooodev_solnet1',	'ftp.solnet.ch (FTP)',		'ftp://ftp.solnet.ch/mirror/ooodev/'],
	['ooodev_solnet2',	'ooodev.mirror.solnet.ch (HTTP)', 'http://ooodev.mirror.solnet.ch/'],
	['ooodev_sunsite',	'sunsite.informatik.rwth-aachen.de (FTP)', 'ftp://sunsite.informatik.rwth-aachen.de/pub/mirror/ftp.ooodev.org/'],
	['ooodev_switch1',	'mirror.switch.ch (FTP)',	'ftp://mirror.switch.ch/mirror/ooodev/'],
	['ooodev_switch2',	'mirror.switch.ch (HTTP)',	'http://mirror.switch.ch/ftp/mirror/ooodev/'],
	['ooodev_tds1',		'openoffice.mirrors.tds.net (FTP)', 'ftp://openoffice.mirrors.tds.net/pub/openoffice-ooodev/'],
	['ooodev_tds2',		'openoffice.mirrors.tds.net (HTTP)', 'http://openoffice.mirrors.tds.net/pub/openoffice-ooodev/'],
	['ooodev_tubs',		'ftp.rz.tu-bs.de (FTP)',	'ftp://ftp.rz.tu-bs.de/pub/mirror/ALL_primary_servers/rsync/ftp.ooodev.org/ooodev/'],
	['ooodev_tubs2',	'ftp.rz.tu-bs.de (HTTP)',	'http://ftp.rz.tu-bs.de/pub/mirror/ALL_primary_servers/rsync/ftp.ooodev.org/ooodev/'],
	['ooodev_tuwien',	'gd.tuwien.ac.at (FTP)',	'ftp://gd.tuwien.ac.at/office/ooodev/'],
	['ooodev_utah1',	'ooodev.cs.utah.edu (FTP)',	'http://ooodev.cs.utah.edu/'],
	['ooodev_utah2',	'ooodev.cs.utah.edu (HTTP)',	'ftp://ooodev.cs.utah.edu/pub/ooodev/']

];

/*-------------------------------------------------------------------
--- Liste, welcher Mirror welche Plattformen vorhält ...
---	wenn wir das noch auf die Versionen runterbrechen, werden wir mit tippen nicht fertig
---		<mirror_key>, <plattform_key>
full: ['aach_f', ['lin_ppc', 'lin_x86', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86', 'win', 'winj', 'prooobox' ]],
classA: ['aach_f', ['lin_ppc', 'lin_x86', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86', 'win' ]],

-------------------------------------------------------------------*/

var mirror_platforms =	[
	['aach_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['aach_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['brau_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['brau_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['chem_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['chem_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['essl_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['frfm_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['frfm_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['gwdg_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['gwdg_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['hage_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['hage_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['klag_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['mnst_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['soln_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['star_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['star_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['wien_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['wien_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['wolf_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['wolf_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['zuer_f', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],
	['zuer_h', ['lin_ppc', 'lin_x86', 'lin_64d', 'lin_64', 'lin_x86i', 'lin_x86d', 'mac', 'macIntel', 'sol_sparc', 'sol_x86i', 'sol_x86', 'win', 'winj']],

	//extended
	['ext_gwdg_f',		['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	['ext_gwdg_h',		['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	['ext_brau_f',		['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	['ext_brau_h',		['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	['ext_chem_f',		['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	['ext_chem_h',		['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	['ext_wu_wien_f',	['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	['ext_soln_f',   	['win_b', 'winj_b', 'lin_x86_b', 'lin_x86i_b', 'lin_x86d_b', 'macIntel_b', 'sol_x86i_b','sol_sparci_b','rc_all']],
	
	// archive
	['archive_f',			['win_archive', 'win_archivej', 'lin_x86_archive', 'lin_x86_archivej', 'lin_x86d_archive', 'mac_archive_intel', 'mac_archive', 'sol_x86_archive', 'sol_x86i_archive', 'sol_sparc_archive', 'lin_ppc_archive']],
	['archive_h',			['win_archive', 'win_archivej', 'lin_x86_archive', 'lin_x86_archivej', 'lin_x86d_archive', 'mac_archive_intel', 'mac_archive', 'sol_x86_archive', 'sol_x86i_archive', 'sol_sparc_archive', 'lin_ppc_archive']],

	// maho
	['maho_goodday_http',		['macMaho_b']],
	['maho_goodday_ftp',		['macMaho_b']],
	['maho_fbircher_http',		['macMaho_b']],
	['maho_fbircher_ftp',		['macMaho_b']],

	// ooodev
	['ooodev_gwdg',			['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_solnet1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_solnet2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_chemnitz',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_muenster',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']], 
	['ooodev_tubs',			['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_switch1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_switch2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_tuwien',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_sunsite',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_esslingen1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_esslingen2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_chemnitz2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_tubs2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_gwdg2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_muenster2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_garr1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_kddi1',		[                                                         'pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_heanet1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_heanet2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_secsup1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_mirrorservice1',	['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_mirrorservice2',	['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_akl1',			['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_akl2',			['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
//	['ooodev_neacm1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
//	['ooodev_neacm2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_utah1',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_utah2',		['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_tds1',			['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_tds2',			['prooobox', 'prooobox_dvd', 'prooobox_lr', 'prooobox_ld','pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']],
	['ooodev_pacific',		[                                                         'pooo_win', 'pooo_winp', 'pooop_win', 'dicooofull']]
];                                                     
                                                       
                                                       
/*-------------------------------------------------------------------
--- FormReset beim laden des Windows rufen             
-------------------------------------------------------------------*/
if (window.attachEvent) {                              
	window.attachEvent('onload',resetForm);        
} else if (window.addEventListener) {
	window.addEventListener('load',resetForm,false);
	document.addEventListener('load',resetForm,false);
}


/*-----------------------------------------------------------------*/
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


/*-----------------------------------------------------------------*/
function resetForm() {
/*--- setzt wie Eingabe fuer Quickdownload auf Initialwerte
*/
	document.download.version.options.length = 0;
	document.download.version.disabled= true;
	document.download.mirror.options.length = 0;
	document.download.mirror.disabled= true;
	document.download.start.disabled= true;
	document.download.copybox.value = "";
	createPlatformList();

}

/*-------------------------------------------------------------------*/
function createPlatformList() {
/*--- baut die Liste verfuegbarer Plattformen im Select-Element
	'platform' auf */
var i;
var j = 0;
var k = 0;

	/* Liste leeren */
	document.download.platform.options.length = 0;
	//document.download.platform.options[0] = new Option('---','dummyplatform' );

	/* Array platforms durchlaufen und Key + Bezeichnug als Optionen einfuegen */
	for ( i=0; i<platforms.length ; i++) {
		document.download.platform.options[i] =
			new Option (platforms[i][1], platforms[i][0]);
			if ( platforms[i][0] == getParam( "platform") ) {
				/* wenn Eintrag der übergebenen platform entspricht -> Index setzen */
				document.download.platform.selectedIndex = i;
			}
		}
	if (document.download.platform.options.length > 0) {
		if (document.download.platform.selectedIndex < 0 )
			document.download.platform.selectedIndex = 0;
		makeOSVersion();
	}

}

/*-------------------------------------------------------------------*/
function makeOSVersion() {
/*- baut die Liste verfuegbarer Versionen in Abhägigkeit der gewälten
	 Plattform auf */
var i;
var j=0;

	/* gewälte Plattform holen */
	var platform = document.download.platform.options[document.download.platform.selectedIndex].value;
	/* Liste leeren */
	document.download.version.options.length = 0;
	/* array versions durchlaufen */
	for (i=0; i < versions.length ; i++) {
		if ( versions[i][0] == platform) {
			/* wenn <platform_key> in Array versions gleich der gewälten Plattform ist,
				neuen Eintrag erstellen */
			j++;
			document.download.version.options[document.download.version.options.length] =
					new Option(versions[i][2], versions[i][1] )
			if ( versions[i][1] == getParam( "version") ) {
				/* wenn Eintrag der übergebenen Version entspricht -> Index merken
					und später setzen */
				document.download.version.selectedIndex = j-1;
			}
		}
	}
	if ( document.download.version.options.length > 0 ){
		if (document.download.version.selectedIndex  < 0 )
			document.download.version.selectedIndex  = 0;
		document.download.version.disabled = false;
		makeMirrorList ();
	} else {
		document.download.version.disabled= true;
		document.download.mirror.options.length = 0;
		document.download.mirror.disabled= true;
		document.download.copybox.value = "";
		document.download.start.disabled= true;
	}

}

/*-------------------------------------------------------------------*/
function makeMirrorList() {
/*- Baut die Liste der Mirrors anhand der gewaehlten Platform / Version auf
 	und waehlt einen zufaelligen Mirror aus*/
var i;
var j;
var k;

	/* gewaehlte Plattform*/
	var platform = document.download.platform.value;

	/* Liste leeren */
	document.download.mirror.options.length = 0;
	if ( ! ( (platform == 'dummyplatform') ||
			 (document.download.version.value == '')
		   ) ) {
		/* array versions durchlaufen */
		for (i=0; i < mirror_platforms.length ; i++) {
			for (j=0; j < mirror_platforms[i][1].length ; j++) {
				if ( mirror_platforms[i][1][j] == platform) {
					/* Mirror ist gueltig - in mirrors array suchen */
					for (k=0; k < mirrors.length ; k++) {
						if ( mirror_platforms[i][0] == mirrors[k][0]) {
							document.download.mirror.options[document.download.mirror.options.length] =
								new Option(mirrors[k][1], mirrors[k][0] )
						}
					}
				}
			}
		}
	}
	if ( document.download.mirror.options.length > 0 ) {
		document.download.mirror.disabled = false;
		document.download.mirror.selectedIndex = Math.round ( Math.random()*
												(document.download.mirror.options.length - 1) );
		selectMirror();
	} else {
		document.download.mirror.disabled= true;
		document.download.copybox.value = "";
		document.download.start.disabled= true;
	}

}

/*-------------------------------------------------------------------*/
function selectMirror() {
/*- Mirror wurde ausgewhält - URL aus Plattform, Version und Mirror
	ermitteln und in die Copybox eintragen -*/
var i; var j; var k;

	/* gew?lte Plattform, Version und Mirror holen holen */
	var platform = document.download.platform.value;
	var vers = document.download.version.value;
	var mirror = document.download.mirror.value;

	if ( platform != '' & vers != '' & mirror != '' ) {
		/* mirror suchen und Basis-URL holen*/
		for (i=0; i < mirrors.length ; i++) {
			if ( mirrors[i][0] == mirror) {
				myURL = mirrors[i][2];
				/* jetzt noch Pfad entsprechend Platform / Version holen */
				for (j=0; j < versions.length ; j++) {
					if (versions[j][0] == platform & versions[j][1]  == vers ) {
						myURL = myURL + versions[j][3];
					}
				}
			}
		}
		if (myURL != '') {
			document.download.copybox.value = myURL;
			document.download.start.disabled = false;
		} else {
			alert ('Fehler im Script, es konnte keine URL ermittelt werden!');
		}
	}
}

/*-------------------------------------------------------------------*/
function startDownload() {
/*- Downloadknopf wurde gedrckt - URL aus Copybox lesen und
	Download starten-*/

	var myURL = document.download.copybox.value;
	if (myURL != '') 
	{
		var mykind = document.download.platform.value;
		switch (mykind) 
		{

		case "lin_x86d":
			alert( "Bitte deinstallieren Sie die distributionseigene Version,\nbevor Sie die Community-Version installieren." );
			break;
  		case "win":
		        alert("Manche Virenscanner blockieren bestimmte Dateizugriffe.\nDadurch wird die korrekte Installation von OpenOffice.org verhindert.\n\nSie sollten vor der Installation die Verbindung zum Internet trennen\nund Ihren Virenscanner voruebergehend (!) deaktivieren,\nda es ansonsten unter Umstaenden zu Problemen \n(Installationsfehler 1935) kommen kann.");
                        //window.location.href = "../about-ooo/about_unterstuetzung.html?dl=" + escape(myURL);
			break;
			/*
		case "mac":
		case "macIntel":
			alert("Haben Sie schon X11 installiert?\n\nNeuere Versionen von OpenOffice.org für Mac OS X benötigen mindestens Version 10.4.x des Apple-Betriebssystems. Für Nutzer der älteren Version 10.3.x stellen wir die OpenOffice.org-Version 2.0.3 bereit. Für Apple-User gibt es ein Mac MiniHowTO  (siehe unten und auf der Hinweis-Seite) mit Installationsanleitung und vielen Tipps für OOo auf dem Mac.");
                        //window.location.href = "../about-ooo/about_unterstuetzung.html?dl=" + escape(myURL);
			break;
			*/
		default:
			//window.location.href = myURL;
			//window.location.href = "../about-ooo/about_unterstuetzung.html?dl=" + escape(myURL);
			break;
		}
		window.location.href = "../about-ooo/about_unterstuetzung.html?dl=" + escape(myURL);
	}
	else 
	{
		alert ('Fehler im Script, es konnte keine URL ermittelt werden!');
	}
}
