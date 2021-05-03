PRJNAME=pyuno
PRJ=..$/..

.INCLUDE : settings.mk
.INCLUDE : pyversion.mk

VERSION=0.1.0
NAME=scriptrt4python-$(VERSION)
ROOT=$(MISC)$/$(NAME)

SAMPLE_NAME=hello-framework-python

FILES=\
	$(ROOT)$/runtime.py \
	$(ROOT)$/Scripting.xcu

target: $(MISC)$/$(NAME).zip $(MISC)$/$(SAMPLE_NAME).sxp


$(MISC)$/$(SAMPLE_NAME).sxp : $(MISC)$/HelloFramework.py $(MISC)$/parcel-descriptor.xml
	rm -f $@
	cd $(MISC) && zip -r $(SAMPLE_NAME).sxp HelloFramework.py parcel-descriptor.xml

$(MISC)$/$(NAME).zip: $(FILES)
	-rm -f $@
	cd $(MISC) && zip -r $(NAME).zip $(NAME)


# $(ROOT)$/singleton.rdb : makefile.mk
# 	-rm -f $@
# 	regsingleton $@ drafts.com.sun.star.script.framework.theScriptRuntimeForPython=drafts.com.sun.star.script.framework.runtime.ScriptRuntimeForPython


$(ROOT)$/% : %
	-$(MKDIRHIER) $(@:d)
	-rm -f $@
	cat $< > $@


$(MISC)$/parcel-descriptor.xml : parcel-descriptor.xml
	-rm -f $@
	cat $< > $@

$(MISC)$/HelloFramework.py : HelloFramework.py
	-rm -f $@
	cat $< > $@
