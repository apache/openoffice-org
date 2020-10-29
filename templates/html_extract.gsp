<%
  // Extract the body attributes as content.bodytag
  def matcher0 = content.body =~ "<body(.*?)>";
  assert matcher0 instanceof java.util.regex.Matcher;
  if (!matcher0) {
    // bare html not wrapped in a <body> tag
    content.extracted_body = content.body
    content.bodytag = null
    content.header = null
  } else {
    //assert matcher0.matches();
    content.bodytag = matcher0.group(1);

    // Extract the head content as content.header
    def matcher1 = content.body =~ "<head.*?>([\\S\\s]*?)</head>";
    assert matcher1 instanceof java.util.regex.Matcher;
    if (!matcher1) {
      // no head found.
      content.header = null
    } else {
      //assert matcher1.matches();
      content.header = matcher1.group(1);
    }

    // Extract the body content as content.extracted_body
    def matcher2 = content.body =~ "<body.*?>([\\S\\s]*?)</body>";
    assert matcher2 instanceof java.util.regex.Matcher;
    if (!matcher2) {
      matcher2 = content.body =~ "<body.*?>([\\S\\s]*?)";
      if (!matcher2) {
        throw new RuntimeException("content body not found");
      }
    }
    //assert matcher2.matches();
    content.extracted_body= matcher2.group(1);
  }
%>
