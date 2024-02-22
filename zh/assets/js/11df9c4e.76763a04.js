"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,k=s["".concat(o,".").concat(c)]||s[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},30272:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"proxy-rewrite",keywords:["APISIX","Plugin","Proxy Rewrite","proxy-rewrite"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `proxy-rewrite` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},l=void 0,p={unversionedId:"plugins/proxy-rewrite",id:"version-3.0/plugins/proxy-rewrite",isDocsHomePage:!1,title:"proxy-rewrite",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `proxy-rewrite` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugins/proxy-rewrite.md",sourceDirName:"plugins",slug:"/plugins/proxy-rewrite",permalink:"/zh/docs/apisix/3.0/plugins/proxy-rewrite",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugins/proxy-rewrite.md",tags:[],version:"3.0",frontMatter:{title:"proxy-rewrite",keywords:["APISIX","Plugin","Proxy Rewrite","proxy-rewrite"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `proxy-rewrite` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.0/docs",previous:{title:"response-rewrite",permalink:"/zh/docs/apisix/3.0/plugins/response-rewrite"},next:{title:"grpc-transcode",permalink:"/zh/docs/apisix/3.0/plugins/grpc-transcode"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u662f\u5904\u7406\u4e0a\u6e38\u4ee3\u7406\u4fe1\u606f\u91cd\u5199\u7684\u63d2\u4ef6\uff0c\u652f\u6301\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"scheme"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"host")," \u7b49\u4fe1\u606f\u8fdb\u884c\u91cd\u5199\u3002"),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u5730\u5740\u3002\u652f\u6301 ",(0,a.kt)("a",{parentName:"td",href:"https://nginx.org/en/docs/http/ngx_http_core_module.html"},"NGINX variables")," \u53d8\u91cf\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"$arg_name"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"method"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS","MKCOL", "COPY", "MOVE", "PROPFIND", "PROPFIND","LOCK", "UNLOCK", "PATCH", "TRACE"]'),(0,a.kt)("td",{parentName:"tr",align:null},"\u5c06\u8def\u7531\u7684\u8bf7\u6c42\u65b9\u6cd5\u4ee3\u7406\u4e3a\u8be5\u8bf7\u6c42\u65b9\u6cd5\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"regex_uri"),(0,a.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u5730\u5740\u3002\u4f7f\u7528\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u6765\u81ea\u5ba2\u6237\u7aef\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri"),"\uff0c\u5982\u679c\u5339\u914d\u6210\u529f\uff0c\u5219\u4f7f\u7528\u6a21\u677f\u66ff\u6362\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri"),"\uff0c\u5982\u679c\u6ca1\u6709\u5339\u914d\u6210\u529f\uff0c\u5219\u5c06\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u8f6c\u53d1\u81f3\u4e0a\u6e38\u3002\u5f53\u540c\u65f6\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u548c ",(0,a.kt)("inlineCode",{parentName:"td"},"regex_uri")," \u5c5e\u6027\u65f6\uff0c\u4f18\u5148\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri"),"\u3002\u4f8b\u5982\uff1a",'["^/iresty/(.',(0,a.kt)("em",{parentName:"td"},")/(."),')/(.*)","/$1-$2-$3"]'," \u7b2c\u4e00\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6765\u81ea\u5ba2\u6237\u7aef\u8bf7\u6c42\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u7b2c\u4e8c\u4e2a\u5143\u7d20\u4ee3\u8868\u5339\u914d\u6210\u529f\u540e\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"uri")," \u6a21\u677f\u3002\u4f46\u662f\u76ee\u524d APISIX \u4ec5\u652f\u6301\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"td"},"regex_uri"),"\uff0c\u6240\u4ee5 ",(0,a.kt)("inlineCode",{parentName:"td"},"regex_uri")," \u6570\u7ec4\u7684\u957f\u5ea6\u662f ",(0,a.kt)("inlineCode",{parentName:"td"},"2"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"host"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"host")," \u5730\u5740\uff0c\u4f8b\u5982\uff1a",(0,a.kt)("inlineCode",{parentName:"td"},"iresty.com"),"\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"headers"),(0,a.kt)("td",{parentName:"tr",align:null},"object"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"\u8f6c\u53d1\u5230\u4e0a\u6e38\u7684\u65b0 ",(0,a.kt)("inlineCode",{parentName:"td"},"headers"),"\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\u3002\u5982\u679c header \u5b58\u5728\u5c06\u8fdb\u884c\u91cd\u5199\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u5219\u4f1a\u6dfb\u52a0\u5230 header \u4e2d\u3002\u5982\u679c\u4f60\u60f3\u8981\u5220\u9664\u67d0\u4e2a header\uff0c\u8bf7\u628a\u5bf9\u5e94\u7684\u503c\u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\u5373\u53ef\u3002\u652f\u6301\u4f7f\u7528 NGINX \u7684\u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"td"},"client_addr")," \u548c",(0,a.kt)("inlineCode",{parentName:"td"},"$remote_addr"),"\u3002")))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {\n        "proxy-rewrite": {\n            "uri": "/test/home.html",\n            "host": "iresty.com",\n            "headers": {\n                "X-Api-Version": "v1",\n                "X-Api-Engine": "apisix",\n                "X-Api-useless": ""\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u63d2\u4ef6\u662f\u5426\u542f\u7528\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET http://127.0.0.1:9080/test/index.html\n")),(0,a.kt)("p",null,"\u53d1\u9001\u8bf7\u6c42\uff0c\u67e5\u770b\u4e0a\u6e38\u670d\u52a1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"access.log"),"\uff0c\u5982\u679c\u8f93\u51fa\u4fe1\u606f\u4e0e\u914d\u7f6e\u4e00\u81f4\u5219\u8868\u793a ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u5df2\u7ecf\u751f\u6548\u3002\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"127.0.0.1 - [26/Sep/2019:10:52:20 +0800] iresty.com GET /test/home.html HTTP/1.1 200 38 - curl/7.29.0 - 0.000 199 107\n")),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy-rewrite")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/test/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);