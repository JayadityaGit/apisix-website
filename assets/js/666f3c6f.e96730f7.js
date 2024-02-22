"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[50031],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56444:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={title:"OpenShift",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","OpenShift"],description:"Guide to install APISIX ingress controller on OpenShift."},s=void 0,o={unversionedId:"deployments/openshift",id:"deployments/openshift",isDocsHomePage:!1,title:"OpenShift",description:"Guide to install APISIX ingress controller on OpenShift.",source:"@site/docs/apisix-ingress-controller/deployments/openshift.md",sourceDirName:"deployments",slug:"/deployments/openshift",permalink:"/docs/ingress-controller/next/deployments/openshift",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/deployments/openshift.md",tags:[],version:"current",frontMatter:{title:"OpenShift",keywords:["APISIX ingress","Apache APISIX","Kubernetes ingress","OpenShift"],description:"Guide to install APISIX ingress controller on OpenShift."},sidebar:"docs",previous:{title:"K3s and RKE (Rancher)",permalink:"/docs/ingress-controller/next/deployments/k3s-rke"},next:{title:"Ingress APISIX Use Examples",permalink:"/docs/ingress-controller/next/tutorials/index"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Before Start",id:"before-start",children:[]},{value:"Install APISIX and ingress controller",id:"install-apisix-and-ingress-controller",children:[]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document explains how you can install APISIX ingress locally on ",(0,i.kt)("a",{parentName:"p",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/container-platform"},"OpenShift"),"."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Setting up APISIX ingress on OpenShift requires the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.redhat.com/en/technologies/cloud-computing/openshift/deploy-red-hat-openshift"},"Deploy your OpenShift cluster")),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://docs.openshift.com/container-platform/4.12/cli_reference/openshift_cli/getting-started-cli.html#installing-openshift-cli"},"OpenShift CLI (oc)")),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,i.kt)("li",{parentName:"ul"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/tools/"},"kubectl"),".")),(0,i.kt)("h2",{id:"before-start"},"Before Start"),(0,i.kt)("p",null,"You should create a Project to deploy APISIX Ingress controller. e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress-apisix")),(0,i.kt)("p",null,"Due to the existence of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/4.9/authentication/managing-security-context-constraints.html"},"security context constraints (SCC)")," in OpenShift, you need to create an authorized account for deployment."),(0,i.kt)("p",null,"You can complete the relevant operations through ",(0,i.kt)("inlineCode",{parentName:"p"},"oc")," CLI."),(0,i.kt)("h2",{id:"install-apisix-and-ingress-controller"},"Install APISIX and ingress controller"),(0,i.kt)("p",null,"The script below installs APISIX and the ingress controller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add apisix https://charts.apiseven.com\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\n#  We use Apisix 3.0 in this example. If you're using Apisix v2.x, please set to v2\nADMIN_API_VERSION=v3\nhelm install apisix apisix/apisix \\\n  --set service.type=NodePort \\\n  --set ingress-controller.enabled=true \\\n  --set etcd.podSecurityContext.enabled=false \\\n  --set etcd.containerSecurityContext.enabled=false \\\n  --create-namespace \\\n  --namespace ingress-apisix \\\n  --set ingress-controller.config.apisix.serviceNamespace=ingress-apisix \\\n  --set ingress-controller.config.apisix.adminAPIVersion=$ADMIN_API_VERSION\nkubectl get service --namespace ingress-apisix\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"APISIX Ingress also supports (beta) the new ",(0,i.kt)("a",{parentName:"p",href:"https://gateway-api.sigs.k8s.io/"},"Kubernetes Gateway API"),"."),(0,i.kt)("p",{parentName:"div"},"If the Gateway API CRDs are not installed in your cluster by default, you can install it by running:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://github.com/kubernetes-sigs/gateway-api/releases/download/v0.5.0/standard-install.yaml\n")),(0,i.kt)("p",{parentName:"div"},"You should also enable APISIX Ingress controller to work with the Gateway API. You can do this by adding the flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--set ingress-controller.config.kubernetes.enableGatewayAPI=true")," while installing through Helm."),(0,i.kt)("p",{parentName:"div"},"See ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/tutorials/configure-ingress-with-gateway-api"},"this tutorial")," for more info."))),(0,i.kt)("p",null,"This will create the five resources mentioned below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),": dataplane the process the traffic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-admin"),": control plane that processes all configuration changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),": ingress controller which exposes APISIX."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless"),": stores configuration and handles internal communication.")),(0,i.kt)("p",null,"You should now be able to use APISIX ingress controller. You can try running this ",(0,i.kt)("a",{parentName:"p",href:"/docs/ingress-controller/next/tutorials/proxy-the-httpbin-service"},"minimal example")," to see if everything is working perfectly."))}c.isMDXComponent=!0}}]);