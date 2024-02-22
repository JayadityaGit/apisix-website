"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[51425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(l,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8157:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const r={title:"Upgrade Guide",keywords:["APISIX","APISIX Upgrade Guide","APISIX Version Upgrade"],description:"This document will guide on you how to upgrade your APISIX version."},o=void 0,p={unversionedId:"upgrade-guide-from-2.15.x-to-3.0.0",id:"version-3.6/upgrade-guide-from-2.15.x-to-3.0.0",isDocsHomePage:!1,title:"Upgrade Guide",description:"This document will guide on you how to upgrade your APISIX version.",source:"@site/docs-apisix_versioned_docs/version-3.6/upgrade-guide-from-2.15.x-to-3.0.0.md",sourceDirName:".",slug:"/upgrade-guide-from-2.15.x-to-3.0.0",permalink:"/docs/apisix/3.6/upgrade-guide-from-2.15.x-to-3.0.0",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.6/docs/en/latest/upgrade-guide-from-2.15.x-to-3.0.0.md",tags:[],version:"3.6",frontMatter:{title:"Upgrade Guide",keywords:["APISIX","APISIX Upgrade Guide","APISIX Version Upgrade"],description:"This document will guide on you how to upgrade your APISIX version."},sidebar:"version-3.6/docs",previous:{title:"SSL Protocol",permalink:"/docs/apisix/3.6/ssl-protocol"}},l=[{value:"Upgrade path for APISIX",id:"upgrade-path-for-apisix",children:[]},{value:"From 2.15.x upgrade to 3.0.0",id:"from-215x-upgrade-to-300",children:[{value:"Upgrade Notes and Major Updates",id:"upgrade-notes-and-major-updates",children:[]}]}],s={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"upgrade-path-for-apisix"},"Upgrade path for APISIX"),(0,i.kt)("p",null,"APISIX adheres to ",(0,i.kt)("a",{parentName:"p",href:"https://semver.org/"},"semantic versioning"),"."),(0,i.kt)("p",null,"Upgrading to APISIX 3.0.0 is a major version upgrade and we recommend that you upgrade to 2.15.x first and then to 3.0.0."),(0,i.kt)("h2",{id:"from-215x-upgrade-to-300"},"From 2.15.x upgrade to 3.0.0"),(0,i.kt)("h3",{id:"upgrade-notes-and-major-updates"},"Upgrade Notes and Major Updates"),(0,i.kt)("p",null,"Before upgrading, please check the ",(0,i.kt)("a",{parentName:"p",href:"../../../CHANGELOG.md#300-beta"},"3.0.0-beta")," and ",(0,i.kt)("a",{parentName:"p",href:"../../../CHANGELOG.md#300"},"3.0.0")," in the Change section for incompatible changes and major updates for version 3.0.0."),(0,i.kt)("h4",{id:"deploy"},"Deploy"),(0,i.kt)("p",null,"The alpine-based image is no longer supported, so if you are using the alpine image, you will need to replace it with a debian/centos-based image."),(0,i.kt)("p",null,"Currently, we provide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"debian/centos-based images, you can find them on ",(0,i.kt)("a",{parentName:"li",href:"https://hub.docker.com/r/apache/apisix/tags?page=1&ordering=last_updated"},"DockerHub")),(0,i.kt)("li",{parentName:"ul"},"RPM packages for CentOS 7 and CentOS 8, supporting amd64 and arm64 architectures, refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/installation-guide#installation-via-rpm-repository"},"install via RPM repository")),(0,i.kt)("li",{parentName:"ul"},"DEB package for Debian 11 (bullseye), supporting amd64 and arm64 architectures, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/installation-guide#installation-via-deb-repository"},"install via DEB repository"))),(0,i.kt)("p",null,"3.0.0 makes major updates to the deployment model, as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support the deployment mode of separating data plane and control plane, please refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/deployment-modes#decoupled"},"Decoupled")),(0,i.kt)("li",{parentName:"ul"},"If you need to continue using the original deployment mode, then you can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"traditional")," mode in the deployment mode and update the configuration file, please refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/deployment-modes#traditional"},"Traditional")),(0,i.kt)("li",{parentName:"ul"},"Support Standalone mode, need to update the configuration file, please refer to ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/3.6/deployment-modes#standalone"},"Standalone"))),(0,i.kt)("h4",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"If you use the provided binary packages (Debian and RHEL), or images, then they already bundle all the necessary dependencies for APISIX and you can skip this section."),(0,i.kt)("p",null,"Some features of APISIX require additional NGINX modules to be introduced in OpenResty. To use these features, you need to build a custom OpenResty distribution (APISIX-Base). You can build your own APISIX-Base environment by referring to the code in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/apisix-build-tools"},"api7/apisix-build-tools"),"."),(0,i.kt)("p",null,"If you want APISIX to run on native OpenResty, then only OpenResty 1.19.3.2 and above are supported."),(0,i.kt)("h4",{id:"migrations"},"Migrations"),(0,i.kt)("h5",{id:"static-configuration-migration"},"Static configuration migration"),(0,i.kt)("p",null,"APISIX is configured to override the default ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," with the contents of custom ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", or if a configuration does not exist in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml"),", then use the configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),". In 3.0.0, we adjusted ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),"."),(0,i.kt)("h6",{id:"move-configuration"},"Move configuration"),(0,i.kt)("p",null,"From version 2.15.x to 3.0.0, the location of some configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml")," has been moved. If you are using these configuration, then you need to move them to the new location."),(0,i.kt)("p",null,"Adjustment content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config_center")," is now implemented by ",(0,i.kt)("inlineCode",{parentName:"li"},"config_provider")," under ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment")),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"etcd")," field is moved to ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment"),"."),(0,i.kt)("li",{parentName:"ul"},"The following Admin API configuration is moved to the ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," field under ",(0,i.kt)("inlineCode",{parentName:"li"},"deployment"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"admin_key"),(0,i.kt)("li",{parentName:"ul"},"enable_admin_cors"),(0,i.kt)("li",{parentName:"ul"},"allow_admin"),(0,i.kt)("li",{parentName:"ul"},"admin_listen"),(0,i.kt)("li",{parentName:"ul"},"https_admin"),(0,i.kt)("li",{parentName:"ul"},"admin_api_mtls"),(0,i.kt)("li",{parentName:"ul"},"admin_api_version")))),(0,i.kt)("p",null,"You can find the exact new location of these configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),"."),(0,i.kt)("h6",{id:"update-configuration"},"Update configuration"),(0,i.kt)("p",null,"Some configuration have been removed in 3.0.0 and replaced with new configuration. If you are using these configuration, then you need to update them to the new configuration."),(0,i.kt)("p",null,"Adjustment content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_http2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"listen_port")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.ssl")," and replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.ssl.listen")),(0,i.kt)("p",{parentName:"li"},"If you have this configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  ssl:\n    enable_http2: true\n    listen_port: 9443\n")),(0,i.kt)("p",{parentName:"li"},"Then you need to change it to:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"  ssl:\n    listen:\n      - port: 9443\n        enable_http2: true\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx_config.http.lua_shared_dicts")," and replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx_config.http.custom_lua_shared_dict"),", this configuration is used to declare custom shared memory blocks. If you have this configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx_config:\n  http:\n    lua_shared_dicts:\n      my_dict: 1m\n")),(0,i.kt)("p",{parentName:"li"},"Then you need to change it to:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx_config:\n  http:\n    custom_lua_shared_dict:\n      my_dict: 1m\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"etcd.health_check_retry")," and replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment.etcd.startup_retry"),", this configuration is used to configure the number of retries when APISIX starts to connect to etcd. If you have this configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"etcd:\n  health_check_retry: 2\n")),(0,i.kt)("p",{parentName:"li"},"Then you need to change it to:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"deployment:\n  etcd:\n    startup_retry: 2\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.port_admin")," and replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"deployment.admin.admin_listen"),", this configuration is used to configure the Admin API listening port. If you have this configuration in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," like:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apisix:\n  port_admin: 9180\n")),(0,i.kt)("p",{parentName:"li"},"Then you need to change it to:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"deployment:\n  apisix:\n    admin_listen:\n      ip: 127.0.0.1 # replace with the actual IP exposed\n      port: 9180\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the default value of ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_cpu_affinity")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),". Reason: More and more users are deploying APISIX via containers. Since Nginx's worker_cpu_affinity does not count against the cgroup, enabling worker_cpu_affinity by default can affect APISIX behavior, for example, if multiple instances are bound to a single CPU. To avoid this problem, we disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"enable_cpu_affinity")," option by default in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/config-default.yaml"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"apisix.real_ip_header")," and replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx_config.http.real_ip_header")))),(0,i.kt)("h5",{id:"data-migration"},"Data Migration"),(0,i.kt)("p",null,"If you need to backup and restore your data, you can use the backup and restore function of ETCD, refer to ",(0,i.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.5/op-guide/maintenance/#snapshot-backup"},"etcdctl snapshot"),"."),(0,i.kt)("h4",{id:"data-compatible"},"Data Compatible"),(0,i.kt)("p",null,"In 3.0.0, we have adjusted some of the data structures that affect the routing, upstream, and plugin data of APISIX. The data is not fully compatible between version 3.0.0 and version 2.15.x. You cannot use APISIX version 3.0.0 to connect directly to the ETCD cluster used by APISIX version 2.15.x."),(0,i.kt)("p",null,"In order to keep the data compatible, there are two ways, for reference only."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Review the data in ETCD, back up the incompatible data and then clear it, convert the backed up data structure to that of version 3.0.0, and restore the data through the Admin API of version 3.0.0"),(0,i.kt)("li",{parentName:"ol"},"Review the data in ETCD, write scripts to convert the data structure of version 2.15.x into the data structure of version 3.0.0 in batch")),(0,i.kt)("p",null,"Adjustment content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Moved ",(0,i.kt)("inlineCode",{parentName:"p"},"disable")," of the plugin configuration under ",(0,i.kt)("inlineCode",{parentName:"p"},"_meta")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"disable")," indicates the enable/disable status of the plugin"),(0,i.kt)("p",{parentName:"li"},"If such a data structure exists in ETCD"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins":{\n        "limit-count":{\n            ... // plugin configuration\n            "disable":true\n        }\n    }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the data structure of this plugin should be transformed to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins":{\n        "limit-count":{\n            ... // plugin configuration\n            "_meta":{\n                "disable":true\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",{parentName:"li"},"Note: ",(0,i.kt)("inlineCode",{parentName:"p"},"disable")," is the meta-configuration of the plugin, and this adjustment takes effect for all plugin configurations, not just the ",(0,i.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"service_protocol")," from the Route, and replaced it with ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream.scheme")),(0,i.kt)("p",{parentName:"li"},"If such a data structure exists in ETCD"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uri":"/hello",\n    "service_protocol":"grpc",\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the data structure of this plugin should be transformed to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uri":"/hello",\n    "upstream":{\n        "type":"roundrobin",\n        "scheme":"grpc",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"audience")," field from authz-keycloak, and replaced it with ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")),(0,i.kt)("p",{parentName:"li"},"If such a data structure of authz-keycloak plugin exists in ETCD"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins":{\n        "authz-keycloak":{\n            ... // plugin configuration\n            "audience":"Client ID"\n        }\n    }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the data structure of this plugin should be transformed to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins":{\n        "authz-keycloak":{\n            ... // plugin configuration\n            "client_id":"Client ID"\n        }\n    }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," field from mqtt-proxy, and configure ",(0,i.kt)("inlineCode",{parentName:"p"},"upstream")," outside the plugin and reference it in the plugin"),(0,i.kt)("p",{parentName:"li"},"If such a data structure of mqtt-proxy plugin exists in ETCD"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "remote_addr":"127.0.0.1",\n    "plugins":{\n        "mqtt-proxy":{\n            "protocol_name":"MQTT",\n            "protocol_level":4,\n            "upstream":{\n                "ip":"127.0.0.1",\n                "port":1980\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the data structure of this plugin should be transformed to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "remote_addr":"127.0.0.1",\n    "plugins":{\n        "mqtt-proxy":{\n            "protocol_name":"MQTT",\n            "protocol_level":4\n        }\n    },\n    "upstream":{\n        "type":"chash",\n        "key":"mqtt_client_id",\n        "nodes":[\n            {\n                "host":"127.0.0.1",\n                "port":1980,\n                "weight":1\n            }\n        ]\n    }\n}\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Removed ",(0,i.kt)("inlineCode",{parentName:"p"},"max_retry_times")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"retry_interval")," fields from syslog, and replaced them with ",(0,i.kt)("inlineCode",{parentName:"p"},"max_retry_count")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"retry_delay")),(0,i.kt)("p",{parentName:"li"},"If such a data structure of syslog plugin exists in ETCD"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins":{\n        "syslog":{\n            "max_retry_times":1,\n            "retry_interval":1,\n            ... // other configuration\n        }\n    }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the data structure of this plugin should be transformed to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins":{\n        "syslog":{\n            "max_retry_count":1,\n            "retry_delay":1,\n            ... // other configuration\n        }\n    }\n}\n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"scheme")," field has been removed from proxy-rewrite, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheme")," field has been added to upstream"),(0,i.kt)("p",{parentName:"li"},"If such a data structure of proxy-rewrite plugin exists in ETCD"))),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "plugins":{\n        "proxy-rewrite":{\n            "scheme":"https",\n            ... // other configuration\n        }\n    },\n    "upstream":{\n        "nodes":{\n            "127.0.0.1:1983":1\n        },\n        "type":"roundrobin"\n    },\n    "uri":"/hello"\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the data structure of this plugin should be transformed to"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins":{\n      "proxy-rewrite":{\n          ... // other configuration\n      }\n  },\n  "upstream":{\n      "scheme":"https",\n      "nodes":{\n          "127.0.0.1:1983":1\n      },\n      "type":"roundrobin"\n  },\n  "uri":"/hello"\n}\n')))),(0,i.kt)("h4",{id:"admin-api"},"Admin API"),(0,i.kt)("p",null,"We have made some tweaks to the Admin API that are designed to make it easier to use and more in line with RESTful design ideas."),(0,i.kt)("p",null,"Adjustment content:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When operating resources (both single resources and list resources), the ",(0,i.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," fields in the response body are removed and the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," are moved up to the root of the response body"),(0,i.kt)("p",{parentName:"li"},"In version 2.x, the response format for querying ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/routes/1")," via the Admin API is"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count":1,\n  "action":"get",\n  "node":{\n      "key":"\\/apisix\\/routes\\/1",\n      "value":{\n          ... // content\n      }\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the response format for querying the ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/routes/1")," resource via the Admin API is"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key":"\\/apisix\\/routes\\/1",\n  "value":{\n      ... // content\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When querying the list resources, delete the ",(0,i.kt)("inlineCode",{parentName:"p"},"dir")," field, add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"list")," field to store the data of the list resources, and add a new ",(0,i.kt)("inlineCode",{parentName:"p"},"total")," field to store the total number of list resources"),(0,i.kt)("p",{parentName:"li"},"In version 2.x, the response format for querying ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/routes")," via the Admin API is"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "action":"get",\n  "count":2,\n  "node":{\n      "key":"\\/apisix\\/routes",\n      "nodes":[\n          {\n              "key":"\\/apisix\\/routes\\/1",\n              "value":{\n                  ... // content\n              }\n          },\n          {\n              "key":"\\/apisix\\/routes\\/2",\n              "value":{\n                  ... // content\n              }\n          }\n      ],\n      "dir":true\n  }\n}\n')),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, the response format for querying the ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/routes")," resource via the Admin API is"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "list":[\n      {\n          "key":"\\/apisix\\/routes\\/1",\n          "value":{\n              ... // content\n          }\n\n      },\n      {\n          "key":"\\/apisix\\/routes\\/2",\n          "value":{\n              ... // content\n          }\n      }\n  ],\n  "total":2\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Adjust the request path of the ssl resource from ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/ssl/{id}")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/ssls/{id}")),(0,i.kt)("p",{parentName:"li"},"In version 2.x, operating with ssl resources via the Admin API"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://{apisix_listen_address}/apisix/admin/ssl/{id}\n")),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, operating with ssl resources via the Admin API"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://{apisix_listen_address}/apisix/admin/ssls/{id}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Adjust the request path of the proto resource from ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/proto/{id}")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"/apisix/admin/protos/{id}")),(0,i.kt)("p",{parentName:"li"},"In version 2.x, operating with proto resources via the Admin API"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://{apisix_listen_address}/apisix/admin/proto/{id}\n")),(0,i.kt)("p",{parentName:"li"},"In 3.0.0, operating with proto resources via the Admin API"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://{apisix_listen_address}/apisix/admin/protos/{id}\n")))),(0,i.kt)("p",null,"We also adjusted the Admin API port to 9180."))}d.isMDXComponent=!0}}]);