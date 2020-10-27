<%
def matcher0 = content.body =~ "<body(.*?)>";
assert matcher0 instanceof java.util.regex.Matcher;
if (!matcher0) {
   throw new RuntimeException("bodytag does not match");
}
//assert matcher0.matches();
content.bodytag = matcher0.group(1);

def matcher1 = content.body =~ "<head.*?>([\\S\\s]*?)</head>";
assert matcher1 instanceof java.util.regex.Matcher;
if (!matcher1) {
   throw new RuntimeException("bodytag='${content.bodytag}' -- head does not match");
}
//assert matcher1.matches();
content.header = matcher1.group(1);

def matcher2 = content.body =~ "<body.*?>([\\S\\s]*?)</body>";
assert matcher2 instanceof java.util.regex.Matcher;
if (!matcher2) {
   throw new RuntimeException("head='${content.header}' -- body does not match");
}
//assert matcher2.matches();
content.extracted_body= matcher2.group(1);

include "skeleton.gsp" %>
