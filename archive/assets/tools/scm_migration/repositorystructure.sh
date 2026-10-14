#!/bin/sh

find . -type d -exec chmod a+rwx {} \;
chmod -R a+rw *

mkdir               code

rm -r               CVSROOT/*

mv                  api/api                                 code
mv                  api/bean                                code
mv                  api/drafts                              code
mv                  api/examples                            code
rm -r               api/exthome
rm -r               api/helperapi
rm -r               api/jclousooo
mv                  api/maven2integration                   code
mv                  api/odk                                 code
mv                  api/offapi                              code
mv                  api/offuh                               code
mv                  api/oovbaapi                            code
mv                  api/sdk_oo                              code
mv                  api/udkapi                              code
mv                  api/unodevtools                         code
rm -r               api/unoil

mv                  dba/connectivity                        code
mv                  dba/dbaccess                            code
mv                  dba/reportdesign                        code
mv                  dba/sdb                                 code

rm -r               documentation/HOW_TO
rm -r               documentation/Samples_Templates
mv                  documentation/help2                     code
mv                  documentation/helpcontent2              code
rm -r               documentation/user_faq

mv                  external/MathMLDTD                      code
mv                  external/addons/dictionaries            code
mv                  external/addons/bitstream_vera_fonts    code
mv                  external/afms                           code
mv                  external/agg                            code
rm -r               external/apache-java
mv                  external/apache-commons                 code
mv                  external/apache_java                    code
mv                  external/aspell                         code
mv                  external/atk                            code
mv                  external/beanshell                      code
mv                  external/berkeleydb                     code
mv                  external/boost                          code
mv                  external/cairo                          code
mv                  external/cppunit                        code
mv                  external/crimson                        code
mv                  external/curl                           code
mv                  external/dlcompat                       code
mv                  external/epm                            code
mv                  external/expat                          code
mv                  external/external_images                code
mv                  external/fondu                          code
mv                  external/freetype                       code
mv                  external/glib2                          code
mv                  external/gtk                            code
mv                  external/hsqldb                         code
mv                  external/hyphen                         code
mv                  external/hunspell                       code
mv                  external/icc                            code
mv                  external/icu                            code
mv                  external/jfreereport                    code
mv                  external/jpeg                           code
mv                  external/libegg                         code
mv                  external/libjpeg                        code
mv                  external/libpng                         code
mv                  external/libtextcat                     code
mv                  external/libwpd                         code
mv                  external/libwps                         code
mv                  external/libxml2                        code
mv                  external/libxmlsec                      code
mv                  external/libxslt                        code
mv                  external/lpsolve                        code
mv                  external/lucene                         code
mv                  external/mdbtools                       code
mv                  external/moz                            code
mv                  external/msfontextract                  code
mv                  external/nas                            code
mv                  external/neon                           code
mv                  external/netbeans_integration           code
mv                  external/np_sdk                         code
mv                  external/openssl                        code
mv                  external/pango                          code
mv                  external/pkgconfig                      code
mv                  external/portaudio                      code
mv                  external/pspell                         code
mv                  external/psprint_config                 code
mv                  external/python                         code
mv                  external/redist                         code
mv                  external/redland                        code
mv                  external/regexp                         code
mv                  external/rhino                          code
mv                  external/sablot                         code
mv                  external/saxon                          code
mv                  external/sane                           code
mv                  external/sndfile                        code
mv                  external/spotlight_plugin               code
mv                  external/stax                           code
mv                  external/stlport                        code
mv                  external/tiff                           code
mv                  external/tomcat                         code
mv                  external/twain                          code
mv                  external/unixODBC                       code
mv                  external/vigra                          code
mv                  external/writer2latex                   code
mv                  external/x11_extensions                 code
mv                  external/xalan                          code
rm -r               external/xmlsecurity
mv                  external/xpdf                           code
mv                  external/xt                             code
mv                  external/zlib                           code

mv                  framework/DocumentProperties            code
mv                  framework/binfilter                     code
mv                  framework/desktop                       code
mv                  framework/embeddedobj                   code
mv                  framework/embedserv                     code
mv                  framework/filter                        code
mv                  framework/framework                     code
mv                  framework/idl                           code
mv                  framework/offmgr                        code
mv                  framework/res                           code
mv                  framework/scripting                     code
mv                  framework/sfx2                          code
mv                  framework/unoxml                        code
rm -r               framework/writerperfect

mv                  graphics/animations                     code
mv                  graphics/avmedia                        code
mv                  graphics/basegfx                        code
mv                  graphics/chart                          code
mv                  graphics/chart2                         code
mv                  graphics/drawinglayer                   code
mv                  graphics/goodies                        code
mv                  graphics/sch                            code
mv                  graphics/sd                             code
mv                  graphics/sdext                          code
mv                  graphics/sim2                           code
mv                  graphics/sip                            code
mv                  graphics/slideshow                      code
mv                  graphics/svx                            code

mv                  gsl/UnoControls                         code
mv                  gsl/accessibility                       code
mv                  gsl/awb                                 code
mv                  gsl/awttools                            code
mv                  gsl/basebmp                             code
mv                  gsl/canvas                              code
mv                  gsl/cppcanvas                           code
mv                  gsl/dtrans                              code
mv                  gsl/forms                               code
mv                  gsl/fpicker                             code
mv                  gsl/padmin                              code
mv                  gsl/psprint                             code
mv                  gsl/rsc                                 code
mv                  gsl/rvpapi                              code
mv                  gsl/shell                               code
mv                  gsl/sysui                               code
mv                  gsl/toolkit                             code
mv                  gsl/vcl                                 code
mv                  gsl/winaccessibility                    code

mv                  installation/extras                     code
rm -r               installation/help
mv                  installation/helpcontent                code
mv                  installation/instsetoo                  code
mv                  installation/instsetoo_native           code
mv                  installation/javainstaller2             code
mv                  installation/oo_scp                     code
mv                  installation/packimages                 code
mv                  installation/postprocess                code
mv                  installation/readlicense                code/readlicense_oo
mv                  installation/scp                        code
mv                  installation/scp2                       code
mv                  installation/scptools                   code
mv                  installation/setup2                     code
mv                  installation/setup_native               code
mv                  installation/smoketest                  code
mv                  installation/smoketestoo_native         code
mv                  installation/wizards                    code

rm -r               l10n/i18n
mv                  l10n/i18npool                           code
mv                  l10n/i18nutil                           code
rm -r               l10n/icu
mv                  l10n/l10n                               code
mv                  l10n/transex3                           code

rm -r               odftoolkit/aodc
mkdir               code/odftoolkit
mv                  odftoolkit/aodl                         code/odftoolkit/aodl
mv                  odftoolkit/odf4j                        code/odftoolkit/odf4j
mv                  odftoolkit/tools                        code/odftoolkit/tools

mv                  oi/ie                                   code
mv                  oi/sj2                                  code
mv                  oi/so3                                  code

rm -r               porting/boot
mv                  porting/crashrep                        code
mv                  porting/sal                             code

rm -r               printing/psprint
mv                  printing/xprinter                       code

mv                  qa/qadevOOo                             code
mv                  qa/qatesttool                           code
mv                  qa/testautomation                       code

mv                  sc/sc                                   code
mv                  sc/scaddins                             code
mv                  sc/sccomp                               code
mv                  sc/scext                                code
mv                  sc/scsolver                             code

mv                  script/basctl                           code
mv                  script/basic                            code
mv                  script/xmlscript                        code

mv                  sw/hwpfilter                            code
rm -r               sw/lingu
mv                  sw/linguistic                           code
mv                  sw/lotuswordpro                         code
mv                  sw/starmath                             code
mv                  sw/sw                                   code
mv                  sw/swext                                code
rm -r               sw/writer2latex
mv                  sw/writerfilter                         code
mv                  sw/writerperfect                        code

mv                  tools/autodoc                           code
mv                  tools/boot                              code
mv                  tools/config_office                     code
mv                  tools/contrib/soldep                    code/soldep
mv                  tools/cosv                              code
mv                  tools/dmake                             code
mv                  tools/jtools                            code
mv                  tools/mkdepend                          code
mv                  tools/rscpp                             code
mv                  tools/solenv                            code
mv                  tools/soltools                          code
mv                  tools/testshl                           code
mv                  tools/testshl2                          code
mv                  tools/udm                               code
mv                  tools/xml2cmp                           code

mv                  ucb/chaos                               code
mv                  ucb/inet                                code
mv                  ucb/ldapber                             code
mv                  ucb/store                               code
mv                  ucb/ucb                                 code
mv                  ucb/ucbhelper                           code
mv                  ucb/uui                                 code

mv                  udk/bridges                             code
mv                  udk/cli_ure                             code
mv                  udk/codemaker                           code
mv                  udk/cppu                                code
mv                  udk/cppuhelper                          code
mv                  udk/cpputools                           code
mv                  udk/dotnet_ure                          code
mv                  udk/ext_log4j                           code
mv                  udk/idlc                                code
mv                  udk/javaunohelper                       code
mv                  udk/jurt                                code
mv                  udk/jvmaccess                           code
mv                  udk/jvmfwk                              code
mv                  udk/logging                             code
mv                  udk/product                             code
mv                  udk/pyuno                               code
mv                  udk/rdbmaker                            code
mv                  udk/registry                            code
mv                  udk/remotebridges                       code
mv                  udk/ridljar                             code
mv                  udk/salhelper                           code
mv                  udk/soap                                code
mv                  udk/stoc                                code
mv                  udk/testtools                           code
mv                  udk/unoidl                              code
mv                  udk/unoil                               code
mv                  udk/ure                                 code
mv                  udk/vos                                 code
mv                  udk/xpcom_uno                           code

rm -r               ui/custom_images
mv                  ui/default_images                       code
mv                  ui/ooo_custom_images                    code

rm -r               util/BerkeleyDB
rm                  util/OpenOffice.lst,v
mv                  util/XmlSearch                          code
mv                  util/automation                         code
mv                  util/comphelper                         code
mv                  util/configmgr                          code
mv                  util/eventattacher                      code
mv                  util/extensions                         code
mv                  util/external                           code
mv                  util/fileaccess                         code
mv                  util/io                                 code
mv                  util/jut                                code
rm                  util/makefile.mk,v
mv                  util/o3tl                               code
mv                  util/officecfg                          code
mv                  util/sandbox                            code
mv                  util/so_berkeleydb                      code
mv                  util/sot                                code
mv                  util/std2                               code
mv                  util/svtools                            code
mv                  util/tools                              code
mv                  util/unotools                           code
mv                  util/unzip                              code
rm -r               util/vos
mv                  util/xmlhelp                            code


mv                  whiteboard/lingucomponent               code

rm -r               xml/converters
mv                  xml/filtertools                         code
mv                  xml/odfilter                            code
rm -r               xml/oodoc
mv                  xml/oox                                 code
mv                  xml/package                             code
mv                  xml/sax                                 code
mv                  xml/xmerge                              code
mv                  xml/xmloff                              code
mv                  xml/xmlsecurity                         code
