"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[94220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),d=r,u=h["".concat(l,".").concat(d)]||h[d]||m[d]||s;return n?a.createElement(u,i(i({ref:t},p),{},{components:n})):a.createElement(u,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},663:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={title:"Install Ingress APISIX on Amazon EKS"},i=void 0,o={unversionedId:"deployments/aws",id:"version-1.0.0/deployments/aws",isDocsHomePage:!1,title:"Install Ingress APISIX on Amazon EKS",description:"This document explains how to install Ingress APISIX on Amazon EKS.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.0.0/deployments/aws.md",sourceDirName:"deployments",slug:"/deployments/aws",permalink:"/docs/ingress-controller/1.0.0/deployments/aws",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.0.0/docs/en/latest/deployments/aws.md",tags:[],version:"1.0.0",frontMatter:{title:"Install Ingress APISIX on Amazon EKS"},sidebar:"version-1.0.0/docs",previous:{title:"Install Ingress APISIX on ACK",permalink:"/docs/ingress-controller/1.0.0/deployments/ack"},next:{title:"Install Ingress APISIX on Azure AKS",permalink:"/docs/ingress-controller/1.0.0/deployments/azure"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,r.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/eks/?whats-new-cards.sort-by=item.additionalFields.postDateTime&whats-new-cards.sort-order=desc&eks-blogs.sort-by=item.additionalFields.createdDate&eks-blogs.sort-order=desc"},"Amazon EKS"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an EKS Service on AWS."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,r.kt)("li",{parentName:"ul"},"Download the kube config for your EKS from ",(0,r.kt)("a",{parentName:"li",href:"https://amazonaws-china.com/cli/"},"aws cli interface"),"."),(0,r.kt)("li",{parentName:"ul"},"Clone ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,r.kt)("h2",{id:"install-apisix"},"Install APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add apisix https://charts.apiseven.com\n# Use `helm search repo apisix` to search charts about apisix\nhelm repo update\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set admin.allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix \\\nkubectl get service --namespace ingress-apisix\n')),(0,r.kt)("p",null,"Two Service resources were created, one is ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,r.kt)("p",null,"The gateway service type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," (See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html"},"AWS Network Balancer")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer hostname by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].hostname}'\n")),(0,r.kt)("p",null,"Another thing should be concerned that the ",(0,r.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the ",(0,r.kt)("a",{parentName:"p",href:"https://amazonaws-china.com/premiumsupport/knowledge-center/eks-multiple-cidr-ranges/"},"EKS CIDR Ranges"),", so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),(0,r.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,r.kt)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller apisix/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix\n")),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to wait for while until the corresponding pods are running."),(0,r.kt)("p",null,"Now open your ",(0,r.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/eks/home"},"EKS console"),", choosing your cluster and clicking the Workloads tag, you'll see all pods of Apache APISIX, etcd and apisix-ingress-controller are ready."),(0,r.kt)("p",null,"Try to create some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/ingress-controller/1.0.0/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}p.isMDXComponent=!0}}]);