# Migration from CMS to Github/JBake

## Clone the Git Repository

```
cd ~/Development/openoffice
rm -rf ooo-site.git
git clone https://gitbox.apache.org/repos/asf/openoffice-org.git ooo-site.git
git fetch
git pull
git checkout main
```

- Content goes here:

```
cd ~/Development/openoffice/ooo-sit.git/content/
```

  These files are processed by templates

- Assets go here:

```
cd ~/Development/openoffice/ooo-sit.git/assets/
```

  These are copied to the site unmodified.


## Checkout Old SVN CMS version of site.

```
cd ~/Development/openoffice
rm -rf ooo-site
svn co https://svn.apache.org/repos/asf/openoffice/ooo-site/trunk ooo-site
```

## Setup Environment variables.

```
# location of CMS content
export SVNPATH="~/Development/openoffice/ooo-site/content"
# location of Git repository checkout
export GITPATH="~/Development/openoffice/ooo-site.git"
```

## List of Folders.

These won't be done in one session. Make the list and track what you've migrated.

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

## Migration of a Folder.

```
cd ${SVNPATH}
${GITPATH}/tools/migration2git.sh downloads
```

Some folders are larger than others. Pay attention to the running count.

## Periodic Builds

```
cd ${GITPATH}
./build_staging.sh
# on asf-staging branch
./copy_staging.sh
# on asf-site branch
```

This is done so that the commits in asf-staging and asf-site do not get too large.

# Tool Scripts

1. `tools/commit2git.sh ${1} ${2} ${3}`

```
# ${1} Category 'assets','content'
# ${2} Path to commit
# ${3} Description for commit message - 'assets','large asset','html content','Markdown pages','brand','navigator'
cd ${GITPATH}
git add ${1}/${2}
git commit -m 'Migration of ${2} ${3}'
```

2. `tools/convert2md.sh ${1} ${2}`

   `tools/convert2md2.sh` was used in the part2 migration for api.

```
# ${1} Template type 'brand','navigator','page'
# ${2} Path of mdtext file to convert to md file
echo 'type=${1}' > ${GITPATH}/content/${2}
nawk -f ${GITPATH}/tools/convert2md.awk ${2} >> ${GITPATH}/content/${2}
```

3. `tools/migration2git.sh ${1}`

   `tools/migration2git2.sh` and `tools/migration4css.sh` were run in later phases.

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
find ${1} -type f -size +3M -exec cp {} ${GITPATH}/assets/{} \; -exec ${GITPATH}/tools/commit2git.sh assets {} 'large asset' \;
echo
# 3 - Assets
echo 'copy assets not (html and mdtext) to assets tree'
find ${1} -type f ! -name "*.html" ! -name "*.htm" ! -name "*.mdtext" ! -size +3M -exec cp -p {} ${GITPATH}/assets/{} \;
# commit and push
${GITPATH}/tools/commit2git.sh assets ${1} 'assets'
echo
# 4 - HTML
echo 'copy html to content tree'
find ${1}  -type f \( -name "*.html" -or -name "*.htm" \) ! -size +3M -exec cp -p {} ${GITPATH}/content/{} \;
# commit and push
${GITPATH}/tools/commit2git.sh content ${1} 'html content'
echo
# 5 - Brand
echo 'Convert brand'
find ${1} -name "brand.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh brand {} \;
echo
# 6 - Navigators
echo 'Convert navigators'
find ${1} -name "*nav.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh navigator {} \;
echo
# 7 - Markdown
echo 'Convert markdown pages'
find ${1} -name "*.mdtext" ! -name "brand.mdtext" ! -name "*nav.mdtext" -type f -exec ${GITPATH}/tools/convert2md.sh page {} \;
# commit and push
${GITPATH}/tools/commit2git.sh content ${1} 'Markdown pages'
echo
# 8 - Push to git
echo 'Push to Gitbox'
${GITPATH}/tools/push2git.sh
```

4. `tools/push2git.sh`

```
cd ${GITPATH}
git push
```

