/* first element: redir will redirect to contributing page, then to url,
   "here" will offer the download here and "skip" will directly go to the NL-webpage
   if NL-group has its own contributing webpage and want to use it */

/* skip for all, since contributing-page doesn't redirect anymore ...
   v1: ISO-short with array of 'skip/here' (old, not used),
   v2:   language name in en-US,
   v3:   link to native-lang-page,
   v4:   flag indicating if builds with JRE are available,
   v5:   flag for mirrorsystem usage ('y' to use Mirrorbrain and 'n' to use the NL-webpage),
   v6:   flag for mirrorsystem for MAC ( only in combination with previous flag! ) */

/* v1		   , v2		   , v3						     , v4, v5, v6 */

var languages = {
"en": {"-": ['here', 'English (US)', 'http://download.openoffice.org/next/other.html','n','y','y'],
      "us": ['here', 'English (US)', 'http://download.openoffice.org/next/other.html','n','y','y']}
};
