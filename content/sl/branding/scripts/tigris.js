// Focus on first form fields in login, password edit 
// and request pages. Checks for the correct form id first
// then matches the input name for focus.
function loginfocus() {
  if (document.getElementById('loginform')) {
    document.getElementById('loginform').loginID.focus();
  } 
  else if (document.getElementById('certloginform')) {
   document.getElementById('certloginform').password.focus();
  } 
  else if (document.getElementById('passwordeditform')) {
    document.getElementById('passwordeditform').passwd.focus();
  }
  else if (document.getElementById('passwordform')) {
    document.getElementById('passwordform').loginID.focus();
 }
}

// Hash to associate a child window with the element "interested"
// in it.  Used to allow popup windows to communicate a value back
// to a specific form element (Note that since js has no globals, 
// this hash belongs to the window opener, and can only be accessed
// by the child via the 'opener' property):

var windowAssociatedWithElement = new Object;

// Set the value of the element that opened this window, and close
// this window:

function setOpenerValue(newVal) {
  var retValue = true;
  if ( self.opener && !self.opener.closed ){
    opener.windowAssociatedWithElement[self].value = newVal;
    // return the focus to the parent window, and the element
    // which called it: 
    opener.focus();
    opener.windowAssociatedWithElement[self].focus();
    retValue = false;
  }
  window.close();
  return retValue;
}

// Check if a form field has changed from its initial value:
function fieldChanged(formField) {
    if( formField.defaultValue != formField.value ){
        return true;
    }
    else {
        return false;
    }
}

/* Open popup widows of (mostly) predetermined types.

   windowURL -- The URL to load in the new browser window.
   type -- The (predetermined) type of window to launch.
           acceptable values for type:
           1: a help window
           2: a 400x400 window
           3: Issuezilla assignable users popup window
           4: ViewCVS file contents display popup window
           ... and you can hard code others yourself inside the function.
   atts -- (optional) If the window you wish to create is unique and you do
           not want to set up a "type" for it, or if you want to pass
           additional attributes for a certain "type", you can pass its
           attributes directly to the function via this parameter.
   formElementRef -- (optional) reference to a form element which was
           responsible for opening this window, and interested in in its
           choices.
*/

var tigrisPopupCounter = 0;

function launch(windowURL, type, atts, formElementRef) {
  tigrisPopupCounter += 1;

  var windowName = 'CollabNet' + type;
  if (atts) {
    windowName += tigrisPopupCounter;
  }

  var windowAttributes;
  if (type == 1) {
    windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' +
                       'height=485,width=724,status=yes,scrollbars=yes,' +
                       'toolbar=yes,menubar=yes,location=yes'
  }
  else if (type == 2) {
    windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' +
                       'height=400,width=400';
  }
  else if (type == 3) {
   windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' + 
                      'height=440,width=600,scrollbars=yes'; 
  }
  else if (type == 4) {
    windowAttributes = 'resizable=yes,left=10,top=10,screenX=12,screenY=12,' +
                       'height=485,width=724,scrollbars=yes';
  }
  if (atts) {
    windowAttributes += ',' + atts;
  }

  var windowObj = window.open(windowURL, windowName, windowAttributes);

  if (windowObj) {
    if (formElementRef) {
      // Take note of the element that wanted this window opened:
      windowAssociatedWithElement[windowObj] = formElementRef; 
    }
    return false;
  }
  else {
    return true;
  }
}
