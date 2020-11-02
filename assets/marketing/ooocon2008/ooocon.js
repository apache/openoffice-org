/*
Programme: 	ooocon.js
Author:			John McCreesh
Written:		15-Apr-07
Modified:		
*/

/* 
 Simple function to create a dropdown menu
 The root menu must have an id="xxxroot"; 
 the dropdown menu must have an id="xxxmenu"
 and then this function is invoked as dropdown('xxx','visible')
 or dropdown('xxx','hidden')
*/
function dropdown(menu,action)
{
  var rootmenu = menu + 'root';
  var submenu = menu + 'menu';
  
  document.getElementById(submenu).style.visibility = action;

  if ( action == 'visible' )
  {
    var root = document.getElementById(rootmenu);
    var rootwidth = root.offsetWidth;
    document.getElementById(submenu).style.width = rootwidth + "px";
    
/*  here follows a horrid kludge to make IE and Firefox behave the same */
    var browser=navigator.appName
    if (browser=="Netscape")
    {
      document.getElementById("fixfox").style.display = "inherit";
    }
  }
}
