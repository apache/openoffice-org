/**
 * get language ISO code
 * @param	link	String with download set
 * @return	String with ISO code, e.g. 'en-US' or null if not available
 */
function Installset_getLanguage( link ) {
	var retVal = null;
	var s = null;
	if ( Installset_isJRE( link ) ) {
		s = link.split( "_install_wJRE_" )[1];
  		if ( s.indexOf( "." ) > -1) retVal = s.split(".")[0];
		if ( retVal.indexOf( "_" ) > -1) retVal = retVal.split("_")[0];
	} else {
		s = link.split( "_install_" )[1];
  		if ( s.indexOf( "." ) > -1) retVal = s.split(".")[0];
		if ( retVal.indexOf( "_" ) > -1) retVal = retVal.split("_")[0];
	}
	return retVal;
}

/**
 * get product
 * @param	link	String with download set
 * @return	String with product-name or null if not available
 */
function Installset_getProduct( link ) {
	var retVal = null;
	if ( link.indexOf( "_" ) > -1 ) {
		retVal = link.split("_")[0];
	}
	return retVal;
}

/**
 * get version
 * @param	link	String with download set
 * @return	String with version or null if not available
 */
function Installset_getVersion( link ) {
	var retVal = null;
	if ( link.indexOf( "_" ) > -1 ) {
		retVal = link.split("_")[1];
	}
	return retVal;
}

/**
 * get Platform
 * @param	link	String with download set
 * @return	String with platform or null if not available
 */
function Installset_getPlatform( link ) {
	var retVal = null;
	if ( link.indexOf( "_" ) > -1 ) {
		retVal = link.split("_")[2];
	}
	return retVal;
}

/**
 * download includes JRE
 * @param	link	String with download set
 * @return	boolean if download includes JRE or not
 */
function Installset_isJRE( link ) {
	if ( link.indexOf( "_install_wJRE_" ) > -1 ) {
		return true;
	}
	return false;
}

/**
 * download is Debian
 * @param	link	String with download set
 * @return	boolean if download is for Debian or not
 */
function Installset_isDebian( link ) {
	if ( link.indexOf( "_deb." ) > -1 ) {
		return true;
	}
	return false;
}
