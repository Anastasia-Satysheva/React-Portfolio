(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{62:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t);var n=a(81),l=a(9),r=a(10),m=a(12),s=a(11),i=a(0),o=a.n(i),c=(a(62),a(63)),u=a.n(c).a.create({baseURL:"https://anastasia-satysheva.firebaseio.com/"}),h=a(1),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,m=new Array(r),s=0;s<r;s++)m[s]=arguments[s];return(e=t.call.apply(t,[this].concat(m))).state={name:"",email:"",msg:"",submitted:!1},e.postForm=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,msg:e.state.msg};u.post("/contact.json",a).then((function(t){console.log(t),e.setState({submitted:!0})})).catch((function(e){console.log(e)}))},e.inputChangedHandler=function(t,a){var l=Object(n.a)({},e.state);l[a]=t.target.value,e.setState(l)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(i.Fragment,null,this.state.submitted?o.a.createElement(h.a,{to:"/"}):null,o.a.createElement("h1",null,"Contact"),o.a.createElement("hr",{className:"hr__content"}),o.a.createElement("form",{className:"contact-form standard-text",onSubmit:this.postForm},o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"name"},"Name"),o.a.createElement("input",{type:"text",id:"name",name:"user_name",placeholder:"John Smith",value:this.state.name,onChange:function(t){return e.inputChangedHandler(t,"name")}})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"mail"},"Email"),o.a.createElement("input",{type:"email",id:"mail",name:"user_mail",placeholder:"example@gmail.com",value:this.state.email,onChange:function(t){return e.inputChangedHandler(t,"email")}})),o.a.createElement("div",null,o.a.createElement("label",{htmlFor:"msg"},"Message"),o.a.createElement("textarea",{id:"msg",name:"user_message",value:this.state.msg,onChange:function(t){return e.inputChangedHandler(t,"msg")}})),o.a.createElement("button",{type:"submit"},"Submit")))}}]),a}(i.Component);t.default=p}}]);
//# sourceMappingURL=5.c4e89bcd.chunk.js.map