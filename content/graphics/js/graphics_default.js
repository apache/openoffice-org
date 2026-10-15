
window.onload=function(){ onLoad(); }

function onLoad()
{
    // in the left hand side menu, hilight the item representing the current page
    hilighCurrentMenuItem();
}

function hilighCurrentMenuItem()
{
    var heading = document.getElementsByTagName( "h1" )[0];
    var currentMenuItem = document.getElementById( heading.id + "_item_menu_left" );
    var menuItemLink = currentMenuItem.getElementsByTagName( "a" )[0];
    menuItemLink.setAttribute( "class", "selected" );
}
