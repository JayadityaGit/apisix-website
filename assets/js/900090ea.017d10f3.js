"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[28591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||a;return n?o.createElement(m,i(i({ref:t},l),{},{components:n})):o.createElement(m,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96027:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Best practice to avoid race condition between Kubelet and APISIX"},i=void 0,s={unversionedId:"tutorials/how-to-avoid-race-condition-when-scaling-down",id:"tutorials/how-to-avoid-race-condition-when-scaling-down",isDocsHomePage:!1,title:"Best practice to avoid race condition between Kubelet and APISIX",description:"While scaling down the number of pods in your upstream, few of the pods are marked as Terminating. On the node where the Pod is running: as soon as the kubelet sees that a Pod has been marked as terminating (a graceful shutdown duration has been set), the kubelet begins the local Pod shutdown process. At the same time as the kubelet is starting graceful shutdown of the Pod, the control plane evaluates whether to remove that shutting-down Pod from EndpointSlice (and Endpoints) objects, where those objects represent a Service with a configured selector. ReplicaSets and other workload resources no longer treat the shutting-down Pod as a valid, in-service replica.\nPods that shut down slowly should not continue to serve regular traffic and should start terminating and finish processing open connections.",source:"@site/docs/apisix-ingress-controller/tutorials/how-to-avoid-race-condition-when-scaling-down.md",sourceDirName:"tutorials",slug:"/tutorials/how-to-avoid-race-condition-when-scaling-down",permalink:"/docs/ingress-controller/next/tutorials/how-to-avoid-race-condition-when-scaling-down",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/tutorials/how-to-avoid-race-condition-when-scaling-down.md",tags:[],version:"current",frontMatter:{title:"Best practice to avoid race condition between Kubelet and APISIX"}},c=[{value:"Prerequisite",id:"prerequisite",children:[]},{value:"The race condition",id:"the-race-condition",children:[]},{value:"PreStop hook",id:"prestop-hook",children:[]},{value:"Solution",id:"solution",children:[]}],d={toc:c};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"While scaling down the number of pods in your upstream, few of the pods are marked as Terminating. On the node where the Pod is running: as soon as the kubelet sees that a Pod has been marked as terminating (a graceful shutdown duration has been set), the kubelet begins the local Pod shutdown process. At the same time as the kubelet is starting graceful shutdown of the Pod, the control plane evaluates whether to remove that shutting-down Pod from EndpointSlice (and Endpoints) objects, where those objects represent a Service with a configured selector. ReplicaSets and other workload resources no longer treat the shutting-down Pod as a valid, in-service replica.\nPods that shut down slowly should not continue to serve regular traffic and should start terminating and finish processing open connections."),(0,r.kt)("h2",{id:"the-race-condition"},"The race condition"),(0,r.kt)("p",null,"APISIX ingress controller also watches for pod updates(for upstream pods). And updates the APISIX instance with new upstreams and removes the older upstreams. But this process might take time depending on the latency between Ingress controller and APISIX instance. This latency can be large if APISIX and Ingress controller have a number of network hops between them or it can be low if you're running APISIX ingress controller in ",(0,r.kt)("a",{parentName:"p",href:"/docs/ingress-controller/next/composite"},"composite mode")," where both ingress controller and APISIX instance are running in the same pod. But there is some latency(t) and if the time taken by the Kubelet to terminate those pods is less than t then for some period of time users might get 5xx errors because few of the requests may get routed to the upstreams(terminated pods) that are no longer available."),(0,r.kt)("h2",{id:"prestop-hook"},"PreStop hook"),(0,r.kt)("p",null,"If one of the Pod's containers has defined a ",(0,r.kt)("inlineCode",{parentName:"p"},"PreStop")," hook and the ",(0,r.kt)("inlineCode",{parentName:"p"},"terminationGracePeriodSeconds")," in the Pod spec is not set to 0, the kubelet runs that hook inside of the container. The default ",(0,r.kt)("inlineCode",{parentName:"p"},"terminationGracePeriodSeconds")," setting is 30 seconds."),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"You can add delay to the termination of the upstream pod by some seconds (for eg: 5 seconds) to make sure that the pod is not terminated before the APISIX instance gets updated."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the preStop hook needs longer to complete than the default grace period allows, you must modify ",(0,r.kt)("inlineCode",{parentName:"p"},"terminationGracePeriodSeconds")," to suit this. This is 30 seconds by default. For more information, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-termination"},"Kubernetes docs"),"."))),(0,r.kt)("p",null,"Below is the example usage of one such Pod configuration which will act as upstream for APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: example-pod\nspec:\n  containers:\n  - name: web-server\n    image: web-server:latest\n    lifecycle:\n      preStop:\n        exec:\n          command: ["/bin/sh", "-c", "sleep 5"]\n\n')))}l.isMDXComponent=!0}}]);