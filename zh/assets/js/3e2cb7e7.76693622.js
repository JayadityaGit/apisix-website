"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4792],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47684:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={title:"Apache APISIX Ingress 1.6 \u6b63\u5f0f\u53d1\u5e03",author:"\u5f20\u664b\u6d9b",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://github.com/tao12345666333.png",keywords:["APISIX Ingress","Ingress","Ingress Controller","\u4e91\u539f\u751f","Kubernetes","Gateway API"],description:"Apache APISIX Ingress 1.6 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u4e86 Gateway API \u7684\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u96c6\u6210\u4e0e\u4ee3\u7406\u5916\u90e8\u670d\u52a1\uff0c\u4f18\u5316\u5bf9 APISIX Ingress Controller \u7684\u4f7f\u7528\u4f53\u9a8c\u3002",tags:["Community"]},s=void 0,i={permalink:"/zh/blog/2023/01/10/release-apisix-ingress-1.6",source:"@site/blog/2023/01/10/release-apisix-ingress-1.6.md",title:"Apache APISIX Ingress 1.6 \u6b63\u5f0f\u53d1\u5e03",description:"Apache APISIX Ingress 1.6 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u4e86 Gateway API \u7684\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u96c6\u6210\u4e0e\u4ee3\u7406\u5916\u90e8\u670d\u52a1\uff0c\u4f18\u5316\u5bf9 APISIX Ingress Controller \u7684\u4f7f\u7528\u4f53\u9a8c\u3002",date:"2023-01-10T00:00:00.000Z",formattedDate:"2023\u5e741\u670810\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:6.63,truncated:!0,authors:[{name:"\u5f20\u664b\u6d9b",url:"https://github.com/tao12345666333",imageURL:"https://github.com/tao12345666333.png"}],prevItem:{title:"\u4e3a\u4ec0\u4e48 APISIX Ingress \u662f\u6bd4 Ingress NGINX \u66f4\u597d\u7684\u9009\u62e9\uff1f",permalink:"/zh/blog/2023/01/11/apisix-ingress-vs-ingress-nginx"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (12.19 - 1.1)",permalink:"/zh/blog/2023/01/04/weekly-report-0105"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX Ingress 1.6 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b64\u7248\u672c\u5e26\u6765\u4e86 Gateway API \u7684\u652f\u6301\uff0c\u540c\u65f6\u65b0\u589e\u670d\u52a1\u53d1\u73b0\u7ec4\u4ef6\u96c6\u6210\u4e0e\u4ee3\u7406\u5916\u90e8\u670d\u52a1\uff0c\u4f18\u5316\u5bf9 APISIX Ingress Controller \u7684\u4f7f\u7528\u4f53\u9a8c\u3002")))}u.isMDXComponent=!0}}]);