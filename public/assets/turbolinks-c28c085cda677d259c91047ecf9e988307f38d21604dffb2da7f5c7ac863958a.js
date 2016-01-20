(function(){var r,e,t,n,v,i,o,a,s,d,l,u,c,f,m,p,h,x,w,g,y,b,k,T,C,E,S,N,A,F,L,D,O,H,j,W,M,_,P,B,I,q,R,Y,z,X,V,$,U,J,G,K,Q,Z,rr,er,tr=[].indexOf||function(r){for(var e=0,t=this.length;t>e;e++)if(e in this&&this[e]===r)return e;return-1},nr=function(r,e){function t(){this.constructor=r}for(var n in e)vr.call(e,n)&&(r[n]=e[n]);return t.prototype=e.prototype,r.prototype=new t,r.__super__=e.prototype,r},vr={}.hasOwnProperty,ir=[].slice,or=function(r,e){return function(){return r.apply(e,arguments)}};H={},c=10,K=!1,P=null,w=null,D=null,q=null,er=null,n={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",EXPIRE:"page:expire"},T=function(r){var e;return r=new t(r),V(),u(),null!=P&&P.start(),K&&(e=Q(r.absolute))?(C(e),E(r,null,!1)):E(r,J)},Q=function(r){var e;return e=H[r],e&&!e.transitionCacheDisabled?e:void 0},y=function(r){return null==r&&(r=!0),K=r},g=function(r){return null==r&&(r=!0),d?r?null!=P?P:P=new i("html"):(null!=P&&P.uninstall(),P=null):void 0},E=function(r,e,t){return null==t&&(t=!0),Z(n.FETCH,{url:r.absolute}),null!=er&&er.abort(),er=new XMLHttpRequest,er.open("GET",r.withoutHashForIE10compatibility(),!0),er.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),er.setRequestHeader("X-XHR-Referer",q),er.onload=function(){var t;return Z(n.RECEIVE,{url:r.absolute}),(t=_())?(R(r),Y(),f.apply(null,k(t)),O(),"function"==typeof e&&e(),Z(n.LOAD)):document.location.href=x()||r.absolute},P&&t&&(er.onprogress=function(r){return function(r){var e;return e=r.lengthComputable?r.loaded/r.total*100:P.value+(100-P.value)/10,P.advanceTo(e)}}(this)),er.onloadend=function(){return er=null},er.onerror=function(){return document.location.href=r.absolute},er.send()},C=function(r){return null!=er&&er.abort(),f(r.title,r.body),B(r),Z(n.RESTORE)},u=function(){var r;return r=new t(w.url),H[r.absolute]={url:r.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},p(c)},W=function(r){return null==r&&(r=c),/^[\d]+$/.test(r)?c=parseInt(r):void 0},p=function(r){var e,t,v,i,o,a;for(o=Object.keys(H),e=o.map(function(r){return H[r].cachedAt}).sort(function(r,e){return e-r}),a=[],t=0,i=o.length;i>t;t++)v=o[t],H[v].cachedAt<=e[r]&&(Z(n.EXPIRE,H[v]),a.push(delete H[v]));return a},f=function(e,t,v,i){return Z(n.BEFORE_UNLOAD),document.title=e,document.documentElement.replaceChild(t,document.body),null!=v&&r.update(v),G(),i&&b(),w=window.history.state,null!=P&&P.done(),Z(n.CHANGE),Z(n.UPDATE)},b=function(){var r,e,t,n,v,i,o,a,s,d,l,u;for(u=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),t=0,v=u.length;v>t;t++)if(l=u[t],""===(s=l.type)||"text/javascript"===s){for(e=document.createElement("script"),d=l.attributes,n=0,i=d.length;i>n;n++)r=d[n],e.setAttribute(r.name,r.value);l.hasAttribute("async")||(e.async=!1),e.appendChild(document.createTextNode(l.innerHTML)),a=l.parentNode,o=l.nextSibling,a.removeChild(l),a.insertBefore(e,o)}},$=function(r){return r.innerHTML=r.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),r},G=function(){var r,e;return r=(e=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length-1],r&&document.activeElement!==r?r.focus():void 0},R=function(r){return(r=new t(r)).absolute!==q?window.history.pushState({turbolinks:!0,url:r.absolute},"",r.absolute):void 0},Y=function(){var r,e;return(r=er.getResponseHeader("X-XHR-Redirected-To"))?(r=new t(r),e=r.hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",r.href+e)):void 0},x=function(){var r;return null!=(r=er.getResponseHeader("Location"))&&new t(r).crossOrigin()?r:void 0},V=function(){return q=document.location.href},X=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},z=function(){return w=window.history.state},O=function(){var r;return navigator.userAgent.match(/Firefox/)&&!(r=new t).hasNoHash()?(window.history.replaceState(w,"",r.withoutHash()),document.location.hash=r.hash):void 0},B=function(r){return window.scrollTo(r.positionX,r.positionY)},J=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},m=function(r){var e,t,n;if(null==r||"object"!=typeof r)return r;e=new r.constructor;for(t in r)n=r[t],e[t]=m(n);return e},M=function(r){var e,t;return t=(null!=(e=document.cookie.match(new RegExp(r+"=(\\w+)")))?e[1].toUpperCase():void 0)||"",document.cookie=r+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",t},Z=function(r,e){var t;return"undefined"!=typeof Prototype&&Event.fire(document,r,e,!0),t=document.createEvent("Events"),e&&(t.data=e),t.initEvent(r,!0,!0),document.dispatchEvent(t)},j=function(r){return!Z(n.BEFORE_CHANGE,{url:r})},_=function(){var r,e,t,n,v,i;return e=function(){var r;return 400<=(r=er.status)&&600>r},i=function(){var r;return null!=(r=er.getResponseHeader("Content-Type"))&&r.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},n=function(r){var e,t,n,v,i;for(v=r.querySelector("head").childNodes,i=[],e=0,t=v.length;t>e;e++)n=v[e],null!=("function"==typeof n.getAttribute?n.getAttribute("data-turbolinks-track"):void 0)&&i.push(n.getAttribute("src")||n.getAttribute("href"));return i},r=function(r){var e;return D||(D=n(document)),e=n(r),e.length!==D.length||v(e,D).length!==D.length},v=function(r,e){var t,n,v,i,o;for(r.length>e.length&&(v=[e,r],r=v[0],e=v[1]),i=[],t=0,n=r.length;n>t;t++)o=r[t],tr.call(e,o)>=0&&i.push(o);return i},!e()&&i()&&(t=h(er.responseText),t&&!r(t))?t:void 0},k=function(e){var t;return t=e.querySelector("title"),[null!=t?t.textContent:void 0,$(e.querySelector("body")),r.get(e).token,"runScripts"]},r={get:function(r){var e;return null==r&&(r=document),{node:e=r.querySelector('meta[name="csrf-token"]'),token:null!=e&&"function"==typeof e.getAttribute?e.getAttribute("content"):void 0}},update:function(r){var e;return e=this.get(),null!=e.token&&null!=r&&e.token!==r?e.node.setAttribute("content",r):void 0}},h=function(r){var e;return e=document.documentElement.cloneNode(),e.innerHTML=r,e.head=e.querySelector("head"),e.body=e.querySelector("body"),e},t=function(){function r(e){return this.original=null!=e?e:document.location.href,this.original.constructor===r?this.original:void this._parse()}return r.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},r.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},r.prototype.hasNoHash=function(){return 0===this.hash.length},r.prototype.crossOrigin=function(){return this.origin!==(new r).origin},r.prototype._parse=function(){var r;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,r=this.link,this.href=r.href,this.protocol=r.protocol,this.host=r.host,this.hostname=r.hostname,this.port=r.port,this.pathname=r.pathname,this.search=r.search,this.hash=r.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},r}(),v=function(r){function e(r){return this.link=r,this.link.constructor===e?this.link:(this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),void e.__super__.constructor.apply(this,arguments))}return nr(e,r),e.HTML_EXTENSIONS=["html"],e.allowExtensions=function(){var r,t,n,v;for(t=1<=arguments.length?ir.call(arguments,0):[],n=0,v=t.length;v>n;n++)r=t[n],e.HTML_EXTENSIONS.push(r);return e.HTML_EXTENSIONS},e.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},e.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new t).withoutHash()},e.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+e.HTML_EXTENSIONS.join("|")+")?$","g"))},e.prototype._optOut=function(){var r,e;for(e=this.originalElement;!r&&e!==document;)r=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return r},e.prototype._target=function(){return 0!==this.link.target.length},e}(t),e=function(){function r(r){this.event=r,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(j(this.link.absolute)||rr(this.link.href),this.event.preventDefault()))}return r.installHandlerLast=function(e){return e.defaultPrevented?void 0:(document.removeEventListener("click",r.handle,!1),document.addEventListener("click",r.handle,!1))},r.handle=function(e){return new r(e)},r.prototype._extractLink=function(){var r;for(r=this.event.target;r.parentNode&&"A"!==r.nodeName;)r=r.parentNode;return"A"===r.nodeName&&0!==r.href.length?this.link=new v(r):void 0},r.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},r.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},r}(),i=function(){function r(r){this.elementSelector=r,this._trickle=or(this._trickle,this),this.value=0,this.content="",this.speed=300,this.opacity=.99,this.install()}var e;return e="turbolinks-progress-bar",r.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(e),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},r.prototype.uninstall=function(){return this.element.classList.remove(e),document.head.removeChild(this.styleElement)},r.prototype.start=function(){return this.advanceTo(5)},r.prototype.advanceTo=function(r){var e;if(r>(e=this.value)&&100>=e){if(this.value=r,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},r.prototype.done=function(){return this.value>0?(this.advanceTo(100),this._reset()):void 0},r.prototype._reset=function(){var r;return r=this.opacity,setTimeout(function(r){return function(){return r.opacity=0,r._updateStyle()}}(this),this.speed/2),setTimeout(function(e){return function(){return e.value=0,e.opacity=r,e._withSpeed(0,function(){return e._updateStyle(!0)})}}(this),this.speed)},r.prototype._startTrickle=function(){return this.trickling?void 0:(this.trickling=!0,setTimeout(this._trickle,this.speed))},r.prototype._stopTrickle=function(){return delete this.trickling},r.prototype._trickle=function(){return this.trickling?(this.advanceTo(this.value+Math.random()/2),setTimeout(this._trickle,this.speed)):void 0},r.prototype._withSpeed=function(r,e){var t,n;return t=this.speed,this.speed=r,n=e(),this.speed=t,n},r.prototype._updateStyle=function(r){return null==r&&(r=!1),r&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},r.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},r.prototype._createCSSRule=function(){return this.elementSelector+"."+e+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+this.value+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},r}(),l=function(r){return setTimeout(r,500)},A=function(){return document.addEventListener("DOMContentLoaded",function(){return Z(n.CHANGE),Z(n.UPDATE)},!0)},L=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(r,e,t){return jQuery.trim(e.responseText)?Z(n.UPDATE):void 0}):void 0},F=function(r){var e,n;return(null!=(n=r.state)?n.turbolinks:void 0)?(e=H[new t(r.state.url).absolute])?(u(),C(e)):rr(r.target.location.href):void 0},N=function(){return X(),z(),document.addEventListener("click",e.installHandlerLast,!0),window.addEventListener("hashchange",function(r){return X(),z()},!1),l(function(){return window.addEventListener("popstate",F,!1)})},S=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),s=window.history&&window.history.pushState&&window.history.replaceState&&S,o=!navigator.userAgent.match(/CriOS\//),U="GET"===(I=M("request_method"))||""===I,d=s&&o&&U,a=document.addEventListener&&document.createEvent,a&&(A(),L()),d?(rr=T,N()):rr=function(r){return document.location.href=r},this.Turbolinks={visit:rr,pagesCached:W,enableTransitionCache:y,enableProgressBar:g,allowLinkExtensions:v.allowExtensions,supported:d,EVENTS:m(n)}}).call(this);