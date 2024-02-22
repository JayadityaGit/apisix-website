"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[20345],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={title:"Release Apache APISIX 3.2.0",authors:[{name:"Zexuan Luo",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png"},{name:"Yilia",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4"}],keywords:["Apache APISIX","LTS"],description:"As the first LTS version since the 3.0 version, APISIX 3.2.0 is officially released!",tags:["Community"]},i=void 0,l={permalink:"/blog/2023/03/10/release-apache-apisix-3.2.0",source:"@site/blog/2023/03/10/release-apache-apisix-3.2.0.md",title:"Release Apache APISIX 3.2.0",description:"As the first LTS version since the 3.0 version, APISIX 3.2.0 is officially released!",date:"2023-03-10T00:00:00.000Z",formattedDate:"March 10, 2023",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:4.33,truncated:!0,authors:[{name:"Zexuan Luo",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png",imageURL:"https://github.com/spacewander.png"},{name:"Yilia",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4",imageURL:"https://avatars.githubusercontent.com/u/114121331?v=4"}],prevItem:{title:"gRPC on the client side",permalink:"/blog/2023/03/16/grpc-client-side"},nextItem:{title:"Authenticate with OpenID Connect and Apache APISIX",permalink:"/blog/2023/03/09/authenticate-openid-connect"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"New feature: service discovery on Layer 4",id:"new-feature-service-discovery-on-layer-4",children:[],level:2},{value:"New plugin: RESTful request to GraphQL",id:"new-plugin-restful-request-to-graphql",children:[],level:2},{value:"New feature: support for setting log format on each log plugin",id:"new-feature-support-for-setting-log-format-on-each-log-plugin",children:[],level:2},{value:"New plugin: request body/response body conversion",id:"new-plugin-request-bodyresponse-body-conversion",children:[],level:2},{value:"More new features: optimizations and more small features",id:"more-new-features-optimizations-and-more-small-features",children:[],level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"As the first LTS version since the 3.0 version, APISIX 3.2.0 is officially released! This release is a significant milestone for the 3.x era to replace the 2.x era.")),(0,a.kt)("p",null,"A new series of patch versions will be released based on the 3.2.0 version. As usual, many features and plugins are added to optimize the experience of using APISIX."),(0,a.kt)("h2",{id:"new-feature-service-discovery-on-layer-4"},"New feature: service discovery on Layer 4"),(0,a.kt)("p",null,"Only a few gateways support service discovery, and APISIX is one of them. In version 3.2.0, APISIX implemented the service discovery on Layer 4. In this way, you can also enjoy the convenience of service discovery when using APISIX as a TCP/UDP proxy. Like the service discovery on Layer 7, we need to configure the address of the service discovery server in ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," if we want to use service discovery:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'discovery:\n  nacos:\n    host:\n      - "http://192.168.33.1:8848"\n')),(0,a.kt)("p",null,"Then configure ",(0,a.kt)("inlineCode",{parentName:"p"},"discovery_type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"service_name")," on the specific upstream:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n        "scheme": "tcp",\n        "discovery_type": "nacos",\n        "service_name": "APISIX-NACOS",\n        "type": "roundrobin"\n    }\n}\'\n')),(0,a.kt)("p",null,"In this way, when accessing stream_routes, the upstream node will obtain it from the APISIX-NACOS service of Nacos."),(0,a.kt)("h2",{id:"new-plugin-restful-request-to-graphql"},"New plugin: RESTful request to GraphQL"),(0,a.kt)("p",null,"In version 3.2.0, APISIX added a plugin that converts RESTful requests into GraphQL. For example, suppose you have a GraphQL query like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"query($name: String!, $githubAccount: String!) {\n  persons(filter: { name: $name, githubAccount: $githubAccount }) {\n    id\n    name\n    blog\n    githubAccount\n    talks {\n      id\n      title\n    }\n  }\n}\n")),(0,a.kt)("p",null,"$name and $githubAccount are two GraphQL variables in this code segment."),(0,a.kt)("p",null,"We can expose the same RESTful interface with the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request PUT \'http://localhost:9180/apisix/admin/routes/1\' \\\n--header \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "uri": "/graphql",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:8080": 1\n        }\n    },\n    "plugins": {\n        "degraphql": {\n            "query": "query($name: String!, $githubAccount: String!) {\\n  persons(filter: { name: $name, githubAccount: $githubAccount }) {\\n    id\\n    name\\n    blog\\n    githubAccount\\n    talks {\\n      id\\n      title\\n    }\\n  }\\n}",\n            "variables": [\n                "name",\n                "githubAccount"\n            ]\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"Here ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," is the query statement we want to use, and ",(0,a.kt)("inlineCode",{parentName:"p"},"variables")," is the list of variables declared in advance."),(0,a.kt)("p",null,"It can then be accessed as a RESTful interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl --location --request POST \'http://localhost:9080/graphql\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "name": "Niek",\n    "githubAccount": "npalm"\n}\'\n')),(0,a.kt)("p",null,"The result is the same as accessing upstream directly with the corresponding GraphQL statement:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "data": {\n    "persons": [\n      {\n        "id": "7",\n        "name": "Niek",\n        "blog": "https://040code.github.io",\n        "githubAccount": "npalm",\n        "talks": [\n          {\n            "id": "19",\n            "title": "GraphQL - The Next API Language"\n          },\n          {\n            "id": "20",\n            "title": "Immutable Infrastructure"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"You can also use the GET request to access the same interface, then the parameters need to be passed through the query string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl 'http://localhost:9080/graphql?name=Niek&githubAccount=npalm'\n")),(0,a.kt)("h2",{id:"new-feature-support-for-setting-log-format-on-each-log-plugin"},"New feature: support for setting log format on each log plugin"),(0,a.kt)("p",null,"In version 3.2.0, we sorted out more than ten existing access log plugins of APISIX. Each plugin now supports configuring custom log formats:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the global log format in the plugin metadata")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Define the log format of the current route in the configuration of the plugin on the specific routing rule"))),(0,a.kt)("p",null,"Take clickhouse-logger as an example,\nHere's how to define a global log format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/clickhouse-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,a.kt)("p",null,"The following is the log format of the current route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "clickhouse-logger": {\n                "log_format": {\n                    "host": "$host",\n                    "@timestamp": "$time_iso8601",\n                    "client_ip": "$remote_addr"\n                },\n                "user": "default",\n                "password": "a",\n                "database": "default",\n                "logtable": "test",\n                "endpoint_addrs": ["http://127.0.0.1:8123"]\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n\n')),(0,a.kt)("h2",{id:"new-plugin-request-bodyresponse-body-conversion"},"New plugin: request body/response body conversion"),(0,a.kt)("p",null,"Are you struggling with how to introduce ancient upstream services that return XML to modern clients that only accept JSON? The new body-transformer plugin in 3.2.0 is open source to solve this problem."),(0,a.kt)("p",null,"The body-transformer plugin supports conversion between JSON and XML. But that's not the only thing it can do. It also supports configuring the specific format of the input and output content through templates. For example,"),(0,a.kt)("p",null,"Suppose you have the following JSON template: ",(0,a.kt)("inlineCode",{parentName:"p"},'{"foo":"{{name .. " world"}}", "bar":{{age+10}}}'),", and configure it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"body-transformer")," plugin in the ",(0,a.kt)("inlineCode",{parentName:"p"},"request.template")," field:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    ...\n    "body-transformer": {\n        "request": {\n            "template": "..."\n        }\n    }\n    ...\n')),(0,a.kt)("p",null,"Then when the request content is ",(0,a.kt)("inlineCode",{parentName:"p"},'{"name":"hello","age":20}'),", the rewritten ",(0,a.kt)("inlineCode",{parentName:"p"},'{"foo":"hello world","bar":30}')," is sent to the upstream. We use ",(0,a.kt)("inlineCode",{parentName:"p"},"lua-resty-template")," to render templates, so you can embed Lua expressions in templates to implement rewriting logic."),(0,a.kt)("p",null,"The rewriting of upstream output is similar, except that the ",(0,a.kt)("inlineCode",{parentName:"p"},"response.template")," field of the plugin needs to be configured."),(0,a.kt)("h2",{id:"more-new-features-optimizations-and-more-small-features"},"More new features: optimizations and more small features"),(0,a.kt)("p",null,"In addition to the several big features mentioned above, this release contains several changes worth mentioning."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The error-log-logger plugin supports sending error logs to Kafka")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The limit-count plugin supports returning the X-RateLimit-Reset response header"))),(0,a.kt)("p",null,"If you are interested in the full update details of the new release, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/CHANGELOG.md"},"CHANGELOG")," of the 3.2.0 release."))}c.isMDXComponent=!0}}]);