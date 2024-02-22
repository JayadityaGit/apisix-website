"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[63935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||n;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},22092:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var o=r(87462),i=(r(67294),r(3905));const n={title:"Control Plane Service Discovery",keywords:["API Gateway","Apache APISIX","ZooKeeper","Nacos","APISIX-Seed"],description:"This documentation describes implementing service discovery through Nacos and ZooKeeper on the API Gateway APISIX Control Plane."},a=void 0,s={unversionedId:"discovery/control-plane-service-discovery",id:"discovery/control-plane-service-discovery",isDocsHomePage:!1,title:"Control Plane Service Discovery",description:"This documentation describes implementing service discovery through Nacos and ZooKeeper on the API Gateway APISIX Control Plane.",source:"@site/docs/apisix/discovery/control-plane-service-discovery.md",sourceDirName:"discovery",slug:"/discovery/control-plane-service-discovery",permalink:"/docs/apisix/next/discovery/control-plane-service-discovery",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/discovery/control-plane-service-discovery.md",tags:[],version:"current",frontMatter:{title:"Control Plane Service Discovery",keywords:["API Gateway","Apache APISIX","ZooKeeper","Nacos","APISIX-Seed"],description:"This documentation describes implementing service discovery through Nacos and ZooKeeper on the API Gateway APISIX Control Plane."},sidebar:"docs",previous:{title:"eureka",permalink:"/docs/apisix/next/discovery/eureka"},next:{title:"Kubernetes",permalink:"/docs/apisix/next/discovery/kubernetes"}},c=[{value:"APISIX-Seed Architecture",id:"apisix-seed-architecture",children:[]},{value:"Why APISIX-Seed",id:"why-apisix-seed",children:[]},{value:"Supported service registry",id:"supported-service-registry",children:[]}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document describes how to implement service discovery with Nacos and Zookeeper on the APISIX Control Plane."),(0,i.kt)("h2",{id:"apisix-seed-architecture"},"APISIX-Seed Architecture"),(0,i.kt)("p",null,"Apache APISIX has supported Data Plane service discovery in the early days, and now APISIX also supports Control Plane service discovery through the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-seed"},"APISIX-Seed")," project. The following figure shows the APISIX-Seed architecture diagram."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/control-plane-service-discovery.png",alt:"control-plane-service-discovery"})),(0,i.kt)("p",null,"The specific information represented by the figures in the figure is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Register an upstream with APISIX and specify the service discovery type. APISIX-Seed will watch APISIX resource changes in etcd, filter discovery types, and obtain service names."),(0,i.kt)("li",{parentName:"ol"},"APISIX-Seed subscribes the specified service name to the service registry to obtain changes to the corresponding service."),(0,i.kt)("li",{parentName:"ol"},"After the client registers the service with the service registry, APISIX-Seed will obtain the new service information and write the updated service node into etcd;"),(0,i.kt)("li",{parentName:"ol"},"When the corresponding resources in etcd change, APISIX worker will refresh the latest service node information to memory.")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"It should be noted that after the introduction of APISIX-Seed, if the service of the registry changes frequently, the data in etcd will also change frequently. So, it is best to set the ",(0,i.kt)("inlineCode",{parentName:"p"},"--auto-compaction")," option when starting etcd to compress the history periodically to avoid etcd eventually exhausting its storage space. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/learning/api/#revisions"},"revisions"),"."))),(0,i.kt)("h2",{id:"why-apisix-seed"},"Why APISIX-Seed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Network topology becomes simpler"),(0,i.kt)("p",{parentName:"li"},"APISIX does not need to maintain a network connection with each registry, and only needs to pay attention to the configuration information in etcd. This will greatly simplify the network topology.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Total data volume about upstream service becomes smaller"),(0,i.kt)("p",{parentName:"li"},"Due to the characteristics of the registry, APISIX may store the full amount of registry service data in the worker, such as consul_kv. By introducing APISIX-Seed, each process of APISIX will not need to additionally cache upstream service-related information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Easier to manage"),(0,i.kt)("p",{parentName:"li"},"Service discovery configuration needs to be configured once per APISIX instance. By introducing APISIX-Seed, Apache APISIX will be in different to the configuration changes of the service registry."))),(0,i.kt)("h2",{id:"supported-service-registry"},"Supported service registry"),(0,i.kt)("p",null,"ZooKeeper and Nacos are currently supported, and more service registries will be supported in the future. For more information, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-seed#apisix-seed-for-apache-apisix"},"APISIX Seed"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you want to enable control plane ZooKeeper service discovery, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-seed/blob/main/docs/en/latest/zookeeper.md"},"ZooKeeper Deployment Tutorial"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If you want to enable control plane Nacos service discovery, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-seed/blob/main/docs/en/latest/nacos.md"},"Nacos Deployment Tutorial"),"."))))}p.isMDXComponent=!0}}]);