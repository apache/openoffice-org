PRJ=..
PRJNAME=udkwww
TARGET=udk

common_build=

# ------------------------------------------------------------------
.INCLUDE: settings.mk

# ------------------------------------------------------------------

PRODUCT_NAME=udk$(UDK_MAJOR).$(UDK_MINOR).$(UDK_MICRO)
DOCREFNAME="UDK $(UDK_MAJOR).$(UDK_MINOR).$(UDK_MICRO) c/C++ API Reference"

DOCZIPFILE=$(BIN)$/$(PRODUCT_NAME)_doc.zip
DOCTARGZFILE=$(BIN)$/$(PRODUCT_NAME)_doc.tar.gz

DESTDIRDOC=$(OUT)$/misc$/$(PRODUCT_NAME)
DESTDIRWWWDOC=$(DESTDIRDOC)$/docs
DESTDIRCPPAUTODOC=$(DESTDIRWWWDOC)$/cpp$/ref
DESTJAVAGENDOC=$(DESTDIRWWWDOC)$/java$/ref
JAVAGENDOCDIR=..$/java$/ref

INCOUT=$(SOLARINCDIR)
IDLOUT=$(SOLARIDLDIR)

AUTODOCPARAMS= 	-lg c++ \
        -p sal $(INCOUT) -t sal -t osl -t rtl \
        -p store $(INCOUT) -t store \
        -p registry $(INCOUT) -t registry \
        -p cppu $(INCOUT) -t cppu -t com -t typelib -t uno \
        -p cppuhelper $(INCOUT) -t cppuhelper \
        -p bridges $(INCOUT) -t bridges

MY_AUTODOC=$(SOLARBINDIR)$/autodoc

.IF "$(GUI)"=="WNT"

#--------------------
# WNT ONLY
#--------------------
MY_DELETE_RECURSIVE=del /sy

RM_CVS_DIRS=$(FIND) $(DESTDIRDOC) -name "CVS" -type d -exec rm -rf $(0,text {)$(0,text }) ;
.ELSE

#--------------------
# UNX ONLY
#--------------------
MY_DELETE_RECURSIVE=rm -rf

RM_CVS_DIRS=$(FIND) $(DESTDIRDOC) -name "CVS" -type d -exec rm -rf $(0,text {)$(0,text }) ;
.ENDIF

INCLUDETOPDIRLIST= \
	$(INCOUT)$/sal 		\
	$(INCOUT)$/salhelper	\
	$(INCOUT)$/rtl 		\
	$(INCOUT)$/osl 		\
	$(INCOUT)$/store 	\
	$(INCOUT)$/typelib 	\
	$(INCOUT)$/uno 		\
	$(INCOUT)$/cppu 	\
	$(INCOUT)$/cppuhelper 	\
	$(INCOUT)$/bridges 	

INCLUDEDIRLIST={$(subst,/,$/ $(shell $(FIND) $(INCLUDETOPDIRLIST) -type d -print))}

INCLUDEFILELIST=\
    $(INCOUT)$/udkversion.mk \
    $(INCOUT)$/com$/sun$/star$/uno$/Any.h \
    $(INCOUT)$/com$/sun$/star$/uno$/Any.hxx \
    $(INCOUT)$/com$/sun$/star$/uno$/genfunc.h \
    $(INCOUT)$/com$/sun$/star$/uno$/genfunc.hxx \
    $(INCOUT)$/com$/sun$/star$/uno$/Reference.h \
    $(INCOUT)$/com$/sun$/star$/uno$/Reference.hxx \
    $(INCOUT)$/com$/sun$/star$/uno$/Sequence.h \
    $(INCOUT)$/com$/sun$/star$/uno$/Sequence.hxx \
    $(INCOUT)$/com$/sun$/star$/uno$/Type.h \
    $(INCOUT)$/com$/sun$/star$/uno$/Type.hxx

INCLUDELIST=\
	{$(subst,/,$/ $(shell $(FIND) $(INCLUDETOPDIRLIST) -type f -print))} \
    $(INCLUDEFILELIST)

DOCUGENCPPFLAG = $(MISC)$/docugen_cpp_reference.flag
DOCUCOPYFLAG = $(MISC)$/docucopy_html_files.flag
DOCUDIRCREATEFLAG = $(MISC)$/docu_directory_create.flag

DOCUTOPDIRLIST= \
    $(JAVAGENDOCDIR)
    
DOCUDIRLIST={$(subst,/,$/ $(shell $(FIND) $(DOCUTOPDIRLIST) -type d -print | grep -v CVS))}
DOCULIST={$(subst,/,$/ $(shell $(FIND) $(DOCUTOPDIRLIST) -type f -print | grep -v CVS))}

DESTDOCUDIRLIST={$(subst,..,$(DESTDIRWWWDOC) $(DOCUDIRLIST))}
DESTDOCULIST={$(subst,..,$(DESTDIRWWWDOC) $(DOCULIST))}

DIRLIST = \
    $(DESTDOCUDIRLIST) \
    $(DESTDIRCPPAUTODOC)
#    $(DESTDIRIDLAUTODOC)


#--------------------------------------------------
# TARGETS
#--------------------------------------------------

all: \
    $(DOCZIPFILE) \
    $(DOCTARGZFILE)

$(MISC)$/deltree.txt : deltree.txt
	+-$(RM) $(BIN)$/$(PRODUCT_NAME)_doc.zip >& $(NULLDEV)
	+-$(RM) $(BIN)$/$(PRODUCT_NAME)_doc.tar.gz >& $(NULLDEV)
	+-$(MY_DELETE_RECURSIVE) $(DESTDIRDOC) >& $(NULLDEV)
    +@echo "" > $(MISC)$/deltree.txt

$(DIRLIST) : $(MISC)$/deltree.txt
	$(MKDIRHIER)	$@

$(DOCUDIRCREATEFLAG) : $(DIRLIST)
    +@echo "created diretories" > $@

$(DESTJAVAGENDOC)$/% : $(JAVAGENDOCDIR)$/%
	$(GNUCOPY) -p $(subst,$(DESTDIRWWWDOC),.. $@) $@

$(DOCUGENCPPFLAG) : $(INCLUDELIST) $(DOCUDIRCREATEFLAG)
    echo $(DOCREFNAME)
	+$(MY_AUTODOC) -html $(DESTDIRCPPAUTODOC) -name $(DOCREFNAME) $(AUTODOCPARAMS)
    +@echo "cpp reference docu generated" > $@

$(DOCUCOPYFLAG) : $(DOCUDIRCREATEFLAG) $(DESTDOCULIST) $(DESTDOCUFILES)
    +@echo "docu copied" > $@


# ------------------------------------------------------------------------------------
#      ZIP IT
# ------------------------------------------------------------------------------------
$(DOCZIPFILE) : $(DOCUCOPYFLAG) $(DOCUGENCPPFLAG)
	+-$(RM) $(BIN)$/$(PRODUCT_NAME)_doc.zip
	+cd $(DESTDIRDOC)$/.. && zip -9 -r ..$/bin$/$(PRODUCT_NAME)_doc.zip $(PRODUCT_NAME)
    
$(DOCTARGZFILE) : $(DOCUCOPYFLAG) $(DOCUGENCPPFLAG)
	+-$(RM) $(BIN)$/$(PRODUCT_NAME)_doc.tar.gz
	+cd $(DESTDIRDOC)$/.. && tar cvf - $(PRODUCT_NAME) | gzip -c > ..$/bin$/$(PRODUCT_NAME)_doc.tar.gz
