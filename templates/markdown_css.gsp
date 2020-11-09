<%
  content.extracted_body = content.body
  if ( content.image_css ) {
     content.extracted_body = content.extracted_body.replaceAll("(<p><img)") {
         it[0] = "<p class=\"${content.image_css}\"><img"
     }
     content.extracted_body = content.extracted_body.replaceAll("(<p><a href=\"/product)") {
         it[0] = "<p class=\"${content.image_css}\"><a href=\"/product"
     }
  }
  if ( content.list_css ) {
     String[] list_css = ["${content.list_css}-writer",
     	      	       	  "${content.list_css}-calc",
			  "${content.list_css}-impress",
			  "${content.list_css}-draw",
			  "${content.list_css}-base",
			  "${content.list_css}-math"]
     def n=list_css.length;
     for (int i=0; i<n; i++) {
     	 content.extracted_body =  content.extracted_body.replaceFirst("(\\<li\\>)") {
            it[0] = "<li class=\"${list_css[i]}\">"
         }
     }
  }
%>
