!function(r,o){"use strict";var e,l=r.location,s=r.document,t=s.querySelector('[src*="'+o+'"]'),c=t&&t.getAttribute("data-domain"),p=r.localStorage.plausible_ignore,u=t&&t.getAttribute("data-exclude").split(",");function g(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(l.hostname)||"file:"===l.protocol)return g("localhost");if(!(r.phantom||r._phantom||r.__nightmare||r.navigator.webdriver)){if("true"==p)return g("localStorage flag");if(u)for(var a=0;a<u.length;a++)if("pageview"==e&&l.pathname.match(new RegExp("^"+u[a].trim().replace(/\*\*/g,".*").replace(/[^\.]\*/g,"[^\\s/]*")+"/?$")))return g("exclusion rule");var n={};n.n=e,n.u="/"===l.pathname?l.href:l.origin+"/public-room",n.d=c,n.r=s.referrer||null,n.w=r.innerWidth,t&&t.meta&&(n.m=JSON.stringify(t.meta)),t&&t.props&&(n.p=JSON.stringify(t.props)),n.h=1;var i=new XMLHttpRequest;i.open("POST",o+"/api/event",!0),i.setRequestHeader("Content-Type","text/plain"),i.send(JSON.stringify(n)),i.onreadystatechange=function(){4==i.readyState&&t&&t.callback&&t.callback()}}}function n(){e=l.pathname,a("pageview")}try{r.addEventListener("hashchange",n);var i=r.plausible&&r.plausible.q||[];r.plausible=a;for(var h=0;h<i.length;h++)a.apply(this,i[h]);"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){e||"visible"!==s.visibilityState||n()}):n()}catch(e){console.error(e),(new Image).src=o+"/api/error?message="+encodeURIComponent(e.message)}}(window,"https://plausible.io");