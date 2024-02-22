"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||o[u]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99517:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"TLS \u53cc\u5411\u8ba4\u8bc1"},l=void 0,c={unversionedId:"mtls",id:"mtls",isDocsHomePage:!1,title:"TLS \u53cc\u5411\u8ba4\u8bc1",description:"\u53cc\u5411\u8ba4\u8bc1\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u6cd5\u6765\u963b\u6b62\u672a\u7ecf\u6388\u6743\u7684\u5bf9 APISIX Admin API \u7684\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/mtls.md",sourceDirName:".",slug:"/mtls",permalink:"/zh/docs/apisix/next/mtls",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/mtls.md",tags:[],version:"current",frontMatter:{title:"TLS \u53cc\u5411\u8ba4\u8bc1"},sidebar:"docs",previous:{title:"Running APISIX in AWS with AWS CDK",permalink:"/zh/docs/apisix/next/aws"},next:{title:"\u8c03\u8bd5\u529f\u80fd",permalink:"/zh/docs/apisix/next/debug-function"}},s=[{value:"\u4fdd\u62a4 Admin API",id:"\u4fdd\u62a4-admin-api",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e",children:[]},{value:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528",children:[]}]},{value:"\u4fdd\u62a4 ETCD",id:"\u4fdd\u62a4-etcd",children:[{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e-1",children:[]}]},{value:"\u4fdd\u62a4\u8def\u7531",id:"\u4fdd\u62a4\u8def\u7531",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-1",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e-2",children:[]}]},{value:"APISIX \u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1",id:"apisix-\u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1",children:[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-2",children:[]},{value:"\u5982\u4f55\u914d\u7f6e",id:"\u5982\u4f55\u914d\u7f6e-3",children:[]}]}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4fdd\u62a4-admin-api"},"\u4fdd\u62a4 Admin API"),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,r.kt)("p",null,"\u53cc\u5411\u8ba4\u8bc1\u63d0\u4f9b\u4e86\u4e00\u79cd\u66f4\u597d\u7684\u65b9\u6cd5\u6765\u963b\u6b62\u672a\u7ecf\u6388\u6743\u7684\u5bf9 APISIX Admin API \u7684\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u9700\u8981\u5411\u670d\u52a1\u5668\u63d0\u4f9b\u8bc1\u4e66\uff0c\u670d\u52a1\u5668\u5c06\u68c0\u67e5\u8be5\u5ba2\u6237\u7aef\u8bc1\u4e66\u662f\u5426\u7531\u53d7\u4fe1\u7684 CA \u7b7e\u540d\uff0c\u5e76\u51b3\u5b9a\u662f\u5426\u54cd\u5e94\u5176\u8bf7\u6c42\u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e"},"\u5982\u4f55\u914d\u7f6e"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u751f\u6210\u81ea\u7b7e\u8bc1\u4e66\u5bf9\uff0c\u5305\u62ec CA\u3001server\u3001client \u8bc1\u4e66\u5bf9\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," \u4e2d\u7684\u914d\u7f6e\u9879\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},'  admin_listen:\n    ip: 127.0.0.1\n    port: 9180\n  https_admin: true\n\n  admin_api_mtls:\n    admin_ssl_ca_cert: "/data/certs/mtls_ca.crt"              # Path of your self-signed ca cert.\n    admin_ssl_cert: "/data/certs/mtls_server.crt"             # Path of your self-signed server side cert.\n    admin_ssl_cert_key: "/data/certs/mtls_server.key"         # Path of your self-signed server side key.\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u6267\u884c\u547d\u4ee4\uff0c\u4f7f\u914d\u7f6e\u751f\u6548\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apisix init\napisix reload\n")),(0,r.kt)("h3",{id:"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"},"\u5ba2\u6237\u7aef\u5982\u4f55\u8c03\u7528"),(0,r.kt)("p",null,"\u9700\u8981\u5c06\u8bc1\u4e66\u6587\u4ef6\u7684\u8def\u5f84\u4e0e\u57df\u540d\u6309\u5b9e\u9645\u60c5\u51b5\u66ff\u6362\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u63d0\u4f9b\u7684 CA \u8bc1\u4e66\u9700\u8981\u4e0e\u670d\u52a1\u7aef\u7684\u76f8\u540c\u3002*")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --cacert /data/certs/mtls_ca.crt --key /data/certs/mtls_client.key --cert /data/certs/mtls_client.crt  https://admin.apisix.dev:9180/apisix/admin/routes -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,r.kt)("h2",{id:"\u4fdd\u62a4-etcd"},"\u4fdd\u62a4 ETCD"),(0,r.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e-1"},"\u5982\u4f55\u914d\u7f6e"),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u6784\u5efa ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/FAQ#%E5%A6%82%E4%BD%95%E6%9E%84%E5%BB%BA-APISIX-runtime-%E7%8E%AF%E5%A2%83%EF%BC%9F"},"APISIX-runtime"),"\uff0c\u5e76\u4e14\u9700\u8981\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8bbe\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"etcd.tls")," \u6765\u4f7f ETCD \u7684\u53cc\u5411\u8ba4\u8bc1\u529f\u80fd\u6b63\u5e38\u5de5\u4f5c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n  role: traditional\n  role_traditional:\n    config_provider: etcd\n  etcd:\n    tls:\n      cert: /data/certs/etcd_client.pem       # path of certificate used by the etcd client\n      key: /data/certs/etcd_client.key        # path of key used by the etcd client\n")),(0,r.kt)("p",null,"\u5982\u679c APISIX \u4e0d\u4fe1\u4efb etcd server \u4f7f\u7528\u7684 CA \u8bc1\u4e66\uff0c\u6211\u4eec\u9700\u8981\u8bbe\u7f6e CA \u8bc1\u4e66\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"apisix:\n  ssl:\n    ssl_trusted_certificate: /path/to/certs/ca-certificates.crt       # path of CA certificate used by the etcd server\n")),(0,r.kt)("h2",{id:"\u4fdd\u62a4\u8def\u7531"},"\u4fdd\u62a4\u8def\u7531"),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-1"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,r.kt)("p",null,"\u53cc\u5411\u8ba4\u8bc1\u662f\u4e00\u79cd\u5bc6\u7801\u5b66\u5b89\u5168\u7684\u9a8c\u8bc1\u5ba2\u6237\u7aef\u8eab\u4efd\u7684\u624b\u6bb5\u3002\u5f53\u4f60\u9700\u8981\u52a0\u5bc6\u5e76\u4fdd\u62a4\u6d41\u91cf\u7684\u53cc\u5411\u5b89\u5168\u65f6\u5f88\u6709\u7528\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u53cc\u5411\u8ba4\u8bc1\u53ea\u53d1\u751f\u5728 HTTPS \u4e2d\u3002\u5982\u679c\u4f60\u7684\u8def\u7531\u4e5f\u53ef\u4ee5\u901a\u8fc7 HTTP \u8bbf\u95ee\uff0c\u4f60\u5e94\u8be5\u5728 HTTP \u4e2d\u6dfb\u52a0\u989d\u5916\u7684\u4fdd\u62a4\uff0c\u6216\u8005\u7981\u6b62\u901a\u8fc7 HTTP \u8bbf\u95ee\u3002*")),(0,r.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e-2"},"\u5982\u4f55\u914d\u7f6e"),(0,r.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/tutorials/client-to-apisix-mtls"},"\u6f14\u793a\u6559\u7a0b"),"\uff0c\u8be6\u7ec6\u5730\u8bb2\u89e3\u4e86\u5982\u4f55\u914d\u7f6e\u5ba2\u6237\u7aef\u548c APISIX \u4e4b\u95f4\u7684 mTLS\u3002"),(0,r.kt)("p",null,"\u5728\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl")," \u8d44\u6e90\u65f6\uff0c\u540c\u65f6\u9700\u8981\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"client.ca")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"client.depth")," \u53c2\u6570\uff0c\u5206\u522b\u4ee3\u8868\u4e3a\u5ba2\u6237\u7aef\u8bc1\u4e66\u7b7e\u540d\u7684 CA \u5217\u8868\uff0c\u548c\u8bc1\u4e66\u94fe\u7684\u6700\u5927\u6df1\u5ea6\u3002\u53ef\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api#ssl"},"SSL API \u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u53ef\u7528\u4e8e\u751f\u6210\u5e26\u53cc\u5411\u8ba4\u8bc1\u914d\u7f6e\u7684 SSL \u8d44\u6e90\u7684 shell \u811a\u672c\u793a\u4f8b\uff08\u5982\u679c\u9700\u8981\uff0c\u53ef\u4fee\u6539 API \u5730\u5740\u3001API Key \u548c SSL \u8d44\u6e90\u7684 ID\u3002\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/ssls/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n    "cert": "\'"$(cat t/certs/mtls_server.crt)"\'",\n    "key": "\'"$(cat t/certs/mtls_server.key)"\'",\n    "snis": [\n        "admin.apisix.dev"\n    ],\n    "client": {\n        "ca": "\'"$(cat t/certs/mtls_ca.crt)"\'",\n        "depth": 10\n    }\n}\'\n')),(0,r.kt)("p",null,"\u6d4b\u8bd5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -vvv --resolve \'admin.apisix.dev:9443:127.0.0.1\' https://admin.apisix.dev:9443/hello --cert t/certs/mtls_client.crt --key t/certs/mtls_client.key --cacert t/certs/mtls_ca.crt\n\n* Added admin.apisix.dev:9443:127.0.0.1 to DNS cache\n* Hostname admin.apisix.dev was found in DNS cache\n*   Trying 127.0.0.1:9443...\n* Connected to admin.apisix.dev (127.0.0.1) port 9443 (#0)\n* ALPN: offers h2\n* ALPN: offers http/1.1\n*  CAfile: t/certs/mtls_ca.crt\n*  CApath: none\n* [CONN-0-0][CF-SSL] (304) (OUT), TLS handshake, Client hello (1):\n* [CONN-0-0][CF-SSL] (304) (IN), TLS handshake, Server hello (2):\n* [CONN-0-0][CF-SSL] (304) (IN), TLS handshake, Unknown (8):\n* [CONN-0-0][CF-SSL] (304) (IN), TLS handshake, Request CERT (13):\n* [CONN-0-0][CF-SSL] (304) (IN), TLS handshake, Certificate (11):\n* [CONN-0-0][CF-SSL] (304) (IN), TLS handshake, CERT verify (15):\n* [CONN-0-0][CF-SSL] (304) (IN), TLS handshake, Finished (20):\n* [CONN-0-0][CF-SSL] (304) (OUT), TLS handshake, Certificate (11):\n* [CONN-0-0][CF-SSL] (304) (OUT), TLS handshake, CERT verify (15):\n* [CONN-0-0][CF-SSL] (304) (OUT), TLS handshake, Finished (20):\n* SSL connection using TLSv1.3 / AEAD-AES256-GCM-SHA384\n* ALPN: server accepted h2\n* Server certificate:\n*  subject: C=cn; ST=GuangDong; L=ZhuHai; CN=admin.apisix.dev; OU=ops\n*  start date: Dec  1 10:17:24 2022 GMT\n*  expire date: Aug 18 10:17:24 2042 GMT\n*  subjectAltName: host "admin.apisix.dev" matched cert\'s "admin.apisix.dev"\n*  issuer: C=cn; ST=GuangDong; L=ZhuHai; CN=ca.apisix.dev; OU=ops\n*  SSL certificate verify ok.\n* Using HTTP2, server supports multiplexing\n* Copying HTTP/2 data in stream buffer to connection buffer after upgrade: len=0\n* h2h3 [:method: GET]\n* h2h3 [:path: /hello]\n* h2h3 [:scheme: https]\n* h2h3 [:authority: admin.apisix.dev:9443]\n* h2h3 [user-agent: curl/7.87.0]\n* h2h3 [accept: */*]\n* Using Stream ID: 1 (easy handle 0x13000bc00)\n> GET /hello HTTP/2\n> Host: admin.apisix.dev:9443\n> user-agent: curl/7.87.0\n> accept: */*\n')),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c\u6d4b\u8bd5\u65f6\u4f7f\u7528\u7684\u57df\u540d\u9700\u8981\u7b26\u5408\u8bc1\u4e66\u7684\u53c2\u6570\u3002"),(0,r.kt)("h2",{id:"apisix-\u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1"},"APISIX \u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1"),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-2"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,r.kt)("p",null,"\u6709\u65f6\u5019\u4e0a\u6e38\u7684\u670d\u52a1\u542f\u7528\u4e86\u53cc\u5411\u8ba4\u8bc1\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cAPISIX \u4f5c\u4e3a\u4e0a\u6e38\u670d\u52a1\u7684\u5ba2\u6237\u7aef\uff0c\u9700\u8981\u63d0\u4f9b\u5ba2\u6237\u7aef\u8bc1\u4e66\u6765\u6b63\u5e38\u4e0e\u5176\u8fdb\u884c\u901a\u4fe1\u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u914d\u7f6e-3"},"\u5982\u4f55\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u914d\u7f6e upstream \u8d44\u6e90\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.client_cert")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"tls.client_key")," \u6765\u914d\u7f6e APISIX \u7528\u4e8e\u4e0e\u4e0a\u6e38\u8fdb\u884c\u901a\u8baf\u65f6\u4f7f\u7528\u7684\u8bc1\u4e66\u3002\u53ef\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/admin-api#upstream"},"Upstream API \u6587\u6863"),"\u3002"),(0,r.kt)("p",null,"\u8be5\u529f\u80fd\u9700\u8981 APISIX \u8fd0\u884c\u5728 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/next/FAQ#%E5%A6%82%E4%BD%95%E6%9E%84%E5%BB%BA-apisix-runtime-%E7%8E%AF%E5%A2%83"},"APISIX-Runtime")," \u4e0a\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4e0e\u914d\u7f6e SSL \u65f6\u76f8\u4f3c\u7684 shell \u811a\u672c\uff0c\u53ef\u4e3a\u4e00\u4e2a\u5df2\u5b58\u5728\u7684 upstream \u8d44\u6e90\u914d\u7f6e\u53cc\u5411\u8ba4\u8bc1\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PATCH -d \'\n{\n    "tls": {\n        "client_cert": "\'"$(cat t/certs/mtls_client.crt)"\'",\n        "client_key": "\'"$(cat t/certs/mtls_client.key)"\'"\n    }\n}\'\n')))}p.isMDXComponent=!0}}]);