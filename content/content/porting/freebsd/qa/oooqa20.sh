Xvfb :1001 -screen 0 1024x768x24 -fbdir /work/tmp/oooqa20 &
sleep 5
DISPLAY=localhost:1001; export DISPLAY
gnome-session &
sleep 30
cd /work/ooo/2.0/
rm *.core
#cp ~/.testtoolrc2 ~/.testtoolrc
rm -rf ~/.openoffice.org*
rm -rf qa/qatesttool/errorlog/maho
bash qa/qatesttool/script/unix/OOoTestRun_unix.sh




