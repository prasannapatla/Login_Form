(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={login:"Login_login__1ep6_",control:"Login_control__2IbBY",invalid:"Login_invalid__35pC0",actions:"Login_actions__2zX3w"}},,,function(e,t,n){e.exports={card:"Card_card__1Alqm"}},function(e,t,n){e.exports={button:"Button_button__x4IXv"}},function(e,t,n){e.exports={home:"Home_home__hJpmM"}},function(e,t,n){e.exports={nav:"Navigation_nav__3YXdU"}},function(e,t,n){e.exports={"main-header":"MainHeader_main-header__27pQQ"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(5),o=n.n(i),s=(n(15),n(2)),r=n(6),l=n.n(r),j=n(0),u=function(e){return Object(j.jsx)("div",{className:"".concat(l.a.card," ").concat(e.className),children:e.children})},d=n(3),b=n.n(d),h=n(7),O=n.n(h),m=function(e){return Object(j.jsx)("button",{type:e.type||"button",className:"".concat(O.a.button," ").concat(e.className),onClick:e.onClick,disabled:e.disabled,children:e.children})},g=function(e){var t=Object(c.useState)(""),n=Object(s.a)(t,2),a=n[0],i=n[1],o=Object(c.useState)(),r=Object(s.a)(o,2),l=r[0],d=r[1],h=Object(c.useState)(""),O=Object(s.a)(h,2),g=O[0],x=O[1],p=Object(c.useState)(),_=Object(s.a)(p,2),f=_[0],v=_[1],L=Object(c.useState)(!1),N=Object(s.a)(L,2),w=N[0],y=N[1];return Object(j.jsx)(u,{className:b.a.login,children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.onLogin(a,g)},children:[Object(j.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===l?b.a.invalid:""),children:[Object(j.jsx)("label",{htmlFor:"email",children:"E-Mail"}),Object(j.jsx)("input",{type:"email",id:"email",value:a,onChange:function(e){i(e.target.value),y(e.target.value.includes("@")&&g.trim().length>6)},onBlur:function(){d(a.includes("@"))}})]}),Object(j.jsxs)("div",{className:"".concat(b.a.control," ").concat(!1===f?b.a.invalid:""),children:[Object(j.jsx)("label",{htmlFor:"password",children:"Password"}),Object(j.jsx)("input",{type:"password",id:"password",value:g,onChange:function(e){x(e.target.value),y(e.target.value.trim().length>6&&a.includes("@"))},onBlur:function(){v(g.trim().length>6)}})]}),Object(j.jsx)("div",{className:b.a.actions,children:Object(j.jsx)(m,{type:"submit",className:b.a.btn,disabled:!w,children:"Login"})})]})})},x=n(8),p=n.n(x),_=function(e){return Object(j.jsx)(u,{className:p.a.home,children:Object(j.jsx)("h1",{children:"Welcome back!"})})},f=n(9),v=n.n(f),L=function(e){return Object(j.jsx)("nav",{className:v.a.nav,children:Object(j.jsxs)("ul",{children:[e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Users"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/",children:"Admin"})}),e.isLoggedIn&&Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:e.onLogout,children:"Logout"})})]})})},N=n(10),w=n.n(N),y=function(e){return Object(j.jsxs)("header",{className:w.a["main-header"],children:[Object(j.jsx)("h1",{children:"A Typical Page"}),Object(j.jsx)(L,{isLoggedIn:e.isAuthenticated,onLogout:e.onLogout})]})};var C=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1],o=function(){i(!1)};return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(y,{isAuthenticated:n,onLogout:o}),Object(j.jsxs)("main",{children:[!n&&Object(j.jsx)(g,{onLogin:function(e,t){i(!0)}}),n&&Object(j.jsx)(_,{onLogout:o})]})]})};o.a.render(Object(j.jsx)(C,{}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.ce5064f9.chunk.js.map