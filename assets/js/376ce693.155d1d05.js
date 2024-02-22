"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[40618],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=i,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11491:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={title:"Service"},o=void 0,s={unversionedId:"terminology/service",id:"version-3.1/terminology/service",isDocsHomePage:!1,title:"Service",description:"A Service is an abstraction of an API (which can also be understood as a set of Route abstractions). It usually corresponds to an upstream service abstraction.",source:"@site/docs-apisix_versioned_docs/version-3.1/terminology/service.md",sourceDirName:"terminology",slug:"/terminology/service",permalink:"/docs/apisix/3.1/terminology/service",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/terminology/service.md",tags:[],version:"3.1",frontMatter:{title:"Service"},sidebar:"version-3.1/docs",previous:{title:"Script",permalink:"/docs/apisix/3.1/terminology/script"},next:{title:"Upstream",permalink:"/docs/apisix/3.1/terminology/upstream"}},c=[{value:"Description",id:"description",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"A Service is an abstraction of an API (which can also be understood as a set of ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/terminology/route"},"Route")," abstractions). It usually corresponds to an upstream service abstraction."),(0,i.kt)("p",null,"The relationship between Routes and a Service is usually N:1 as shown in the image below."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.1/docs/assets/images/service-example.png",alt:"service-example"})),(0,i.kt)("p",null,"As shown, different Routes could be bound to the same Service. This reduces redundancy as these bounded Routes will have the same ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/terminology/upstream"},"Upstream")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/terminology/plugin"},"Plugin")," configurations."),(0,i.kt)("p",null,"For more information about Service, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.1/admin-api#service"},"Admin API Service object"),"."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"The following example creates a Service that enables the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-count")," Plugin and then binds it to the Routes with the ids ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"101"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Service.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/services/200 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 2,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"create new Route and reference the service by id ",(0,i.kt)("inlineCode",{parentName:"p"},"200")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/100 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "service_id": "200"\n}\'\n')),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/101 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/foo/index.html",\n    "service_id": "200"\n}\'\n')))),(0,i.kt)("p",null,"We can also specify different Plugins or Upstream for the Routes than the ones defined in the Service. The example below creates a Route with a ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-count")," Plugin. This Route will continue to use the other configurations defined in the Service (here, the Upstream configuration)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'```shell\ncurl http://127.0.0.1:9180/apisix/admin/routes/102 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/bar/index.html",\n    "id": "102",\n    "service_id": "200",\n    "plugins": {\n        "limit-count": {\n            "count": 2000,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    }\n}\'\n```\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When a Route and a Service enable the same Plugin, the one defined in the Route is given the higher priority."))))}p.isMDXComponent=!0}}]);