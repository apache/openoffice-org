#!/usr/bin/perl -w

# kls -- run this separately to build submission_gateway.html
#
# kls -- download submission_gateway.template and submission_gateway.pl (this file)
# kls --make needed changes to this file (also recommit)
# kls -- run: submission_gateway.pl submission_gateway.template > submistion_gateway.html
# kls -- review (test) output file submistion_gateway.html, and commit
#
# kls -- info for "By Project" table
# key = key (this is sort, not sorted by description!, second hash value)
# first value is actual BZ link -- MUST correpsond to BZ product categories
# second value is link description in table
# third value -- assigned person (maybe this doesn't work anymore)

%toplevels = ( 'api' => ['api','API','jsc'],
	'bibliographic' => ['bibliographic','Bibliographic',''],
          'dba' => ['Database%20access','Database Access','oj'],
          'documentation' => ['documentation','Documentation','kcarr'],
	'education' => ['education','Education',''],
	'extensions' => ['extensions','Extensions',''],
          'external' => ['external','External Sources','mh'],
	'formula editor' => ['Formula%20editor','Formula editor',''],
          'framework' => ['framework','Application Framework','mba'],
          'graphics' => ['Drawing','Graphics Applications','ka'],
          'gsl' => ['gsl','Graphic System Layer (GSL)','pl'],
          'installation' => ['Installation','Installation','is'],
          'l10n' => ['l10n','Localization and Internationalization (L10N/I18N)','pjanik'],
	'lingucomponent' => ['lingucomponent','Lingucomponent',''],
	'marketing' => ['marketing','Marketing',''],
	'native-lang' => ['native-lang','Native Language',''],
	'oopm' => ['oopm','Project Management',''],
	'performance' => ['performance','Performance',''],
          'porting' => ['porting','Porting','mh'],
          'qa' => ['qa', 'Quality Assurance (QA)','ja'],
          'sc' => ['Spreadsheet','Spreadsheet','nn'],
	'sdk' => ['sdk','Software Development Kit',''],
	'security' => ['security','Security',''],
          'script' => ['scripting','Scripting Engines','kr'],
	'specs' => ['specs','Specifications',''],
          'sw' => ['Word%20processor','Word Processing','ama'],
          'tools' => ['tools','Tools','mh'],
          'ucb' => ['ucb','Universal Content Broker (UCB)','mhu'],
          'udk' => ['udk','UNO Development Kit (UDK)','kr'],
          'ui'  => ['ui','User Interface Design','os'],
          'util' => ['framework','Utilities','cd'],
	'vba' => ['vba','Visual Basic for Applications',''],
	'wp' => ['wp','WordPerfect Integration',''],
	'www' => ['www','Website and other infrastructure',''],
          'xml' => ['xml','XML','mba']
	     );
	     
# kls -- info for "By Code Module" table
# 
# key = table item description
# first value in hash before '/' is actual BZ link -- MUST correpsond to BZ product categories
# value after '/' was once an issue subcategory. Used by BZ in oissue description
# third value -- assigned person (maybe this doesn't work anymore)
# generates issues with 'subcomponent=code', not used in BZ; and 
# 'issue_type=PATCH'. Shoule be 'cf-Bug_type=PATCH' for BZ.
# Both subcomponent and issue_type are ignored by BZ.

%allmodules = (
	       'accessibility' => ['gsl/accessibility', ''],
	       'afms' => ['external/afms', 'pl'],
               'agg' => ['external/agg', ''],
               'animations' => ['graphics/animations', 'thb'],
               'apache-commons' => ['external/apache-commons', ''],
               'apple_remote' => ['gsl/apple_remote', ''],
	       'autodoc' => ['tools/autodoc', ''],
	       'automation' => ['util/automation', 'gh'],
	       'avmedia' => ['graphics/avmedia', ''],
	       'basctl' => ['script/basctl', ''],
	       'basebmp' => ['gsl/basebmp', ''],
	       'basegfx' => ['graphics/basegfx', 'thb'],
	       'basic' => ['script/basic', ''],
	       'bean' => ['api/bean', ''],
	       'beanshell' => ['external/beanshell', ''],
	       'berkeleydb' => ['external/berkeleydb', ''],
	       'binfilter' => ['framework/binfilter', ''],
	       'bitstream_vera_fonts' => ['external/addons/bitstream_vera_fonts', ''],
	       'boost' => ['external/boost', ''],
	       'bridges' => ['udk/bridges', ''],
	       'cairo' => ['external/cairo', 'thb'],
	       'canvas' => ['gsl/canvas', 'thb'],
	       'chart2' => ['graphics/chart2', 'iha'],
	       'cli_ure' => ['udk/cli_ure', ''],
	       'codemaker' => ['udk/codemaker', ''],
	       'comphelper' => ['util/comphelper', 'fs'],
	       'configmgr' => ['util/configmgr', 'sb'],
	       'configure' => ['tools/config_office', 'rene'],
	       'connectivity' => ['dba/connectivity', ''],
	       'cosv' => ['tools/cosv', ''],
	       'cppcanvas' => ['gsl/cppcanvas', 'thb'],
	       'cppu' => ['udk/cppu', ''],
	       'cppuhelper' => ['udk/cppuhelper', ''],
	       'cppunit' => ['external/cppunit', ''],
	       'cpputools' => ['udk/cpputools', ''],
	       'crashrep' => ['porting/crashrep', ''],
	       'cui' => ['graphics/cui', ''],
	       'curl' => ['external/curl', ''],
	       'dbaccess' => ['dba/dbaccess', ''],
	       'default_images' => ['ui/default_images', ''],
	       'desktop' => ['framework/desktop', ''],
	       'dictionaries' => ['external/addons/dictionaries', ''],
	       'dmake' => ['tools/dmake', ''],
	       'drawinglayer' => ['graphics/drawinglayer', ''],
	       'dtrans' => ['gsl/dtrans', ''],
	       'editengine' => ['graphics/editengine', 'tl'],
	       'embeddedobj' => ['framework/embeddedobj', ''],
	       'embedserv' => ['framework/embedserv', ''],
	       'epm' => ['external/epm', ''],
	       'eventattacher' => ['util/eventattacher', 'ab'],
	       'expat' => ['external/expat', ''],
	       'extensions' => ['util/extensions', 'mh'],
	       'external' => ['util/external', 'mh'],
	       'external_images' => ['external/external_images', ''],
	       'extras' => ['installation/extras', ''],
	       'fileaccess' => ['util/fileaccess', 'mav'],
	       'filter' => ['framework/filter', ''],
	       'fondu' => ['external/fondu', ''],
	       'forms' => ['gsl/forms', ''],
	       'formula' => ['sc/formula', ''],
	       'fpicker' => ['gsl/fpicker', 'pl'],
	       'framework' => ['framework/framework', ''],
	       'goodies' => ['graphics/goodies', ''],
	       'graphite' => ['external/graphite', 'hdu'],
               'helpcontent2' => ['documentation/helpcontent2', ''],
	       'hsqldb' => ['external/hsqldb', 'oj'],
	       'hunspell' => ['external/hunspell', 'nemeth'],
	       'hwpfilter' => ['sw/hwpfilter', ''],
	       'hyphen' => ['external/hyphen', 'nemeth'],
	       'i18npool' => ['l10n/i18npool', 'er'],
	       'i18nutil' => ['l10n/i18nutil', 'er'],
	       'icc' => ['external/icc', 'pl'],
	       'icu' => ['external/icu', 'er'],
	       'idl' => ['framework/idl', ''],
	       'idlc' => ['udk/idlc', ''],
	       'instsetoo_native' => ['installation/instsetoo_native', ''],
	       'io' => ['util/io', 'sb'],
	       'javainstaller2' => ['installation/javainstaller2', ''],
	       'javaunohelper' => ['udk/javaunohelper', ''],
	       'jfreereport' => ['external/jfreereport', ''],
	       'jpeg' => ['external/jpeg', ''],
	       'jurt' => ['udk/jurt', ''],
	       'jvmaccess' => ['udk/jvmaccess', ''],
	       'jvmfwk' => ['udk/jvmfwk', 'jl'],
               'l10n' => ['l10n/l10n', ''],
               'libegg' => ['external/libegg', 'mmeeks'],
               'libtextcat' => ['external/libtextcat', ''],
               'libwpd' => ['external/libwpd', 'fridrich_strba'],
               'libxml2' => ['external/libxml2', ''],
               'libxmlsec' => ['external/libxmlsec', 'jl'],
               'libxslt' => ['external/libxslt', ''],
               'lingucomponent' => ['lingucomponent', ''],
	       'linguistic' => ['sw/linguistic', ''],
               'lpsolve' => ['external/lpsolve', ''],
               'lucene' => ['external/lucene', ''],
	       'MathMLDTD' => ['external/MathMLDTD', ''],
	       'migrationanalysis' => ['qa/qadevOOo', ''],
	       'moz' => ['external/moz', ''],
	       'neon' => ['external/neon', ''],
	       'np_sdk' => ['external/np_sdk', ''],
	       'nss' => ['external/nss', 'jl'],
	       'o3tl' => ['util/o3tl', 'thb'],
	       'odk' => ['api/odk', ''],
	       'offapi' => ['api/offapi', ''],
	       'officecfg' => ['util/officecfg', 'sb'],
	       'offuh' => ['api/offuh', ''],
	       'ooo_custom_images' => ['ui/ooo_custom_images', ''],
	       'oovbaapi' => ['api/oovbaapi', 'npower'],
	       'oox' => ['xml/oox', 'dr'],
	       'openssl' => ['external/openssl', ''],
	       'package' => ['xml/package', 'mav'],
	       'packimages' => ['installation/packimages', ''],
	       'padmin' => ['gsl/padmin', ''],
               'postprocess' => ['installation/postprocess', ''],
	       'psprint_config' => ['external/psprint_config', ''],
	       'python' => ['external/python', ''],
	       'pyuno' => ['udk/pyuno', 'jbu'],
	       'qadevOOo' => ['qa/qadevOOo', ''],
	       'rdbmaker' => ['udk/rdbmaker', ''],
	       'readlicense_oo' => ['installation/readlicense', ''],
	       'redland' => ['external/redland', ''],
	       'regexp' => ['external/regexp', ''],
	       'registry' => ['udk/registry', ''],
	       'remotebridges' => ['udk/remotebridges', ''],
	       'reportbuilder' => ['dba/reportbuilder', ''],
	       'reportdesign' => ['dba/reportdesign', ''],
	       'rhino' => ['external/rhino', ''],
	       'ridljar' => ['udk/ridljar', ''],
	       'rsc' => ['gsl/rsc', ''],
	       'sal' => ['porting/sal', 'sb'],
	       'salhelper' => ['udk/salhelper', ''],
	       'sane' => ['external/sane', ''],
	       'sax' => ['xml/sax', ''],
	       'saxon' => ['external/saxon', ''],
	       'sc' => ['sc/sc', ''],
	       'scaddins' => ['sc/scaddins', ''],
	       'sccomp' => ['sc/sccomp', ''],
	       'scp2' => ['installation/scp2', ''],
	       'scripting' => ['framework/scripting', 'kr'],
	       'sd' => ['graphics/sd', ''],
	       'sdext' => ['graphics/sdext', ''],
	       'setup_native' => ['installation/setup_native', ''],
	       'sfx2' => ['framework/sfx2', ''],
	       'shell' => ['gsl/shell', ''],
	       'slideshow' => ['graphics/slideshow', 'thb'],
	       'smoketestoo_native' => ['installation/smoketestoo_native', ''],
	       'soldep' => ['tools/soldep', ''],
	       'solenv' => ['tools/solenv', ''],
	       'soltools' => ['tools/soltools', ''],
	       'sot' => ['util/sot', 'mav'],
	       'splitbuild' => ['tools/splitbuild', ''],
	       'starmath' => ['sw/starmath', ''],
	       'stax' => ['external/stax', ''],
	       'stlport' => ['external/stlport', ''],
	       'stoc' => ['udk/stoc', ''],
	       'store' => ['ucb/store', ''],
	       'svl' => ['util/svl', 'cd'],
	       'svtools' => ['util/svtools', 'cd'],
	       'svx' => ['graphics/svx', ''],
	       'sw' => ['sw/sw', ''],
	       'swext' => ['sw/swext', ''],
	       'sysui' => ['gsl/sysui', ''],
               'test' => ['qa/test', 'sb'],
	       'testautomation' => ['qa/testautomation', ''],
	       'testshl2' => ['tools/testshl2', ''],
	       'testtools' => ['udk/testtools', ''],
	       'tomcat' => ['external/tomcat', ''],
	       'toolkit' => ['gsl/toolkit', ''],
	       'tools' => ['util/tools', 'cd'],
	       'transex3' => ['l10n/transex3', ''],
	       'twain' => ['external/twain', ''],
	       'ucb' => ['ucb/ucb', ''],
	       'ucbhelper' => ['ucb/ucbhelper', ''],
	       'udkapi' => ['api/udkapi', ''],
	       'udm' => ['tools/udm', ''],
	       'unixODBC' => ['external/unixODBC', 'oj'],
	       'UnoControls' => ['gsl/UnoControls', ''],
               'unodevtools' => ['api/unodevtools', ''],
	       'unoil' => ['udk/unoil', ''],
	       'unotools' => ['util/unotools', 'fs'],
	       'unoxml' => ['framework/unoxml', ''],
	       'ure' => ['udk/ure', 'sb'],
	       'uui' => ['ucb/uui', ''],
	       'vbahelper' => ['api/vbahelper', 'npower'],
	       'vcl' => ['gsl/vcl', ''],
	       'vigra' => ['external/vigra', 'thb'],
	       'vos' => ['udk/vos', ''],
	       'wizards' => ['installation/wizards', ''],
               'writerfilter' => ['sw/writerfilter', ''],
               'writerperfect' => ['sw/writerperfect', 'fridrich_strba'],
	       'x11_extensions' => ['external/x11_extensions', 'pl'],
	       'xmerge' => ['xml/xmerge', ''],
	       'xml2cmp' => ['tools/xml2cmp', ''],
	       'xmlhelp' => ['util/xmlhelp', 'ab'],
	       'xmloff' => ['xml/xmloff', ''],
	       'xmlscript' => ['script/xmlscript', ''],
	       'xmlsecurity' => ['xml/xmlsecurity', ''],
	       'xpdf' => ['external/xpdf', ''],
	       'xsltml' => ['external/xsltml', 'mav'],
	       'zlib' => ['external/zlib', '']
	      );

# some projects are dead, but do still contain code
%dead_projects = (
           'oi' => 'oi',
           'whiteboard' => 'whiteboard'
          );

%exceptions = (
	       'sd' => 'Drawing',                       # graphics
	       'chart2' => 'Chart',                        # graphics
           'lingucomponent' => 'lingucomponent',    # whiteboard
           'writerperfect' => 'wp',
           'libwpd' => 'wp',
	       );

%languages = (
	      'Brazilian(Pt)' => 'br-pt',
	      'Catalan' => 'ca',
	      'Czech' => 'cs',
	      'Danish' => 'da',
	      'German' => 'de',
	      'Greek' => 'el',
	      'Spanish' => 'es',
	      'Basque' => 'eu',
	      'Finnish' => 'fi',
	      'French' => 'fr',
	      'Hindi' => 'hi',
	      'Hungarian' => 'hu',
	      'Japanese' => 'ja',
	      'Korean' => 'ko',
	      'Laotian' => 'lo',
          'Malaysian' => 'ms',
          'Netherlands' => 'nl',
          'Norwegian' => 'no',
          'Portugese' => 'pt',
          'Romanian' => 'ro',
          'Russian' => 'ru',
          'Serbian' => 'sr',
          'Slovak' => 'sk',
          'Slovenian' => 'sl',
          'Swedish' => 'sv',
          'Tamil' => 'ta',
          'Thai' => 'th',
          'Turkish' => 'tr',
          'Vietnamese' => 'vi',
          'Chinese' => 'zh',
      );

sub build_substitutions($)
{
    my $value;
    my $subs = shift;
    
    ### languages ###
    $value = '';
    $element_cols = 5;
    @element_keys = sort keys %languages;
    $element_index = 0;

    while ($element_index < $#element_keys ) {
        $value .= '<td valign="top" align="left"><table border=0 cellspacing=1>';
        $toggle = 1;
        for (my $item = 0; ( $item < $#element_keys / $element_cols ) && ( $element_index < $#element_keys ); ++$item, ++$element_index) {
        $value .= '<tr class="';
        $value .= $toggle ? "a" : "b", $toggle = !$toggle;
        $value .= '"><td><a href="/issues/enter_bug.cgi?product=';
        $value .= $languages{$element_keys[$element_index]};
        $value .= '">' . $element_keys[$element_index] . "</a></td></tr>\n";
        }
        $value .= "</table></td>";
    }
    $subs->{'%% All langs %%'} = $value;

    ### projects ###
    $value = '';
    my $element_cols = 4;
    my @element_keys = sort keys %toplevels;
    my $element_index = 0;

    while ($element_index <= $#element_keys ) {
        $value .= '<td valign="top" align="left"><table>';
        my $toggle = 1;
        for (my $item = 0; ( $item < $#element_keys / $element_cols ) && ( $element_index <= $#element_keys ); ++$item, ++$element_index) {
        $value .= '<tr class="';
        $value .= $toggle ? "a" : "b", $toggle = !$toggle;
        $value .= '"><td><a href="/issues/enter_bug.cgi?product=';
        $value .= $toplevels{$element_keys[$element_index]}[0];
        $value .= '">' . $toplevels{$element_keys[$element_index]}[1] . "</a></td></tr>\n";
        }
        $value .= "</table></td>";
    }
    $subs->{'%% Toplevels %%'} = $value;

    ### modules ###
    $value = '';
    $toggle = 0;
    my $directory_width = 6;
    my $dir_idx = 0;
    for my $item (sort keys %allmodules) {
    my $module;
    my $module_owner;

    if (defined $exceptions{$item}) {
        $module = $exceptions{$item};
        if ($allmodules{$item}[1] eq '') {
        }
        else {
            $module_owner = $allmodules{$item}[1];
        }
    } else {
        my $name = $allmodules{$item}[0];
        $name =~s/\/.*//;
        $module = $toplevels{$name}[0];
        $module = $dead_projects{$name} if !defined $module;
        defined $module || die "No such module '$name'";
        if ($allmodules{$item}[1] eq '') {
            # module owner derived from project owner 
	    $module_owner = $toplevels{$name}[2];
	} else {
            # other module owner
	    $module_owner = $allmodules{$item}[1];
	}
    }

	$dir_idx = $dir_idx % $directory_width;
    if ($dir_idx == 0) {
        $value .= '<tr class="';
        $value .= $toggle ? "a" : "b", $toggle = !$toggle;
        $value .= '">' . "\n";
    }
	$dir_idx++;

	$value .= '<td><a href="/issues/enter_bug.cgi?product=';
    $value .= $module;
    $value .= '&component=code&issue_type=PATCH';
    $value .= "&short_desc=$item: ";
    $value .= "&assigned_to=$module_owner\@openoffice.org" if defined $module_owner;
    $module =~ s/%20/ /g;
	$value .= '">' . $item . "</td>\n";
	
	$value .= "</tr>\n" if ($dir_idx == $directory_width);
    }
    $value .= "</tr>\n" if ($dir_idx != $directory_width);

    $subs->{'%% All modules %%'} = $value;
}

my $template;
my %substitutions;
my $InFile;

$template = shift @ARGV || die "create_submission_gateway.pl <template-file>\n";

build_substitutions (\%substitutions);

open $InFile, "$template" || die "Can't open $template";
while (<$InFile>) {
    for my $reg (keys %substitutions) {
	s/$reg/$substitutions{$reg}/g;
    }
    print $_;
}
close $InFile;
