;try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-init', location = 'sh/shInit.js' */
AJS.toInit(function(){try{if(window.SyntaxHighlighter&&window.SyntaxHighlighter.config){var b=(document.getElementById("confluence-context-path").content||"");var c=b+"/s/${project.version}/_/download/resources/${atlassian.plugin.key}:clipboard/clipboard.swf";window.SyntaxHighlighter.config.clipboardSwf=c}window.SyntaxHighlighter.highlight()}catch(a){AJS.log(a)}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-init', location = 'sh/scripts/collapseSource.js' */
AJS.toInit(function(a){function b(d){var c="highlighter_";return d.indexOf(c)==0?d:c+d}a(".codeHeader .collapse-source").click(function(){var g=a(this);var c=g.parent().parent().children(".codeContent");var e=c.children().children(".syntaxhighlighter").attr("id");var d=g.children(".expand-control-icon");var f=document.getElementById(b(e));if(a(f).hasClass("collapsed")){a(f).removeClass("collapsed");a(f).addClass("expanded");c.addClass("show-border-top");a(".expand-control-text",g).text("Collapse source");d.addClass("expanded")}else{if(a(f).hasClass("expanded")){a(f).removeClass("expanded");a(f).addClass("collapsed");c.removeClass("show-border-top");a(".expand-control-text",g).text("Expand source");d.removeClass("expanded")}}})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
