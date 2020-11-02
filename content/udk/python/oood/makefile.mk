PRJNAME=udkwww
PRJ=../..

.INCLUDE : settings.mk
.INCLUDE : pyversion.mk

VERSION=0.1.0

ROOT=$(MISC)$/oood-$(VERSION)

FILES=\
	$(ROOT)/oood.py	\
	$(ROOT)/index.html \
	$(ROOT)/oood-config.xml 


$(ROOT).zip : $(FILES)
	-rm -f $@
	cd $(MISC) && zip -r oood-$(VERSION).zip oood-$(VERSION)
	md5sum $@


$(ROOT)/% : %
	-+$(MKDIRHIER) $(@:d)
	rm -f $@
	cat $< > $@
