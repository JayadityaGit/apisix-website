"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[70445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(u,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57636:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"forward-auth",keywords:["Apache APISIX","API Gateway","Plugin","Forward Authentication","forward-auth"],description:"This document contains information about the Apache APISIX forward-auth Plugin."},i=void 0,o={unversionedId:"plugins/forward-auth",id:"version-3.5/plugins/forward-auth",isDocsHomePage:!1,title:"forward-auth",description:"This document contains information about the Apache APISIX forward-auth Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.5/plugins/forward-auth.md",sourceDirName:"plugins",slug:"/plugins/forward-auth",permalink:"/docs/apisix/3.5/plugins/forward-auth",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.5/docs/en/latest/plugins/forward-auth.md",tags:[],version:"3.5",frontMatter:{title:"forward-auth",keywords:["Apache APISIX","API Gateway","Plugin","Forward Authentication","forward-auth"],description:"This document contains information about the Apache APISIX forward-auth Plugin."},sidebar:"version-3.5/docs",previous:{title:"opa",permalink:"/docs/apisix/3.5/plugins/opa"},next:{title:"cors",permalink:"/docs/apisix/3.5/plugins/cors"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Data definition",id:"data-definition",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," Plugin implements a classic external authentication model. When authentication fails, you can have a custom error message or redirect the user to an authentication page."),(0,r.kt)("p",null,"This Plugin moves the authentication and authorization logic to a dedicated external service. APISIX forwards the user's requests to the external service, blocks the original request, and replaces the result when the external service responds with a non 2xx status code."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"URI of the authorization service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", verifies the SSL certificate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},'["GET","POST"]'),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP method for a client to send requests to the authorization service. When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"POST")," the request body is send to the authorization service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"request_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Client request headers to be sent to the authorization service. If not set, only the headers provided by APISIX are sent (for example, ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Forwarded-XXX"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"upstream_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization service response headers to be forwarded to the Upstream. If not set, no headers are forwarded to the Upstream service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization service response headers to be sent to the client when authorization fails. If not set, no headers will be sent to the client.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, 60000]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout for the authorization service HTTP call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", keeps the connection alive for multiple requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Idle time after which the connection is closed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection pool limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", allows authentication to be skipped when authentication server is unavailable.")))),(0,r.kt)("h2",{id:"data-definition"},"Data definition"),(0,r.kt)("p",null,"APISIX will generate and send the request headers listed below to the authorization service:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Scheme"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Host"),(0,r.kt)("th",{parentName:"tr",align:null},"URI"),(0,r.kt)("th",{parentName:"tr",align:null},"Source IP"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Proto"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Method"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Host"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-Uri"),(0,r.kt)("td",{parentName:"tr",align:null},"X-Forwarded-For")))),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"First, you need to setup your external authorization service. The example below uses Apache APISIX's ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.5/plugins/serverless"},"serverless")," Plugin to mock the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/auth\' \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/auth",\n    "plugins": {\n        "serverless-pre-function": {\n            "phase": "rewrite",\n            "functions": [\n                "return function (conf, ctx)\n                    local core = require(\\"apisix.core\\");\n                    local authorization = core.request.header(ctx, \\"Authorization\\");\n                    if authorization == \\"123\\" then\n                        core.response.exit(200);\n                    elseif authorization == \\"321\\" then\n                        core.response.set_header(\\"X-User-ID\\", \\"i-am-user\\");\n                        core.response.exit(200);\n                    else core.response.set_header(\\"Location\\", \\"http://example.com/auth\\");\n                        core.response.exit(403);\n                    end\n                end"\n            ]\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"Now you can configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," Plugin to a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/1\' \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n    -d \'{\n    "uri": "/headers",\n    "plugins": {\n        "forward-auth": {\n            "uri": "http://127.0.0.1:9080/auth",\n            "request_headers": ["Authorization"],\n            "upstream_headers": ["X-User-ID"],\n            "client_headers": ["Location"]\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,r.kt)("p",null,"Now if we send the authorization details in the request header:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/headers -H 'Authorization: 123'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "headers": {\n        "Authorization": "123",\n        "Next": "More-headers"\n    }\n}\n')),(0,r.kt)("p",null,"The authorization service response can also be forwarded to the Upstream:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/headers -H 'Authorization: 321'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "headers": {\n        "Authorization": "321",\n        "X-User-ID": "i-am-user",\n        "Next": "More-headers"\n    }\n}\n')),(0,r.kt)("p",null,"When authorization fails, the authorization service can send custom response back to the user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/headers\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 403 Forbidden\nLocation: http://example.com/auth\n")),(0,r.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,r.kt)("p",null,"To remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"forward-auth")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);