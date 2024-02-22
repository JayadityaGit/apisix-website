"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[46129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68213:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Rebuild Docker image"},i=void 0,l={unversionedId:"deploy-with-docker",id:"deploy-with-docker",isDocsHomePage:!1,title:"Rebuild Docker image",description:"NOTE: We support Docker Image, please visit DockerHub for more information. The following steps are for building Docker Image manually.",source:"@site/docs/apisix-dashboard/deploy-with-docker.md",sourceDirName:".",slug:"/deploy-with-docker",permalink:"/docs/dashboard/next/deploy-with-docker",editUrl:"/edit#https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/deploy-with-docker.md",tags:[],version:"current",frontMatter:{title:"Rebuild Docker image"},sidebar:"docs",previous:{title:"Basic Deploy",permalink:"/docs/dashboard/next/install"},next:{title:"Development Guide",permalink:"/docs/dashboard/next/develop"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Build",id:"build",children:[]},{value:"Other",id:"other",children:[]}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," We support Docker Image, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/apisix-dashboard"},"DockerHub")," for more information. The following steps are for building Docker Image manually."),(0,a.kt)("p",null,"To build the Dashboard with Docker, you simply download the ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," file from the ",(0,a.kt)("strong",{parentName:"p"},"root directory")," to your device (no need to download all source codes) then follow this guide."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"manager-api")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"web")," will be included in this build guide product."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before using Docker to build images and start containers, make sure that the following dependencies are installed and running in your environment."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Docker")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://etcd.io/docs/v3.4.0/dl-build/"},"etcd")," 3.4.0+")),(0,a.kt)("h2",{id:"build"},"Build"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Execute the build command in the directory where the Dockerfile is located (by default, the project root), specifying the tag manually.\n$ docker build -t apisix-dashboard:$tag .\n\n# For users in mainland China, the `ENABLE_PROXY` parameter can be provided to speed up module downloads.\n$ docker build -t apisix-dashboard:$tag . --build-arg ENABLE_PROXY=true\n\n## Launch\n\n1. Preparing configuration files\n\nBefore starting the container, the configuration file `conf.yaml` needs to be prepared inside the **host** to override the default [configuration file](https://github.com/apache/apisix-dashboard/blob/master/api/conf/conf.yaml) inside the container.\n\nKindly note:\n\n- Only when `conf.listen.host` is `0.0.0.0` can the external network access the services within the container.\n- `conf.etcd.endpoints` must be able to access the `etcd` service within the container. For example: use `host.docker.internal:2379` so that the container can access `etcd` on the host network.\n\n2. Launch the Dashboard\n\n```sh\n# /path/to/conf.yaml Requires an absolute path pointing to the configuration file mentioned above.\n$ docker run -d -p 9000:9000 -v /path/to/conf.yaml:/usr/local/apisix-dashboard/conf/conf.yaml --name apisix-dashboard apisix-dashboard:$tag\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Check if the container started successfully")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker ps -a\n")),(0,a.kt)("p",null,"If the container ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-dashboard")," is ok, visit ",(0,a.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:9000")," to use the dashboard with GUI, where the default username and password are ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Stop")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker stop apisix-dashboard\n")),(0,a.kt)("h2",{id:"other"},"Other"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Caching is not recommended when building a image multiple times.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ docker build -t apisix-dashboard:$tag . --no-cache=true\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"It is not recommended to use multiple instances at the same time. When using multiple instances, each instance generates and holds a JWT token, which will lead to verification conflicts.")))}d.isMDXComponent=!0}}]);