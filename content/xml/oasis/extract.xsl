<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:text="http://openoffice.org/2000/text" 
  xmlns:office="http://openoffice.org/2000/office"
  xmlns:style="http://openoffice.org/2000/style">

  <xsl:output method="text"/>

  <!-- which paragraph styles do we wish to extract? -->
  <xsl:param name="style" select="'RelaxNG'"/>
  <xsl:param name="style2" select="'Changed Relax NG'"/>

  <!-- default: don't output anything -->
  <xsl:template match="text()"/>

  <!-- paragraph with the proper style found? Then generate output! -->
  <xsl:template match="text:p">

    <!-- determine all parent styles of this paragraph; use key 'parents' -->
    <xsl:variable name="parents"
      select="@text:style-name |
              key('parents',@text:style-name) |
              key('parents',key('parents',@text:style-name)) |
              key('parents',key('parents',key('parents',@text:style-name)))"/>

    <!-- if proper parent style is found, generate output! -->
    <xsl:if test="$parents = $style or $parents = $style2">
      <xsl:apply-templates mode="output"/>
      <xsl:text>
</xsl:text>
    </xsl:if>
  </xsl:template>

  <xsl:key name="parents"
    match="style:style/@style:parent-style-name"
    use="../@style:name" />

  <!-- generate output: just copy all text we find -->
  <xsl:template mode="output">
    <xsl:copy>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <xsl:template mode="output" match="text()">
    <xsl:copy/>
  </xsl:template>

  <!-- white space handling: <text:s>, <text:tab> elements  -->
  <xsl:template mode="output" match="text:tab-stop">
    <xsl:text>    </xsl:text>
  </xsl:template>

  <xsl:template mode="output" match="text:s">
    <xsl:call-template name="repeat">
      <xsl:with-param name="count" select="@text:c"/>
      <xsl:with-param name="string" select="' '"/>
    </xsl:call-template>
  </xsl:template>

  <xsl:template name="repeat">
    <xsl:param name="count"/>
    <xsl:param name="string"/>
    <xsl:if test="$count > 0">
      <xsl:value-of select="$string"/>
      <xsl:call-template name="repeat">
        <xsl:with-param name="count" select="$count -1"/>
        <xsl:with-param name="string" select="$string"/>
      </xsl:call-template>
    </xsl:if>
  </xsl:template>

</xsl:stylesheet>
