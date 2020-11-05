# Apache OpenOffice Website - OpenOffice.org

This is the production site branch for https:/www.openoffice.org/

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

