"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3386],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=d(a),k=r,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},23898:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={title:"ApisixRoute/v2beta3",keywords:["APISIX ingress","Apache APISIX","ApisixRoute"],description:"Reference for ApisixRoute/v2beta3 custom Kubernetes resource."},i=void 0,o={unversionedId:"references/apisix_route_v2beta3",id:"version-1.6.1/references/apisix_route_v2beta3",isDocsHomePage:!1,title:"ApisixRoute/v2beta3",description:"Reference for ApisixRoute/v2beta3 custom Kubernetes resource.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.1/references/apisix_route_v2beta3.md",sourceDirName:"references",slug:"/references/apisix_route_v2beta3",permalink:"/zh/docs/ingress-controller/1.6.1/references/apisix_route_v2beta3",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.1/docs/zh/latest/references/apisix_route_v2beta3.md",tags:[],version:"1.6.1",frontMatter:{title:"ApisixRoute/v2beta3",keywords:["APISIX ingress","Apache APISIX","ApisixRoute"],description:"Reference for ApisixRoute/v2beta3 custom Kubernetes resource."},sidebar:"version-1.6.1/docs",previous:{title:"Using External Services Discovery In ApisixUpstream",permalink:"/zh/docs/ingress-controller/1.6.1/tutorials/external-service-discovery"},next:{title:"ApisixRoute/v2",permalink:"/zh/docs/ingress-controller/1.6.1/references/apisix_route_v2"}},p=[{value:"Spec",id:"spec",children:[]},{value:"Expression operators",id:"expression-operators",children:[]},{value:"Service resolution granularity",id:"service-resolution-granularity",children:[]}],d={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/ingress-controller/concepts/apisix_route"},"concepts")," to learn more about how to use the ApisixRoute resource."),(0,r.kt)("h2",{id:"spec"},"Spec"),(0,r.kt)("p",null,"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/master/samples/deploy/crd/v1/ApisixRoute.yaml"},"definition")," on GitHub."),(0,r.kt)("p",null,"The table below describes each of the attributes in the spec. The fields ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," are similar to other Kubernetes resources and are excluded below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Route rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"Route rule name.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].priority"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Route priority. Used to determined which Route to use when multiple routes contain the same URI. Large number means higher priority.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions to match a request with the Route.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.paths"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"List of URIs to match the Route with. The Route will be used if any one of the URIs is matched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"List of hosts to match the Route with. The Route will be used if any one of the hosts is matched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.methods"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"List of HTTP methods (",(0,r.kt)("inlineCode",{parentName:"td"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PUT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"DELETE"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"PATCH"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"HEAD"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"OPTIONS"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"CONNECT"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"TRACE"),") to match the Route with. The Route will be used if any one of the methods is matched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.remoteAddrs"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"List of IP addresses (CIDR format) to match the Route with. The Route will be used if any one of the IP address is matched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"List of expressions to match the Route with. The Route will be used if any one of the expression is matched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Subject for the expression.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.scope"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Scope of the subject. Can be one of ",(0,r.kt)("inlineCode",{parentName:"td"},"Header"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Query"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Cookie"),", or ",(0,r.kt)("inlineCode",{parentName:"td"},"Path"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].subject.name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Subject name. Can be empty when the scope is ",(0,r.kt)("inlineCode",{parentName:"td"},"Path"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].op"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Operator for the expression. See ",(0,r.kt)("a",{parentName:"td",href:"#expression-operators"},"Expression operators")," for more details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Value to compare the subject with. Can use either this or ",(0,r.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].match.exprs[].set"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to compare the subject with. Only used when the operator is ",(0,r.kt)("inlineCode",{parentName:"td"},"In")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"NotIn"),". Can use either this or ",(0,r.kt)("inlineCode",{parentName:"td"},"http[].match.exprs[].value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"List of backend services. If there are more than one, a weight based traffic split policy would be applied.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the backend service. The service and the ",(0,r.kt)("inlineCode",{parentName:"td"},"ApisixRoute")," resource should be created in the same namespace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].servicePort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,r.kt)("td",{parentName:"tr",align:null},"Port number or the name defined in the service object of the backend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].resolveGranularity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#service-resolution-granularity"},"Service resolution granularity")," for details.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].weight"),(0,r.kt)("td",{parentName:"tr",align:null},"int"),(0,r.kt)("td",{parentName:"tr",align:null},"Weight with which to split traffic to the backend. Defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"100")," and is ignored when there is only one backend.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].backends[].subset"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Subset for the target service. Should be pre-defined in the ",(0,r.kt)("inlineCode",{parentName:"td"},"ApisixUpstream")," resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/plugins/batch-requests/"},"APISIX Plugins")," to be executed if the Route is matched.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the Plugin. See ",(0,r.kt)("a",{parentName:"td",href:"https://apisix.apache.org/plugins/"},"Plugin hub")," for a list of available Plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].enable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the Plugin is enabled on the Route.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].plugins[].config"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration of the Plugin. Should have the same fields as in ",(0,r.kt)("a",{parentName:"td",href:"https://apisix.apache.org/docs/apisix/plugins/batch-requests/"},"APISIX docs"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"http[].websocket"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," enables websocket proxy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Stream route rules. Contains TCP or UDP rules.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"The protocol of rule. Support ",(0,r.kt)("inlineCode",{parentName:"td"},"TCP")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"UDP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].name"),(0,r.kt)("td",{parentName:"tr",align:null},"string (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the rule.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].match"),(0,r.kt)("td",{parentName:"tr",align:null},"object (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"Conditions to match the request with the Route.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].match.ingressPort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer (required)"),(0,r.kt)("td",{parentName:"tr",align:null},"Listening port in the Ingress proxy server. This port should be defined in the ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/conf/config-default.yaml#L101"},"APISIX configuration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Backend service (deprecated). Use ",(0,r.kt)("inlineCode",{parentName:"td"},"http[].backends")," instead.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.serviceName"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the backend service (depricated). The service and the ",(0,r.kt)("inlineCode",{parentName:"td"},"ApisixRoute")," resource should be created in the same namespace.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.servicePort"),(0,r.kt)("td",{parentName:"tr",align:null},"integer or string"),(0,r.kt)("td",{parentName:"tr",align:null},"Port number or the name defined in the service object of the backend (deprecated).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.resolveGranularity"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"See ",(0,r.kt)("a",{parentName:"td",href:"#service-resolution-granularity"},"Service resolution granularity")," for details (depricated).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"stream[].backend.subset"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Subset for the target service (depricated). Should be pre-defined in the ",(0,r.kt)("inlineCode",{parentName:"td"},"ApisixUpstream")," resource.")))),(0,r.kt)("h2",{id:"expression-operators"},"Expression operators"),(0,r.kt)("p",null,"The following operators can be used in match expressions:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operator"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Equal"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be equal to the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotEqual"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not be equal to the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GreaterThan"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and must be larger than the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LessThan"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a number and must be less than the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"In"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NotIn"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should be a part of the ",(0,r.kt)("inlineCode",{parentName:"td"},"set"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should match the PCRE regex pattern of the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexNotMatch"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,r.kt)("inlineCode",{parentName:"td"},"subject")," should not match the PCRE regex pattern of the ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexMatchCaseInsensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to ",(0,r.kt)("inlineCode",{parentName:"td"},"RegexMatch")," but case insensitive.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RegexNotMatchCaseInsensitive"),(0,r.kt)("td",{parentName:"tr",align:null},"Similar to ",(0,r.kt)("inlineCode",{parentName:"td"},"RegexNotMatch")," but case insensitive.")))),(0,r.kt)("h2",{id:"service-resolution-granularity"},"Service resolution granularity"),(0,r.kt)("p",null,"By default, the service referenced will be watched to update its endpoint list in APISIX. To just use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ClusterIP")," of the service, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"resolveGranularity")," attribute to ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," (defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Granularity"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"Upstream nodes are pods' IP adresses.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"service"),(0,r.kt)("td",{parentName:"tr",align:null},"Upstream nodes are service cluster IP. Load balancing is implemented by ",(0,r.kt)("a",{parentName:"td",href:"https://kubernetes.io/docs/concepts/overview/components/#kube-proxy"},"kube-proxy"),".")))))}s.isMDXComponent=!0}}]);