"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[94983],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,g=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(g,c(c({ref:t},l),{},{components:r})):n.createElement(g,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX Ingress \u4e3a\u4f55\u6210\u4e3a\u53c8\u62cd\u4e91\u6253\u9020\u5bb9\u5668\u7f51\u5173\u7684\u65b0\u9009\u62e9\uff1f",author:"\u9648\u5353",keywords:["Apache APISIX","Apache APISIX Ingress","API \u7f51\u5173","\u53c8\u62cd\u4e91","\u5bb9\u5668\u7f51\u5173"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u53c8\u62cd\u4e91\u9009\u62e9\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX Ingress \u540e\u6240\u5e26\u6765\u516c\u53f8\u5185\u90e8\u7f51\u5173\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u8c03\u6574\uff0c\u540c\u65f6\u5206\u4eab\u4e86\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5b9e\u8df5\u573a\u666f\u4ecb\u7ecd\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/Upyun.png"},c=void 0,p={permalink:"/zh/blog/2021/09/24/youpaicloud-usercase",source:"@site/blog/2021/09/24/youpaicloud-usercase.md",title:"Apache APISIX Ingress \u4e3a\u4f55\u6210\u4e3a\u53c8\u62cd\u4e91\u6253\u9020\u5bb9\u5668\u7f51\u5173\u7684\u65b0\u9009\u62e9\uff1f",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u53c8\u62cd\u4e91\u9009\u62e9\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX Ingress \u540e\u6240\u5e26\u6765\u516c\u53f8\u5185\u90e8\u7f51\u5173\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u8c03\u6574\uff0c\u540c\u65f6\u5206\u4eab\u4e86\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5b9e\u8df5\u573a\u666f\u4ecb\u7ecd\u3002",date:"2021-09-24T00:00:00.000Z",formattedDate:"2021\u5e749\u670824\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:13.445,truncated:!0,authors:[{name:"\u9648\u5353"}],prevItem:{title:"\u767e\u4e07\u7ea7 QPS \u4e1a\u52a1\u65b0\u5ba0\uff0c\u91d1\u5c71\u529e\u516c\u643a\u624b Apache APISIX \u6253\u9020\u7f51\u5173\u5b9e\u8df5\u65b0\u4f53\u9a8c",permalink:"/zh/blog/2021/09/28/wps-usercase"},nextItem:{title:"Apache APISIX \u52a9\u529b\u4fbf\u5229\u5145\u7535\u521b\u9886\u8005\u5c0f\u7535\uff0c\u5b9e\u73b0\u4e91\u539f\u751f\u65b9\u6848",permalink:"/zh/blog/2021/09/18/xiaodian-usercase"}},i={authorsImageUrls:[void 0]},s=[],l={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86\u53c8\u62cd\u4e91\u9009\u62e9 Apache APISIX Ingress \u540e\u6240\u5e26\u6765\u516c\u53f8\u5185\u90e8\u7f51\u5173\u67b6\u6784\u7684\u66f4\u65b0\u4e0e\u8c03\u6574\uff0c\u540c\u65f6\u5206\u4eab\u4e86\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5b9e\u8df5\u573a\u666f\u4ecb\u7ecd\u3002\n\u4f5c\u8005\u9648\u5353\uff0c\u53c8\u62cd\u4e91\u5f00\u53d1\u5de5\u7a0b\u5e08\uff0c\u8d1f\u8d23\u4e91\u5b58\u50a8\u3001\u4e91\u5904\u7406\u548c\u7f51\u5173\u5e94\u7528\u5f00\u53d1\u3002")))}u.isMDXComponent=!0}}]);