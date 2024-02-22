"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[59749],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=u(r),m=o,h=b["".concat(l,".").concat(m)]||b[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},c),{},{components:r})):n.createElement(h,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},18067:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(25773),o=(r(27378),r(35318));const i={title:"API Observability with APISIX Plugins",keywords:["Apache APISIX","API Gateway","Observability"],authors:[{name:"Boburmirzo",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607?v=4"}],description:"This article describes the power of some Apache APISIX Observability Plugins, how to set up these plugins and use them to understand API behavior.",tags:["Plugins"]},a=void 0,s={permalink:"/blog/2022/04/17/api-observability",source:"@site/blog/2022/04/17/api-observability.md",title:"API Observability with APISIX Plugins",description:"This article describes the power of some Apache APISIX Observability Plugins, how to set up these plugins and use them to understand API behavior.",date:"2022-04-17T00:00:00.000Z",formattedDate:"April 17, 2022",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:6.78,truncated:!0,authors:[{name:"Boburmirzo",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607?v=4",imageURL:"https://avatars.githubusercontent.com/u/14247607?v=4"}],prevItem:{title:"Biweekly Report (Apr 1 - Apr 14)",permalink:"/blog/2022/04/20/weekly-report-0420"},nextItem:{title:"Apache APISIX Summit ASIA 2022 is coming",permalink:"/blog/2022/04/12/apisix-summit-asia-2022"}},l={authorsImageUrls:[void 0]},u=[],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes the power of some Apache APISIX Observability Plugins, how to set up these plugins and use them to understand API behavior.")))}p.isMDXComponent=!0}}]);