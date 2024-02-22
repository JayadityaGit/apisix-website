"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[61294],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(t),m=l,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},93714:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=t(87462),l=(t(67294),t(3905));const r={title:"wolf-rbac",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","wolf RBAC","wolf-rbac"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `wolf-rbac` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/wolf-rbac",id:"version-3.7/plugins/wolf-rbac",isDocsHomePage:!1,title:"wolf-rbac",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `wolf-rbac` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.7/plugins/wolf-rbac.md",sourceDirName:"plugins",slug:"/plugins/wolf-rbac",permalink:"/zh/docs/apisix/3.7/plugins/wolf-rbac",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.7/docs/zh/latest/plugins/wolf-rbac.md",tags:[],version:"3.7",frontMatter:{title:"wolf-rbac",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","wolf RBAC","wolf-rbac"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `wolf-rbac` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.7/docs",previous:{title:"authz-casdoor",permalink:"/zh/docs/apisix/3.7/plugins/authz-casdoor"},next:{title:"openid-connect",permalink:"/zh/docs/apisix/3.7/plugins/openid-connect"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]},{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],s={toc:o};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," \u63d2\u4ef6\u4e3a ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Role-based_access_control"},"role-based access control")," \u7cfb\u7edf\u63d0\u4f9b\u4e86\u6dfb\u52a0 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf"},"wolf")," \u5230 Route \u6216 Service \u7684\u529f\u80fd\u3002\u6b64\u63d2\u4ef6\u9700\u8981\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.7/terminology/consumer"},"Consumer")," \u4e00\u8d77\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"server"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"',(0,l.kt)("a",{parentName:"td",href:"http://127.0.0.1:12180%22"},'http://127.0.0.1:12180"')),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wolf-server")," \u7684\u670d\u52a1\u5730\u5740\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appid"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"unset"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"td"},"wolf-console")," \u4e2d\u5df2\u7ecf\u6dfb\u52a0\u7684\u5e94\u7528 id\u3002\u8be5\u5b57\u6bb5\u652f\u6301\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/apisix/3.7/terminology/secret"},"APISIX Secret")," \u8d44\u6e90\uff0c\u5c06\u503c\u4fdd\u5b58\u5728 Secret Manager \u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"header_prefix"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"X-"'),(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49 HTTP \u5934\u7684\u524d\u7f00\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"wolf-rbac")," \u5728\u9274\u6743\u6210\u529f\u540e\uff0c\u4f1a\u5728\u8bf7\u6c42\u5934 (\u7528\u4e8e\u4f20\u7ed9\u540e\u7aef) \u53ca\u54cd\u5e94\u5934 (\u7528\u4e8e\u4f20\u7ed9\u524d\u7aef) \u4e2d\u6dfb\u52a0 3 \u4e2a header\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"X-UserId"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"X-Username"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"X-Nickname"),"\u3002")))),(0,l.kt)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u5728\u542f\u7528\u65f6\u5c06\u4f1a\u589e\u52a0\u4ee5\u4e0b\u63a5\u53e3\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/login"),(0,l.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/change_pwd"),(0,l.kt)("li",{parentName:"ul"},"/apisix/plugin/wolf-rbac/user_info")),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u63a5\u53e3\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api")," \u63d2\u4ef6\u66b4\u9732\u3002"))),(0,l.kt)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,l.kt)("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\uff0c\u4f60\u5fc5\u987b\u8981",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/quick-start-with-docker/README.md"},"\u5b89\u88c5 wolf")," \u5e76\u542f\u52a8\u5b83\u3002"),(0,l.kt)("p",null,"\u5b8c\u6210\u540e\uff0c\u4f60\u9700\u8981\u6dfb\u52a0",(0,l.kt)("inlineCode",{parentName:"p"},"application"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"admin"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"regular user"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"permission"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"resource")," \u7b49\u5b57\u6bb5\uff0c\u5e76\u5c06\u7528\u6237\u6388\u6743\u5230 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/iGeeky/wolf/blob/master/docs/usage.md"},"wolf-console"),"\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9996\u5148\u9700\u8981\u521b\u5efa\u4e00\u4e2a Consumer \u5e76\u914d\u7f6e\u8be5\u63d2\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "username":"wolf_rbac",\n  "plugins":{\n    "wolf-rbac":{\n      "server":"http://127.0.0.1:12180",\n      "appid":"restful"\n    }\n  },\n  "desc":"wolf-rbac"\n}\'\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u793a\u4f8b\u4e2d\u586b\u5199\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"appid"),"\uff0c\u5fc5\u987b\u662f\u5df2\u7ecf\u5728 wolf \u63a7\u5236\u53f0\u4e2d\u5b58\u5728\u7684\u3002"))),(0,l.kt)("p",null,"\u7136\u540e\u4f60\u9700\u8981\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," \u63d2\u4ef6\u5230 Route \u6216 Service \u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n        "wolf-rbac": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard")," \u7684 Web \u754c\u9762\u5b8c\u6210\u4e0a\u8ff0\u64cd\u4f5c\u3002"),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/public-api"},"public-api")," \u63d2\u4ef6\u6765\u66b4\u9732 API."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/wal \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/plugin/wolf-rbac/login",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,l.kt)("p",null,"\u540c\u6837\uff0c\u4f60\u9700\u8981\u53c2\u8003\u4e0a\u8ff0\u547d\u4ee4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"change_pwd")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"user_info")," \u4e24\u4e2a API \u914d\u7f6e\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u767b\u5f55\u5e76\u83b7\u53d6 wolf ",(0,l.kt)("inlineCode",{parentName:"p"},"rbac_token"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H "Content-Type: application/json" \\\n-d \'{"appid": "restful", "username":"test", "password":"user-password", "authType":1}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n{"rbac_token":"V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts","user_info":{"nickname":"test","username":"test","id":"749"}}\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4e0a\u8ff0\u793a\u4f8b\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"appid"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"username")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"password")," \u5fc5\u987b\u4e3a wolf \u7cfb\u7edf\u4e2d\u771f\u5b9e\u5b58\u5728\u7684\u3002"),(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"authType")," \u4e3a\u8ba4\u8bc1\u7c7b\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u4e3a\u5bc6\u7801\u8ba4\u8bc1\uff08\u9ed8\u8ba4\uff09\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"2")," \u4e3a LDAP \u8ba4\u8bc1\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"wolf")," \u4ece 0.5.0 \u7248\u672c\u5f00\u59cb\u652f\u6301\u4e86 LDAP \u8ba4\u8bc1\u3002"))),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4f7f\u7528 x-www-form-urlencoded \u65b9\u5f0f\u767b\u9646\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/login -i \\\n-H \"Content-Type: application/x-www-form-urlencoded\" \\\n-d 'appid=restful&username=test&password=user-password'\n")),(0,l.kt)("p",null,"\u73b0\u5728\u5f00\u59cb\u6d4b\u8bd5 Route\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7f3a\u5c11 token")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/ -H"Host: www.baidu.com" -i\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Missing rbac token in request"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230\u8bf7\u6c42\u5934 (Authorization) \u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'Authorization: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230\u8bf7\u6c42\u5934 (x-rbac-token) \u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/ -H\"Host: www.baidu.com\" \\\n-H 'x-rbac-token: V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230\u8bf7\u6c42\u53c2\u6570\u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl 'http://127.0.0.1:9080?rbac_token=V1%23restful%23eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts' -H\"Host: www.baidu.com\" -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"token \u653e\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"cookie")," \u4e2d\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080 -H"Host: www.baidu.com" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n\n<!DOCTYPE html>\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u7528\u6237\u4fe1\u606f\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/user_info \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\n{\n    "user_info":{\n        "nickname":"test",\n        "lastLogin":1582816780,\n        "id":749,\n        "username":"test",\n        "appIDs":["restful"],\n        "manager":"none",\n        "permissions":{"USER_LIST":true},\n        "profile":null,\n        "roles":{},\n        "createTime":1578820506,\n        "email":""\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u66f4\u6539\u7528\u6237\u7684\u5bc6\u7801\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/plugin/wolf-rbac/change_pwd \\\n-H "Content-Type: application/json" \\\n--cookie x-rbac-token=V1#restful#eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQ5LCJ1c2VybmFtZSI6InRlc3QiLCJtYW5hZ2VyIjoiIiwiYXBwaWQiOiJyZXN0ZnVsIiwiaWF0IjoxNTc5NDQ5ODQxLCJleHAiOjE1ODAwNTQ2NDF9.n2-830zbhrEh6OAxn4K_yYtg5pqfmjpZAjoQXgtcuts -i \\\n-X PUT -d \'{"oldPassword": "old password", "newPassword": "new password"}\'\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\n{"message":"success to change password"}\n')),(0,l.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"wolf-rbac")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/*",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "www.baidu.com:80": 1\n        }\n    }\n}\'\n')))}c.isMDXComponent=!0}}]);