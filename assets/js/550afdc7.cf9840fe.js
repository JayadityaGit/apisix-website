"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[98901],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(p,".").concat(d)]||h[d]||u[d]||i;return n?o.createElement(m,r(r({ref:t},s),{},{components:n})):o.createElement(m,r({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(25773),a=(n(27378),n(35318));const i={title:"Authenticate with OpenID Connect and Apache APISIX",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["Authentication","OAuth 2.0","OpenID Connect","Google Cloud"],description:"Lots of companies are eager to provide their identity provider: Twitter, Facebook, Google, etc. For smaller businesses, not having to manage identities is a benefit. However, we want to avoid being locked into one provider. In this post, I want to demo how to use OpenID Connect using Google underneath and then switch to Azure.\n",tags:["Ecosystem"],image:"https://static.apiseven.com/uploads/2023/06/13/OZebsxXL_eye-gd82fef23c.jpg"},r=void 0,l={permalink:"/blog/2023/03/09/authenticate-openid-connect",source:"@site/blog/2023/03/09/authenticate-openid-connect.md",title:"Authenticate with OpenID Connect and Apache APISIX",description:"Lots of companies are eager to provide their identity provider: Twitter, Facebook, Google, etc. For smaller businesses, not having to manage identities is a benefit. However, we want to avoid being locked into one provider. In this post, I want to demo how to use OpenID Connect using Google underneath and then switch to Azure.\n",date:"2023-03-09T00:00:00.000Z",formattedDate:"March 9, 2023",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.615,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"Release Apache APISIX 3.2.0",permalink:"/blog/2023/03/10/release-apache-apisix-3.2.0"},nextItem:{title:"Make your security policy auditable",permalink:"/blog/2023/03/02/security-policy-auditable"}},p={authorsImageUrls:[void 0]},c=[{value:"OpenID Connect",id:"openid-connect",children:[],level:2},{value:"Setting up OpenID Connect with Apache APISIX",id:"setting-up-openid-connect-with-apache-apisix",children:[],level:2},{value:"Configuring Google for OIDC",id:"configuring-google-for-oidc",children:[],level:2},{value:"Configuring Azure for OIDC",id:"configuring-azure-for-oidc",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Lots of companies are eager to provide their identity provider: Twitter, Facebook, Google, etc. For smaller businesses, not having to manage identities is a benefit. However, we want to avoid being locked into one provider. In this post, I want to demo how to use OpenID Connect using Google underneath and then switch to Azure.")),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://blog.frankel.ch/authenticate-openid-connect/"})),(0,a.kt)("h2",{id:"openid-connect"},"OpenID Connect"),(0,a.kt)("p",null,"The idea of an ",(0,a.kt)("em",{parentName:"p"},"authorization")," open standard started with ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/OAuth"},"OAuth")," around 2006. Because of a security issue, OAuth 2.0 superseded the initial version. OAuth 2.0 became an ",(0,a.kt)("abbr",{title:"Internet Engineering Task Force"},"IETF")," ",(0,a.kt)("abbr",{title:"Request For Comments"},"RFC")," in 2012:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The OAuth 2.0 authorization framework enables a third-party\napplication to obtain limited access to an HTTP service, either on\nbehalf of a resource owner by orchestrating an approval interaction\nbetween the resource owner and the HTTP service, or by allowing the\nthird-party application to obtain access on its own behalf"),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749"},"RFC 7469 - The OAuth 2.0 Authorization Framework"))),(0,a.kt)("p",null,"OAuth focuses mostly on ",(0,a.kt)("em",{parentName:"p"},"authorization"),";\nthe ",(0,a.kt)("em",{parentName:"p"},"authentication")," part is pretty light:\nit contains a section about Client Password authentication and one Other Authentication Methods."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The authorization server MAY support any suitable HTTP authentication\nscheme matching its security requirements.  When using other\nauthentication methods, the authorization server MUST define a\nmapping between the client identifier (registration record) and\nauthentication scheme."),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749#section-2.3.2"},"2.3.2.  Other Authentication Methods"))),(0,a.kt)("p",null,"OpenID Connect uses OAuth 2.0 and adds the ",(0,a.kt)("em",{parentName:"p"},"authentication")," part:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"OpenID Connect 1.0 is a simple identity layer on top of the OAuth 2.0 protocol. It allows Clients to verify the identity of the End-User based on the authentication performed by an Authorization Server, as well as to obtain basic profile information about the End-User in an interoperable and REST-like manner."),(0,a.kt)("p",{parentName:"blockquote"},"OpenID Connect allows clients of all types, including Web-based, mobile, and JavaScript clients, to request and receive information about authenticated sessions and end-users. The specification suite is extensible, allowing participants to use optional features such as encryption of identity data, discovery of OpenID Providers, and logout, when it makes sense for them."),(0,a.kt)("p",{parentName:"blockquote"},"-- ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"What is OpenID Connect?"))),(0,a.kt)("p",null,"Here are a couple of identity providers that are compatible with OpenID Connect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GitHub"),(0,a.kt)("li",{parentName:"ul"},"Google"),(0,a.kt)("li",{parentName:"ul"},"Microsoft"),(0,a.kt)("li",{parentName:"ul"},"Apple"),(0,a.kt)("li",{parentName:"ul"},"Facebook"),(0,a.kt)("li",{parentName:"ul"},"Twitter"),(0,a.kt)("li",{parentName:"ul"},"Spotify")),(0,a.kt)("p",null,"In the following, we will start with Google and switch to Azure to validate our setup."),(0,a.kt)("h2",{id:"setting-up-openid-connect-with-apache-apisix"},"Setting up OpenID Connect with Apache APISIX"),(0,a.kt)("p",null,"Imagine we have a web app behind Apache APISIX that we want to secure with OpenID Connect. Here's the corresponding Docker Compose file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3"\n\nservices:\n  apisix:\n    image: apache/apisix:3.1.0-debian                              #1\n    ports:\n      - "9080:9080"\n    volumes:\n      - ./apisix/config.yml:/usr/local/apisix/conf/config.yaml:ro  #2\n      - ./apisix/apisix.yml:/usr/local/apisix/conf/apisix.yaml:ro  #3\n    env_file:\n      - .env\n  httpbin:\n    image: kennethreitz/httpbin                                    #4\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Apache APISIX API Gateway"),(0,a.kt)("li",{parentName:"ol"},"APISIX configuration - used to configure it statically in the following line"),(0,a.kt)("li",{parentName:"ol"},"Configure the single route"),(0,a.kt)("li",{parentName:"ol"},"Webapp to protect. Any will do")),(0,a.kt)("p",null,"Apache APISIX offers a plugin-based architecture. One such plugin is the ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/openid-connect/"},"openid-connect")," plugin, which allows using OpenID Connect."),(0,a.kt)("p",null,"Let's configure it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  - uri: /*                                                                    #1\n    upstream:\n      nodes:\n        "httpbin:80": 1                                                        #1\n    plugins:\n      openid-connect:\n        client_id: ${{OIDC_CLIENTID}}                                          #2\n        client_secret: ${{OIDC_SECRET}}                                        #2\n        discovery: https://${{OIDC_ISSUER}}/.well-known/openid-configuration   #2-3\n        redirect_uri: http://localhost:9080/callback                           #4\n        scope: openid                                                          #5\n        session:\n          secret: ${{SESSION_SECRET}}                                          #6\n#END\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Catch-all route to the underlying web app"),(0,a.kt)("li",{parentName:"ol"},"Plugin configuration parameters. Values depend on the exact provider (see below)"),(0,a.kt)("li",{parentName:"ol"},"OpenID Connect can use a Discovery endpoint to get all necessary OAuth endpoints. See ",(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"},"OpenID Connect Discovery 1.0 spec")," for more information"),(0,a.kt)("li",{parentName:"ol"},"Where to redirect when the authentication is successful. It mustn't clash with any of the explicitly defined routes. The plugin creates a dedicated route there to work its magic."),(0,a.kt)("li",{parentName:"ol"},"Default scope"),(0,a.kt)("li",{parentName:"ol"},"Key to encrypt session data. Put whatever you want.")),(0,a.kt)("h2",{id:"configuring-google-for-oidc"},"Configuring Google for OIDC"),(0,a.kt)("p",null,"Like all Cloud Providers, Google offers a full-fledged Identity Management solution, which may be daunting for newcomers. In this section, I'll only detail the necessary steps required to configure it for ",(0,a.kt)("abbr",{title:"OpenID Connect"},"OIDC"),"."),(0,a.kt)("p",null,"On the ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/"},"Cloud Console"),", create a dedicated project (or use an existing one)."),(0,a.kt)("p",null,"If you didn't do it already, customize the ",(0,a.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/apis/credentials/consent"},"OAuth Consent Screen"),"."),(0,a.kt)("p",null,"In the project context, navigate ",(0,a.kt)("em",{parentName:"p"},"APIs & Services | Credentials"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/13/bYAZa9TL_google-cloud-credentials.jpg",alt:"Google Cloud - Credentials menu"})),(0,a.kt)("p",null,"Then, press the ",(0,a.kt)("em",{parentName:"p"},"+ CREATE CREDENTIALS")," button in the upper menu bar."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/13/k9I8i35H_google-cloud-create-credentials.jpg",alt:"Google Cloud - Create Credentials button"})),(0,a.kt)("p",null,"Select ",(0,a.kt)("em",{parentName:"p"},"OAuth Client Id")," in the scrolling menu."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/13/8J3eCFDY_google-cloud-choose-credentials.jpg",alt:"Google Cloud - Choose credentials type"})),(0,a.kt)("p",null,"Fill in the fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application type: Web application"),(0,a.kt)("li",{parentName:"ul"},"Name: whatever you want"),(0,a.kt)("li",{parentName:"ul"},"Authorized redirect URIs: ",(0,a.kt)("inlineCode",{parentName:"li"},"<URL>/callback"),", ",(0,a.kt)("em",{parentName:"li"},"e.g."),", ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:9080/callback"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/13/FS4fntju_google-cloud-create-oauth-client-id.jpg",alt:"Google Cloud - Create OAuth Client id"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"URL")," should be the URL of the web application. Likewise, ",(0,a.kt)("inlineCode",{parentName:"p"},"/callback")," should match the ",(0,a.kt)("inlineCode",{parentName:"p"},"openid-connect")," plugin configuration above. Note that Google doesn't allow relative URLs, so if you need to reuse the application in different environments, you need to add the URL of each environment. Click the ",(0,a.kt)("em",{parentName:"p"},"Create")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/13/0CRBKPtt_google-cloud-oauth-client-created.jpg",alt:"Google Cloud - OAuth client created"})),(0,a.kt)("p",null,"In the Docker Compose configuration above, use the Client ID and Client Secret as ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_CLIENTID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_SECRET"),". I wrote them down as environment variables in a ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,a.kt)("p",null,"The last missing variable is ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_ISSUER"),": it's ",(0,a.kt)("inlineCode",{parentName:"p"},"accounts.google.com"),". If you navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://accounts.google.com/.well-known/openid-configuration"},"https://accounts.google.com/.well-known/openid-configuration"),", you'll see all data required by OAuth 2.0 (and more)."),(0,a.kt)("p",null,"At this point, we can start our setup with ",(0,a.kt)("inlineCode",{parentName:"p"},"docker compose up"),". When we navigate to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:9080/"},"http://localhost:9080/"),", the browser redirects us to the Google authentication page. Since I'm already authenticated, I can choose my ID - and I need one bound to the organization of the project I created above."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/13/yckQhlJf_google-auth-choose-account.jpg",alt:"Choose the Google account you want to authenticate with"})),(0,a.kt)("p",null,"Then, I can freely access the resource."),(0,a.kt)("h2",{id:"configuring-azure-for-oidc"},"Configuring Azure for OIDC"),(0,a.kt)("p",null,"My colleague Bobur has already ",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/apisix/api-security-with-oidc-by-using-apache-apisix-and-microsoft-azure-ad-50h3"},"described everything")," you need to do to configure Azure for OIDC."),(0,a.kt)("p",null,"We only need to change the OIDC parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OIDC_CLIENTID")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OIDC_SECRET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"OIDC_ISSUER"),": on Azure, it should look something like ",(0,a.kt)("inlineCode",{parentName:"li"},"login.microsoftonline.com/<TENANT_ID>/v2.0"))),(0,a.kt)("p",null,"If you restart Docker Compose with the new parameters, the root page is now protected by Azure login."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Externalizing your authentication process to a third party may be sensible, but you want to avoid binding your infrastructure to its proprietary process. OpenID Connect is an industry standard that allows switching providers easily."),(0,a.kt)("p",null,"Apache APISIX offers a plugin that integrates OIDC so that you can protect your applications with the latter. There's no reason not to use it, as all dedicated identity providers, such as Okta and Keycloak, are OIDC-compatible."),(0,a.kt)("p",null,"The complete source code for this post can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ajavageek/openid-authentication"},"GitHub"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"To go further:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/connect/"},"OpenID Connect")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OpenID Connect Discovery 1.0 specification")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/apisix/plugins/openid-connect/"},"Apache APISIX OIDC plugin")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/apisix/api-security-with-oidc-by-using-apache-apisix-and-microsoft-azure-ad-50h3"},"API Security with OIDC by using Apache APISIX and Microsoft Azure AD")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apisix.apache.org/blog/2022/07/06/use-keycloak-with-api-gateway-to-secure-apis/"},"Use Keycloak with API Gateway to secure APIs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://api7.ai/blog/how-to-use-apisix-auth-with-okta"},"How to Use Apache APISIX Auth With Okta"))))}u.isMDXComponent=!0}}]);