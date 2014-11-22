/* Part of the Riggr SPA framework <https://github.com/Fluidbyte/Riggr> and released under the MIT license. This notice must remain intact. */
<<<<<<< HEAD
!function(a,b){"function"==typeof define&&define.amd?define(["router","observer","knockout","jquery"],b):"object"==typeof exports?module.exports=b(require("router"),require("observer"),require("knockout"),require("jquery")):a.riggr=b(a.router,a.observer,a.ko,a.$)}(this,function(a,b,c){var d=0,e=0,f=!1,g=0,h=[],i={controllers:"controllers",views:"views",libs:"libs"},j="appContainer",k="viewContainer",l=!1,m=function(a){f&&a&&(document.title=a+" | "+f),f&&!a&&(document.title=f),!f&&a&&(document.title=a)},n=function(a,b){var c,d=0,e=function(e){require([i.libs+"/"+a.libs[e]],function(f){a.libs[e]=f,d++,d===c&&b()})};if(a.hasOwnProperty("libs")){c=Object.keys(a.libs).length;for(var f in a.libs)e(f)}else b()},o=function(a,d,e,f){var h=document.getElementById(k);$(h).fadeOut(g,function(){$(h).html(a),c.cleanNode(h),c.applyBindings(d,h),$(this).fadeIn(g),f&&d.load.apply(d,e),b.publish("onRoute")}),m(d.hasOwnProperty("pageTitle")?d.pageTitle:!1)},p=function(a){if(!a)return void console.error("Method register requires argument one to be controller scope");if(a.observables){var b=a.observables;for(var d in b)if(a[d]&&"[object Function]"===Object.prototype.toString.call(a[d])){if(b[d].hasOwnProperty("reset")&&b[d].reset===!1)continue;if("[object Object]"!==Object.prototype.toString.call(b[d]))a[d]=b[d].value;else{var e="array"!==b[d].type||b[d].value?b[d].value:[];a[d](e)}}else a[d]=b[d]&&"array"===b[d].type?c.observableArray(b[d].value):null===b[d]||"[object Object]"!==Object.prototype.toString.call(b[d])?b[d]:c.observable(b[d].value)}},q=function(b,c){require([i.controllers+"/"+c],function(f){f.init&&"[object Function]"==={}.toString.call(f.init)&&!f.hasInit&&(f.init(),f.hasInit=!0),h.push(f);var g={};l&&(g.beforeAppRoute=l),f.hasOwnProperty("before")&&(g.before=function(){var a=arguments;p(f),f.before.apply(f,a)}),g.load=f.hasOwnProperty("load")?function(){var a=arguments;require(["text!"+i.views+"/"+c+".html"],function(b){o(b,f,a,!0)})}:function(){require(["text!"+i.views+"/"+c+".html"],function(a){o(a,f,[],!1)})},f.hasOwnProperty("unload")&&(g.unload=f.unload.bind(f)),n(f,function(){a.on(b,g),e++,d===e&&r()})})},r=function(){require([i.controllers+"/app","text!"+i.views+"/app.html"],function(d,e){$("#"+j).html(e),c.applyBindings(d),b.subscribe("onRoute",function(){d.hasOwnProperty("onRoute")&&d.onRoute.apply(d)}),d.hasOwnProperty("load")&&d.load.apply(d),a.process()})},s=function(a){Object.size=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c},a.hasOwnProperty("paths")&&(i=a.paths),a.hasOwnProperty("beforeRoute")&&(l=a.beforeRoute.bind(a)),n(a,function(){f=a.hasOwnProperty("title")?a.title:!1,m("Loading"),g=a.hasOwnProperty("transition")?a.transition:0,d=Object.size(a.routes),a.init&&"[object Function]"==={}.toString.call(a.init)&&a.init();for(var b in a.routes)q(b,a.routes[b])})};return s});
=======
!function(a,b){"function"==typeof define&&define.amd?define(["router","observer","knockout","jquery","metric"],b):"object"==typeof exports?module.exports=b(require("router"),require("observer"),require("knockout"),require("jquery"),require("metric")):a.riggr=b(a.router,a.observer,a.ko,a.$,a.metric)}(this,function(a,b,c,d,e){var f=0,g=0,h=!1,i=0,j=[],k={controllers:"controllers",views:"views",libs:"libs"},l="appContainer",m="viewContainer",n=!1,o=function(a){h&&a&&(document.title=a+" | "+h),h&&!a&&(document.title=h),!h&&a&&(document.title=a)},p=function(a,b){var c,d=0,e=function(e){require([k.libs+"/"+a.libs[e]],function(f){a.libs[e]=f,d++,d===c&&b()})};if(a.hasOwnProperty("libs")){c=Object.keys(a.libs).length;for(var f in a.libs)e(f)}else b()},q=function(a,f,g,h){var j=document.getElementById(m);d(j).fadeOut(i,function(){d(j).html(a),c.cleanNode(j),c.applyBindings(f,j),d(this).fadeIn(i),h&&(f.load.apply(f,g),e.view.load(f)),b.publish("onRoute")}),o(f.hasOwnProperty("pageTitle")?f.pageTitle:!1)},r=function(b,c){require([k.controllers+"/"+c],function(d){d.init&&"[object Function]"==={}.toString.call(d.init)&&!d.hasInit&&(d.init(),d.hasInit=!0),j.push(d);var e={};n&&(e.beforeAppRoute=n),d.hasOwnProperty("before")&&(e.before=d.before.bind(d)),e.load=d.hasOwnProperty("load")?function(){var a=arguments;require(["text!"+k.views+"/"+c+".html"],function(b){q(b,d,a,!0)})}:function(){require(["text!"+k.views+"/"+c+".html"],function(a){q(a,d,[],!1)})},d.hasOwnProperty("unload")&&(e.unload=d.unload.bind(d)),p(d,function(){a.on(b,e),g++,f===g&&s()})})},s=function(){require([k.controllers+"/app","text!"+k.views+"/app.html"],function(e,f){d("#"+l).html(f),c.applyBindings(e),b.subscribe("onRoute",function(){e.hasOwnProperty("onRoute")&&e.onRoute.apply(e)}),e.hasOwnProperty("load")&&e.load.apply(e),a.process()})},t=function(a){Object.size=function(a){var b,c=0;for(b in a)a.hasOwnProperty(b)&&c++;return c},a.hasOwnProperty("paths")&&(k=a.paths),a.hasOwnProperty("beforeRoute")&&(n=a.beforeRoute.bind(a)),p(a,function(){h=a.hasOwnProperty("title")?a.title:!1,o("Loading"),i=a.hasOwnProperty("transition")?a.transition:0,f=Object.size(a.routes),a.init&&"[object Function]"==={}.toString.call(a.init)&&a.init();for(var b in a.routes)r(b,a.routes[b])})};return t});
>>>>>>> Add metric helper, and metric binding
