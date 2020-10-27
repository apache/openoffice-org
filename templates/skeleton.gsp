<%
  content.brand='/brand.html';
  content.topnav='/topnav.html';
  content.leftnav=null;
  content.rightnav=null;
  content.breadcrumbs=null;
  // insert breadcrumbs and ssi logic
%><!--#include virtual="/doctype.html" -->
<html>
  <head>
    <% if (content.header) { %>
    ${content.header}
    <% }  else { %>
    <title>${content.title}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <% if (content.css) { %>
    <link href="${content.css}" rel="stylesheet" type="text/css">
    <% } %>
    <% } %>
    <link href="/css/ooo.css" rel="stylesheet" type="text/css">
  </head>
  <body<% if (content.bodytag) { %> ${content_bodytag} <% } %>>
    <!--#include virtual="${content.brand}" -->
    <div id="topbara">
      <% if (content.topnav) { %><!--#include virtual="${content.topnav}" --><% } %>
      <div id="breadcrumbsa">${content.breadcrumbs}</div>
    </div>
    <div id="clear"></div>
      <% if (content.leftnav) { %><!--#include virtual="${content.leftnav}" --><% } %>
      <% if (content.rightnav) { %><!--#include virtual="${content.rightnav}" --><% } %>
    <div id="content">
      <% if (content.title) {%><h1 class="title">${content.title}</h1><% } %>
      <% if (content.extracted_body) { %>
      ${content.extracted_body}
      <% } else { %>
      ${content.body}
      <% } %>
    </div>
    <!--#include virtual="/footer.html" -->
  </body>
</html>
