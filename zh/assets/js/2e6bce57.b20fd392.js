"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=o(n),k=r,c=m["".concat(d,".").concat(k)]||m[k]||s[k]||l;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83166:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"api-breaker",keywords:["Apache APISIX","API \u7f51\u5173","API Breaker"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX api-breaker \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u7684 API \u7194\u65ad\u673a\u5236\u6765\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002"},i=void 0,p={unversionedId:"plugins/api-breaker",id:"version-3.8/plugins/api-breaker",isDocsHomePage:!1,title:"api-breaker",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX api-breaker \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u7684 API \u7194\u65ad\u673a\u5236\u6765\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/plugins/api-breaker.md",sourceDirName:"plugins",slug:"/plugins/api-breaker",permalink:"/zh/docs/apisix/plugins/api-breaker",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/plugins/api-breaker.md",tags:[],version:"3.8",frontMatter:{title:"api-breaker",keywords:["Apache APISIX","API \u7f51\u5173","API Breaker"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX api-breaker \u63d2\u4ef6\u7684\u76f8\u5173\u64cd\u4f5c\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6b64\u63d2\u4ef6\u7684 API \u7194\u65ad\u673a\u5236\u6765\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002"},sidebar:"version-3.8/docs",previous:{title:"proxy-mirror",permalink:"/zh/docs/apisix/plugins/proxy-mirror"},next:{title:"traffic-split",permalink:"/zh/docs/apisix/plugins/traffic-split"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],o={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\u5b9e\u73b0\u4e86 API \u7194\u65ad\u529f\u80fd\uff0c\u4ece\u800c\u5e2e\u52a9\u6211\u4eec\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5173\u4e8e\u7194\u65ad\u8d85\u65f6\u903b\u8f91\uff0c\u7531\u4ee3\u7801\u903b\u8f91\u81ea\u52a8\u6309",(0,r.kt)("strong",{parentName:"p"},"\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001"),"\u7684\u6b21\u6570\u9012\u589e\u8fd0\u7b97\uff1a"),(0,r.kt)("p",{parentName:"div"},"\u5f53\u4e0a\u6e38\u670d\u52a1\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," \u914d\u7f6e\u4e2d\u7684\u72b6\u6001\u7801\uff08\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"500"),"\uff09\uff0c\u5e76\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," \u9884\u8bbe\u6b21\u6570\u65f6\uff08\u9ed8\u8ba4\u4e3a 3 \u6b21\uff09\uff0c\u5219\u8ba4\u4e3a\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u3002"),(0,r.kt)("p",{parentName:"div"},"\u7b2c\u4e00\u6b21\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\uff0c\u7194\u65ad 2 \u79d2\u3002\u8d85\u8fc7\u7194\u65ad\u65f6\u95f4\u540e\uff0c\u5c06\u91cd\u65b0\u5f00\u59cb\u8f6c\u53d1\u8bf7\u6c42\u5230\u4e0a\u6e38\u670d\u52a1\uff0c\u5982\u679c\u7ee7\u7eed\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," \u72b6\u6001\u7801\uff0c\u8bb0\u6570\u518d\u6b21\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," \u9884\u8bbe\u6b21\u6570\u65f6\uff0c\u7194\u65ad 4 \u79d2\u3002\u4f9d\u6b21\u7c7b\u63a8\uff082\uff0c4\uff0c8\uff0c16\uff0c\u2026\u2026\uff09\uff0c\u76f4\u5230\u8fbe\u5230\u9884\u8bbe\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"max_breaker_sec"),"\u503c\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5f53\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\uff0c\u5982\u679c\u8f6c\u53d1\u8bf7\u6c42\u5230\u4e0a\u6e38\u670d\u52a1\u5e76\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"healthy.http_statuses")," \u914d\u7f6e\u4e2d\u7684\u72b6\u6001\u7801\uff08\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"200"),"\uff09\uff0c\u5e76\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"healthy.successes")," \u6b21\u65f6\uff0c\u5219\u8ba4\u4e3a\u4e0a\u6e38\u670d\u52a1\u6062\u590d\u81f3\u5065\u5eb7\u72b6\u6001\u3002"))),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"break_response_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[200, ..., 599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\u8fd4\u56de\u7684 HTTP \u9519\u8bef\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"break_response_body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u4f53\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"break_response_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'[{"key":"header_name","value":"can contain Nginx $var"}]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\u8fd4\u56de\u7684 HTTP \u54cd\u5e94\u5934\u4fe1\u606f\u3002\u8be5\u5b57\u6bb5\u4ec5\u5728\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"td"},"break_response_body")," \u5c5e\u6027\u65f6\u751f\u6548\uff0c\u5e76\u80fd\u591f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," \u7684\u683c\u5f0f\u5305\u542b APISIX \u53d8\u91cf\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},'{"key":"X-Client-Addr","value":"$remote_addr:$remote_port"}'),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_breaker_sec"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},">=3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u670d\u52a1\u7194\u65ad\u7684\u6700\u5927\u6301\u7eed\u65f6\u95f4\uff0c\u4ee5\u79d2\u4e3a\u5355\u4f4d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unhealthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"[500]"),(0,r.kt)("td",{parentName:"tr",align:null},"[500, ..., 599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unhealthy.failures"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},">=1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u670d\u52a1\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001\u7684\u5f02\u5e38\u8bf7\u6c42\u6b21\u6570\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"healthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"[200]"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, ..., 499]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u5065\u5eb7\u72b6\u6001\u65f6\u7684 HTTP \u72b6\u6001\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"healthy.successes"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},">=1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u6e38\u670d\u52a1\u89e6\u53d1\u5065\u5eb7\u72b6\u6001\u7684\u8fde\u7eed\u6b63\u5e38\u8bf7\u6c42\u6b21\u6570\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\uff0c\u8be5\u8def\u7531\u914d\u7f6e\u8868\u793a\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"503")," \u72b6\u6001\u7801\u8fbe\u5230 3 \u6b21\u540e\u89e6\u53d1\u7194\u65ad\uff0c\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"200")," \u72b6\u6001\u7801 1 \u6b21\u540e\u6062\u590d\u5065\u5eb7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "api-breaker": {\n            "break_response_code": 502,\n            "unhealthy": {\n                "http_statuses": [500, 503],\n                "failures": 3\n            },\n            "healthy": {\n                "http_statuses": [200],\n                "successes": 1\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u6309\u4e0a\u8ff0\u914d\u7f6e\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8bf7\u6c42\u8be5\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X POST "http://127.0.0.1:9080/hello"\n')),(0,r.kt)("p",null,"\u5982\u679c\u4e0a\u6e38\u670d\u52a1\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"500")," \u72b6\u6001\u7801\u8fbe\u5230 3 \u6b21\uff0c\u5ba2\u6237\u7aef\u5c06\u4f1a\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"502 Bad Gateway")," \u7684\u5e94\u7b54\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 502 Bad Gateway\n...\n<html>\n<head><title>502 Bad Gateway</title></head>\n<body>\n<center><h1>502 Bad Gateway</h1></center>\n<hr><center>openresty</center>\n</body>\n</html>\n")),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);