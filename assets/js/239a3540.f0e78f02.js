"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[67405],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,c=m["".concat(s,".").concat(g)]||m[g]||u[g]||l;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},99754:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"loki-logger",keywords:["Apache APISIX","API Gateway","Plugin","Loki-logger","Grafana Loki"],description:"This document contains information about the Apache APISIX loki-logger Plugin."},i=void 0,o={unversionedId:"plugins/loki-logger",id:"version-3.8/plugins/loki-logger",isDocsHomePage:!1,title:"loki-logger",description:"This document contains information about the Apache APISIX loki-logger Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.8/plugins/loki-logger.md",sourceDirName:"plugins",slug:"/plugins/loki-logger",permalink:"/docs/apisix/plugins/loki-logger",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.8/docs/en/latest/plugins/loki-logger.md",tags:[],version:"3.8",frontMatter:{title:"loki-logger",keywords:["Apache APISIX","API Gateway","Plugin","Loki-logger","Grafana Loki"],description:"This document contains information about the Apache APISIX loki-logger Plugin."},sidebar:"version-3.8/docs",previous:{title:"tencent-cloud-cls",permalink:"/docs/apisix/plugins/tencent-cloud-cls"},next:{title:"serverless",permalink:"/docs/apisix/plugins/serverless"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Enable plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete the plugin",id:"delete-the-plugin",children:[]},{value:"FAQ",id:"faq",children:[{value:"Logs are not pushed properly",id:"logs-are-not-pushed-properly",children:[]},{value:"Getting errors when RPS is high?",id:"getting-errors-when-rps-is-high",children:[]}]}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," plugin is used to forward logs to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/oss/loki/"},"Grafana Loki")," for analysis and storage."),(0,r.kt)("p",null,"When the Plugin is enabled, APISIX will serialize the request context information to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/api/#push-log-entries-to-loki"},"Log entries in JSON")," and submit it to the batch queue. When the maximum batch size is exceeded, the data in the queue is pushed to Grafana Loki. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor"},"batch processor")," for more details."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_addrs"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[string]"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Loki API base URL, format like ",(0,r.kt)("a",{parentName:"td",href:"http://127.0.0.1:3100"},"http://127.0.0.1:3100"),", supports HTTPS and domain names. If multiple endpoints are configured, they will be written randomly.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"/loki/api/v1/push"),(0,r.kt)("td",{parentName:"tr",align:null},"If you are using a log collection service that is compatible with the Loki Push API, you can use this configuration item to customize the API path.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tenant_id"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"fake"),(0,r.kt)("td",{parentName:"tr",align:null},"Loki tenant ID. According to Loki's ",(0,r.kt)("a",{parentName:"td",href:"https://grafana.com/docs/loki/latest/operations/multi-tenancy/#multi-tenancy"},"multi-tenancy documentation"),", its default value is set to the default value ",(0,r.kt)("inlineCode",{parentName:"td"},"fake")," under single-tenancy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_labels"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'{job = "apisix"}'),(0,r.kt)("td",{parentName:"tr",align:null},"Loki log label. ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX variables")," and ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variables")," can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),", both individual and combined, such as ",(0,r.kt)("inlineCode",{parentName:"td"},"$host")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr:$remote_port"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", verifies the SSL certificate.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout for the Loki service HTTP call. Range from 1 to 60,000ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", keeps the connection alive for multiple requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Idle time after which the connection is closed. Range greater than or equal than 1000ms.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection pool limit. Range greater than or equal than 1.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX variables")," and ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variables")," can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," includes the request body in the log. If the request body is too big to be kept in the memory, it can't be logged due to Nginx's limitations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_req_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for when the ",(0,r.kt)("inlineCode",{parentName:"td"},"include_req_body")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". Request body is only logged when the expression set here evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," for more.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," includes the response body in the log.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"include_resp_body_expr"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Filter for when the ",(0,r.kt)("inlineCode",{parentName:"td"},"include_resp_body")," attribute is set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". Response body is only logged when the expression set here evaluates to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),". See ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr"},"lua-resty-expr")," for more.")))),(0,r.kt)("p",null,"This plugin supports using batch processors to aggregate and process entries (logs/data) in a batch. This avoids the need for frequently submitting the data. The batch processor submits data every ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," seconds or when the data in the queue reaches ",(0,r.kt)("inlineCode",{parentName:"p"},"1000"),". See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/batch-processor#configuration"},"Batch Processor")," for more information or setting your custom configuration."),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("p",null,"You can also set the format of the logs by configuring the Plugin metadata. The following configurations are available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/apisix-variable"},"APISIX variables")," and ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variables")," can be used by prefixing the string with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Configuring the plugin metadata is global in scope. This means that it will take effect on all Routes and Services which use the ",(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," plugin."))),(0,r.kt)("p",null,"The example below shows how you can configure through the Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/loki-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"With this configuration, your logs would be formatted as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("h2",{id:"enable-plugin"},"Enable plugin"),(0,r.kt)("p",null,"The example below shows how you can enable the ",(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "loki-logger": {\n            "endpoint_addrs" : ["http://127.0.0.1:3100"]\n        }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"Now, if you make a request to APISIX, it will be logged in your Loki server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("h2",{id:"delete-the-plugin"},"Delete the plugin"),(0,r.kt)("p",null,"When you need to remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"loki-logger")," plugin, you can delete the corresponding JSON configuration with the following command and APISIX will automatically reload the relevant configuration without restarting the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h3",{id:"logs-are-not-pushed-properly"},"Logs are not pushed properly"),(0,r.kt)("p",null,"Look at ",(0,r.kt)("inlineCode",{parentName:"p"},"error.log")," for such a log."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2023/04/30 13:45:46 [error] 19381#19381: *1075673 [lua] batch-processor.lua:95: Batch Processor[loki logger] failed to process entries: loki server returned status: 401, body: no org id, context: ngx.timer, client: 127.0.0.1, server: 0.0.0.0:9081\n")),(0,r.kt)("p",null,"The error can be diagnosed based on the error code in the ",(0,r.kt)("inlineCode",{parentName:"p"},"failed to process entries: loki server returned status: 401, body: no org id")," and the response body of the loki server."),(0,r.kt)("h3",{id:"getting-errors-when-rps-is-high"},"Getting errors when RPS is high?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Make sure to ",(0,r.kt)("inlineCode",{parentName:"p"},"keepalive")," related configuration is set properly. See ",(0,r.kt)("a",{parentName:"p",href:"#attributes"},"Attributes")," for more information.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the logs in ",(0,r.kt)("inlineCode",{parentName:"p"},"error.log"),", look for such a log."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"2023/04/30 13:49:34 [error] 19381#19381: *1082680 [lua] batch-processor.lua:95: Batch Processor[loki logger] failed to process entries: loki server returned status: 429, body: Ingestion rate limit exceeded for user tenant_1 (limit: 4194304 bytes/sec) while attempting to ingest '1000' lines totaling '616307' bytes, reduce log volume or contact your Loki administrator to see if the limit can be increased, context: ngx.timer, client: 127.0.0.1, server: 0.0.0.0:9081\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The logs usually associated with high QPS look like the above. The error is: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ingestion rate limit exceeded for user tenant_1 (limit: 4194304 bytes/sec) while attempting to ingest '1000' lines totaling '616307' bytes, reduce log volume or contact your Loki administrator to see if the limit can be increased"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/loki/latest/configuration/#limits_config"},"Loki documentation")," to add limits on the amount of default and burst logs, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ingestion_rate_mb")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ingestion_burst_size_mb"),"."),(0,r.kt)("p",{parentName:"li"},"As the test during development, setting the ",(0,r.kt)("inlineCode",{parentName:"p"},"ingestion_burst_size_mb")," to 100 allows APISIX to push the logs correctly at least at 10000 RPS."))))))}d.isMDXComponent=!0}}]);