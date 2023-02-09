"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[177],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>c,MDXProvider:()=>u,mdx:()=>b,useMDXComponents:()=>m,withMDXComponents:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){return function(t){var r=m(t.components);return n.createElement(e,a({},t,{components:r}))}},m=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(r),u=o,d=p["".concat(i,".").concat(u)]||p[u]||f[u]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},80622:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],l={id:"troubleshooting",title:"Troubleshooting"},s=void 0,c={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Uh oh, something went wrong? Use this guide to resolve issues with Metro.",source:"@site/../docs/Troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/metro/docs/troubleshooting",draft:!1,editUrl:"https://github.com/facebook/metro/edit/main/docs/../docs/Troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1675958776,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Metro CLI Options",permalink:"/metro/docs/cli"},next:{title:"Local Development Setup",permalink:"/metro/docs/local-development"}},p={},m=[{value:"Still unresolved?",id:"still-unresolved",level:3}],u={toc:m},d="wrapper";function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Uh oh, something went wrong? Use this guide to resolve issues with Metro."),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Clear Watchman watches: ",(0,a.mdx)("inlineCode",{parentName:"li"},"watchman watch-del-all")),(0,a.mdx)("li",{parentName:"ol"},"Delete ",(0,a.mdx)("inlineCode",{parentName:"li"},"node_modules")," and run ",(0,a.mdx)("inlineCode",{parentName:"li"},"yarn install")),(0,a.mdx)("li",{parentName:"ol"},"Reset Metro's cache by passing the ",(0,a.mdx)("inlineCode",{parentName:"li"},"--reset-cache")," flag, or adding ",(0,a.mdx)("inlineCode",{parentName:"li"},"resetCache: true")," to your Metro configuration file."),(0,a.mdx)("li",{parentName:"ol"},"Remove the cache: ",(0,a.mdx)("inlineCode",{parentName:"li"},"rm -rf ${TMPDIR:-/tmp}/metro-*")),(0,a.mdx)("li",{parentName:"ol"},"Update Metro to the ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/metro"},"latest version"))),(0,a.mdx)("h3",{id:"still-unresolved"},"Still unresolved?"),(0,a.mdx)("p",null,"See the ",(0,a.mdx)("a",{parentName:"p",href:"/help"},"Help")," pages."))}f.isMDXComponent=!0}}]);