(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{25:function(e,t,n){},36:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(27),r=n.n(a),s=(n(36),n(13)),j=n(14),o=n(15),l=n(16),h=(n(25),n(9)),d=n(45),b=n(46),u=n(11),O=n(2),p=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={isOpen:!1},c.toggle=c.toggle.bind(Object(h.a)(c)),c}return Object(j.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(O.jsx)(d.a,{color:"dark",dark:!0,expand:"md",children:Object(O.jsx)(b.a,{tag:u.b,to:"/",children:"Home"})})}}]),n}(c.Component),m=n(47),x=n(48),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{}),Object(O.jsx)(m.a,{fluid:!0,children:Object(O.jsx)(x.a,{color:"link",children:Object(O.jsx)(u.b,{to:"/clients",children:"Clients"})})})]})}}]),n}(c.Component),v=f,y=n(6),g=n(49),C=n(50),k=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={clients:[]},c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/clients").then((function(e){return e.json()})).then((function(t){return e.setState({clients:t})}))}},{key:"render",value:function(){var e=this.state.clients.map((function(e){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.name}),Object(O.jsx)("td",{children:Object(O.jsx)(g.a,{children:Object(O.jsx)(x.a,{size:"sm",color:"primary",tag:u.b,to:"/clients/"+e.id,children:"Config"})})})]},e.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{}),Object(O.jsxs)(m.a,{fluid:!0,children:[Object(O.jsx)("h3",{children:"Clients"}),Object(O.jsxs)(C.a,{className:"mt-4",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{width:"30%",children:"Name"}),Object(O.jsx)("th",{width:"40%",children:"Actions"})]})}),Object(O.jsx)("tbody",{children:e})]})]})]})}}]),n}(c.Component),w=n(31),S=n(17),E=n(18),T=n(51),A=n(52),D=n(53),N=n(54),P=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).emptyItem={name:"",email:""},c.state={item:c.emptyItem},c.handleChange=c.handleChange.bind(Object(h.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(h.a)(c)),c}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(E.a)(Object(S.a)().mark((function e(){var t;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.id){e.next=7;break}return e.next=3,fetch("/clients/".concat(this.props.match.params.id));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,n=t.value,c=t.name,i=Object(w.a)({},this.state.item);i[c]=n,this.setState({item:i})}},{key:"handleSubmit",value:function(){var e=Object(E.a)(Object(S.a)().mark((function e(t){var n;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.item,e.next=4,fetch("/clients"+(n.id?"/"+n.id:""),{method:n.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:this.props.history.push("/clients");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item,t=Object(O.jsx)("h2",{children:e.id?"Edit Client":"Add Client"});return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{}),Object(O.jsxs)(m.a,{children:[t,Object(O.jsxs)(T.a,{onSubmit:this.handleSubmit,children:[Object(O.jsxs)(A.a,{children:[Object(O.jsx)(D.a,{for:"name",children:"Name"}),Object(O.jsx)(N.a,{type:"text",name:"name",id:"name",value:e.name||"",onChange:this.handleChange,autoComplete:"name"})]}),Object(O.jsxs)(A.a,{children:[Object(O.jsx)(D.a,{for:"email",children:"Email"}),Object(O.jsx)(N.a,{type:"text",name:"email",id:"email",value:e.email||"",onChange:this.handleChange,autoComplete:"email"})]}),Object(O.jsxs)(A.a,{children:[Object(O.jsx)(x.a,{color:"primary",type:"submit",children:"Save"})," ",Object(O.jsx)(x.a,{color:"secondary",tag:u.b,to:"/clients",children:"Cancel"})]})]})]})]})}}]),n}(c.Component),F=Object(y.f)(P),I=n(30),z=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(e){var c;return Object(s.a)(this,n),(c=t.call(this,e)).state={configs:[]},c.remove=c.remove.bind(Object(h.a)(c)),c}return Object(j.a)(n,[{key:"remove",value:function(){var e=Object(E.a)(Object(S.a)().mark((function e(t){var n=this;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/clients/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){var e=Object(I.a)(n.state.configs).filter((function(e){return e.id!==t}));n.setState({configs:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.configs.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.keyParams}),Object(O.jsx)("td",{children:t.value}),Object(O.jsx)("td",{children:Object(O.jsxs)(g.a,{children:[Object(O.jsx)(x.a,{size:"sm",color:"primary",tag:u.b,to:"/clients/"+t.id,children:"Edit"}),Object(O.jsx)(x.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.id)},children:"Delete"})]})})]},t.id)}));return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{}),Object(O.jsxs)(m.a,{fluid:!0,children:[Object(O.jsx)("div",{className:"float-right",children:Object(O.jsx)(x.a,{color:"success",tag:u.b,to:"/clients/config/new",children:"Add Config"})}),Object(O.jsx)("h3",{children:"Configurations"}),Object(O.jsxs)(C.a,{className:"mt-4",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{width:"30%",children:"Key"}),Object(O.jsx)("th",{width:"30%",children:"Value"}),Object(O.jsx)("th",{width:"40%",children:"Actions"})]})}),Object(O.jsx)("tbody",{children:t})]})]})]})}}]),n}(c.Component),J=z,L=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(O.jsx)(u.a,{children:Object(O.jsxs)(y.c,{children:[Object(O.jsx)(y.a,{path:"/",exact:!0,component:v}),Object(O.jsx)(y.a,{path:"/clients",exact:!0,component:k}),Object(O.jsx)(y.a,{path:"/clients/:fk_client_id",exact:!0,component:J}),Object(O.jsx)(y.a,{path:"/clients/:id",component:F})]})})}}]),n}(c.Component),M=L,B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};n(43);r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(M,{})}),document.getElementById("root")),B()}},[[44,1,2]]]);
//# sourceMappingURL=main.f8f2c6b1.chunk.js.map