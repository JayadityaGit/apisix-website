"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[10239],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>I});var r=a(27378);function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,p=function(e,t){if(null==e)return{};var a,r,p={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(p[a]=e[a]);return p}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(p[a]=e[a])}return p}var o=r.createContext({}),l=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},h=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,p=e.mdxType,n=e.originalType,o=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=l(a),I=p,A=u["".concat(o,".").concat(I)]||u[I]||s[I]||n;return a?r.createElement(A,c(c({ref:t},h),{},{components:a})):r.createElement(A,c({ref:t},h))}));function I(e,t){var a=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var n=a.length,c=new Array(n);c[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:p,c[1]=i;for(var l=2;l<n;l++)c[l]=a[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},15048:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>s,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=a(25773),p=(a(27378),a(35318));const n={title:"Apache APISIX \u793e\u533a\u65b0\u91cc\u7a0b\u7891\u2014\u2014\u5168\u7403\u8d21\u732e\u8005\u7a81\u7834 300 \u4f4d\uff01",author:"Apache APISIX \u793e\u533a",date:new Date("2021-10-13T00:00:00.000Z"),keywords:["Apache APISIX","contributor","API \u7f51\u5173","Apache APISIX Ingress"],description:"API \u7f51\u5173 Apache APISIX \u793e\u533a\u8fbe\u6210\u65b0\u7684\u91cc\u7a0b\u7891\uff0c\u4e0e Apache APISIX \u76f8\u5173\u7684\u9879\u76ee\u5168\u7403\u8d21\u732e\u8005\u7a81\u7834 300 \u4f4d\uff01\u793e\u533a\u4f1a\u5b9a\u671f\u4e3e\u529e\u6d3b\u52a8\u53ca Meetup \u4ee5\u4fc3\u8fdb\u793e\u533a\u6210\u5458\u4e4b\u95f4\u7684\u4ea4\u6d41\u3002",tags:["Community"]},c=void 0,i={permalink:"/zh/blog/2021/10/13/celebrating-300-contributors-of-apisix",source:"@site/blog/2021/10/13/celebrating-300-contributors-of-apisix.md",title:"Apache APISIX \u793e\u533a\u65b0\u91cc\u7a0b\u7891\u2014\u2014\u5168\u7403\u8d21\u732e\u8005\u7a81\u7834 300 \u4f4d\uff01",description:"API \u7f51\u5173 Apache APISIX \u793e\u533a\u8fbe\u6210\u65b0\u7684\u91cc\u7a0b\u7891\uff0c\u4e0e Apache APISIX \u76f8\u5173\u7684\u9879\u76ee\u5168\u7403\u8d21\u732e\u8005\u7a81\u7834 300 \u4f4d\uff01\u793e\u533a\u4f1a\u5b9a\u671f\u4e3e\u529e\u6d3b\u52a8\u53ca Meetup \u4ee5\u4fc3\u8fdb\u793e\u533a\u6210\u5458\u4e4b\u95f4\u7684\u4ea4\u6d41\u3002",date:"2021-10-13T00:00:00.000Z",formattedDate:"2021\u5e7410\u670813\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:3.46,truncated:!0,authors:[{name:"Apache APISIX \u793e\u533a"}],prevItem:{title:"\u793e\u533a\u5468\u62a5\uff0810.1-10.14\uff09",permalink:"/zh/blog/2021/10/14/weekly-report-1014"},nextItem:{title:"\u4ece\u6982\u5ff5\u5230\u5b9e\u8df5\u5e2e\u4f60\u5feb\u901f\u4e0a\u624b Apache APISIX Ingress",permalink:"/zh/blog/2021/10/09/apisix-ingress-techblog"}},o={authorsImageUrls:[void 0]},l=[{value:"\u793e\u533a\u6d3b\u52a8",id:"\u793e\u533a\u6d3b\u52a8",children:[{value:"Apache APISIX Meetup",id:"apache-apisix-meetup",children:[],level:3},{value:"Apache APISIX Ingress \u7ebf\u4e0a\u8ba8\u8bba",id:"apache-apisix-ingress-\u7ebf\u4e0a\u8ba8\u8bba",children:[],level:3},{value:"Weekly Report",id:"weekly-report",children:[],level:3}],level:2}],h={toc:l};function s(e){let{components:t,...a}=e;return(0,p.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Apache APISIX \u793e\u533a\u8fbe\u6210\u65b0\u7684\u91cc\u7a0b\u7891\uff0c\u4e0e Apache APISIX \u76f8\u5173\u7684\u9879\u76ee\u5168\u7403\u8d21\u732e\u8005\u7a81\u7834 300 \u4f4d\uff01 \u8ddd\u79bb Apache APISIX \u4e3b\u5e93\u8fbe\u5230 ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/blog/2021/07/06/celebrate-200-contributors/"},"200 \u4f4d\u8d21\u732e\u8005\u91cc\u7a0b\u7891"),"\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u4ec5\u4ec5\u95f4\u9694 3 \u4e2a\u6708"),"\uff01\u611f\u8c22\u793e\u533a\u8d21\u732e\u8005\u4eec\u5728\u4ee3\u7801\u3001\u6587\u6863\u3001\u8fd0\u8425\u7b49\u65b9\u65b9\u9762\u9762\u505a\u51fa\u7684\u5353\u8d8a\u8d21\u732e\u3002")),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1634110612788-576eb5ea-d574-4d8e-891c-8f9fc90d955a.png",alt:"Apache APISIX contributor graph"})),(0,p.kt)("p",null,"ps\uff1a\u63a8\u8350\u9605\u8bfb\u300a",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/08/14/contributors-the-golden-metric-of-openSource-projects-en"},"\u8d21\u732e\u8005\uff0c\u662f\u8861\u91cf\u5f00\u6e90\u9879\u76ee\u7684\u91d1\u6307\u6807"),"\u300b\uff0c",(0,p.kt)("a",{parentName:"p",href:"https://github.com/api7/contributor-graph"},"\u8d21\u732e\u8005\u8d8b\u52bf\u56fe")),(0,p.kt)("p",null,"2020 \u5e74 1 \u6708 Apache APISIX \u53d1\u5e03\u4e86 1.0 \u7248\u672c\uff0c\u8fd9\u662f Apache APISIX \u7b2c\u4e00\u4e2a\u751f\u4ea7\u7248\u672c\u3002\u4e0a\u6708\u5e95 Apache APISIX \u53d1\u5e03\u4e86\u6700\u65b0\u7684\u7248\u672c ",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2021/09/29/release-apache-apisix-2.10/"},"2.10.0"),"\uff0c\u8fd9\u662f Apache APISIX \u7b2c 24 \u4e2a\u7248\u672c\uff0cApache APISIX \u793e\u533a\u4fdd\u6301\u5feb\u901f\u4e14\u7a33\u5b9a\u7684\u8282\u594f\uff0c",(0,p.kt)("strong",{parentName:"p"},"\u6bcf\u6708\u90fd\u4f1a\u53d1\u5e03\u4e00\u4e2a\u65b0\u7248\u672c"),"\u3002Apache APISIX \u7684\u6bcf\u4e00\u6b21\u8ba8\u8bba\u3001\u6bcf\u4e00\u4e2a PR\u3001\u6bcf\u4e00\u4e2a\u91cc\u7a0b\u7891\u90fd\u79bb\u4e0d\u5f00\u5404\u4f4d\u8d21\u732e\u8005\u7684\u53c2\u4e0e\u3002"),(0,p.kt)("p",null,"\u6210\u4e3a Apache APISIX \u8d21\u732e\u8005\u6ca1\u6709\u95e8\u69db\uff0c\u5728 Apache APISIX \u793e\u533a\u4e0d\u53ea\u5305\u542b\u4ee3\u7801\u65b9\u9762\u7684\u8d21\u732e\uff0c\u8fd8\u6709\u6587\u6863\u3001\u6d4b\u8bd5\u3001\u8bbe\u8ba1\u3001\u5236\u4f5c\u89c6\u9891\u7b49\u3002\u5728 Github \u4e0a\u63d0 PR \u6216 Issue\uff0c\u53c2\u4e0e\u90ae\u4ef6\u5217\u8868\u7684\u8ba8\u8bba\uff0c\u901a\u8fc7\u76f4\u64ad\u5206\u4eab\u3001\u5728\u4ea4\u6d41\u7fa4\u5e2e\u52a9\u5927\u5bb6\u89e3\u51b3\u95ee\u9898\u3001\u53c2\u52a0 Meetup\uff0c\u90fd\u662f\u53c2\u4e0e\u5230\u793e\u533a\u7684\u9014\u5f84\u3002\u6b22\u8fce\u5927\u5bb6\u52a0\u5165\u5230 Apache APISIX \u793e\u533a\uff01"),(0,p.kt)("p",null,(0,p.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1634110807125-883173f0-ddb2-4ad0-aafe-073a669bb7a0.jpg",alt:"Apache APISIX contributors"})),(0,p.kt)("h2",{id:"\u793e\u533a\u6d3b\u52a8"},"\u793e\u533a\u6d3b\u52a8"),(0,p.kt)("p",null,"Apache APISIX \u793e\u533a\u975e\u5e38\u6d3b\u8dc3\uff0c\u8d21\u732e\u8005\u4eec\u6bcf\u6708\u90fd\u4f1a\u7ec4\u7ec7\u6d3b\u52a8\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u597d\u5730\u4e86\u89e3\u548c\u5e94\u7528 Apache APISIX\u3002"),(0,p.kt)("h3",{id:"apache-apisix-meetup"},"Apache APISIX Meetup"),(0,p.kt)("p",null,"2021 \u5e74 Apache APISIX \u4e3e\u529e\u4e86\u591a\u573a\u7ebf\u4e0a\u7ebf\u4e0b Meetup \uff0c\u7531 Apache APISIX PMC \u6210\u5458\u3001Committer\u3001Contributor \u548c\u4f01\u4e1a\u6280\u672f\u4e13\u5bb6\u5206\u4eab Apache APISIX \u7684\u6700\u4f73\u5b9e\u8df5\u3002\n\u6b22\u8fce\u5927\u5bb6\u5173\u6ce8 ",(0,p.kt)("a",{parentName:"p",href:"https://space.bilibili.com/551921247"},"Apache APISIX bilibili"),"\uff0c\u89c2\u770b\u5f80\u671f\u56de\u987e\u5185\u5bb9\u3002"),(0,p.kt)("h3",{id:"apache-apisix-ingress-\u7ebf\u4e0a\u8ba8\u8bba"},"Apache APISIX Ingress \u7ebf\u4e0a\u8ba8\u8bba"),(0,p.kt)("p",null,"Apache APISIX Ingress \u9879\u76ee\u6bcf\u4e24\u5468\u4e3e\u529e\u4e00\u6b21\u7ebf\u4e0a\u8ba8\u8bba\uff0c\u5927\u5bb6\u4e00\u540c\u8ba8\u8bba\u5404\u4e2a PR\u3001issue\uff0c\u5206\u4eab\u6700\u4f73\u5b9e\u8df5\u3001\u5bf9 Ingress \u7684\u89c1\u89e3\u548c\u8bbe\u8ba1\u601d\u8def\uff0c\u53ef\u67e5\u770b ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/614"},"issue")," \u83b7\u53d6\u7ebf\u4e0a\u4f1a\u8bae\u5730\u5740\uff0c\u70b9\u51fb ",(0,p.kt)("a",{parentName:"p",href:"https://space.bilibili.com/551921247"},"bilibili \u89c6\u9891\u94fe\u63a5"),"\u89c2\u770b\u5f80\u671f\u56de\u987e\u5185\u5bb9\u3002"),(0,p.kt)("h3",{id:"weekly-report"},"Weekly Report"),(0,p.kt)("p",null,"\u6c47\u603b\u6bcf\u53cc\u5468 Apache APISIX \u9879\u76ee\u529f\u80fd\u5f00\u53d1\u3001Bug \u4fee\u590d\u3001\u793e\u533a\u6d3b\u52a8\u3001\u5b9e\u8df5\u6848\u4f8b\u7b49\u5185\u5bb9\uff0c\u5e2e\u52a9\u5927\u5bb6\u66f4\u5feb\u4e86\u89e3 Apache APISIX \u6700\u65b0\u8fdb\u5c55\u3002\n\u5728 Apache APISIX \u5b98\u7f51\u70b9\u51fb Blog \u9009\u62e9 Community tag \u5373\u53ef\u67e5\u770b\u53cc\u5468 Weekly report\u3002"),(0,p.kt)("p",null,"\u5f80\u671f\u63a8\u8350\uff1a"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/blog/2021/09/15/weekly-report"},"\u793e\u533a\u5468\u62a5\uff5c\u65b0\u664b committer \u4e24\u4f4d\uff0c\u529f\u80fd\u4eae\u70b9\u66f4\u65b0\u8fdb\u884c\u4e2d")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/blog/2021/08/30/weekly-report"},"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021 8.23-8.29")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://apisix.apache.org/zh/blog/2021/08/23/weekly-report"},"Apache APISIX \u793e\u533a\u5468\u62a5 \uff5c 2021 8.16-8.22"))),(0,p.kt)("p",null,"\u4f60\u5e0c\u671b Apache APISIX \u793e\u533a\u4e3e\u529e\u4ec0\u4e48\u6d3b\u52a8\uff1f\u6216\u8005\u60f3\u6210\u4e3a\u67d0\u4e2a\u6d3b\u52a8\u7684\u7ec4\u7ec7\u8005/\u5fd7\u613f\u8005\uff0c\u6b22\u8fce\u5728",(0,p.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8ba8\u8bba\uff01"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u793e\u533a\u5927\u4e8e\u4ee3\u7801"),"\u662f the Apache Way \u4e2d\u975e\u5e38\u91cd\u8981\u7684\u51c6\u5219\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u79c9\u627f the Apache Way\uff0c\u5efa\u8bbe Apache APISIX \u4ee5\u53ca Apache APISIX \u5468\u8fb9\u751f\u6001\u3002Apache APISIX \u793e\u533a\uff0c\u611f\u6069\u6709\u4f60\uff1bApache APISIX \u793e\u533a\uff0c\u4e5f\u671f\u5f85\u66f4\u591a\u5c0f\u4f19\u4f34\u52a0\u5165\u3002"))}s.isMDXComponent=!0}}]);