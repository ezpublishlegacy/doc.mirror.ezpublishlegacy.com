try {
/* module-key = 'confluence.macros.advanced:navmap-resources', location = 'com/atlassian/confluence/plugins/macros/advanced/navmap.js' */
jQuery(function(a){a("table.navMapContainer").each(function(){var b=a(this);var d=b.next("fieldset");var c={};d.find("input").each(function(){c[this.name]=this.value});b.find(".navMapCell").each(function(){var e=a(this);e.css("width",c.navmapCellWidth+"px").css("height",c.navmapCellHeight+"px")})})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


