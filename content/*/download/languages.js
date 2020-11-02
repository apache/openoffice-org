/* Description of the array elements

  a: Language code - splitted ISO code for identification (used in "download.js --> getLanguage() )
  b: Region code   - splitted ISO code for identification (used in "download.js --> getLanguage() )
  0: Language as complete ISO code
  1: Language name in English
  2: Language name in native language (with UTF-8 character set)
  3: Flag for mirrorsystem usage ('y' to use SourceForge and 'n' to use the alternative webpage) (currently not used)
  4: Alternative link to download, e.g., to the Native Language community webpage (currently not used)

a	 b	 0	  1				2
*/

DL.language_matrix = {
// All listed languages below *are* supported and *are* available as full installation and language pack.

"ast": { "-" : [ 'ast',   'Asturian',			'Asturianu' ] },
"bg":  { "-" : [ 'bg',    'Bulgarian',			'български език' ] },
"ca":  { "-" : [ 'ca',    'Catalan',			'Català' ],
         "xr": [ 'ca-XR', 'Catalan',			'Català (Valencià RACV)' ],
         "xv": [ 'ca-XV', 'Catalan (Valencian)',	'Català (Valencià AVL)' ] },
"cs":  { "-" : [ 'cs',    'Czech',			'Čeština' ] },
"da":  { "-" : [ 'da',    'Danish',			'Dansk' ] },
"de":  { "-" : [ 'de',    'German',			'Deutsch' ] },
"el":  { "-" : [ 'el',    'Greek',			'&Epsilon;&lambda;&lambda;&eta;&nu;&iota;&kappa;ά' ] },
"en":  { "-" : [ 'en',    'English',			'English' ],
         "en": [ 'en-EN', 'English',			'English' ],
         "gb": [ 'en-GB', 'English (British)',		'English (British)' ],
         "us": [ 'en-US', 'English (US)',		'English (US)' ] },
"es":  { "-" : [ 'es',    'Spanish',			'Espa&ntilde;ol' ] },
"eu":  { "-" : [ 'eu',    'Basque',			'Euskara' ] },
"fi":  { "-" : [ 'fi',    'Finnish',			'Suomi' ] },
"fr":  { "-" : [ 'fr',    'French',			'Fran&ccedil;ais' ] },
"gd":  { "-" : [ 'gd',    'Scottish (Gaelic)',		'Gàidhlig' ] },
"gl":  { "-" : [ 'gl',    'Galician',			'Galego' ] },
"he":  { "-" : [ 'he',    'Hebrew',			'עברית' ] },
"hi":  { "-" : [ 'hi',    'Hindi',			'हिन्दी' ] },
"hu":  { "-" : [ 'hu',    'Hungarian',			'Magyar' ] },
"it":  { "-" : [ 'it',    'Italian',			'Italiano' ] },
"ja":  { "-" : [ 'ja',    'Japanese',			'日本語' ] },
"km":  { "-" : [ 'km',    'Khmer',			'ភាសាខ្មែរ' ] },
"ko":  { "-" : [ 'ko',    'Korean',			'한국어' ] },
"lt":  { "-" : [ 'lt',    'Lithuanian',			'Lietuvių' ] },
"nb":  { "-" : [ 'nb',    'Norwegian (Bokmal)',		'Norsk (Bokmål)' ] },
"nl":  { "-" : [ 'nl',    'Dutch',			'Nederlands' ] },
"pl":  { "-" : [ 'pl',    'Polish',			'Polski' ] },
"pt":  { "-" : [ 'pt',    'Portuguese (European)',	'Portugu&ecirc;s (Europeu)' ],
         "br": [ 'pt-BR', 'Portuguese (Brazilian)',	'Portugu&ecirc;s (do Brasil)' ],
         "pt": [ 'pt',    'Portuguese (European)',	'Portugu&ecirc;s (Europeu)' ] },
"ru":  { "-" : [ 'ru',    'Russian',			'Русский' ] },
"sk":  { "-" : [ 'sk',    'Slovak',			'Slovenský jazyk (slovenčina)' ] },
"sr":  { "-" : [ 'sr',    'Serbian (Cyrillic)',		'Cрпски (ћирилицом)' ] },
"sl":  { "-" : [ 'sl',    'Slovenian',			'Slovenski jezik (slovenščina)' ] },
"sv":  { "-" : [ 'sv',    'Swedish',			'Svenska' ] },
"ta":  { "-" : [ 'ta',    'Tamil',			'தமிழ்' ] },
"th":  { "-" : [ 'th',    'Thai',			'ภาษาไทย' ] },
"tr":  { "-" : [ 'tr',    'Turkish',			'T&uuml;rk&ccedil;e' ] },
"vi":  { "-" : [ 'vi',    'Vietnamese',			'Tiếng Việt' ] },
"zh":  { "-" : [ 'zh',    'Chinese',			'Chinese' ],
         "cn": [ 'zh-CN', 'Chinese (simplified)',	'简体中文' ],
         "tw": [ 'zh-TW', 'Chinese (traditional)',	'正體中文' ] },

// All listed languages below *are not supported* and *not* available as full installation and language pack.
"ar":  { "-" : [ 'ar',    'Arabic',			'عربي' ] },
"as":  { "-" : [ 'as',    'Assamese',			'অসমীয়া' ] },
"be":  { "-" : [ 'be',    'Belarusian',			'Беларуская мова' ],
         "be": [ 'be-BE', 'Belarusian',			'Беларуская мова' ],
         "by": [ 'be-BY', 'Belarusian',			'Беларуская мова' ] },
"bn":  { "-" : [ 'bn',    'Bengali',			'বাংলা' ] },
"my":  { "-" : [ 'my',    'Burmese',			'မြန်မာဘာသာ' ] },
"hr":  { "-" : [ 'hr',    'Croatian',			'hrvatski' ] },
"dz":  { "-" : [ 'dz',    'Dzongkha',			'རྫོང་ཁ' ] },
"eo":  { "-" : [ 'eo',    'Esperanto',			'Esperanto' ] },
"et":  { "-" : [ 'et',    'Estonian',			'Eesti keel' ] },
"ka":  { "-" : [ 'ka',    'Georgian',			'ქართული ენა' ] },
"gu":  { "-" : [ 'gu',    'Gujarati',			'ગુજરાતી' ] },
"is":  { "-" : [ 'is',    'Icelandic',			'Íslenska' ] },
"id":  { "-" : [ 'id',    'Indonesian',			'Bahasa Indonesia' ] },
"ga":  { "-" : [ 'ga',    'Irish',			'Gaeilge' ] },
"kn":  { "-" : [ 'kn',    'Kannada',			'ಕನ್ನಡ' ] },
"ku":  { "-" : [ 'ku',    'Kurdish',			'Kurdî' ] },
"lv":  { "-" : [ 'lv',    'Latvian',			'Latviešu valoda' ] },
"lo":  { "-" : [ 'lo',    'Laotian',			'ພາສາລາວ' ] },
"mk":  { "-" : [ 'mk',    'Macedonian',			'Македонски' ] },
"ml":  { "-" : [ 'ml',    'Malayalam',			'മലയാളം' ] },
"ms":  { "-" : [ 'ms',    'Malaysian',			'بهاس ملايو' ] },
"mr":  { "-" : [ 'mr',    'Marathi',			'मराठी' ] },
"mn":  { "-" : [ 'mn',    'Mongolian',			'Монгол хэл' ] },
"nn":  { "-" : [ 'nn',    'Norwegian (Nynorsk)',	'Norsk (Nynorsk)' ] },
"no":  { "-" : [ 'no',    'Norwegian',			'Norsk' ] },
"oc":  { "-" : [ 'oc',    'Occitan',			'Occitan' ] },
"or":  { "-" : [ 'or',    'Oriya',			'ଓଡ଼ିଆ' ] },
"om":  { "-" : [ 'om',    'Oromo',			'ኦሮሚኛ' ] },
"pa":  { "-" : [ 'pa',    'Punjabi',			'ਪੰਜਾਬੀ' ],
         "pa": [ 'pa-PA', 'Punjabi',			'ਪੰਜਾਬੀ' ],
         "in": [ 'pa-IN', 'Punjabi',			'ਪੰਜਾਬੀ' ] },
"ro":  { "-" : [ 'ro',    'Romanian',			'Română' ] },
"sh":  { "-" : [ 'sh',    'Serbian (Latin)',		'Srpski (latinicom)' ] },
"si":  { "-" : [ 'si',    'Sinhala',			'සිංහල' ] },
"te":  { "-" : [ 'te',    'Telugu',			'తెలుగు' ] },
"uk":  { "-" : [ 'uk',    'Ukrainian',			'Yкраї́нська мо́ва' ] },
"ug":  { "-" : [ 'ug',    'Uyghur',			'ئۇيغۇرچە‎' ] },
"uz":  { "-" : [ 'uz',    'Uzbek',			'Ўзбек' ] },
"cy":  { "-" : [ 'cy',    'Welsh',			'Cymraeg' ] }
};

