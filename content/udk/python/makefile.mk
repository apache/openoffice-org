PRJNAME=udkwww
PRJ=..

.INCLUDE : settings.mk
.INCLUDE : pyversion.mk

ROOT=$(MISC)$/pyuno-doc
SCRIPTRT_VERSION=0.1.0

FILES=\
	$(ROOT)$/python-bridge.html 		\
	$(ROOT)$/images$/customized_setup.png	\
	$(ROOT)$/images$/mode_component.png	\
	$(ROOT)$/images$/mode_ipc.png		\
	$(ROOT)$/images$/optional_components.png \
	$(ROOT)$/samples$/swriter.py		\
	$(ROOT)$/samples$/swritercomp.py	\
	$(ROOT)$/samples$/ooextract.py		\
	$(ROOT)$/samples$/oomerge.py		\
	$(ROOT)$/samples$/biblioaccess.py	\
	$(ROOT)$/samples$/swritercompclient.py	\
	$(ROOT)$/samples$/hello_world_pyuno.zip	\
	$(ROOT)$/samples$/hello-framework-python.sxp    \
	$(ROOT)$/scriptrt4python-$(SCRIPTRT_VERSION).zip

$(MISC)$/pyuno-doc.zip : $(FILES)
	-rm -f $@
	cd $(MISC) && zip -r pyuno-doc.zip pyuno-doc

$(ROOT)$/samples$/hello_world_pyuno.zip : samples$/hello_world_comp.py samples$/Addons.xcu
	-+$(MKDIRHIER) $(@:d) 
	-rm -f $@
	zip $@ $<

$(ROOT)$/scriptrt4python-$(SCRIPTRT_VERSION).zip  : \
	scriptingframework/runtime.py scriptingframework/Scripting.xcu
	-+$(MKDIRHIER) $(@:d) 
	-rm -f $@
	zip $@ $< 

$(ROOT)$/samples$/hello-framework-python.sxp  : scriptingframework/HelloFramework.py scriptingframework/parcel-descriptor.xml
	-+$(MKDIRHIER) $(@:d) 
	-rm -f $@
	+cd scriptingframework && zip ..$/$@ HelloFramework.py parcel-descriptor.xml

$(ROOT)$/% : %
	-+$(MKDIRHIER) $(@:d) 
	-rm -f $@
	cat $? > $@


