"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[74245],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=o(n),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||p;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<p;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21051:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>p,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const p={title:"\u5b89\u88c5\u4f9d\u8d56"},i=void 0,c={unversionedId:"install-dependencies",id:"version-3.8/install-dependencies",isDocsHomePage:!1,title:"\u5b89\u88c5\u4f9d\u8d56",description:"Apache APISIX \u4ece v2.0 \u5f00\u59cb\u4e0d\u518d\u652f\u6301 v2 \u7248\u672c\u7684 etcd\uff0c\u5e76\u4e14 etcd \u6700\u4f4e\u652f\u6301\u7248\u672c\u4e3a v3.4.0\uff0c\u56e0\u6b64\u8bf7\u4f7f\u7528 etcd 3.4.0+\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u56e0\u4e3a etcd v3 \u4f7f\u7528 gRPC \u4f5c\u4e3a\u6d88\u606f\u4f20\u9012\u534f\u8bae\uff0c\u800c Apache APISIX \u4f7f\u7528 HTTP(S) \u4e0e etcd \u96c6\u7fa4\u901a\u4fe1\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd\u542f\u7528 etcd gRPC gateway \u529f\u80fd\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.8/install-dependencies.md",sourceDirName:".",slug:"/install-dependencies",permalink:"/zh/docs/apisix/install-dependencies",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.8/docs/zh/latest/install-dependencies.md",tags:[],version:"3.8",frontMatter:{title:"\u5b89\u88c5\u4f9d\u8d56"},sidebar:"version-3.8/docs",previous:{title:"\u538b\u529b\u6d4b\u8bd5",permalink:"/zh/docs/apisix/benchmark"},next:{title:"APISIX \u53d8\u91cf",permalink:"/zh/docs/apisix/apisix-variable"}},l=[{value:"\u6ce8\u610f",id:"\u6ce8\u610f",children:[]},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[]}],o={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Apache APISIX \u4ece v2.0 \u5f00\u59cb\u4e0d\u518d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"v2")," \u7248\u672c\u7684 etcd\uff0c\u5e76\u4e14 etcd \u6700\u4f4e\u652f\u6301\u7248\u672c\u4e3a v3.4.0\uff0c\u56e0\u6b64\u8bf7\u4f7f\u7528 etcd 3.4.0+\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u56e0\u4e3a etcd v3 \u4f7f\u7528 gRPC \u4f5c\u4e3a\u6d88\u606f\u4f20\u9012\u534f\u8bae\uff0c\u800c Apache APISIX \u4f7f\u7528 HTTP(S) \u4e0e etcd \u96c6\u7fa4\u901a\u4fe1\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd\u542f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.4.0/dev-guide/api_grpc_gateway/"},"etcd gRPC gateway")," \u529f\u80fd\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u76ee\u524d Apache APISIX \u9ed8\u8ba4\u4f7f\u7528 HTTP \u534f\u8bae\u4e0e etcd \u96c6\u7fa4\u901a\u4fe1\uff0c\u8fd9\u5e76\u4e0d\u5b89\u5168\uff0c\u5982\u679c\u5e0c\u671b\u4fdd\u969c\u6570\u636e\u7684\u5b89\u5168\u6027\u548c\u5b8c\u6574\u6027\u3002\u8bf7\u4e3a\u60a8\u7684 etcd \u96c6\u7fa4\u914d\u7f6e\u8bc1\u4e66\u53ca\u5bf9\u5e94\u79c1\u94a5\uff0c\u5e76\u5728\u60a8\u7684 Apache APISIX etcd endpoints \u914d\u7f6e\u5217\u8868\u4e2d\u660e\u786e\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," \u534f\u8bae\u524d\u7f00\u3002\u8bf7\u67e5\u9605 ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," \u4e2d etcd \u4e00\u8282\u76f8\u5173\u7684\u914d\u7f6e\u6765\u4e86\u89e3\u66f4\u591a\u7ec6\u8282\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u662f OpenResty 1.19\uff0cAPISIX \u4f1a\u4f7f\u7528 OpenResty \u5185\u7f6e\u7684 LuaJIT \u6765\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"bin/apisix"),"\uff1b\u5426\u5219\u4f1a\u4f7f\u7528 Lua 5.1\u3002\u5982\u679c\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u9047\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"luajit: lj_asm_x86.h:2819: asm_loop_fixup: Assertion '((intptr_t)target & 15) == 0' failed"),"\uff0c\u8fd9\u662f\u4f4e\u7248\u672c OpenResty \u5185\u7f6e\u7684 LuaJIT \u5728\u7279\u5b9a\u7f16\u8bd1\u6761\u4ef6\u4e0b\u7684\u95ee\u9898\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u5e73\u53f0\u4e0a\uff0c\u901a\u8fc7\u5305\u7ba1\u7406\u5668\u5b89\u88c5 LuaRocks \u4f1a\u5bfc\u81f4 Lua \u88ab\u5347\u7ea7\u4e3a Lua 5.3\uff0c\u6240\u4ee5\u6211\u4eec\u5efa\u8bae\u901a\u8fc7\u6e90\u4ee3\u7801\u7684\u65b9\u5f0f\u5b89\u88c5 LuaRocks\u3002\u5982\u679c\u4f60\u901a\u8fc7\u5b98\u65b9\u4ed3\u5e93\u5b89\u88c5 OpenResty \u548c OpenResty \u7684 OpenSSL \u5f00\u53d1\u5e93\uff08rpm \u7248\u672c\uff1aopenresty-openssl111-devel\uff0cdeb \u7248\u672c\uff1aopenresty-openssl111-dev\uff09\uff0c\u90a3\u4e48 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/tree/master/utils/linux-install-luarocks.sh"},"\u6211\u4eec\u63d0\u4f9b\u4e86\u81ea\u52a8\u5b89\u88c5\u7684\u811a\u672c"),"\u3002\u5982\u679c\u4f60\u662f\u81ea\u5df1\u7f16\u8bd1\u7684 OpenResty\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0a\u8ff0\u811a\u672c\u5e76\u4fee\u6539\u91cc\u9762\u7684\u8def\u5f84\u3002\u5982\u679c\u7f16\u8bd1\u65f6\u6ca1\u6709\u6307\u5b9a OpenSSL \u5e93\u7684\u8def\u5f84\uff0c\u90a3\u4e48\u65e0\u9700\u914d\u7f6e LuaRocks \u5185\u8ddf OpenSSL \u76f8\u5173\u7684\u53d8\u91cf\uff0c\u56e0\u4e3a\u9ed8\u8ba4\u90fd\u662f\u7528\u7684\u7cfb\u7edf\u81ea\u5e26\u7684 OpenSSL\u3002\u5982\u679c\u7f16\u8bd1\u65f6\u6307\u5b9a\u4e86 OpenSSL \u5e93\uff0c\u90a3\u4e48\u9700\u8981\u4fdd\u8bc1 LuaRocks \u7684 OpenSSL \u914d\u7f6e\u8ddf OpenResty \u7684\u76f8\u4e00\u81f4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OpenResty \u662f APISIX \u7684\u4e00\u4e2a\u4f9d\u8d56\u9879\uff0c\u5982\u679c\u662f\u7b2c\u4e00\u6b21\u90e8\u7f72 APISIX \u5e76\u4e14\u4e0d\u9700\u8981\u4f7f\u7528 OpenResty \u90e8\u7f72\u5176\u4ed6\u670d\u52a1\uff0c\u53ef\u4ee5\u5728 OpenResty \u5b89\u88c5\u5b8c\u6210\u540e\u505c\u6b62\u5e76\u7981\u7528 OpenResty\uff0c\u8fd9\u4e0d\u4f1a\u5f71\u54cd APISIX \u7684\u6b63\u5e38\u5de5\u4f5c\uff0c\u8bf7\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u8c28\u614e\u64cd\u4f5c\u3002\u4f8b\u5982 Ubuntu\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"systemctl stop openresty && systemctl disable openresty"),"\u3002"))),(0,a.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,a.kt)("p",null,"\u5728\u652f\u6301\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u5373\u53ef\u5b89\u88c5 Apache APISIX dependencies\u3002"),(0,a.kt)("p",null,"\u652f\u6301\u7684\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\uff1aCentOS 7, Fedora 31 & 32, Ubuntu 16.04 & 18.04, Debian 9 & 10, Arch Linux, Mac OSX\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u5bf9\u4e8e Arch Linux \u6765\u8bf4\uff0c\u6211\u4eec\u4f7f\u7528 AUR \u6e90\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"openresty"),"\uff0c\u6240\u4ee5\u9700\u8981 AUR Helper \u624d\u80fd\u6b63\u5e38\u5b89\u88c5\u3002\u76ee\u524d\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"yay")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"pacaur"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl https://raw.githubusercontent.com/apache/apisix/master/utils/install-dependencies.sh -sL | bash -\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u514b\u9686\u4e86 Apache APISIX \u4ed3\u5e93\uff0c\u5728\u6839\u76ee\u5f55\u8fd0\u884c\u4ee5\u4e0b\u6307\u4ee4\u5b89\u88c5 Apache APISIX dependencies\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bash utils/install-dependencies.sh\n")))}s.isMDXComponent=!0}}]);