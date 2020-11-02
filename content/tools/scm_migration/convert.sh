#!/bin/sh
# Script for converting the OOo language projects to SVN

CVS_REPOSITORY=cvs_repository                     # path to the CVS repostory
SUBVERSION_REPOSITORIES=subversion_repositories   # path to the directory which will contain
                                                  # the subversion repostories
TMPDIR=tmpdir                                     # where the temporary files will go

if test ! -d $SUBVERSION_REPOSITORIES
then
    mkdir $SUBVERSION_REPOSITORIES
fi

# The following directories had no CVS archive files. Check this is still the 
# case and skip them. Otherwise complain

for i in council distribution fr lang lockdir stats
do
    if test -d $CVS_REPOSITORY/$i
    then
        find $CVS_REPOSITORY/$i -name "*,v" -exec echo "Error: directory $i is in the empty list but contains CVS archives. Please move directory $i to the to be converted list" \;
    fi
done

# The to be converted directories. 
for i in about api ar az bg bibliographic bizdev bn bo bre br-pt ca contributing cs cvsroot cy da dba de development documentation download dz education el eo es et eu extensions external fa fi framework fur ga gd gl graphics groupware gsl gu he hi hr hu hy id incubator installation it ja ka kde km ko ku l10n lingucomponent list.txt lo look lt lv marketing mg mk ml mlmtest mr ms native-lang ne newlist.txt nl no odftoolkit oi oopm pa pap pl porting printing projects pt qa ro ru sc script scripting secondaryprojects sg si sk sl specs sq sr support sv sw ta te test testprojects tet tg th ti timtest tools tr tt-crh ua ucb udk ui urd user-faq util ux vba vi website webworks whiteboard why wp www xml zh
do
    echo "Converting project ***** $i *****"
    mkdir $TMPDIR/$i
    cvs2svn --fs-type=bdb --bdb-txn-nosync --tmpdir=$TMPDIR/$i --encoding=ascii --encoding=latin1 --exclude="unknown-.*" -s $SUBVERSION_REPOSITORIES/$i $CVS_REPOSITORY/$i
    if test ! -d $SUBVERSION_REPOSITORIES/$i
    then
        echo Conversion of language project $i failed
    fi
done
