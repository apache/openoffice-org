<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet
  version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:text="http://openoffice.org/2000/text" 
  xmlns:office="http://openoffice.org/2000/office"
  xmlns:style="http://openoffice.org/2000/style" >


  <xsl:output method="xml"/>

  <!-- default: copy everything. -->
  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>


  <!-- #1: remove 'genre' elements -->
  <xsl:template match="office:text|office:global-text|office:drawing|
                       office:presentation|office:spreadsheet|office:chart">
    <xsl:apply-templates/>
  </xsl:template>

</xsl:stylesheet>
