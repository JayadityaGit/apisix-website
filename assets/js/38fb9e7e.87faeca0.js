"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[87747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88107:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Route",keywords:["API Gateway","Apache APISIX","Route"],description:"This article describes the concept of Route and how to use it."},a=void 0,s={unversionedId:"terminology/route",id:"version-3.8/terminology/route",isDocsHomePage:!1,title:"Route",description:"This article describes the concept of Route and how to use it.",source:"@site/docs-apisix_versioned_docs/version-3.8/terminology/route.md",sourceDirName:"terminology",slug:"/terminology/route",permalink:"/docs/apisix/terminology/route",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.8/docs/en/latest/terminology/route.md",tags:[],version:"3.8",frontMatter:{title:"Route",keywords:["API Gateway","Apache APISIX","Route"],description:"This article describes the concept of Route and how to use it."},sidebar:"version-3.8/docs",previous:{title:"Plugin Metadata",permalink:"/docs/apisix/terminology/plugin-metadata"},next:{title:"Router",permalink:"/docs/apisix/terminology/router"}},l=[{value:"Description",id:"description",children:[]},{value:"Example",id:"example",children:[]},{value:"Configuration",id:"configuration",children:[]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Routes match the client's request based on defined rules, load and execute the corresponding ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/plugin"},"plugins"),", and forwards the request to the specified ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/upstream"},"Upstream"),"."),(0,o.kt)("p",null,"A Route mainly consists of three parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Matching rules (",(0,o.kt)("inlineCode",{parentName:"li"},"uri"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"host"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"remote address"),")"),(0,o.kt)("li",{parentName:"ol"},"Plugin configuration (current-limit, rate-limit)"),(0,o.kt)("li",{parentName:"ol"},"Upstream information")),(0,o.kt)("p",null,"The image below shows some example Route rules. Note that the values are of the same color if they are identical."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/routes-example.png",alt:"routes-example"})),(0,o.kt)("p",null,"All the parameters are configured directly in the Route. It is easy to set up, and each Route has a high degree of freedom."),(0,o.kt)("p",null,"When Routes have repetitive configurations (say, enabling the same plugin configuration or Upstream information), to update it, we need to traverse all the Routes and modify them. This adds a lot of complexity, making it difficult to maintain."),(0,o.kt)("p",null,"These shortcomings are independently abstracted in APISIX by two concepts: ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/service"},"Service")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/upstream"},"Upstream"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The Route example shown below proxies the request with the URL ",(0,o.kt)("inlineCode",{parentName:"p"},"/index.html")," to the Upstream service with the address ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:1980"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 201 Created\nDate: Sat, 31 Aug 2019 01:17:15 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\n{"node":{"value":{"uri":"\\/index.html","upstream":{"nodes":{"127.0.0.1:1980":1},"type":"roundrobin"}},"createdIndex":61925,"key":"\\/apisix\\/routes\\/1","modifiedIndex":61925}}\n')),(0,o.kt)("p",null,"A successful response indicates that the route was created."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"For specific options of Route, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api#route"},"Admin API"),"."))}c.isMDXComponent=!0}}]);