"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[43129],{35318:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(a),d=n,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||i;return a?r.createElement(m,o(o({ref:t},u),{},{components:a})):r.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},17126:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(25773),n=(a(27378),a(35318));const i={title:"API Observability with APISIX Plugins",keywords:["Apache APISIX","API Gateway","Observability"],authors:[{name:"Boburmirzo",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607?v=4"}],description:"This article describes the power of some Apache APISIX Observability Plugins, how to set up these plugins and use them to understand API behavior.",tags:["Plugins"]},o=void 0,s={permalink:"/blog/2022/04/17/api-observability",source:"@site/blog/2022/04/17/api-observability.md",title:"API Observability with APISIX Plugins",description:"This article describes the power of some Apache APISIX Observability Plugins, how to set up these plugins and use them to understand API behavior.",date:"2022-04-17T00:00:00.000Z",formattedDate:"April 17, 2022",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:6.78,truncated:!0,authors:[{name:"Boburmirzo",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607?v=4",imageURL:"https://avatars.githubusercontent.com/u/14247607?v=4"}],prevItem:{title:"Biweekly Report (Apr 1 - Apr 14)",permalink:"/blog/2022/04/20/weekly-report-0420"},nextItem:{title:"Apache APISIX Summit ASIA 2022 is coming",permalink:"/blog/2022/04/12/apisix-summit-asia-2022"}},p={authorsImageUrls:[void 0]},l=[{value:"APIs are everywhere",id:"apis-are-everywhere",children:[],level:2},{value:"A central point for observation",id:"a-central-point-for-observation",children:[],level:2},{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Logs",id:"logs",children:[],level:2},{value:"Metrics",id:"metrics",children:[],level:2},{value:"Tracing",id:"tracing",children:[],level:2},{value:"Summary",id:"summary",children:[],level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article describes the power of some Apache APISIX Observability Plugins, how to set up these plugins and use them to understand API behavior.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506677636-f4d1ffa0-d848-4264-b497-de1061da0faf.png",alt:"Cover image for API Observability with Apache APISIX Plugins"})),(0,n.kt)("h2",{id:"apis-are-everywhere"},"APIs are everywhere"),(0,n.kt)("p",null,"APIs \u2014 by now, we're all familiar with the term. Every service we use today either uses an API or is an API itself. APIs are central in building and delivering your services. Also, you know that the success of your services depends on the integrity, availability, and performance of your APIs."),(0,n.kt)("p",null,"Nowadays\xa0",(0,n.kt)("strong",{parentName:"p"},"API Observability"),"\xa0is already a part of every API development as it addresses many problems related to API consistency, reliability, and the ability to quickly iterate on new API features. When you design for full-stack observability, you get everything you need to find issues and catch breaking changes."),(0,n.kt)("p",null,"API observability can help every team in your organization:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sales and growth teams to monitor your API usage, free trials, observe expansion opportunities and ensure that API serves the correct data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Engineering teams to monitor and troubleshoot API issues.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Product teams to understand API usage and business value.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Security teams to detect and protect from API threats."))),(0,n.kt)("h2",{id:"a-central-point-for-observation"},"A central point for observation"),(0,n.kt)("p",null,"We know that an API gateway offers a central control point for incoming traffic to a variety of destinations but it can also be a central point for observation as well since it is uniquely qualified to know about all the traffic moving between clients and our service networks. Instead of spending time integrating your services with other many APIs and technologies to improve observability, you can easily manage all work with\xa0",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/plugins"},"Apache APISIX Plugins"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506058593-265ec5da-4b0b-49f0-add4-cabd4a4f52cb.png",alt:"A central point for observation"})),(0,n.kt)("p",null,"Most observability platforms like (Prometheus, SkyWalking, and Opentelemetry) provide pre-built connectors that you can easily integrate with Apache APISIX. You can leverage these connectors to ingest log data from your API gateways to further derive useful metrics and gain complete visibility into the usage, management performance, and security of your APIs in your environment."),(0,n.kt)("p",null,"The core of observability breaks down into ",(0,n.kt)("strong",{parentName:"p"},"three key areas"),": structured logs, metrics, and traces. Let\u2019s break down each pillar of API observability and learn how with Apache APISIX Plugins we can simplify these tasks and provides a solution that you can use to better understand API usage."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506177111-04b43058-d8e1-426d-97e4-ac1d0a8c4b3e.png",alt:"Observability of three key areas"})),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Before enabling our plugins we need to install Apache APISIX, create a route, an upstream, and map the route to the upstream. You can simply follow\xa0",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/getting-started"},"getting started guide"),"\xa0provided on the website."),(0,n.kt)("h2",{id:"logs"},"Logs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Logs"),"\xa0are also easy to instrument and trivial steps of API observability, they can be used to inspect API calls in real-time for debugging, auditing, and recording time-stamped events that happened over time. There are several logger plugins Apache APISIX provides such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/http-logger/"},"http-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/skywalking-logger/"},"skywalking-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/tcp-logger"},"tcp-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/kafka-logger"},"kafka-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/rocketmq-logger"},"rocketmq-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/udp-logger"},"udp-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/clickhouse-logger"},"clickhouse-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/error-log-logger"},"error-logger"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/google-cloud-logging"},"google-cloud-logging")))),(0,n.kt)("p",null,"And you can see the ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/zipkin"},"full list")," on the official website of Apache APISIX. Now for demo purposes, let's choose a simple but mostly used ",(0,n.kt)("em",{parentName:"p"},"http-logger")," plugin that is capable of sending API Log data requests to HTTP/HTTPS servers or sends as JSON objects to Monitoring tools. We can assume that a route and an upstream are created. You can learn how to set up them in the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://youtu.be/dUOjJkb61so"},"Getting started with Apache APISIX"))," video tutorial. Also, you can find all command-line examples on the GitHub page ",(0,n.kt)("a",{parentName:"p",href:"https://boburmirzo.github.io/apisix-observability-plugins/"},"apisix-observability-plugins"),"."),(0,n.kt)("p",null,"You can generate a mock HTTP server at\xa0",(0,n.kt)("a",{parentName:"p",href:"https://mockbin.org/"},"mockbin.com"),"\xa0to record and view the logs. Note that we also bind the route to an upstream (You can refer to this documentation to learn about more\xa0",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/architecture-design/apisix"},"core concepts of Apache APISIX"),")."),(0,n.kt)("p",null,"The following is an example of how to enable the http-logger for a specific route."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 \\-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n          "http-logger": {\n              "uri": "http://mockbin.org/bin/5451b7cd-af27-41b8-8df1-282ffea13a61"\n          }\n     },\n    "upstream_id": "1",\n    "uri": "/get"\n}\'\n')),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"To http-logger plugin settings, your can just put your mock server URI address like below:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{"uri": "http://mockbin.org/bin/5451b7cd-af27-41b8-8df1-282ffea13a61"}\n')),(0,n.kt)("p",null,"Once we get a successful response from APISIX server, we can send a request to this\xa0",(0,n.kt)("em",{parentName:"p"},"get"),"\xa0endpoint to generate logs."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9080/get\n")),(0,n.kt)("p",null,"Then if you click and navigate to the following ",(0,n.kt)("a",{parentName:"p",href:"http://mockbin.org/bin/5451b7cd-af27-41b8-8df1-282ffea13a61/log"},"mock server link")," some recent logs are sent and we can see them:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506211706-09f0bb8a-9d63-4b5c-ae5f-01be1a76a9ba.png",alt:"http-logger-plugin-test-screenshot"})),(0,n.kt)("h2",{id:"metrics"},"Metrics"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Metrics"),"\xa0are a numeric representation of data measured over intervals of time. You can also aggregate this data into daily or weekly frequency and run queries against a distributed system like\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.elastic.co/"},"Elasticsearch"),". Or sometimes based on metrics you trigger alerts to take any action later. Once API metrics are collected, you can track them with metrics tracking tools such as\xa0",(0,n.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),"."),(0,n.kt)("p",null,"Apache APISIX API Gateway also offers\xa0",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/prometheus/"},"prometheus-plugin"),"\xa0to fetch your API metrics and expose them in Prometheus. Behind the scene, Apache APISIX downloads the Grafana dashboard meta, imports it to\xa0",(0,n.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana"),", and fetches real-time metrics from the Prometheus plugin."),(0,n.kt)("p",null,"Let\u2019s enable prometheus-plugin for our route:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/get",\n    "plugins": {\n        "prometheus":{}\n    },\n    "upstream_id": "1"\n}\n')),(0,n.kt)("p",null,"We fetch the metric data from the specified URL\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"/apisix/prometheus/"),"metrics."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9091/apisix/prometheus/metrics\n")),(0,n.kt)("p",null,"You will get a response with Prometheus metrics something like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nServer: openresty\nDate: Fri, 25 Mar 2022 11:13:14 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\n# HELP apisix_batch_process_entries batch process remaining entries\n# TYPE apisix_batch_process_entries gauge\napisix_batch_process_entries{name="http logger",route_id="1",server_addr="172.19.0.8"} 0\n# HELP apisix_etcd_modify_indexes Etcd modify index for APISIX keys\n# TYPE apisix_etcd_modify_indexes gauge\napisix_etcd_modify_indexes{key="consumers"} 17819\napisix_etcd_modify_indexes{key="global_rules"} 17832\napisix_etcd_modify_indexes{key="max_modify_index"} 20028\napisix_etcd_modify_indexes{key="prev_index"} 18963\napisix_etcd_modify_indexes{key="protos"} 0\napisix_etcd_modify_indexes{key="routes"} 20028\n...\n')),(0,n.kt)("p",null,"And we can also check the status of our endpoint at the Prometheus dashboard by pointing to this URL ",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/targets"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506275118-b49f881f-caff-4d9a-aedc-01e95e45c77f.png",alt:"plugin-orchestration-configure-rule-screenshot"})),(0,n.kt)("p",null,"As you can see, Apache APISIX exposed metrics endpoint is upon and running."),(0,n.kt)("p",null,"Now you can query metrics for\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"apisix_http_status"),"\xa0to see what HTTP requests are handled by API Gateway and what was the outcome."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506329360-f6e53316-cf26-475b-a5d7-dc77fb200130.png",alt:"prometheus-plugin-dashboard-query-http-status-screenshot"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506385033-9913d5e6-2441-4761-bb49-c185048f3caf.png",alt:"prometheus-plugin-dashboard-query-http-status-table-screenshot"})),(0,n.kt)("p",null,"In addition to this, you can view the Grafana dashboard running in your local instance. Go to\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506413963-781b2820-b82a-4556-b06c-6dfd7a23abab.png",alt:"prometheus-plugin-grafana-dashboard-screenshot"})),(0,n.kt)("h2",{id:"tracing"},"Tracing"),(0,n.kt)("p",null,"The third is\xa0",(0,n.kt)("strong",{parentName:"p"},"tracing"),"\xa0or distributed tracing allows you to understand the life of a request as it traverses your service network and allows you to answer questions like what service has this request touched and how much latency was introduced. Traces enable you to further explore which logs to look at for a particular session or related set of API calls."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://zipkin.io/"},"Zipkin"),", an open-source distributed tracing system. ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/zipkin"},"APISIX plugin")," is supported to collect tracing and report to Zipkin Collector based on ",(0,n.kt)("a",{parentName:"p",href:"https://zipkin.io/pages/instrumenting.html"},"Zipkin API specification"),"."),(0,n.kt)("p",null,"Here\u2019s an example to enable the\xa0",(0,n.kt)("em",{parentName:"p"},"zipkin plugin"),"\xa0on the specified route:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/get",\n    "plugins": {\n        "zipkin": {\n            "endpoint": "http://127.0.0.1:9411/api/v2/spans",\n            "sample_ratio": 1\n        }\n    },\n    "upstream_id": "1"\n}\'\n')),(0,n.kt)("p",null,"We can test our example by simply running the following curl command:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"curl -i http://127.0.0.1:9080/get")),(0,n.kt)("p",null,"As you can see, there are some additional trace identifiers (like traceId, spanId, parentId) were appended to the headers:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'"X-B3-Parentspanid": "61bd3f4046a800e7",\n"X-B3-Sampled": "1",\n"X-B3-Spanid": "855cd5465957f414",\n"X-B3-Traceid": "e18985df47dab632d62083fd96626692",\n')),(0,n.kt)("p",null,"Then you can use a browser to access\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9411/zipkin"),", see traces on the Web UI of Zipkin."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that you need to run the Zipkin instance in order to install Zipkin Web UI. For example, by using docker you can simply run it:\n",(0,n.kt)("inlineCode",{parentName:"p"},"docker run -d -p 9411:9411 openzipkin/zipkin"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506478581-395f9706-e3f4-4687-9744-4fb7e7f17d93.png",alt:"Zipkin plugin output 1"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1650506596789-f5a1207b-21ea-4250-abc6-a8f3c35d877d.png",alt:"Zipkin plugin output 2"})),(0,n.kt)("p",null,"As you noticed, the recent traces were exposed in the above pictures."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"As we learned, API Observability is a sort of framework for managing your applications in an API world and Apache APISIX API Gateway plugins can help when observing modern API-driven applications by integrating to several observability platforms. So, you can make your development work focused on core business features instead of building a custom integration for observability tools."),(0,n.kt)("p",null,"You can also click below to get more details:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apisix.apache.org/downloads"},"Download Apache APISIX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/dUOjJkb61so"},"Getting Started with Apache APISIX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/-9-HZKK2ccI"},"Getting Started with Apache APISIX Dashboard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/ixSZA4ILBKQ"},"Overview of Apache APISIX Plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/how-to-build"},"Install Apache APISIX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/XK0xcui5BQU"},"Watch the Video version of the blog post"))),(0,n.kt)("p",null,"If you have any questions, feel free to mail ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join/"},"Apache APISIX Community")))}c.isMDXComponent=!0}}]);