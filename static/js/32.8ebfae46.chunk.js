(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[32],{1538:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var c,o,i=n(9),r=n(8),j=n(0),a=n(4),l=n(2),d=n(6),s=n(14),b=n(120),O=n(37),x=n(65),u=n(387),p=n(26),h=n(458),g=n(113),f=n(22),v=n(49),y=n(109),m=n(940),T=n(171),I=n(228),k=n(200),E=n(258),N=n(1);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(d.e)(l.t)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function z(){var e,t=Object(f.a)().account,n=Object(s.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),d=r[0],z=r[1],A=Object(j.useState)(a.d),K=Object(i.a)(A,2),C=K[0],w=K[1],q=Object(j.useState)(null),B=Object(i.a)(q,2),L=B[0],X=B[1],D=Object(g.b)(null!==C&&void 0!==C?C:void 0,null!==L&&void 0!==L?L:void 0),J=Object(i.a)(D,2),M=J[0],P=J[1],F=Object(v.h)();Object(j.useEffect)((function(){P&&F(P)}),[P,F]);var G=M===g.a.NOT_EXISTS||Boolean(M===g.a.EXISTS&&P&&a.e.equal(P.reserve0.raw,a.e.BigInt(0))&&a.e.equal(P.reserve1.raw,a.e.BigInt(0))),R=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===P||void 0===P?void 0:P.liquidityToken),V=Boolean(R&&a.e.greaterThan(R.raw,a.e.BigInt(0))),W=Object(j.useCallback)((function(e){d===o.TOKEN0?w(e):X(e)}),[d]),Y=Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(l.zc,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),_=Object(l.dd)(Object(N.jsx)(h.a,{onCurrencySelect:W,showCommonBases:!0,selectedCurrency:null!==(e=d===o.TOKEN0?L:C)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),H=Object(i.a)(_,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.K,{}),onClick:function(){H(),z(o.TOKEN0)},children:C?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:C}),Object(N.jsx)(l.zc,{ml:"8px",children:C.symbol})]}):Object(N.jsx)(l.zc,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(l.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.K,{}),onClick:function(){H(),z(o.TOKEN1)},children:L?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:L}),Object(N.jsx)(l.zc,{ml:"8px",children:L.symbol})]}):Object(N.jsx)(l.zc,{as:p.d,children:n("Select a Token")})}),V&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(l.zc,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(l.zc,{textAlign:"center",children:n("Manage this pool.")})})]}),C&&L?M===g.a.EXISTS?V&&P?Object(N.jsx)(u.a,{pair:P}):Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.zc,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(C),"/").concat(Object(T.a)(L)),children:Object(N.jsx)(l.zc,{textAlign:"center",children:n("Add Liquidity")})})]})}):G?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.zc,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(C),"/").concat(Object(T.a)(L)),children:n("Create pool.")})]})}):M===g.a.INVALID?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(l.zc,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):M===g.a.LOADING?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(l.zc,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(I.a,{})]})})}):null:Y]})]})})}},940:function(e,t,n){"use strict";var c,o=n(8),i=n(94),r=n(6),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=32.8ebfae46.chunk.js.map