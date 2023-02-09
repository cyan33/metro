"use strict";(self.webpackChunkmetro_website=self.webpackChunkmetro_website||[]).push([[514,972],{19963:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var n=a(67294),r=a(86010),l=a(10833),o=a(35281),i=a(43320),c=a(24575),d=a(74477),s=a(1116),u=a(12724),m=a(95999),b=a(12466),p=a(85936);const f={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function h(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),r=a[0],l=a[1],o=(0,n.useRef)(!1),i=(0,b.Ct)(),c=i.startScroll,d=i.cancelScroll;return(0,b.RF)((function(e,a){var n=e.scrollY,r=null==a?void 0:a.scrollY;r&&(o.current?o.current=!1:n>=r?(d(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((function(e){e.location.hash&&(o.current=!0,l(!1))})),{shown:r,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.default)("clean-btn",o.k.common.backToTopButton,f.backToTopButton,t&&f.backToTopButtonShow),type:"button",onClick:a})}var v=a(76775),E=a(87524),g=a(86668),k=a(21327),_=a(83117);function C(e){return n.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function I(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,m.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.default)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},n.createElement(C,{className:S.collapseSidebarButtonIcon}))}var N=a(59689),x=a(80102),T=a(44700),B=Symbol("EmptyContext"),w=n.createContext(B);function y(e){var t=e.children,a=(0,n.useState)(null),r=a[0],l=a[1],o=(0,n.useMemo)((function(){return{expandedItem:r,setExpandedItem:l}}),[r]);return n.createElement(w.Provider,{value:o},t)}var L=a(86043),A=a(48596),H=a(39960),M=a(72389),P=["item","onItemClick","activePath","level","index"];function F(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function Z(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=e.index,s=(0,x.Z)(e,P),u=t.items,m=t.label,b=t.collapsible,p=t.className,f=t.href,h=(0,g.L)().docs.sidebar.autoCollapseCategories,v=function(e){var t=(0,M.default)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,l),k=(0,A.Mg)(f,l),C=(0,L.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),S=C.collapsed,I=C.setCollapsed,N=function(){var e=(0,n.useContext)(w);if(e===B)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=N.expandedItem,Z=N.setExpandedItem,W=function(e){void 0===e&&(e=!S),Z(e?null:d),I(e)};return function(e){var t=e.isActive,a=e.collapsed,r=e.updateCollapsed,l=(0,T.D9)(t);(0,n.useEffect)((function(){t&&!l&&a&&r(!1)}),[t,l,a,r])}({isActive:E,collapsed:S,updateCollapsed:W}),(0,n.useEffect)((function(){b&&null!=y&&y!==d&&h&&I(!0)}),[b,y,d,I,h]),n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(i),"menu__list-item",{"menu__list-item--collapsed":S},p)},n.createElement("div",{className:(0,r.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(H.default,(0,_.Z)({className:(0,r.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!f&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),f?W(!1):(e.preventDefault(),W())}:function(){null==a||a(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!S:void 0,href:b?null!=v?v:"#":v},s),m),f&&b&&n.createElement(F,{categoryLabel:m,onClick:function(e){e.preventDefault(),W()}})),n.createElement(L.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:S},n.createElement(O,{items:u,tabIndex:S?-1:0,onItemClick:a,activePath:l,level:i+1})))}var W=a(13919),D=a(39471);const R={menuExternalLink:"menuExternalLink_NmtK"};var V=["item","onItemClick","activePath","level","index"];function z(e){var t=e.item,a=e.onItemClick,l=e.activePath,i=e.level,d=(e.index,(0,x.Z)(e,V)),s=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,p=(0,c._F)(t,l),f=(0,W.Z)(s);return n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),key:u},n.createElement(H.default,(0,_.Z)({className:(0,r.default)("menu__link",!f&&R.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:s},f&&{onClick:a?function(){return a(t)}:void 0},d),u,!f&&n.createElement(D.Z,null)))}const U={menuHtmlItem:"menuHtmlItem_M9Kj"};function K(e){var t=e.item,a=e.level,l=e.index,i=t.value,c=t.defaultStyle,d=t.className;return n.createElement("li",{className:(0,r.default)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(a),c&&[U.menuHtmlItem,"menu__list-item"],d),key:l,dangerouslySetInnerHTML:{__html:i}})}var j=["item"];function q(e){var t=e.item,a=(0,x.Z)(e,j);switch(t.type){case"category":return n.createElement(Z,(0,_.Z)({item:t},a));case"html":return n.createElement(K,(0,_.Z)({item:t},a));default:return n.createElement(z,(0,_.Z)({item:t},a))}}var G=["items"];function Y(e){var t=e.items,a=(0,x.Z)(e,G);return n.createElement(y,null,t.map((function(e,t){return n.createElement(q,(0,_.Z)({key:t,item:e,index:t},a))})))}const O=(0,n.memo)(Y),X={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function J(e){var t=e.path,a=e.sidebar,l=e.className,i=function(){var e=(0,N.nT)().isActive,t=(0,n.useState)(e),a=t[0],r=t[1];return(0,b.RF)((function(t){var a=t.scrollY;e&&r(0===a)}),[e]),e&&a}();return n.createElement("nav",{"aria-label":(0,m.translate)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,r.default)("menu thin-scrollbar",X.menu,i&&X.menuWithAnnouncementBar,l)},n.createElement("ul",{className:(0,r.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:a,activePath:t,level:1})))}const Q={sidebar:"sidebar_njMd",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_wUlq",sidebarHidden:"sidebarHidden_VK0M",sidebarLogo:"sidebarLogo_isFc"};function $(e){var t=e.path,a=e.sidebar,l=e.onCollapse,o=e.isHidden,i=(0,g.L)(),c=i.navbar.hideOnScroll,d=i.docs.sidebar.hideable;return n.createElement("div",{className:(0,r.default)(Q.sidebar,c&&Q.sidebarWithHideableNavbar,o&&Q.sidebarHidden)},c&&n.createElement(k.Z,{tabIndex:-1,className:Q.sidebarLogo}),n.createElement(J,{path:t,sidebar:a}),d&&n.createElement(I,{onClick:l}))}const ee=n.memo($);var te=a(13102),ae=a(93163),ne=function(e){var t=e.sidebar,a=e.path,l=(0,ae.e)();return n.createElement("ul",{className:(0,r.default)(o.k.docs.docSidebarMenu,"menu__list")},n.createElement(O,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function re(e){return n.createElement(te.Zo,{component:ne,props:e})}const le=n.memo(re);function oe(e){var t=(0,E.i)(),a="desktop"===t||"ssr"===t,r="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ee,e),r&&n.createElement(le,e))}const ie={expandButton:"expandButton_m80_",expandButtonIcon:"expandButtonIcon_BlDH"};function ce(e){var t=e.toggleSidebar;return n.createElement("div",{className:ie.expandButton,title:(0,m.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:ie.expandButtonIcon}))}const de={docSidebarContainer:"docSidebarContainer_b6E3",docSidebarContainerHidden:"docSidebarContainerHidden_b3ry",sidebarViewport:"sidebarViewport_Xe31"};function se(e){var t,a=e.children,r=(0,s.V)();return n.createElement(n.Fragment,{key:null!=(t=null==r?void 0:r.name)?t:"noSidebar"},a)}function ue(e){var t=e.sidebar,a=e.hiddenSidebarContainer,l=e.setHiddenSidebarContainer,i=(0,v.TH)().pathname,c=(0,n.useState)(!1),d=c[0],s=c[1],u=(0,n.useCallback)((function(){d&&s(!1),l((function(e){return!e}))}),[l,d]);return n.createElement("aside",{className:(0,r.default)(o.k.docs.docSidebarContainer,de.docSidebarContainer,a&&de.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(de.docSidebarContainer)&&a&&s(!0)}},n.createElement(se,null,n.createElement("div",{className:(0,r.default)(de.sidebarViewport,d&&de.sidebarViewportHidden)},n.createElement(oe,{sidebar:t,path:i,onCollapse:u,isHidden:d}),d&&n.createElement(ce,{toggleSidebar:u}))))}const me={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function be(e){var t=e.hiddenSidebarContainer,a=e.children,l=(0,s.V)();return n.createElement("main",{className:(0,r.default)(me.docMainContainer,(t||!l)&&me.docMainContainerEnhanced)},n.createElement("div",{className:(0,r.default)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced)},a))}const pe={docPage:"docPage__5DB",docsWrapper:"docsWrapper_BCFX"};function fe(e){var t=e.children,a=(0,s.V)(),r=(0,n.useState)(!1),l=r[0],o=r[1];return n.createElement(u.Z,{wrapperClassName:pe.docsWrapper},n.createElement(h,null),n.createElement("div",{className:pe.docPage},a&&n.createElement(ue,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(be,{hiddenSidebarContainer:l},t)))}var he=a(4972),ve=a(90197);function Ee(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(ve.Z,{version:t.version,tag:(0,i.os)(t.pluginId,t.version)}),n.createElement(l.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(he.default,null);var i=a.docElement,u=a.sidebarName,m=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(Ee,e),n.createElement(l.FG,{className:(0,r.default)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.q,{version:t},n.createElement(s.b,{name:u,items:m},n.createElement(fe,null,i)))))}},4972:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(67294),r=a(95999),l=a(10833),o=a(12724);function i(){return n.createElement(n.Fragment,null,n.createElement(l.d,{title:(0,r.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(o.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},74477:(e,t,a)=>{a.d(t,{E:()=>i,q:()=>o});var n=a(67294),r=a(44700),l=n.createContext(null);function o(e){var t=e.children,a=e.version;return n.createElement(l.Provider,{value:a},t)}function i(){var e=(0,n.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);