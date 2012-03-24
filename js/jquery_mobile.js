// Load this file before jquery mobile
$( window.document ).bind( "mobileinit", function() {
  // Make your jQuery Mobile framework configuration changes here!
  
  // Allow cross domain ajax
  $.support.cors = true;
  $.mobile.allowCrossDomainPages = true;
  
  // Navigation
	//$.mobile.page.prototype.options.backBtnText = "Go back";
	//$.mobile.page.prototype.options.addBackBtn      = true;
	//$.mobile.page.prototype.options.backBtnTheme    = "d";
	
	// Page
	//$.mobile.page.prototype.options.headerTheme = "a";  // Page header only
	//$.mobile.page.prototype.options.contentTheme    = "c";
	//$.mobile.page.prototype.options.footerTheme = "a";
	
	// Listviews
	//$.mobile.listview.prototype.options.headerTheme = "a";  // Header for nested lists
	//$.mobile.listview.prototype.options.theme           = "c";  // List items / content
	//$.mobile.listview.prototype.options.dividerTheme    = "d";  // List divider
	//$.mobile.listview.prototype.options.splitTheme   = "c";
	//$.mobile.listview.prototype.options.countTheme   = "c";
	//$.mobile.listview.prototype.options.filterTheme = "c";
	//$.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";
	
	//$.mobile.dialog.prototype.options.theme
	//$.mobile.selectmenu.prototype.options.menuPageTheme
	//$.mobile.selectmenu.prototype.options.overlayTheme
	
});
