"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[64279],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=l(r),y=o,m=g["".concat(s,".").concat(y)]||g[y]||u[y]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},19084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const i={title:"How to Integrate API Gateway and Consul?",authors:[{name:"Tao Yang",title:"Author",url:"https://github.com/SkyeYoung",image_url:"https://github.com/SkyeYoung.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["API Gateway","Consul","Service Discovery","Servici Register"],description:"Apache APISIX supports the Consul KV-based service discovery registry. This article will walk you through the process of implementing service discovery and service registry in APISIX.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/ecosystem/HashiCorp%20Consul.png"},a=void 0,c={permalink:"/blog/2022/02/25/consul-api-gateway",source:"@site/blog/2022/02/25/consul-api-gateway.md",title:"How to Integrate API Gateway and Consul?",description:"Apache APISIX supports the Consul KV-based service discovery registry. This article will walk you through the process of implementing service discovery and service registry in APISIX.",date:"2022-02-25T00:00:00.000Z",formattedDate:"February 25, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.415,truncated:!0,authors:[{name:"Tao Yang",title:"Author",url:"https://github.com/SkyeYoung",image_url:"https://github.com/SkyeYoung.png",imageURL:"https://github.com/SkyeYoung.png"},{name:"Yilin Zeng",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"Upgrade of observability capabilities, API Gateway Apache APISIX integrates OpenTelemetry",permalink:"/blog/2022/02/28/apisix-integration-opentelemetry-plugin"},nextItem:{title:"API Gateway Enhances Security by CSRF Plugin",permalink:"/blog/2022/02/23/csrf-api-gateway"}},s={authorsImageUrls:[void 0,void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX supports the Consul KV-based service discovery registry. This article will walk you through the process of implementing service discovery and service registry in Apache APISIX.")))}u.isMDXComponent=!0}}]);