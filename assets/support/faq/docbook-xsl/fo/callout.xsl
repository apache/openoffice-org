<?xml version='1.0'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:fo="http://www.w3.org/1999/XSL/Format"
                xmlns:sverb="http://nwalsh.com/xslt/ext/com.nwalsh.saxon.Verbatim"
                xmlns:xverb="com.nwalsh.xalan.Verbatim"
                xmlns:lxslt="http://xml.apache.org/xslt"
                exclude-result-prefixes="sverb xverb lxslt"
                version='1.0'>

<!-- ********************************************************************
     $Id: callout.xsl,v 1.1 2003/08/21 00:09:54 cphennessy Exp $
     ********************************************************************

     This file is part of the XSL DocBook Stylesheet distribution.
     See ../README or http://nwalsh.com/docbook/xsl/ for copyright
     and other information.

     ******************************************************************** -->

<lxslt:component prefix="xverb"
                 functions="insertCallouts"/>

<xsl:template match="programlistingco|screenco">
  <xsl:variable name="verbatim" select="programlisting|screen"/>
  <xsl:variable name="vendor" select="system-property('xsl:vendor')"/>

  <xsl:choose>
    <xsl:when test="$use.extensions != '0'
                    and $callouts.extension != '0'">
      <xsl:variable name="rtf">
        <xsl:apply-templates select="$verbatim">
          <xsl:with-param name="suppress-numbers" select="'1'"/>
        </xsl:apply-templates>
      </xsl:variable>

      <xsl:variable name="rtf-with-callouts">
        <xsl:choose>
          <xsl:when test="contains($vendor, 'SAXON ')">
            <xsl:copy-of select="sverb:insertCallouts(areaspec,$rtf)"/>
          </xsl:when>
          <xsl:when test="contains($vendor, 'Apache Software Foundation')">
            <xsl:copy-of select="xverb:insertCallouts(areaspec,$rtf)"/>
          </xsl:when>
          <xsl:otherwise>
            <xsl:message terminate="yes">
              <xsl:text>Don't know how to do callouts with </xsl:text>
              <xsl:value-of select="$vendor"/>
            </xsl:message>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>

      <xsl:choose>
        <xsl:when test="$verbatim/@linenumbering = 'numbered'
                        and $linenumbering.extension != '0'">
          <xsl:call-template name="number.rtf.lines">
            <xsl:with-param name="rtf" select="$rtf-with-callouts"/>
            <xsl:with-param name="pi.context"
                            select="programlisting|screen"/>
          </xsl:call-template>
          <xsl:apply-templates select="calloutlist"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:copy-of select="$rtf-with-callouts"/>
          <xsl:apply-templates select="calloutlist"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:when>
    <xsl:otherwise>
      <xsl:apply-templates/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<xsl:template match="areaspec|areaset|area">
</xsl:template>

<xsl:template match="areaset" mode="conumber">
  <xsl:number count="area|areaset" format="1"/>
</xsl:template>

<xsl:template match="area" mode="conumber">
  <xsl:number count="area|areaset" format="1"/>
</xsl:template>

<xsl:template match="co">
  <fo:inline id="{@id}">
    <xsl:apply-templates select="." mode="callout-bug"/>
  </fo:inline>
</xsl:template>

<xsl:template match="coref">
  <!-- tricky; this relies on the fact that we can process the "co" that's -->
  <!-- "over there" as if it were "right here" -->

  <xsl:variable name="co" select="key('id', @linkend)"/>
  <xsl:choose>
    <xsl:when test="not($co)">
      <xsl:message>
        <xsl:text>Error: coref link is broken: </xsl:text>
        <xsl:value-of select="@linkend"/>
      </xsl:message>
    </xsl:when>
    <xsl:when test="local-name($co) != 'co'">
      <xsl:message>
        <xsl:text>Error: coref doesn't point to a co: </xsl:text>
        <xsl:value-of select="@linkend"/>
      </xsl:message>
    </xsl:when>
    <xsl:otherwise>
      <xsl:apply-templates select="$co"/>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

<xsl:template match="co" mode="callout-bug">
  <xsl:call-template name="callout-bug">
    <xsl:with-param name="conum">
      <xsl:number count="co" format="1"/>
    </xsl:with-param>
  </xsl:call-template>
</xsl:template>

<xsl:template name="callout-bug">
  <xsl:param name="conum" select='1'/>

  <xsl:choose>
    <!-- Draw callouts as images -->
    <xsl:when test="$callout.graphics != '0'
                    and $conum &lt;= $callout.graphics.number.limit">
      <xsl:variable name="filename"
                    select="concat($callout.graphics.path,$conum,$callout.graphics.extension)"/>

      <fo:external-graphic>
        <xsl:attribute name="src">
          <xsl:choose>
            <xsl:when test="$passivetex.extensions != 0
                            or $fop.extensions != 0
                            or $arbortext.extensions != 0">
              <xsl:value-of select="$filename"/>
            </xsl:when>
            <xsl:otherwise>
              <xsl:text>url(</xsl:text>
              <xsl:value-of select="$filename"/>
              <xsl:text>)</xsl:text>
            </xsl:otherwise>
          </xsl:choose>
        </xsl:attribute>
      </fo:external-graphic>
    </xsl:when>

    <xsl:when test="$callout.unicode != 0
                    and $conum &lt;= $callout.unicode.number.limit">
      <xsl:variable name="comarkup">
        <xsl:choose>
          <xsl:when test="$callout.unicode.start.character = 10102">
            <xsl:choose>
              <xsl:when test="$conum = 1">&#10102;</xsl:when>
              <xsl:when test="$conum = 2">&#10103;</xsl:when>
              <xsl:when test="$conum = 3">&#10104;</xsl:when>
              <xsl:when test="$conum = 4">&#10105;</xsl:when>
              <xsl:when test="$conum = 5">&#10106;</xsl:when>
              <xsl:when test="$conum = 6">&#10107;</xsl:when>
              <xsl:when test="$conum = 7">&#10108;</xsl:when>
              <xsl:when test="$conum = 8">&#10109;</xsl:when>
              <xsl:when test="$conum = 9">&#10110;</xsl:when>
              <xsl:when test="$conum = 10">&#10111;</xsl:when>
            </xsl:choose>
          </xsl:when>
          <xsl:otherwise>
            <xsl:message>
              <xsl:text>Don't know how to generate Unicode callouts </xsl:text>
              <xsl:text>when $callout.unicode.start.character is </xsl:text>
              <xsl:value-of select="$callout.unicode.start.character"/>
            </xsl:message>
            <fo:inline background-color="#404040"
                       color="white"
                       padding-top="0.1em"
                       padding-bottom="0.1em"
                       padding-start="0.2em"
                       padding-end="0.2em"
                       baseline-shift="0.1em"
                       font-family="{$body.font.family}"
                       font-weight="bold"
                       font-size="75%">
              <xsl:value-of select="$conum"/>
            </fo:inline>
          </xsl:otherwise>
        </xsl:choose>
      </xsl:variable>

      <xsl:choose>
        <xsl:when test="$callout.unicode.font != ''">
          <fo:inline font-family="{$callout.unicode.font}">
            <xsl:copy-of select="$comarkup"/>
          </fo:inline>
        </xsl:when>
        <xsl:otherwise>
          <xsl:copy-of select="$comarkup"/>
        </xsl:otherwise>
      </xsl:choose>
    </xsl:when>

    <!-- Most safe: draw a dark gray square with a white number inside -->
    <xsl:otherwise>
      <fo:inline background-color="#404040"
                 color="white"
                 padding-top="0.1em"
                 padding-bottom="0.1em"
                 padding-start="0.2em"
                 padding-end="0.2em"
                 baseline-shift="0.1em"
                 font-family="{$body.font.family}"
                 font-weight="bold"
                 font-size="75%">
        <xsl:value-of select="$conum"/>
      </fo:inline>
    </xsl:otherwise>
  </xsl:choose>
</xsl:template>

</xsl:stylesheet>
