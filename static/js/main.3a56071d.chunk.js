(this["webpackJsonpmagic-todo"]=this["webpackJsonpmagic-todo"]||[]).push([[0],{73:function(e,n,t){"use strict";t.r(n);var r,c,o,a,i,s,u,d,b,j,l,p,f,O,h,x,g,m,v,w,k,C,y,E,S,A,T,z,D=t(0),F=t(24),L=t.n(F),B=t(9),I=t(15),J=t(8),N=t(10),P=t(4),U=t.n(P),M=t(7),R=t(2),H=t(3),Y=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],G=function(e){localStorage.setItem("userToken",e)},V=function(){return localStorage.getItem("userToken")||""},q=t(16),K="https://glacial-fjord-12254.herokuapp.com",Q=function(e,n){return fetch("".concat(K,"/register"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:n})}).then((function(e){return e.json()}))},W=function(e,n){return fetch("".concat(K,"/login"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:n})}).then((function(e){return e.json()}))},X="https://glacial-fjord-12254.herokuapp.com",Z=function(e,n){return fetch("".concat(X,"/todo"),{method:"POST",headers:{"content-type":"application/json",authorization:"Bearer ".concat(V())},body:JSON.stringify({content:e,date:n})}).then((function(e){return e.json()}))},$=function(e,n,t){return fetch("".concat(X,"/todo/").concat(e),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(V())},body:JSON.stringify({content:n,date:t})}).then((function(e){return e.json()}))},_=function(e,n){return fetch("".concat(X,"/todo/").concat(e,"/updateIsDone"),{method:"PATCH",headers:{"content-type":"application/json",authorization:"Bearer ".concat(V())},body:JSON.stringify({isDone:n})}).then((function(e){return e.json()}))},ee=function(e){return fetch("".concat(X,"/todo/").concat(e),{method:"DELETE",headers:{"content-type":"application/json",authorization:"Bearer ".concat(V())}}).then((function(e){return e.json()}))},ne=Object(q.b)({name:"todos",initialState:{isLoading:!1,todos:[]},reducers:{setIsLoading:function(e,n){e.isLoading=n.payload},setAllTodo:function(e,n){e.todos=n.payload}}}),te=ne.actions,re=te.setIsLoading,ce=te.setAllTodo,oe=function(){return function(){var e=Object(M.a)(U.a.mark((function e(n){var t;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(re(!0)),e.next=3,fetch("".concat(X,"/todo"),{headers:{"content-type":"application/json",authorization:"Bearer ".concat(V())}}).then((function(e){return e.json()}));case 3:return t=e.sent,n(ce(t.todos)),n(re(!1)),e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},ae=function(e,n,t){return function(){var r=Object(M.a)(U.a.mark((function r(c){var o;return U.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c(re(!0)),r.next=3,$(e,n,t);case 3:return o=r.sent,c(re(!1)),r.abrupt("return",o);case 6:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},ie=function(e,n){return function(){var t=Object(M.a)(U.a.mark((function t(r){var c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(re(!0)),t.next=3,_(e,n);case 3:return c=t.sent,r(re(!1)),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},se=function(e){return function(){var n=Object(M.a)(U.a.mark((function n(t){var r;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(re(!0)),n.next=3,ee(e);case 3:return r=n.sent,t(re(!1)),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},ue=ne.reducer,de=Object(q.b)({name:"user",initialState:{isUserLoading:!1,user:null},reducers:{setIsLoading:function(e,n){e.isUserLoading=n.payload},setUser:function(e,n){e.user=n.payload}}}),be=de.actions,je=be.setIsLoading,le=be.setUser,pe=function(e,n){return function(){var t=Object(M.a)(U.a.mark((function t(r){var c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(je(!0)),t.next=3,Q(e,n);case 3:return(c=t.sent).ok&&r(le(c.id)),r(je(!1)),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},fe=function(e,n){return function(){var t=Object(M.a)(U.a.mark((function t(r){var c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(je(!0)),t.next=3,W(e,n);case 3:return(c=t.sent).ok&&r(le(c.id)),r(je(!1)),t.abrupt("return",c);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Oe=de.reducer,he=t(1),xe=H.b.div(r||(r=Object(R.a)(["\n  position: fixed;\n  z-index: 6;\n  top: 0;\n  left: -1rem;\n  display: flex;\n  padding: 0.8rem 1.5rem 0.8rem 2rem;\n  border-radius: 1.5rem;\n  color: white;\n  background: ",";\n  font-weight: 500;\n  gap: 0.5rem;\n"])),(function(e){return e.background})),ge=Object(H.b)(I.b)(c||(c=Object(R.a)(["\n  color: white;\n"]))),me=H.b.div(o||(o=Object(R.a)(["\n  cursor: pointer;\n"]))),ve=function(e){var n=e.background,t=e.content,r=e.setIsAddTodoFormOpen,c=Object(N.b)(),o=function(){var e=Object(M.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(""),e.next=3,c(function(){var e=Object(M.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(le(null)),n(ce([]));case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(he.jsxs)(xe,{background:n,children:["home"===t&&Object(he.jsxs)(he.Fragment,{children:[!V()&&Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(ge,{to:"/register",children:"Register"}),Object(he.jsx)("div",{children:"/"}),Object(he.jsx)(ge,{to:"/login",children:"Login"})]}),V()&&Object(he.jsx)(ge,{to:"/login",onClick:o,children:"Logout"})]}),"todo"===t&&Object(he.jsx)(me,{onClick:function(){return r((function(e){return!e}))},children:"Add"})]})},we=H.b.div(a||(a=Object(R.a)(["\n  position: fixed;\n  width: 100%;\n  z-index: 5;\n  top: 0;\n  padding-top: 4rem;\n  background: #F4EEDE;\n"]))),ke=H.b.div(i||(i=Object(R.a)(["\n  z-index: 2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  gap: 4rem;\n"]))),Ce=Object(H.b)(I.b)(s||(s=Object(R.a)(["\n  font-size: 1.2rem;\n  color: black;\n  font-weight: 500;\n\n  ","\n"])),(function(e){return e.active&&"\n    position: relative;\n    font-size: 2rem;\n    font-weight: 700;\n\n    &:after {\n      z-index: -1;\n      content: '';\n      position: absolute;\n      top: -1rem;\n      left: 1.2rem;\n      width: 3rem;\n      height: 4rem;\n      transform:rotate(-55deg);\n      border-radius: 2rem;\n      background: white;\n    }\n  "})),ye=H.b.div(u||(u=Object(R.a)(["\n    position: relative;\n    z-index: 2;\n    margin-top: 1.4rem;\n    text-align: center;\n    font-size: 1.4rem;\n    font-weight: 700;\n"]))),Ee=function(){var e=Object(J.g)();return Object(he.jsxs)(we,{children:[Object(he.jsxs)(ke,{children:[Object(he.jsx)(Ce,{active:"/"===e.pathname?"active":"",to:"/",children:"Home"}),Object(he.jsx)(Ce,{active:"/todo"===e.pathname?"active":"",to:"/todo",children:"Todo"})]}),Object(he.jsx)(ye,{children:(new Date).getFullYear()})]})},Se=t(18),Ae=t(19),Te=function(e,n){return Object(he.jsx)(Se.a,{icon:Ae.d,size:e,color:n})},ze=function(e,n){return Object(he.jsx)(Se.a,{icon:Ae.g,size:e,color:n})},De=function(e,n){return Object(he.jsx)(Se.a,{icon:Ae.e,size:e,color:n})},Fe=function(e,n){return Object(he.jsx)(Se.a,{icon:Ae.a,size:e,color:n})},Le=H.b.div(d||(d=Object(R.a)(["\n  width: 100%;\n  position: fixed;\n  z-index: 5;\n  bottom: 0;\n  color: white;\n  background: ",";\n  padding: 0.6rem;\n  text-align: center;\n  font-weight: 500;\n"])),(function(e){return e.background})),Be=function(e){var n=e.background;return Object(he.jsxs)(Le,{background:n,children:["\xa9 Magic Todo ",Te("sm","white")," 2021"]})},Ie=t(30),Je=t(38),Ne=t.n(Je),Pe=(t(71),t(72),H.b.div(b||(b=Object(R.a)(["\n  position: relative;\n  height: calc(100vh - 2rem);\n  width: 70%;\n  "," {\n    width: 85%;\n  }\n  "," {\n    width: 90%;\n  }\n  margin: 0 auto;\n  top: 10rem;\n"])),"@media (max-width: 768px)","@media (max-width: 576px)")),Ue=H.b.div(j||(j=Object(R.a)(["\n  min-height: 300px;\n  margin: 20px auto;\n  background: #F0AA0E;\n  padding: 5.5rem 1.5rem;\n  text-align: center;\n  font-size: 1.6rem;\n  margin-bottom: 1.5rem;\n"]))),Me=H.b.span(l||(l=Object(R.a)(["\n  font-size: 3rem;\n"]))),Re=H.b.span(p||(p=Object(R.a)(["\n  font-size: 2rem;\n"]))),He=H.b.div(f||(f=Object(R.a)(["\n  padding-top: 2rem;\n"]))),Ye=function(){return Object(he.jsx)(Pe,{children:Object(he.jsxs)(Ne.a,Object(Ie.a)(Object(Ie.a)({},{dots:!0,infinite:!0,speed:3e3,slidesToShow:1,slidesToScroll:1,autoplay:!0}),{},{children:[Object(he.jsxs)(Ue,{children:[Object(he.jsxs)(Me,{children:[(new Date).getDate()," "]}),Object(he.jsx)(Re,{children:Y[(new Date).getMonth()]}),Object(he.jsx)(He,{children:"Let\u2019s be productive!"})]}),Object(he.jsxs)(Ue,{children:[Object(he.jsx)("div",{children:Te("lg")}),Object(he.jsx)(He,{children:"Magic Todo"})]})]}))})},Ge=H.b.form(O||(O=Object(R.a)(["\n  width: 85%;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto 2rem;\n  background: white;\n  border-radius: 1rem;\n  box-shadow: 0 0 20px 2px rgba(0,0,0,.1);\n  gap: 1.8rem;\n"]))),Ve=H.b.div(h||(h=Object(R.a)(["\n  font-weight: 500;\n  font-size: 1.4rem;\n  margin: 1rem 0.5rem;\n"]))),qe=H.b.input(x||(x=Object(R.a)(["\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid #CECECE;\n  padding: 0.5rem;\n\n  &::placeholder {\n    color: #CECECE;\n  }\n"]))),Ke=H.b.button(g||(g=Object(R.a)(["\n  width: 100%;\n  font-size: 1rem;\n  padding: 0.8rem;\n  color: white;\n  background: ",";\n  border: none;\n"])),(function(e){return e.background})),Qe=function(){var e=Object(N.b)(),n=Object(J.f)(),t=Object(D.useState)(""),r=Object(B.a)(t,2),c=r[0],o=r[1],a=Object(D.useState)(""),i=Object(B.a)(a,2),s=i[0],u=i[1],d=Object(D.useState)(null),b=Object(B.a)(d,2),j=b[0],l=b[1],p=function(){var t=Object(M.a)(U.a.mark((function t(r){var o;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),c.trim()&&s.trim()){t.next=3;break}return t.abrupt("return",l("\u8acb\u8f38\u5165\u5e33\u865f\u53ca\u5bc6\u78bc"));case 3:return t.next=5,e(fe(c,s));case 5:if((o=t.sent).ok){t.next=8;break}return t.abrupt("return",l(o.message));case 8:G(o.token),n.push("/");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(he.jsx)(Pe,{children:Object(he.jsxs)(Ge,{onSubmit:p,children:[Object(he.jsx)(Ve,{children:"Login"}),Object(he.jsx)(qe,{value:c,onChange:function(e){return o(e.target.value)},placeholder:"Enter username"}),Object(he.jsx)(qe,{type:"password",value:s,onChange:function(e){return u(e.target.value)},placeholder:"Enter password"}),j&&Object(he.jsx)("div",{children:j}),Object(he.jsx)(Ke,{background:"#F0AA0E",children:"Submit"})]})})},We=function(){var e=Object(N.b)(),n=Object(J.f)(),t=Object(D.useState)(""),r=Object(B.a)(t,2),c=r[0],o=r[1],a=Object(D.useState)(""),i=Object(B.a)(a,2),s=i[0],u=i[1],d=Object(D.useState)(null),b=Object(B.a)(d,2),j=b[0],l=b[1],p=function(){var t=Object(M.a)(U.a.mark((function t(r){var o;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),c.trim()&&s.trim()){t.next=3;break}return t.abrupt("return",l("\u8acb\u8f38\u5165\u5e33\u865f\u53ca\u5bc6\u78bc"));case 3:return t.next=5,e(pe(c,s));case 5:if((o=t.sent).ok){t.next=8;break}return t.abrupt("return",l(o.message));case 8:G(o.token),n.push("/");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(he.jsx)(Pe,{children:Object(he.jsxs)(Ge,{onSubmit:p,children:[Object(he.jsx)(Ve,{children:"Register"}),Object(he.jsx)(qe,{value:c,onChange:function(e){return o(e.target.value)},placeholder:"Enter username"}),Object(he.jsx)(qe,{type:"password",value:s,onChange:function(e){return u(e.target.value)},placeholder:"Enter password"}),j&&Object(he.jsx)("div",{children:j}),Object(he.jsx)(Ke,{background:"#F0AA0E",children:"Submit"})]})})},Xe=Object(q.b)({name:"todoFilter",initialState:{filter:"all"},reducers:{filterAllTodo:function(e){e.filter="all"},filterCompletedTodo:function(e){e.filter="completed"},filterActiveTodo:function(e){e.filter="active"}}}),Ze=Xe.actions,$e=Ze.filterAllTodo,_e=Ze.filterCompletedTodo,en=Ze.filterActiveTodo,nn=Xe.reducer,tn=H.b.div(m||(m=Object(R.a)(["\n  margin: 1rem 0;\n  background: white;\n  border-radius: 1rem;\n  padding: 1rem 0.5rem;\n  word-break: break-all;\n  box-shadow: 0 0 20px 2px rgba(0,0,0,.1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),rn=H.b.span(v||(v=Object(R.a)(["\n  ","\n"])),(function(e){return e.isDone&&"\n    text-decoration: line-through;\n    color: #CECECE;\n  "})),cn=H.b.div(w||(w=Object(R.a)(["\n  flex-wrap: wrap;\n  flex-shrink: 0;\n"]))),on=H.b.button(k||(k=Object(R.a)(["\n  border: none;\n  background: none;\n  padding: 0 0.5rem;\n  cursor: pointer;\n"]))),an=function(e){var n,t,r=e.todo,c=r.id,o=r.isDone,a=Object(N.b)(),i=Object(D.useState)(r.content||""),s=Object(B.a)(i,2),u=s[0],d=s[1],b=Object(D.useState)(new Date(r.date).toLocaleDateString().replaceAll("/","-")),j=Object(B.a)(b,2),l=j[0],p=j[1],f=Object(D.useState)(!1),O=Object(B.a)(f,2),h=O[0],x=O[1],g=function(){var e=Object(M.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u.trim()&&l){e.next=3;break}return alert("\u8acb\u9078\u64c7\u65e5\u671f\u53ca\u8f38\u5165\u4ee3\u8fa6\u4e8b\u9805"),e.abrupt("return");case 3:return e.next=5,a(ae(c,u,l));case 5:return e.next=7,a(oe());case 7:x(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(M.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(ie(c,!o));case 2:return e.next=4,a(oe());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(M.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(se(c));case 2:return e.next=4,a(oe());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(he.jsx)(he.Fragment,{children:Object(he.jsxs)(tn,{children:[Object(he.jsxs)("div",{children:[!h&&Object(he.jsxs)("span",{onClick:m,children:[(n="lg",t=o?"#F4EEDE":"#249CB4",Object(he.jsx)(Se.a,{icon:Ae.f,size:n,color:t})),"  "]}),!h&&Object(he.jsx)(rn,{isDone:o,children:u}),h&&Object(he.jsx)(qe,{value:l,onChange:function(e){return p(e.target.value)},type:"date"}),h&&Object(he.jsx)(qe,{value:u,onChange:function(e){return d(e.target.value)},placeholder:"Enter todo"})]}),Object(he.jsxs)(cn,{children:[!h&&Object(he.jsx)(on,{onClick:function(){return x((function(e){return!e}))},children:De("lg","#CECECE")}),h&&Object(he.jsx)(on,{onClick:g,children:Fe("lg","#CECECE")}),Object(he.jsx)(on,{onClick:v,children:ze("lg","#CECECE")})]})]})})},sn=H.b.div(C||(C=Object(R.a)(["\n  padding-bottom: 5rem;\n"]))),un=H.b.div(y||(y=Object(R.a)(["\n  display: flex;\n  align-items: center;\n  gap: 0 1rem;\n"]))),dn=H.b.input(E||(E=Object(R.a)(["\n  border: none;\n  max-width: 135px;\n  padding: 0.5rem;\n  background: none;\n  border-bottom: 1px solid #CECECE;\n"]))),bn=H.b.div(S||(S=Object(R.a)(["\n  padding: 0.5rem 0;\n  ","\n"])),(function(e){return e.active&&"\n    border-bottom: 2px solid #249CB4;\n  "})),jn=function(){var e=Object(N.c)((function(e){return e.todoFilter.filter})),n=Object(N.c)((function(e){return e.todos.todos})),t=Object(N.b)(),r=Object(D.useState)((new Date).toLocaleDateString().replaceAll("/","-")),c=Object(B.a)(r,2),o=c[0],a=c[1];return Object(D.useEffect)((function(){Object(M.a)(U.a.mark((function e(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(oe());case 2:case"end":return e.stop()}}),e)})))()}),[t]),Object(he.jsxs)(sn,{children:[Object(he.jsxs)(un,{children:[Object(he.jsx)(dn,{value:o,onChange:function(e){return a(e.target.value)},type:"date"}),Object(he.jsx)(bn,{onClick:function(){return t($e())},active:"all"===e,children:"All"}),Object(he.jsx)(bn,{onClick:function(){return t(_e())},active:"completed"===e,children:"Completed"}),Object(he.jsx)(bn,{onClick:function(){return t(en())},active:"active"===e,children:"Active"})]}),Object(he.jsx)("div",{children:n&&n.filter((function(e){return new Date(e.date).toLocaleDateString().replaceAll("/","-")===o})).filter((function(n){return"completed"===e?n.isDone:"active"===e?!n.isDone:n})).map((function(e){return Object(he.jsx)(an,{todo:e},e.id)}))})]})},ln=H.b.div(A||(A=Object(R.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  gap: 1.5rem;\n"]))),pn=function(e){var n=e.isAddTodoFormOpen,t=e.setIsAddTodoFormOpen,r=Object(N.b)(),c=Object(D.useState)(""),o=Object(B.a)(c,2),a=o[0],i=o[1],s=Object(D.useState)((new Date).toLocaleDateString().replaceAll("/","-")),u=Object(B.a)(s,2),d=u[0],b=u[1],j=Object(D.useState)(null),l=Object(B.a)(j,2),p=l[0],f=l[1];return Object(he.jsxs)(Pe,{children:[n&&Object(he.jsx)(Ge,{onSubmit:function(e){if(e.preventDefault(),!V())return f("\u8acb\u5148\u81f3\u9996\u9801\u767b\u5165");a.trim()&&d?(r(function(e,n){return function(){var t=Object(M.a)(U.a.mark((function t(r){var c;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(re(!0)),t.next=3,Z(e,n);case 3:return c=t.sent,r(re(!1)),t.abrupt("return",c);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(a,d)),r(oe()),i(""),t(!1)):f("\u8acb\u9078\u64c7\u65e5\u671f\u53ca\u8f38\u5165\u4ee3\u8fa6\u4e8b\u9805")},children:Object(he.jsxs)(ln,{children:[Object(he.jsx)(qe,{value:d,onChange:function(e){return b(e.target.value)},type:"date"}),Object(he.jsx)(qe,{value:a,onChange:function(e){return i(e.target.value)},placeholder:"Enter todo"}),p&&Object(he.jsx)("div",{children:p}),!V()&&Object(he.jsx)("div",{children:"\u8acb\u5148\u81f3\u9996\u9801\u767b\u5165"}),Object(he.jsx)(Ke,{background:"#249CB4",children:"Add"})]})}),Object(he.jsx)(jn,{})]})},fn=H.b.div(T||(T=Object(R.a)(["\n  background: #CECECE;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2rem;\n  color: white;\n  z-index: 10;\n"]))),On=function(){return Object(he.jsx)(fn,{children:"Loading..."})},hn=function(){var e=Object(N.c)((function(e){return e.todos.isLoading})),n=Object(D.useState)(!1),t=Object(B.a)(n,2),r=t[0],c=t[1];return Object(he.jsxs)(I.a,{children:[e&&Object(he.jsx)(On,{}),Object(he.jsxs)(J.c,{children:[Object(he.jsxs)(J.a,{exact:!0,path:"/",children:[Object(he.jsx)(ve,{background:"#F0AA0E",content:"home"}),Object(he.jsx)(Ee,{}),Object(he.jsx)(Ye,{}),Object(he.jsx)(Be,{background:"#249CB4"})]}),Object(he.jsxs)(J.a,{exact:!0,path:"/login",children:[Object(he.jsx)(ve,{background:"#F0AA0E",content:"home"}),Object(he.jsx)(Ee,{}),Object(he.jsx)(Qe,{}),Object(he.jsx)(Be,{background:"#249CB4"})]}),Object(he.jsxs)(J.a,{exact:!0,path:"/register",children:[Object(he.jsx)(ve,{background:"#F0AA0E",content:"home"}),Object(he.jsx)(Ee,{}),Object(he.jsx)(We,{}),Object(he.jsx)(Be,{background:"#249CB4"})]}),Object(he.jsxs)(J.a,{exact:!0,path:"/todo",children:[Object(he.jsx)(ve,{setIsAddTodoFormOpen:c,background:"#249CB4",content:"todo"}),Object(he.jsx)(Ee,{}),Object(he.jsx)(pn,{isAddTodoFormOpen:r,setIsAddTodoFormOpen:c}),Object(he.jsx)(Be,{background:"#249CB4"})]})]})]})},xn=Object(H.a)(z||(z=Object(R.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Josefin Sans', sans-serif, \u5fae\u8edf\u6b63\u9ed1\u9ad4;\n  }\n\n  html, body, #root {\n    background: #F4EEDE;\n    letter-spacing: 0.05rem;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"]))),gn=Object(q.a)({reducer:{todos:ue,todoFilter:nn,user:Oe}});L.a.render(Object(he.jsxs)(N.a,{store:gn,children:[Object(he.jsx)(xn,{}),Object(he.jsx)(hn,{})]}),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.3a56071d.chunk.js.map