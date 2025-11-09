<?xml version="1.0" encoding="UTF-8"?>
<!--

  DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
  
  Copyright 2008 by Sun Microsystems, Inc.

  OpenOffice.org - a multi-platform office productivity suite

  $RCSfile: rdf-extract.xsl,v $

  $Revision: 1.1 $

  This file is part of OpenOffice.org.

  OpenOffice.org is free software: you can redistribute it and/or modify
  it under the terms of the GNU Lesser General Public License version 3
  only, as published by the Free Software Foundation.

  OpenOffice.org is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Lesser General Public License version 3 for more details
  (a copy is included in the LICENSE file that accompanied this code).

  You should have received a copy of the GNU Lesser General Public License
  version 3 along with OpenOffice.org.  If not, see
  <http://www.openoffice.org/license.html>
  for a copy of the LGPLv3 License.

-->
<xsl:stylesheet 
    xmlns:xsl      ="http://www.w3.org/1999/XSL/Transform"
    xmlns:h        ="http://www.w3.org/1999/xhtml"
    xmlns          ="http://www.w3.org/1999/xhtml"
    xmlns:data-view="http://www.w3.org/2003/g/data-view"
    xmlns:dc      ="http://purl.org/dc/elements/1.1/"
    xmlns:dcterms  ="http://purl.org/dc/terms/"
    xmlns:dctype  ="http://purl.org/dc/dcmitype/"
    xmlns:dcam    ="http://purl.org/dc/dcam/"
    xmlns:xlink    ="http://www.w3.org/1999/xlink"
    xmlns:rdf      ="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:rdfs    ="http://www.w3.org/2000/01/rdf-schema#"
    exclude-result-prefixes="#default h xlink rdfs data-view dc dcterms dctype dcam"
    version="1.0">

    <xsl:output method="xml" encoding="UTF-8" indent="yes"/>

    <xsl:variable name="uc">ABCDEFGHIJKLMNOPQRSTUVWXYZ</xsl:variable>

    <xsl:variable name="lc">abcdefghijklmnopqrstuvwxyz</xsl:variable>

    <xsl:param name="xmlfile">./.</xsl:param>

    <xsl:variable name="baseURI">
        <xsl:choose>
            <xsl:when test="//h:meta[./@name='DCTERMS.identifier'][./@scheme='DCTERMS.URI']/@content">
                <xsl:value-of select="//h:meta[./@name='DCTERMS.identifier'][./@scheme='DCTERMS.URI']/@content"/>
            </xsl:when>
            <xsl:when test="//h:html/@xml:base">
                <xsl:value-of select="//h:html/@xml:base"/>
            </xsl:when>
            <xsl:when test="//h:base/@href">
                <xsl:value-of select="//h:base/@href"/>
            </xsl:when>
            <xsl:otherwise>
                <xsl:value-of select="$xmlfile"/>
            </xsl:otherwise>
        </xsl:choose>
    </xsl:variable>


    <xsl:variable name="ele" select="document('./dcelements.rdf')" />

    <xsl:variable name="eleterm" select="document('./dcterms.rdf')" />

    <xsl:variable name="eletype" select="document('./dctype.rdf')" />

    <xsl:variable name="model" select="document('./dcam.rdf')" />


    <xsl:template match="/">
        <rdf:RDF>
            <xsl:comment>DCMI Abstract Model</xsl:comment>
            <xsl:comment>Instance Document</xsl:comment>


            <rdf:Description>
                <xsl:attribute name="rdf:about">
                    <xsl:value-of select="$baseURI" />
                </xsl:attribute>

                <xsl:apply-templates select="//h:html/h:head/h:meta" />

                <xsl:apply-templates select="//h:html/h:head/h:link" />


            </rdf:Description>
        </rdf:RDF>
    </xsl:template>


    <xsl:template match="h:meta">

        <xsl:call-template name="item">
            <xsl:with-param name="n" select="@name" />
            <xsl:with-param name="val" select="@content" />
        </xsl:call-template>
    </xsl:template>

    <xsl:template match="h:link">


        <xsl:call-template name="item">
            <xsl:with-param name="n" select="@rel" />
            <xsl:with-param name="ref" select="@href" />
        </xsl:call-template>
    </xsl:template>

    <xsl:template name="item">
        <xsl:param name="n" />
        <xsl:param name="val" />
        <xsl:param name="ref" />

        <xsl:variable name="ns">
            <xsl:call-template name="get-ns">
                <xsl:with-param name="n" select="$n" />
            </xsl:call-template>
        </xsl:variable>

        <xsl:if test="string-length($ns) &gt; 0">
            <xsl:variable name="ln">
                <xsl:call-template name="get-ln">
                    <xsl:with-param name="n" select="$n" />
                    <xsl:with-param name="ns" select="$ns" />
                </xsl:call-template>
            </xsl:variable>


            <xsl:element name="{$ln}" namespace="{$ns}">
                <xsl:choose>
                    <xsl:when test="$ref">
                        <rdf:Description rdf:about="{$ref}">
                            <xsl:if test="@hreflang">
                                <dc:language>
                                    <xsl:value-of select="@hreflang" />
                                </dc:language>
                            </xsl:if>
                        </rdf:Description>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:if test="@xml:lang">
                            <xsl:attribute name="xml:lang">
                                <xsl:value-of select="@xml:lang" />
                            </xsl:attribute>
                        </xsl:if>

                        <xsl:if test="@scheme">
                            <rdf:Description>
                                <rdf:value>
                                    <xsl:if test="@scheme">
                                        <xsl:variable name="dt">
                                            <xsl:call-template name="get-dt">
                                                <xsl:with-param name="n" select="@scheme" />
                                            </xsl:call-template>
                                        </xsl:variable>
                                        <xsl:if test="string-length($dt) &gt; 0">
                                            <xsl:attribute name="rdf:datatype">
                                                <xsl:value-of select="$dt" />
                                            </xsl:attribute>
                                        </xsl:if>
                                    </xsl:if>
                                    <xsl:value-of select="$val" />
                                </rdf:value>
                            </rdf:Description>
                        </xsl:if>

                        <xsl:if test="not(@scheme)">
                            <xsl:value-of select="$val" />
                        </xsl:if>
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:element>
        </xsl:if>
    </xsl:template>

    <xsl:template name="get-ns">
        <xsl:param name="n" />

        <xsl:variable name="pfx" select='substring-before(translate($n, $uc, $lc), ".")' />
        <xsl:variable name="binding" select='../h:link[translate(@rel, $uc, $lc) = concat("schema.", $pfx)]' />

        <xsl:if test="$binding">
            <!-- @@TODO: absolutize @href -->
            <xsl:variable name="ns1" select="$binding/@href" />

            <xsl:variable name="ln1" select="substring( translate($n, $uc, $lc), string-length($pfx) + 1, string-length($n))" />

            <xsl:variable name="ns">
                <xsl:choose>
                    <xsl:when test='contains(substring-after($ln1, "."), ".")'>
                        <xsl:value-of select='"http://purl.org/dc/terms/"'/>
                    </xsl:when>
                    <xsl:otherwise>
                        <xsl:value-of select="$ns1" />
                    </xsl:otherwise>
                </xsl:choose>
            </xsl:variable>
            <xsl:value-of select="$ns" />
        </xsl:if>
    </xsl:template>

    <xsl:template name="get-ln">
        <xsl:param name="n" />
        <xsl:param name="ns" />

        <xsl:variable name="ln1" select='substring-after($n, ".") ' />

        <xsl:variable name="ln">
            <xsl:choose>
                <xsl:when test='contains($ln1, ".") and $ns = "http://purl.org/dc/terms/"'>
                    <xsl:value-of select='substring-after($ln1, ".") '/>
                </xsl:when>
                <xsl:otherwise>
                    <xsl:value-of select="$ln1" />
                </xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:value-of select="$ln" />
    </xsl:template>

    <xsl:template name="get-dt">
        <xsl:param name="n" />

        <xsl:variable name="ns">
            <xsl:call-template name="get-ns">
                <xsl:with-param name="n" select="$n" />
            </xsl:call-template>
        </xsl:variable>

        <xsl:variable name="ln" select='substring-after($n, ".")' />

        <xsl:value-of select="concat($ns, $ln)" />
    </xsl:template>


    <!-- don't pass text thru -->
    <xsl:template match="text()|@*"></xsl:template>
</xsl:stylesheet>
