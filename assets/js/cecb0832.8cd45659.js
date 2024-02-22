"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[81348],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(25773),r=(n(27378),n(35318));const i={title:"Biweekly Report (December 18 - December 31)",keywords:["Apache APISIX","API Gateway","Weekly Report","Contributor"],description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",tags:["Community"],image:"https://static.apiseven.com/uploads/2024/01/03/7NwLI3ky_ENG.png"},o=void 0,p={permalink:"/blog/2024/01/03/bi-weekly-report",source:"@site/blog/2024/01/03/bi-weekly-report.md",title:"Biweekly Report (December 18 - December 31)",description:"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved.",date:"2024-01-03T00:00:00.000Z",formattedDate:"January 3, 2024",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:2.21,truncated:!0,authors:[],prevItem:{title:"Release Apache APISIX 3.8.0",permalink:"/blog/2024/01/15/release-apache-apisix-3.8.0"},nextItem:{title:"Biweekly Report (December 04 - December 17)",permalink:"/blog/2023/12/20/bi-weekly-report"}},l={authorsImageUrls:[]},s=[{value:"Contributor Statistics",id:"contributor-statistics",children:[],level:2},{value:"Highlight of Recent Feature",id:"highlight-of-recent-feature",children:[],level:2},{value:"Recent Blog Recommendations",id:"recent-blog-recommendations",children:[],level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"We have recently made some additions and improvements to specific features within Apache APISIX. The updates include the ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin configuration supporting environment variables, the ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin supporting gzip when using the filters.regex option, and upgrading OpenSSL 1.1.1 to OpenSSL 3.0 version. For additional information, please consult the bi-weekly report."),(0,r.kt)("h2",{parentName:"blockquote",id:"introduction"},"Introduction")),(0,r.kt)("p",null,"From its inception, the Apache APISIX project has embraced the ethos of open-source community collaboration, propelling it into the ranks of the most active global open-source API gateway projects. The proverbial wisdom of 'Many hands make light work' rings true in our way, made possible by the collective dedication of our community."),(0,r.kt)("p",null,"From 12.18 to 12.31, a total of 18 contributors made 32 commits to Apache APISIX. We sincerely appreciate your contributions to Apache APISIX."),(0,r.kt)("p",null,"We have recently added and enhanced several plugins, and here is a summary of the updates:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin configuration supports environment variables")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"response-rewrite")," plugin supports gzip when using the filters.regex option")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upgrade OpenSSL 1.1.1 to OpenSSL 3.0 version"))),(0,r.kt)("p",null,"Our bi-weekly Apache APISIX community report is your window into the project's weekly developments. It is a tool to facilitate your seamless integration into the Apache APISIX community, ensuring that you stay well-informed and actively involved."),(0,r.kt)("h2",{id:"contributor-statistics"},"Contributor Statistics"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/01/03/CPoS8MJV_Con.png",alt:"Apache APISIX Contributors List"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2024/01/03/Cs8W4P1U_New.png",alt:"Apache APISIX New Contributors"})),(0,r.kt)("h2",{id:"highlight-of-recent-feature"},"Highlight of Recent Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10607"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"limit-count")," plugin configuration supports environment variables")," (Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ikatlinsky"},"ikatlinsky"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10637"},"The ",(0,r.kt)("inlineCode",{parentName:"a"},"response-rewrite")," plugin supports gzip when using the filters.regex option")," (Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/yuweizzz"},"yuweizzz"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/10724"},"Upgrade OpenSSL 1.1.1 to OpenSSL 3.0 version")," (Contributor: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AlinsRan"},"AlinsRan"),")"))),(0,r.kt)("h2",{id:"recent-blog-recommendations"},"Recent Blog Recommendations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/12/19/datavisor-uses-apisix/"},"Enhancing Security and Performance: DataVisor's Dynamic Use of APISIX")),(0,r.kt)("p",{parentName:"li"},"Author: Xiaobiao Zhao, DataVisor Senior Architect, Apache Kvrocks Committer, OpenResty and Apache APISIX Contributor. This article is based on a presentation given by Xiaobiao Zhao at the APISIX Shanghai Meetup in November 2023.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/12/14/apisix-plugins-priority-leaky-abstraction/"},"Apache APISIX plugin priority, a leaky abstraction?")),(0,r.kt)("p",{parentName:"li"},"Apache APISIX builds upon the OpenResty reverse-proxy to offer a plugin-based architecture. The main benefit of such an architecture is that it brings structure to the configuration of routes. It's a help at scale, when managing hundreds or thousands of routes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2023/12/14/migu-video-adopts-apisix/"},"How to Supercharge Large-Scale Video Operations with APISIX")),(0,r.kt)("p",{parentName:"li"},"Author: Yu Xia, Senior DevOps Engineer at Migu Video Construction and Operation Center. This article is based on a presentation given by Yu Xia at the APISIX Shanghai Meetup in November 2023."))),(0,r.kt)("p",null,"A wealth of documentation tutorials and experience has been accumulated on the Apache APISIX official website and GitHub. If you encounter problems, you can look into the documentation, search keywords in the issues, or participate in the discussion on the issues, proposing your own ideas and practical experience."))}u.isMDXComponent=!0}}]);