"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return n?i.createElement(h,l(l({ref:t},p),{},{components:n})):i.createElement(h,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var u=2;u<o;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89077:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={title:"inspect",keywords:["Apache APISIX","API Gateway","Plugin","Inspect","Dynamic Lua Debugging"],description:"This document contains information about the Apache APISIX inspect Plugin."},l=void 0,r={unversionedId:"plugins/inspect",id:"version-3.7/plugins/inspect",isDocsHomePage:!1,title:"inspect",description:"This document contains information about the Apache APISIX inspect Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.7/plugins/inspect.md",sourceDirName:"plugins",slug:"/plugins/inspect",permalink:"/docs/apisix/3.7/plugins/inspect",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.7/docs/en/latest/plugins/inspect.md",tags:[],version:"3.7",frontMatter:{title:"inspect",keywords:["Apache APISIX","API Gateway","Plugin","Inspect","Dynamic Lua Debugging"],description:"This document contains information about the Apache APISIX inspect Plugin."},sidebar:"version-3.7/docs",previous:{title:"ext-plugin-post-resp",permalink:"/docs/apisix/3.7/plugins/ext-plugin-post-resp"},next:{title:"workflow",permalink:"/docs/apisix/3.7/plugins/workflow"}},s=[{value:"Description",id:"description",children:[]},{value:"Features",id:"features",children:[]},{value:"Operation Graph",id:"operation-graph",children:[]},{value:"API to define hook in hooks file",id:"api-to-define-hook-in-hooks-file",children:[{value:"require(&quot;apisix.inspect.dbg&quot;).set_hook(file, line, func, filter_func)",id:"requireapisixinspectdbgset_hookfile-line-func-filter_func",children:[]}]},{value:"Attributes",id:"attributes",children:[]},{value:"Enable Plugin",id:"enable-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"It's useful to set arbitrary breakpoint in any Lua file to inspect the context information,\ne.g. print local variables if some condition satisfied."),(0,a.kt)("p",null,"In this way, you don't need to modify the source code of your project, and just get diagnose information\non demand, i.e. dynamic logging."),(0,a.kt)("p",null,"This plugin supports setting breakpoints within both interpretd function and jit compiled function.\nThe breakpoint could be at any position within the function. The function could be global/local/module/ananymous."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Set breakpoint at any position"),(0,a.kt)("li",{parentName:"ul"},"Dynamic breakpoint"),(0,a.kt)("li",{parentName:"ul"},"customized breakpoint handler"),(0,a.kt)("li",{parentName:"ul"},"You could define one-shot breakpoint"),(0,a.kt)("li",{parentName:"ul"},"Work for jit compiled function"),(0,a.kt)("li",{parentName:"ul"},"If function reference specified, then performance impact is only bound to that function (JIT compiled code will not trigger debug hook, so they would run fast even if hook is enabled)"),(0,a.kt)("li",{parentName:"ul"},"If all breakpoints deleted, jit could recover")),(0,a.kt)("h2",{id:"operation-graph"},"Operation Graph"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/inspect.png",alt:"Operation Graph"})),(0,a.kt)("h2",{id:"api-to-define-hook-in-hooks-file"},"API to define hook in hooks file"),(0,a.kt)("h3",{id:"requireapisixinspectdbgset_hookfile-line-func-filter_func"},'require("apisix.inspect.dbg").set_hook(file, line, func, filter_func)'),(0,a.kt)("p",null,"The breakpoint is specified by ",(0,a.kt)("inlineCode",{parentName:"p"},"file")," (full qualified or short file name) and the ",(0,a.kt)("inlineCode",{parentName:"p"},"line")," number."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"func")," specified the scope (which function or global) of jit cache to flush:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the breakpoint is related to a module function or\nglobal function, you should set it that function reference, then only the jit cache of that function would\nbe flushed, and it would not affect other caches to avoid slowing down other parts of the program.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the breakpointis related to local function or anonymous function,\nthen you have to set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"nil")," (because no way to get function reference), which would flush the whole jit cache of Lua vm."))),(0,a.kt)("p",null,"You attach a ",(0,a.kt)("inlineCode",{parentName:"p"},"filter_func")," function of the breakpoint, the function takes the ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," as argument and returns\ntrue of false to determine whether the breakpoint would be removed. You could setup one-shot breakpoint\nat ease."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"info")," is a hash table which contains below keys:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"finfo"),": ",(0,a.kt)("inlineCode",{parentName:"li"},'debug.getinfo(level, "nSlf")')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uv"),": upvalues hash table"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"vals"),": local variables hash table")),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"delay"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"Time in seconds specifying how often to check the hooks file.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hooks_file"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},'"/usr/local/apisix/plugin_inspect_hooks.lua"'),(0,a.kt)("td",{parentName:"tr",align:null},"Lua file to define hooks, which could be a link file. Ensure only administrator could write this file, otherwise it may be a security risk.")))),(0,a.kt)("h2",{id:"enable-plugin"},"Enable Plugin"),(0,a.kt)("p",null,"Plugin is enabled by default (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config-default.yaml"',title:'"conf/config-default.yaml"'},'plugins:\n    - inspect\n\nplugin_attr:\n  inspect:\n    delay: 3\n    hooks_file: "/usr/local/apisix/plugin_inspect_hooks.lua"\n')),(0,a.kt)("h2",{id:"example-usage"},"Example usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# create test route\ncurl http://127.0.0.1:9180/apisix/admin/routes/test_limit_req -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/get",\n    "plugins": {\n        "limit-req": {\n            "rate": 100,\n            "burst": 0,\n            "rejected_code": 503,\n            "key_type": "var",\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "httpbin.org": 1\n        }\n    }\n}\'\n\n# create a hooks file to set a test breakpoint\n# Note that the breakpoint is associated with the line number,\n# so if the Lua code changes, you need to adjust the line number in the hooks file\ncat <<EOF >/usr/local/apisix/example_hooks.lua\nlocal dbg = require "apisix.inspect.dbg"\n\ndbg.set_hook("limit-req.lua", 88, require("apisix.plugins.limit-req").access, function(info)\n    ngx.log(ngx.INFO, debug.traceback("foo traceback", 3))\n    ngx.log(ngx.INFO, dbg.getname(info.finfo))\n    ngx.log(ngx.INFO, "conf_key=", info.vals.conf_key)\n    return true\nend)\n\n--- more breakpoints could be defined via dbg.set_hook()\n--- ...\nEOF\n\n# enable the hooks file\nln -sf /usr/local/apisix/example_hooks.lua /usr/local/apisix/plugin_inspect_hooks.lua\n\n# check errors.log to confirm the test breakpoint is enabled\n2022/09/01 00:55:38 [info] 2754534#2754534: *3700 [lua] init.lua:29: setup_hooks(): set hooks: err=nil, hooks=["limit-req.lua#88"], context: ngx.timer\n\n# access the test route\ncurl -i http://127.0.0.1:9080/get\n\n# check errors.log to confirm the test breakpoint is triggered\n2022/09/01 00:55:52 [info] 2754534#2754534: *4070 [lua] resty_inspect_hooks.lua:4: foo traceback\nstack traceback:\n        /opt/lua-resty-inspect/lib/resty/inspect/dbg.lua:50: in function </opt/lua-resty-inspect/lib/resty/inspect/dbg.lua:17>\n        /opt/apisix.fork/apisix/plugins/limit-req.lua:88: in function \'phase_func\'\n        /opt/apisix.fork/apisix/plugin.lua:900: in function \'run_plugin\'\n        /opt/apisix.fork/apisix/init.lua:456: in function \'http_access_phase\'\n        access_by_lua(nginx.conf:303):2: in main chunk, client: 127.0.0.1, server: _, request: "GET /get HTTP/1.1", host: "127.0.0.1:9080"\n2022/09/01 00:55:52 [info] 2754534#2754534: *4070 [lua] resty_inspect_hooks.lua:5: /opt/apisix.fork/apisix/plugins/limit-req.lua:88 (phase_func), client: 127.0.0.1, server: _, request: "GET /get HTTP/1.1", host: "127.0.0.1:9080"\n2022/09/01 00:55:52 [info] 2754534#2754534: *4070 [lua] resty_inspect_hooks.lua:6: conf_key=remote_addr, client: 127.0.0.1, server: _, request: "GET /get HTTP/1.1", host: "127.0.0.1:9080"\n')),(0,a.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,a.kt)("p",null,"To remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"inspect")," Plugin, you can remove it from your configuration file (",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"plugins:\n    # - inspect\n")))}p.isMDXComponent=!0}}]);