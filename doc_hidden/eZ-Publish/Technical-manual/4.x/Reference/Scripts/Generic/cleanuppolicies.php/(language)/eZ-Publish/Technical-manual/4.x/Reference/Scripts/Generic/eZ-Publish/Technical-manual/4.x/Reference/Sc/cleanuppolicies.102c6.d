<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">


<!-- Mirrored from doc.ez.no/doc_hidden/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/cleanuppolicies.php/(language)/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/cleanuppolicies.php by HTTrack Website Copier/3.x [XR&CO'2013], Tue, 21 Oct 2014 15:15:09 GMT -->
<!-- Added by HTTrack --><meta http-equiv="content-type" content="text/html;charset=utf-8" /><!-- /Added by HTTrack -->
<head>

<link rel="stylesheet" type="text/css" href="https://ez.no/extension/ez_ezno/design/ezno_2011/stylesheets/core.css" /><link rel="stylesheet" type="text/css" href="https://ez.no/extension/ez_ezno/design/ezno_2011/stylesheets/header-footer.css" /><link rel="stylesheet" type="text/css" href="https://ez.no/extension/ez_ezno/design/ezno_2011/stylesheets/header-footer-lookfeel.css" /><link rel="stylesheet" type="text/css" href="https://ez.no/extension/ez_ezno/design/ezno_2011/stylesheets/pagelayout.css" /><link rel="stylesheet" type="text/css" href="https://ez.no/extension/ez_ezno/design/ezno_2011/stylesheets/buttons.css" /><link rel="stylesheet" type="text/css" href="https://ez.no/extension/ez_ezno/design/ezno_2011/stylesheets/960.css" /><link rel="stylesheet" type="text/css" href="https://ez.no/extension/ez_ezno/design/ezno_2011/stylesheets/superfish.css" /><script type="text/javascript" src="https://ez.no/extension/ez_ezno/design/ezno_2011/javascript/jquery-1.6.3.min.js" charset="utf-8"></script><script type="text/javascript" src="https://ez.no/extension/ez_ezno/design/ezno_2011/javascript/superfish.js" charset="utf-8"></script><script type="text/javascript" src="https://ez.no/extension/ez_ezno/design/ezno_2011/javascript/jquery.popmenu.min.js" charset="utf-8"></script>
<style type="text/css">
    @import url(../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/stylesheets/core.css);
    @import url(../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/stylesheets/classes.css);
    @import url(../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/stylesheets/doc.css);
    @import url(../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/stylesheets/print.css) print;</style>

<link type="text/css" rel="stylesheet" href="../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/stylesheets/print.css" media="print" />

<!-- IE conditional comments; for bug fixes for different IE versions -->
<!--[if IE 5]>     <style type="text/css"> @import url(/extension/ezdoc/design/doc/stylesheets/ie5.css);    </style>     <![endif]-->
<!--[if lte IE 6]> <style type="text/css"> @import url(/extension/ezdoc/design/doc/stylesheets/ie6lte.css); </style>     <![endif]-->
<!--[if lte IE 6]> <style type="text/css"> @import url(/extension/ezdoc/design/doc/stylesheets/ie6lte-doc.css); </style> <![endif]-->
<!--[if IE 6]>     <style type="text/css"> @import url(/extension/ezdoc/design/doc/stylesheets/ie6.css);    </style>     <![endif]-->

<!-- Load special stylesheet (if necessary) for newer Netscape decendants, Mozilla and Firefox, using the Gecko renderer -->
<script type="text/javascript"><!-- if ((navigator.userAgent.indexOf("Gecko") != -1)&&(navigator.userAgent.indexOf("KHTML") == -1)) document.write("<style type=\"text/css\">@import url(/extension/ezdoc/design/doc/stylesheets/gecko.css);</style>"); --></script>

<script type="text/javascript" src="../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/javascripts/mainmenu-hover.js"></script>
<script type="text/javascript" src="../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/javascripts/dropdownmenu.js"></script>
<script type="text/javascript" src="../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/javascripts/ezno-searchbox.js"></script>
                                                          
    <title>cleanuppolicies.php / Generic / Scripts / Reference / 4.x / Technical manual / eZ Publish / Documentation - Doc</title>

    
    
    
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

            <meta http-equiv="Content-language" content="en-GB" />

    
                <meta name="author" content="eZ systems" />
                    <meta name="copyright" content="eZ systems" />
                    <meta name="description" content="eZ Publish Documentation" />
                    <meta name="keywords" content="eZ Publish, documentation, manual, reference, eZ systems" />
        
    <meta name="generator" content="eZ Publish" />
    <link rel="Home" href="../../../../../../../../../../../../../../../../../../../../doc_hidden.html" title="Doc front page" />
<link rel="Search" href="../../../../../../../../../../../../../../../../../../../content/advancedsearch.html" title="Search Doc" />
<link rel="Shortcut icon" href="../../../../../../../../../../../../../../../../../../../../extension/ezdoc/design/doc/images/favicon.ico" type="image/x-icon" />

</head>
<body onload="initDocSearch();menuInit();">

<!-- Complete page area: START -->
<div id="page">


	<div id="header-bg">
			<div id="header" class="container_12">
				<div class="grid_12">
					<div class="searchboxes" id="searchbox">
	  <form action="https://ez.no/headerandfooteraccess/content/search">
	    <label for="searchtext" class="hide">Search text:</label>
	    	    <div class="ezautocomplete">
	        <button value="Search" title="Search" type="submit"><span class="w"><span class="l"></span><span class="c">Search</span><span class="r"></span></span></button>
	        <div class="searchtext-wrap"><input class="searchtext" id="searchtext" name="SearchText" type="text" value="Search" size="12" onblur="if(this.value=='') this.value='Search';" onfocus="if(this.value=='Search') this.value='';" /></div>
	        <div class="ezautocompletecontainer"></div>
	    </div>
	    
	    	  </form>
	</div>

                <div id="header-social-connect">
    <a href="http://www.youtube.com/user/ezpublish/" class="youtube" target="_blank">youtube</a>
    <a href="https://google.com/+ezsystems" class="googleplus" target="_blank">google plus</a>
    <a href="http://www.linkedin.com/groups?gid=2759&amp;trk=myg_ugrp_ovr" class="linkedin" target="_blank">linkedin</a>
    <a href="https://www.facebook.com/eZPublishEnterprise" class="facebook" target="_blank">facebook</a>
    <a href="http://twitter.com/#!/ezsystems" class="twitter" target="_blank">twitter</a>
</div>
				<div id="links">
		
							
					<ul class="clearfix">
																					<li class="nid-2384 first ">
						<a href="https://ez.no/headerandfooteraccess/Partner-Portal">Partner Portal<span></span></a></li>
																										<li class="nid-1859 ">
						<a href="https://ez.no/headerandfooteraccess/Customer-Log-In">Customer Log In<span></span></a></li>
																										<li class="nid-1831 ">
						<a href="https://ez.no/headerandfooteraccess/Community">Community<span></span></a></li>
																										<li class="nid-1944 last ">
						<a href="https://ez.no/headerandfooteraccess/Blog">Blog<span></span></a></li>
												</ul>
		
		</div>                <div id="languages" class="popmenu">	<div class="eng"><a href="#">English&nbsp;<span></span></a></div></div>

				<p class="hide"><a href="#main">Skip to main content</a></p>
				</div>
			</div>

			
	</div>

    <div class="topmenu-anchor"></div>
    <div id="topmenu-bg">
	    <div id="logo" class="container_12">

    <div class="grid_3">
        <a href="https://ez.no/headerandfooteraccess" title="eZ Publish Platform, CXM &amp; CMS">
            <img src="https://ez.no/extension/ez_ezno/design/ezno_2011/images/ez-logo.png"
                 alt="eZ Publish®"/>
        </a>
    </div>

    <div class="grid_9">
                <div class="topmenu-design">
	<!-- Top menu content: START -->
	<div id="topmenu-firstlevel-position">
	<ul id="topmenu-firstlevel" class="sf-menu sf-js-enabled sf-shadow">
		
																																																														
																																										

                                	                																					                                    <li id="node_id_1795" class="li-first-level firstli">
                    	<a href="https://ez.no/headerandfooteraccess/Products/The-eZ-Publish-Platform" class="menu-item-link">
                    		<span>Products</span>
                    	</a>
													<ul>
								<li class="dropmenu-ul-top"></li>
																	<li id="node_id_21578" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/The-eZ-Publish-Platform" class="a-second-level">The eZ Publish Platform</a>
																			</li>
																	<li id="node_id_19870" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/Content-Management" class="a-second-level">Content Management </a>
																			</li>
																	<li id="node_id_15645" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/Digital-Marketing" class="a-second-level has-more">Digital Marketing</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_15685" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/Digital-Marketing/Marketing-Automation" class="a-third-level">
															Marketing Automation
														</a>
													</li>
																									<li id="node_id_15686" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/Digital-Marketing/Smart-Analytics" class="a-third-level">
															Smart Analytics
														</a>
													</li>
																									<li id="node_id_15689" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/Digital-Marketing/Personalization-Recommendation" class="a-third-level">
															Personalization &amp; Recommendation
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																	<li id="node_id_19872" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/e-Commerce" class="a-second-level">e-Commerce</a>
																			</li>
																	<li id="node_id_14954" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/Compare-Versions" class="a-second-level">Compare Versions</a>
																			</li>
																	<li id="node_id_1800" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/Demos-Videos" class="a-second-level">Demos &amp; Videos</a>
																			</li>
																	<li id="node_id_20778" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/Knowledge-Base" class="a-second-level has-more">Knowledge Base</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_19570" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/Knowledge-Base/eZ-Publish-Platform-5.3" class="a-third-level">
															eZ Publish Platform 5.3
														</a>
													</li>
																									<li id="node_id_11694" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/Knowledge-Base/eZ-Live-Viewer" class="a-third-level">
															eZ Live Viewer
														</a>
													</li>
																									<li id="node_id_11693" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/Knowledge-Base/eZ-Recommendation-Service" class="a-third-level">
															eZ Recommendation Service
														</a>
													</li>
																									<li id="node_id_13246" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/Knowledge-Base/eZ-Marketing-Automation" class="a-third-level">
															eZ Marketing Automation
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																	<li id="node_id_1846" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/eZ-Market" class="a-second-level has-more">eZ Market</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_1848" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/eZ-Market/Explore-the-eZ-Market" class="a-third-level">
															Explore the eZ Market
														</a>
													</li>
																									<li id="node_id_1851" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/eZ-Market/How-to-Sell-on-eZ-Market" class="a-third-level">
															How to Sell on eZ Market
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																	<li id="node_id_20872" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Products/About-our-Software" class="a-second-level has-more">About our Software</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_20875" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/About-our-Software/Documentation" class="a-third-level">
															Documentation
														</a>
													</li>
																									<li id="node_id_20876" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/About-our-Software/Requirements" class="a-third-level">
															Requirements
														</a>
													</li>
																									<li id="node_id_20877" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/About-our-Software/Roadmap-and-lifecycle" class="a-third-level">
															Roadmap and lifecycle
														</a>
													</li>
																									<li id="node_id_20878" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/About-our-Software/Licenses" class="a-third-level">
															Licenses
														</a>
													</li>
																									<li id="node_id_20874" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Products/About-our-Software/SLA" class="a-third-level">
															sla
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																<li class="dropmenu-ul-bottom"></li>
							</ul>
						                   	</li>
                   	                                            																									

                                	                																					                                    <li id="node_id_2264" class="li-first-level ">
                    	<a href="https://ez.no/headerandfooteraccess/Services/Overview" class="menu-item-link">
                    		<span>Services</span>
                    	</a>
													<ul>
								<li class="dropmenu-ul-top"></li>
																	<li id="node_id_1816" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Services/Overview" class="a-second-level">Overview</a>
																			</li>
																	<li id="node_id_2570" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Services/Support-Maintenance" class="a-second-level">Support &amp; Maintenance</a>
																			</li>
																	<li id="node_id_1819" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Services/Consulting" class="a-second-level">Consulting</a>
																			</li>
																	<li id="node_id_15863" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Services/Trainings" class="a-second-level has-more">Trainings</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_15864" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Services/Trainings/Training-Calendar" class="a-third-level">
															Training Calendar
														</a>
													</li>
																									<li id="node_id_15870" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Services/Trainings/Courses" class="a-third-level">
															Courses
														</a>
													</li>
																									<li id="node_id_15875" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Services/Trainings/Certification" class="a-third-level">
															Certification
														</a>
													</li>
																									<li id="node_id_16248" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Services/Trainings/Developer-Knowledge-Path" class="a-third-level">
															Developer Knowledge Path
														</a>
													</li>
																									<li id="node_id_16252" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Services/Trainings/Onsite-Trainings" class="a-third-level">
															Onsite Trainings
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																<li class="dropmenu-ul-bottom"></li>
							</ul>
						                   	</li>
                   	                                            																									

                                	                																					                                    <li id="node_id_1824" class="li-first-level ">
                    	<a href="https://ez.no/headerandfooteraccess/Customers/Success-Stories" class="menu-item-link">
                    		<span>Customers</span>
                    	</a>
													<ul>
								<li class="dropmenu-ul-top"></li>
																	<li id="node_id_1863" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies" class="a-second-level has-more">Case Studies</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_20669" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Sound-Harley-Davidson-Hitting-the-Road-with-the-eZ-Publish-Platform" class="a-third-level">
															Sound Harley-Davidson - Hitting the Road with the eZ Publish Platform
														</a>
													</li>
																									<li id="node_id_18787" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/49th-Shelf-Canada-s-Online-Resource-Center-for-Books" class="a-third-level">
															49th Shelf - Canada's Online Resource Center for Books
														</a>
													</li>
																									<li id="node_id_17303" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/CASDEN-Groupe-Banque-Populaire" class="a-third-level">
															CASDEN, Groupe Banque Populaire
														</a>
													</li>
																									<li id="node_id_16193" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Orange-UA-Jeux-and-Transmedia" class="a-third-level">
															Orange - UA Jeux and Transmédia
														</a>
													</li>
																									<li id="node_id_15317" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/CSMonitor-Digital-First-Strategy-with-eZ-Publish" class="a-third-level">
															CSMonitor - Digital-First Strategy with eZ Publish
														</a>
													</li>
																									<li id="node_id_15216" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Bauknecht-KitchenAid-and-Whirlpool-Web-Sites" class="a-third-level">
															Bauknecht, KitchenAid and Whirlpool Web Sites
														</a>
													</li>
																									<li id="node_id_13911" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/CEVA" class="a-third-level">
															CEVA
														</a>
													</li>
																									<li id="node_id_12027" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Grazia.fr" class="a-third-level">
															Grazia.fr
														</a>
													</li>
																									<li id="node_id_8661" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Sparda-Bank-West" class="a-third-level">
															Sparda-Bank West
														</a>
													</li>
																									<li id="node_id_8141" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Christian-Science-Monitor-recreates-itself-for-digital-era" class="a-third-level">
															Christian Science Monitor recreates itself for digital era  
														</a>
													</li>
																									<li id="node_id_8108" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Rechtsportal-powered-by-Deubner-a-WEKA-Group-company" class="a-third-level">
															Rechtsportal, powered by Deubner, a WEKA Group company
														</a>
													</li>
																									<li id="node_id_7948" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/tagesschau.sf.tv" class="a-third-level">
															tagesschau.sf.tv
														</a>
													</li>
																									<li id="node_id_7641" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Nouvelle-Republique-Centre-Ouest" class="a-third-level">
															Nouvelle République Centre-Ouest
														</a>
													</li>
																									<li id="node_id_7638" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/EMI-France" class="a-third-level">
															EMI France
														</a>
													</li>
																									<li id="node_id_6930" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Discover21-online-bookstore-in-Japan-uses-eZ-Publish" class="a-third-level">
															Discover21 online bookstore in Japan uses eZ Publish
														</a>
													</li>
																									<li id="node_id_6824" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/William-Reed-Business-Media" class="a-third-level">
															William Reed Business Media
														</a>
													</li>
																									<li id="node_id_6546" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/Phantasialand-relaunch-rich-media-multilingual-highly-available-and-search-engine-optimized" class="a-third-level">
															Phantasialand relaunch – rich media, multilingual, highly available and search engine optimized
														</a>
													</li>
																									<li id="node_id_6543" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/Case-Studies/New-online-customer-area-for-Tyczka-Totalgaz" class="a-third-level">
															New online customer area for Tyczka Totalgaz
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																	<li id="node_id_2271" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Customers/Success-Stories" class="a-second-level">Success Stories</a>
																			</li>
																	<li id="node_id_1825" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry" class="a-second-level has-more">By Industry</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_19860" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry/All-Industries" class="a-third-level">
															All Industries
														</a>
													</li>
																									<li id="node_id_10207" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry/Retail-and-Consumer" class="a-third-level">
															Retail and Consumer
														</a>
													</li>
																									<li id="node_id_2501" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry/Telecommunications" class="a-third-level">
															Telecommunications
														</a>
													</li>
																									<li id="node_id_2500" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry/Governmental-Non-Profit-Education" class="a-third-level">
															Governmental, Non-Profit &amp; Education
														</a>
													</li>
																									<li id="node_id_2499" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry/Finance" class="a-third-level">
															Finance
														</a>
													</li>
																									<li id="node_id_2498" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry/Service-Industry" class="a-third-level">
															Service Industry
														</a>
													</li>
																									<li id="node_id_2497" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/Customers/By-Industry/Media-Entertainment" class="a-third-level">
															Media &amp; Entertainment
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																<li class="dropmenu-ul-bottom"></li>
							</ul>
						                   	</li>
                   	                                            																									

                                	                																					                                    <li id="node_id_1832" class="li-first-level ">
                    	<a href="https://ez.no/headerandfooteraccess/Partners/Success-with-eZ" class="menu-item-link">
                    		<span>Partners</span>
                    	</a>
													<ul>
								<li class="dropmenu-ul-top"></li>
																	<li id="node_id_2272" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Partners/Success-with-eZ" class="a-second-level">Success with eZ </a>
																			</li>
																	<li id="node_id_1833" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Partners/Become-a-Partner" class="a-second-level">Become a Partner</a>
																			</li>
																	<li id="node_id_2035" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/Partners/Find-a-Partner" class="a-second-level">Find a Partner</a>
																			</li>
																<li class="dropmenu-ul-bottom"></li>
							</ul>
						                   	</li>
                   	                                            																																		

                                	                																					                                    <li id="node_id_1836" class="li-first-level lastli">
                    	<a href="https://ez.no/headerandfooteraccess/About-eZ/Company-Overview" class="menu-item-link">
                    		<span>About eZ</span>
                    	</a>
													<ul>
								<li class="dropmenu-ul-top"></li>
																	<li id="node_id_2273" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/About-eZ/Company-Overview" class="a-second-level">Company Overview </a>
																			</li>
																	<li id="node_id_20956" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers" class="a-second-level has-more">Careers</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_21234" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Financial-Accountant-Norway" class="a-third-level">
															Financial Accountant - Norway
														</a>
													</li>
																									<li id="node_id_21134" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Professional-Services-Consultant-Norway" class="a-third-level">
															Professional Services Consultant - Norway
														</a>
													</li>
																									<li id="node_id_21133" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Professional-Services-Consultant-France" class="a-third-level">
															Professional Services Consultant - France
														</a>
													</li>
																									<li id="node_id_20998" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Junior-Marketing-Manager-Cologne" class="a-third-level">
															Junior Marketing Manager - Cologne
														</a>
													</li>
																									<li id="node_id_20957" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Graphic-Designer" class="a-third-level">
															Graphic Designer
														</a>
													</li>
																									<li id="node_id_20958" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/User-Interface-Designer" class="a-third-level">
															User Interface Designer 
														</a>
													</li>
																									<li id="node_id_20960" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Product-Manager-Dev-Ex" class="a-third-level">
															Product Manager Dev Ex
														</a>
													</li>
																									<li id="node_id_20959" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Product-Manager-Web-UX" class="a-third-level">
															Product Manager Web  UX
														</a>
													</li>
																									<li id="node_id_20961" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Junior-UI-Developer-Poland" class="a-third-level">
															Junior UI Developer - Poland
														</a>
													</li>
																									<li id="node_id_20962" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Careers/Senior-UI-Developer-Poland" class="a-third-level">
															Senior UI Developer - Poland
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																	<li id="node_id_1839" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/About-eZ/Events-News" class="a-second-level has-more">Events &amp; News</a>
																					<ul>
												<li class="dropmenu-ul-subarrow"></li>
												<li class="dropmenu-ul-top"></li>
																									<li id="node_id_1841" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Events-News/News" class="a-third-level">
															News
														</a>
													</li>
																									<li id="node_id_1844" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Events-News/Events" class="a-third-level">
															Events
														</a>
													</li>
																									<li id="node_id_1845" class="li-third-level">
														<a href="https://ez.no/headerandfooteraccess/About-eZ/Events-News/Upcoming-Webinars" class="a-third-level">
															Upcoming Webinars
														</a>
													</li>
																								<li class="dropmenu-ul-bottom"></li>
											</ul>
																			</li>
																	<li id="node_id_1838" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/About-eZ/eZ-Management" class="a-second-level">eZ Management</a>
																			</li>
																	<li id="node_id_1840" class="li-second-level">
																																									<a href="https://ez.no/headerandfooteraccess/About-eZ/Contact-Us" class="a-second-level">Contact Us</a>
																			</li>
																<li class="dropmenu-ul-bottom"></li>
							</ul>
						                   	</li>
                   	                                                            </ul>
    </div>
        <!-- Top menu content: END -->
</div>        </div>
</div>    </div>


<div id="page-content-position"><div id="page-content-position-inner"><div id="page-content">

<!-- Path area: START -->
<div id="path">

<div id="page-width4">
<h2 class="hide">Path</h2>

<!-- Path content: START -->
<p> <a href="http://ez.no/">ez.no</a> /
                        <a href="../../../../../../../../../../../../../../../../../../../../doc_hidden.html">documentation</a>
        
                        /
                            <a href="../../../../../../../../../../../../../../../../../../../eZ-Publish.html">ez publish</a>
        
                        /
                            <a href="../../../../../../../../../../../../../../../../../../Technical-manual.html">technical manual</a>
        
                        /
                            <a href="../../../../../../../../../../../../../../../../../4-6.html">4.x</a>
        
                        /
                            <a href="../../../../../../../../../../../../../../../../Reference.html">reference</a>
        
                        /
                            <a href="../../../../../../../../../../../../../../../Scripts.html">scripts</a>
        
                        /
                            <a href="../../../../../../../../../../../../../../Generic.html">generic</a>
        
                        /
                            cleanuppolicies.php
        
            </p>
<!-- Path content: END -->

</div>

</div>
<!-- Path area: END -->

<hr class="hide" />

<!-- Main area: START -->
<div id="ezp5disclaimer">
<p><strong style="color: red">Caution:</strong> This documentation is for <strong>eZ Publish</strong> <em>legacy</em>, from version 3.x to 5.x.<br/>
For 5.x documentation covering <em>Platform</em> see <a href="../../../../../../../../../../../../../../../../../../../../display/MAIN/eZ%2bDocumentation%2bCenter.html">eZ Documentation Center</a>, for difference between <em>legacy</em> and <em>Platform</em> see <a href="../../../../../../../../../../../../../../../../../../../../pages/viewpage0139.html?pageId=11403666">5.x Architecture overview</a>.</p>
</div>

<div id="page-width5">
<div id="main" class="float-break">


<div class="template-design area-docmenu-normal">
<div class="template-module">
<div class="template-object">
<div id="contentmenu">
                        <div class="attribute-heading"><h2 class="bullet"><a href="../../../../../../../../../../../../../../../../../4-6.html">Table of contents</a></h2></div>
<div class="boxcontent">

<map id="contentstructure">

    
    
</map>

</div>            
</div>
</div>
</div>
</div>
<div class="area-docmain-normal">
<div class="template-design">
<div class="template-module content-view-full">
<div class="template-object">

<div class="attribute-heading">
<h1></h1>
</div>

<h3>Summary</h3>


<h3>Location</h3>    /<h3>Parameters</h3><p>
<a href=#allow-root-user>allow-root-user</a><br/>

<a href=#colors>colors</a><br/>

<a href=#debug>debug</a><br/>

<a href=#dry-run>dry-run</a><br/>

<a href=#help>help</a><br/>

<a href=#logfiles>logfiles</a><br/>

<a href=#no-colors>no-colors</a><br/>

<a href=#quiet>quiet</a><br/>

<a href=#siteaccess>siteaccess</a><br/>

<a href=#verbose>verbose</a><br/>
</p>

    <a name="allow-root-user"></a>
    <h4>-r,--allow-root-user</h3>
    <div style="margin-left:35px;">
        
<p>Allows your root user to run the ezcache.php script. The usage of this parameter is only recommended for advanced users. With great power comes great responsibility.</p>    </div>

    <a name="colors"></a>
    <h4>-c,--colors</h3>
    <div style="margin-left:35px;">
        
<p>Display output using ANSI colors (default)</p><p>Use <a href="../../../../../../../../../../../../no-colors.html" target="_self">--no-colors</a> to not use ANSI coloring.</p>    </div>

    <a name="debug"></a>
    <h4>-d[&lt;option&gt;[,&lt;option2&gt;...]], --debug[=&lt;option&gt;[,&lt;option2&gt;...]]</h3>
    <div style="margin-left:35px;">
        
<p>Output debug information. The following options can be used to control what the debug output should include: &quot;all&quot; (everything), &quot;accumulator&quot; (accumulators), &quot;include&quot; (included files), &quot;timing&quot; (timing points), &quot;error&quot; (errors), &quot;warning&quot; (warnings), &quot;notice&quot; (notices).</p>    </div>

    <a name="dry-run"></a>
    <h4>--dry-run</h3>
    <div style="margin-left:35px;">
        
<p>Test mode, output the list of affected policies without removing them</p>    </div>

    <a name="help"></a>
    <h4>-h,--help</h3>
    <div style="margin-left:35px;">
        
<p>Display help and exit.</p>    </div>

    <a name="logfiles"></a>
    <h4>--logfiles</h3>
    <div style="margin-left:35px;">
        
<p>Generate log files. This parameter must be used together with the debug parameter (&quot;-d&quot; or &quot;--debug&quot;). The log files (for example &quot;warning.log&quot;) will be stored in the &quot;var/log&quot; directory of the eZ Publish installation.</p>    </div>

    <a name="no-colors"></a>
    <h4>--no-colors</h3>
    <div style="margin-left:35px;">
        
<p>Do not use ANSI colors when generating debug output.</p>    </div>

    <a name="quiet"></a>
    <h4>-q,--quiet</h3>
    <div style="margin-left:35px;">
        
<p>Do not give any output except when errors occur.</p>    </div>

    <a name="siteaccess"></a>
    <h4>-s,--siteaccess</h3>
    <div style="margin-left:35px;">
        
<p>Selected siteaccess for operations, if not specified default siteaccess is used.</p>    </div>

    <a name="verbose"></a>
    <h4>-v, --verbose</h3>
    <div style="margin-left:35px;">
        
<p>Output verbose / additional information.</p>    </div>




<div class="break"></div><div class="pageinfo float-break">
<div class="created">


<p><label>Written by:</label>Sarah Haïm-Lubczanski&nbsp;(19/05/2014 3:27 pm)</p>
</div>
<div class="modified">
<p><label>Last updated by:</label>Sarah Haïm-Lubczanski&nbsp;(20/05/2014 2:03 pm)</p>
</div></div>
<hr class="hide" />

</div>
</div>
</div>

<div id="comments" class="class-comment">
<div class="content-view-children">

<h1>Comments</h1>
<p>There are no comments.</p>
<div class="toolbar">

<form method="post" action="https://doc.ez.no/doc_hidden/content/action">
<input class="button" type="submit" name="NewButton" value="New comment" />
<input type="hidden" name="NodeID" value="29229" />
<input type="hidden" name="RedirectURIAfterPublish" value="cleanuppolicies.10c66.d" />
<input type="hidden" name="ClassID" value="17" />
</form>
</div>

</div>
</div>

</div>
<!-- Main area content: END -->

</div>
</div>
<!-- Main area: END -->
<hr class="hide" />

</div></div></div>

        <div id="footer-bg">
        <div id="footer" class="container_12">

            <div class="grid_3">
                <img src="https://ez.no/extension/ez_ezno/design/ezno_2011/images/ez-logo-white.png" alt="ez-publish" />
                <div id="footer-copyright" class="grid_3 alpha omega">
                    
<p>eZ Systems has been providing Web Content Management Solutions since 1999. With a global presence in Europe, Asia and the Americas, we are the power platform driving more than 250,000 sites in over 170 countries.</p>                </div>
            </div>

            <div class="grid_6 middle">
                <div class="grid_6 alpha omega">
                    <div class="grid_3 alpha"><div>
<a name="eztoc411316_0_0_0_1" id="eztoc411316_0_0_0_1"></a><h5>PRODUCTS</h5>
<ul>

<li><a href="https://ez.no/headerandfooteraccess" target="_self">eZ Publish 5&nbsp;Platform</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Products/Compare-Versions" target="_self">Compare Versions</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Products/Demos-Videos" target="_self">Demos &amp; Videos</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Products/eZ-Market" target="_self">eZ Market</a></li>

</ul>
<a name="eztoc411316_0_0_0_2" id="eztoc411316_0_0_0_2"></a><h5>eZ DELIVERS RESULTS</h5>
<ul>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-Delivers-Results/Monetize-Your-Content" target="_self">Monetize Your Content</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-Delivers-Results/Digitize-Your-Business" target="_self">Digitalize Your Business</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-Delivers-Results/Deliver-a-Better-Brand-Experience" target="_self">Deliver a Better Brand Experience</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-Delivers-Results/Engage-With-Customers" target="_self">Engage With Customer</a></li>

</ul>
</div></div>
                    <div class="grid_3 omega"><div>
<a name="eztoc411317_0_0_0_1" id="eztoc411317_0_0_0_1"></a><h5>eZ FOR YOU</h5>
<ul>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-For-You/For-Executives" target="_self">For Executives</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-For-You/For-Online-Digital-Strategists" target="_self">For Online Digital Strategists</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-For-You/For-Marketing-Professionals" target="_self">For Marketing Professionals</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Solutions/eZ-For-You/For-Business-Systems-Managers" target="_self">For Business Systems Managers</a></li>

<li><a href="https://ez.no/headerandfooteraccess" title="eZ Publish Documentation" target="_self">For Developers</a></li>

</ul>
<a name="eztoc411317_0_0_0_2" id="eztoc411317_0_0_0_2"></a><h5>GET STARTED NOW</h5>
<ul>

<li><a href="https://ez.no/headerandfooteraccess/Products/Demos-Videos" target="_self">See a Demo</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Forms/HTML-forms/Contact-eZ" target="_self">Ask a Question</a></li>

<li><a href="https://ez.no/headerandfooteraccess/Forms/HTML-forms/Contact-Support" target="_self">Contact Support</a></li>

</ul>
</div></div>
                </div>
            </div>

            <div class="grid_3 right">
                <div class="contact-ez">
                        <a id="cta-contact" href="https://ez.no/headerandfooteraccess/Forms/HTML-forms/Contact-eZ/(origin)/footer" title="Contact eZ!" class="btn-green btn--small">Contact eZ!</a>
                </div>

                <div class="adress">
<a name="eztoc411321_0_0_0_1" id="eztoc411321_0_0_0_1"></a><h5>LOCATIONS:</h5><p><a href="https://ez.no/headerandfooteraccess/About-eZ/Contact-Us" target="_self">Cologne, London </a></p><p><a href="https://ez.no/headerandfooteraccess/About-eZ/Contact-Us" id="__mce_tmp" target="_self">Lyon, New York</a></p><p><a href="https://ez.no/headerandfooteraccess/About-eZ/Contact-Us" id="__mce_tmp" target="_self">Oslo, Paris</a></p><p><a href="https://ez.no/headerandfooteraccess/About-eZ/Contact-Us" id="__mce_tmp" target="_self">Skien, Tokyo</a></p></div>
            </div>

        </div>
    </div>
<div id="footer-connect-bg">
    <div id="footer" class="container_12">
        <div id="footer-connect-copyright" class="grid_8 alpha omega">
            Copyright © 2013 eZ Systems AS (except where otherwise noted). All rights reserved.
            

<div class="">    <a href="https://ez.no/headerandfooteraccess/Privacy-policy">Privacy policy</a></div><br/><br/>
            Powered by <a href="http://ez.no/ezpublish" title="eZ Publish Platform">the eZ Publish Platform</a>.<br />
        </div>

        <div id="footer-connect-social" class="grid_4 right">
            <a href="http://www.youtube.com/user/ezpublish/" class="youtube" target="_blank">youtube</a>
            <a href="https://google.com/+ezsystems" class="googleplus" target="_blank">google plus</a>
            <a href="http://www.linkedin.com/groups?gid=2759&amp;trk=myg_ugrp_ovr" class="linkedin" target="_blank">linkedin</a>
            <a href="https://www.facebook.com/eZPublishEnterprise" class="facebook" target="_blank">facebook</a>
            <a href="http://twitter.com/#!/ezsystems" class="twitter" target="_blank">twitter</a>
        </div>


    </div>
</div>


</div>
<!-- Complete page area: END -->



<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','http://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-303624-13', 'auto');
  ga('send', 'pageview');

</script>




<script type="text/javascript">
(function()
{var ff=document.createElement('script');ff.type='text/javascript';ff.async=true;ff.src='https://secure.liveviewer.ez.no/statjs/sst-120-1304513615/stat.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ff,s);}
)();
</script>


</body>

<!-- Mirrored from doc.ez.no/doc_hidden/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/cleanuppolicies.php/(language)/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/eZ-Publish/Technical-manual/4.x/Reference/Scripts/Generic/cleanuppolicies.php by HTTrack Website Copier/3.x [XR&CO'2013], Tue, 21 Oct 2014 15:15:09 GMT -->
</html>

<!-- th[eZ] 20050804 -->
