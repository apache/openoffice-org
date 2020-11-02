<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    
    <xsl:output method="html"/>
    
    <!-- 
        
    Load the UI strings from the locale-appropriate resource file.  An input XSLT parameter called 'locale' should contain the locale. 
    
    The resource files should be named strings_<locale>.xml and be in the same directory as the XSLT script.
    
    -->
    
    <xsl:param name="locale" select="en"/>
    
    <xsl:variable name="fileName" select="concat('strings_', $locale, '.xml')"/>
    <xsl:variable name="localizedStrings" select="document($fileName)/*"/>
    
    <xsl:variable name="disclaimer-text" select="$localizedStrings/string[@id='disclaimer-text']/text()"/>
    <xsl:variable name="submission-instructions" select="$localizedStrings/string[@id='submission-instructions']/text()"/>
    <xsl:variable name="page-title" select="$localizedStrings/string[@id='page-title']/text()"/>
    <xsl:variable name="name-header" select="$localizedStrings/string[@id='name-header']/text()"/>
    <xsl:variable name="area-header" select="$localizedStrings/string[@id='area-header']/text()"/>
    <xsl:variable name="countries-header" select="$localizedStrings/string[@id='countries-header']/text()"/>
    <xsl:variable name="description-header" select="$localizedStrings/string[@id='description-header']/text()"/>
    <xsl:variable name="contact-header" select="$localizedStrings/string[@id='contact-header']/text()"/>
    
    
<!-- Main template deals with the introductory text and the basic table declaration -->
    <xsl:template match="/">
        
    <xsl:comment>NOTE:  This file is machine-generated.  Do not edit it directly or else your changes will be overwritten the next time we generate the page.   
    If you want to edit the underlying listing data then you need to edit the consultants/consultants.xml file.  If you want to edit the structure of the page then you need
    to edit the consultants/to-html.xsl file.  If you want to change or translate the text in the page you want to edit consultants/strings_locale.xml.    
   </xsl:comment>
        <html>
            <head>
                <title><xsl:value-of select="$page-title"/></title>
            </head>
            <body>
               
                <h1><xsl:value-of select="$page-title"/></h1>
                
                <p><xsl:value-of select="$disclaimer-text"/></p>
                
                <p><xsl:value-of select="$submission-instructions"/><a href="consultant-submission.html">consultant-submission.html</a></p>
                
                <br/>
               
                <table border="1">
                    <tr>
                        <th><xsl:value-of select="$name-header"/></th>
                        <th><xsl:value-of select="$area-header"/></th>
                        <th><xsl:value-of select="$countries-header"/></th>
                        <th width="50%"><xsl:value-of select="$description-header"/></th>
                        <th><xsl:value-of select="$contact-header"/></th>
                    </tr>
                    <xsl:for-each select="consultants/consultant">
                        <xsl:sort lang="$locale" select="name"/>
                        <xsl:apply-templates select="."/>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
    
    
    <!-- This template handles the per-consultant information, for each row of the table -->
    
   <xsl:template match="consultant">
       <tr>
           <td>
                <a rel="nofollow" href="{website}"><xsl:value-of select="name"/></a>
          </td>
           <td>
               <xsl:for-each select="practice">  
                   <xsl:sort lang="$locale" select="."/>
                   <xsl:value-of select="."/>
                   <br/>
               </xsl:for-each>
               
           </td>
           <td>
               <xsl:for-each select="country">  
                   <xsl:sort lang="$locale" select="."/>
                   <xsl:value-of select="."/>
                   <br/>
               </xsl:for-each>
               
           </td>           
           <td>
               <xsl:value-of select="description"/>
           </td>
           <td>
               <a href="{concat('mailto:',email)}"><xsl:value-of select="email"/></a>
               <br/>
               <xsl:value-of select="phone"/>
           </td> 
       </tr>
       
   </xsl:template> 
 
</xsl:stylesheet>
