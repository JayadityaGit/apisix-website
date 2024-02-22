"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[27798],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(r),h=s,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92789:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),s=(r(67294),r(3905));const a={title:"Match Stream Route with SNI"},i=void 0,o={unversionedId:"tutorials/match-stream-route-by-sni",id:"tutorials/match-stream-route-by-sni",isDocsHomePage:!1,title:"Match Stream Route with SNI",description:"SNI(Server Name Indication) is an extension to the TLS protocol which allows a client to indicate which hostname it is attempting to connect to at the start of the TCP handshaking process.\nInstead of requiring a different IP address for each SSL site, you can use SNI to install and configure multiple SSL sites to one IP address.",source:"@site/docs/apisix-ingress-controller/tutorials/match-stream-route-by-sni.md",sourceDirName:"tutorials",slug:"/tutorials/match-stream-route-by-sni",permalink:"/zh/docs/ingress-controller/next/tutorials/match-stream-route-by-sni",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/zh/latest/tutorials/match-stream-route-by-sni.md",tags:[],version:"current",frontMatter:{title:"Match Stream Route with SNI"},sidebar:"docs",previous:{title:"Using APISIX Ingress as Istio Egress Gateway",permalink:"/zh/docs/ingress-controller/next/tutorials/istio-egress-gateway"},next:{title:"ApisixRoute/v2beta3",permalink:"/zh/docs/ingress-controller/next/references/apisix_route_v2beta3"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploy Redis service",id:"deploy-redis-service",children:[]},{value:"Create the certificates",id:"create-the-certificates",children:[]},{value:"Create ApisixTls associated with Secret",id:"create-apisixtls-associated-with-secret",children:[]},{value:"Create ApisixRoute that matches the stream route with SNI",id:"create-apisixroute-that-matches-the-stream-route-with-sni",children:[]},{value:"Test",id:"test",children:[]}],l={toc:c};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"SNI(Server Name Indication) is an extension to the TLS protocol which allows a client to indicate which hostname it is attempting to connect to at the start of the TCP handshaking process.\nInstead of requiring a different IP address for each SSL site, you can use SNI to install and configure multiple SSL sites to one IP address."),(0,s.kt)("p",null,"This guide walks through how to use the ApisixTls and ApisixRoute to route TLS-encrypted traffic to the TCP-based services with SNI."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"an available Kubernetes cluster."),(0,s.kt)("li",{parentName:"ul"},"an available APISIX and APISIX Ingress Controller installation.")),(0,s.kt)("p",null,"First of all, when installing APISIX, we need to enable TLS for the TCP address for APISIX in the Helm Chart, assume that TLS is enabled on TCP port 6379."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"gateway:\n  # L4 proxy (TCP/UDP)\n  stream:\n    enabled: true\n    tcp:\n      - addr: 6379\n        tls: true\n    udp: []\n")),(0,s.kt)("h2",{id:"deploy-redis-service"},"Deploy Redis service"),(0,s.kt)("p",null,"Before configuring the APISIX, we need to create 2 Redis services for testing."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: redis-1\n  name: redis-1\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: redis-1\n  template:\n    metadata:\n      labels:\n        app: redis-1\n    spec:\n      containers:\n      - image: redis:6.2.7\n        name: redis\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: redis-1\n  name: redis-1\nspec:\n  ports:\n  - port: 6379\n    protocol: TCP\n    targetPort: 6379\n  selector:\n    app: redis-1\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  labels:\n    app: redis-2\n  name: redis-2\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: redis-2\n  template:\n    metadata:\n      labels:\n        app: redis-2\n    spec:\n      containers:\n      - image: redis:6.2.7\n        name: redis\n---\napiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: redis-2\n  name: redis-2\nspec:\n  ports:\n  - port: 6379\n    protocol: TCP\n    targetPort: 6379\n  selector:\n    app: redis-2\n")),(0,s.kt)("h2",{id:"create-the-certificates"},"Create the certificates"),(0,s.kt)("p",null,"When using SNI with TLS, a valid certificate is required for each domain or hostname that you want to use with SNI.\nThis is because SNI allows multiple hostnames to be served from the same IP address and port, and the certificate is used to verify the identity of the server and establish an encrypted connection with the client."),(0,s.kt)("p",null,"Use OpenSSL to generate the certificate file and the key file for 2 Redis services."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout redis-1.key -out redis-1.crt -subj "/CN=redis-1.com"\nopenssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -keyout redis-2.key -out redis-2.crt -subj "/CN=redis-2.com"\n')),(0,s.kt)("p",null,"Use kubectl with the tls secret type to create the Secrets using the certificate file and the key file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret tls redis-1-secret --cert=./redis-1.crt --key=./redis-1.key\nkubectl create secret tls redis-2-secret --cert=./redis-2.crt --key=./redis-2.key\n")),(0,s.kt)("h2",{id:"create-apisixtls-associated-with-secret"},"Create ApisixTls associated with Secret"),(0,s.kt)("p",null,"Create ApisixTls associated with Secret resource, note the hosts field should match the domain or hostname in the certificate.\nThe apisix-ingress-controller will generate an APISIX SSL object in the APISIX."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixTls\nmetadata:\n  name: redis-1-tls\nspec:\n  hosts:\n    - redis-1.com\n  secret:\n    name: redis-1-secret\n    namespace: default\n---\napiVersion: apisix.apache.org/v2\nkind: ApisixTls\nmetadata:\n  name: redis-2-tls\nspec:\n  hosts:\n    - redis-2.com\n  secret:\n    name: redis-2-secret\n    namespace: default\n")),(0,s.kt)("h2",{id:"create-apisixroute-that-matches-the-stream-route-with-sni"},"Create ApisixRoute that matches the stream route with SNI"),(0,s.kt)("p",null,"Define the route for proxying two Redis services traffic through APISIX. Specify the ",(0,s.kt)("inlineCode",{parentName:"p"},"spec.stream.match.host")," field to match the stream route with SNI."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: redis-stream-route\nspec:\n  stream:\n  - name: redis-1\n    protocol: TCP\n    match:\n      ingressPort: 6379\n      host: redis-1.com \n    backend:\n      serviceName: redis-1\n      servicePort: 6379\n  - name: redis-2\n    protocol: TCP\n    match:\n      ingressPort: 6379\n      host: redis-2.com\n    backend:\n      serviceName: redis-2\n      servicePort: 6379\n")),(0,s.kt)("h2",{id:"test"},"Test"),(0,s.kt)("p",null,"Let's verify the configuration. In order to access APISIX locally, we can use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl port-forward")," command to forward traffic from the specified port at your local machine to the specified port on the specified service."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl port-forward -n ingress-apisix svc/apisix-gateway 6379:6379\n")),(0,s.kt)("p",null,"Now, connect to 2 Redis services, and set a key named ",(0,s.kt)("inlineCode",{parentName:"p"},"server"),", with different values to distinguish 2 Redis services."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"# connect to the redis-1 server\nredis-cli -h 127.0.0.1 -p 6379 --tls --sni redis-1.com --insecure\n127.0.0.1:6379> set server redis-1\nOK\n\n# connect to the redis-2 server\nredis-cli -h 127.0.0.1 -p 6379 --tls --sni redis-2.com --insecure\n127.0.0.1:6379> set server redis-2\nOK\n")),(0,s.kt)("p",null,"Then connect to Redis services again to check whether routing based on SNI is successful."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'redis-cli -h 127.0.0.1 -p 6379 --tls --sni redis-1.com --insecure\n127.0.0.1:6379> get server\n"redis-1"\n\nredis-cli -h 127.0.0.1 -p 6379 --tls --sni redis-2.com --insecure\n127.0.0.1:6379> get server\n"redis-2"\n')))}d.isMDXComponent=!0}}]);