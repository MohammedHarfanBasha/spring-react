(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(27),r=n.n(i),s=(n(35),n(12)),j=n(13),o=n(14),l=n(16),h=(n(25),n(9)),d=n(44),u=n(45),b=n(15),O=n(2),m=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={isOpen:!1},c.toggle=c.toggle.bind(Object(h.a)(c)),c}return Object(j.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(O.jsx)(d.a,{color:"dark",dark:!0,expand:"md",children:Object(O.jsx)(u.a,{tag:b.b,to:"/",children:"Home"})})}}]),n}(c.Component),p=n(46),x=n(47),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsx)(p.a,{fluid:!0,children:Object(O.jsx)(x.a,{color:"link",children:Object(O.jsx)(b.b,{to:"/clients",children:"Clients"})})})]})}}]),n}(c.Component),v=f,y=n(6),g=n(48),C=n(49),k=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={clients:[]},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/clients").then((function(e){return e.json()})).then((function(t){return e.setState({clients:t})}))}},{key:"render",value:function(){var e=this.state.clients.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.name}),Object(O.jsx)("td",{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(x.a,{size:"sm",color:"primary",tag:b.b,to:"/clients/"+e.id,children:"Config"})})})]},e.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(p.a,{fluid:!0,children:[Object(O.jsx)("h3",{children:"Clients"}),Object(O.jsxs)(C.a,{className:"mt-4",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{width:"30%",children:"Name"}),Object(O.jsx)("th",{width:"40%",children:"Actions"})]})}),Object(O.jsx)("tbody",{children:e})]})]})]})}}]),n}(c.Component),S=n(30),w=n(17),T=n(24),D=n(50),F=n(51),I=n(52),N=n(53),P=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).emptyItem={name:"",email:""},c.state={item:c.emptyItem},c.handleChange=c.handleChange.bind(Object(h.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(h.a)(c)),c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(T.a)(Object(w.a)().mark((function e(){var t;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/clients/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,n=t.value,c=t.name,a=Object(S.a)({},this.state.item);a[c]=n,this.setState({item:a})}},{key:"handleSubmit",value:function(){var e=Object(T.a)(Object(w.a)().mark((function e(t){var n;return Object(w.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.item,e.next=4,fetch("/clients"+(n.id?"/"+n.id:""),{method:n.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:this.props.history.push("/clients");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item,t=Object(O.jsx)("h2",{children:e.id?"Edit Client":"Add Client"});return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)(p.a,{children:[t,Object(O.jsxs)(D.a,{onSubmit:this.handleSubmit,children:[Object(O.jsxs)(F.a,{children:[Object(O.jsx)(I.a,{for:"name",children:"Name"}),Object(O.jsx)(N.a,{type:"text",name:"name",id:"name",value:e.name||"",onChange:this.handleChange,autoComplete:"name"})]}),Object(O.jsxs)(F.a,{children:[Object(O.jsx)(I.a,{for:"email",children:"Email"}),Object(O.jsx)(N.a,{type:"text",name:"email",id:"email",value:e.email||"",onChange:this.handleChange,autoComplete:"email"})]}),Object(O.jsxs)(F.a,{children:[Object(O.jsx)(x.a,{color:"primary",type:"submit",children:"Save"})," ",Object(O.jsx)(x.a,{color:"secondary",tag:b.b,to:"/clients",children:"Cancel"})]})]})]})]})}}]),n}(c.Component),A=Object(y.f)(P),E=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsx)(b.a,{children:Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(y.a,{path:"/clients",exact:!0,component:k}),Object(O.jsx)(y.a,{path:"/clients/:id",component:A})]})})}}]),n}(c.Component),J=E,M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(42);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root")),M()}},[[43,1,2]]]);
//# sourceMappingURL=main.3e145d43.chunk.js.map