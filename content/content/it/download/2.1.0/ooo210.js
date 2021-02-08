function countTags(n) {
	var numtags=0;
	if (n.nodeType == 1 /*Node.ELEMENT_NODE*/)
		numtags++;
	var children = n.childNodes;
	for (var i=0 ; i < children.length; i++) {
		numtags += countTags(children[i]);
	}
	return numtags;
}

// myform = form object
// myselect = select object name

function formHandler(myURL)
{

//alert("MyURL : " + myURL);
if (myURL == 'Italiano') return;
nag2myURL="../contribute.html?continue="+escape(myURL);
window.location.href = nag2myURL;
//window.open(myURL);

}

function makeOSMirrors (s_index)
{

var myOS= new Array('windows','linux','windowsjre','linuxjre','ppclinux','solaris','solarisIntel','freebsd','mac');
// var myOS= new Array('windows','linux');

//input hopefully
var whatOS=myOS[s_index-1];
//alert("s_index: " + s_index);
//alert("whatOS: " + whatOS);


OSinfo = new Object;

OSinfo.windows = new Array(2);
OSinfo.windows[0] = new Array();
OSinfo.windows[1] = new Array();
OSinfo.windowsjre = new Array(2);
OSinfo.windowsjre[0] = new Array();
OSinfo.windowsjre[1] = new Array();
OSinfo.mac = new Array(2);
OSinfo.mac[0] = new Array();
OSinfo.mac[1] = new Array();
OSinfo.ppclinux = new Array(2);
OSinfo.ppclinux[0] = new Array();
OSinfo.ppclinux[1] = new Array();
OSinfo.freebsd = new Array(2);
OSinfo.freebsd[0] = new Array();
OSinfo.freebsd[1] = new Array();
OSinfo.linux = new Array(2);
OSinfo.linux[0] = new Array();
OSinfo.linux[1] = new Array();
OSinfo.linuxjre = new Array(2);
OSinfo.linuxjre[0] = new Array();
OSinfo.linuxjre[1] = new Array();
OSinfo.solaris = new Array(2);
OSinfo.solaris[0] = new Array();
OSinfo.solaris[1] = new Array();
OSinfo.solarisIntel = new Array(2);
OSinfo.solarisIntel[0] = new Array();
OSinfo.solarisIntel[1] = new Array();

//wants to do column load
// aha--perl like array processing--this does row loads
//windows=[['0','1'],['2','3'],['4','5'],['6','7']];


OSinfo.windows=[
['Italia - GARR (HTTP)', 'http://na.mirror.garr.it/mirrors/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Austria - Vienna (FTP)', 'ftp://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Austria - Vienna (HTTP)', 'http://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Belgio - Scarlet (FTP)', 'ftp://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Belgio - Scarlet (HTTP)', 'http://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Danimarca - dotsrc (FTP)', 'ftp://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Danimarca - dotsrc (HTTP)', 'http://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Danimarca - Sunsite (HTTP)', 'http://mirrors.sunsite.dk/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
//['Francia - Club Internet (FTP)', 'ftp://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
//['Francia - Club Internet (HTTP)', 'http://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Germania - GWDG (FTP)', 'ftp://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Germania - GWDG (HTTP)', 'http://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Germania - Monaco (HTTP)', 'http://ftp.leo.org/download/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Irlanda - Heanet (FTP)', 'ftp://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Irlanda - Heanet (HTTP)', 'http://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Rep. Ceca - CVUT (FTP)', 'ftp://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
['Rep. Ceca - CVUT (HTTP)', 'http://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe']
//['Svizzera - SolNet (FTP)', 'ftp://ftp.solnet.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
//['Svizzera - SWITCH (FTP)', 'ftp://mirror.switch.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe'],
//['Svizzera - SWITCH (HTTP)', 'http://mirror.switch.ch/ftp/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it.exe']
];
//end windows mirrors

OSinfo.linux=[
['Italia - GARR (HTTP)', 'http://na.mirror.garr.it/mirrors/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Austria - Vienna (FTP)', 'ftp://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Austria - Vienna (HTTP)', 'http://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Belgio - Scarlet (FTP)', 'ftp://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Belgio - Scarlet (HTTP)', 'http://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Danimarca - dotsrc (FTP)', 'ftp://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Danimarca - dotsrc (HTTP)', 'http://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Danimarca - Sunsite (HTTP)', 'http://mirrors.sunsite.dk/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
//['Francia - Club Internet (FTP)', 'ftp://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
//['Francia - Club Internet (HTTP)', 'http://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Germania - GWDG (FTP)', 'ftp://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Germania - GWDG (HTTP)', 'http://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Germania - Monaco (HTTP)', 'http://ftp.leo.org/download/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Irlanda - Heanet (FTP)', 'ftp://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Irlanda - Heanet (HTTP)', 'http://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Rep. Ceca - CVUT (FTP)', 'ftp://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
['Rep. Ceca - CVUT (HTTP)', 'http://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz']
//['Svizzera - SolNet (FTP)', 'ftp://ftp.solnet.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
//['Svizzera - SWITCH (FTP)', 'ftp://mirror.switch.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz'],
//['Svizzera - SWITCH (HTTP)', 'http://mirror.switch.ch/ftp/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it.tar.gz']
];
//end linux mirrors




OSinfo.windowsjre=[
['Italia - GARR (HTTP)', 'http://na.mirror.garr.it/mirrors/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Austria - Vienna (FTP)', 'ftp://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Austria - Vienna (HTTP)', 'http://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Belgio - Scarlet (FTP)', 'ftp://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Belgio - Scarlet (HTTP)', 'http://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Danimarca - dotsrc (FTP)', 'ftp://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Danimarca - dotsrc (HTTP)', 'http://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Danimarca - Sunsite (HTTP)', 'http://mirrors.sunsite.dk/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
//['Francia - Club Internet (FTP)', 'ftp://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
//['Francia - Club Internet (HTTP)', 'http://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Germania - GWDG (FTP)', 'ftp://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Germania - GWDG (HTTP)', 'http://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Germania - Monaco (HTTP)', 'http://ftp.leo.org/download/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Irlanda - Heanet (FTP)', 'ftp://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Irlanda - Heanet (HTTP)', 'http://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Rep. Ceca - CVUT (FTP)', 'ftp://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
['Rep. Ceca - CVUT (HTTP)', 'http://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
//['Svizzera - SolNet (FTP)', 'ftp://ftp.solnet.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
//['Svizzera - SWITCH (FTP)', 'ftp://mirror.switch.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe'],
//['Svizzera - SWITCH (HTTP)', 'http://mirror.switch.ch/ftp/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_Win32Intel_install_it_wJRE.exe']
];
////end windows mirrors



OSinfo.linuxjre=[
['Italia - GARR (HTTP)', 'http://na.mirror.garr.it/mirrors/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Austria - Vienna (FTP)', 'ftp://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Austria - Vienna (HTTP)', 'http://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Belgio - Scarlet (FTP)', 'ftp://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Belgio - Scarlet (HTTP)', 'http://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Danimarca - dotsrc (FTP)', 'ftp://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Danimarca - dotsrc (HTTP)', 'http://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Danimarca - Sunsite (HTTP)', 'http://mirrors.sunsite.dk/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
//['Francia - Club Internet (FTP)', 'ftp://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
//['Francia - Club Internet (HTTP)', 'http://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Germania - GWDG (FTP)', 'ftp://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Germania - GWDG (HTTP)', 'http://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Germania - Monaco (HTTP)', 'http://ftp.leo.org/download/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Irlanda - Heanet (FTP)', 'ftp://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Irlanda - Heanet (HTTP)', 'http://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Rep. Ceca - CVUT (FTP)', 'ftp://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
['Rep. Ceca - CVUT (HTTP)', 'http://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
//['Svizzera - SolNet (FTP)', 'ftp://ftp.solnet.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
//['Svizzera - SWITCH (FTP)', 'ftp://mirror.switch.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz'],
//['Svizzera - SWITCH (HTTP)', 'http://mirror.switch.ch/ftp/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_LinuxIntel_install_it_wJRE.tar.gz']
];
////end linux mirrors





OSinfo.ppclinux=[
['- PPC Linux page', 'http://www.openoffice.org/project/porting/linuxppc/ppclinks.html']
];
//end ppc linux 

OSinfo.freebsd=[
['- FreeBSD page', 'http://www.openoffice.org/project/porting/freebsd/']
];
//end freebsd

//OSinfo.mac =[
//['- Mac OS X page', 'http://www.openoffice.org/project/porting/mac/ooo-osx_downloads.html'],
//['Italia - GARR (HTTP)', 'http://na.mirror.garr.it/mirrors/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Austria - Vienna (FTP)', 'ftp://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Austria - Vienna (HTTP)', 'http://gd.tuwien.ac.at/office/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Belgio - Scarlet (FTP)', 'ftp://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Belgio - Scarlet (HTTP)', 'http://ftp.scarlet.be/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Danimarca - dotsrc (FTP)', 'ftp://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Danimarca - dotsrc (HTTP)', 'http://mirrors.dotsrc.org/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Danimarca - Sunsite (HTTP)', 'http://mirrors.sunsite.dk/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Francia - Club Internet (FTP)', 'ftp://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Francia - Club Internet (HTTP)', 'http://ftp.club-internet.fr/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Germania - GWDG (FTP)', 'ftp://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Germania - GWDG (HTTP)', 'http://ftp.gwdg.de/pub/misc/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Germania - Monaco (HTTP)', 'http://ftp.leo.org/download/pub/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Irlanda - Heanet (FTP)', 'ftp://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Irlanda - Heanet (HTTP)', 'http://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Rep. Ceca - CVUT (FTP)', 'ftp://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Rep. Ceca - CVUT (HTTP)', 'http://ftp.sh.cvut.cz/MIRRORS/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Svizzera - SolNet (FTP)', 'ftp://ftp.solnet.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Svizzera - SWITCH (FTP)', 'ftp://mirror.switch.ch/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Svizzera - SWITCH (HTTP)', 'http://mirror.switch.ch/ftp/mirror/openoffice/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg']
//];
////end Mac



//OSinfo.solaris=[
//['Italia - GARR (HTTP)', 'http://na.mirror.garr.it/mirrors/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Austria - Vienna (FTP)', 'ftp://gd.tuwien.ac.at/office/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Austria - Vienna (HTTP)', 'http://gd.tuwien.ac.at/office/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Belgio - Scarlet (FTP)', 'ftp://ftp.scarlet.be/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Belgio - Scarlet (HTTP)', 'http://ftp.scarlet.be/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Danimarca - dotsrc (FTP)', 'ftp://mirrors.dotsrc.org/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Danimarca - dotsrc (HTTP)', 'http://mirrors.dotsrc.org/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Danimarca - Sunsite (HTTP)', 'http://mirrors.sunsite.dk/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Francia - Club Internet (FTP)', 'ftp://ftp.club-internet.fr/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Francia - Club Internet (HTTP)', 'http://ftp.club-internet.fr/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Germania - GWDG (FTP)', 'ftp://ftp.gwdg.de/pub/misc/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Germania - GWDG (HTTP)', 'http://ftp.gwdg.de/pub/misc/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Germania - Monaco (HTTP)', 'http://ftp.leo.org/download/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Irlanda - Heanet (FTP)', 'ftp://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Irlanda - Heanet (HTTP)', 'http://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Rep. Ceca - CVUT (FTP)', 'ftp://ftp.sh.cvut.cz/MIRRORS/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Rep. Ceca - CVUT (HTTP)', 'http://ftp.sh.cvut.cz/MIRRORS/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Svizzera - SolNet (FTP)', 'ftp://ftp.solnet.ch/mirror/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Svizzera - SWITCH (FTP)', 'ftp://mirror.switch.ch/mirror/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz'],
//['Svizzera - SWITCH (HTTP)', 'http://mirror.switch.ch/ftp/mirror/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_SolarisSparc_install.tar.gz']
//];
////end SolarisSparc mirrors



//OSinfo.solarisIntel =[
//['Italia - GARR (HTTP)', 'http://na.mirror.garr.it/mirrors/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Austria - Vienna (FTP)', 'ftp://gd.tuwien.ac.at/office/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Austria - Vienna (HTTP)', 'http://gd.tuwien.ac.at/office/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Belgio - Scarlet (FTP)', 'ftp://ftp.scarlet.be/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Belgio - Scarlet (HTTP)', 'http://ftp.scarlet.be/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Danimarca - dotsrc (FTP)', 'ftp://mirrors.dotsrc.org/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Danimarca - dotsrc (HTTP)', 'http://mirrors.dotsrc.org/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Danimarca - Sunsite (HTTP)', 'http://mirrors.sunsite.dk/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Francia - Club Internet (FTP)', 'ftp://ftp.club-internet.fr/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Francia - Club Internet (HTTP)', 'http://ftp.club-internet.fr/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Germania - GWDG (FTP)', 'ftp://ftp.gwdg.de/pub/misc/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Germania - GWDG (HTTP)', 'http://ftp.gwdg.de/pub/misc/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Germania - Monaco (HTTP)', 'http://ftp.leo.org/download/pub/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Irlanda - Heanet (FTP)', 'ftp://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Irlanda - Heanet (HTTP)', 'http://ftp.heanet.ie/mirrors/openoffice.org/localized/it/2.0.4/OOo_2.0.4_MacOSXPPC_install_it.dmg'],
//['Rep. Ceca - CVUT (FTP)', 'ftp://ftp.sh.cvut.cz/MIRRORS/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Rep. Ceca - CVUT (HTTP)', 'http://ftp.sh.cvut.cz/MIRRORS/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Svizzera - SolNet (FTP)', 'ftp://ftp.solnet.ch/mirror/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Svizzera - SWITCH (FTP)', 'ftp://mirror.switch.ch/mirror/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz'],
//['Svizzera - SWITCH (HTTP)', 'http://mirror.switch.ch/ftp/mirror/openoffice/contrib/rc/2.0.4rc7/OOo_2.0.4rc7_060622_Solarisx86_install.tar.gz']
//];
////end SolarisIntel

//length of current options
var opt_counter=1;
//alert("Array length for whatOS: " + OSinfo[whatOS].length);
// reset options
document.download.mirror.options.length=1;

OSinfo[whatOS].sort();
for (var i=0; i < OSinfo[whatOS].length ; i++) {
		var new_item=new Option(OSinfo[whatOS][i][0],OSinfo[whatOS][i][1]);
		document.download.mirror.options[opt_counter] = new_item;
//    alert(opt_counter + "new value :" + document.download.mirror.options[opt_counter].value);
		opt_counter++;
	}

}
// end mirror gen options function
// $Revision: 1.1 $ $Date: 2006/12/11 21:32:48 $

