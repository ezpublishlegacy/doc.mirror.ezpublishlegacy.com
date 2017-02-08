;try {
/* module-key = 'org.randombits.confluence.toc:toc-plugin-analytics', location = 'net/customware/confluence/plugin/toc/analytics/analytics.js' */
AJS.toInit(function(){AJS.$(".toc-macro a").click(function(){AJS.trigger("analyticsEvent",{name:"confluence.toc-macro.heading-click"})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
