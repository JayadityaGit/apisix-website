"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[28380],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>u});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=a.createContext({}),d=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},o=function(e){var n=d(e.components);return a.createElement(m.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),k=d(t),u=l,c=k["".concat(m,".").concat(u)]||k[u]||s[u]||r;return t?a.createElement(c,i(i({ref:n},o),{},{components:t})):a.createElement(c,i({ref:n},o))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=k;var p={};for(var m in n)hasOwnProperty.call(n,m)&&(p[m]=n[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var d=2;d<r;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},52274:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=t(87462),l=(t(67294),t(3905));const r={title:"hmac-auth",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","HMAC Authentication","hmac-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `hmac-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/hmac-auth",id:"version-3.5/plugins/hmac-auth",isDocsHomePage:!1,title:"hmac-auth",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `hmac-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.5/plugins/hmac-auth.md",sourceDirName:"plugins",slug:"/plugins/hmac-auth",permalink:"/zh/docs/apisix/3.5/plugins/hmac-auth",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.5/docs/zh/latest/plugins/hmac-auth.md",tags:[],version:"3.5",frontMatter:{title:"hmac-auth",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","HMAC Authentication","hmac-auth"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `hmac-auth` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.5/docs",previous:{title:"cas-auth",permalink:"/zh/docs/apisix/3.5/plugins/cas-auth"},next:{title:"authz-casbin",permalink:"/zh/docs/apisix/3.5/plugins/authz-casbin"}},m=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u7b7e\u540d\u7b97\u6cd5\u8be6\u89e3",id:"\u7b7e\u540d\u7b97\u6cd5\u8be6\u89e3",children:[{value:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f",id:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f",children:[]},{value:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f\u8fc7\u7a0b\u8be6\u89e3",id:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f\u8fc7\u7a0b\u8be6\u89e3",children:[]},{value:"Body \u6821\u9a8c",id:"body-\u6821\u9a8c",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u81ea\u5b9a\u4e49 header \u540d\u79f0",id:"\u81ea\u5b9a\u4e49-header-\u540d\u79f0",children:[]}]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],d={toc:m};function o(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"hmac-auth")," \u63d2\u4ef6\u53ef\u4ee5\u5c06 ",(0,l.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HMAC"},"HMAC authentication")," \u6dfb\u52a0\u5230 Route \u6216\u8005 Service\u3002"),(0,l.kt)("p",null,"\u8be5\u63d2\u4ef6\u9700\u8981\u548c Consumer \u4e00\u8d77\u4f7f\u7528\uff0cAPI \u7684\u4f7f\u7528\u8005\u5fc5\u987b\u5c06\u5bc6\u5319\u6dfb\u52a0\u5230\u8bf7\u6c42\u5934\u4e2d\u4ee5\u9a8c\u8bc1\u5176\u8bf7\u6c42\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"access_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Consumer \u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"access_key")," \u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002\u5982\u679c\u4e0d\u540c Consumer \u4f7f\u7528\u4e86\u76f8\u540c\u7684 ",(0,l.kt)("inlineCode",{parentName:"td"},"access_key")," \uff0c\u5c06\u4f1a\u51fa\u73b0\u8bf7\u6c42\u5339\u914d\u5f02\u5e38\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"access_key")," \u914d\u5bf9\u4f7f\u7528\u3002\u8be5\u5b57\u6bb5\u652f\u6301\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"td",href:"/zh/docs/apisix/3.5/terminology/secret"},"APISIX Secret")," \u8d44\u6e90\uff0c\u5c06\u503c\u4fdd\u5b58\u5728 Secret Manager \u4e2d\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},'"hmac-sha256"'),(0,l.kt)("td",{parentName:"tr",align:null},'["hmac-sha1", "hmac-sha256", "hmac-sha512"]'),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4ee5\u4f7f\u7528\u7684\u52a0\u5bc6\u7b97\u6cd5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"clock_skew"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b7e\u540d\u5141\u8bb8\u7684\u65f6\u95f4\u504f\u79fb\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002\u6bd4\u5982\u5141\u8bb8\u65f6\u95f4\u504f\u79fb 10 \u79d2\u949f\uff0c\u90a3\u4e48\u5c31\u5e94\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"10"),"\u3002\u5982\u679c\u5c06\u5176\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"0"),"\uff0c\u5219\u8868\u793a\u8868\u793a\u8df3\u8fc7\u65e5\u671f\u68c0\u67e5\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signed_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u8981\u5728\u52a0\u5bc6\u8ba1\u7b97\u4e2d\u4f7f\u7528\u7684 headers \u5217\u8868\u3002\u6307\u5b9a\u540e\u5ba2\u6237\u7aef\u8bf7\u6c42\u53ea\u80fd\u5728\u6b64\u8303\u56f4\u5185\u6307\u5b9a headers\uff0c\u5982\u679c\u672a\u6307\u5b9a\uff0c\u5c31\u4f1a\u5728\u6240\u6709\u5ba2\u6237\u7aef\u8bf7\u6c42\u6307\u5b9a\u7684 headers \u52a0\u5165\u52a0\u5bc6\u8ba1\u7b97\u3002\u5982\uff1a ",'["User-Agent", "Accept-Language", "x-custom-a"]',"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keep_headers"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u8ba4\u8bc1\u6210\u529f\u540e\u7684 HTTP \u8bf7\u6c42\u4e2d\u5219\u4f1a\u4fdd\u7559 ",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNATURE"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-ALGORITHM")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"X-HMAC-SIGNED-HEADERS")," \u7684\u8bf7\u6c42\u5934\u3002\u5426\u5219\u5c06\u79fb\u9664 HTTP \u8bf7\u6c42\u5934\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encode_uri_params"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5bf9\u7b7e\u540d\u4e2d\u7684 URI \u53c2\u6570\u8fdb\u884c\u7f16\u7801\u3002\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"params1=hello%2Cworld")," \u8fdb\u884c\u4e86\u7f16\u7801\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"params2=hello,world")," \u6ca1\u6709\u8fdb\u884c\u7f16\u7801\u3002\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," \u65f6\u5219\u4e0d\u5bf9\u7b7e\u540d\u4e2d\u7684 URI \u53c2\u6570\u7f16\u7801\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validate_request_body"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"[ true, false ]"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5bf9\u8bf7\u6c42 body \u505a\u7b7e\u540d\u6821\u9a8c\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max_req_body"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"512 * 1024"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u5141\u8bb8\u7684 body \u5927\u5c0f\u3002")))),(0,l.kt)("p",null,"\u6ce8\u610f\uff1aschema \u4e2d\u8fd8\u5b9a\u4e49\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"secret_key"}'),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5b57\u6bb5\u5c06\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u5177\u4f53\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.5/plugin-develop#%E5%8A%A0%E5%AF%86%E5%AD%98%E5%82%A8%E5%AD%97%E6%AE%B5"},"\u52a0\u5bc6\u5b58\u50a8\u5b57\u6bb5"),"\u3002"),(0,l.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u5728 Consumer \u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "hmac-auth": {\n            "access_key": "user-key",\n            "secret_key": "my-secret-key",\n            "clock_skew": 0,\n            "signed_headers": ["User-Agent", "Accept-Language", "x-custom-a"]\n        }\n    }\n}\'\n')),(0,l.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5728 Route \u6216 Service \u4e2d\u542f\u7528\u63d2\u4ef6\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "hmac-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,l.kt)("h2",{id:"\u7b7e\u540d\u7b97\u6cd5\u8be6\u89e3"},"\u7b7e\u540d\u7b97\u6cd5\u8be6\u89e3"),(0,l.kt)("h3",{id:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f"},"\u7b7e\u540d\u751f\u6210\u516c\u5f0f"),(0,l.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-auth")," \u63d2\u4ef6\u65f6\uff0c\u4f1a\u6d89\u53ca\u5230\u7b7e\u540d\u3002\u7b7e\u540d\u7684\u8ba1\u7b97\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"signature = HMAC-SHAx-HEX(secret_key, signing_string)"),"\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u751f\u6210\u7b7e\u540d\u9700\u8981\u4e24\u4e2a\u53c2\u6570\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"secret_key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string"),"\u3002\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"secret_key")," \u7531\u5bf9\u5e94 Consumer \u914d\u7f6e\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," \u7684\u8ba1\u7b97\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string = HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date + \\n + signed_headers_string"),"\u3002\u4ee5\u4e0b\u662f\u5bf9\u8ba1\u7b97\u516c\u5f0f\u4e2d\u5404\u4e2a\u5b57\u6bb5\u7684\u91ca\u4e49\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"HTTP Method"),"\uff1a\u6307 HTTP \u534f\u8bae\u4e2d\u5b9a\u4e49\u7684 GET\u3001PUT\u3001POST \u7b49\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5fc5\u987b\u4f7f\u7528\u5168\u5927\u5199\u7684\u5f62\u5f0f\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"HTTP URI"),"\uff1aHTTP URI\u3002\u5fc5\u987b\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"/")," \u5f00\u5934\uff0c",(0,l.kt)("inlineCode",{parentName:"li"},"/")," \u8868\u793a\u7a7a\u8def\u5f84\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Date"),"\uff1a\u8bf7\u6c42\u5934\u4e2d\u7684\u65e5\u671f\uff08GMT \u683c\u5f0f\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"canonical_query_string"),"\uff1a\u5bf9 URL \u4e2d\u7684 query\uff08query \u5373 URL \u4e2d ",(0,l.kt)("inlineCode",{parentName:"li"},"?")," \u540e\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"key1=valve1&key2=valve2")," \u5b57\u7b26\u4e32\uff09\u8fdb\u884c\u7f16\u7801\u540e\u7684\u7ed3\u679c\u3002"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"signed_headers_string"),"\uff1a\u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u5ba2\u6237\u7aef\u6307\u5b9a\u7684\u5b57\u6bb5\uff0c\u5e76\u6309\u987a\u5e8f\u62fc\u63a5\u5b57\u7b26\u4e32\u7684\u7ed3\u679c\u3002")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," \u4e2d\u7684\u4efb\u610f\u4e00\u9879\u4e0d\u5b58\u5728\uff0c\u5219\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u4ee3\u66ff\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7531\u4e8e\u7b7e\u540d\u8ba1\u7b97\u65f6\uff0c\u4f1a\u533a\u5206\u5927\u5c0f\u5199\u5b57\u6bcd\uff0c\u5728\u4f7f\u7528\u65f6\uff0c\u8bf7\u89c4\u8303\u5176\u53c2\u6570\u547d\u540d\u3002"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"strong"},"canonical_query_string")," \u7684\u7b97\u6cd5\u63cf\u8ff0\u5982\u4e0b\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u53d6 URL \u4e2d\u7684 query \u9879\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"&")," \u4f5c\u4e3a\u5206\u9694\u7b26\uff0c\u5c06 query \u62c6\u5206\u6210\u952e\u503c\u5bf9\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"encode_uri_params")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8be5\u9879\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},'url_encode(key) + "="'),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8be5\u9879\u540c\u65f6\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},'url_encode(key) + "=" + url_encode(value)')," \u3002\u6b64\u5904 ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u53ef\u4ee5\u662f\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6bcf\u4e00\u9879\u8f6c\u6362\u540e\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u6309\u7167\u5b57\u5178\u987a\u5e8f\uff08ASCII \u7801\u7531\u5c0f\u5230\u5927\uff09\u6392\u5e8f\uff0c\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"&")," \u7b26\u53f7\u8fde\u63a5\u8d77\u6765\uff0c\u751f\u6210\u76f8\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"canonical_query_string")," \u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c ",(0,l.kt)("inlineCode",{parentName:"p"},"encode_uri_params")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"false")," \u65f6\uff1a"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8be5\u9879\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},'key + "="')," \u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u8be5\u9879\u540c\u65f6\u6709 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u65f6\uff0c\u8f6c\u6362\u516c\u5f0f\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},'key + "=" + value')," \u3002\u6b64\u5904 ",(0,l.kt)("inlineCode",{parentName:"li"},"value")," \u53ef\u4ee5\u662f\u7a7a\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6bcf\u4e00\u9879\u8f6c\u6362\u540e\uff0c\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u6309\u7167\u5b57\u5178\u987a\u5e8f\uff08ASCII \u7801\u7531\u5c0f\u5230\u5927\uff09\u6392\u5e8f\uff0c\u5e76\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"&")," \u7b26\u53f7\u8fde\u63a5\u8d77\u6765\uff0c\u751f\u6210\u76f8\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"li"},"canonical_query_string"),"\u3002")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u751f\u6210 ",(0,l.kt)("inlineCode",{parentName:"strong"},"signed_headers_string")," \u7684\u7b97\u6cd5\u5982\u4e0b\uff1a")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u6307\u5b9a\u7684 headers \u52a0\u5165\u8ba1\u7b97\u4e2d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u8bf7\u6c42\u5934\u4e2d\u6309\u987a\u5e8f\u53d6\u51fa ",(0,l.kt)("inlineCode",{parentName:"li"},"SIGNED_HEADERS")," \u6307\u5b9a\u7684 headers\uff0c\u5e76\u6309\u987a\u5e8f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"name:value")," \u65b9\u5f0f\u62fc\u63a5\u8d77\u6765\uff0c\u62fc\u63a5\u5b8c\u540e\u5c31\u751f\u6210\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"signed_headers_string"),"\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'HeaderKey1 + ":" + HeaderValue1 + "\\n"\\+\nHeaderKey2 + ":" + HeaderValue2 + "\\n"\\+\n...\nHeaderKeyN + ":" + HeaderValueN + "\\n"\n')),(0,l.kt)("h3",{id:"\u7b7e\u540d\u751f\u6210\u516c\u5f0f\u8fc7\u7a0b\u8be6\u89e3"},"\u7b7e\u540d\u751f\u6210\u516c\u5f0f\u8fc7\u7a0b\u8be6\u89e3"),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4ee5\u4e0b\u8ff0\u8bf7\u6c42\u4e3a\u4f8b\uff0c\u4e3a\u4f60\u4ecb\u7ecd\u7b7e\u540d\u751f\u6210\u516c\u5f0f\u7684\u5177\u4f53\u8ba1\u7b97\u8fc7\u7a0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/index.html?name=james&age=36 \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n')),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e0a\u6587\u8bf7\u6c42\u9ed8\u8ba4\u7684 HTTP Method \u662f GET\uff0c\u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"signing_string")," \u4e3a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET"\n')),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u7684 URI \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"/index.html"),"\uff0c\u6839\u636e HTTP Method + \\n + HTTP URI \u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"signing_string")," \u4e3a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html"\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"URL \u4e2d\u7684 query \u9879\u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"name=james&age=36"),"\uff0c\u5047\u8bbe ",(0,l.kt)("inlineCode",{parentName:"li"},"encode_uri_params")," \u4e3a false\uff0c\u6839\u636e ",(0,l.kt)("inlineCode",{parentName:"li"},"canonical_query_string")," \u7684\u7b97\u6cd5\uff0c\u91cd\u70b9\u662f\u5bf9 ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," \u8fdb\u884c\u5b57\u5178\u6392\u5e8f\uff0c\u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"age=36&name=james"),"\uff1b\u6839\u636e HTTP Method + \\n + HTTP URI + \\n + canonical_query_string \u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"signing_string")," \u4e3a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james"\n')),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"access_key \u662f ",(0,l.kt)("inlineCode",{parentName:"li"},"user-key"),"\uff0c\u6839\u636e HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key \u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"signing_string")," \u4e3a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key"\n')),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"Date \u662f\u6307 GMT \u683c\u5f0f\u7684\u65e5\u671f\uff0c\u5f62\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"Tue, 19 Jan 2021 11:33:20 GMT"),", \u6839\u636e HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date \u5f97\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"signing_string")," \u4e3a\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT"\n')),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"signed_headers_string")," \u7528\u6765\u5236\u5b9a\u53c2\u4e0e\u5230\u7b7e\u540d\u7684 headers\uff0c\u5728\u4e0a\u9762\u793a\u4f8b\u4e2d\u5305\u62ec ",(0,l.kt)("inlineCode",{parentName:"li"},"User-Agent: curl/7.29.0")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"x-custom-a: test"),"\u3002")),(0,l.kt)("p",null,"\u6839\u636e HTTP Method + \\n + HTTP URI + \\n + canonical_query_string + \\n + access_key + \\n + Date + \\n + signed_headers_string + ",(0,l.kt)("inlineCode",{parentName:"p"},"\\n"),"\uff0c\u5f97\u5230\u5b8c\u6574\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"signing_string")," \u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plain"},'"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n"\n')),(0,l.kt)("h3",{id:"body-\u6821\u9a8c"},"Body \u6821\u9a8c"),(0,l.kt)("p",null,"\u5f53 ",(0,l.kt)("inlineCode",{parentName:"p"},"validate_request_body")," \u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u63d2\u4ef6\u5c06\u8ba1\u7b97\u8bf7\u6c42 body \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-sha")," \u503c\uff0c\u5e76\u4e0e\u8bf7\u6c42 headers \u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-HMAC-DIGEST")," \u7684\u503c\u8fdb\u884c\u6821\u9a8c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"X-HMAC-DIGEST: base64(hmac-sha(<body>))\n")),(0,l.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u8bf7\u6c42 body\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"X-HMAC-DIGEST")," \u7684\u503c\u8bbe\u7f6e\u4e3a\u7a7a\u5b57\u7b26\u4e32\u7684 HMAC-SHA\u3002"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5f53\u5f00\u542f body \u6821\u9a8c\u65f6\uff0c\u4e3a\u4e86\u8ba1\u7b97\u8bf7\u6c42 body \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-sha")," \u503c\uff0c\u8be5\u63d2\u4ef6\u4f1a\u628a body \u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\uff0c\u5728\u8bf7\u6c42 body \u8f83\u5927\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u8f83\u9ad8\u7684\u5185\u5b58\u6d88\u8017\u3002"),(0,l.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u907f\u514d\u8fd9\u79cd\u60c5\u51b5\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"max_req_body"),"\uff08\u9ed8\u8ba4\u503c\u662f 512KB\uff09\u914d\u7f6e\u9879\u6765\u914d\u7f6e\u6700\u5927\u5141\u8bb8\u7684 body \u5927\u5c0f\uff0cbody \u8d85\u8fc7\u6b64\u5927\u5c0f\u7684\u8bf7\u6c42\u4f1a\u88ab\u62d2\u7edd\u3002"))),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5047\u8bbe\u5f53\u524d\u8bf7\u6c42\u4e3a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9080/index.html?name=james&age=36 \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n')),(0,l.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b Python \u4ee3\u7801\u4e3a\u4e0a\u8ff0\u8bf7\u6c42\u751f\u6210\u7b7e\u540d ",(0,l.kt)("inlineCode",{parentName:"p"},"SIGNATURE"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import base64\nimport hashlib\nimport hmac\n\nsecret = bytes('my-secret-key', 'utf-8')\nmessage = bytes(\"\"\"GET\n/index.html\nage=36&name=james\nuser-key\nTue, 19 Jan 2021 11:33:20 GMT\nUser-Agent:curl/7.29.0\nx-custom-a:test\n\"\"\", 'utf-8')\n\nhash = hmac.new(secret, message, hashlib.sha256)\n\n# to lowercase base64\nprint(base64.b64encode(hash.digest()))\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Hash"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SIGNATURE"),(0,l.kt)("td",{parentName:"tr",align:null},"8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=")))),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/examples/plugins-hmac-auth-generate-signature"},"Generating HMAC signatures")," \u4e86\u89e3\u5982\u4f55\u4f7f\u7528\u4e0d\u540c\u7684\u7f16\u7a0b\u8bed\u8a00\u751f\u6210\u7b7e\u540d\u3002"),(0,l.kt)("p",null,"\u7b7e\u540d\u751f\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u793a\u4f8b\u4f7f\u7528\u751f\u6210\u7684\u7b7e\u540d\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9080/index.html?name=james&age=36" \\\n-H "X-HMAC-SIGNATURE: 8XV1GB7Tq23OJcoz6wjqTs4ZLxr9DiLoY4PxzScWGYg=" \\\n-H "X-HMAC-ALGORITHM: hmac-sha256" \\\n-H "X-HMAC-ACCESS-KEY: user-key" \\\n-H "Date: Tue, 19 Jan 2021 11:33:20 GMT" \\\n-H "X-HMAC-SIGNED-HEADERS: User-Agent;x-custom-a" \\\n-H "x-custom-a: test" \\\n-H "User-Agent: curl/7.29.0"\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: text/html; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Tue, 19 Jan 2021 11:33:20 GMT\nServer: APISIX/2.2\n......\n")),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u5c06\u7b7e\u540d\u653e\u5230\u8bf7\u6c42\u5934 ",(0,l.kt)("inlineCode",{parentName:"p"},"Authorization")," \u5b57\u6bb5\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html \\\n-H 'Authorization: hmac-auth-v1# + ACCESS_KEY + # + base64_encode(SIGNATURE) + # + ALGORITHM + # + DATE + # + SIGNED_HEADERS' -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u5c06\u7b7e\u540d\u5355\u72ec\u653e\u5728\u53e6\u4e00\u4e2a\u8bf7\u6c42\u5934\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html \\\n-H 'X-HMAC-SIGNATURE: base64_encode(SIGNATURE)' \\\n-H 'X-HMAC-ALGORITHM: ALGORITHM' \\\n-H 'Date: DATE' \\\n-H 'X-HMAC-ACCESS-KEY: ACCESS_KEY' \\\n-H 'X-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n')),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol"},"ACCESS_KEY\u3001SIGNATURE\u3001ALGORITHM\u3001DATE\u3001SIGNED_HEADERS \u5206\u522b\u4ee3\u8868\u5bf9\u5e94\u7684\u53d8\u91cf\u3002"),(0,l.kt)("li",{parentName:"ol"},"SIGNED_HEADERS \u4e3a\u5ba2\u6237\u7aef\u6307\u5b9a\u7684\u52a0\u5165\u52a0\u5bc6\u8ba1\u7b97\u7684 headers\u3002\u82e5\u5b58\u5728\u591a\u4e2a headers \u9700\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"li"},";")," \u5206\u5272\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"x-custom-header-a;x-custom-header-b"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"SIGNATURE \u9700\u8981\u4f7f\u7528 base64 \u8fdb\u884c\u52a0\u5bc6\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"base64_encode(SIGNATURE)"),"\u3002")))),(0,l.kt)("h3",{id:"\u81ea\u5b9a\u4e49-header-\u540d\u79f0"},"\u81ea\u5b9a\u4e49 header \u540d\u79f0"),(0,l.kt)("p",null,"\u9664\u4e86\u914d\u7f6e\u7b7e\u540d\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\uff08",(0,l.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"\uff09\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"plugin_attr")," \u914d\u7f6e\u9879\u4e0b\uff0c\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"hmac-auth")," \u63d2\u4ef6\u7684\u5c5e\u6027\u6765\u81ea\u5b9a\u4e49\u53c2\u6570 header \u540d\u79f0\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugin_attr:\n  hmac-auth:\n    signature_key: X-APISIX-HMAC-SIGNATURE\n    algorithm_key: X-APISIX-HMAC-ALGORITHM\n    date_key: X-APISIX-DATE\n    access_key: X-APISIX-HMAC-ACCESS-KEY\n    signed_headers_key: X-APISIX-HMAC-SIGNED-HEADERS\n    body_digest_key: X-APISIX-HMAC-BODY-DIGEST\n")),(0,l.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684 header \u53d1\u8d77\u8bf7\u6c42\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html \\\n-H 'X-APISIX-HMAC-SIGNATURE: base64_encode(SIGNATURE)' \\\n-H 'X-APISIX-HMAC-ALGORITHM: ALGORITHM' \\\n-H 'X-APISIX-DATE: DATE' \\\n-H 'X-APISIX-HMAC-ACCESS-KEY: ACCESS_KEY' \\\n-H 'X-APISIX-HMAC-SIGNED-HEADERS: SIGNED_HEADERS' \\\n-H 'X-APISIX-HMAC-BODY-DIGEST: BODY_DIGEST' -i\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n')),(0,l.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}o.isMDXComponent=!0}}]);