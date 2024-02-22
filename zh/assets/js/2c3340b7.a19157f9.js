"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[81992],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,d=u["".concat(c,".").concat(h)]||u[h]||m[h]||p;return n?a.createElement(d,i(i({ref:t},o),{},{components:n})):a.createElement(d,i({ref:t},o))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,i=new Array(p);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<p;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30062:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const p={title:"\u538b\u529b\u6d4b\u8bd5"},i=void 0,s={unversionedId:"benchmark",id:"version-3.8/benchmark",isDocsHomePage:!1,title:"\u538b\u529b\u6d4b\u8bd5",description:"\u4f7f\u7528\u8c37\u6b4c\u4e91\u7684\u670d\u52a1\u5668\u8fdb\u884c\u6d4b\u8bd5\uff0c\u578b\u53f7\u4e3a n1-highcpu-8 (8 vCPUs, 7.2 GB memory)",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/benchmark.md",sourceDirName:".",slug:"/benchmark",permalink:"/zh/docs/apisix/benchmark",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/benchmark.md",tags:[],version:"3.8",frontMatter:{title:"\u538b\u529b\u6d4b\u8bd5"},sidebar:"version-3.8/docs",previous:{title:"\u6279\u5904\u7406\u5668",permalink:"/zh/docs/apisix/batch-processor"},next:{title:"\u5b89\u88c5\u4f9d\u8d56",permalink:"/zh/docs/apisix/install-dependencies"}},c=[{value:"\u6d4b\u8bd5\u73af\u5883",id:"\u6d4b\u8bd5\u73af\u5883",children:[]},{value:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406",id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406",children:[]},{value:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f 2 \u4e2a\u63d2\u4ef6",id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\u5f00\u542f-2-\u4e2a\u63d2\u4ef6",children:[]}],l={toc:c};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u73af\u5883"},"\u6d4b\u8bd5\u73af\u5883"),(0,r.kt)("p",null,"\u4f7f\u7528\u8c37\u6b4c\u4e91\u7684\u670d\u52a1\u5668\u8fdb\u884c\u6d4b\u8bd5\uff0c\u578b\u53f7\u4e3a n1-highcpu-8 (8 vCPUs, 7.2 GB memory)"),(0,r.kt)("p",null,"\u6211\u4eec\u6700\u591a\u53ea\u4f7f\u7528 4 \u6838\u53bb\u8fd0\u884c APISIX\uff0c\u5269\u4e0b\u7684 4 \u6838\u7528\u4e8e\u7cfb\u7edf\u548c\u538b\u529b\u6d4b\u8bd5\u5de5\u5177 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wg/wrk"},"wrk"),"\u3002"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406"},"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406"),(0,r.kt)("p",null,"\u6211\u4eec\u628a APISIX \u5f53\u505a\u53cd\u5411\u4ee3\u7406\u6765\u4f7f\u7528\uff0c\u4e0d\u5f00\u542f\u4efb\u4f55\u63d2\u4ef6\uff0c\u54cd\u5e94\u4f53\u7684\u5927\u5c0f\u4e3a 1KB\u3002"),(0,r.kt)("h4",{id:"qps"},"QPS"),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e2d x \u8f74\u4e3a CPU \u7684\u4f7f\u7528\u4e2a\u6570\uff0cy \u8f74\u4e3a\u6bcf\u79d2\u5904\u7406\u7684\u8bf7\u6c42\u6570\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/benchmark-1.jpg",alt:"benchmark-1"})),(0,r.kt)("h4",{id:"\u5ef6\u65f6"},"\u5ef6\u65f6"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f y \u8f74\u5ef6\u65f6\u7684\u5355\u4f4d\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5fae\u79d2\uff08\u03bcs\uff09"),"\uff0c\u800c\u4e0d\u662f\u6beb\u79d2\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/latency-1.jpg",alt:"latency-1"})),(0,r.kt)("h4",{id:"\u706b\u7130\u56fe"},"\u706b\u7130\u56fe"),(0,r.kt)("p",null,"\u706b\u7130\u56fe\u7684\u91c7\u6837\u7ed3\u679c\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/flamegraph-1.jpg",alt:"flamegraph-1"})),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728\u672c\u5730\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u57fa\u51c6\u6d4b\u8bd5\uff0c\u4f60\u9700\u8981\u540c\u65f6\u8fd0\u884c\u53e6\u4e00\u4e2a NGINX \u5b9e\u4f8b\u6765\u76d1\u542c 80 \u7aef\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1,\n            "127.0.0.2:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u5b8c\u6210\u914d\u7f6e\u5e76\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wg/wrk/"},"wrk")," \u4e4b\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wrk -d 60 --latency http://127.0.0.1:9080/hello\n")),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\u5f00\u542f-2-\u4e2a\u63d2\u4ef6"},"\u6d4b\u8bd5\u53cd\u5411\u4ee3\u7406\uff0c\u5f00\u542f 2 \u4e2a\u63d2\u4ef6"),(0,r.kt)("p",null,"\u6211\u4eec\u628a APISIX \u5f53\u505a\u53cd\u5411\u4ee3\u7406\u6765\u4f7f\u7528\uff0c\u5f00\u542f\u9650\u901f\u548c prometheus \u63d2\u4ef6\uff0c\u54cd\u5e94\u4f53\u7684\u5927\u5c0f\u4e3a 1KB\u3002"),(0,r.kt)("h4",{id:"qps-1"},"QPS"),(0,r.kt)("p",null,"\u4e0b\u56fe\u4e2d x \u8f74\u4e3a CPU \u7684\u4f7f\u7528\u4e2a\u6570\uff0cy \u8f74\u4e3a\u6bcf\u79d2\u5904\u7406\u7684\u8bf7\u6c42\u6570\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/benchmark-2.jpg",alt:"benchmark-2"})),(0,r.kt)("h4",{id:"latency"},"Latency"),(0,r.kt)("p",null,"\u8bf7\u6ce8\u610f y \u8f74\u5ef6\u65f6\u7684\u5355\u4f4d\u662f",(0,r.kt)("strong",{parentName:"p"},"\u5fae\u79d2\uff08\u03bcs\uff09"),"\uff0c\u800c\u4e0d\u662f\u6beb\u79d2\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/latency-2.jpg",alt:"latency-2"})),(0,r.kt)("h4",{id:"\u706b\u7130\u56fe-1"},"\u706b\u7130\u56fe"),(0,r.kt)("p",null,"\u706b\u7130\u56fe\u7684\u91c7\u6837\u7ed3\u679c\uff1a\n",(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/flamegraph-2.jpg",alt:"\u706b\u7130\u56fe\u91c7\u6837\u7ed3\u679c"})),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u5728\u672c\u5730\u670d\u52a1\u5668\u4e0a\u8fd0\u884c\u57fa\u51c6\u6d4b\u8bd5\uff0c\u4f60\u9700\u8981\u540c\u65f6\u8fd0\u884c\u53e6\u4e00\u4e2a NGINX \u5b9e\u4f8b\u6765\u76d1\u542c 80 \u7aef\u53e3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "limit-count": {\n            "count": 999999999,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus":{}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:80": 1,\n            "127.0.0.2:80": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u5b8c\u6210\u914d\u7f6e\u5e76\u5b89\u88c5 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wg/wrk/"},"wrk")," \u4e4b\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wrk -d 60 --latency http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",null,"\u6709\u5173\u5982\u4f55\u8fd0\u884c\u57fa\u51c6\u6d4b\u8bd5\u7684\u66f4\u591a\u53c2\u8003\uff0c\u4f60\u53ef\u4ee5\u67e5\u770b\u6b64",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/6136"},"PR"),"\u548c\u6b64",(0,r.kt)("a",{parentName:"p",href:"https://gist.github.com/membphis/137db97a4bf64d3653aa42f3e016bd01"},"\u811a\u672c"),"\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u60f3\u6d4b\u8bd5\u5927\u91cf\u8fde\u63a5\u7684\u57fa\u51c6\u6d4b\u8bd5\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u66f4\u65b0 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L242"},(0,r.kt)("inlineCode",{parentName:"a"},"./conf/config-default.yaml"))," \u4e2d\u7684 ",(0,r.kt)("strong",{parentName:"p"},"keepalive")," \u914d\u7f6e\u9879\uff0c\u5426\u5219\u8d85\u8fc7\u914d\u7f6e\u6570\u91cf\u7684\u8fde\u63a5\u5c06\u6210\u4e3a\u77ed\u8fde\u63a5\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fd0\u884c\u5927\u91cf\u8fde\u63a5\u7684\u57fa\u51c6\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wrk -t200 -c5000 -d30s http://127.0.0.1:9080/hello\n")),(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u4f60\u9700\u8981\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_upstream_module.html"},"ngx_http_upstream_module"),"\u3002"))))}o.isMDXComponent=!0}}]);