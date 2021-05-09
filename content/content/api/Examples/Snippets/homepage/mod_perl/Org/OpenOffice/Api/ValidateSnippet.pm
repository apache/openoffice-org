## ========================================================================
 #
 #  $RCSfile: ValidateSnippet.pm,v $
 #
 #  $Revision: 1.1 $
 #
 #  last change: $Author: tomsontom $ $Date: 2004/07/01 08:45:06 $
 #
 #  The Contents of this file are made available subject to the terms of
 #  the BSD license.
 #
 #  Copyright (c) 2004 by Sun Microsystems, Inc.
 #  All rights reserved.
 #
 #  Redistribution and use in source and binary forms, with or without
 #  modification, are permitted provided that the following conditions
 #  are met:
 #  1. Redistributions of source code must retain the above copyright
 #     notice, this list of conditions and the following disclaimer.
 #  2. Redistributions in binary form must reproduce the above copyright
 #     notice, this list of conditions and the following disclaimer in the
 #     documentation and/or other materials provided with the distribution.
 #  3. Neither the name of Sun Microsystems, Inc. nor the names of its
 #     contributors may be used to endorse or promote products derived
 #     from this software without specific prior written permission.
 #
 #  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 #  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 #  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
 #  FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 #  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 #  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 #  BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS
 #  OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 #  ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 #  TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
 #  USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 #
## ======================================================================== -->

package Org::OpenOffice::Api::ValidateSnippet;

use strict;
use warnings;

use Apache;
use Apache::Request();
use Apache::Constants ':common';
use Apache::File;

use XML::LibXML;

sub handler {
   my $r = shift;
   my $apr = Apache::Request->new($r, POST_MAX => 20*1024, DISABLE_UPLOADS => 0);
   my $status = $apr->parse();

   if( $status != OK ) {
	&print_page("Upload didn't succeeded",$apr->notes("error-notes"));
	return $status;
	
   } else {
	$apr->send_http_header("text/html");
	my $parser = XML::LibXML->new();
	my $upload = $apr->upload('snippet');
	my $fh = $upload->fh;
	my $file_content = "";
	local $/ = undef;
	my $doc;

	eval {
		$doc = $parser->parse_string(<$fh>);
	};

	if( $@ ) {
		print_page( "not wellformed xml", "<div class='errormessage'><pre>$@</pre><div>" );
	} else {
		open( DTD , "<" . $r->document_root . "/snippet.dtd" ) or return SERVER_ERROR;
		my $dtd = XML::LibXML::Dtd->parse_string(<DTD>);
		close( DTD );
		eval {
			$doc->validate( $dtd )
		};

		if( $@ ) {
			print_page( "not valid" , "<div class='warningmessage'><pre>$@</pre></div>" );
		} else {
			print_page( "wellformed and valid", "<div class='donemessage'>Congraturlation the snippet is valid</div>" );
		}
	}
   }

   return OK;
}

sub print_page {
	my $title = shift;
	my $body  = shift;

	print <<EOT;
<html>
	<head>
	<title>$title</title>
	<style type="text/css">
            \@import "http://api.openoffice.org/branding/css/tigris.css";
            \@import "http://api.openoffice.org/branding/css/inst.css";
            \@import "/css/codesnippet.css";
        </style>
	</head>
	<body>
		$body
	</body>
</html>
EOT
	
}

1;
