/*
 * Functions to draw every single colored box as well as the navigation bar and logo section
 */

/*
 * Download box
 * Show the select boxes, both download text buttons, the sub-box and help icons and links
 * @param:  None
 * @return: None
 */
DL.createDownloadBox = function() {
  document.write( "<div class='first button green-sel' id='optionitem2'>"
    + "<div class='green-sel-icon'></div>"

    // Headline.
    + "<h2 title='" + l10n.dl_green_box_headline_title + "'>"
      + l10n.dl_green_box_headline_text
    + "</h2>"

    // Box text.
    + "<p title='" + l10n.dl_green_box_subtext1_title + "'>"
      + "(" + l10n.dl_green_box_subtext1_text + ")"
    + "</p>"
    + "<p title='" + l10n.dl_green_box_subtext2_title + "'>"
      + "<b>" + l10n.dl_green_box_subtext2_text + ":</b>"
    + "</p>"

    // Select drop-down boxes.
    + "<form name='download'>"
      + "<select class='sel-os' id='os' name='os' onchange='DL.getLinkSelection()'"
        + "title='" + l10n.dl_green_box_selectbox_os_title   + "'>"
      + "</select>"
      + "<select class='sel-language' id='language' name='language' onchange='DL.getLinkSelection()'"
        + "title='" + l10n.dl_green_box_selectbox_lang_title + "'>"
      + "</select>"
      + "<select class='sel-version' id='version' name='version' onchange='DL.getLinkSelection()'"
        + "title='" + l10n.dl_green_box_selectbox_ver_title  + "'>"
      + "</select>"

      // Linux packages text.
      + "<a id='dl_rpm_vs_deb' title='" + l10n.dl_rpm_vs_deb_title + "'>"
        + l10n.dl_rpm_vs_deb_text
      + "</a>"

      + "</form>"

    // Both download text buttons: First (left) for "full install", then (right) for "langpack".
    + "<div style='margin: 0px 0px -15px 3%;'>"
      + "<div class='btn_dl' style='display: inline-block;'>"
        + "<h3>"
          + "<a id='dl_f_link' target='_blank'></a>"
        + "</h3>"
      + "</div>"

      + "<a style='margin: 0px 0px 0px -1%; cursor: default;'></a>"

      + "<div class='btn_dl' style='display: inline-block;'>"
        + "<h3>"
          + "<a id='dl_lp_link' target='_blank'></a>"
        + "</h3>"
      + "</div>"
    + "</div>"
  + "<br /><br />"
  + "</div>"

   // Sub-box
   // Show release info, filesizes, checksum links and help links
  + "<div id='sub_box' class='button sub-green-sel'>"
    + "<div>" // The 3 lines of release info

      // Error text with hint.
      + "<img id='dl_err_img'	    style='margin: 5px 5px 18px 3%;' height='16' width='16' />"
      + "<p id='dl_err'		    style='text-decoration: none;'></p>"
      + "<p>"

        // Release info and notes.
        + "<a id='dl_rel_info'	    style='text-decoration: none;'></a>"
        + "<a id='dl_rel_notes'	    style='text-decoration: underline;' target='_blank'></a>"
        + "<br />"

        // Full installation: Filesize and checksums.
        + "<a id='dl_f_info'	    style='text-decoration: none;'></a>"
        + "<a id='dl_f_chk_keys'    style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space1'	    style='text-decoration: none;'></a>"
        + "<a id='dl_f_chk_asc'	    style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space2'	    style='text-decoration: none;'></a>"
        + "<a id='dl_f_chk_sha256'  style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space3'	    style='text-decoration: none;'></a>"
        + "<a id='dl_f_chk_sha512'  style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space4'	    style='text-decoration: none;'></a>"
        + "<a id='dl_f_chk_md5'	    style='text-decoration: underline;' target='_blank'></a>"
        + "<br />"

        // Langpack: Filesize and checksums.
        + "<a id='dl_lp_info'	    style='text-decoration: none;'></a>"
        + "<a id='dl_lp_chk_keys'   style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space5'	    style='text-decoration: none;'></a>"
        + "<a id='dl_lp_chk_asc'    style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space6'	    style='text-decoration: none;'></a>"
        + "<a id='dl_lp_chk_sha256' style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space7'	    style='text-decoration: none;'></a>"
        + "<a id='dl_lp_chk_sha512' style='text-decoration: underline;' target='_blank'></a>"
        + "<a id='space8'	    style='text-decoration: none;'></a>"
        + "<a id='dl_lp_chk_md5'    style='text-decoration: underline;' target='_blank'></a>"
        + "<br />"
      + "</p>"
    + "</div>"

    // Help items
    // Show the help icons and links
    + "<div>"
      + "<p>"

        // Help: What is a language pack?
        + "<img id='dl_hlp_img'	  style='padding: 5px 5px 0px 0px;' height='16' width='16' />"
        + "<a id='dl_hlp' target='_blank' onclick='DL.showWindow( this.href ); return false;'></a>"

        // Help: How to verify the download?
        + "<img id='dl_chk_img'	  style='padding: 5px 5px 0px 30px;' height='16' width='16' />"
        + "<a id='dl_chk' target='_blank'></a>"

        // Help: Report broken link.
        + "<img id='dl_rpt_img'	  style='padding: 5px 5px 0px 30px;' height='16' width='16' />"
        + "<a id='dl_rpt' target='_blank'></a>"
      + "</p>"
    + "</div>"
  + "</div>" );
  return;
}

/*
 * Get more developers box
 * Show the clickable text for the "Get Involved" webpage
 * @param:  None
 * @return: None
 */
DL.createGetDevBox = function() {
  document.write( "<div class='orange button' id='optionitem5' "
    + "onclick='openItem(\"optionitem5\",\"" + l10n.dl_getdev_orange_box_text_href + "\"); return false;'>"
    // No icon in the right corner of the box.
    // + "<div class='<color>-icon'></div>"

    // Headline.
    + "<h2 title='" + l10n.dl_getdev_orange_box_headline_title + "'>"
      + l10n.dl_getdev_orange_box_headline_text
    + "</h2>"

    // Box text.
    + "<p style='margin-left: 5px; padding-bottom: 3%;'>"
      + "<a href='" + l10n.dl_getdev_orange_box_text_href + "' title='" + l10n.dl_getdev_orange_box_text_title + "'>"
        + l10n.dl_getdev_orange_box_text_text
      + "</a>"
    + "</p>"
  + "</div>" );
  return;
}

/*
 * Social network box
 * Show the clickable icons for the social networks
 * @param:  None
 * @return: None
 */
DL.createShareBox = function() {
  document.write( "<div class='button lightblue' id='optionitem4'>"
    + "<div class='lightblue-icon'></div>"

    // Headline.
    + "<h2 title='" + l10n.dl_share_light_blue_box_headline_title + "'>"
      + l10n.dl_share_light_blue_box_headline_text
    + "</h2>"

    // Box text.
    + "<p id='ShareDownloadLinks'"
      + "title='" + l10n.dl_share_light_blue_box_text_title + "'>"
      + l10n.dl_share_light_blue_box_text_text
    + "</p>"
    + "<div class='icon_box'>"

      // Apache OpenOffice blog.
      + "<span onclick='javascript:share( \"apacheblog\" )'"
        + "title='" + l10n.dl_share_light_blue_box_blog_title + "'>"
        + "<img src='" + l10n.dl_share_light_blue_box_blog_src + "'"
        + "alt='" + l10n.dl_share_light_blue_box_blog_alt + "'/>"
        + "<a>" + l10n.dl_share_light_blue_box_blog_text + "</a>"
      + "</span>"

      // Facebook.
      + "<span onclick='javascript:share( \"facebook\" )'"
        + "title='" + l10n.dl_share_light_blue_box_facebook_title + "'>"
        + "<img src='" + l10n.dl_share_light_blue_box_facebook_src + "'"
        + "alt='" + l10n.dl_share_light_blue_box_facebook_alt + "' />"
        + "<a>" + l10n.dl_share_light_blue_box_facebook_text + "</a>"
      + "</span>"

      // Twitter.
      + "<span onclick='javascript:share( \"twitter\" )'"
        + "title='" + l10n.dl_share_light_blue_box_twitter_title + "'>"
        + "<img src='" + l10n.dl_share_light_blue_box_twitter_src + "'"
        + "alt='" + l10n.dl_share_light_blue_box_twitter_alt + "' />"
        + "<a>" + l10n.dl_share_light_blue_box_twitter_text + "</a>"
      + "</span>"

    + "</div>"
  + "</div>" );
  return;
}

/*
 * Extensions and dictionaries
 * Show the clickable text to get extensions and dictionaries
 * @param:  None
 * @return: None
 */
DL.createExtensionsBox = function() {
  document.write( "<div class='blue button' id='optionitem5' "
    + "onclick='openItem(\"optionitem5\",\"" + l10n.dl_ext_blue_box_text_href + "\"); return false;'>"
    + "<div class='blue-icon'></div>"

    // Headline.
    + "<h2 title='" + l10n.dl_ext_blue_box_headline_title + "'>"
      + l10n.dl_ext_blue_box_headline_text
    + "</h2>"

    // Box text.
    + "<p style='margin-left: 5px; padding-bottom: 3%;'>"
      + "<a href='" + l10n.dl_ext_blue_box_text_href + "' title='" + l10n.dl_ext_blue_box_text_title + "'>"
        + l10n.dl_ext_blue_box_text_text
      + "</a>"
    + "</p>"
  + "</div>" );
  return;
}

/*
 * Templates
 * Show the clickable text to get templates
 * @param:  None
 * @return: None
 */
DL.createTemplatesBox = function() {
  document.write( "<div class='button blue' id='optionitem6' "
    + "onclick='openItem(\"optionitem6\",\"" + l10n.dl_tlp_blue_box_text_href + "\"); return false;'>"
    + "<div class='blue-icon'></div>"

    // Headline.
    + "<h2 title='" + l10n.dl_tlp_blue_box_headline_title + "'>"
      + l10n.dl_tlp_blue_box_headline_text
    + "</h2>"

    // Box text.
    + "<p style='margin-left: 5px; padding-bottom: 3%;'>"
      + "<a href='" + l10n.dl_tlp_blue_box_text_href + "' title='" + l10n.dl_tlp_blue_box_text_title + "'>"
        + l10n.dl_tlp_blue_box_text_text
      + "</a>"
    + "</p>"
  + "</div>" );
  return;
}

/*
 * Navigation bar
 * Show the navigation bar with 3 areas and their items
 * @param:  None
 * @return: None
 */
DL.createNavigationBar = function() {
  document.write( "<div>"

    // Headline 1.
    + "<h3>" + l10n.dl_nav_headline_1_text + "</h3>"

    // List items.
    + "<ul>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_sysreq_href + "'"
          + "title='" + l10n.dl_nav_sysreq_title + "'>" + l10n.dl_nav_sysreq_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_license_href + "'"
          + "title='" + l10n.dl_nav_license_title + "'>" + l10n.dl_nav_license_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_source_href + "'"
          + "title='" + l10n.dl_nav_source_title + "'>" + l10n.dl_nav_source_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_build_href + "'"
          + "title='" + l10n.dl_nav_build_title + "'>" + l10n.dl_nav_build_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_sdk_href + "'"
          + "title='" + l10n.dl_nav_sdk_title + "'>" + l10n.dl_nav_sdk_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_devbuilds_href + "'"
          + "title='" + l10n.dl_nav_devbuilds_title + "'>" + l10n.dl_nav_devbuilds_text
        + "</a>"
      + "</li>"
    + "</ul>"

    // Headline 2.
    + "<h3>" + l10n.dl_nav_headline_2_text + "</h3>"

    // List items.
    + "<ul>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_schedule_href + "'"
          + "title='" + l10n.dl_nav_schedule_title + "'>" + l10n.dl_nav_schedule_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_hist_schedule_href + "'"
          + "title='" + l10n.dl_nav_hist_schedule_title + "'>" + l10n.dl_nav_hist_schedule_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_inst_guide_href + "'"
          + "title='" + l10n.dl_nav_inst_guide_title + "'>" + l10n.dl_nav_inst_guide_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_user_guide_href + "'"
          + "title='" + l10n.dl_nav_user_guide_title + "'>" + l10n.dl_nav_user_guide_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_why_java_href + "'"
          + "title='" + l10n.dl_nav_why_java_title + "'>" + l10n.dl_nav_why_java_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_eol_href + "'"
          + "title='" + l10n.dl_nav_eol_title + "'>" + l10n.dl_nav_eol_text
        + "</a>"
      + "</li>"
    + "</ul>"

    // Headline 3.
    + "<h3>" + l10n.dl_nav_headline_3_text + "</h3>"

    // List items.
    + "<ul>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_support_href + "'"
          + "title='" + l10n.dl_nav_support_title + "'>" + l10n.dl_nav_support_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_local_href + "'"
          + "title='" + l10n.dl_nav_local_title + "'>" + l10n.dl_nav_local_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_stat_href + "'"
          + "title='" + l10n.dl_nav_stat_title + "'>" + l10n.dl_nav_stat_text
        + "</a>"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_mirrors1_href + "'"
          + "title='" + l10n.dl_nav_mirrors1_title + "'>" + l10n.dl_nav_mirrors1_text
        + "</a>"
        + "<br />"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_mirrors2_href + "'"
          + "title='" + l10n.dl_nav_mirrors2_title + "'>" + l10n.dl_nav_mirrors2_text
        + "</a>"
        + "<br />"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_porting_href + "'"
          + "title='" + l10n.dl_nav_porting_title + "'>" + l10n.dl_nav_porting_text
        + "</a>"
        + "<br />"
      + "</li>"
      + "<li>"
        + "<a href='" + l10n.dl_nav_archive_href + "'"
          + "title='" + l10n.dl_nav_archive_title + "'>" + l10n.dl_nav_archive_text
        + "</a>"
        + "<br />"
      + "</li>"
    + "</ul>"
  + "</div>" );
  return;
}

/*
 * Logos
 * Show the clickable logos
 * @param:  None
 * @return: None
 */
DL.createLogoSection = function() {
  document.write( "<div id='SupportedAndSupporters'>"

    // Sourceforge logo.
    + "<a href='" + l10n.dl_img_sourceforge_href + "' target='_blank' title='" + l10n.dl_img_sourceforge_title + "'>"
      + "<img class='sf_logo' src='" + l10n.dl_img_sourceforge_src + "' width='160' height='34' alt='" + l10n.dl_img_sourceforge_alt + "' />"
    + "</a>"
    + "<br /><br />"

    // W3C Validator logo.
    + "<a href='" + l10n.dl_img_w3c_href + "' target='_blank' title='" + l10n.dl_img_w3c_title + "'>"
      + "<img class='w3c_logo' src='" + l10n.dl_img_w3c_src + "' alt='" + l10n.dl_img_w3c_alt + "' />"
    + "</a>"
  + "</div>" );
  return;
}

