"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[78153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=u(r),m=a,c=h["".concat(p,".").concat(m)]||h[m]||d[m]||i;return r?n.createElement(c,l(l({ref:t},s),{},{components:r})):n.createElement(c,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},52233:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={Title:"Router Radixtree"},l=void 0,o={unversionedId:"router-radixtree",id:"version-3.8/router-radixtree",isDocsHomePage:!1,title:"router-radixtree",description:"Libradixtree is an adaptive radix tree that is implemented in Lua for OpenResty and it is based on FFI for rax. APISIX uses libradixtree as a route dispatching library.",source:"@site/docs-apisix_versioned_docs/version-3.8/router-radixtree.md",sourceDirName:".",slug:"/router-radixtree",permalink:"/docs/apisix/router-radixtree",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.8/docs/en/latest/router-radixtree.md",tags:[],version:"3.8",frontMatter:{Title:"Router Radixtree"},sidebar:"version-3.8/docs",previous:{title:"xRPC",permalink:"/docs/apisix/xrpc"},next:{title:"Stream Proxy",permalink:"/docs/apisix/stream-proxy"}},p=[{value:"What is Libradixtree?",id:"what-is-libradixtree",children:[]},{value:"How to use Libradixtree in APISIX?",id:"how-to-use-libradixtree-in-apisix",children:[]},{value:"How to filter route by Nginx built-in variable?",id:"how-to-filter-route-by-nginx-built-in-variable",children:[]},{value:"How to filter route by POST form attributes?",id:"how-to-filter-route-by-post-form-attributes",children:[]},{value:"How to filter route by GraphQL attributes?",id:"how-to-filter-route-by-graphql-attributes",children:[]}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"what-is-libradixtree"},"What is Libradixtree?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree"},"Libradixtree")," is an adaptive radix tree that is implemented in Lua for OpenResty and it is based on FFI for ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/antirez/rax"},"rax"),". APISIX uses libradixtree as a route dispatching library."),(0,a.kt)("h3",{id:"how-to-use-libradixtree-in-apisix"},"How to use Libradixtree in APISIX?"),(0,a.kt)("p",null,"There are several ways to use Libradixtree in APISIX. Let's take a look at a few examples and have an intuitive understanding."),(0,a.kt)("h4",{id:"1-full-match"},"1. Full match"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/blog/foo\n")),(0,a.kt)("p",null,"It will only match the full path ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/foo"),"."),(0,a.kt)("h4",{id:"2-prefix-matching"},"2. Prefix matching"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/blog/bar*\n")),(0,a.kt)("p",null,"It will match the path with the prefix ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/bar"),". For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/bar/a"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/bar/b"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/bar/c/d/e"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/bar")," etc."),(0,a.kt)("h4",{id:"3-match-priority"},"3. Match priority"),(0,a.kt)("p",null,"Full match has a higher priority than deep prefix matching."),(0,a.kt)("p",null,"Here are the rules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/blog/foo/*\n/blog/foo/a/*\n/blog/foo/c/*\n/blog/foo/bar\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"path"),(0,a.kt)("th",{parentName:"tr",align:null},"Match result"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/blog/foo/bar"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/blog/foo/bar"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/blog/foo/a/b/c"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/blog/foo/a/*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/blog/foo/c/d"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/blog/foo/c/*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/blog/foo/gloo"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"/blog/foo/*"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/blog/bar"),(0,a.kt)("td",{parentName:"tr",align:null},"not match")))),(0,a.kt)("h4",{id:"4-different-routes-have-the-same-uri"},"4. Different routes have the same ",(0,a.kt)("inlineCode",{parentName:"h4"},"uri")),(0,a.kt)("p",null,"When different routes have the same ",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),", you can set the priority field of the route to determine which route to match first, or add other matching rules to distinguish different routes."),(0,a.kt)("p",null,"Note: In the matching rules, the ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," field takes precedence over other rules except ",(0,a.kt)("inlineCode",{parentName:"p"},"uri"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Different routes have the same ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," but different ",(0,a.kt)("inlineCode",{parentName:"li"},"priority")," field")),(0,a.kt)("p",null,"Create two routes with different ",(0,a.kt)("inlineCode",{parentName:"p"},"priority")," values \u200b\u200b(the larger the value, the higher the priority)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "priority": 3,\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1981": 1\n       },\n       "type": "roundrobin"\n    },\n    "priority": 2,\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"Test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:1980/hello\n1980\n")),(0,a.kt)("p",null,"All requests will only hit the route of port ",(0,a.kt)("inlineCode",{parentName:"p"},"1980")," because it has a priority of 3 while the route with the port of ",(0,a.kt)("inlineCode",{parentName:"p"},"1981")," has a priority of 2."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Different routes have the same ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," but different matching conditions")),(0,a.kt)("p",null,"To understand this, look at the example of setting host matching rules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "hosts": ["localhost.com"],\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/2 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1981": 1\n       },\n       "type": "roundrobin"\n    },\n    "hosts": ["test.com"],\n    "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"Test:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -H 'host: localhost.com'\n1980\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl http://127.0.0.1:9080/hello -H 'host: test.com'\n1981\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/hello\n{"error_msg":"404 Route Not Found"}\n')),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," rule matches, the request hits the corresponding upstream, and if the ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," does not match, the request returns a 404 message."),(0,a.kt)("h4",{id:"5-parameter-match"},"5. Parameter match"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"radixtree_uri_with_parameter")," is used, we can match routes with parameters."),(0,a.kt)("p",null,"For example, with configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    router:\n        http: 'radixtree_uri_with_parameter'\n")),(0,a.kt)("p",null,"route like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/blog/:name\n")),(0,a.kt)("p",null,"will match both ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/dog")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/blog/cat"),"."),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"},"https://github.com/api7/lua-resty-radixtree/#parameters-in-path"),"."),(0,a.kt)("h3",{id:"how-to-filter-route-by-nginx-built-in-variable"},"How to filter route by Nginx built-in variable?"),(0,a.kt)("p",null,"Nginx provides a variety of built-in variables that can be used to filter routes based on certain criteria. Here is an example of how to filter routes by Nginx built-in variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/index.html",\n    "vars": [\n        ["http_host", "==", "iresty.com"],\n        ["cookie_device_id", "==", "a66f0cdc4ba2df8c096f74c9110163a9"],\n        ["arg_name", "==", "json"],\n        ["arg_age", ">", "18"],\n        ["arg_address", "~~", "China.*"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"This route will require the request header ",(0,a.kt)("inlineCode",{parentName:"p"},"host")," equal ",(0,a.kt)("inlineCode",{parentName:"p"},"iresty.com"),", request cookie key ",(0,a.kt)("inlineCode",{parentName:"p"},"_device_id")," equal ",(0,a.kt)("inlineCode",{parentName:"p"},"a66f0cdc4ba2df8c096f74c9110163a9")," etc. You can learn more at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-radixtree#new"},"radixtree-new"),"."),(0,a.kt)("h3",{id:"how-to-filter-route-by-post-form-attributes"},"How to filter route by POST form attributes?"),(0,a.kt)("p",null,"APISIX supports filtering route by POST form attributes with ",(0,a.kt)("inlineCode",{parentName:"p"},"Content-Type")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded"),"."),(0,a.kt)("p",null,"We can define the following route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/_post",\n    "vars": [\n        ["post_arg_name", "==", "json"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"The route will be matched when the POST form contains ",(0,a.kt)("inlineCode",{parentName:"p"},"name=json"),"."),(0,a.kt)("h3",{id:"how-to-filter-route-by-graphql-attributes"},"How to filter route by GraphQL attributes?"),(0,a.kt)("p",null,"APISIX can handle HTTP GET and POST methods. At the same time, the request body can be a GraphQL query string or JSON-formatted content."),(0,a.kt)("p",null,"APISIX supports filtering routes by some attributes of GraphQL. Currently, we support:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"graphql_operation"),(0,a.kt)("li",{parentName:"ul"},"graphql_name"),(0,a.kt)("li",{parentName:"ul"},"graphql_root_fields")),(0,a.kt)("p",null,"For instance, with GraphQL like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"query getRepo {\n    owner {\n        name\n    }\n    repo {\n        created\n    }\n}\n")),(0,a.kt)("p",null,"Where"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"graphql_operation")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"query")),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"graphql_name")," is ",(0,a.kt)("inlineCode",{parentName:"li"},"getRepo"),","),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"graphql_root_fields")," is ",(0,a.kt)("inlineCode",{parentName:"li"},'["owner", "repo"]'))),(0,a.kt)("p",null,"We can filter such route with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "methods": ["POST", "GET"],\n    "uri": "/graphql",\n    "vars": [\n        ["graphql_operation", "==", "query"],\n        ["graphql_name", "==", "getRepo"],\n        ["graphql_root_fields", "has", "owner"]\n    ],\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"We can verify GraphQL matches in the following three ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"GraphQL query strings")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -H 'content-type: application/graphql' -X POST http://127.0.0.1:9080/graphql -d '\nquery getRepo {\n    owner {\n        name\n    }\n    repo {\n        created\n    }\n}'\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"JSON format")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -H 'content-type: application/json' -X POST \\\nhttp://127.0.0.1:9080/graphql --data '{\"query\": \"query getRepo { owner {name } repo {created}}\"}'\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Try ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," request match")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ curl -H 'content-type: application/graphql' -X GET \\\n\"http://127.0.0.1:9080/graphql?query=query getRepo { owner {name } repo {created}}\" -g\n")),(0,a.kt)("p",null,"To prevent spending too much time reading invalid GraphQL request body, we only read the first 1 MiB\ndata from the request body. This limitation is configured via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"graphql:\n  max_size: 1048576\n\n")),(0,a.kt)("p",null,"If you need to pass a GraphQL body which is larger than the limitation, you can increase the value in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."))}s.isMDXComponent=!0}}]);