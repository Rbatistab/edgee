(function(){(function(){if(typeof window.Event!="function"){var e=function(t,r){r=r||{bubbles:!1,cancelable:!1};var o=document.createEvent("Event");return o.initEvent(t,r.bubbles,r.cancelable),o};e.prototype=window.Event.prototype,window.Event=e}})();var N={p:"/_edgee/event",s:"/_edgee/side",t:!1,methods:["user","track","page"]},u=N;function O(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function z(e){if(Array.isArray(e))return O(e)}function B(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function L(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function h(e){return z(e)||B(e)||Q(e)||L()}function I(e){"@swc/helpers - typeof";return e&&typeof Symbol!="undefined"&&e.constructor===Symbol?"symbol":typeof e}function Q(e,n){if(e){if(typeof e=="string")return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return O(e,n)}}function S(){var e={},n=window.location.search;if(!n||n.charAt(0)!=="?"||n.length<=1)return e;for(var t=n.slice(1),r=t.split("&"),o=0;o<r.length;o++){var a=r[o].split("="),c=decodeURIComponent(a[0]),i=a.length>1?decodeURIComponent(a[1]):"";e[c]||(e[c]=i)}return e}var b=function(){var e=S()._edgeedebug;if(e!==null){if(e==="true")return document.cookie="_edgeedebug=true; path=/",!0;if(e==="false")return document.cookie="_edgeedebug=false; path=/",!1}return document.cookie.indexOf("_edgeedebug=true")!==-1},g=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if((typeof n=="undefined"?"undefined":I(n))!=="object"&&(n=[n]),console&&typeof console.log=="function"&&b()){var r;(r=console).log.apply(r,h(["%cEDGEE","display: inline-block; color: #61d2a3; background: #231A26; padding: 1px 4px; border-radius: 3px;"].concat(h(n))))}},p=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if((typeof n=="undefined"?"undefined":I(n))!=="object"&&(n=[n]),console&&typeof console.error=="function"&&b()){var r;(r=console).error.apply(r,h(["%cEDGEE","display: inline-block; color: #CB134A; background: #231A26; padding: 1px 4px; border-radius: 3px;"].concat(h(n))))}};function X(e){var n=u.p;u.t&&typeof localStorage!="undefined"&&localStorage.getItem("_edgee")&&(n=n+"?e="+localStorage.getItem("_edgee"));var t=JSON.stringify(e),r={"Content-Type":"application/json"};b()&&(r["Edgee-Debug"]="1");var o=new XMLHttpRequest;o.open("POST",n,!0);for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&o.setRequestHeader(a,r[a]);o.onreadystatechange=function(){if(o.readyState===4){if(o.status!==200&&o.status!==204)p("Failed to send event to "+u.p+": "+o.status);else if(o.status===200)try{var c=JSON.parse(o.responseText),i=c;if(u.t&&typeof localStorage!="undefined"&&(c.e&&localStorage.setItem("_edgee",c.e),c.events&&(i=c.events)),i.length>0)for(var l=0;l<i.length;l++)g("\u25CB "+i[l].type+" event (client):",i[l])}catch(d){p("Failed to parse response: "+d)}}},o.onerror=function(){p("Failed to send event to "+u.p+": "+o.statusText)},o.send(t)}var s=X;function _(e){Y(function(n){var t=n!==null?JSON.parse(n.textContent):{};t.data_collection=t.data_collection||{},t.data_collection.context=t.data_collection.context||{},t.data_collection.events=t.data_collection.events||[],t.data_collection.context.client=t.data_collection.context.client||{};var r=Intl.DateTimeFormat().resolvedOptions().timeZone;r&&(t.data_collection.context.client.timezone=r);var o=window.screen?window.screen.width:0,a=window.screen?window.screen.height:0;o&&a&&(t.data_collection.context.client.screen_width=o,t.data_collection.context.client.screen_height=a);var c=window.devicePixelRatio;c&&(t.data_collection.context.client.screen_density=c);var i=S();i.utm_campaign&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.name=i.utm_campaign),i.utm_source&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.source=i.utm_source),i.utm_medium&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.medium=i.utm_medium),i.utm_term&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.term=i.utm_term),i.utm_content&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.content=i.utm_content),i.utm_creative_format&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.creative_format=i.utm_creative_format),i.utm_marketing_tactic&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.marketing_tactic=i.utm_marketing_tactic);var l;document.querySelector('link[rel="canonical"]')&&document.querySelector('link[rel="canonical"]').getAttribute("href")&&(l=document.querySelector('link[rel="canonical"]').getAttribute("href"),l.indexOf("https://")!==0&&l.indexOf("http://")!==0&&l.indexOf("//")!==0&&(l=window.location.protocol+"//"+window.location.host+l));var d;if(l){d=l.replace(/^https?:\/\//,"");var H=d.split("/")[0];d=d.replace(H,""),d=d.split("?")[0]}if(t.data_collection.context.page=t.data_collection.context.page||{},t.data_collection.context.page.url||(l?t.data_collection.context.page.url=l:t.data_collection.context.page.url=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search),t.data_collection.context.page.path||(d?t.data_collection.context.page.path=d:t.data_collection.context.page.path=window.location.pathname),!t.data_collection.context.page.search&&window.location.search!==""&&(t.data_collection.context.page.search=window.location.search),t.data_collection.context.page.title||(t.data_collection.context.page.title=document.title),!t.data_collection.context.page.keywords){var P=document.querySelector('meta[name="keywords"]');if(P){var J=P.getAttribute("content");t.data_collection.context.page.keywords=J.split(",").map(function(m){return m.trim()})}}document.referrer&&(t.data_collection.context.page.referrer=document.referrer),window.navigator.userAgentData&&window.Promise?window.navigator.userAgentData.getHighEntropyValues(["architecture","bitness","model","platformVersion","fullVersionList"]).then(function(m){Object.assign(t.data_collection.context.client,{user_agent_architecture:m.architecture,user_agent_bitness:m.bitness,user_agent_model:m.model,user_agent_platform:m.platformVersion,user_agent_full_version_list:m.fullVersionList.map(function(j){return"".concat(j.brand,";").concat(j.version)}).join("|")}),e(t)}).catch(function(){return e(t)}):(t.data_collection.context.client.user_agent=window.navigator.userAgent||"",e(t))})}function Y(e){function n(){var t=document.getElementById("__EDGEE_DATA_LAYER__");t!==null?e(t):document.readyState==="complete"?e(null):document.onreadystatechange=function(){document.readyState==="complete"&&n()}}n()}function D(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Z(e){if(Array.isArray(e))return e}function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function K(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],o=!0,a=!1,c,i;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(r.push(c.value),!(n&&r.length===n));o=!0);}catch(l){a=!0,i=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw i}}return r}}function tt(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){W(e,o,t[o])})}return e}function et(e,n){return Z(e)||K(e,n)||nt(e,n)||tt()}function T(e){"@swc/helpers - typeof";return e&&typeof Symbol!="undefined"&&e.constructor===Symbol?"symbol":typeof e}function nt(e,n){if(e){if(typeof e=="string")return D(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return D(e,n)}}function rt(e){_(function(n){n.data_collection.events=[];var t={};if(t.type="page",e.length!==0){var r=et(e,2),o=r[0],a=r[1];typeof o=="string"?t.data=o:(typeof o=="undefined"?"undefined":T(o))==="object"&&(t.data=k({},n.data_collection.context.page,o)),(typeof a=="undefined"?"undefined":T(a))==="object"&&(t.components=k({},n.data_collection.components,a))}n.data_collection.events.push(t),s(n)})}var q=rt;function C(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ot(e){if(Array.isArray(e))return e}function at(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function it(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],o=!0,a=!1,c,i;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(r.push(c.value),!(n&&r.length===n));o=!0);}catch(l){a=!0,i=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw i}}return r}}function ct(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function lt(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){at(e,o,t[o])})}return e}function ut(e,n){return ot(e)||it(e,n)||ft(e,n)||ct()}function R(e){"@swc/helpers - typeof";return e&&typeof Symbol!="undefined"&&e.constructor===Symbol?"symbol":typeof e}function ft(e,n){if(e){if(typeof e=="string")return C(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,n)}}function dt(e){var n="Event name is required to track an event";if(e.length===0){p(n);return}_(function(t){t.data_collection.events=[];var r={};r.type="track",r.data={};var o=ut(e,2),a=o[0],c=o[1];if(typeof a=="string")r.data.name=a;else if((typeof a=="undefined"?"undefined":R(a))==="object"){if(!a.name){p(n);return}r.data=a}if(a.name===""){p(n);return}(typeof c=="undefined"?"undefined":R(c))==="object"&&(r.components=lt({},t.data_collection.components,c)),t.data_collection.events.push(r),s(t)})}var U=dt;function V(e,n){(n==null||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function pt(e){if(Array.isArray(e))return e}function st(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _t(e,n){var t=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(t!=null){var r=[],o=!0,a=!1,c,i;try{for(t=t.call(e);!(o=(c=t.next()).done)&&(r.push(c.value),!(n&&r.length===n));o=!0);}catch(l){a=!0,i=l}finally{try{!o&&t.return!=null&&t.return()}finally{if(a)throw i}}return r}}function mt(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable}))),r.forEach(function(o){st(e,o,t[o])})}return e}function gt(e,n){return pt(e)||_t(e,n)||yt(e,n)||mt()}function F(e){"@swc/helpers - typeof";return e&&typeof Symbol!="undefined"&&e.constructor===Symbol?"symbol":typeof e}function yt(e,n){if(e){if(typeof e=="string")return V(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(t);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,n)}}function vt(e){_(function(n){n.data_collection.events=[];var t={};if(t.type="user",e.length!==0){var r=gt(e,2),o=r[0],a=r[1];typeof o=="string"?t.data.userId=o:(typeof o=="undefined"?"undefined":F(o))==="object"&&(t.data=M({},n.data_collection.context.user,o)),(typeof a=="undefined"?"undefined":F(a))==="object"&&(t.components=M({},n.data_collection.components,a))}n.data_collection.events.push(t),s(n)})}var $=vt;function ht(){_(function(e){if(e.data_collection.events.length===0){var n={};n.type="page",e.data_collection.events.push(n)}s(e)})}var G=ht;function bt(e){"@swc/helpers - typeof";return e&&typeof Symbol!="undefined"&&e.constructor===Symbol?"symbol":typeof e}var y=window.edgee=window.edgee||[];if(!y.load){for(y.load=!0,y.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return wt(e,n),y}},w=0;w<u.methods.length;w++)A=u.methods[w],y[A]=y.factory(A);if(x=document.currentScript,f=x==null?void 0:x.src,f&&(f.indexOf("http://")===0||f.indexOf("https://")===0||f.indexOf("//")===0)?(f=f.replace("https://",""),f=f.replace("http://",""),f=f.replace("^//",""),E=f.split("/")[0],E!==window.location.host?(u.t=!0,u.p="https://".concat(E,"/_edgee/csevent"),u.s="c",g("Edgee SDK used as third party. Event path set to "+u.p)):g("Event path set to "+u.p)):g("Event path set to "+u.p),u.s!=="e")G();else if(bt(window._edgee_events)==="object"&&window._edgee_events.length>0)for(v=0;v<window._edgee_events.length;v++)g("\u25C9 ".concat(window._edgee_events[v].type," event (edge):"),window._edgee_events[v]);window.dispatchEvent(new Event("edgee:loaded"))}var A,w,x,f,E,v;function wt(e,n){e==="page"?q(n):e==="track"?U(n):e==="user"&&$(n)}})();
