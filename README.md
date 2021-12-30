# Apache OpenOffice Website - OpenOffice.org

This is the content and build scripts for https://www.openoffice.org/

## Contributing to the website content

You can fork from https://github.com/apache/openoffice-org, test your changes as described below
and raise a pull request.

Use the [dev@openoffice.a.o](https://lists.apache.org/list.html?dev@openoffice.apache.org) mailing list to contact
the OpenOffice PMC which manages this website.

## Automated staging

Commits to the `main` branch are automatically checked out and built using `build_staging.sh` by the 
[OpenOffice-org-Staging-Site-Build](https://ci-builds.apache.org/job/OpenOffice/job/OpenOffice-org-Staging-Site-Build/)
Jenkins job. The results are pushed to the [`content` folder of the `asf-staging` branch](https://github.com/apache/openoffice-org/tree/asf-staging/content)
which is in turn published automatically to https://openoffice-org.staged.apache.org/ by the ASF's `.asf.yaml` mechanism.

## Manual publishing

Once the staged content is correct then the `asf-staging` branch's `content` folder is copied to the `asf-site` branch
using `copy_staging.sh` by the [OpenOffice-org-Publish-Site](https://ci-builds.apache.org/job/OpenOffice/job/OpenOffice-org-Publish-Site/)
Jenkins job. This job will need to be started manually.

Any build failures are reported to [commits@openoffice.a.o](https://lists.apache.org/list.html?commits@openoffice.apache.org)
mailing list. 

## Quick updates to a single file

Updating a single file should proceed as follows. I'll use the most commonly updated file (the weekly download numbers) as an example:

- Navigate to the [`assets/stats` folder](https://github.com/apache/openoffice-org/tree/main/assets/stats)
- Click on [`aoo-downloads.txt` file](https://github.com/apache/openoffice-org/blob/main/assets/stats/aoo-downloads.txt) and edit it.
- Commit changes.
- Wait for the [OpenOffice-org-Staging-Site-Build](https://ci-builds.apache.org/job/OpenOffice/job/OpenOffice-org-Staging-Site-Build/) to complete. This will take 5-6 minutes unless another build is using the server.
- Check the [`Download Stats page`](https://openoffice-org.staged.apache.org/stats/downloads.html)
- Go to the [OpenOffice-org-Publish-Site](https://ci-builds.apache.org/job/OpenOffice/job/OpenOffice-org-Publish-Site/) Jenkins job and press the `Build Now` button. This will take from 4-6 minutes unless another build is using the server.

## Prerequisites for building the website locally

The website is built using [JBake](https://jbake.org/) and Groovy templates.
The builds for the website do require internet access.

- Install JBake from http://jbake.org/download.html
  - Currently it looks like version 2.6.3 or greater is required.
- Create an environment variable `JBAKE_HOME` pointing to your JBake installation, e.g.
  - `export JBAKE_HOME=/usr/local/Cellar/jbake/2.6.4`
- Ensure that you have a JVM locally, e.g. [OpenJDK](https://openjdk.java.net/install/)

## Clone the Git Repository

To get a copy of the repository you can either point to `Gitbox` or `GitHub`.

```
cd ~/Development/openoffice
rm -rf ooo-site.git
git clone https://gitbox.apache.org/repos/asf/openoffice-org.git ooo-site.git
git fetch
git pull
git checkout main
```

## Building & testing the site locally

To test the site locally, use 

    ./build_local.sh
    
This builds the site, serves it locally at  http://localhost:8820/ and rebuilds the content fairly
quickly if any changes are made. Only the files that are not in `part2` are watched.

Note that serving the site through JBake does not properly include the SSI which means that branding, navigation, and footers will be missing. If you wish to set up an HTTPS server on your local you can do that too.

Modify that script and call `bake.sh`  with any of the [arguments you would pass to jbake](https://jbake.org/docs/2.6.4/#bake_command).

## Markdown and HTML

Most of the pages in the site are written using HTML. Many more recent pages are written using Markdown
While it is a form of Markdown, JBake uses Flexmark/Java which implements Pegdown. It does have some [syntax differences that are worth reviewing](https://github.com/sirthias/pegdown/)

## Groovy Templates

The site templates are written in Groovy scripts.
Even though the files end with `.gsp` they are not GSP files and do not have access to tag libraries.
You can run custom code in them. See [Templates Read Me](templates/README.md) for details.

## Twice Baked

Due to exceeding the maximum number of files needing rendering the site is baked in two phases. Some folders are in the `part2` directory.

## Pages are in the Content Tree.

`.html` and `.md` files in the content tree are processed by templates as directed within `jbake.properties`.

    https://github.com/apache/openoffice-org/tree/main/content
    https://github.com/apache/openoffice-org/tree/main/part2/content

### Branding and Navigation

- The page header comes from `brand.md` files. The [`brand` template](https://github.com/apache/openoffice-org/blob/main/templates/brand.gsp) is HTML with markdown metadata insertions.
- Navigators are `*nav.md` files. The [`navigator` template](https://github.com/apache/openoffice-org/blob/main/templates/navigator.gsp) is markdown with metadata selecting the CSS class.
- All `brand.md`, `topnav.md`, `leftnav.md`, and `rightnav.md` files must be registered in
[`templates/ssi_paths.gsp`](https://github.com/apache/openoffice-org/blob/main/templates/ssi_paths.gsp) in order to be included in that subtree of the site.

## Assets are in the Assets Tree.

Every file in the assets tree is copied as is during baking.

    https://github.com/apache/openoffice-org/tree/main/assets
    https://github.com/apache/openoffice-org/tree/main/part2/assets

* Files larger than 100MB are not allowed and over 50MB are not recommended. Only one file in the CMS site was too large to migrate.
* Please do not add any `.exe` binaries.

### Footer

The site footer is an HTML asset and is found here: [`footer.html`](https://github.com/apache/openoffice-org/blob/main/assets/footer.html).


