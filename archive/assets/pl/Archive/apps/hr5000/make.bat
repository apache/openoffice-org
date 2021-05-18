@REM Stworzono w HR5000
@ECHO ---KOPIOWANIE---
@cd ..
md ..\www 
md ..\www\grafika 
md ..\www\pliki 
copy /B head\pllang.css ..\www\pllang.css 
copy /B images\*.jpg ..\www\grafika 
copy /B images\*.gif ..\www\grafika 
copy /B images\*.png ..\www\grafika 
copy /B files\*.* ..\www\pliki 
copy /B head\pre.txt+cont\index.txt+head\post-index.txt ..\www\index.html 
copy /B head\pre.txt+cont\intro.txt+head\post.txt ..\www\intro.html 
copy /B head\pre.txt+cont\product.characteristic.txt+head\post.txt ..\www\product.characteristic.html 
copy /B head\pre.txt+cont\product.galery.autoinstalldict.txt+head\post.txt ..\www\product.galery.autoinstalldict.html 
copy /B head\pre.txt+cont\product.galery.txt+head\post.txt ..\www\product.galery.html 
copy /B head\pre.txt+cont\product.download.txt+head\post.txt ..\www\product.download.html 
copy /B head\pre.txt+cont\product.cdrom.txt+head\post.txt ..\www\product.cdrom.html 
copy /B head\pre.txt+cont\product.other.txt+head\post.txt ..\www\product.other.html 
copy /B head\pre.txt+cont\addons.spellcheck.txt+head\post.txt ..\www\addons.spellcheck.html 
copy /B head\pre.txt+cont\addons.extendedPDF.txt+head\post.txt ..\www\addons.extendedPDF.html 
copy /B head\pre.txt+cont\addons.templates.txt+head\post.txt ..\www\addons.templates.html 
copy /B head\pre.txt+cont\addons.OOViewer.txt+head\post.txt ..\www\addons.OOViewer.html 
copy /B head\pre.txt+cont\project.background.txt+head\post.txt ..\www\project.background.html 
copy /B head\pre.txt+cont\project.faq.txt+head\post.txt ..\www\project.faq.html 
copy /B head\pre.txt+cont\project.promotion.txt+head\post.txt ..\www\project.promotion.html 
copy /B head\pre.txt+cont\help.install.txt+head\post.txt ..\www\help.install.html 
copy /B head\pre.txt+cont\help.doc.index.txt+head\post.txt ..\www\help.doc.index.html 
copy /B head\pre.txt+cont\help.books.txt+head\post.txt ..\www\help.books.html 
copy /B head\pre.txt+cont\doc.wk.slowniki.txt+head\post.txt ..\www\doc.wk.slowniki.html 
copy /B head\pre.txt+cont\doc.ks.ssh.txt+head\post.txt ..\www\doc.ks.ssh.html 
copy /B head\pre.txt+cont\doc.ks.edycja_www.txt+head\post.txt ..\www\doc.ks.edycja_www.html 
copy /B head\pre.txt+cont\helping.how.txt+head\post.txt ..\www\helping.how.html 
copy /B head\pre.txt+cont\helping.issuezilla.txt+head\post.txt ..\www\helping.issuezilla.html 
copy /B head\pre.txt+cont\contact.mailinglist.txt+head\post.txt ..\www\contact.mailinglist.html 
copy /B head\pre.txt+cont\contact.adresses.txt+head\post.txt ..\www\contact.adresses.html 
copy /B head\pre.txt+cont\other.todo.txt+head\post.txt ..\www\other.todo.html 
copy /B head\pre.txt+cont\other.credits.txt+head\post.txt ..\www\other.credits.html 
copy /B head\pre.txt+cont\other.legal.txt+head\post.txt ..\www\other.legal.html 
copy /B head\pre.txt+cont\legal.ej.lgpl.txt+head\post.txt ..\www\legal.ej.lgpl.html 
copy /B head\pre.txt+cont\legal.ej.sissl.txt+head\post.txt ..\www\legal.ej.sissl.html 
copy /B head\pre.txt+cont\legal.kk.jca.txt+head\post.txt ..\www\legal.kk.jca.html 
copy /B head\pre.txt+cont\legal.ks.lgpl.txt+head\post.txt ..\www\legal.ks.lgpl.html 
copy /B head\pre.txt+cont\legal.ks.sissl.txt+head\post.txt ..\www\legal.ks.sissl.html 
copy /B head\pre.txt+cont\legal.kk.pdl.txt+head\post.txt ..\www\legal.kk.pdl.html 
