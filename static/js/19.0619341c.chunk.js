(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[19],{1522:function(e,t,n){"use strict";n.r(t);var c,r,i,a,s,o,l,b,j,d,u,x,O,h,f=n(0),p=n(44),m=n(77),v=n(38),g=n(2),y=n(190),k=n(14),S=n(8),I=n(6),w=n(245),C=n(799),A=n(80),z=n(28),D=n(73),F=n(395),E=n(858),P=n(891),L=n(9),B=n(94),N=n(32),T=n(159),W=n(917),Q=n(893),U=n(1),Y=I.e.div(c||(c=Object(S.a)(["\n  background: rgba(0, 0, 0, 0.6) url('/images/camera.svg') no-repeat center center;\n  border-radius: 50%;\n  left: 0;\n  height: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  transition: opacity 300ms;\n  width: 100%;\n  z-index: 1;\n"]))),H=I.e.div(r||(r=Object(S.a)(["\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n\n    "," {\n      opacity: 1;\n    }\n  }\n"])),Y),M=function(e){var t=e.src,n=e.alt,c=Object(g.dd)(Object(U.jsx)(Q.a,{}),!1),r=Object(L.a)(c,1)[0];return Object(U.jsxs)(H,{onClick:r,children:[Object(U.jsx)(W.a,{src:t,alt:n}),Object(U.jsx)(Y,{})]})},$=n(998),G=n(918),R=n(984),X=Object(I.e)(g.gb)(i||(i=Object(S.a)(["\n  width: fit-content;\n"]))),Z=function(e){var t,n,c=e.accountPath,r=e.profile,i=e.achievements,a=e.nftCollected,s=Object(k.b)().t,o=Object(p.c)().account,l=Object(g.dd)(Object(U.jsx)(Q.a,{}),!1),b=Object(L.a)(l,1)[0],j=(null===o||void 0===o?void 0:o.toLowerCase())===(null===c||void 0===c?void 0:c.toLowerCase()),d=a?Object(N.e)(a,0,0):"-",u=(null===r||void 0===r?void 0:r.points)?Object(N.e)(r.points,0,0):"-",x=(null===i||void 0===i?void 0:i.length)?Object(N.e)(i.length,0,0):"-",O=(null===r||void 0===r||null===(t=r.nft)||void 0===t||null===(n=t.image)||void 0===n?void 0:n.thumbnail)||"/images/nfts/no-profile-md.png";return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)($.a,{bannerImage:function(){var e="/images/teams";if(r)switch(r.teamId){case 1:return"".concat(e,"/storm-banner.png");case 2:return"".concat(e,"/flippers-banner.png");case 3:return"".concat(e,"/cakers-banner.png")}return"".concat(e,"/no-team-banner.png")}(),bannerAlt:s("User team banner"),avatar:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(U.Fragment,{children:r&&c&&j?Object(U.jsx)(M,{src:O,alt:s("User profile picture")}):Object(U.jsx)(W.a,{src:O,alt:s("User profile picture")})}),Object(U.jsx)(g.bb,{display:"inline-flex",children:c&&Object(U.jsx)(X,{target:"_blank",as:"a",href:Object(v.e)(c,"address"),alt:s("View BscScan for user address"),children:Object(U.jsx)(g.q,{width:"20px",color:"primary"})})})]})}),Object(U.jsx)(R.a,{pb:"48px",title:(null===r||void 0===r?void 0:r.username)?"@".concat(r.username):c?Object(T.a)(c,5,3):null,description:Object(U.jsxs)(g.bb,{flexDirection:"column",mb:[16,null,0],mr:[0,null,16],children:[c&&(null===r||void 0===r?void 0:r.username)&&Object(U.jsx)(g.pb,{href:Object(v.e)(c,"address"),external:!0,bold:!0,color:"primary",children:Object(T.a)(c)}),c&&j&&(!r||!(null===r||void 0===r?void 0:r.nft))&&(r?Object(U.jsx)(g.t,{width:"fit-content",mt:"16px",onClick:b,children:s("Reactivate Profile")}):Object(U.jsx)(B.a,{to:"/create-profile",children:Object(U.jsx)(g.t,{mt:"16px",children:s("Activate Profile")})}))]}),children:Object(U.jsxs)(G.b,{children:[Object(U.jsx)(G.a,{title:s("NFT Collected"),stat:d}),Object(U.jsx)(G.a,{title:s("Points"),stat:u}),Object(U.jsx)(G.a,{title:s("Achievements"),stat:x})]})})]})},q=I.e.button(a||(a=Object(S.a)(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  color: ",";\n  border-width: ",";\n  border-style: solid solid none solid;\n  border-color: ",";\n  outline: 0;\n  padding: 12px 16px;\n  border-radius: 16px 16px 0 0;\n  font-size: 16px;\n  font-weight: ",";\n  background-color: ",";\n  transition: background-color 0.3s ease-out;\n"])),(function(e){var t=e.theme;return e.$active?t.colors.secondary:t.colors.textSubtle}),(function(e){return e.$active?"1px 1px 0 1px":"0"}),(function(e){var t=e.theme;return"".concat(t.colors.cardBorder," ").concat(t.colors.cardBorder," transparent ").concat(t.colors.cardBorder)}),(function(e){return e.$active?"600":"400"}),(function(e){var t=e.theme;return e.$active?t.colors.background:"transparent"})),J=function(){var e=Object(k.b)().t,t=Object(m.i)().accountAddress,n=Object(m.h)().pathname,c=Object(f.useState)(n.includes("achievements")),r=Object(L.a)(c,2),i=r[0],a=r[1];return Object(f.useEffect)((function(){a(n.includes("achievements"))}),[n]),Object(U.jsxs)(g.bb,{children:[Object(U.jsx)(q,{onClick:function(){return a(!1)},$active:!i,as:B.a,to:"".concat(A.a,"/profile/").concat(t),children:"NFTs"}),Object(U.jsx)(q,{onClick:function(){return a(!0)},$active:i,as:B.a,to:"".concat(A.a,"/profile/").concat(t,"/achievements"),children:e("Achievements")})]})},V=n(926),_=n(5),K=n(53),ee=["badge"],te=Object(I.e)(g.s)(s||(s=Object(S.a)(["\n  height: 48px;\n  width: 48px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),ne=I.e.img(o||(o=Object(S.a)(["\n  height: 48px;\n  width: 48px;\n\n  "," {\n    height: 64px;\n    width: 64px;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),ce=function(e){var t=e.badge,n=Object(K.a)(e,ee);return t?Object(U.jsx)(ne,Object(_.a)({src:"/images/achievements/".concat(t),alt:"achievement badge"},n)):Object(U.jsx)(te,{})},re=["title"],ie=function(e){var t=e.title,n=Object(K.a)(e,re),c=Object(k.b)().t;if("string"===typeof t)return Object(U.jsx)(g.zc,Object(_.a)(Object(_.a)({bold:!0},n),{},{children:t}));var r=t.key,i=t.data,a=void 0===i?{}:i;return Object(U.jsx)(g.zc,Object(_.a)(Object(_.a)({bold:!0},n),{},{children:c(r,a)}))},ae=["description"],se=Object(I.e)(g.zc).attrs({as:"p",fontSize:"14px"})(l||(l=Object(S.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),oe=function(e){var t=e.description,n=Object(K.a)(e,ae),c=Object(k.b)().t;if(!t)return null;if("string"===typeof t)return Object(U.jsx)(g.zc,Object(_.a)(Object(_.a)({as:"p",color:"textSubtle",fontSize:"14px"},n),{},{children:t}));var r=t.key,i=t.data,a=void 0===i?{}:i;return Object(U.jsx)(se,Object(_.a)(Object(_.a)({color:"textSubtle"},n),{},{children:c(r,a)}))},le=Object(I.e)(g.bb)(b||(b=Object(S.a)(["\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  padding-left: 8px;\n  padding-right: 8px;\n"]))),be=function(e){var t=e.achievement;return Object(U.jsxs)(g.bb,{children:[Object(U.jsx)(ce,{badge:t.badge}),Object(U.jsxs)(le,{children:[Object(U.jsx)(ie,{title:t.title}),Object(U.jsx)(oe,{description:t.description})]}),Object(U.jsxs)(g.bb,{alignItems:"center",children:[Object(U.jsx)(g.Wb,{width:"18px",color:"textSubtle",mr:"4px"}),Object(U.jsx)(g.zc,{color:"textSubtle",children:t.points.toLocaleString()})]})]})},je=I.e.div(j||(j=Object(S.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n\n  "," {\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),de=function(e){var t=e.achievements,n=Object(k.b)().t;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(je,{children:t.map((function(e){return Object(U.jsx)(be,{achievement:e},e.id)}))}),0===t.length&&Object(U.jsx)(g.bb,{alignItems:"center",justifyContent:"center",style:{height:"64px"},children:Object(U.jsx)(g.db,{as:"h5",scale:"md",color:"textDisabled",children:n("No achievements yet!")})})]})},ue=n(3),xe=n.n(ue),Oe=n(11),he=n(98),fe=n(125),pe=n(349),me=n(100),ve=n(45),ge=n(132),ye=n(104),ke=["points"],Se=function(e){var t=e.points,n=Object(K.a)(e,ke),c=Object(k.b)().t,r=t.toLocaleString();return Object(U.jsxs)(g.bb,Object(_.a)(Object(_.a)({alignItems:"center"},n),{},{children:[Object(U.jsx)(g.Wb,{mr:"4px",color:"textSubtle"}),Object(U.jsx)(g.zc,{color:"textSubtle",children:c("%num% points",{num:r})})]}))},Ie=I.e.div(d||(d=Object(S.a)(["\n  flex: none;\n  width: 100%;\n\n  "," {\n    max-width: 160px;\n\n    & > button {\n      width: 100%;\n    }\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),we=Object(I.e)(g.bb)(u||(u=Object(S.a)(["\n  border-bottom: 1px solid ",";\n  padding-bottom: 16px;\n  padding-top: 16px;\n"])),(function(e){return e.theme.colors.cardBorder})),Ce=I.e.div(x||(x=Object(S.a)(["\n  flex: 1;\n"]))),Ae=Object(I.e)(g.bb)(O||(O=Object(S.a)(["\n  flex-direction: column;\n  flex: 1;\n  margin-left: 8px;\n\n  "," {\n    align-items: center;\n    flex-direction: row;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),ze=function(e){var t=e.achievement,n=e.onCollectSuccess,c=Object(f.useState)(!1),r=Object(L.a)(c,2),i=r[0],a=r[1],s=Object(k.b)().t,o=Object(ve.s)(),l=Object(me.a)(),b=l.toastError,j=l.toastSuccess,d=Object(ge.a)().callWithGasPrice,u=function(){var e=Object(Oe.a)(xe.a.mark((function e(){var c,r;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(o,"getPoints",[t.address]);case 2:return c=e.sent,a(!0),e.next=6,c.wait();case 6:(r=e.sent).status?(a(!1),n(t),j(s("Points Collected!"),Object(U.jsx)(ye.b,{txHash:r.transactionHash}))):(b(s("Error"),s("Please try again. Confirm the transaction and make sure you are paying enough gas!")),a(!1));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(U.jsxs)(we,{children:[Object(U.jsx)(ce,{badge:t.badge}),Object(U.jsxs)(Ae,{children:[Object(U.jsxs)(Ce,{children:[Object(U.jsx)(ie,{title:t.title}),Object(U.jsx)(oe,{description:t.description})]}),Object(U.jsx)(Se,{points:t.points,px:[0,null,null,"32px"],mb:["16px",null,null,0]}),Object(U.jsx)(Ie,{children:Object(U.jsx)(g.t,{onClick:u,isLoading:i,endIcon:i?Object(U.jsx)(g.i,{spin:!0,color:"currentColor"}):null,disabled:i,variant:"secondary",children:s("Collect")})})]})]})},De=function(){var e=Object(f.useState)([]),t=Object(L.a)(e,2),n=t[0],c=t[1],r=Object(k.b)().t,i=Object(D.b)(),a=Object(w.d)().profile,s=Object(p.c)().account;Object(f.useEffect)((function(){s&&function(){var e=Object(Oe.a)(xe.a.mark((function e(){var t;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(pe.c)(s);case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s,i,c]);var o=function(e){i(Object(F.a)(e)),i(Object(fe.a)(e.points)),c((function(t){return t.filter((function(t){return t.id!==e.id}))}))};if(!(null===a||void 0===a?void 0:a.isActive))return null;if(0===n.length)return null;var l=Object(he.sumBy)(n,"points");return Object(U.jsxs)(g.y,{isActive:!0,mb:"32px",children:[Object(U.jsx)(g.B,{children:Object(U.jsx)(g.bb,{flexDirection:["column",null,"row"],justifyContent:["start",null,"space-between"],children:Object(U.jsxs)(g.bb,{alignItems:"center",mb:["16px",null,0],children:[Object(U.jsx)(g.Wb,{width:"32px",mr:"8px"}),Object(U.jsx)(g.db,{scale:"lg",children:r("%num% Points to Collect",{num:l})})]})})}),Object(U.jsx)(g.z,{children:n.map((function(e){return Object(U.jsx)(ze,{achievement:e,onCollectSuccess:o},e.address)}))})]})},Fe=function(e){var t=e.achievements,n=e.points,c=void 0===n?0:n,r=Object(k.b)().t;return Object(U.jsx)(g.y,{children:Object(U.jsxs)(g.z,{children:[Object(U.jsx)(V.a,{icon:g.Wb,title:c,subtitle:r("Points"),mb:"24px"}),Object(U.jsx)(g.db,{as:"h4",scale:"md",mb:"16px",children:r("Achievements")}),Object(U.jsx)(De,{}),Object(U.jsx)(de,{achievements:t})]})})},Ee=n(71),Pe=n(81),Le=n(372),Be=n(97),Ne=n(371),Te=function(e){var t=Object(D.b)();Object(f.useEffect)((function(){e&&t(Object(Ne.g)(e))}),[t,e])},We=n(31),Qe=n(55);!function(e){e.NEW="NEW",e.CANCEL="CANCEL",e.MODIFY="MODIFY",e.BUY="BUY",e.SELL="SELL"}(h||(h={}));var Ue,Ye,He,Me,$e,Ge,Re=function(e){var t=Object(f.useState)([]),n=Object(L.a)(t,2),c=n[0],r=n[1],i=Object(C.l)().activity,a=i.askOrderHistory,s=i.buyTradeHistory,o=i.sellTradeHistory,l=i.initializationState;return Object(f.useEffect)((function(){var t=function(t){return t.map((function(t){var n=t.seller.id===e.toLowerCase(),c=n?h.SELL:h.BUY,r=t.timestamp,i=t.nft;return{marketEvent:c,price:t.askPrice,otherParty:n?t.buyer.id:t.seller.id,timestamp:r,nft:i,tx:t.id}}))},n=[].concat(Object(We.a)(a.map((function(e){var t=function(e){switch(e){case Pe.a.CANCEL:return h.CANCEL;case Pe.a.MODIFY:return h.MODIFY;case Pe.a.NEW:return h.NEW;default:return h.MODIFY}}(e.orderType),n=e.timestamp,c=e.nft;return{marketEvent:t,price:e.askPrice,timestamp:n,nft:c,tx:e.id}}))),Object(We.a)(t(s)),Object(We.a)(t(o)));if(n.length>0){var c=n.sort((function(e,t){var n=Qe.a.BigNumber.from(e.timestamp);return Qe.a.BigNumber.from(t.timestamp).sub(n).toNumber()}));r(c)}return function(){r([])}}),[e,a,s,o]),{sortedUserActivities:c,initializationState:l}},Xe=n(22),Ze=n(985),qe=n(18),Je=["marketEvent"],Ve=function(e){var t,n=e.marketEvent,c=Object(K.a)(e,Je),r=Object(k.b)().t,i=(t={},Object(qe.a)(t,h.NEW,{text:r("Listed"),color:"textSubtle"}),Object(qe.a)(t,h.CANCEL,{text:r("Delisted"),color:"textSubtle"}),Object(qe.a)(t,h.MODIFY,{text:r("Modified"),color:"textSubtle"}),Object(qe.a)(t,h.BUY,{text:r("Bought"),color:"success"}),Object(qe.a)(t,h.SELL,{text:r("Sold"),color:"failure"}),t);return Object(U.jsx)(g.zc,Object(_.a)(Object(_.a)({},c),{},{color:i[n].color,children:i[n].text}))},_e=n(90),Ke=function(e){var t=e.bnbBusdPrice,n=e.price,c=Object(_e.d)(t,n);return Object(U.jsx)(g.bb,{flexDirection:"column",alignItems:"flex-end",children:n?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(g.bb,{justifySelf:"flex-start",alignItems:"center",children:[Object(U.jsx)(g.l,{width:"12px",height:"12px",mr:"4px"}),Object(U.jsx)(g.zc,{maxWidth:"80px",bold:!0,children:n.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:5})})]}),Object(U.jsx)(g.zc,{fontSize:"12px",color:"textSubtle",children:"(~$".concat(c.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")})]}):"-"})},et=n(120),tt=Object(I.e)(g.hb)(Ue||(Ue=Object(S.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default})),nt=function(e){var t=e.nft,n=e.activity,c=e.bnbBusdPrice,r=e.localeTimestamp,i=e.onDismiss,a=Object(Xe.a)().chainId,s=Object(k.b)().t,o=Object(Be.a)().theme,l=parseFloat(n.price),b=Object(_e.d)(c,l);return Object(U.jsx)(g.Db,{title:s("Transaction Details"),onDismiss:i,headerBackground:o.colors.gradients.cardHeader,children:Object(U.jsxs)(g.bb,{flexDirection:"column",maxWidth:"350px",children:[Object(U.jsxs)(g.bb,{alignItems:"center",mb:"16px",children:[Object(U.jsx)(tt,{src:t.image.thumbnail,height:68,width:68,mr:"16px"}),Object(U.jsxs)(g.bb,{flexDirection:"column",children:[Object(U.jsx)(g.zc,{fontSize:"12px",color:"textSubtle",textAlign:"right",children:t.collectionName}),Object(U.jsx)(g.zc,{bold:!0,children:t.name})]})]}),Object(U.jsxs)(et.c,{p:"16px",children:[Object(U.jsxs)(g.bb,{mb:"24px",justifyContent:"space-between",children:[Object(U.jsx)(Ve,{fontSize:"14px",marketEvent:n.marketEvent}),l?Object(U.jsxs)(g.bb,{justifyContent:"flex-end",alignItems:"center",children:[Object(U.jsx)(g.l,{width:"12px",height:"12px",mr:"4px"}),Object(U.jsx)(g.zc,{mr:"4px",bold:!0,children:l}),Object(U.jsx)(g.zc,{color:"textSubtle",children:"(~$".concat(b.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}))})]}):"-"]}),Object(U.jsxs)(g.bb,{mb:"24px",justifyContent:"space-between",children:[Object(U.jsx)(g.zc,{fontSize:"14px",color:"textSubtle",children:s("From/To")}),Object(U.jsx)(g.zc,{children:n.otherParty?Object(T.a)(n.otherParty):"-"})]}),Object(U.jsxs)(g.bb,{justifyContent:"space-between",children:[Object(U.jsx)(g.zc,{fontSize:"14px",color:"textSubtle",children:s("Date")}),Object(U.jsx)(g.zc,{children:r})]})]}),Object(U.jsx)(g.bb,{flexDirection:"column",pt:"16px",alignItems:"center",children:Object(U.jsx)(g.t,{as:g.pb,external:!0,href:Object(v.e)(n.tx,"transaction",a),children:s("View on BscScan")})})]})})},ct=Object(I.e)(g.hb)(Ye||(Ye=Object(S.a)(["\n  & > img {\n    border-radius: ",";\n  }\n"])),(function(e){return e.theme.radii.default})),rt=function(e){var t=e.activity,n=e.bnbBusdPrice,c=e.nft,r=Object(Xe.a)().chainId,i=Object(g.cd)(),a=i.isXs,s=i.isSm,o=parseFloat(t.price),l=1e3*parseFloat(t.timestamp),b=new Date(l).toLocaleString(void 0,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}),j=Object(g.dd)(Object(U.jsx)(nt,{nft:c,activity:t,localeTimestamp:b,bnbBusdPrice:n})),d=Object(L.a)(j,1)[0];return Object(U.jsxs)("tr",Object(_.a)(Object(_.a)({},(a||s)&&{onClick:d}),{},{children:[Object(U.jsx)(g.xc,{children:Object(U.jsxs)(g.bb,{justifyContent:"flex-start",alignItems:"center",flexDirection:["column",null,"row"],children:[Object(U.jsx)(ct,{src:null===c||void 0===c?void 0:c.image.thumbnail,alt:null===c||void 0===c?void 0:c.name,width:64,height:64,mr:[0,null,"16px"],mb:["8px",null,0]}),Object(U.jsxs)(g.bb,{flexDirection:"column",children:[Object(U.jsx)(g.zc,{textAlign:["center",null,"left"],color:"textSubtle",fontSize:"14px",children:null===c||void 0===c?void 0:c.collectionName}),Object(U.jsx)(g.zc,{textAlign:["center",null,"left"],bold:!0,children:null===c||void 0===c?void 0:c.name})]})]})}),Object(U.jsxs)(g.xc,{children:[Object(U.jsx)(g.bb,{alignItems:"center",justifyContent:"flex-end",children:Object(U.jsx)(Ve,{marketEvent:t.marketEvent})}),a||s?Object(U.jsx)(Ke,{price:o,bnbBusdPrice:n}):null]}),a||s?null:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(g.xc,{children:Object(U.jsx)(Ke,{price:o,bnbBusdPrice:n})}),Object(U.jsx)(g.xc,{children:Object(U.jsx)(g.bb,{justifyContent:"flex-end",alignItems:"center",children:t.otherParty?Object(U.jsx)(Ze.a,{accountAddress:t.otherParty}):"-"})})]}),Object(U.jsx)(g.xc,{children:Object(U.jsx)(g.bb,{justifyContent:"center",children:Object(U.jsx)(g.zc,{textAlign:"center",fontSize:a||s?"12px":"16px",children:b})})}),a||s?null:Object(U.jsx)(g.xc,{children:Object(U.jsx)(g.gb,{as:g.pb,external:!0,href:Object(v.e)(t.tx,"transaction",r),children:Object(U.jsx)(g.Ob,{color:"textSubtle",width:"18px"})})})]}))},it=Object(I.e)(g.bb)(He||(He=Object(S.a)(["\n  align-items: center;\n"]))),at=function(){var e=Object(g.cd)(),t=e.isXs,n=e.isSm;return Object(U.jsxs)("tr",{children:[Object(U.jsx)(g.xc,{children:Object(U.jsx)(it,{children:Object(U.jsx)(g.fc,{height:[162,null,64],width:[80,null,200]})})}),Object(U.jsx)(g.xc,{children:Object(U.jsx)(it,{justifyContent:"flex-end",children:Object(U.jsx)(g.fc,{height:[66,null,24],width:64})})}),t||n?null:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(g.xc,{children:Object(U.jsx)(it,{justifyContent:"flex-end",children:Object(U.jsx)(g.fc,{height:42,width:64})})}),Object(U.jsx)(g.xc,{children:Object(U.jsx)(it,{justifyContent:"flex-end",children:Object(U.jsx)(g.fc,{height:48,width:124})})})]}),Object(U.jsx)(g.xc,{children:Object(U.jsx)(it,{justifyContent:"center",children:Object(U.jsx)(g.fc,{height:[36,null,24],width:[80,null,120]})})})]})},st=function(){return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(at,{}),Object(U.jsx)(at,{}),Object(U.jsx)(at,{}),Object(U.jsx)(at,{}),Object(U.jsx)(at,{}),Object(U.jsx)(at,{}),Object(U.jsx)(at,{}),Object(U.jsx)(at,{})]})},ot=I.e.div(Me||(Me=Object(S.a)(["\n  background: url('/images/nfts/no-profile-md.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n\n  & > img {\n    border-radius: 50%;\n  }\n"]))),lt=n(1130),bt=function(){var e=Object(m.i)().accountAddress,t=Object(Be.a)().theme,n=Object(k.b)().t,c=Object(f.useState)(1),r=Object(L.a)(c,2),i=r[0],a=r[1],s=Object(f.useState)(1),o=Object(L.a)(s,2),l=o[0],b=o[1],j=Object(f.useState)([]),d=Object(L.a)(j,2),u=d[0],x=d[1],O=Object(f.useState)([]),h=Object(L.a)(O,2),p=h[0],v=h[1],y=Re(e),S=y.sortedUserActivities,I=y.initializationState,w=Object(Le.a)(),C=Object(g.cd)(),A=C.isXs,z=C.isSm;return Te(e),Object(f.useEffect)((function(){var e=function(){var e=Object(Oe.a)(xe.a.mark((function e(){var t,n;return xe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(he.uniqBy)(S.map((function(e){return{tokenId:e.nft.tokenId,collectionAddress:e.nft.collection.id}})),"tokenId"),e.next=3,Object(Ee.s)(t);case 3:n=e.sent,v(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return S.length>0&&(!function(){var e=Math.ceil(S.length/8);b(e)}(),e()),function(){x([]),v([]),b(1),a(1)}}),[S]),Object(f.useEffect)((function(){S.length>0&&function(){var e=S.slice(8*(i-1),8*i);x(e)}()}),[S,i]),Object(U.jsx)(g.y,{children:0===S.length&&0===p.length&&0===u.length&&I===Pe.e.INITIALIZED?Object(U.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(U.jsx)(ot,{}),Object(U.jsx)(g.zc,{pt:"8px",bold:!0,children:n("No NFT market history found")})]}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(g.vc,{children:[Object(U.jsx)("thead",{children:Object(U.jsxs)("tr",{children:[Object(U.jsxs)(g.Bc,{textAlign:["center",null,"left"],children:[" ",n("Item")]}),Object(U.jsxs)(g.Bc,{textAlign:"right",children:[" ",n("Event")]}),A||z?null:Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(g.Bc,{textAlign:"right",children:[" ",n("Price")]}),Object(U.jsxs)(g.Bc,{textAlign:"right",children:[" ",n("From/To")]})]}),Object(U.jsxs)(g.Bc,{textAlign:"center",children:[" ",n("Date")]}),A||z?null:Object(U.jsx)(g.Bc,{})]})}),Object(U.jsx)("tbody",{children:I===Pe.e.INITIALIZING?Object(U.jsx)(st,{}):u.map((function(e){var t=p.find((function(t){return t.tokenId===e.nft.tokenId}));return Object(U.jsx)(rt,{activity:e,nft:t,bnbBusdPrice:w},"".concat(e.nft.tokenId).concat(e.timestamp))}))})]}),Object(U.jsx)(g.bb,{borderTop:"1px ".concat(t.colors.cardBorder," solid"),pt:"24px",flexDirection:"column",justifyContent:"space-between",height:"100%",children:Object(U.jsxs)(lt.b,{children:[Object(U.jsx)(lt.a,{onClick:function(){a(1===i?i:i-1)},children:Object(U.jsx)(g.c,{color:1===i?"textDisabled":"primary"})}),Object(U.jsx)(g.zc,{children:n("Page %page% of %maxPage%",{page:i,maxPage:l})}),Object(U.jsx)(lt.a,{onClick:function(){a(i===l?i:i+1)},children:Object(U.jsx)(g.f,{color:i===l?"textDisabled":"primary"})})]})})]})})},jt=n(986),dt=function(){var e=Object(k.b)().t,t=Object(m.i)().accountAddress,n=Object(m.h)().pathname,c=[{label:e("Items"),href:"".concat(A.a,"/profile/").concat(t)},{label:e("Activity"),href:"".concat(A.a,"/profile/").concat(t,"/activity")}];return Object(U.jsx)(jt.a,{items:c,activeItem:n,justifyContent:"flex-start",mb:"60px"})},ut=n(835),xt=n(849),Ot=n(987),ht=n(852),ft=function(){var e=Object(C.l)(),t=e.nfts,n=e.userNftsInitializationState,c=Object(f.useState)({nft:null,location:null}),r=Object(L.a)(c,2),i=r[0],a=r[1],s=Object(f.useState)({nft:null,location:null,variant:null}),o=Object(L.a)(s,2),l=o[0],b=o[1],j=Object(g.dd)(Object(U.jsx)(Ot.a,{nft:i.nft})),d=Object(L.a)(j,1)[0],u=Object(g.dd)(Object(U.jsx)(ht.a,{variant:l.variant,nftToSell:l.nft})),x=Object(L.a)(u,1)[0],O=Object(k.b)().t;return Object(f.useEffect)((function(){i.nft&&d()}),[i]),Object(f.useEffect)((function(){l.nft&&x()}),[l]),Object(U.jsx)(U.Fragment,{children:0===t.length&&n===Pe.e.INITIALIZED?Object(U.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(U.jsx)(ot,{}),Object(U.jsx)(g.zc,{pt:"8px",bold:!0,children:O("No NFTs found")})]}):t.length>0?Object(U.jsx)(g.cb,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:t.map((function(e){var t=e.marketData,n=e.location;return Object(U.jsx)(ut.a,{isUserNft:!0,onClick:function(){return function(e,t){switch(t){case Pe.d.PROFILE:a({nft:e,location:t});break;case Pe.d.WALLET:b({nft:e,location:t,variant:"sell"});break;case Pe.d.FORSALE:b({nft:e,location:t,variant:"edit"})}}(e,n)},nft:e,currentAskPrice:(null===t||void 0===t?void 0:t.currentAskPrice)&&(null===t||void 0===t?void 0:t.isTradable)&&parseFloat(t.currentAskPrice),nftLocation:n},"".concat(e.tokenId,"-").concat(e.collectionName))}))}):Object(U.jsx)(xt.a,{})})},pt=Object(I.e)(g.o)($e||($e=Object(S.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0%);\n\n  "," {\n    left: auto;\n    transform: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),mt=function(){var e=Object(w.d)().profile,t=Object(z.c)((function(e){return e.achievements.data})),n=Object(p.c)().account,c=Object(C.l)().nfts;return function(){var e=Object(p.c)().account,t=Object(D.b)();Object(f.useEffect)((function(){e&&t(Object(F.c)(e))}),[e,t])}(),Object(E.a)(n),Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(P.a,{position:"relative",children:[Object(U.jsx)(Z,{accountPath:n,profile:e,achievements:t,nftCollected:c.length}),Object(U.jsx)(pt,{children:Object(U.jsx)(J,{})})]}),Object(U.jsxs)(y.b,{style:{minHeight:"auto"},children:[Object(U.jsx)(m.b,{path:"".concat(A.a,"/profile/:accountAddress/achievements"),children:Object(U.jsx)(Fe,{achievements:t,points:null===e||void 0===e?void 0:e.points})}),Object(U.jsxs)(m.b,{path:"".concat(A.a,"/profile/:accountAddress/activity"),children:[Object(U.jsx)(dt,{}),Object(U.jsx)(bt,{})]}),Object(U.jsxs)(m.b,{exact:!0,path:"".concat(A.a,"/profile/:accountAddress"),children:[Object(U.jsx)(dt,{}),Object(U.jsx)(ft,{})]})]})]})},vt=n(832),gt=n.n(vt),yt=function(e,t,n){var c,r=Object(f.useState)([]),i=Object(L.a)(r,2),a=i[0],s=i[1],o=Object(f.useState)(!0),l=Object(L.a)(o,2),b=l[0],j=l[1],d=Object(C.f)(),u=null===t||void 0===t?void 0:t.tokenId,x=null===t||void 0===t||null===(c=t.tokenId)||void 0===c?void 0:c.toString(),O=null===t||void 0===t?void 0:t.collectionAddress,h=Object(f.useMemo)((function(){return u?{tokenId:x,collectionAddress:O,nftLocation:Pe.d.PROFILE}:null}),[x,O,u]);return Object(f.useEffect)((function(){var t=function(){var t=Object(Oe.a)(xe.a.mark((function t(){var n;return xe.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Ee.k)(e,d,h);case 2:n=t.sent,s(n),j(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();n||gt()(d)||(j(!0),t())}),[e,d,n,h]),{nfts:a,isLoading:b}},kt=function(e){var t=e.nfts,n=e.isLoading,c=Object(k.b)().t;return Object(U.jsx)(U.Fragment,{children:0!==t.length||n?t.length>0?Object(U.jsx)(g.cb,{gridGap:"16px",gridTemplateColumns:["1fr","repeat(2, 1fr)","repeat(3, 1fr)",null,"repeat(4, 1fr)"],alignItems:"start",children:t.map((function(e){var t=e.marketData;return Object(U.jsx)(ut.b,{nft:e,currentAskPrice:(null===t||void 0===t?void 0:t.currentAskPrice)&&(null===t||void 0===t?void 0:t.isTradable)&&parseFloat(t.currentAskPrice)},"".concat(e.tokenId,"-").concat(e.collectionName))}))}):Object(U.jsx)(xt.a,{}):Object(U.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(U.jsx)(ot,{}),Object(U.jsx)(g.zc,{pt:"8px",bold:!0,children:c("No NFTs found")})]})})},St=Object(I.e)(g.o)(Ge||(Ge=Object(S.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 0%);\n\n  "," {\n    left: auto;\n    transform: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.sm})),It=function(){var e=Object(m.i)().accountAddress,t=Object(w.e)(e),n=t.profile,c=t.isFetching,r=(n||{}).profile,i=Object(w.a)(e).achievements,a=yt(e,r,c),s=a.nfts,o=a.isLoading;return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsxs)(P.a,{position:"relative",children:[Object(U.jsx)(Z,{accountPath:e,profile:r,achievements:i,nftCollected:s.length}),Object(U.jsx)(St,{children:Object(U.jsx)(J,{})})]}),Object(U.jsxs)(y.b,{style:{minHeight:"auto"},children:[Object(U.jsx)(m.b,{path:"".concat(A.a,"/profile/:accountAddress/achievements"),children:Object(U.jsx)(Fe,{achievements:i,points:null===r||void 0===r?void 0:r.points})}),Object(U.jsxs)(m.b,{path:"".concat(A.a,"/profile/:accountAddress/activity"),children:[Object(U.jsx)(dt,{}),Object(U.jsx)(bt,{})]}),Object(U.jsxs)(m.b,{exact:!0,path:"".concat(A.a,"/profile/:accountAddress"),children:[Object(U.jsx)(dt,{}),Object(U.jsx)(kt,{nfts:s,isLoading:o})]})]})]})};t.default=function(){var e=Object(p.c)().account,t=Object(m.i)().accountAddress,n=Object(k.b)().t,c=(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase());return!t||!1===Object(v.i)(t)?Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(P.a,{position:"relative",children:Object(U.jsx)(Z,{accountPath:t,profile:null,achievements:null,nftCollected:null})}),Object(U.jsx)(y.b,{style:{minHeight:"auto"},children:Object(U.jsxs)(g.bb,{p:"24px",flexDirection:"column",alignItems:"center",children:[Object(U.jsx)(ot,{}),Object(U.jsx)(g.zc,{textAlign:"center",maxWidth:"420px",pt:"8px",bold:!0,children:n("Please enter a valid address, or connect your wallet to view your profile")})]})})]}):Object(U.jsx)(U.Fragment,{children:c?Object(U.jsx)(mt,{}):Object(U.jsx)(It,{})})}},891:function(e,t,n){"use strict";var c=n(5),r=(n(0),n(377)),i=n(97),a=n(1);t.a=function(e){var t=Object(i.a)().theme.isDark?"linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)":"linear-gradient(111.68deg, #f2ecf2 0%, #e8f2f6 100%)";return Object(a.jsx)(r.a,Object(c.a)({background:t},e))}},917:function(e,t,n){"use strict";var c,r=n(8),i=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(r.a)(["\n  background: url('","');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 50%;\n  position: relative;\n  width: 96px;\n  height: 96px;\n  border: 4px "," solid;\n\n  & > img {\n    border-radius: 50%;\n  }\n"])),(function(e){return e.src}),(function(e){return e.borderColor||"#f2ecf2"}));t.a=i},918:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c,r=n(8),i=n(5),a=n(53),s=(n(0),n(6)),o=n(2),l=n(1),b=["title","stat"],j=function(e){var t=e.title,n=e.stat,c=Object(a.a)(e,b);return Object(l.jsxs)(o.o,Object(i.a)(Object(i.a)({},c),{},{children:[Object(l.jsx)(o.zc,{fontSize:"12px",color:"textSubtle",textAlign:"center",children:t}),null===n?Object(l.jsx)(o.fc,{height:"24px",width:"50%",mx:"auto"}):Object(l.jsx)(o.zc,{fontWeight:"600",textAlign:"center",children:n})]}))},d=Object(s.e)(o.bb)(c||(c=Object(r.a)(["\n  align-items: center;\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ",";\n  justify-content: space-around;\n  padding: 8px;\n  width: 100%;\n"])),(function(e){return e.theme.colors.invertedContrast}),(function(e){return e.theme.colors.cardBorder}),(function(e){return e.theme.radii.card}));t.b=d},926:function(e,t,n){"use strict";var c,r=n(5),i=n(53),a=n(8),s=(n(0),n(2)),o=n(6),l=n(1),b=["icon","title","subtitle","isDisabled"],j=Object(o.e)(s.zc)(c||(c=Object(a.a)(["\n  border: 2px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.tertiary}));j.defaultProps={p:"24px"};t.a=function(e){var t=e.icon,n=e.title,c=e.subtitle,a=e.isDisabled,o=void 0!==a&&a,d=Object(i.a)(e,b);return Object(l.jsx)(j,Object(r.a)(Object(r.a)({},d),{},{children:Object(l.jsxs)(s.bb,{alignItems:"start",children:[Object(l.jsx)(t,{width:"44px",mr:"24px",color:o?"textDisabled":"currentColor"}),Object(l.jsxs)("div",{children:[Object(l.jsx)(s.db,{as:"h3",scale:"xl",color:o?"textDisabled":"text",children:n}),Object(l.jsx)(s.zc,{textTransform:"uppercase",color:o?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:c})]})]})}))}},984:function(e,t,n){"use strict";var c=n(5),r=n(53),i=(n(0),n(2)),a=n(1),s=["title","description","children"];t.a=function(e){var t=e.title,n=e.description,o=e.children,l=Object(r.a)(e,s);return Object(a.jsxs)(i.cb,Object(c.a)(Object(c.a)({gridGap:"16px",alignItems:"center",gridTemplateColumns:["1fr",null,null,null,"repeat(2, 1fr)"]},l),{},{children:[Object(a.jsxs)(i.o,{children:[Object(a.jsx)(i.db,{as:"h1",scale:"xl",color:"secondary",mb:"16px",children:t}),n]}),Object(a.jsx)(i.o,{children:o})]}))}},986:function(e,t,n){"use strict";var c,r=n(8),i=n(2),a=n(6),s=Object(a.e)(i.pc)(c||(c=Object(r.a)(["\n  background-color: transparent;\n  border-bottom: 1px "," solid;\n"])),(function(e){return e.theme.colors.cardBorder}));t.a=s},998:function(e,t,n){"use strict";var c,r=n(5),i=n(53),a=(n(0),n(2)),s=n(8),o=n(6).e.div.attrs((function(e){return{alt:e.alt}}))(c||(c=Object(s.a)(["\n  ",";\n  background-image: url('","');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 100%;\n  border-radius: 32px;\n  height: 123px;\n\n  "," {\n    height: 192px;\n  }\n\n  "," {\n    height: 256px;\n  }\n"])),(function(e){var t=e.src,n=e.theme;return t?"background-image: url('".concat(t,"')"):"background-color: ".concat(n.colors.cardBorder)}),(function(e){return e.src}),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.md})),l=n(1),b=["bannerImage","bannerAlt","avatar","children"];t.a=function(e){var t=e.bannerImage,n=e.bannerAlt,c=e.avatar,s=e.children,j=Object(i.a)(e,b);return Object(l.jsx)(a.bb,Object(r.a)(Object(r.a)({flexDirection:"column",mb:"24px"},j),{},{children:Object(l.jsxs)(a.o,{position:"relative",pb:"56px",children:[Object(l.jsx)(o,{src:t,alt:n}),Object(l.jsx)(a.o,{position:"absolute",bottom:0,left:-4,children:Object(l.jsxs)(a.bb,{alignItems:"flex-end",children:[c,s]})})]})}))}}}]);
//# sourceMappingURL=19.0619341c.chunk.js.map