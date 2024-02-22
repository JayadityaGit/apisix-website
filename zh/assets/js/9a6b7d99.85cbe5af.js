"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[48793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(n),k=r,N=u["".concat(d,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(N,i(i({ref:t},s),{},{components:n})):a.createElement(N,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},284:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={title:"response-rewrite",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Response Rewrite","response-rewrite"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `response-rewrite` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/response-rewrite",id:"version-3.3/plugins/response-rewrite",isDocsHomePage:!1,title:"response-rewrite",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `response-rewrite` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.3/plugins/response-rewrite.md",sourceDirName:"plugins",slug:"/plugins/response-rewrite",permalink:"/zh/docs/apisix/3.3/plugins/response-rewrite",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/plugins/response-rewrite.md",tags:[],version:"3.3",frontMatter:{title:"response-rewrite",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Response Rewrite","response-rewrite"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `response-rewrite` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.3/docs",previous:{title:"workflow",permalink:"/zh/docs/apisix/3.3/plugins/workflow"},next:{title:"proxy-rewrite",permalink:"/zh/docs/apisix/3.3/plugins/proxy-rewrite"}},d=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:d};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," \u63d2\u4ef6\u652f\u6301\u4fee\u6539\u4e0a\u6e38\u670d\u52a1\u6216 APISIX \u8fd4\u56de\u7684 Body \u548c Header \u4fe1\u606f\u3002"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5e94\u7528\u5728\u4ee5\u4e0b\u573a\u666f\u4e2d\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"Access-Control-Allow-*")," \u5b57\u6bb5\u5b9e\u73b0 CORS\uff08\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u7684\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u8bbe\u7f6e\u6807\u5934\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"status_code")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"Location")," \u5b57\u6bb5\u5b9e\u73b0\u91cd\u5b9a\u5411\u3002")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u4ec5\u9700\u8981\u91cd\u5b9a\u5411\u529f\u80fd\uff0c\u5efa\u8bae\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.3/plugins/redirect"},"redirect")," \u63d2\u4ef6\u3002"))),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"[200, 598]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u4e0a\u6e38\u8fd4\u56de\u72b6\u6001\u7801\uff0c\u9ed8\u8ba4\u4fdd\u7559\u539f\u59cb\u54cd\u5e94\u4ee3\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u4e0a\u6e38\u8fd4\u56de\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"body")," \u5185\u5bb9\uff0c\u5982\u679c\u8bbe\u7f6e\u4e86\u65b0\u5185\u5bb9\uff0cheader \u91cc\u9762\u7684 content-length \u5b57\u6bb5\u4e5f\u4f1a\u88ab\u53bb\u6389\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body_base64"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"td"},"body")," \u5b57\u6bb5\u662f\u5426\u9700\u8981 base64 \u89e3\u7801\u4e4b\u540e\u518d\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\uff0c\u7528\u5728\u67d0\u4e9b\u56fe\u7247\u548c Protobuffer \u573a\u666f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers.add"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u65b0\u7684\u54cd\u5e94\u5934\u3002\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},'["name: value", ...]'),"\u3002\u8fd9\u4e2a\u503c\u80fd\u591f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," \u7684\u683c\u5f0f\u5305\u542b NGINX \u53d8\u91cf\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr $balancer_ip"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers.set"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6539\u5199\u54cd\u5e94\u5934\u3002\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},'{"name": "value", ...}'),"\u3002\u8fd9\u4e2a\u503c\u80fd\u591f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," \u7684\u683c\u5f0f\u5305\u542b NGINX \u53d8\u91cf\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr $balancer_ip"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers.remove"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u79fb\u9664\u54cd\u5e94\u5934\u3002\u683c\u5f0f\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},'["name", ...]'),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"vars"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"vars")," \u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u5217\u8868\uff0c\u53ea\u6709\u6ee1\u8db3\u6761\u4ef6\u7684\u8bf7\u6c42\u548c\u54cd\u5e94\u624d\u4f1a\u4fee\u6539 body \u548c header \u4fe1\u606f\uff0c\u6765\u81ea ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr"),"\u3002\u5982\u679c ",(0,r.kt)("inlineCode",{parentName:"td"},"vars")," \u5b57\u6bb5\u4e3a\u7a7a\uff0c\u90a3\u4e48\u6240\u6709\u7684\u91cd\u5199\u52a8\u4f5c\u90fd\u4f1a\u88ab\u65e0\u6761\u4ef6\u7684\u6267\u884c\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e00\u7ec4\u8fc7\u6ee4\u5668\uff0c\u91c7\u7528\u6307\u5b9a\u5b57\u7b26\u4e32\u8868\u8fbe\u5f0f\u4fee\u6539\u54cd\u5e94\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.regex"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u5339\u914d\u54cd\u5e94\u4f53\u6b63\u5219\u8868\u8fbe\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.scope"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"once"'),(0,r.kt)("td",{parentName:"tr",align:null},'"once","global"'),(0,r.kt)("td",{parentName:"tr",align:null},'\u66ff\u6362\u8303\u56f4\uff0c"once" \u8868\u8fbe\u5f0f ',(0,r.kt)("inlineCode",{parentName:"td"},"filters.regex"),' \u4ec5\u66ff\u6362\u9996\u6b21\u5339\u914d\u4e0a\u54cd\u5e94\u4f53\u7684\u5185\u5bb9\uff0c"global" \u5219\u8fdb\u884c\u5168\u5c40\u66ff\u6362\u3002')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.replace"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u66ff\u6362\u540e\u7684\u5185\u5bb9\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filters.options"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"jo"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u5339\u914d\u6709\u6548\u53c2\u6570\uff0c\u53ef\u9009\u9879\u89c1 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#ngxrematch"},"ngx.re.match"),"\u3002")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"body")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," \u5c5e\u6027\u53ea\u80fd\u914d\u7f6e\u5176\u4e2d\u4e00\u4e2a\u3002"))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," \u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "response-rewrite": {\n            "body": "{\\"code\\":\\"ok\\",\\"message\\":\\"new json body\\"}",\n            "headers": {\n                "set": {\n                    "X-Server-id": 3,\n                    "X-Server-status": "on",\n                    "X-Server-balancer_addr": "$balancer_ip:$balancer_port"\n                }\n            },\n            "vars":[\n                [ "status","==",200 ]\n            ]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u4e0a\u8ff0\u547d\u4ee4\u4e2d\uff0c\u901a\u8fc7\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," \u53c2\u6570\u53ef\u4ee5\u8ba9\u8be5\u63d2\u4ef6\u4ec5\u5728\u5177\u6709 200 \u72b6\u6001\u7801\u7684\u54cd\u5e94\u4e0a\u8fd0\u884c\u63d2\u4ef6\u3002"),(0,r.kt)("p",null,"\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," \u64cd\u4f5c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u50cf\u8fd9\u6837\u589e\u52a0\u6216\u79fb\u9664\u54cd\u5e94\u5934\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"headers": {\n    "add": [\n        "X-Server-balancer_addr: $balancer_ip:$balancer_port"\n    ],\n    "remove": [\n        "X-TO-BE-REMOVED"\n    ]\n}\n')),(0,r.kt)("p",null,"\u8fd9\u4e9b\u64cd\u4f5c\u7684\u6267\u884c\u987a\u5e8f\u4e3a ",'["add", "set", "remove"]',"\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u4e0d\u518d\u5bf9\u76f4\u63a5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," \u4e0b\u9762\u8bbe\u7f6e\u54cd\u5e94\u5934\u7684\u65b9\u5f0f\u63d0\u4f9b\u652f\u6301\u3002\n\u5982\u679c\u4f60\u7684\u914d\u7f6e\u662f\u628a\u54cd\u5e94\u5934\u8bbe\u7f6e\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," \u7684\u4e0b\u4e00\u5c42\uff0c\u4f60\u9700\u8981\u5c06\u8fd9\u4e9b\u914d\u7f6e\u79fb\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"headers.set"),"\u3002"),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u63d2\u4ef6\u662f\u5426\u542f\u7528\u6210\u529f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET -i http://127.0.0.1:9080/test/index.html\n")),(0,r.kt)("p",null,"\u65e0\u8bba\u6765\u81ea\u4e0a\u6e38\u7684\u54cd\u5e94\u662f\u4ec0\u4e48\uff0c\u8fd4\u56de\u7ed3\u679c\u90fd\u662f\u76f8\u540c\u7684\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nDate: Sat, 16 Nov 2019 09:15:12 GMT\nTransfer-Encoding: chunked\nConnection: keep-alive\nX-Server-id: 3\nX-Server-status: on\nX-Server-balancer_addr: 127.0.0.1:80\n\n{"code":"ok","message":"new json body"}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://openresty-reference.readthedocs.io/en/latest/Lua_Nginx_API/#ngxexit"},"ngx.exit")," \u5c06\u4f1a\u4e2d\u65ad\u5f53\u524d\u8bf7\u6c42\u7684\u6267\u884c\u5e76\u5c06\u5176\u72b6\u6001\u7801\u8fd4\u56de\u7ed9 NGINX\u3002"),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"access")," \u9636\u6bb5\u6267\u884c\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx.exit"),"\uff0c\u8be5\u64cd\u4f5c\u53ea\u662f\u4e2d\u65ad\u4e86\u8bf7\u6c42\u5904\u7406\u9636\u6bb5\uff0c\u54cd\u5e94\u9636\u6bb5\u4ecd\u7136\u4f1a\u5904\u7406\u3002\u5982\u679c\u4f60\u914d\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," \u63d2\u4ef6\uff0c\u5b83\u4f1a\u5f3a\u5236\u8986\u76d6\u4f60\u7684\u54cd\u5e94\u4fe1\u606f\uff08\u5982\u54cd\u5e94\u4ee3\u7801\uff09\u3002"),(0,r.kt)("table",{parentName:"div"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Phase"),(0,r.kt)("th",{parentName:"tr",align:null},"rewrite"),(0,r.kt)("th",{parentName:"tr",align:null},"access"),(0,r.kt)("th",{parentName:"tr",align:null},"header_filter"),(0,r.kt)("th",{parentName:"tr",align:null},"body_filter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rewrite"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header_filter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body_filter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,r.kt)("td",{parentName:"tr",align:null},"\xd7"),(0,r.kt)("td",{parentName:"tr",align:null},"ngx.exit")))))),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"filters")," \u6b63\u5219\u5339\u914d\u5c06\u8fd4\u56de body \u7684 X-Amzn-Trace-Id \u66ff\u6362\u4e3a X-Amzn-Trace-Id-Replace\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "plugins":{\n    "response-rewrite":{\n      "headers":{\n        "set": {\n            "X-Server-id":3,\n            "X-Server-status":"on",\n            "X-Server-balancer_addr":"$balancer_ip:$balancer_port"\n        }\n      },\n      "filters":[\n        {\n          "regex":"X-Amzn-Trace-Id",\n          "scope":"global",\n          "replace":"X-Amzn-Trace-Id-Replace"\n        }\n      ],\n      "vars":[\n        [\n          "status",\n          "==",\n          200\n        ]\n      ]\n    }\n  },\n  "upstream":{\n    "type":"roundrobin",\n    "scheme":"https",\n    "nodes":{\n      "httpbin.org:443":1\n    }\n  },\n  "uri":"/*"\n}\'\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET -i  http://127.0.0.1:9080/get\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nTransfer-Encoding: chunked\nX-Server-status: on\nX-Server-balancer-addr: 34.206.80.189:443\nX-Server-id: 3\n\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "127.0.0.1",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id-Replace": "Root=1-629e0b89-1e274fdd7c23ca6e64145aa2",\n    "X-Forwarded-Host": "127.0.0.1"\n  },\n  "origin": "127.0.0.1, 117.136.46.203",\n  "url": "https://127.0.0.1/get"\n}\n\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);