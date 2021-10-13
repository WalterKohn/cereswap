(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[13],{1527:function(e,t,n){"use strict";n.r(t);var r=n(5),c=n(53),a=n(0),o=n.n(a),i=n(77),s=n(1),l=["component","hash"],u=["location"],b=function(e){var t=e.component,n=e.hash,a=Object(c.a)(e,l);return Object(s.jsx)(i.b,Object(r.a)(Object(r.a)({},a),{},{component:function(e){var a=e.location,o=Object(c.a)(e,u);return a.hash===n&&Object(s.jsx)(t,Object(r.a)({},o))}}))},j=o.a.memo(b),d=n(374),O=n(799),p=n(80),f=n(3),h=n.n(f),x=n(31),m=n(11),v=n(9),g=n(2),k=n(98),y=n(71),w=n(190),A=n(14),D=n(384),F=n(995),I=n(849),N=n(835),C=n(988),L=function(){var e=Object(i.i)().collectionAddress,t=Object(a.useState)([]),n=Object(v.a)(t,2),c=n[0],o=n[1],l=Object(a.useState)({orderDirection:"asc",orderBy:"currentAskPrice"}),u=Object(v.a)(l,2),b=u[0],j=u[1],d=Object(a.useState)(!1),p=Object(v.a)(d,2),f=p[0],L=p[1],B=Object(a.useState)(0),S=Object(v.a)(B,2),z=S[0],T=S[1],V=Object(A.b)().t,P=Object(O.e)(e),_=P.numberTokensListed,U=[{label:V("Lowest price"),value:{orderDirection:"asc",orderBy:"currentAskPrice"}},{label:V("Highest price"),value:{orderDirection:"desc",orderBy:"currentAskPrice"}},{label:V("Recently listed"),value:{orderDirection:"desc",orderBy:"updatedAt"}}];Object(a.useEffect)((function(){var t=function(){var t=Object(m.a)(h.a.mark((function t(n){var c,a,i;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.map((function(t){return Object(y.p)(e,t.tokenId)})),t.next=3,Promise.all(c);case 3:a=t.sent,i=a.map((function(t,c){return Object(r.a)(Object(r.a)({},t),{},{collectionAddress:e,collectionName:t.collection.name,marketData:n[c]})})),L(!1),o((function(e){var t=[].concat(Object(x.a)(e),Object(x.a)(i));return Object(k.uniqBy)(t,"tokenId")}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(){var n=Object(m.a)(h.a.mark((function n(){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(y.t)({collection:e.toLowerCase(),isTradable:!0},C.a,b.orderBy,b.orderDirection,z);case 2:r=n.sent,t(r);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();L(!0),n()}),[e,b,z]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(F.a,{collection:P}),Object(s.jsx)(w.b,{children:Object(s.jsxs)(g.o,{position:"relative",children:[Object(s.jsx)(g.bb,{alignItems:"center",justifyContent:["flex-start",null,null,"flex-end"],mb:"24px",children:Object(s.jsxs)(g.o,{minWidth:"165px",children:[Object(s.jsx)(g.zc,{fontSize:"12px",textTransform:"uppercase",color:"textSubtle",fontWeight:600,mb:"4px",children:V("Sort By")}),Object(s.jsx)(D.a,{options:U,onOptionChange:function(e){o([]);var t=e.value;j({orderDirection:t.orderDirection,orderBy:t.orderBy})}})]})}),c.length?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(g.cb,{gridGap:"16px",gridTemplateColumns:["1fr",null,"repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:c.map((function(e){var t=e.marketData&&parseFloat(e.marketData.currentAskPrice);return Object(s.jsx)(N.b,{nft:e,currentAskPrice:t>0?t:void 0},"".concat(e.tokenId,"-").concat(e.collectionName))}))})}):Object(s.jsx)(I.a,{}),Object(s.jsx)(g.bb,{mt:"60px",mb:"12px",justifyContent:"center",children:Number(_)>(null===c||void 0===c?void 0:c.length)&&Object(s.jsx)(g.t,{onClick:function(){T(z+C.a)},scale:"sm",endIcon:f?Object(s.jsx)(g.i,{spin:!0,color:"currentColor"}):void 0,children:V(f?"Loading":"Load more")})})]})})]})},B=Object(a.lazy)((function(){return n.e(11).then(n.bind(null,1566))})),S=Object(a.lazy)((function(){return n.e(12).then(n.bind(null,1572))})),z=Object(a.lazy)((function(){return Promise.all([n.e(3),n.e(2),n.e(21)]).then(n.bind(null,1563))}));t.default=function(){var e=Object(i.j)().path,t=Object(i.i)().collectionAddress,n=Object(O.e)(t),r=t.toLowerCase()===p.b.toLowerCase();return Object(O.b)(t),n?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{exact:!0,path:e,hash:"",component:r?B:L}),Object(s.jsx)(j,{exact:!0,path:e,hash:"#items",component:B}),Object(s.jsx)(j,{exact:!0,path:e,hash:"#onsale",component:L}),Object(s.jsx)(j,{exact:!0,path:e,hash:"#traits",component:S}),Object(s.jsx)(i.b,{path:"".concat(e,"/:tokenId"),children:Object(s.jsx)(z,{})})]}):Object(s.jsx)(d.a,{})}},867:function(e,t,n){"use strict";var r,c,a,o=n(3),i=n.n(o),s=n(11),l=n(5),u=n(9),b=n(53),j=n(8),d=n(0),O=n(2),p=n(6),f=n(38),h=n(14),x=n(197),m=n(1),v=["onValidAddress","onAddressClick"];!function(e){e[e.NOT_VALID=0]="NOT_VALID",e[e.FOUND=1]="FOUND",e[e.NOT_FOUND=2]="NOT_FOUND"}(a||(a={}));var g=p.e.div(r||(r=Object(j.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: 0 0 "," ",";\n  left: 0;\n  padding-bottom: 8px;\n  padding-top: 16px;\n  position: absolute;\n  top: calc(100% - 12px);\n  transition: transform 0.15s, opacity 0.15s;\n  transform: scaleY(0);\n  transform-origin: top;\n  width: 100%;\n  z-index: 15;\n\n  ","\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.inputSecondary}),(function(e){return e.theme.radii.default}),(function(e){return e.theme.radii.default}),(function(e){return e.isOpen&&"\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  "})),k=Object(p.e)(O.zc)(c||(c=Object(j.a)(["\n  cursor: pointer;\n  overflow-wrap: break-word;\n  font-weight: bold;\n  padding-left: 16px;\n  padding-right: 16px;\n"]))),y={isFetching:!1,resultFound:a.NOT_VALID,value:""},w=function(){return Promise.resolve(!0)};t.a=function(e){var t=e.onValidAddress,n=void 0===t?w:t,r=e.onAddressClick,c=Object(b.a)(e,v),o=Object(d.useState)(y),j=Object(u.a)(o,2),p=j[0],A=j[1],D=Object(h.b)().t,F=p.isFetching,I=p.resultFound,N=p.value;return Object(d.useEffect)((function(){!1!==Object(f.i)(N)?function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!0})})),e.next=4,n(N);case 4:t=e.sent,A((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1,resultFound:t?a.FOUND:a.NOT_FOUND})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),A((function(e){return Object(l.a)(Object(l.a)({},e),{},{isFetching:!1})}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()():A((function(e){return Object(l.a)(Object(l.a)({},e),{},{resultFound:a.NOT_VALID})}))}),[N,n,A]),Object(m.jsxs)(O.o,Object(l.a)(Object(l.a)({position:"relative"},c),{},{children:[Object(m.jsx)(O.kb,{placeholder:D("Search %subject%",{subject:D("Address").toLowerCase()}),value:p.value,onChange:function(e){var t=e.target.value;A((function(e){return Object(l.a)(Object(l.a)({},e),{},{value:t})}))},style:{position:"relative",zIndex:16,paddingRight:"40px"}}),F&&Object(m.jsx)(O.o,{position:"absolute",top:"12px",right:"16px",style:{zIndex:17},children:Object(m.jsx)(x.a,{})}),Object(m.jsx)(g,{isOpen:I!==a.NOT_VALID,children:I===a.FOUND?Object(m.jsx)(k,{onClick:function(){A(y),r(p.value)},children:p.value}):Object(m.jsx)(O.zc,{px:"16px",fontWeight:"bold",children:D("No results found.")})})]}))}},891:function(e,t,n){"use strict";var r=n(5),c=(n(0),n(377)),a=n(97),o=n(1);t.a=function(e){var t=Object(a.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(o.jsx)(c.a,Object(r.a)({background:t},e))}},917:function(e,t,n){"use strict";var r,c=n(8),a=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(r||(r=Object(c.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(e){return e.src}),(function(e){return e.borderColor||"#f2ecf2"}));t.a=a},918:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r,c=n(8),a=n(5),o=n(53),i=(n(0),n(6)),s=n(2),l=n(1),u=["title","stat"],b=function(e){var t=e.title,n=e.stat,r=Object(o.a)(e,u);return Object(l.jsxs)(s.o,Object(a.a)(Object(a.a)({},r),{},{children:[Object(l.jsx)(s.zc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:t}),null===n?Object(l.jsx)(s.fc,{height:"24px",width:"50%",mx:"auto"}):Object(l.jsx)(s.zc,{fontWeight:"600",textAlign:"center",children:n})]}))},j=Object(i.e)(s.bb)(r||(r=Object(c.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.invertedContrast}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.radii.card}));t.b=j},982:function(e,t,n){"use strict";var r=n(5),c=(n(0),n(77)),a=n(867),o=n(80),i=n(1);t.a=function(e){var t=Object(c.g)();return Object(i.jsx)(a.a,Object(r.a)({onAddressClick:function(e){t.push("".concat(o.a,"/profile/").concat(e))}},e))}},984:function(e,t,n){"use strict";var r=n(5),c=n(53),a=(n(0),n(2)),o=n(1),i=["title","description","children"];t.a=function(e){var t=e.title,n=e.description,s=e.children,l=Object(c.a)(e,i);return Object(o.jsxs)(a.cb,Object(r.a)(Object(r.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},l),{},{children:[Object(o.jsxs)(a.o,{children:[Object(o.jsx)(a.db,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:t}),n]}),Object(o.jsx)(a.o,{children:s})]}))}},986:function(e,t,n){"use strict";var r,c=n(8),a=n(2),o=n(6),i=Object(o.e)(a.pc)(r||(r=Object(c.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(e){return e.theme.colors.cardBorder}));t.a=i},988:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=100},995:function(e,t,n){"use strict";var r,c=n(0),a=n(77),o=n(2),i=n(32),s=n(14),l=n(246),u=n(891),b=n(984),j=n(918),d=n(998),O=n(917),p=n(986),f=n(80),h=n(8),x=n(94),m=n(6),v=n(982),g=n(1),k=Object(m.e)(x.a)(r||(r=Object(h.a)(["\n  align-items: center;\n  color: ",";\n  display: inline-flex;\n  font-weight: 600;\n"])),(function(e){return e.theme.colors.primary})),y=function(){var e=Object(s.b)().t;return Object(g.jsxs)(o.bb,{alignItems:"center",justifyContent:"space-between",mb:"24px",children:[Object(g.jsxs)(k,{to:f.a,children:[Object(g.jsx)(o.L,{color:"primary",width:"24px"}),e("All Collections")]}),Object(g.jsx)(o.o,{children:Object(g.jsx)(v.a,{})})]})},w=n(5),A=n(3),D=n.n(A),F=n(11),I=n(9),N=n(53),C=n(71),L=["collectionAddress"],B=function(e){var t=e.collectionAddress,n=Object(N.a)(e,L),r=Object(c.useState)(null),a=Object(I.a)(r,2),o=a[0],i=a[1],l=Object(s.b)().t;Object(c.useEffect)((function(){(function(){var e=Object(F.a)(D.a.mark((function e(){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(C.m)(t);case 2:n=e.sent,i(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t,i]);var u=null===o?null:o.toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3});return Object(g.jsx)(j.a,Object(w.a)({title:l("Lowest (%symbol%)",{symbol:"BNB"}),stat:u},n))};t.a=function(e){var t=e.collection,n=Object(a.i)().collectionAddress,r=t.totalSupply,c=t.numberTokensListed,h=t.totalVolumeBNB,x=t.banner,m=t.avatar,v=Object(s.b)().t,k=Object(a.h)(),w=k.pathname,A=k.hash,D=n.toLowerCase()===f.b.toLowerCase(),F=D?"#items":"#onsale",I=h?parseFloat(h).toLocaleString(void 0,{minimumFractionDigits:3,maximumFractionDigits:3}):"0",N={label:v("On sale"),href:"".concat(f.a,"/collections/").concat(n,"#onsale")},C=[{label:v("Items"),href:"".concat(f.a,"/collections/").concat(n,"#items")},{label:v("Traits"),href:"".concat(f.a,"/collections/").concat(n,"#traits")}];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)(u.a,{children:[Object(g.jsx)(y,{}),Object(g.jsx)(d.a,{bannerImage:x.large,avatar:Object(g.jsx)(O.a,{src:m})}),Object(g.jsx)(b.a,{title:t.name,description:t.description?Object(g.jsx)(o.zc,{color:"textSubtle",children:v(t.description)}):null,children:Object(g.jsxs)(j.b,{children:[Object(g.jsx)(j.a,{title:v("Items"),stat:Object(i.e)(Number(r),0,0)}),Object(g.jsx)(j.a,{title:v("Items listed"),stat:c?Object(i.e)(Number(c),0,0):"0"}),Object(g.jsx)(B,{collectionAddress:t.address}),Object(g.jsx)(j.a,{title:v("Vol. (%symbol%)",{symbol:"BNB"}),stat:I})]})})]}),Object(g.jsx)(l.a,{children:Object(g.jsx)(p.a,{items:D?C:[N].concat(C),activeItem:"".concat(w).concat(A||F),mt:"24px",mb:"8px"})})]})}},998:function(e,t,n){"use strict";var r,c=n(5),a=n(53),o=(n(0),n(2)),i=n(8),s=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(r||(r=Object(i.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(e){var t=e.src,n=e.theme;return t?"background-image: url('".concat(t,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(e){return e.src}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),l=n(1),u=["bannerImage","bannerAlt","avatar","children"];t.a=function(e){var t=e.bannerImage,n=e.bannerAlt,r=e.avatar,i=e.children,b=Object(a.a)(e,u);return Object(l.jsx)(o.bb,Object(c.a)(Object(c.a)({flexDirection:"column",mb:"24px"},b),{},{children:Object(l.jsxs)(o.o,{position:"relative",pb:"56px",children:[Object(l.jsx)(s,{src:t,alt:n}),Object(l.jsx)(o.o,{position:"absolute",bottom:0,left:-4,children:Object(l.jsxs)(o.bb,{alignItems:"flex-end",children:[r,i]})})]})}))}}}]);
//# sourceMappingURL=13.bee31ecb.chunk.js.map