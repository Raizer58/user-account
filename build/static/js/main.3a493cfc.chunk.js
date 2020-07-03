(this["webpackJsonpuser-account"]=this["webpackJsonpuser-account"]||[]).push([[0],{30:function(n,e,t){n.exports=t(41)},41:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(16),c=t(8),o=t(15),i=t.n(o),u=t(28),s=t(2),m=t(14),p=t(3),d=t(29),b=function(n){return{type:"SET_LOGIN",user:n}},f={user:JSON.parse(sessionStorage.getItem("user"))},h=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0,t=e.type,a=Object(d.a)(e,["type"]);switch(t){case"SET_LOGIN":return sessionStorage.setItem("user",JSON.stringify(e.user)),Object(m.a)(Object(m.a)({},n),a);default:return n}},g=t(9),E=t(10);function v(){var n=Object(g.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: calc(100vw - 30px);\n  margin: auto;\n  max-width: 1024px;\n\n  .user-info {\n    display: flex;\n    width: 100%;\n    height: 50px;\n    padding: 0% 3%;\n    justify-content: space-between;\n    background: darkcyan;\n    align-items: center;\n  }\n\n  button {\n    width: 10%;\n    border-radius: 5px;\n    border: black solid 1px;\n    transition: transform .25s ease-in-out;\n  }\n\n  button: hover {\n    cursor: pointer;\n    transform: scale(1.25);\n    transition: transform .25s ease-in-out;\n    box-shadow: 4px 4px 5px 0px black;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    margin-bottom: 3%;\n  }\n\n  .contact-from {\n    margin-bottom: 0%;\n  }\n\n  .search-form p {\n    width: 50%;\n  }\n\n  .search-form input {\n    width: 45%;\n  }\n\n  .search-form button {\n    margin: 0%;\n    margin-left: 5%;\n  }\n\n  form p {\n    display: flex;\n    width: 50%;\n    margin: 1.5%;\n    text-align: center;\n  }\n\n  form p span {\n    width: 25%;\n    margin-right: 5%;\n  }\n\n  form p input {\n    width: 70%;\n  }\n\n  form p input {\n    transition: transform .25s ease-in-out;\n    background: azure;\n  }\n\n  form p input: focus {\n    transform: scale(1.1) translateY(-5px);\n    transition: transform .25s ease-in-out;\n    background: aquamarine;\n  }\n\n  form button {\n    width: 20%;\n    margin: 1.5%;\n  }\n\n  ul {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    list-style: none;\n    margin: 0%;\n    padding: 0%;\n    border-radius: 10px;\n  }\n\n  ul li {\n    width: 50%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    border: black solid 1px;\n    border-radius: 10px;\n    box-sizing: border-box;\n  }\n\n  ul li:nth-child(4n+1) {\n    background: darkcyan;\n  }\n\n  ul li:nth-child(4n+4) {\n    background: darkcyan;\n  }\n\n  ul li:nth-child(4n+2) {\n    background: darksalmon;\n  }\n\n  ul li:nth-child(4n+3) {\n    background: darksalmon;\n  }\n\n  ul li p {\n    width: 70%;\n    display: flex;\n    text-align: center;\n    margin: 2% 0%;\n  }\n\n  ul li p .name{\n    width: 40%;\n  }\n\n  ul li p .value{\n    width: 60%;\n  }\n\n  ul button {\n    margin-right: 7.5%;\n    margin-bottom: 4%;\n    width: 35%;\n  }\n"]);return v=function(){return n},n}var x=E.a.div(v());function O(){var n=Object(g.a)(["\n  position: fixed;\n  top: 25vh;\n  left: 25vw;\n  height: 50vh;\n  width: 50vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.9); \n  z-index: 10;\n  border: black solid 3px;\n  border-radius: 25px;\n  padding-top: 5vh;\n\n  p {\n    width: 100%;\n    display: flex;\n    text-align: center;\n    margin: 0%;\n    height: 7vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  p:nth-child(2n+1) {\n    background: darkcyan;\n  }\n\n  p:nth-child(2n+2) {\n    background: darksalmon;\n  }\n\n  p .name{\n    width: 40%;\n  }\n\n  p .value{\n    width: 60%;\n  }\n\n  button {\n    margin-bottom: 5%;\n    width: 35%;\n  }\n\n"]);return O=function(){return n},n}var w=E.a.div(O()),j=function(n){var e=n.handlerClick,t=n.dataSearch,a=t.firstName,l=t.lastName,c=t.organization,o=t.email,i=t.phone;return r.a.createElement(w,null,r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Name:"),r.a.createElement("span",{className:"value"},"".concat(a," ").concat(l))),r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Organization:"),r.a.createElement("span",{className:"value"},c)),r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Email:"),r.a.createElement("span",{className:"value"},o)),r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Pnohe:"),r.a.createElement("span",{className:"value"},i)),r.a.createElement("button",{type:"button",onClick:e},"Close contact"))},y=function(){var n=Object(c.b)(),e=Object(c.c)((function(n){return n.user})),t=JSON.parse(localStorage.getItem(e)),l=Object(a.useState)(t||{}),o=Object(p.a)(l,2),i=o[0],u=o[1],s=Object(a.useState)(""),d=Object(p.a)(s,2),f=d[0],h=d[1],g=Object(a.useState)(""),E=Object(p.a)(g,2),v=E[0],O=E[1],w=Object(a.useState)(""),y=Object(p.a)(w,2),k=y[0],N=y[1],S=Object(a.useState)(""),C=Object(p.a)(S,2),_=C[0],I=C[1],z=Object(a.useState)(""),D=Object(p.a)(z,2),J=D[0],T=D[1],L=Object(a.useState)(!1),q=Object(p.a)(L,2),P=q[0],X=q[1],F=Object(a.useState)(""),G=Object(p.a)(F,2),R=G[0],U=G[1],A=Object(a.useState)(!1),V=Object(p.a)(A,2),Y=V[0],B=V[1],M=Object(a.useCallback)((function(n){n.preventDefault();var t={firstName:f,lastName:v,organization:k,email:_,phone:J},a=Object(m.a)({},i);Object.defineProperty(a,J,{enumerable:!0,configurable:!0,writable:!0,value:t});var r=JSON.stringify(a);localStorage.setItem(e,r),u(a),X(!1),h(""),O(""),N(""),I(""),T("")}),[i,_,f,v,k,J,e]),H=Object(a.useCallback)((function(n){n.preventDefault(),B(!0)}),[]),K=Object(a.useCallback)((function(n){X(!0);var e=i[String(n)],t=e.firstName,a=e.lastName,r=e.organization,l=e.email,c=e.phone;h(t),O(a),N(r),I(l),T(c)}),[i]),Q=Object(a.useCallback)((function(n){var t=Object(m.a)({},i);delete t[String(n)];var a=JSON.stringify(t);localStorage.setItem(e,a),u(t),X(!1)}),[i,e]);return r.a.createElement(x,null,Y?r.a.createElement(j,{dataSearch:i[String(R)],handlerClick:function(){return B(!1)}}):null,r.a.createElement("p",{className:"user-info"},r.a.createElement("span",null,"User ID - ".concat(e)),r.a.createElement("button",{type:"button",onClick:function(){n(b(!1))}},"Logout")),r.a.createElement("form",{className:"contact-from",onSubmit:M},r.a.createElement("p",null,r.a.createElement("span",null,"First Name:"),r.a.createElement("input",{type:"text",value:f,onChange:function(n){return h(n.target.value)},required:!0})),r.a.createElement("p",null,r.a.createElement("span",null,"Last Name:"),r.a.createElement("input",{type:"text",value:v,onChange:function(n){return O(n.target.value)},required:!0})),r.a.createElement("p",null,r.a.createElement("span",null,"Organization:"),r.a.createElement("input",{type:"text",value:k,onChange:function(n){return N(n.target.value)}})),r.a.createElement("p",null,r.a.createElement("span",null,"Email:"),r.a.createElement("input",{type:"email",value:_,onChange:function(n){return I(n.target.value)}})),r.a.createElement("p",null,r.a.createElement("span",null,"Phone:"),r.a.createElement("input",{type:"tel",value:J,onChange:function(n){var e=n.target.value,t=parseFloat(e);T(t||"")},required:!0})),r.a.createElement("button",{type:"submit"},P?"Confirm":"Add contact")),r.a.createElement("form",{className:"search-form",onSubmit:H},r.a.createElement("p",null,r.a.createElement("span",null,"Search"),r.a.createElement("input",{type:"text",value:R,onChange:function(n){var e=n.target.value,t=parseFloat(e);U(t||"")},required:!0,placeholder:"Enter phone"}),r.a.createElement("button",{type:"submit"},"search"))),r.a.createElement("ul",null,i?Object.entries(i).map((function(n){var e=n[1],t=e.firstName,a=e.lastName,l=e.organization,c=e.email,o=e.phone;return r.a.createElement("li",{key:o},r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Name:"),r.a.createElement("span",{className:"value"},"".concat(t," ").concat(a))),r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Organization:"),r.a.createElement("span",{className:"value"},l)),r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Email:"),r.a.createElement("span",{className:"value"},c)),r.a.createElement("p",null,r.a.createElement("span",{className:"name"},"Pnohe:"),r.a.createElement("span",{className:"value"},o)),r.a.createElement("button",{type:"button",onClick:function(){return K(o)}},"Edit contact"),r.a.createElement("button",{type:"button",onClick:function(){return Q(o)}},"Remove contact"))})):null))};function k(){var n=Object(g.a)(["\n  height: calc(100vh - 30px);\n  width: calc(100vw - 30px);\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  form {\n    display: flex;\n    flex-wrap: wrap;\n    width: min-content;\n    justify-content: center;\n  }\n\n  input {\n    margin-bottom: 15%;\n    transition: transform .25s ease-in-out;\n  }\n\n  input: focus {\n    transform: scale(1.25) translateY(-15px);\n    transition: transform .25s ease-in-out;\n  }\n\n  button {\n    width: 50%;\n    border-radius: 5px;\n    border: black solid 1px;\n    transition: transform .25s ease-in-out;\n  }\n\n  button: hover {\n    cursor: pointer;\n    transform: scale(1.25);\n    transition: transform .25s ease-in-out;\n    box-shadow: 4px 4px 5px 0px black;\n  }\n\n"]);return k=function(){return n},n}var N=E.a.div(k());function S(){var n=Object(g.a)(["\n  position: fixed;\n  top: 37.5vh;\n  left: 25vw;\n  height: 25vh;\n  width: 50vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.9); \n  z-index: 10;\n  border: black solid 3px;\n  border-radius: 25px;\n  padding-top: 5vh;\n\n  p{\n    width: 100%;\n    text-align: center;\n  }\n"]);return S=function(){return n},n}var C=E.a.div(S()),_=function(n){var e=n.error,t=n.closeError;return r.a.createElement(C,null,r.a.createElement("p",null,e),r.a.createElement("button",{type:"button",onClick:t},"Close error"))},I=function(n,e){return fetch("https://afternoon-falls-25894.herokuapp.com/signin",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){if(200!==n.status)throw new Error("Incorrect e-mail or password");return n.json()})).then((function(n){return n.userId}))},z=function(){var n=Object(c.b)(),e=Object(a.useState)(""),t=Object(p.a)(e,2),l=t[0],o=t[1],i=Object(a.useState)(""),u=Object(p.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)(!1),f=Object(p.a)(d,2),h=f[0],g=f[1],E=Object(a.useState)(""),v=Object(p.a)(E,2),x=v[0],O=v[1],w=Object(a.useCallback)((function(n){g(!0),O(n.message)}),[]),j=Object(a.useCallback)((function(e){e.preventDefault(),I({email:l,password:s},w).then((function(e){n(b(e))})).catch((function(n){return w(n)}))}),[n,w,s,l]),y=Object(a.useCallback)((function(){g(!1)}),[]);return r.a.createElement(N,null,h?r.a.createElement(_,{error:x,closeError:y}):null,r.a.createElement("form",{onSubmit:j},r.a.createElement("input",{type:"text",value:l,onChange:function(n){return o(n.target.value)},placeholder:"hello@user.com"}),r.a.createElement("input",{type:"password",value:s,onChange:function(n){return m(n.target.value)},placeholder:"Gfhjkm_123"}),r.a.createElement("button",{type:"submit"}," Login ")))},D=function(){var n=Object(c.c)((function(n){return n.user}));return r.a.createElement(u.a,null,r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:y},!n&&r.a.createElement(s.a,{to:"/login"})),r.a.createElement(s.b,{exact:!0,path:"/login",component:z},n&&r.a.createElement(s.a,{to:"/"}))))},J=Object(l.b)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{store:J},r.a.createElement(D,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.3a493cfc.chunk.js.map