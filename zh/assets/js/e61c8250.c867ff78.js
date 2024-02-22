"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2571],{5318:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7378);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),g=r,h=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(h,i(i({ref:e},m),{},{components:a})):n.createElement(h,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2098:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(5773),r=(a(7378),a(5318));const l={id:"code-samples",title:"Code samples",keywords:["API gateway","Code samples","Example projects","Source code"],description:"Apache APISIX code samples and projects."},i=void 0,o={unversionedId:"code-samples",id:"code-samples",isDocsHomePage:!1,title:"Code samples",description:"Apache APISIX code samples and projects.",source:"@site/docs/general/code-samples.md",sourceDirName:".",slug:"/code-samples",permalink:"/zh/docs/general/code-samples",editUrl:"https://github.com/apache/apisix-website/edit/master/website/docs/general/code-samples.md",tags:[],version:"current",frontMatter:{id:"code-samples",title:"Code samples",keywords:["API gateway","Code samples","Example projects","Source code"],description:"Apache APISIX code samples and projects."}},p=[],s={toc:p};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Welcome to Apache APISIX Code Samples!")),(0,r.kt)("p",null,"Our Code Samples is your go-to resource for exploring the full potential of Apache APISIX, boosting your understanding of our platform's features, and accelerating your API development."),(0,r.kt)("p",null,"In our collection, you'll find a diverse range of code samples, including exposing new APIs, handling API calls, securing, and observing your APIs with Apache APISIX, and many more."),(0,r.kt)("p",null,"Now, feel free to dive in! Whether you're a beginner in need of a jumpstart or an experienced developer seeking more efficient solutions, our Code Samples are here to empower you on your journey. And if you ever get stuck or need further assistance, our ",(0,r.kt)("a",{parentName:"p",href:"https://join.slack.com/t/the-asf/shared_invite/zt-vlfbf7ch-HkbNHiU_uDlcH_RvaHv9gQ"},"community of developers")," is always here to help. Happy coding!"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Title"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Source code"),(0,r.kt)("th",{parentName:"tr",align:null},"Tutorial"),(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Level"),(0,r.kt)("th",{parentName:"tr",align:null},"Language"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Hands-on lab Apache APISIX"),(0,r.kt)("td",{parentName:"tr",align:null},"It shows a couple of nifty features that can help your information system cope with the challenges introduced by APIs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-workshop"},"APISIX Workshop for beginner")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://boburmirzo.github.io/apisix-workshop/"},"Hands-on lab reference")),(0,r.kt)("td",{parentName:"tr",align:null},"Authentication, Security, Serverless, Observability, Transformation"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"How to create a File-proxy custom plugin in Lua"),(0,r.kt)("td",{parentName:"tr",align:null},"Learn to develop a new plugin that exposes the static files through API and fetches a file from a specified URL."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-file-proxy-plugin-demo"},"APISIX File Proxy Plugin Demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api7.ai/blog/plugin-development-with-lua-and-chatgpt"},"Custom Plugin Development With ChatGPT")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom plugin, File proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Lua, Yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Managing AI-powered Java App with API Management"),(0,r.kt)("td",{parentName:"tr",align:null},"It demonstrates how to use OpenAI ChatGPT APIs in Spring Boot, secure and manage the traffic with Apache APISIX"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-java-chatgpt-openaiapi"},"APISIX Java OpenAI API Management")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api7.ai/blog/managing-ai-powered-java-apps"},"Managing AI powered Java app with APISIX")),(0,r.kt)("td",{parentName:"tr",align:null},"Security, Authentication, JWT plugin, Consumers"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Java, Yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage .NET-based APIs with Apache APISIX API Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"This is an example project focused on the usage of APISIX for applications developed in ",(0,r.kt)("a",{parentName:"td",href:"https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0"},"ASP .NET Core 6")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-dotnet-docker"},"APISIX .NET Docker example")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dev.to/apisix/manage-net-microservices-apis-with-apache-apisix-api-gateway-2cbk"},"Manage .NET microservices APIs with APISIX")),(0,r.kt)("td",{parentName:"tr",align:null},"Security, Authentication, Rate Limiting, Caching"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"C#, Yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chaining API requests with API Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to create a custom plugin for APISIX API Gateway to handle client requests that should be called in sequence."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-plugin-pipeline-request-demo"},"APISIX Request Pipeline Plugin demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api7.ai/blog/chaining-api-requests-with-api-gateway"},"Chaining API requests with APISIX")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom plugin, Serverless, Request Chaining"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Lua, Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage OpenAI APIs with Apache APISIX"),(0,r.kt)("td",{parentName:"tr",align:null},"Manages the OpenAI API traffic by creating a route, upstream and enabling some plugins."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-open-ai-api"},"APISIX OpenAI API demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api7.ai/blog/power-ai-capabilities-with-apache-apisix"},"Powering AI capabilities with APISIX")),(0,r.kt)("td",{parentName:"tr",align:null},"AI, Traffic control, Consumer, Rate-limiting, Prometheus, API versioning, Traffic split"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell, Yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic routing based on JWT Claim with Apache APISIX and Okta"),(0,r.kt)("td",{parentName:"tr",align:null},"Explore the benefits of adopting dynamic routing based on authentication attributes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/dynamic-routing-with-apisix"},"Dynamic routing with APISIX")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api7.ai/blog/dynamic-routing-based-on-user-credentials"},"Dynamic routing with APISIX blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"Dynamic routing, JWT, Authentication, Consumer management"),(0,r.kt)("td",{parentName:"tr",align:null},"Advanced"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell, Yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage serverless APIs with Apache APISIX and Azure Functions"),(0,r.kt)("td",{parentName:"tr",align:null},"A simple example of how to manage Java-based serverless APIs built with Azure functions."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-manage-serverless-apis"},"Manage serverless APIs with APISIX demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://api7.ai/blog/manage-serverless-apis-with-apache-apisix"},"Manage serverless APIs with APISIX")),(0,r.kt)("td",{parentName:"tr",align:null},"Serverless, Basic auth, Rate-limiting, Traffic management"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Java, Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Manage API Consumers"),(0,r.kt)("td",{parentName:"tr",align:null},"Explains how to manage your single or multiple API consumers with Apache APISIX."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-api-consumers-management"},"API consumers management with APISIX demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/tutorials/manage-api-consumers/"},"Manage API consumers blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"API consumers, Rate-limiting, Consumer groups"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secure APIs with Apache APISIX API Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"How to use APISIX Plugins for securing your ",(0,r.kt)("a",{parentName:"td",href:"https://spring.io/guides/tutorials/rest/s"},"Spring Boot REST APIs")," and it demonstrates how to effectively use them."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-plugin-spring-rest-demo"},"APISIX plugins for Spring Boot Apps demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://dev.to/apisix/secure-spring-boot-rest-api-with-apache-apisix-api-gateway-1nmg"},"APISIX plugins to secure Spring Boot REST APIs blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"Security, Authorization, Authentication, Monitoring"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"An API observability with Apache APISIX Plugins Example"),(0,r.kt)("td",{parentName:"tr",align:null},"Learn observing your APIs with Apache APISIX plugins"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-observability-plugins"},"APISIX observability plugins demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://boburmirzo.github.io/apisix-observability-plugins/"},"Observability plugins usage tutorial")),(0,r.kt)("td",{parentName:"tr",align:null},"Observability, Traces, Metrics, Logs"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"End-to-end tracing with OpenTelemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"Use OpenTelemetry and APISIX to start your journey into observability"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nfrankel/opentelemetry-tracing"},"Open Telemetry tracing with APISIX demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://blog.frankel.ch/end-to-end-tracing-opentelemetry/"},"Open Telemetry tracing tutorial")),(0,r.kt)("td",{parentName:"tr",align:null},"Observability, Traces, OpenTelemetry"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Kotlin, Python, Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Chopping the monolith"),(0,r.kt)("td",{parentName:"tr",align:null},"Extract HTTP endpoints from the monolith and gradually migrate to microservices using API Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nfrankel/chop-monolith"},"Chopping monolith demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://blog.frankel.ch/chopping-monolith/"},"Chopping monolith tutorial")),(0,r.kt)("td",{parentName:"tr",align:null},"Azure function, Response-rewrite"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Kotlin, JavaScript, HTML, Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Evolving your RESTful APIs, a step-by-step approach"),(0,r.kt)("td",{parentName:"tr",align:null},"Use API Gateway to evolve APIs step by step by versioning, splitting the traffic, doing canary releases, and more."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nfrankel/evolve-apis"},"Evolve APIs demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://blog.frankel.ch/evolve-apis/"},"Evolve APIs blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"Proxy rewrite, Proxy mirror, Traffic split, Response rewrite, Redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Kotlin, Lua, Java")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Discussing Backend For Front-end"),(0,r.kt)("td",{parentName:"tr",align:null},"Use API Gateway to build Backend For Frontend solution."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/nfrankel/backend-for-frontend"},"Backend for front-end demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://blog.frankel.ch/backend-for-frontend/"},"Backend for front-end blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"Public endpoint, Proxy-rewrite, Routing"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Python, Lua")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Getting Hands-On with the New Kubernetes Gateway API"),(0,r.kt)("td",{parentName:"tr",align:null},"Tutorial about using the Gateway API in practice with Apache APISIX Ingress."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/navendu-pottekkat/gateway-api"},"Getting Hands-On with the New Kubernetes Gateway API demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://navendu.me/posts/kubernetes-gateway-with-apisix/"},"Getting Hands-On with the New Kubernetes Gateway API tutorial")),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress, Kubernetes, Routing"),(0,r.kt)("td",{parentName:"tr",align:null},"Beginner"),(0,r.kt)("td",{parentName:"tr",align:null},"Shell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom Plugins in APISIX Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"Learn how to create and use a small custom Plugin with APISIX deployed in Kubernetes."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/navendu-pottekkat/apisix-in-kubernetes/tree/master/custom-plugin"},"Custom plugin development for APISIX Ingress demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://navendu.me/posts/custom-plugins-in-apisix-ingress/"},"Custom plugin development for APISIX Ingress blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"Custom plugins, Ingress, Kubernetes"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Lua")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Canary Release in Kubernetes With Apache APISIX Ingress"),(0,r.kt)("td",{parentName:"tr",align:null},"Guide on setting up a canary release in Kubernetes using ",(0,r.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/ingress-controller/next/getting-started/"},"APISIX Ingress Controller"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/navendu-pottekkat/apisix-in-kubernetes/tree/master"},"Canary release in Kubernetes with APISIX demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://navendu.me/posts/canary-in-kubernetes/"},"Canary release in Kubernetes with APISIX blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"Ingress, Kubernetes, Canary release"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Lua")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"An Introduction to Monitoring Microservices with Prometheus and Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"Instruction on how you can set up monitoring on your microservice application using two of the popular tools in this space, ",(0,r.kt)("a",{parentName:"td",href:"https://prometheus.io/"},"Prometheus"),", and ",(0,r.kt)("a",{parentName:"td",href:"https://grafana.com/"},"Grafana"),"."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/navendu-pottekkat/monitoring-101"},"Monitoring microservices demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://navendu.me/posts/introduction-to-monitoring-microservices/"},"Intro to monitoring microservices APIs with APISIX blog post")),(0,r.kt)("td",{parentName:"tr",align:null},"Observability, Prometheus, Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Go, Python")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitor API Health Check with APISIX and Prometheus"),(0,r.kt)("td",{parentName:"tr",align:null},"This example demonstrates how to enable and monitor API health checks using APISIX and Prometheus."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/Boburmirzo/apisix-prometheus-api-health-check"},"Monitor API Health Check with APISIX and Prometheus demo")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.api7.ai/apisix/how-to-guide/observability/monitor-apisix-with-prometheus"},"Prometheus Plugin Demo")),(0,r.kt)("td",{parentName:"tr",align:null},"Observability, Prometheus, Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},"Intermediate"),(0,r.kt)("td",{parentName:"tr",align:null},"Go, Python")))))}m.isMDXComponent=!0}}]);