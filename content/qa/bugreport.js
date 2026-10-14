/* IssueTracker Helper */
/* Adapted from BugZilla Helper */
/* Adapted by brantgurganus2001@cherokeescouting.org */

/* Variables */
var readyToFile = false;          // The user is not ready to file.

/* Checks for valid input in the helper. */
function CheckValues(activeForm) {
  /* Check if there are less than 3 words. */
  if ((activeForm.short_desc.value.split(' ')).length < 3) {
    alert("Summary: Please provide a more descriptive summary.\nYou must have at least three words.");
  }
  else if ((activeForm.comment.value.split(' ')).length < 30) {
    alert("Description: Please proved a better, in-depth description of your issue.\nMake sure you include:\n * Steps to Reproduce\n * Expected Results\n * Actual Results");
  }
  else {
    readyToFile = true;
  }
}
  
/* Open and pre-fill an IssueTracker "Enter Bug" page. */
function OpenEnterBugPage() {
  CheckValues(document.forms.helper);
  if (readyToFile) {
    document.forms.helper.submit();
  }
}

/* Use %2B instead of the plus symbol. */
function ConvertPlus(aString) {
  /* If the string doesn't have a plus sign, exit the function. */
  if (aString.indexOf("+") == -1) {
    return aString;
  }
  
  /* Replace the plus symbols. */
  return aString.replace(/[\+]{1}/g, "%2B");
}

/* Prefill some form controls on the helper with information from the USERAGENT string. */
function PrefillIssueInfoForm() {
  var activeForm = document.forms.helper;  // This is the form.
  var userAgent = navigator.userAgent;  // Get the USERAGENT string from the browser.
  var platform;        // Holder for platform name.
  var OS;          // Holder for OS name.
  
  /* Check for Windows. */ 
  if (userAgent.match(/Win/)) {
    platform = "PC";
    
    /* Check for 16-bit Windows. */
    if ( userAgent.match( /Win.*16/ )) {
      OS = "Windows 3.1";
    }
    
    /* Check for Windows XP. */
    else if (userAgent.match( "Windows NT 5.1")) {
      OS = "Windows XP";
    }
    
    /* Check for Windows 2000. */
    else if (userAgent.match( "Windows NT 5")) {
      OS = "Windows 2000";
    }
    
    /* Check for Windows NT or another 32-bit Windows sytem. */
    else if (userAgent.match( "32bit") || userAgent.match( /Win.*NT/)) {
      OS = "Windows NT";
    }
    
    /* Check for Windows 95. */
    else if ( userAgent.match( /Win.*95/ )) {
      OS = "Windows 95";
    }
    
    /* Check for Windows 98. */
    else if ( userAgent.match( /Win.*98/ )) {
      OS = "Windows 98";
    }
        }
  
  /* Check for Macintosh. */
  else if ( userAgent.match( "Mac" )) {
    platform = "Macintosh";
    
    /* Check for Mac System 8.5. */
    if ( userAgent.match( "PPC" )) {
      OS = "Mac System 8.5";
    }
    
    /* Check for Macintosh System 8.5. */
    else if ( userAgent.match( "68K" )) {
      OS = "Mac System 8.5";
    }
        }
  
  /* Check for Linux. */
  else if ( userAgent.match( "Linux" )) {
    OS = "Linux";
    
    /* Check for PC Linux. */
    if ( userAgent.match( "86"  )) {
      platform = "PC";
    }
    
    /* Check for DEC Linux. */
    else {
      platforn = "DEC";
    }
        }
  
  /* Check for OSF */
  else if ( userAgent.match( "OSF" )) {
    platform = "DEC";
    OS = "OSF/1";
        }
  
  /* check for IRIX. */
  else if ( userAgent.match( "IRIX" )) {
    platform = "SGI";
    OS = "IRIX";
        }
  
  /* check for HP. */
  else if ( userAgent.match( "HP" )) {
    platform = "HP";
        }
  
  /* Check for SunOS or Solaris. */
  else if ( userAgent.match( /SunOS|Solaris/ )) {
    platform = "Sun";
    
    /* Check for Solaris. */
    if ( userAgent.match ( /SunOS 5/ )) {
      OS = "Solaris";
    }
    
    /* Check for SunOS. */
    else {
      OS = "SunOS";
    }
        }
  
  /* Check for BSD. */
  else if ( userAgent.match( "BSD" )) {
    platform = "BSDI";
    OS = "BSDI";
  }
  
  /* Check if platform is set. */
  if (platform) {
    for (var i = 0; i < activeForm.platform.options.length; i++) {
      
      /* Check if values are the same. */
      if ( activeForm.platform.options[i].value == platform ) {
        activeForm.platform.selectedIndex = i;
      }
    }
  }
  
  /* Check if OS is set. */
  if (OS) {
    for (i = 0; i < activeForm.OS.options.length; i++) {
      
      /* Check if values are the same. */
      if ( activeForm.OS.options[i].value == OS ) {
        activeForm.OS.selectedIndex = i;
      }
    }
  }
}

/* Replace the subcomponent list. */
function ReplaceSubcomponentSelect(activeForm, anArray) {
  activeForm.subcomponent.options.length = 0;
  for (var i = 0; i < anArray.length; i++) {
    activeForm.subcomponent.options[i] = new Option(anArray[i], anArray[i]);
  }
  activeForm.subcomponent.selectedIndex = 0;
}

function ReplaceVersionSelect(activeForm, anArray) {
  activeForm.version.options.length = 0;
  for (var i = 0; i < anArray.length; i++) {
    activeForm.version.options[i] = new Option(anArray[i], anArray[i]);
  }
  activeForm.version.selectedIndex = 0;
}

/* Update subcomponent list. */
function UpdateSubcomponentList(activeForm) {
  var component = activeForm.component.selectedIndex;
  
  /* Determine the version list to which to change. */
  switch(component) {
    /* word processor */
    case 0:
      ReplaceSubcomponentSelect(activeForm, wordProcessorSubcomponentList);
      break;
    /* spreadsheet */
    case 1:
      ReplaceSubcomponentSelect(activeForm, spreadsheetSubcomponentList);
      break;
    /* presentation */
    case 2:
      ReplaceSubcomponentSelect(activeForm, presentationSubcomponentList);
      break;
    /* installation */
          case 3:
      ReplaceSubcomponentSelect(activeForm, installationSubcomponentList);
      break;
    /* drawing */
          case 4:
      ReplaceSubcomponentSelect(activeForm, drawingSubcomponentList);
      break;
    /* formula editor */
    case 5:
      ReplaceSubcomponentSelect(activeForm, formulaEditorSubcomponentList);
      break;
    /* database access */
    case 6:
      ReplaceSubcomponentSelect(activeForm, databaseAccessSubcomponentList);
      break;
    /* l10n */
    case 7:
      ReplaceSubcomponentSelect(activeForm, l10nSubcomponentList);
      break;
    /* www */
    case 8:
      ReplaceSubcomponentSelect(activeForm, wwwSubcomponentList);
      break;
  }
}

/* Update the version list. */
function UpdateVersionList(activeForm) {
  var component = activeForm.component.selectedIndex;
  
  /* Determine the subcomponent list to which to change. */
  switch(component) {
    /* word processor */
    case 0:
      ReplaceVersionSelect(activeForm, wordProcessorVersionList);
      break;
    /* spreadsheet */
          case 1:
      ReplaceVersionSelect(activeForm, spreadsheetVersionList);
      break;
    /* presentation */
    case 2:
      ReplaceVersionSelect(activeForm, presentationVersionList);
      break;
    /* installation */
          case 3:
      ReplaceVersionSelect(activeForm, installationVersionList);
      break;
    /* drawing */
          case 4:
      ReplaceVersionSelect(activeForm, drawingVersionList);
      break;
    /* formula editor */
    case 5:
      ReplaceVersionSelect(activeForm, formulaEditorVersionList);
      break;
    /* database access */
    case 6:
      ReplaceVersionSelect(activeForm, databaseAccessVersionList);
      break;
    /* l10n */
    case 7:
      ReplaceVersionSelect(activeForm, l10nVersionList);
      break;
    /* www */
    case 8:
      ReplaceVersionSelect(activeForm, wwwVersionList);
      break;
  }
}

/* word processor Subcomponent List */
const wordProcessorSubcomponentList = [
  "code",
  "ui"
  ];
/* spreadsheet Subcomponent List */
const spreadsheetSubcomponentList = [
  "code",
  "ui"
  ];
/* presentation Subcomponent List */
const presentationSubcomponentList = [
  "code",
  "ui"
  ];
/* installation Subcomponent List */
const installationSubcomponentList = [
  "code",
  "ui",
  "www"
  ];
/* drawing Subcomponent List */
const drawingSubcomponentList = [
  "code",
  "ui"
  ];
/* formula editor Subcomponent List */
const formulaEditorSubcomponentList = [
  "code",
  "ui"
  ];
/* database access Subcomponent List */
const databaseAccessSubcomponentList = [
  "code",
  "ui"
  ];
/* l10n Subcomponent List */
const l10nSubcomponentList = [
  "BIDI",
  "code",
  "ui",
  "www"
  ];
/* www Subcomponent List */
const wwwSubcomponentList = [
  "documentation",
  "metrics report",
  "openoffice.org administrative interface",
  "openoffice.org CVS",
  "openoffice.org IssueTracker",
  "openoffice.org mailing lists",
  "openoffice.org source browsing",
  "openoffice.org source downloads",
  "openoffice.org Upgrade",
  "openoffice.org website general issues",
  "www"
  ];
/* word processor Version List */
const wordProcessorVersionList = [
  "1.0.0",
  "1.0.1",
  "643"
  ];
/* spreadsheet Version List */
const spreadsheetVersionList = [
  "1.0.0",
  "1.0.1",
  "643"
  ];
/* presentation Version List */
const presentationVersionList = [
  "1.0.0",
  "1.0.1",
  "643"
  ];
/* installation Version List */
const installationVersionList = [
  "1.0.0",
  "1.0.1",
  "643"
  ];
/* drawing Version List */
const drawingVersionList = [
  "1.0.0",
  "1.0.1",
  "643"
  ];
/* formula editor Version List */
const formulaEditorVersionList = [
  "1.0.0",
  "1.0.1",
  "643"
  ];
/* database access Version List */
const databaseAccessVersionList = [
  "1.0.0",
  "1.0.1",
  "643"
  ];
/* l10n Version List */
const l10nVersionList = [
  "1.0.0",
  "643"
  ];
/* www Version List */
const wwwVersionList = [
  "current"
  ];
