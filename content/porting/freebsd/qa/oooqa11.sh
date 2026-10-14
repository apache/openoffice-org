Xvfb :1002 -screen 0 1024x768x24 -fbdir /work/tmp/oooqa11 &
sleep 5
DISPLAY=localhost:1002; export DISPLAY
gnome-session &
sleep 30
cd /work/ooo/1.1.5/
rm -rf *.core
rm -rf ~/.sversionrc ~/OpenOffice.org1.1.5/ qa/qatesttool/errorlog/maho* 
#create response file
TMPBASE=`basename $0`
TMPFILE=`mktemp /tmp/${TMPBASE}.XXXXXX`
cat << EOF >> ${TMPFILE}
[ENVIRONMENT]
INSTALLATIONMODE=INSTALL_WORKSTATION
INSTALLATIONTYPE=WORKSTATION
DESTINATIONPATH=~/OpenOffice.org1.1.5
OUTERPATH=
LOGFILE=install.log
LANGUAGELIST=01

[JAVA]
JavaSupport=preinstalled_or_none

EOF
/usr/local/bin/openoffice.org-1.1.5-setup -v -nogui -r:${TMPFILE}
bash qa/qatesttool/script/unix/OOoTestRun_unix.sh

