/* Part of the Riggr SPA framework <https://github.com/Fluidbyte/Riggr> and released under the MIT license. This notice must remain intact. */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.version=b(a.$)}(this,function(){var a={patterns:{"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"},i18n:{dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]},format:function(a,b,c){var d=this,e=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,f=/[^-+\dA-Z]/g,g="/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\\d{4})?)\\b/g";g=new RegExp(g);var h=function(a,b){for(a=String(a),b=b||2;a.length<b;)a="0"+a;return a};if(1!==arguments.length||"[object String]"!==Object.prototype.toString.call(a)||/\d/.test(a)||(b=a,a=void 0),a=a?new Date(a):new Date,isNaN(a))throw new SyntaxError("Invalid Date");b=String(this.patterns[b]||b||this.patterns["default"]),"UTC:"===b.slice(0,4)&&(b=b.slice(4),c=!0);var i=c?"getUTC":"get",j=a[i+"Date"](),k=a[i+"Day"](),l=a[i+"Month"](),m=a[i+"FullYear"](),n=a[i+"Hours"](),o=a[i+"Minutes"](),p=a[i+"Seconds"](),q=a[i+"Milliseconds"](),r=c?0:a.getTimezoneOffset(),s={d:j,dd:h(j),ddd:d.i18n.dayNames[k],dddd:d.i18n.dayNames[k+7],m:l+1,mm:h(l+1),mmm:d.i18n.monthNames[l],mmmm:d.i18n.monthNames[l+12],yy:String(m).slice(2),yyyy:m,h:n%12||12,hh:h(n%12||12),H:n,HH:h(n),M:o,MM:h(o),s:p,ss:h(p),l:h(q,3),L:h(q>99?Math.round(q/10):q),t:12>n?"a":"p",tt:12>n?"am":"pm",T:12>n?"A":"P",TT:12>n?"AM":"PM",Z:c?"UTC":(String(a).match(g)||[""]).pop().replace(f,""),o:(r>0?"-":"+")+h(100*Math.floor(Math.abs(r)/60)+Math.abs(r)%60,4),S:["th","st","nd","rd"][j%10>3?0:(j%100-j%10!==10)*j%10]};return b.replace(e,function(a){return a in s?s[a]:a.slice(1,a.length-1)})}};return a});