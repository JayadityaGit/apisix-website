"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[91586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?i.createElement(h,o(o({ref:t},c),{},{components:r})):i.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},93729:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const a={title:"Router",keywords:["API Gateway","Apache APISIX","Router"],description:"This article describes how to choose a router for Apache APISIX."},o=void 0,l={unversionedId:"terminology/router",id:"version-3.6/terminology/router",isDocsHomePage:!1,title:"Router",description:"This article describes how to choose a router for Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.6/terminology/router.md",sourceDirName:"terminology",slug:"/terminology/router",permalink:"/docs/apisix/3.6/terminology/router",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/terminology/router.md",tags:[],version:"3.6",frontMatter:{title:"Router",keywords:["API Gateway","Apache APISIX","Router"],description:"This article describes how to choose a router for Apache APISIX."},sidebar:"version-3.6/docs",previous:{title:"Route",permalink:"/docs/apisix/3.6/terminology/route"},next:{title:"Script",permalink:"/docs/apisix/3.6/terminology/script"}},p=[{value:"Description",id:"description",children:[]},{value:"Configuration",id:"configuration",children:[]}],s={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"A distinguishing feature of Apache APISIX from other API gateways is that it allows you to choose different Routers to better match free services, giving you the best choices for performance and freedom."),(0,n.kt)("p",null,"You can set the Router that best suits your needs in your configuration file ",(0,n.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("p",null,"A Router can have the following configurations:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"apisix.router.http"),": The HTTP request route. It can take the following values:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"radixtree_uri"),": Only use the ",(0,n.kt)("inlineCode",{parentName:"li"},"uri")," as the primary index. To learn more about the support for full and deep prefix matching, check ",(0,n.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/router-radixtree"},"How to use router-radixtree"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Absolute match"),": Match completely with the given ",(0,n.kt)("inlineCode",{parentName:"li"},"uri")," (",(0,n.kt)("inlineCode",{parentName:"li"},"/foo/bar"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"/foo/glo"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Prefix match"),": Match with the given prefix. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"*")," to represent the given ",(0,n.kt)("inlineCode",{parentName:"li"},"uri")," for prefix matching. For example, ",(0,n.kt)("inlineCode",{parentName:"li"},"/foo*")," can match with ",(0,n.kt)("inlineCode",{parentName:"li"},"/foo/"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"/foo/a")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"/foo/b"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"match priority"),": First try an absolute match, if it didn't match, try prefix matching."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Any filter attribute"),": This allows you to specify any Nginx built-in variable as a filter, such as URL request parameters, request headers, and cookies."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"radixtree_uri_with_parameter"),": Like ",(0,n.kt)("inlineCode",{parentName:"li"},"radixtree_uri")," but also supports parameter match."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"radixtree_host_uri"),": (Default) Matches both host and URI of the request. Use ",(0,n.kt)("inlineCode",{parentName:"li"},"host + uri")," as the primary index (based on the ",(0,n.kt)("inlineCode",{parentName:"li"},"radixtree")," engine).")))),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"In version 3.2 and earlier, APISIX used ",(0,n.kt)("inlineCode",{parentName:"p"},"radixtree_uri")," as the default Router. ",(0,n.kt)("inlineCode",{parentName:"p"},"radixtree_uri")," has better performance than ",(0,n.kt)("inlineCode",{parentName:"p"},"radixtree_host_uri"),", so if you have higher performance requirements and can live with the fact that ",(0,n.kt)("inlineCode",{parentName:"p"},"radixtree_uri")," only use the ",(0,n.kt)("inlineCode",{parentName:"p"},"uri")," as the primary index, consider continuing to use ",(0,n.kt)("inlineCode",{parentName:"p"},"radixtree_uri")," as the default Router."))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"apisix.router.ssl"),": SSL loads the matching route.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"radixtree_sni"),": (Default) Use ",(0,n.kt)("inlineCode",{parentName:"li"},"SNI")," (Server Name Indication) as the primary index (based on the radixtree engine).")))))}c.isMDXComponent=!0}}]);