/////////////////////////////////////////////////////////////////////////////////
//                          Meeting Reminder Script                            //
//                                 writen by                                   //
//                              Raphael Bircher                                //
//                                Version 1.0                                  //
/////////////////////////////////////////////////////////////////////////////////

var mdate = 26; //Meeting Day
var mmonth = 3; //Meeting Month
var mhour = 10; //Meeting Houer
var myear = 2008; //Meeting year
var mminute = "00"; //Minute
var mtimestamp = Date.UTC(myear, mmonth - 1, mdate, mhour, mminute);
var oneday = 86400000;
var now = Date.parse(new Date());
var showmess = mtimestamp - oneday;
var endmess = mtimestamp + 7200000;
var ac = new Date(mtimestamp);
var meetingtime = ac.toLocaleString();
var ab = new Date();
var shortmess = 0;
if(now >= showmess && now <= endmess){
	shortmess = 1;
	 document.write('<b>Classroom reminder</b><br />Date: ' + meetingtime + ' localtime<br />Place: IRC<br />Network: freenode<br />Channel: #education.openoffice.org');
}
if (now < showmess && shortmess == 0){
	document.write('<span style="right">Date of next classroom is ' + meetingtime + ' localtime</span><br />');
}