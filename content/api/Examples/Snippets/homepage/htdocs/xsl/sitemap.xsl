<?xml version="1.0"?>
<!-- ========================================================================
 *
 *  $RCSfile: sitemap.xsl,v $
 *
 *  $Revision: 1.2 $
 *
 *  last change: $Author: tomsontom $ $Date: 2007/08/13 13:06:55 $
 *
 *  The Contents of this file are made available subject to the terms of
 *  the BSD license.
 *
 *  Copyright (c) 2004 by Sun Microsystems, Inc.
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions
 *  are met:
 *  1. Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *  3. Neither the name of Sun Microsystems, Inc. nor the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 *  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 *  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 *  FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 *  BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
 *  OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 *  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 *  TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
 *  USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 ======================================================================== -->

<!-- AUTHOR: Tom Schindl <tom.schindl@bestsolution.at>  -->
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<!-- ONLY FOR TESTING -->
<xsl:variable name="host" select="string('http://api.openoffice.org')" />

<xsl:template match="/">
<html>
    <head>
        <style type="text/css">
            @import "<xsl:value-of select="$host" />/branding/css/tigris.css";
            @import "<xsl:value-of select="$host" />/branding/css/inst.css";
            @import "/css/codesnippet.css";
        </style>
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript">
</script>
<script type="text/javascript">
_uacct = "UA-30193653-1";
urchinTracker();
</script>

        <link rel="stylesheet" type="text/css" href="{$host}/branding/css/print.css" media="print" />
        <title>Sitemap</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="Content-Style-Type" content="text/css" />

        <meta name="version" content="2.6.2.3" />
        <meta name="keywords" content="OpenOffice.org, Open Office, OpenOffice, openoffice, StarOffice, Star Office, OOo, ooo, code snippets, help code, FAQ, HowTo" />
        <meta name="description" content="SourceCast, a collaborative software development platform from CollabNet" />
    </head>
    <body marginwidth="0" marginheight="0" class="composite">
    <table border="0" cellspacing="0" cellpadding="4" width="100%" id="main" height="85%">
        <tr valign="top">
            <td id="leftcol" width="20%">
                <div id="navcolumn">
                    <div id="projecttools" class="toolgroup">
                        <div class="label"><strong>Sitemap</strong></div>
                        <div class="body">
                            <div>
                                <a href="#" onClick="opener.location.href='/';return false;">Home</a>
                            </div>
                            <xsl:apply-templates select="/snippets/snippet-section" />
                        </div>
                   </div>
                </div>
            </td>
        </tr>
    </table>

    </body>
    </html>
</xsl:template>

<xsl:template match="/snippets/snippet-section">
    <div style="padding-left: 10px;">
        <a href="#"><xsl:attribute name="onClick">opener.location.href='<xsl:value-of select="@url" />/index.xml';return false;</xsl:attribute><xsl:value-of select="@name" /></a>
        <xsl:apply-templates select="snippet-lang"/>
    </div>
</xsl:template>

<xsl:template match="snippet-lang">
    <div style="padding-left: 10px;">
        <a href="#"><xsl:attribute name="onClick">opener.location.href='<xsl:value-of select="@url" />/index.xml';return false;</xsl:attribute><xsl:value-of select="@type" /></a>
        <xsl:apply-templates select="snippet"/>
    </div>
</xsl:template>

<xsl:template match="snippet">
    <div style="padding-left: 10px;">
	    <a href="#"><xsl:attribute name="onClick">opener.location.href='<xsl:value-of select="@url" />';return false;</xsl:attribute><xsl:value-of select="@label" /></a>
    </div>
</xsl:template>

</xsl:stylesheet>
