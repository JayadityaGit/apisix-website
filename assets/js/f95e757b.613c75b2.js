"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[83293],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,g=m["".concat(a,".").concat(d)]||m[d]||u[d]||s;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9374:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(87462),i=(t(67294),t(3905));const s={title:"minikube",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","minikube"],description:"Guide to install APISIX ingress controller on minikube."},l=void 0,o={unversionedId:"deployments/minikube",id:"version-1.6.1/deployments/minikube",isDocsHomePage:!1,title:"minikube",description:"Guide to install APISIX ingress controller on minikube.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.1/deployments/minikube.md",sourceDirName:"deployments",slug:"/deployments/minikube",permalink:"/docs/ingress-controller/1.6.1/deployments/minikube",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.1/docs/en/latest/deployments/minikube.md",tags:[],version:"1.6.1",frontMatter:{title:"minikube",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","minikube"],description:"Guide to install APISIX ingress controller on minikube."},sidebar:"version-1.6.1/docs",previous:{title:"Getting started",permalink:"/docs/ingress-controller/1.6.1/getting-started"},next:{title:"kind",permalink:"/docs/ingress-controller/1.6.1/deployments/kind"}},a=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]}],c={toc:a};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide explains how you can install APISIX ingress on ",(0,i.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"minikube"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),".")),(0,i.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,i.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix\nkubectl get service --namespace ingress-apisix\n")),(0,i.kt)("p",null,"This will create the five resources mentioned below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,i.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,i.kt)("a",{parentName:"p",href:"/docs/ingress-controller/1.6.1/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."))}p.isMDXComponent=!0}}]);