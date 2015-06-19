  <!--[if IE]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
  	<!--https://raw.github.com/termi/ES5-DOM-SHIM/master/__SRC-->
	<!--[if lt IE 9]>
	<script src="http://h123.ru/js/a.ie8.js"></script>
	<![endif]-->
	<!--[if lt IE 8]>
	<script src="http://h123.ru/js/a.ielt8.js"></script>
	<![endif]-->
	<script src="http://h123.ru/js/a.js"></script>

	<!--[if IE 8]>
<script>
(function(g,f){if(f=!(!f||!+f[1])){document.head.insertAdjacentHTML("beforeend","<br><style>details{display:block}details.close>*{display:none}details summary,details.close>summary,details .\u25bc{display:block}details.close .details-marker:before{content:'\u25ba'}details .details-marker:before{content:'\u25bc'}</style>");var c=g.Element||(g.Element={}),k=c.prototype||(c.prototype={}),h=function(a,b){RegExp("(^|\\s)"+b+"(\\s|$)","g").test(a.className)||(a.className=(a.className+" "+b).replace(/\s+/g,
" ").replace(/(^ | $)/g,""))},i=function(a,b){a.className=a.className.replace(RegExp("(^|\\s)"+b+"(\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/(^ | $)/g,"")},j={get:function(){return"DETAILS"!=this.nodeName.toUpperCase()?void 0:null!==this.getAttribute("OPEN")},set:function(a){if("DETAILS"==this.nodeName.toUpperCase())return(a=l(this,a))?(i(this,"close"),h(this,"open"),this.setAttribute("OPEN","")):(i(this,"open"),h(this,"close"),this.removeAttribute("OPEN")),a}},m=function(a){if(13===a.keyCode||
"click"===a.type)this.parentNode.open=!this.parentNode.open},l=function(a,b){function c(){m.call(d,event)}if(a.a&&a.a.__isShimmed)return b;a.a||(a.a={});for(var d,e,f=-1;e=a.childNodes[++f];)3===e.nodeType&&/[^\t\n\r ]/.test(e.data)?(a.insertBefore(document.createElement("x-i"),e).innerHTML=e.data,a.removeChild(e)):"SUMMARY"==e.nodeName.toUpperCase()&&(d=e);d||((d=document.createElement("x-s")).innerHTML="Details",d.className="\u25bc");a.insertBefore(d,a.childNodes[0]);d.insertBefore(document.createElement("x-i"),
d.childNodes[0]).className="details-marker";d.tabIndex=0;d.attachEvent("onclick",c);d.attachEvent("onkeyup",c);a.a.__isShimmed=1;b="open"in a.attributes;Object.defineProperty(a,"open",j);a.removeAttribute("open");b&&a.setAttribute("OPEN","");return b},c=function(){Object.defineProperty(k,"open",j);for(var a=document.getElementsByTagName("details"),b,c=-1;b=a[++c];)b.open=null!==b.getAttribute("open")};"complete"!=document.readyState?(void 0===document.readyState&&c(),document.addEventListener?document.addEventListener("DOMContentLoaded",
c):window.attachEvent("onload",c)):c()}})(window,/msie (\d+)/i.exec(navigator.userAgent));  
</script>
	<![endif]-->
	<!--[if gt IE 8] -->
<script>
(function(f,g){if(!g){document.head.insertAdjacentHTML("beforeend","<br><style>details{display:block}details.close>*{display:none}details>summary,details.close>summary,details>.\u25bc{display:block}details.close .details-marker:before{content:'\u25ba'}details .details-marker:before{content:'\u25bc'}</style>");var h={get:function(){return"DETAILS"!=this.nodeName.toUpperCase()?void 0:this.hasAttribute("open")},set:function(c){if("DETAILS"==this.nodeName.toUpperCase()){if(!this.a||!this.a.__isShimmed){this.a||
(this.a={});for(var a,b,d=-1;b=this.childNodes[++d];)3===b.nodeType&&/[^\t\n\r ]/.test(b.data)?(this.insertBefore(document.createElement("x-i"),b).innerHTML=b.data,this.removeChild(b)):"SUMMARY"==b.nodeName.toUpperCase()&&(a=b);a||((a=document.createElement("x-s")).innerHTML="Details",a.className="\u25bc");this.insertBefore(a,this.childNodes[0]);a.insertBefore(document.createElement("x-i"),a.childNodes[0]).className="details-marker";a.tabIndex=0;a.addEventListener("click",e,!1);a.addEventListener("keyup",
e,!1);this.a.__isShimmed=1}c?(this.classList.remove("close"),this.classList.add("open"),this.setAttribute("open","open")):(this.classList.remove("open"),this.classList.add("close"),this.removeAttribute("open"));return c}}},e=function(c){if(0!==c.detail&&(13===c.keyCode||"click"===c.type))this.parentNode.open=!this.parentNode.open},d=function(){Object.defineProperty(f.Element.prototype,"open",h);for(var c=document.getElementsByTagName("details"),a,b=-1;a=c[++b];)a.open=a.hasAttribute("open")};"complete"!=
document.readyState?document.addEventListener("DOMContentLoaded",d,!1):d()}})(window,"open"in document.createElement("details"));
</script>
	<!-- ![endif]-->