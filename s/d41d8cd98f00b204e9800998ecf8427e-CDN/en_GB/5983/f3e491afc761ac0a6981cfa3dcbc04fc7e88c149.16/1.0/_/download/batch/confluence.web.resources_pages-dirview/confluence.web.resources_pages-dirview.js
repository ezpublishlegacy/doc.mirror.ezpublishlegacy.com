;try {
/* module-key = 'confluence.web.resources:pages-dirview', location = '/includes/js/pages-dirview.js' */
(function(g){var e=function(c){var a="";c.actionErrors&&c.actionErrors.length&&(a=c.actionErrors.join("<br>"),AJS.log("ajax parameters invalid : "+a));g("#resultsDiv").html(a)};AJS.toInit(function(c){var a=c("#tree-div").tree({url:AJS.params.contextPath+"/pages/children.action",initUrl:AJS.params.contextPath+"/pages/children.action?spaceKey="+encodeURIComponent(AJS.Meta.get("space-key"))+"&node=root",parameters:["pageId"],nodeId:"pageId",drop:function(){function c(){if(1==arguments.length&&"#"==arguments[0][0]){var b=
arguments[0].substring(1,7);3==b.length&&(b=b[0]+b[0]+b[1]+b[1]+b[2]+b[2]);this.R=parseInt(b.substring(0,2),16);this.G=parseInt(b.substring(2,4),16);this.B=parseInt(b.substring(4),16)}else if(3==arguments.length)this.R=parseInt(arguments[0],10),this.G=parseInt(arguments[1],10),this.B=parseInt(arguments[2],10);else return!1;this.toString=function(){return"#"+this.R.toString(16)+this.G.toString(16)+this.B.toString(16)}}AJS.animation.add(function(b){var a=new c("#d8e4f1"),d=new c("#fff"),f=a.R,e=d.R-
a.R,h=a.G,g=d.G-a.G,i=a.B,j=d.B-a.B;return{start:0,end:1,animate:function(a){b.style.backgroundColor=new c(f+e*a,h+g*a,i+j*a)},onFinish:function(){b.style.backgroundColor=""}}}(this.source));AJS.animation.duration=500;AJS.animation.start();var a=this.source.pageId,d=this.target.pageId,h=this.position;AJS.trigger("analytics",{name:"confluence.page.hierarchy.reorder",data:{}});AJS.safe.getJSON(AJS.params.contextPath+"/pages/movepage.action",{pageId:a,position:h,targetId:d},e)},order:function(){c.getJSON(AJS.params.contextPath+
"/pages/revertpageorder.action",{pageId:this.source.pageId},e)},orderUndo:function(){var a=this.source.pageId,f=jQuery.map(this.orderedChildren,function(a){return a.pageId}).join();c.getJSON(AJS.params.contextPath+"/pages/setpageorder.action",{pageId:a,orderedChildIds:f},e)},onready:function(){AJS.params.expandedNodes||(AJS.params.expandedNodes=[]);if(AJS.params.openId)var c=function(){a.findNodeBy("pageId",AJS.params.openId).highlight()};for(var f=[],d=0,e=AJS.params.expandedNodes.length;d<e;d++)f[d]=
{pageId:AJS.params.expandedNodes[d]};a.expandPath(f.reverse(),c)}})})})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
