;try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/js/client-side-toc.js' */
require(["ajs"],function(a){a.toInit(function(f){function b(n){var m=f({});m.data("precedenceLevel",n);return m}function g(m){return f(m).data("precedenceLevel")}function i(n,m){f(n).data("precedenceLevel",m);return n}function h(n,m){return m===g(n)}function d(s,m,o){if(s.length===0){return f()}var n=s.map(g).reduce(function(u,t){return Math.min(u,t)});if(!h(s[0],n)){s.unshift(b(n))}var q=m.createTocLevelContainer();var r={subElements:[],currentItem:undefined,outline:undefined,flush:function(){if(this.subElements.length>0&&this.currentItem){d(this.subElements,m,this.outline).appendTo(this.currentItem);this.subElements=[]}},add:function(t){this.subElements.push(t)},resetItem:function(t){this.outline=(o||[]).slice(0);this.outline.push(t);this.currentItem=m.createTocItemContainer();this.currentItem.appendTo(q);return this.currentItem}};var p=0;s.forEach(function(t){if(h(t,n)){p++;r.flush();r.resetItem(p);if(t.textContent){c(t,r.outline.join(".")).appendTo(r.currentItem)}else{r.currentItem.addClass("toc-empty-item")}}else{r.add(t)}});r.flush();if(o.length===0&&m.decorateToc){m.decorateToc(q)}return q}function c(m,n){return f(Confluence.Plugins.TableOfContents.Client.tocItemBody({outline:n,linkHref:"#"+m.id,linkText:m.textContent}))}function l(m){return{createTocLevelContainer:function(){return this.createTocItemContainer()},createTocItemContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer({cssClass:"toc-item-container"}))},decorateToc:function(o){function n(r,p){var s=r in m?m[r]:p;if(s){var q=f(Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator({separator:s}));q.appendTo(o)}}n("preseparator","[ ");f(o).find("span.toc-item-body").each(function(p,q){if(p>0){n("midseparator"," ] [ ")}f(q).appendTo(o)});n("postseparator"," ]");f(o).find(".toc-item-container").remove()}}}function e(m){return{createTocLevelContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer({cssliststyle:m.cssliststyle,csslistindent:m.csslistindent}))},createTocItemContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer())}}}function j(m){var o;if(m.includeheaderregex){o=new RegExp(m.includeheaderregex)}var n;if(m.excludeheaderregex){n=new RegExp(m.excludeheaderregex)}return function(){var p=f(this).text();if(o&&!o.test(p)){return false}if(n&&n.test(p)){return false}return true}}function k(o,q){var m=q.headerelements;var r=m.split(",");var p=j(q);var n=f("#main-content").find(m).filter(p).each(function(){i(this,r.indexOf(this.nodeName))}).toArray();return d(n,o,[])}f(".client-side-toc-macro").each(function(){var o=f(this);var n=o.data()||{};var m;if(n.structure==="flat"){m=l(n)}else{m=e(n)}if(n.numberedoutline!==true){o.addClass("hidden-outline")}o.html(k(m,n))})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/templates/client.soy' */
// This file was automatically generated from client.soy.
// Please don't edit this file by hand.

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Plugins == 'undefined') { Confluence.Plugins = {}; }
if (typeof Confluence.Plugins.TableOfContents == 'undefined') { Confluence.Plugins.TableOfContents = {}; }
if (typeof Confluence.Plugins.TableOfContents.Client == 'undefined') { Confluence.Plugins.TableOfContents.Client = {}; }


Confluence.Plugins.TableOfContents.Client.tocItemBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="toc-item-body" data-outline="', soy.$$escapeHtml(opt_data.outline), '"><span class="toc-outline">', soy.$$escapeHtml(opt_data.outline), '</span><a href="', soy.$$escapeHtml(opt_data.linkHref), '" class="toc-link">', soy.$$escapeHtml(opt_data.linkText), '</a></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul style="', (opt_data.cssliststyle) ? ' list-style: ' + soy.$$escapeHtml(opt_data.cssliststyle) + ';' : '', (opt_data.csslistindent) ? ' padding-left: ' + soy.$$escapeHtml(opt_data.csslistindent) + ';' : '', '"></ul>');
  return opt_sb ? '' : output.toString();
};


Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li></li>');
  return opt_sb ? '' : output.toString();
};


Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="', soy.$$escapeHtml(opt_data.cssClass), '"></span>');
  return opt_sb ? '' : output.toString();
};


Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="toc-separator">', soy.$$escapeHtml(opt_data.separator), '</span>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
