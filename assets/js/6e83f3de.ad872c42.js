"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[11513],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=o,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return a?n.createElement(d,r(r({ref:t},c),{},{components:a})):n.createElement(d,r({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76971:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(25773),o=(a(27378),a(35318));const i={title:"API monetization using an API Management and a billing provider",authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607"}],keywords:["API Gateway","Apache APISIX","Monetization","API","Microservices","Rate limiting","Quota"],description:"\ud83d\udc81\ud83c\udffc This blog post gives you an idea of building your technology stack with an API Gateway and a payment provider that can help you run quickly and securely your API monetization system which simply provides flexibility for your customers.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/10/25/6357addd22a01.png"},r=void 0,s={permalink:"/blog/2022/09/08/api-monetization-using-stack",source:"@site/blog/2022/09/08/api-monetization-using-stack.md",title:"API monetization using an API Management and a billing provider",description:"\ud83d\udc81\ud83c\udffc This blog post gives you an idea of building your technology stack with an API Gateway and a payment provider that can help you run quickly and securely your API monetization system which simply provides flexibility for your customers.",date:"2022-09-08T00:00:00.000Z",formattedDate:"September 8, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.255,truncated:!0,authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607",imageURL:"https://avatars.githubusercontent.com/u/14247607"}],prevItem:{title:"Hands-On: Set Up Ingress on Kubernetes With Apache APISIX Ingress Controller",permalink:"/blog/2022/09/09/kubernetes-ingress-with-apisix"},nextItem:{title:"Fault Injection Testing with API Gateway",permalink:"/blog/2022/08/28/fault-injection-testing-with-api-gateway"}},l={authorsImageUrls:[void 0]},p=[{value:"API Monetization",id:"api-monetization",children:[{value:"Here is a quick overview of what we covered \ud83d\udc47",id:"here-is-a-quick-overview-of-what-we-covered-",children:[],level:3}],level:2},{value:"API monetization models",id:"api-monetization-models",children:[],level:2},{value:"Two common ways to monetize APIs",id:"two-common-ways-to-monetize-apis",children:[{value:"Subscription Billing Model",id:"subscription-billing-model",children:[],level:3},{value:"Metered Billing Model",id:"metered-billing-model",children:[],level:3},{value:"Calculating bills",id:"calculating-bills",children:[],level:3}],level:2},{value:"Two simple API monetization stack components",id:"two-simple-api-monetization-stack-components",children:[{value:"API Management",id:"api-management",children:[{value:"Apply rate limit policies",id:"apply-rate-limit-policies",children:[],level:4}],level:3},{value:"A billing provider",id:"a-billing-provider",children:[],level:3},{value:"How API Management and a billing platform work together",id:"how-api-management-and-a-billing-platform-work-together",children:[],level:3}],level:2},{value:"Conclusion",id:"conclusion",children:[{value:"Related resources",id:"related-resources",children:[],level:3},{value:"Recommended content \ud83d\udc81",id:"recommended-content-",children:[],level:3},{value:"Community\u2935\ufe0f",id:"community\ufe0f",children:[],level:3}],level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udc81\ud83c\udffc This blog post gives you an idea of building your technology stack with an ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/api-gateway/"},"API Gateway")," and a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_online_payment_service_providers"},"payment provider")," that can help you run quickly and securely your API monetization system which simply provides flexibility for your customers.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/08/63199c499a244.png",alt:"Api Monetization Technological Stack"})),(0,o.kt)("h2",{id:"api-monetization"},"API Monetization"),(0,o.kt)("p",null,"As an owner of API, you develop some code and deploy it to a server. That server might have a bunch of HTTP/HTTPs endpoints that do something useful. Maybe like retrieving data about all current discounts and voucher information from different markets in your city. And other developers want to use this data but they do not want to implement the same solution on their own. So, they reach out to you for permission to make requests to your server."),(0,o.kt)("p",null,"Using ",(0,o.kt)("strong",{parentName:"p"},"APIs")," is an ideal way to ",(0,o.kt)("strong",{parentName:"p"},"monetize your services"),". An API lets you reach customers through multiple channels and allows third-party applications or developers to consume your data. API monetization is a way that businesses can use APIs to convert usages of the data into money \ud83d\udcb8. When it comes to making money from your APIs, there are multiple ways. Most often you think about how to get started with the right tools and how to set up billing for your APIs."),(0,o.kt)("h3",{id:"here-is-a-quick-overview-of-what-we-covered-"},"Here is a quick overview of what we covered \ud83d\udc47"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2705 Monetization options."),(0,o.kt)("li",{parentName:"ul"},"\u2705 Two common ways to monetize APIs."),(0,o.kt)("li",{parentName:"ul"},"\u2705 Simple API monetization stack components: an API Management and a billing provider."),(0,o.kt)("li",{parentName:"ul"},"\u2705 How API Management and a payment platform work together."),(0,o.kt)("li",{parentName:"ul"},"\u2705 How to apply rate limiting policies."),(0,o.kt)("li",{parentName:"ul"},"\u2705 How Apache APISIX can be useful to monitor and limit API usage.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/08/63199c4a813a7.png",alt:"APISIX API Monetization"})),(0,o.kt)("h2",{id:"api-monetization-models"},"API monetization models"),(0,o.kt)("p",null,"There are several pricing approaches you can take for monetization. When you are developing ",(0,o.kt)("strong",{parentName:"p"},"API monetization strategies"),", you should always consider that you deliver high-quality, consistent value to your API users. As the API Provider, you talk to your current API users to identify problems your service is solving and offer pricing models according to the target customer. For example, if customers use one specific feature of your API more than others, you could spin that feature off into its own product with its own pricing plan."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/08/63199c4a07f63.png",alt:"API Monetization customer agreement"})),(0,o.kt)("p",null,"Some API billing models for monetization include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Freemium"},"Freemium"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pay-as-you-use"},"Pay as you go"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Subscription_business_model"},"Subscription"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pay_per_sale"},"Pay-per-transaction"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Revenue_sharing"},"Revenue share"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Pay-per-click"},"Pay for ad-free content"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.softwareag.com/en_corporate/resources/what-is/api-monetization.html#:~:text=low%2Dcost%20apps.-,Paid%20partner%3A,-In%20this%20model"},"Paid partner"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/08/63199c603bd09.png",alt:"API Monetization models"})),(0,o.kt)("p",null,"In the freemium model, Developers have access to a basic API for free up to a specific threshold and transition to pay-per-use in a tiered pricing model when they exceed that limit. This model is quite often used to explore API use cases, test your APIs, or make quick a proof of concept. You can learn more about other models in depth ",(0,o.kt)("a",{parentName:"p",href:"https://www.softwareag.com/en_corporate/resources/what-is/api-monetization.html"},"here"),"."),(0,o.kt)("h2",{id:"two-common-ways-to-monetize-apis"},"Two common ways to monetize APIs"),(0,o.kt)("p",null,"Let\u2019s take a look closely at the most common ways to directly monetize your APIs like the ",(0,o.kt)("strong",{parentName:"p"},"Subscription billing model"),", where you charge your customers a flat monthly fee to access your APIs; and ",(0,o.kt)("strong",{parentName:"p"},"Metered billing model"),", where you charge your customers based on the number of API calls they make."),(0,o.kt)("h3",{id:"subscription-billing-model"},"Subscription Billing Model"),(0,o.kt)("p",null,"In this model, API Consumer pays for a set of numbers of calls per month. For example, a consumer pays $100 to access up to 10,000 API calls per month. Whether they make 0 API calls or 10,000 API calls, the consumer is charged $100 each month."),(0,o.kt)("h3",{id:"metered-billing-model"},"Metered Billing Model"),(0,o.kt)("p",null,"With a ",(0,o.kt)("strong",{parentName:"p"},"Metered Billing model"),", API Consumers can make as many calls as they want per month and you only charge the consumer a fee for each API call they make. If the customer makes 7,000 API calls at $0.01 per call then the bill at the end of the month would be $70."),(0,o.kt)("h3",{id:"calculating-bills"},"Calculating bills"),(0,o.kt)("p",null,"Calculating bills in subscription-based pricing model is very straightforward because you don\u2019t need to count how many API calls were made. Instead, you charge each user a flat monthly fee. However, calculating bills for metered users might be a little bit challenging since we need to have custom code in your API service that not only tracks API usage but it should be also capable of applying rate limiting policies to the APIs depending on users accessing your APIs."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/08/63199ca23e5bc.png",alt:"Calculating bills"})),(0,o.kt)("p",null,"In this case, we might need to consider a suitable API monetization stack with existing solutions to build a solid foundation for your API monetization that reduces the time and investment required to build your own service to measure API usage."),(0,o.kt)("h2",{id:"two-simple-api-monetization-stack-components"},"Two simple API monetization stack components"),(0,o.kt)("p",null,"We can choose the combination of two elements for our API monetization stack that most modern businesses are using nowadays: API Management like ",(0,o.kt)("strong",{parentName:"p"},"an API Gateway")," and ",(0,o.kt)("strong",{parentName:"p"},"a billing provider"),". Let\u2019s break down each component and understand the role of each in API monetization."),(0,o.kt)("h3",{id:"api-management"},"API Management"),(0,o.kt)("p",null,"API Management service itself offers two helpful features such as ",(0,o.kt)("em",{parentName:"p"},"API Gateway and API Analytics"),"). ",(0,o.kt)("strong",{parentName:"p"},"API analytics feature")," can be used for tracking API usage because the analytics is able to collect API consumption metrics around every API call\xa0made by each of your API consumers. This usage data can be used to bill each consumer and send an invoice to collect monthly payments."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," can also integrate with a variety of observability platforms like ",(0,o.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus"),", ",(0,o.kt)("a",{parentName:"p",href:"https://opentelemetry.io/"},"OpenTelemetry"),", ",(0,o.kt)("a",{parentName:"p",href:"https://skywalking.apache.org/"},"Apache Skywalking")," and etc. by using its ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/plugins/"},"connector plugins")," \ud83d\udd0c to further analyze API performance and gain complete visibility."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"API Gateway")," can help with the challenges that you meet with implementing cross-cutting concerns for APIs. As an API Gateway acts as a central proxy to route all incoming requests from your clients to intended destinations (backend services), it can make securing and managing your APIs much easier. Most gateways support a wide variety of authorization and authentication protocols to control API access, caching mechanisms for API responses, or support for rate limiting and exposing quotas with API usage details. \xa0"),(0,o.kt)("p",null,"There are many popular open-source projects available like ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," or alternative enterprise SaaS solutions such as ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/api-management/"},"Azure API Management"),", ",(0,o.kt)("a",{parentName:"p",href:"https://api7.ai/cloud"},"API7 Cloud")," in a public cloud. You can investigate the pros and cons of each to choose the more suitable one for your needs."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/08/63199cc33bd68.png",alt:"Apache APISIX API Gateway"})),(0,o.kt)("h4",{id:"apply-rate-limit-policies"},"Apply rate limit policies"),(0,o.kt)("p",null,"Resources cost money \ud83d\udcb0. We can protect an API by adding ",(0,o.kt)("em",{parentName:"p"},"a rate limit policy")," with Apache APISIX as it is a basic step toward API Monetization. Apache APISIX allows you to set throttling limits per each API consumer and quotas to your APIs and allows you to control third-party usage of your API by ensuring you are able to monetize your API."),(0,o.kt)("p",null,"APISIX uses its ",(0,o.kt)("inlineCode",{parentName:"p"},"limit-count")," (",(0,o.kt)("em",{parentName:"p"},"rate limiting"),") plugin. ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/limit-count/"},"API rate limiting plugin")," can prevent an API not only from being overwhelmed or from possible malicious attacks but also it can enforce a limit on the number of data clients can consume. Later you can charge API consumers by the quantity of data used (the number of requests)."),(0,o.kt)("p",null,"With the help of APISIX ",(0,o.kt)("inlineCode",{parentName:"p"},"rate-limiting")," plugin, you can also configure the different rate limits for authenticated and unauthenticated requests. It also defines the limit quota in the ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/limit-count/"},"response headers")," to track the maximum number of requests you are permitted to make or the number of requests remaining in the current rate limit window."),(0,o.kt)("p",null,"Refer to the documentation to understand ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/consumer/"},"Consumer concept")," and learn the different ways to set up ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/limit-count/"},"rate limiting")," with Apache APISIX."),(0,o.kt)("h3",{id:"a-billing-provider"},"A billing provider"),(0,o.kt)("p",null,"Next, for your API monetization stack, you need a 3rd-party recurring billing solution, such as ",(0,o.kt)("a",{parentName:"p",href:"https://stripe.com/en-gb-ee"},"Stripe"),", ",(0,o.kt)("a",{parentName:"p",href:"https://recurly.com/"},"Recurly"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.hypercurrent.io/"},"Hypercurrent"),", and many more. But again, we do not recommend any particular payment service in this post and leave the choice of which payment provider to use up to you. The billing provider obviously needs to receive usage charges for each customer, issue an invoice, and support multiple billing models, currencies \ud83d\udcb5 \ud83d\udcb4 \ud83d\udcb6 \ud83d\udcb7, and payment methods."),(0,o.kt)("h3",{id:"how-api-management-and-a-billing-platform-work-together"},"How API Management and a billing platform work together"),(0,o.kt)("p",null,"To make these two API monetization components work well together, you need to integrate API Management and billing software. For instance, Apache APISIX tracks API usage in real-time\xa0saves consumption details and exposes a dedicated endpoint with an API usage report. On the other hand, the billing provider enables you to send a monthly invoice to each of your consumer\u2019s API usage."),(0,o.kt)("p",null,"You\u2019ll also want to be aware of what it takes to integrate the billing provider with your current solution by considering the fact that different providers have different ways to integrate mainly through ",(0,o.kt)("em",{parentName:"p"},"API communication"),". We will describe the integration process with Apache APISIX with a step-by-step tutorial in our next post in this series."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"As we went through the post, there is an effortless way to monetize your API that consists of two components an API Management service and a billing provider.\xa0 To get started, identify your API monetization model as the first step. Next, manage your APIs with an API Gateway, and set throttling limits and quotas to your APIs. Then, choose a proper payment provider to deal with processing payment transactions, issuing invoices, and managing subscriptions. On a later stage, apply API analytics to your system so you can monitor API usage and scale it as needed. You can review the analytics reports regularly to understand how your monetization strategy is being adopted by API consumers."),(0,o.kt)("h3",{id:"related-resources"},"Related resources"),(0,o.kt)("p",null,"\u2794 ",(0,o.kt)("a",{parentName:"p",href:"https://www.softwareag.com/en_corporate/resources/what-is/api-monetization.html"},"What is API monetization?"),"."),(0,o.kt)("p",null,"\u2794 ",(0,o.kt)("a",{parentName:"p",href:"https://www.zeni.ai/blog/best-saas-subscription-billing-solution-chargebee-vs-recurly-vs-stripe-billing"},"Best SaaS Subscription Billing Solution"),"."),(0,o.kt)("p",null,"\u2794 ",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/@madhukaudantha/api-monetization-models-f9d21c95bdc8"},"API Monetization Models"),"."),(0,o.kt)("h3",{id:"recommended-content-"},"Recommended content \ud83d\udc81"),(0,o.kt)("p",null,"\u2794 Watch Video Tutorial:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/dUOjJkb61so"},"Getting Started with Apache APISIX"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://youtu.be/hMFjhwLMtQ8"},"APIs security with Apache APISIX"),".")),(0,o.kt)("p",null,"\u2794 Read the blog posts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://dev.to/apisix/overview-of-apache-apisix-api-gateway-plugins-2m8o"},"Overview of Apache APISIX API Gateway Plugins"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://dev.to/apisix/apis-observability-with-apache-apisix-plugins-1bnm"},"API Observability with Apache APISIX Plugins"),"."))),(0,o.kt)("h3",{id:"community\ufe0f"},"Community\u2935\ufe0f"),(0,o.kt)("p",null,"\ud83d\ude4b ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join/"},"Join the Apache APISIX Community"),"\n\ud83d\udc26 ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/ApacheAPISIX"},"Follow us on Twitter"),"\n\ud83d\udcdd ",(0,o.kt)("a",{parentName:"p",href:"https://join.slack.com/t/the-asf/shared_invite/zt-vlfbf7ch-HkbNHiU_uDlcH_RvaHv9gQ"},"Find us on Slack"),"\n\ud83d\udce7 ",(0,o.kt)("a",{parentName:"p",href:"dev@apisix.apache.org"},"Mail to us")," with your questions."))}u.isMDXComponent=!0}}]);