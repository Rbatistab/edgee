(()=>{var A=Object.defineProperty;var E=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var k=(e,t,o)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,d=(e,t)=>{for(var o in t||(t={}))L.call(t,o)&&k(e,o,t[o]);if(E)for(var o of E(t))V.call(t,o)&&k(e,o,t[o]);return e};var I={p:"/_edgee/event",s:"/_edgee/side",t:!1,methods:["user","track","page"]},i=I;var W=e=>{let t=window.location.search;return new URLSearchParams(t).get(e)},w=()=>{let e=W("_edgeedebug");if(e!==null){if(e==="true")return document.cookie="_edgeedebug=true; path=/",!0;if(e==="false")return document.cookie="_edgeedebug=false; path=/",!1}return!!document.cookie.includes("_edgeedebug=true")},g=(...e)=>{typeof e!="object"&&(e=[e]),console&&typeof console.log=="function"&&w()&&console.log("%cEDGEE","display: inline-block; color: #61d2a3; background: #231A26; padding: 1px 4px; border-radius: 3px;",...e)},f=(...e)=>{typeof e!="object"&&(e=[e]),console&&typeof console.error=="function"&&w()&&console.error("%cEDGEE","display: inline-block; color: #CB134A; background: #231A26; padding: 1px 4px; border-radius: 3px;",...e)};function q(e){let t=i.p;i.t&&typeof localStorage!="undefined"&&localStorage.getItem("_edgee")&&(t=t+"?e="+localStorage.getItem("_edgee"));let o=JSON.stringify(e),n={"Content-Type":"application/json"};w()&&(n["Edgee-Debug"]="1"),fetch(t,{method:"POST",headers:n,body:o}).then(c=>{c.status!==200&&c.status!==204?f("Failed to send event to "+i.p+": "+c.status):c.status===200&&c.json().then(s=>{let a=s;if(i.t&&typeof localStorage!="undefined"&&(s.e&&localStorage.setItem("_edgee",s.e),s.events&&(a=s.events)),a.length>0)for(let l=0;l<a.length;l++)g(`\u25CB ${a[l].type} event (client):`,a[l])}).catch(s=>{f("Failed to parse response: "+s)})}).catch(c=>{f("Failed to send event to "+i.p+": "+c)})}var m=q;function u(){return F().then(e=>{let t={};e!==null&&(t=JSON.parse(e.textContent)),t.data_collection=t.data_collection||{},t.data_collection.context=t.data_collection.context||{},t.data_collection.events=t.data_collection.events||[],t.data_collection.context.client=t.data_collection.context.client||{};let o=Intl.DateTimeFormat().resolvedOptions().timeZone;o&&(t.data_collection.context.client.timezone=o);let n=window.screen?window.screen.width:0,c=window.screen?window.screen.height:0;n&&c&&(t.data_collection.context.client.screen_width=n,t.data_collection.context.client.screen_height=c);let s=window.devicePixelRatio;s&&(t.data_collection.context.client.screen_density=s);let a=new URLSearchParams(window.location.search);a.has("utm_campaign")&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.name=a.get("utm_campaign")),a.has("utm_source")&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.source=a.get("utm_source")),a.has("utm_medium")&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.medium=a.get("utm_medium")),a.has("utm_term")&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.term=a.get("utm_term")),a.has("utm_content")&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.content=a.get("utm_content")),a.has("utm_creative_format")&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.creative_format=a.get("utm_creative_format")),a.has("utm_marketing_tactic")&&(t.data_collection.context.campaign=t.data_collection.context.campaign||{},t.data_collection.context.campaign.marketing_tactic=a.get("utm_marketing_tactic"));let l;document.querySelector('link[rel="canonical"]')&&document.querySelector('link[rel="canonical"]').getAttribute("href")&&(l=document.querySelector('link[rel="canonical"]').getAttribute("href"),!l.startsWith("https://")&&!l.startsWith("http://")&&!l.startsWith("//")&&(l=window.location.protocol+"//"+window.location.host+l));let p;if(l){p=l.replace(/^https?:\/\//,"");let r=p.split("/")[0];p=p.replace(r,""),p=p.split("?")[0]}if(t.data_collection.context.page=t.data_collection.context.page||{},t.data_collection.context.page.url||(l?t.data_collection.context.page.url=l:t.data_collection.context.page.url=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search),t.data_collection.context.page.path||(p?t.data_collection.context.page.path=p:t.data_collection.context.page.path=window.location.pathname),!t.data_collection.context.page.search&&window.location.search!==""&&(t.data_collection.context.page.search=window.location.search),t.data_collection.context.page.title||(t.data_collection.context.page.title=document.title),!t.data_collection.context.page.keywords){let r=document.querySelector('meta[name="keywords"]');if(r){let x=r.getAttribute("content");t.data_collection.context.page.keywords=x.split(",").map(_=>_.trim())}}return document.referrer&&(t.data_collection.context.page.referrer=document.referrer),window.navigator.userAgentData?window.navigator.userAgentData.getHighEntropyValues(["architecture","bitness","model","platformVersion","fullVersionList"]).then(r=>{if(r.architecture&&(t.data_collection.context.client.user_agent_architecture=r.architecture),r.bitness&&(t.data_collection.context.client.user_agent_bitness=r.bitness),r.model&&(t.data_collection.context.client.user_agent_model=r.model),r.platformVersion&&(t.data_collection.context.client.user_agent_platform=r.platformVersion),r.fullVersionList){let x=r.fullVersionList;if(x.length>0){let _="";x.forEach(b=>{_+=b.brand+";"+b.version+"|"}),_=_.slice(0,-1),t.data_collection.context.client.user_agent_full_version_list=_}}return t}).catch(()=>t):t})}function F(){return new Promise(e=>{function t(){let o=document.getElementById("__EDGEE_DATA_LAYER__");o!==null?e(o):document.readyState==="complete"?e(null):document.onreadystatechange=()=>{document.readyState==="complete"&&t()}}t()})}function O(e){u().then(t=>{t.data_collection.events=[];let o={};if(o.type="page",e.length!==0){let[n,c]=e;typeof n=="string"?o.data=n:typeof n=="object"&&(o.data=d(d({},t.data_collection.context.page),n)),typeof c=="object"&&(o.components=d(d({},t.data_collection.components),c))}t.data_collection.events.push(o),m(t)})}var S=O;function R(e){let t="Event name is required to track an event";if(e.length===0){f(t);return}u().then(o=>{o.data_collection.events=[];let n={};n.type="track",n.data={};let[c,s]=e;if(typeof c=="string")n.data.name=c;else if(typeof c=="object"){if(!c.name){f(t);return}n.data=c}if(c.name===""){f(t);return}typeof s=="object"&&(n.components=d(d({},o.data_collection.components),s)),o.data_collection.events.push(n),m(o)})}var D=R;function T(e){u().then(t=>{t.data_collection.events=[];let o={};if(o.type="user",e.length!==0){let[n,c]=e;typeof n=="string"?o.data.userId=n:typeof n=="object"&&(o.data=d(d({},t.data_collection.context.user),n)),typeof c=="object"&&(o.components=d(d({},t.data_collection.components),c))}t.data_collection.events.push(o),m(t)})}var P=T;function C(){u().then(e=>{if(e.data_collection.events.length===0){let t={};t.type="page",e.data_collection.events.push(t)}m(e)})}var j=C;var h=window.edgee=window.edgee||[];if(!h.load){for(h.load=!0,h.factory=function(o){return function(){let n=Array.prototype.slice.call(arguments);return G(o,n),h}},y=0;y<i.methods.length;y++)v=i.methods[y],h[v]=h.factory(v);let t=document.currentScript.src;if(t&&(t.startsWith("http://")||t.startsWith("https://")||t.startsWith("//"))){t=t.replace("https://",""),t=t.replace("http://",""),t=t.replace("^//","");let o=t.split("/")[0];o!==window.location.host?(i.t=!0,i.p=`https://${o}/_edgee/csevent`,i.s="c",g("Edgee SDK used as third party. Event path set to "+i.p)):g("Event path set to "+i.p)}else g("Event path set to "+i.p);if(i.s!=="e")j();else if(typeof window._edgee_events=="object"&&window._edgee_events.length>0)for(let o=0;o<window._edgee_events.length;o++)g(`\u25C9 ${window._edgee_events[o].type} event (edge):`,window._edgee_events[o]);window.dispatchEvent(new Event("edgee:loaded"))}var v,y;function G(e,t){e==="page"?S(t):e==="track"?D(t):e==="user"&&P(t)}})();