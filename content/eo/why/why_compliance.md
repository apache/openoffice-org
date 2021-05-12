type=page
title=Compliance Costs and the Apache License
notice=https://www.apache.org/licenses/LICENSE-2.0
~~~~~~
##Software License Compliance Costs

The software industry watchdog, the Business Software Alliance, [offers cash rewards][1] to disgruntled employees who confidentially turn in their 
employer (or ex-employer) for software piracy.
  
They call this campaign, "Bust your Boss!"  Rewards can range up to $1 million.

As you probably already know, you don't own software in the same way you own a chair or a desk.  Instead, you license the software from the publisher, and this license gives you
permission to use the software, but only under terms specified by the license.  These terms typically say how many users or PC's may access the software.  The terms might even include
a clause allowing the vendor to audit your usage of the software.

In order to avoid the expense and penalties of a BSA audit, organizations are increasingly adopting Software Asset Management (SAM) practices to ensure that their use of commercial 
software complies with the applicable licenses.  These practices generally include employee education along with the purchase of software to track licenses and software use within 
the organization.

The combined cost of these SAM practices is the "cost of compliance" for using commercial software.  It is an expense that does not make your organization more productive, does not 
benefit your customers and adds nothing to the bottom line. It is purely risk mitigation.  Along with license, maintenance and training costs, it is one of the expenses of using
commercial software.


##Open Source Compliance Costs

As opposed to commercial software licenses, open source software have licenses that explicitly permit free redistribution.  This reduces the cost of compliance for many
organizations, since tracking application usage is not needed.

However, organizations that use open source software and also develop and distribute their own proprietary software, can find themselves in trouble due to the viral nature (copyleft)
of some open source licenses.  If one of your employees or contractors inadvertently includes some copyleft code in your proprietary product, then you could be required by that license
to make the source code for your entire product freely available to the public.

This is not just a theoretical concern.  As aggressively as the BSA protects the interests of its commercial members, the Software Freedom Law Center (SFLC) protects the GPL license 
in [high-profile lawsuits against large corporations][2].  The Free Software Foundation (FSF), in their [November 2012 Bulletin][4], writes about their expansion of 
"active license enforcement".

So the cost of compliance with copyleft code can be even greater than the use of proprietary software, since an organization risks being forced to make the source code
for their proprietary product public and available for anyone to use, free of charge.  To mitigate this risk requires more employee education, more approval cycles, more internal audits 
and more worries.  This is the increased cost of compliance when copyleft software is brought into an organization.  This is not necessarily a bad thing.  It is just the reality of 
using open source software under these licenses, and must be weighed in considered as one cost-driver among many.


##The Apache Advantage

However, not all open source licenses are copyleft license.  Not all of them have that viral quality that radically increases the risk for an organization.  A subset of open source 
licenses, generally called "permissive" licenses, are much more friendly for corporate use.  These licenses include the MIT and BSD licenses, as well as the 
[Apache Software License 2.0][3] that we use for Apache OpenOffice.

Like other open source licenses, the Apache License explicitly allows you to copy and redistribute the covered product, without any license fees or royalties.  But because it is a
permissive license, it also allows you to prepare and distribute derivative products, without requiring you to make your own source code public.  So both BSA and SFLC/FSF risks
are eliminated, and the cost, to your business, of license compliance is greatly reduced.


[1]: https://reporting.bsa.org/r/report/add.aspx?src=us
[2]: http://www.softwarefreedom.org/news/2009/dec/14/busybox-gpl-lawsuit/
[3]: http://www.apache.org/licenses/LICENSE-2.0
[4]: http://www.fsf.org/bulletin/2012/fall/why-gpl-compliance-work-matters
