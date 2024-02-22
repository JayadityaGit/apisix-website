"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47044],{3905:(t,e,n)=>{n.d(e,{Zo:()=>k,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},k=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),s=d(n),m=r,u=s["".concat(o,".").concat(m)]||s[m]||g[m]||l;return n?a.createElement(u,i(i({ref:e},k),{},{components:n})):a.createElement(u,i({ref:e},k))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},89755:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"skywalking-logger",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","SkyWalking"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 skywalking-logger \u63d2\u4ef6\u5c06\u65e5\u5fd7\u6570\u636e\u63a8\u9001\u5230 SkyWalking OAP \u670d\u52a1\u5668\u3002"},i=void 0,p={unversionedId:"plugins/skywalking-logger",id:"plugins/skywalking-logger",isDocsHomePage:!1,title:"skywalking-logger",description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 skywalking-logger \u63d2\u4ef6\u5c06\u65e5\u5fd7\u6570\u636e\u63a8\u9001\u5230 SkyWalking OAP \u670d\u52a1\u5668\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/skywalking-logger.md",sourceDirName:"plugins",slug:"/plugins/skywalking-logger",permalink:"/zh/docs/apisix/next/plugins/skywalking-logger",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/skywalking-logger.md",tags:[],version:"current",frontMatter:{title:"skywalking-logger",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","SkyWalking"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd API \u7f51\u5173 Apache APISIX \u5982\u4f55\u901a\u8fc7 skywalking-logger \u63d2\u4ef6\u5c06\u65e5\u5fd7\u6570\u636e\u63a8\u9001\u5230 SkyWalking OAP \u670d\u52a1\u5668\u3002"},sidebar:"docs",previous:{title:"http-logger",permalink:"/zh/docs/apisix/next/plugins/http-logger"},next:{title:"tcp-logger",permalink:"/zh/docs/apisix/next/plugins/tcp-logger"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[{value:"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]}]},{value:"\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e",id:"\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u5220\u9664\u63d2\u4ef6",id:"\u5220\u9664\u63d2\u4ef6",children:[]}],d={toc:o};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"skywalking-logger")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u5c06 APISIX \u7684\u8bbf\u95ee\u65e5\u5fd7\u6570\u636e\u63a8\u9001\u5230 SkyWalking OAP \u670d\u52a1\u5668\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u4e0a\u4e0b\u6587\u4e2d\u5b58\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"tracing context"),"\uff0c\u63d2\u4ef6\u4f1a\u81ea\u52a8\u5efa\u7acb ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," \u4e0e\u65e5\u5fd7\u7684\u5173\u8054\uff0c\u8be5\u529f\u80fd\u4f9d\u8d56\u4e8e ",(0,r.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/docs/main/next/en/api/x-process-propagation-headers-v3/"},"SkyWalking Cross Process Propagation Headers Protocol"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u4e5f\u63d0\u4f9b\u4e86\u5c06\u8bbf\u95ee\u65e5\u5fd7\u4f5c\u4e3a JSON \u5bf9\u8c61\u53d1\u9001\u5230 SkyWalking OAP \u670d\u52a1\u5668\u7684\u80fd\u529b\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SkyWalking OAP \u670d\u52a1\u5668\u7684 URI\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"APISIX"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SkyWalking \u670d\u52a1\u540d\u79f0\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service_instance_name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"APISIX Instance Name"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"SkyWalking \u670d\u52a1\u7684\u5b9e\u4f8b\u540d\u79f0\u3002\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"$hostname"),"\u4f1a\u76f4\u63a5\u83b7\u53d6\u672c\u5730\u4e3b\u673a\u540d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/next/apisix-variable"},"APISIX \u53d8\u91cf")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"NGINX \u5185\u7f6e\u53d8\u91cf"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8bf7\u6c42\u540e\u4fdd\u6301\u8fde\u63a5\u6d3b\u52a8\u7684\u65f6\u95f4\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},'"skywalking logger"'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6 logger \u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002\u5982\u679c\u60a8\u4f7f\u7528 Prometheus \u76d1\u89c6 APISIX \u6307\u6807\uff0c\u540d\u79f0\u5c06\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"apisix_batch_process_entries")," \u5bfc\u51fa\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u8bf7\u6c42\u6b63\u6587\u5305\u542b\u5728\u65e5\u5fd7\u4e2d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"include_req_body")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u7684\u8fc7\u6ee4\u5668\u3002\u53ea\u6709\u5f53\u6b64\u5904\u8bbe\u7f6e\u7684\u8868\u8fbe\u5f0f\u6c42\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u624d\u4f1a\u8bb0\u5f55\u8bf7\u6c42\u4f53\u3002\u6709\u5173\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," \u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5305\u542b\u54cd\u5e94\u4f53\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53 ",(0,r.kt)("inlineCode",{parentName:"td"},"include_resp_body")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u8fdb\u884c\u8fc7\u6ee4\u54cd\u5e94\u4f53\uff0c\u5e76\u4e14\u53ea\u6709\u5f53\u6b64\u5904\u8bbe\u7f6e\u7684\u8868\u8fbe\u5f0f\u8ba1\u7b97\u7ed3\u679c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u624d\u4f1a\u8bb0\u5f55\u54cd\u5e94\u4f53\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr"),"\u3002")))),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7/\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor"),"\u3002"),(0,r.kt)("h3",{id:"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u9ed8\u8ba4\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' {\n    "serviceInstance": "APISIX Instance Name",\n    "body": {\n      "json": {\n        "json": "body-json"\n      }\n    },\n    "endpoint": "/opentracing",\n    "service": "APISIX"\n  }\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e body-json \u6570\u636e\uff0c\u5b83\u662f\u4e00\u4e2a\u8f6c\u4e49\u540e\u7684 json \u5b57\u7b26\u4e32\uff0c\u683c\u5f0f\u5316\u540e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "response": {\n      "status": 200,\n      "headers": {\n        "server": "APISIX/3.7.0",\n        "content-type": "text/plain",\n        "transfer-encoding": "chunked",\n        "connection": "close"\n      },\n      "size": 136\n    },\n    "route_id": "1",\n    "upstream": "127.0.0.1:1982",\n    "upstream_latency": 8,\n    "apisix_latency": 101.00020599365,\n    "client_ip": "127.0.0.1",\n    "service_id": "",\n    "server": {\n      "hostname": "localhost",\n      "version": "3.7.0"\n    },\n    "start_time": 1704429712768,\n    "latency": 109.00020599365,\n    "request": {\n      "headers": {\n        "content-length": "9",\n        "host": "localhost",\n        "connection": "close"\n      },\n      "method": "POST",\n      "body": "body-data",\n      "size": 94,\n      "querystring": {},\n      "url": "http://localhost:1984/opentracing",\n      "uri": "/opentracing"\n    }\n  }\n')),(0,r.kt)("h2",{id:"\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e"},"\u914d\u7f6e\u63d2\u4ef6\u5143\u6570\u636e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"skywalking-logger")," \u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u65e5\u5fd7\u683c\u5f0f\uff0c\u4e0e ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/plugins/http-logger"},"http-logger")," \u63d2\u4ef6\u7c7b\u4f3c\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/next/apisix-variable"},"APISIX")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"NGINX")," \u53d8\u91cf\u3002")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u91cd\u8981")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8be5\u914d\u7f6e\u5168\u5c40\u751f\u6548\u3002\u5982\u679c\u4f60\u6307\u5b9a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"log_format"),"\uff0c\u8be5\u914d\u7f6e\u5c31\u4f1a\u5bf9\u6240\u6709\u7ed1\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"skywalking-logger")," \u7684\u8def\u7531\u6216\u670d\u52a1\u751f\u6548\u3002"))),(0,r.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7 Admin API \u8fdb\u884c\u63d2\u4ef6\u5143\u6570\u636e\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/skywalking-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"\u914d\u7f6e\u6210\u529f\u540e\uff0c\u5c06\u5f97\u5230\u5982\u4e0b\u65e5\u5fd7\u683c\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5b8c\u6210 SkyWalking OAP \u914d\u7f6e\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5728\u8def\u7531\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "skywalking-logger": {\n                "endpoint_addr": "http://127.0.0.1:12800"\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u73b0\u5728\u4f60\u53ef\u4ee5\u5411 APISIX \u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"\u5b8c\u6210\u4e0a\u8ff0\u6b65\u9aa4\u540e\uff0c\u4f60\u53ef\u4ee5\u5728 SkyWalking UI \u67e5\u770b\u5230\u76f8\u5173\u65e5\u5fd7\u3002"),(0,r.kt)("h2",{id:"\u5220\u9664\u63d2\u4ef6"},"\u5220\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u5220\u9664\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}k.isMDXComponent=!0}}]);