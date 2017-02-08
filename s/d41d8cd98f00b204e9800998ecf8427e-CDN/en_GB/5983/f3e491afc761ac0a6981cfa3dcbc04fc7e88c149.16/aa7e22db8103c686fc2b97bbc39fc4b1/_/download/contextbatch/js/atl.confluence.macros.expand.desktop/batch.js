;try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-core', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro-core.js' */
(function(){var a=function(b){this.$=b;this.createToggleFunction=function(e){var d=this.$;return function c(i){if(typeof e!="undefined"&&!e(i)){return}var f=d(this),g=d(".expand-control-icon",f),h=d(".expand-content",f.closest(".expand-container")).first();var j;if(h.hasClass("expand-hidden")){h.css("display","block");h.animate({opacity:1});j="expand"}else{h.animate({opacity:0},{complete:function(){h.hide()}});j="collapse"}h.toggleClass("expand-hidden");g.toggleClass("expanded");AJS.trigger("analyticsEvent",{name:"confluence.expand-macro.expand-click",data:{userAction:j}})}};this.getExpandElements=function(c){return this.$(".expand-control",c)}};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.ExpandMacro={bind:function(b,c,g,f){var e=new a(b);var d=e.getExpandElements(c);d.length&&d.bind(g,e.createToggleFunction(f))}}})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-desktop-resources', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro.js' */
AJS.toInit(function(a){Confluence.Plugins.ExpandMacro.bind(a,a("body"),"click keyup",function(b){return !(b.type=="keyup"&&b.keyCode!=13)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
