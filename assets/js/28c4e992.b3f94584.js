"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[5481],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),h=i,m=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(m,r(r({ref:n},c),{},{components:t})):a.createElement(m,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18492:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const o={title:"Plugin Develop"},r=void 0,l={unversionedId:"plugin-develop",id:"version-3.4/plugin-develop",isDocsHomePage:!1,title:"Plugin Develop",description:"This documentation is about developing plugin in Lua. For other languages,\nsee external plugin.",source:"@site/docs-apisix_versioned_docs/version-3.4/plugin-develop.md",sourceDirName:".",slug:"/plugin-develop",permalink:"/docs/apisix/3.4/plugin-develop",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/plugin-develop.md",tags:[],version:"3.4",frontMatter:{title:"Plugin Develop"},sidebar:"version-3.4/docs",previous:{title:"Introducing APISIX's testing framework",permalink:"/docs/apisix/3.4/internal/testing-framework"},next:{title:"Debug mode",permalink:"/docs/apisix/3.4/debug-mode"}},p=[{value:"where to put your plugins",id:"where-to-put-your-plugins",children:[]},{value:"check dependencies",id:"check-dependencies",children:[]},{value:"name, priority and the others",id:"name-priority-and-the-others",children:[]},{value:"schema and check",id:"schema-and-check",children:[{value:"encrypted storage fields",id:"encrypted-storage-fields",children:[]}]},{value:"choose phase to run",id:"choose-phase-to-run",children:[{value:"extra phase",id:"extra-phase",children:[]}]},{value:"implement the logic",id:"implement-the-logic",children:[{value:"conf parameter",id:"conf-parameter",children:[]},{value:"ctx parameter",id:"ctx-parameter",children:[]}]},{value:"register public API",id:"register-public-api",children:[]},{value:"register control API",id:"register-control-api",children:[]},{value:"register custom variable",id:"register-custom-variable",children:[]},{value:"write test case",id:"write-test-case",children:[{value:"attach the test-nginx execution process:",id:"attach-the-test-nginx-execution-process",children:[]}]}],s={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This documentation is about developing plugin in Lua. For other languages,\nsee ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/external-plugin"},"external plugin"),"."),(0,i.kt)("h2",{id:"where-to-put-your-plugins"},"where to put your plugins"),(0,i.kt)("p",null,"There are two ways to add new features based on APISIX."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"modify the source of APISIX and redistribute it (not so recommended)"),(0,i.kt)("li",{parentName:"ol"},"setup the ",(0,i.kt)("inlineCode",{parentName:"li"},"extra_lua_path")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"extra_lua_cpath")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/config.yaml")," to load your own code. Your own code will be loaded instead of the builtin one with the same name, so you can use this way to override the builtin behavior if needed.")),(0,i.kt)("p",null,"For example, you can create a directory structure like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 example\n\u2502\xa0\xa0 \u2514\u2500\u2500 apisix\n\u2502\xa0\xa0     \u251c\u2500\u2500 plugins\n\u2502\xa0\xa0     \u2502\xa0\xa0 \u2514\u2500\u2500 3rd-party.lua\n\u2502\xa0\xa0     \u2514\u2500\u2500 stream\n\u2502\xa0\xa0         \u2514\u2500\u2500 plugins\n\u2502\xa0\xa0             \u2514\u2500\u2500 3rd-party.lua\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you need to customize the directory of plugin, please create a subdirectory of ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/plugins")," under this directory."))),(0,i.kt)("p",null,"Then add this configuration into your ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n    ...\n    extra_lua_path: "/path/to/example/?.lua"\n')),(0,i.kt)("p",null,"Now using ",(0,i.kt)("inlineCode",{parentName:"p"},'require "apisix.plugins.3rd-party"')," will load your plugin, just like ",(0,i.kt)("inlineCode",{parentName:"p"},'require "apisix.plugins.jwt-auth"')," will load the ",(0,i.kt)("inlineCode",{parentName:"p"},"jwt-auth")," plugin."),(0,i.kt)("p",null,"Sometimes you may want to override a method instead of a whole file. In this case, you can configure ",(0,i.kt)("inlineCode",{parentName:"p"},"lua_module_hook")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),"\nto introduce your hook."),(0,i.kt)("p",null,"Assumed your configuration is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apisix:\n    ...\n    extra_lua_path: "/path/to/example/?.lua"\n    lua_module_hook: "my_hook"\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"example/my_hook.lua")," will be loaded when APISIX starts, and you can use this hook to replace a method in APISIX.\nThe example of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/example/my_hook.lua"},"my_hook.lua")," can be found under the ",(0,i.kt)("inlineCode",{parentName:"p"},"example")," directory of this project."),(0,i.kt)("h2",{id:"check-dependencies"},"check dependencies"),(0,i.kt)("p",null,"if you have dependencies on external libraries, check the dependent items. if your plugin needs to use shared memory, it\nneeds to declare via ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/customize-nginx-configuration"},"customizing Nginx configuration"),", for example :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# put this in config.yaml:\nnginx_config:\n    http_configuration_snippet: |\n        # for openid-connect plugin\n        lua_shared_dict discovery             1m; # cache for discovery metadata documents\n        lua_shared_dict jwks                  1m; # cache for JWKs\n        lua_shared_dict introspection        10m; # cache for JWT verification results\n")),(0,i.kt)("p",null,"The plugin itself provides the init method. It is convenient for plugins to perform some initialization after\nthe plugin is loaded. If you need to clean up the initialization, you can put it in the corresponding destroy method."),(0,i.kt)("p",null,'Note : if the dependency of some plugin needs to be initialized when Nginx start, you may need to add logic to the initialization\nmethod "http_init" in the file ',(0,i.kt)("strong",{parentName:"p"},"apisix/init.lua"),", and you may need to add some processing on generated part of Nginx\nconfiguration file in ",(0,i.kt)("strong",{parentName:"p"},"apisix/cli/ngx_tpl.lua")," file. But it is easy to have an impact on the overall situation according to the\nexisting plugin mechanism, ",(0,i.kt)("strong",{parentName:"p"},"we do not recommend this unless you have a complete grasp of the code"),"."),(0,i.kt)("h2",{id:"name-priority-and-the-others"},"name, priority and the others"),(0,i.kt)("p",null,'Determine the name and priority of the plugin, and add to conf/config.yaml. For example, for the example-plugin plugin,\nyou need to specify the plugin name in the code (the name is the unique identifier of the plugin and cannot be\nduplicate), you can see the code in file "',(0,i.kt)("strong",{parentName:"p"},"apisix/plugins/example-plugin.lua"),'" :'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),(0,i.kt)("p",null,"Note: The priority of the new plugin cannot be same to any existing ones, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"/v1/schema")," method of ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/control-api#get-v1schema"},"control API")," to view the priority of all plugins. In addition, plugins with higher priority value will be executed first in a given phase (see the definition of ",(0,i.kt)("inlineCode",{parentName:"p"},"phase")," in ",(0,i.kt)("a",{parentName:"p",href:"#choose-phase-to-run"},"choose-phase-to-run"),"). For example, the priority of example-plugin is 0 and the priority of ip-restriction is 3000. Therefore, the ip-restriction plugin will be executed first, then the example-plugin plugin. It's recommended to use priority 1 ~ 99 for your plugin unless you want it to run before some builtin plugins."),(0,i.kt)("p",null,'In the "',(0,i.kt)("strong",{parentName:"p"},"conf/config-default.yaml"),'" configuration file, the enabled plugins (all specified by plugin name) are listed.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins:                          # plugin list\n  - limit-req\n  - limit-count\n  - limit-conn\n  - key-auth\n  - prometheus\n  - node-status\n  - jwt-auth\n  - zipkin\n  - ip-restriction\n  - grpc-transcode\n  - serverless-pre-function\n  - serverless-post-function\n  - openid-connect\n  - proxy-rewrite\n  - redirect\n  ...\n")),(0,i.kt)("p",null,"Note: the order of the plugins is not related to the order of execution."),(0,i.kt)("p",null,"To enable your plugin, copy this plugin list into ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", and add your plugin name. For instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"plugins: # copied from config-default.yaml\n  ...\n  - your-plugin\n")),(0,i.kt)("p",null,"If your plugin has a new code directory of its own, and you need to redistribute it with the APISIX source code, you will need to modify the ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," to create directory, such as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$(INSTALL) -d $(INST_LUADIR)/apisix/plugins/skywalking\n$(INSTALL) apisix/plugins/skywalking/*.lua $(INST_LUADIR)/apisix/plugins/skywalking/\n")),(0,i.kt)("p",null,"There are other fields in the ",(0,i.kt)("inlineCode",{parentName:"p"},"_M")," which affect the plugin's behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"local _M = {\n    ...\n    type = 'auth',\n    run_policy = 'prefer_route',\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"run_policy")," field can be used to control the behavior of the plugin execution.\nWhen this field set to ",(0,i.kt)("inlineCode",{parentName:"p"},"prefer_route"),", and the plugin has been configured both\nin the global and at the route level, only the route level one will take effect."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," field is required to be set to ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," if your plugin needs to work with consumer. See the section below."),(0,i.kt)("h2",{id:"schema-and-check"},"schema and check"),(0,i.kt)("p",null,"Write ",(0,i.kt)("a",{parentName:"p",href:"https://json-schema.org"},"JSON Schema")," descriptions and check functions. Similarly, take the example-plugin plugin as an example to see its\nconfiguration data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "example-plugin": {\n    "i": 1,\n    "s": "s",\n    "t": [1]\n  }\n}\n')),(0,i.kt)("p",null,"Let's look at its schema description :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local schema = {\n    type = "object",\n    properties = {\n        i = {type = "number", minimum = 0},\n        s = {type = "string"},\n        t = {type = "array", minItems = 1},\n        ip = {type = "string"},\n        port = {type = "integer"},\n    },\n    required = {"i"},\n}\n')),(0,i.kt)("p",null,"The schema defines a non-negative number ",(0,i.kt)("inlineCode",{parentName:"p"},"i"),", a string ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),", a non-empty array of ",(0,i.kt)("inlineCode",{parentName:"p"},"t"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ip")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"port"),". Only ",(0,i.kt)("inlineCode",{parentName:"p"},"i")," is required."),(0,i.kt)("p",null,"At the same time, we need to implement the ",(0,i.kt)("strong",{parentName:"p"},"check_schema(conf)")," method to complete the specification verification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.check_schema(conf, schema_type)\n    return core.schema.check(schema, conf)\nend\n")),(0,i.kt)("p",null,'Note: the project has provided the public method "',(0,i.kt)("strong",{parentName:"p"},"core.schema.check"),'", which can be used directly to complete JSON\nverification.'),(0,i.kt)("p",null,"In addition, if the plugin needs to use some metadata, we can define the plugin ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata_schema"),", and then we can dynamically manage these metadata through the ",(0,i.kt)("inlineCode",{parentName:"p"},"Admin API"),". Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local metadata_schema = {\n    type = "object",\n    properties = {\n        ikey = {type = "number", minimum = 0},\n        skey = {type = "string"},\n    },\n    required = {"ikey", "skey"},\n}\n\nlocal plugin_name = "example-plugin"\n\nlocal _M = {\n    version = 0.1,\n    priority = 0,        -- TODO: add a type field, may be a good idea\n    name = plugin_name,\n    schema = schema,\n    metadata_schema = metadata_schema,\n}\n')),(0,i.kt)("p",null,"You might have noticed the key-auth plugin has ",(0,i.kt)("inlineCode",{parentName:"p"},"type = 'auth'")," in its definition.\nWhen we set the type of plugin to ",(0,i.kt)("inlineCode",{parentName:"p"},"auth"),", it means that this plugin is an authentication plugin."),(0,i.kt)("p",null,"An authentication plugin needs to choose a consumer after execution. For example, in key-auth plugin, it calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer.attach_consumer")," to attach a consumer, which is chosen via the ",(0,i.kt)("inlineCode",{parentName:"p"},"apikey")," header."),(0,i.kt)("p",null,"To interact with the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer")," resource, this type of plugin needs to provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer_schema")," to check the ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins")," configuration in the ",(0,i.kt)("inlineCode",{parentName:"p"},"consumer"),"."),(0,i.kt)("p",null,"Here is the consumer configuration for key-auth plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "Joe",\n  "plugins": {\n    "key-auth": {\n      "key": "Joe\'s key"\n    }\n  }\n}\n')),(0,i.kt)("p",null,"It will be used when you try to create a ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/admin-api#consumer"},"Consumer")),(0,i.kt)("p",null,"To validate the configuration, the plugin uses a schema like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local consumer_schema = {\n    type = "object",\n    properties = {\n        key = {type = "string"},\n    },\n    required = {"key"},\n}\n')),(0,i.kt)("p",null,"Note the difference between key-auth's ",(0,i.kt)("strong",{parentName:"p"},"check_schema(conf)")," method to example-plugin's:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- key-auth\nfunction _M.check_schema(conf, schema_type)\n    if schema_type == core.schema.TYPE_CONSUMER then\n        return core.schema.check(consumer_schema, conf)\n    else\n        return core.schema.check(schema, conf)\n    end\nend\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"-- example-plugin\nfunction _M.check_schema(conf, schema_type)\n    return core.schema.check(schema, conf)\nend\n")),(0,i.kt)("h3",{id:"encrypted-storage-fields"},"encrypted storage fields"),(0,i.kt)("p",null,"Specify the parameters to be stored encrypted. (Requires APISIX version >= 3.1.0)"),(0,i.kt)("p",null,"Some plugins require parameters to be stored encrypted, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"basic-auth")," plugin. This plugin needs to specify in the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema")," which parameters need to be stored encrypted."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'encrypt_fields = {"password"}\n')),(0,i.kt)("p",null,"If it is a nested parameter, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"clickhouse.password")," parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"error-log-logger")," plugin, it needs to be separated by ",(0,i.kt)("inlineCode",{parentName:"p"},"."),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'encrypt_fields = {"clickhouse.password"}\n')),(0,i.kt)("p",null,"Currently not supported yet:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"more than two levels of nesting"),(0,i.kt)("li",{parentName:"ol"},"fields in arrays")),(0,i.kt)("p",null,"Parameters can be stored encrypted by specifying ",(0,i.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"password"}')," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"schema"),". APISIX will provide the following functionality."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When adding and updating resources via the ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin API"),", APISIX automatically encrypts the parameters declared in ",(0,i.kt)("inlineCode",{parentName:"li"},"encrypt_fields")," and stores them in etcd"),(0,i.kt)("li",{parentName:"ul"},"When fetching resources via the ",(0,i.kt)("inlineCode",{parentName:"li"},"Admin API")," and when running the plugin, APISIX automatically decrypts the parameters declared in ",(0,i.kt)("inlineCode",{parentName:"li"},"encrypt_fields"))),(0,i.kt)("p",null,"How to enable this feature?"),(0,i.kt)("p",null,"Enable ",(0,i.kt)("inlineCode",{parentName:"p"},"data_encryption")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"config.yaml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n    data_encryption:\n        enable: true\n        keyring:\n            - edd1c9f0985e76a2\n            - qeddd145sfvddff4\n")),(0,i.kt)("p",null,"APISIX will try to decrypt the data with keys in the order of the keys in the keyring (only for parameters declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"encrypt_fields"),"). If the decryption fails, the next key will be tried until the decryption succeeds."),(0,i.kt)("p",null,"If none of the keys in ",(0,i.kt)("inlineCode",{parentName:"p"},"keyring")," can decrypt the data, the original data is used."),(0,i.kt)("h2",{id:"choose-phase-to-run"},"choose phase to run"),(0,i.kt)("p",null,"Determine which phase to run, generally access or rewrite. If you don't know the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openresty/lua-nginx-module/blob/master/README.markdown#directives"},"OpenResty lifecycle"),", it's\nrecommended to know it in advance. For example key-auth is an authentication plugin, thus the authentication should be completed\nbefore forwarding the request to any upstream service. Therefore, the plugin must be executed in the rewrite phases.\nIn APISIX, only the authentication logic can be run in the rewrite phase. Other logic needs to run before proxy should be in access phase."),(0,i.kt)("p",null,"The following code snippet shows how to implement any logic relevant to the plugin in the OpenResty log phase."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.log(conf, ctx)\n-- Implement logic here\nend\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note : we can't invoke ",(0,i.kt)("inlineCode",{parentName:"strong"},"ngx.exit"),", ",(0,i.kt)("inlineCode",{parentName:"strong"},"ngx.redirect")," or ",(0,i.kt)("inlineCode",{parentName:"strong"},"core.respond.exit")," in rewrite phase and access phase. if need to exit, just return the status and body, the plugin engine will make the exit happen with the returned status and body. ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/apache/apisix/blob/35269581e21473e1a27b11cceca6f773cad0192a/apisix/plugins/limit-count.lua#L177"},"example"))),(0,i.kt)("h3",{id:"extra-phase"},"extra phase"),(0,i.kt)("p",null,"Besides OpenResty's phases, we also provide extra phases to satisfy specific purpose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"delayed_body_filter"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.delayed_body_filter(conf, ctx)\n    -- delayed_body_filter is called after body_filter\n    -- it is used by the tracing plugins to end the span right after body_filter\nend\n")),(0,i.kt)("h2",{id:"implement-the-logic"},"implement the logic"),(0,i.kt)("p",null,"Write the logic of the plugin in the corresponding phase. There are two parameters ",(0,i.kt)("inlineCode",{parentName:"p"},"conf")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," in the phase method, take the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-conn")," plugin configuration as an example."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "limit-conn": {\n            "conn": 1,\n            "burst": 0,\n            "default_conn_delay": 0.1,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,i.kt)("h3",{id:"conf-parameter"},"conf parameter"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"conf")," parameter is the relevant configuration information of the plugin, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(conf))")," to output it to ",(0,i.kt)("inlineCode",{parentName:"p"},"error.log")," for viewing, as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(conf))\n    ......\nend\n")),(0,i.kt)("p",null,"conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rejected_code": 503,\n  "burst": 0,\n  "default_conn_delay": 0.1,\n  "conn": 1,\n  "key": "remote_addr"\n}\n')),(0,i.kt)("h3",{id:"ctx-parameter"},"ctx parameter"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ctx")," parameter caches data information related to the request. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"core.log.warn(core.json.encode(ctx, true))")," to output it to ",(0,i.kt)("inlineCode",{parentName:"p"},"error.log")," for viewing, as shown below :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"function _M.access(conf, ctx)\n    core.log.warn(core.json.encode(ctx, true))\n    ......\nend\n")),(0,i.kt)("h2",{id:"register-public-api"},"register public API"),(0,i.kt)("p",null,"A plugin can register API which exposes to the public. Take jwt-auth plugin as an example, this plugin registers ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /apisix/plugin/jwt/sign")," to allow client to sign its key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local function gen_token()\n    --...\nend\n\nfunction _M.api()\n    return {\n        {\n            methods = {"GET"},\n            uri = "/apisix/plugin/jwt/sign",\n            handler = gen_token,\n        }\n    }\nend\n')),(0,i.kt)("p",null,"Note that the public API will not be exposed by default, you will need to use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/plugins/public-api"},"public-api plugin")," to expose it."),(0,i.kt)("h2",{id:"register-control-api"},"register control API"),(0,i.kt)("p",null,"If you only want to expose the API to the localhost or intranet, you can expose it via ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/control-api"},"Control API"),"."),(0,i.kt)("p",null,"Take a look at example-plugin plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local function hello()\n    local args = ngx.req.get_uri_args()\n    if args["json"] then\n        return 200, {msg = "world"}\n    else\n        return 200, "world\\n"\n    end\nend\n\n\nfunction _M.control_api()\n    return {\n        {\n            methods = {"GET"},\n            uris = {"/v1/plugin/example-plugin/hello"},\n            handler = hello,\n        }\n    }\nend\n')),(0,i.kt)("p",null,"If you don't change the default control API configuration, the plugin will be expose ",(0,i.kt)("inlineCode",{parentName:"p"},"GET /v1/plugin/example-plugin/hello")," which can only be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". Test with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i -X GET "http://127.0.0.1:9090/v1/plugin/example-plugin/hello"\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/control-api"},"Read more about control API introduction")),(0,i.kt)("h2",{id:"register-custom-variable"},"register custom variable"),(0,i.kt)("p",null,"We can use variables in many places of APISIX. For example, customizing log format in http-logger, using it as the key of ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-*")," plugins. In some situations, the builtin variables are not enough. Therefore, APISIX allows developers to register their variables globally, and use them as normal builtin variables."),(0,i.kt)("p",null,"For instance, let's register a variable called ",(0,i.kt)("inlineCode",{parentName:"p"},"a6_labels_zone")," to fetch the value of the ",(0,i.kt)("inlineCode",{parentName:"p"},"zone")," label in a route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'local core = require "apisix.core"\n\ncore.ctx.register_var("a6_labels_zone", function(ctx)\n    local route = ctx.matched_route and ctx.matched_route.value\n    if route and route.labels then\n        return route.labels.zone\n    end\n    return nil\nend)\n')),(0,i.kt)("p",null,"After that, any get operation to ",(0,i.kt)("inlineCode",{parentName:"p"},"$a6_labels_zone")," will call the registered getter to fetch the value."),(0,i.kt)("p",null,"Note that the custom variables can't be used in features that depend on the Nginx directive, like ",(0,i.kt)("inlineCode",{parentName:"p"},"access_log_format"),"."),(0,i.kt)("h2",{id:"write-test-case"},"write test case"),(0,i.kt)("p",null,'For functions, write and improve the test cases of various dimensions, do a comprehensive test for your plugin! The\ntest cases of plugins are all in the "',(0,i.kt)("strong",{parentName:"p"},"t/plugin"),'" directory. You can go ahead to find out. APISIX uses\n',(0,i.kt)("a",{parentName:"p",href:"https://github.com/openresty/test-nginx"},"*",(0,i.kt)("strong",{parentName:"a"},"*test-nginx**"))," as the test framework. A test case (.t file) is usually\ndivided into prologue and data parts by ","_","_data","_","_. Here we will briefly introduce the data part, that is, the part\nof the real test case. For example, the key-auth plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-perl"},'=== TEST 1: sanity\n--- config\n    location /t {\n        content_by_lua_block {\n            local plugin = require("apisix.plugins.key-auth")\n            local ok, err = plugin.check_schema({key = \'test-key\'}, core.schema.TYPE_CONSUMER)\n            if not ok then\n                ngx.say(err)\n            end\n\n            ngx.say("done")\n        }\n    }\n--- request\nGET /t\n--- response_body\ndone\n--- no_error_log\n[error]\n')),(0,i.kt)("p",null,"A test case consists of three parts :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Program code")," : configuration content of Nginx location"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Input")," : http request information"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Output check")," : status, header, body, error log check")),(0,i.kt)("p",null,"When we request ",(0,i.kt)("strong",{parentName:"p"},"/t"),', which config in the configuration file, the Nginx will call "',(0,i.kt)("strong",{parentName:"p"},"content_by_lua_block"),'" instruction to\ncomplete the Lua script, and finally return. The assertion of the use case is response_body return "done",\n"',(0,i.kt)("strong",{parentName:"p"},"no_error_log"),'" means to check the "',(0,i.kt)("strong",{parentName:"p"},"error.log"),"\" of Nginx. There must be no ERROR level record. The log files for the unit test\nare located in the following folder: 't/servroot/logs'."),(0,i.kt)("p",null,"The above test case represents a simple scenario. Most scenarios will require multiple steps to validate. To do this, create multiple tests ",(0,i.kt)("inlineCode",{parentName:"p"},"=== TEST 1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"=== TEST 2"),", and so on. These tests will be executed sequentially, allowing you to break down scenarios into a sequence of atomic steps."),(0,i.kt)("p",null,"Additionally, there are some convenience testing endpoints which can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/t/lib/server.lua#L36"},"here"),". For example, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/t/plugin/proxy-rewrite.lua"},"proxy-rewrite"),". In test 42, the upstream ",(0,i.kt)("inlineCode",{parentName:"p"},"uri")," is made to redirect ",(0,i.kt)("inlineCode",{parentName:"p"},"/test?new_uri=hello")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/hello")," (which always returns ",(0,i.kt)("inlineCode",{parentName:"p"},"hello world"),"). In test 43, the response body is confirmed to equal ",(0,i.kt)("inlineCode",{parentName:"p"},"hello world"),", meaning the proxy-rewrite configuration added with test 42 worked correctly."),(0,i.kt)("p",null,"Refer the following ",(0,i.kt)("a",{parentName:"p",href:"/docs/apisix/3.4/building-apisix"},"document")," to setup the testing framework."),(0,i.kt)("h3",{id:"attach-the-test-nginx-execution-process"},"attach the test-nginx execution process:"),(0,i.kt)("p",null,"According to the path we configured in the makefile and some configuration items at the front of each ",(0,i.kt)("strong",{parentName:"p"},".t"),' file, the\nframework will assemble into a complete nginx.conf file. "',(0,i.kt)("strong",{parentName:"p"},"t/servroot"),'" is the working directory of Nginx and start the\nNginx instance. according to the information provided by the test case, initiate the http request and check that the\nreturn items of HTTP include HTTP status, HTTP response header, HTTP response body and so on.'))}c.isMDXComponent=!0}}]);