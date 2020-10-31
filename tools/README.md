## Editing the Git Site

1. Clone the Git Repository

```
cd ~/Development/openoffice
rm -rf ooo-site.git
git clone https://gitbox.apache.org/repos/asf/openoffice-org.git ooo-site.git
git fetch
git pull
git checkout main
```

2. Modify Pages

```
cd ~/Development/openoffice/ooo-sit.git/content/
```

* Html pages are `*.html` and `*.htm`
  - Full html pages are rewrapped.
  - Html fragments are wrapped.
* Markdown pages are `*.md`
* Special purpose Markdown which also need to be delcared in `templates/ssi_paths.gsp`
  - `brand.md` are specialised translations for the website header.
  - `topnav.md` is the top navigator.
  - `leftnav.md` is the left navigator.
  - `rightnav.md` is the right naviagator

3. Modify Assets

```
cd ~/Development/openoffice/ooo-sit.git/assets/
```

- These are copied to the site unmodified.

## Migration Instructions

1. Checkout Old SVN CMS version of site.

```
cd ~/Development/openoffice
rm -rf ooo-site
svn co https://svn.apache.org/repos/asf/openoffice/ooo-site/trunk ooo-site
```

1. Setup Environment variables.

```
# location of CMS content
export SVNPATH="~/Development/openoffice/ooo-site/content"
# location of Git repository checkout
export GITPATH="~/Development/openoffice/ooo-site.git"
```

2. List of Folders.
   It is likely that these won't be done in one session. Make the list and track what you've migrated.

```
cd ${SVNPATH}
find . -type d -depth 1 -print | sed -e 's!./!!' | sort
```

You could compare with the git targets with:

```
cd ${GITPATH}/assets
find . -type d -depth 1 -print | sed -e 's!./!!' | sort
cd ${GITPATH}/content
find . -type d -depth 1 -print | sed -e 's!./!!' | sort
```

3. Migration of a Folder.

```
cd ${SVNPATH}
${GITPATH}/tools/migration2git.sh downloads
```

## Tool Scripts

1. tools/push2git.sh ${1} ${2} ${3}

```
# ${1} Category 'assets','content'
# ${2} Path to commit
# ${3} Description for commit message - 'assets','large asset','html content','Markdown pages','brand','navigator'
cd ${GITPATH}
git add ${1}/${2}
git commit -m 'Migration of ${2} ${3}'
git push
```

2. tools/convert2md.sh ${1} ${2}

```
# ${1} Template type 'brand','navigator','page'
# ${2} Path of mdtext file to convert to md file
echo 'type=${1}' > ${GITPATH}/content/${2}
nawk -f ${GITPATH}/tools/convert2md.awk ${2} >> ${GITPATH}/content/${2}
```

3. tools/migration2git.sh ${1}

```
# ${1} Site folder to migrate
cd ${SVNPATH}
echo 'Migrating ${SVNPATH}/${1} to ${GITPATH}
echo
# 1 - Tree structure
echo 'copy directory structure to assets and content trees'
find ${1} -type d ! -empty -exec mkdir -p ${GITPATH}/assets/{} \; -exec mkdir -p ${GITPATH}/content/{} \;
# git does not commit empty directories
echo
# 2 - Large Assets
echo 'copy assets larger than 3M as separate commits'
find ${1} -type f -size +3M -exec cp {} ${GITPATH}/assets/{} \; -exec ${GITPATH}/tools/push2git.sh assets {} 'large asset'\; 	
echo
# 3 - Assets
echo 'copy assets not (html and mdtext) to assets tree'
find ${1} -type f ! -name "*.html" ! -name "*.htm" ! -name "*.mdtext" ! -size +3M -exec cp -p {} ${GITPATH}/assets/{} \;
# commit and push
${GITPATH}/tools/push2git.sh assets ${1} 'assets'
echo
# 4 - HTML
echo 'copy html to content tree'
find ${1}  -type f \( -name "*.html" -or -name "*.htm" \) ! -size +3M -exec cp -p {} ${GITPATH}/content/{} \;
# commit and push
${GITPATH}/tools/push2git.sh content ${1} 'html content'
echo
# 5 - Brand
echo 'Convert brand'
find ${1} -name "brand.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh brand {} \; -exec ${GITPATH}/tools/push2git.sh assets {} 'brand'\;
echo
# 6 - Navigators
echo 'Convert navigators'
find ${1} -name "*nav.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh navigator {} \; -exec ${GITPATH}/tools/push2git.sh assets {} 'navigator'\;
echo
# 7 - Markdown
echo 'Convert markdown pages'
find ${1} -name "*.mdtext" ! -name "brand.mdtext" ! -name "*nav.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh page {} \;
# commit and push
${GITPATH}/tools/push2git.sh content ${1} 'Markdown pages'
echo
```
