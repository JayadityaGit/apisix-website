"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[88393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),u=r,k=s["".concat(o,".").concat(u)]||s[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8423:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"proxy-cache",keywords:["APISIX","API \u7f51\u5173","Request Validation"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX proxy-cache \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u7f13\u5b58\u6765\u81ea\u4e0a\u6e38\u7684\u54cd\u5e94\u3002"},i=void 0,p={unversionedId:"plugins/proxy-cache",id:"version-3.3/plugins/proxy-cache",isDocsHomePage:!1,title:"proxy-cache",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX proxy-cache \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u7f13\u5b58\u6765\u81ea\u4e0a\u6e38\u7684\u54cd\u5e94\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.3/plugins/proxy-cache.md",sourceDirName:"plugins",slug:"/plugins/proxy-cache",permalink:"/zh/docs/apisix/3.3/plugins/proxy-cache",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/plugins/proxy-cache.md",tags:[],version:"3.3",frontMatter:{title:"proxy-cache",keywords:["APISIX","API \u7f51\u5173","Request Validation"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX proxy-cache \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u7f13\u5b58\u6765\u81ea\u4e0a\u6e38\u7684\u54cd\u5e94\u3002"},sidebar:"version-3.3/docs",previous:{title:"limit-count",permalink:"/zh/docs/apisix/3.3/plugins/limit-count"},next:{title:"request-validation",permalink:"/zh/docs/apisix/3.3/plugins/request-validation"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," \u63d2\u4ef6\u63d0\u4f9b\u7f13\u5b58\u540e\u7aef\u54cd\u5e94\u6570\u636e\u7684\u80fd\u529b\uff0c\u5b83\u53ef\u4ee5\u548c\u5176\u4ed6\u63d2\u4ef6\u4e00\u8d77\u4f7f\u7528\u3002\u8be5\u63d2\u4ef6\u652f\u6301\u57fa\u4e8e\u78c1\u76d8\u548c\u5185\u5b58\u7684\u7f13\u5b58\u3002\u76ee\u524d\u53ef\u4ee5\u6839\u636e\u54cd\u5e94\u7801\u548c\u8bf7\u6c42\u6a21\u5f0f\u6765\u6307\u5b9a\u9700\u8981\u7f13\u5b58\u7684\u6570\u636e\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"no_cache")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"cache_bypass"),"\u5c5e\u6027\u914d\u7f6e\u66f4\u590d\u6742\u7684\u7f13\u5b58\u7b56\u7565\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_strategy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"disk"),(0,r.kt)("td",{parentName:"tr",align:null},'["disk","memory"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58\u7b56\u7565\uff0c\u6307\u5b9a\u7f13\u5b58\u6570\u636e\u5b58\u50a8\u5728\u78c1\u76d8\u8fd8\u662f\u5185\u5b58\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_zone"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"disk_cache_one"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u4f7f\u7528\u54ea\u4e2a\u7f13\u5b58\u533a\u57df\uff0c\u4e0d\u540c\u7684\u7f13\u5b58\u533a\u57df\u53ef\u4ee5\u914d\u7f6e\u4e0d\u540c\u7684\u8def\u5f84\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"td"},"conf/config.yaml")," \u6587\u4ef6\u4e2d\u53ef\u4ee5\u9884\u5b9a\u4e49\u4f7f\u7528\u7684\u7f13\u5b58\u533a\u57df\u3002\u5982\u679c\u6307\u5b9a\u7684\u7f13\u5b58\u533a\u57df\u4e0e\u914d\u7f6e\u6587\u4ef6\u4e2d\u9884\u5b9a\u4e49\u7684\u7f13\u5b58\u533a\u57df\u4e0d\u4e00\u81f4\uff0c\u90a3\u4e48\u7f13\u5b58\u65e0\u6548\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_key"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'["$host", "$request_uri"]'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7f13\u5b58 key\uff0c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\u3002\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},'["$host", "$uri", "-cache-id"]'),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_bypass"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8be5\u5c5e\u6027\u7684\u503c\u4e0d\u4e3a\u7a7a\u6216\u8005\u975e ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," \u65f6\u5219\u4f1a\u8df3\u8fc7\u7f13\u5b58\u68c0\u67e5\uff0c\u5373\u4e0d\u5728\u7f13\u5b58\u4e2d\u67e5\u627e\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},'["$arg_bypass"]'),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_method"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'["GET", "HEAD"]'),(0,r.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "HEAD"]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e\u8bf7\u6c42 method \u51b3\u5b9a\u662f\u5426\u9700\u8981\u7f13\u5b58\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_http_status"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 301, 404]"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6839\u636e HTTP \u54cd\u5e94\u7801\u51b3\u5b9a\u662f\u5426\u9700\u8981\u7f13\u5b58\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hide_cache_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u5c06 ",(0,r.kt)("inlineCode",{parentName:"td"},"Expires")," \u548c ",(0,r.kt)("inlineCode",{parentName:"td"},"Cache-Control")," \u54cd\u5e94\u5934\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_control"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u9075\u5b88 HTTP \u534f\u8bae\u89c4\u8303\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"Cache-Control")," \u7684\u884c\u4e3a\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"no_cache"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u6b64\u53c2\u6570\u7684\u503c\u4e0d\u4e3a\u7a7a\u6216\u975e ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," \u65f6\u5c06\u4e0d\u4f1a\u7f13\u5b58\u6570\u636e\uff0c\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cache_ttl"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"300 \u79d2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u9009\u9879 ",(0,r.kt)("inlineCode",{parentName:"td"},"cache_control")," \u672a\u5f00\u542f\u6216\u5f00\u542f\u4ee5\u540e\u670d\u52a1\u7aef\u6ca1\u6709\u8fd4\u56de\u7f13\u5b58\u63a7\u5236\u5934\u65f6\uff0c\u63d0\u4f9b\u7684\u9ed8\u8ba4\u7f13\u5b58\u65f6\u95f4\u3002")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u57fa\u4e8e\u78c1\u76d8\u7684\u7f13\u5b58\uff0c\u4e0d\u80fd\u52a8\u6001\u914d\u7f6e\u7f13\u5b58\u7684\u8fc7\u671f\u65f6\u95f4\uff0c\u53ea\u80fd\u901a\u8fc7\u540e\u7aef\u670d\u52a1\u54cd\u5e94\u5934 ",(0,r.kt)("inlineCode",{parentName:"li"},"Expires")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache-Control")," \u6765\u8bbe\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u5f53\u540e\u7aef\u54cd\u5e94\u5934\u4e2d\u6ca1\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"Expires")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"Cache-Control")," \u65f6\uff0c\u9ed8\u8ba4\u7f13\u5b58\u65f6\u95f4\u4e3a 10 \u79d2\u949f"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u4e0a\u6e38\u670d\u52a1\u4e0d\u53ef\u7528\u65f6\uff0c APISIX \u5c06\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"li"},"502")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"li"},"504")," HTTP \u72b6\u6001\u7801\uff0c\u9ed8\u8ba4\u7f13\u5b58\u65f6\u95f4\u4e3a 10 \u79d2\u949f\uff1b"),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"li"},"$")," \u5f00\u5934\uff0c\u4e0d\u5b58\u5728\u65f6\u7b49\u4ef7\u4e8e\u7a7a\u5b57\u7b26\u4e32\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u53d8\u91cf\u548c\u5b57\u7b26\u4e32\u7684\u7ed3\u5408\uff0c\u4f46\u662f\u9700\u8981\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u5206\u5f00\u5199\uff0c\u6700\u7ec8\u53d8\u91cf\u88ab\u89e3\u6790\u540e\u4f1a\u548c\u5b57\u7b26\u4e32\u62fc\u63a5\u5728\u4e00\u8d77\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 APISIX \u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u6dfb\u52a0\u4f60\u7684\u7f13\u5b58\u914d\u7f6e\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'proxy_cache:                       # \u4ee3\u7406\u7f13\u5b58\u914d\u7f6e\n    cache_ttl: 10s                 # \u5982\u679c\u4e0a\u6e38\u672a\u6307\u5b9a\u7f13\u5b58\u65f6\u95f4\uff0c\u5219\u4e3a\u9ed8\u8ba4\u7f13\u5b58\u65f6\u95f4\n    zones:                         # \u7f13\u5b58\u7684\u53c2\u6570\n    - name: disk_cache_one         # \u7f13\u5b58\u540d\u79f0\uff08\u7f13\u5b58\u533a\u57df\uff09\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7 admin api \u4e2d\u7684 cache_zone \u5b57\u6bb5\u6307\u5b9a\u8981\u4f7f\u7528\u7684\u7f13\u5b58\u533a\u57df\n      memory_size: 50m             # \u5171\u4eab\u5185\u5b58\u7684\u5927\u5c0f\uff0c\u7528\u4e8e\u5b58\u50a8\u7f13\u5b58\u7d22\u5f15\n      disk_size: 1G                # \u78c1\u76d8\u5927\u5c0f\uff0c\u7528\u4e8e\u5b58\u50a8\u7f13\u5b58\u6570\u636e\n      disk_path: "/tmp/disk_cache_one" # \u5b58\u50a8\u7f13\u5b58\u6570\u636e\u7684\u8def\u5f84\n      cache_levels: "1:2"          # \u7f13\u5b58\u7684\u5c42\u6b21\u7ed3\u6784\u7ea7\u522b\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy-cache")," \u63d2\u4ef6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"cache_zone")," \u5b57\u6bb5\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"disk_cache_one"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "proxy-cache": {\n            "cache_key":  ["$uri", "-cache-id"],\n            "cache_bypass": ["$arg_bypass"],\n            "cache_method": ["GET"],\n            "cache_http_status": [200],\n            "hide_cache_headers": true,\n            "no_cache": ["$arg_test"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1999": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u6309\u4e0a\u8ff0\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42\u8be5\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -i\n")),(0,r.kt)("p",null,"\u5982\u679c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," HTTP \u72b6\u6001\u7801\uff0c\u5e76\u4e14\u54cd\u5e94\u5934\u4e2d\u5305\u542b ",(0,r.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status"),"\u5b57\u6bb5\uff0c\u5219\u8868\u793a\u8be5\u63d2\u4ef6\u5df2\u542f\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\xb7\xb7\xb7\nApisix-Cache-Status: MISS\n\nhello\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u8bf7\u6c42\u8be5\u8def\u7531\uff0c\u6570\u636e\u672a\u7f13\u5b58\uff0c\u90a3\u4e48 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status")," \u5b57\u6bb5\u5e94\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"MISS"),"\u3002\u6b64\u65f6\u518d\u6b21\u8bf7\u6c42\u8be5\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -i\n")),(0,r.kt)("p",null,"\u5982\u679c\u8fd4\u56de\u7684\u54cd\u5e94\u5934\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"Apisix-Cache-Status")," \u5b57\u6bb5\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"HIT"),"\uff0c\u5219\u8868\u793a\u6570\u636e\u5df2\u88ab\u7f13\u5b58\uff0c\u63d2\u4ef6\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\xb7\xb7\xb7\nApisix-Cache-Status: HIT\n\nhello\n")),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},'"cache_zone": "invalid_disk_cache"')," \u5c5e\u6027\u4e3a\u65e0\u6548\u503c\uff0c\u5373\u4e0e\u914d\u7f6e\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u6307\u5b9a\u7684\u7f13\u5b58\u533a\u57df\u4e0d\u4e00\u81f4\uff0c\u90a3\u4e48\u5b83\u5c06\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"404")," HTTP \u54cd\u5e94\u7801\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u6e05\u9664\u7f13\u5b58\u6570\u636e\uff0c\u4f60\u53ea\u9700\u8981\u6307\u5b9a\u8bf7\u6c42\u7684 method \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"PURGE"),"\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello -X PURGE\n")),(0,r.kt)("p",{parentName:"div"},"HTTP \u54cd\u5e94\u7801\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," \u5373\u8868\u793a\u5220\u9664\u6210\u529f\uff0c\u5982\u679c\u7f13\u5b58\u7684\u6570\u636e\u672a\u627e\u5230\u5c06\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"404"),"\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")))),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1999": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);