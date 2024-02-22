"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[77927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58405:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const s={title:"PubSub",keywords:["APISIX","PubSub"],description:"This document contains information about the Apache APISIX pubsub framework."},o=void 0,r={unversionedId:"pubsub",id:"version-3.8/pubsub",isDocsHomePage:!1,title:"PubSub",description:"This document contains information about the Apache APISIX pubsub framework.",source:"@site/docs-apisix_versioned_docs/version-3.8/pubsub.md",sourceDirName:".",slug:"/pubsub",permalink:"/docs/apisix/pubsub",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.8/docs/en/latest/pubsub.md",tags:[],version:"3.8",frontMatter:{title:"PubSub",keywords:["APISIX","PubSub"],description:"This document contains information about the Apache APISIX pubsub framework."},sidebar:"version-3.8/docs",previous:{title:"Kubernetes",permalink:"/docs/apisix/discovery/kubernetes"},next:{title:"Apache Kafka",permalink:"/docs/apisix/pubsub/kafka"}},p=[{value:"What is PubSub",id:"what-is-pubsub",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Supported messaging systems",id:"supported-messaging-systems",children:[]},{value:"How to support other messaging systems",id:"how-to-support-other-messaging-systems",children:[{value:"Basic Steps",id:"basic-steps",children:[]},{value:"Example of Apache Kafka",id:"example-of-apache-kafka",children:[]}]}],c={toc:p};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"what-is-pubsub"},"What is PubSub"),(0,i.kt)("p",null,"Publish-subscribe is a messaging paradigm:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Producers send messages to specific brokers rather than directly to consumers."),(0,i.kt)("li",{parentName:"ul"},"Brokers cache messages sent by producers and then actively push them to subscribed consumers or pull them.")),(0,i.kt)("p",null,"The system architectures use this pattern to decouple or handle high traffic scenarios."),(0,i.kt)("p",null,"In Apache APISIX, the most common scenario is handling north-south traffic from the server to the client. Combining it with a publish-subscribe system, we can achieve more robust features, such as real-time collaboration on online documents, online games, etc."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.8/docs/assets/images/pubsub-architecture.svg",alt:"pubsub architecture"})),(0,i.kt)("p",null,"Currently, Apache APISIX supports WebSocket communication with the client, which can be any application that supports WebSocket, with Protocol Buffer as the serialization mechanism, see the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/include/apisix/model/pubsub.proto"},"protocol definition"),"."),(0,i.kt)("h2",{id:"supported-messaging-systems"},"Supported messaging systems"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/pubsub/kafka"},"Apache Kafka"))),(0,i.kt)("h2",{id:"how-to-support-other-messaging-systems"},"How to support other messaging systems"),(0,i.kt)("p",null,"Apache APISIX implement an extensible pubsub module, which is responsible for starting the WebSocket server, coding and decoding communication protocols, handling client commands, and adding support for the new messaging system."),(0,i.kt)("h3",{id:"basic-steps"},"Basic Steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add new commands and response body definitions to ",(0,i.kt)("inlineCode",{parentName:"li"},"pubsub.proto")),(0,i.kt)("li",{parentName:"ul"},"Add a new option to the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," configuration item in upstream"),(0,i.kt)("li",{parentName:"ul"},"Add a new ",(0,i.kt)("inlineCode",{parentName:"li"},"scheme")," judgment branch to ",(0,i.kt)("inlineCode",{parentName:"li"},"http_access_phase")),(0,i.kt)("li",{parentName:"ul"},"Implement the required message system instruction processing functions"),(0,i.kt)("li",{parentName:"ul"},"Optional: Create plugins to support advanced configurations of this messaging system")),(0,i.kt)("h3",{id:"example-of-apache-kafka"},"Example of Apache Kafka"),(0,i.kt)("h4",{id:"add-new-commands-and-response-body-definitions-to-pubsubproto"},"Add new commands and response body definitions to ",(0,i.kt)("inlineCode",{parentName:"h4"},"pubsub.proto")),(0,i.kt)("p",null,"The core of the protocol definition in ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsub.proto")," is the two parts ",(0,i.kt)("inlineCode",{parentName:"p"},"PubSubReq")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PubSubResp"),"."),(0,i.kt)("p",null,"First, create the ",(0,i.kt)("inlineCode",{parentName:"p"},"CmdKafkaFetch")," command and add the required parameters. Then, register this command in the list of commands for ",(0,i.kt)("inlineCode",{parentName:"p"},"req")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"PubSubReq"),", which is named ",(0,i.kt)("inlineCode",{parentName:"p"},"cmd_kafka_fetch"),"."),(0,i.kt)("p",null,"Then create the corresponding response body ",(0,i.kt)("inlineCode",{parentName:"p"},"KafkaFetchResp")," and register it in the ",(0,i.kt)("inlineCode",{parentName:"p"},"resp")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"PubSubResp"),", named ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka_fetch_resp"),"."),(0,i.kt)("p",null,"The protocol definition ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/include/apisix/model/pubsub.proto"},"pubsub.proto"),"."),(0,i.kt)("h4",{id:"add-a-new-option-to-the-scheme-configuration-item-in-upstream"},"Add a new option to the ",(0,i.kt)("inlineCode",{parentName:"h4"},"scheme")," configuration item in upstream"),(0,i.kt)("p",null,"Add a new option ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheme")," field enumeration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix/schema_def.lua"),"."),(0,i.kt)("p",null,"The schema definition ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/schema_def.lua"},"schema_def.lua"),"."),(0,i.kt)("h4",{id:"add-a-new-scheme-judgment-branch-to-http_access_phase"},"Add a new ",(0,i.kt)("inlineCode",{parentName:"h4"},"scheme")," judgment branch to ",(0,i.kt)("inlineCode",{parentName:"h4"},"http_access_phase")),(0,i.kt)("p",null,"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},"scheme")," judgment branch to the ",(0,i.kt)("inlineCode",{parentName:"p"},"http_access_phase")," function in ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix/init.lua")," to support the processing of ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka")," type upstreams. Because Apache Kafka has its clustering and partition scheme, we do not need to use the Apache APISIX built-in load balancing algorithm, so we intercept and take over the processing flow before selecting the upstream node, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka_access_phase")," function."),(0,i.kt)("p",null,"The APISIX init file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/init.lua"},"init.lua"),"."),(0,i.kt)("h4",{id:"implement-the-required-message-system-commands-processing-functions"},"Implement the required message system commands processing functions"),(0,i.kt)("p",null,"First, create an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsub")," module, which is provided in the ",(0,i.kt)("inlineCode",{parentName:"p"},"core")," package."),(0,i.kt)("p",null,"Then, an instance of the Apache Kafka client is created and omitted code here."),(0,i.kt)("p",null,"Next, add the command registered in the protocol definition above to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsub")," instance, which will provide a callback function that provides the parameters parsed from the communication protocol, in which the developer needs to call the kafka client to get the data and return it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pubsub")," module as the function return value."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Callback function prototype")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"params")," is the data in the protocol definition; the first return value is the data, which needs to contain the fields in the response body definition, and returns the ",(0,i.kt)("inlineCode",{parentName:"p"},"nil")," value when there is an error; the second return value is the error, and returns the error string when there is an error"))),(0,i.kt)("p",null,"Finally, it enters the loop to wait for client commands, and when an error occurs, it returns the error and stops the processing flow."),(0,i.kt)("p",null,"The kafka pubsub implementation ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/pubsub/kafka.lua"},"kafka.lua"),"."),(0,i.kt)("h4",{id:"optional-create-plugins-to-support-advanced-configurations-of-this-messaging-system"},"Optional: Create plugins to support advanced configurations of this messaging system"),(0,i.kt)("p",null,"Add the required fields to the plugin schema definition and write them to the context of the current request in the ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," function."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka-proxy")," plugin ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/plugins/kafka-proxy.lua"},"kafka-proxy.lua"),"."),(0,i.kt)("p",null,"Add this plugin to the list of plugins in the APISIX configuration file."),(0,i.kt)("p",null,"The plugins list ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml"},"config-default.yaml"),"."),(0,i.kt)("h4",{id:"results"},"Results"),(0,i.kt)("p",null,"After this is done, create a route like the one below to connect to this messaging system via APISIX using the WebSocket."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/kafka\' \\\n    -H \'X-API-KEY: ${api-key}\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/kafka",\n    "plugins": {\n        "kafka-proxy": {\n            "sasl": {\n              "username": "user",\n              "password": "pwd"\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "kafka-server1:9092": 1,\n            "kafka-server2:9092": 1,\n            "kafka-server3:9092": 1\n        },\n        "type": "none",\n        "scheme": "kafka",\n        "tls": {\n            "verify": true\n        }\n    }\n}\'\n')))}l.isMDXComponent=!0}}]);