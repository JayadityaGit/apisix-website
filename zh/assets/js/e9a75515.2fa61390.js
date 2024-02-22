"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[64660],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4555:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u76f4\u64ad\u9884\u544a | \u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u4f01\u4e1a\u4e0a\u4e91\u4e0e\u884c\u52a8\u843d\u5730",keywords:["Apache APISIX","QingCloud","cloud native","API \u7f51\u5173"],description:"1 \u6708 28 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408\u9752\u4e91\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427!",tags:["Community"]},i=void 0,c={permalink:"/zh/blog/2022/01/24/apisix-with-qingcloud-meetup",source:"@site/blog/2022/01/24/apisix-with-qingcloud-meetup.md",title:"\u76f4\u64ad\u9884\u544a | \u5f00\u6e90+\u4e91\u539f\u751f\u52a9\u529b\u4f01\u4e1a\u4e0a\u4e91\u4e0e\u884c\u52a8\u843d\u5730",description:"1 \u6708 28 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408\u9752\u4e91\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427!",date:"2022-01-24T00:00:00.000Z",formattedDate:"2022\u5e741\u670824\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:1.295,truncated:!0,authors:[],prevItem:{title:"Apache APISIX 2.12.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2022/01/25/release-apache-apisix-2.12"},nextItem:{title:"Apache APISIX \u96c6\u6210 HashiCorp Vault\uff0c\u751f\u6001\u7cfb\u7edf\u518d\u6dfb\u4e00\u5458",permalink:"/zh/blog/2022/01/21/apisix-hashicorp-vault-integration"}},l={authorsImageUrls:[]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"1 \u6708 28 \u65e5\uff0cApache APISIX \u793e\u533a\u5c06\u8054\u5408\u9752\u4e91\u4e3a\u5927\u5bb6\u5e26\u6765\u7ebf\u4e0a\u5206\u4eab\uff0c\u5feb\u6765\u770b\u770b\u6709\u54ea\u4e9b\u7cbe\u5f69\u7684\u8bae\u9898\u5427!")))}s.isMDXComponent=!0}}]);