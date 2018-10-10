(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t);n(147);var a=n(8),i=n.n(a),o=n(52),r=n.n(o),l=n(0),m=n.n(l),c=n(148),s=n(144),p=(n(149),n(150)),d=n(151),f=(n(157),s.a.div.withConfig({displayName:"FormLine__Container",componentId:"dir20q-0"})(["display:flex;flex-direction:column;width:100%;margin:9px auto;"])),g=s.a.label.withConfig({displayName:"FormLine__Label",componentId:"dir20q-1"})(["font-family:'Montserrat','Helvetica',sans-serif;font-weight:700;letter-spacing:1px;padding-bottom:4px;"]),h=s.a.input.withConfig({displayName:"FormLine__Input",componentId:"dir20q-2"})(["font-family:'Open Sans',sans-serif;padding:8px;border:3px solid #999;background-color:rgba(0,0,0,0);font-weight:500;letter-spacing:1px;"]),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return m.a.createElement(f,null,m.a.createElement(g,{for:this.props.info.label_for},this.props.info.label_text),m.a.createElement(h,{type:this.props.info.input_type,name:this.props.info.name,id:this.props.info.id,required:this.props.info.required}))},t}(m.a.Component),x=s.a.div.withConfig({displayName:"TextArea__Container",componentId:"p7k24p-0"})(["display:flex;flex-direction:column;width:100%;margin:9px auto;"]),y=s.a.label.withConfig({displayName:"TextArea__Label",componentId:"p7k24p-1"})(["font-family:'Montserrat','Helvetica',sans-serif;font-weight:700;letter-spacing:1px;padding-bottom:4px;"]),w=s.a.textarea.withConfig({displayName:"TextArea__Textarea",componentId:"p7k24p-2"})(["height:90px;font-family:'Open Sans',sans-serif;padding:8px;border:3px solid #999;background-color:rgba(0,0,0,0);font-weight:500;letter-spacing:1px;"]),b=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return m.a.createElement(x,null,m.a.createElement(y,{for:this.props.info.label_for},this.props.info.label_text),m.a.createElement(w,{name:this.props.info.name,type:this.props.info.input_type,id:this.props.info.id,required:this.props.info.required}))},t}(m.a.Component),_=s.a.form.withConfig({displayName:"GeneralForm__Form",componentId:"vgmn2l-0"})(["display:flex;flex-direction:column;width:85%;max-width:635px;height:",";overflow:hidden;text-align:left;background-color:#fff;padding:",";margin:",";box-shadow:0px 0px 8px #444;transition:300ms;"],function(e){return e.height},function(e){return e.padding},function(e){return e.margin}),N=s.a.legend.withConfig({displayName:"GeneralForm__Legend",componentId:"vgmn2l-1"})(["font-family:'Montserrat','Helvetica',sans-serif;font-weight:700;letter-spacing:1px;font-size:1.1em;margin:0px 8px;"]),C=s.a.p.withConfig({displayName:"GeneralForm__ReqText",componentId:"vgmn2l-2"})(["font-family:'Montserrat','Helvetica',sans-serif;"]),M=s.a.div.withConfig({displayName:"GeneralForm__NameSection",componentId:"vgmn2l-3"})(["display:flex;flex-direction:row;align-content:space-between;width:100%;"]),j=s.a.div.withConfig({displayName:"GeneralForm__NameLine",componentId:"vgmn2l-4"})(["width:48%;&:nth-child(2){margin-left:4%;}"]),v=s.a.div.withConfig({displayName:"GeneralForm__Recaptcha",componentId:"vgmn2l-5"})(["padding:0;margin:2px auto 8px;"]),I=s.a.button.withConfig({displayName:"GeneralForm__SubmitBtn",componentId:"vgmn2l-6"})(["font-family:'Montserrat','Helvetica',sans-serif;font-weight:700;font-size:1.05em;letter-spacing:1px;color:white;background-color:#353535;padding:12px;margin:7px auto;box-shadow:none;border:none;&:hover{cursor:pointer;}@media (min-width:820px){padding:15px;font-size:1.1em;}"]),E=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={first_name:{label_text:"First Name:*",label_for:"genFirstName",input_type:"text",name:"firstName",id:"genFirstName",required:!0},last_name:{label_text:"Last Name:",label_for:"genLastName",input_type:"text",name:"lastName",id:"genLastName",required:!1},email:{label_text:"Email:*",label_for:"genEmail",input_type:"email",name:"email",id:"genEmail",required:!0},textarea:{label_text:"Message:*",label_for:"genMessage",input_type:"text",name:"message",id:"genMessage",required:!0}},n}return i()(t,e),t.prototype.render=function(){return m.a.createElement(_,{height:this.props.open?"auto":"0px",padding:this.props.open?"20px":"0px",margin:this.props.open?"22px":"0px",id:"genForm",name:"genForm",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field"},m.a.createElement("input",{type:"hidden",name:"form-name",value:"genForm"}),m.a.createElement(N,null,"Have any questions or comments? Or just wanna say hi? Hit me up!"),m.a.createElement(C,null,"* indicates required field"),m.a.createElement(M,null,m.a.createElement(j,null,m.a.createElement(u,{info:this.state.first_name})),m.a.createElement(j,null,m.a.createElement(u,{info:this.state.last_name}))),m.a.createElement(u,{info:this.state.email}),m.a.createElement(b,{info:this.state.textarea}),m.a.createElement(v,{"netlify-recaptcha":!0}),m.a.createElement(I,{type:"submit"},"Submit"))},t}(m.a.Component),F=s.a.div.withConfig({displayName:"Checkbox__CheckLine",componentId:"qgagjg-0"})(["margin:7px 25px;display:flex;flex-direction:row;align-items:center;"]),k=s.a.label.withConfig({displayName:"Checkbox__CheckboxLabel",componentId:"qgagjg-1"})(["font-family:'Montserrat','Helvetica',sans-serif;margin-left:10px;&:hover{cursor:pointer;}"]),L=s.a.input.withConfig({displayName:"Checkbox",componentId:"qgagjg-2"})(["height:25px;width:25px;background-color:rgba(0,0,0,0);border-radius:0;&:hover{cursor:pointer;}"]),S=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return m.a.createElement(F,null,m.a.createElement(L,{type:this.props.info.input_type,id:this.props.info.id,name:this.props.info.name}),m.a.createElement(k,{for:this.props.info.label_for},this.props.info.label_text))},t}(m.a.Component),z=s.a.form.withConfig({displayName:"ProjectForm__Form",componentId:"yr8yj8-0"})(["display:flex;flex-direction:column;align-content:space-between;width:85%;max-width:635px;height:",";overflow:hidden;text-align:left;background-color:#fff;padding:",";margin:",";box-shadow:0px 0px 8px #444;transition:300ms;"],function(e){return e.height},function(e){return e.padding},function(e){return e.margin}),P=s.a.legend.withConfig({displayName:"ProjectForm__Legend",componentId:"yr8yj8-1"})(["font-family:'Montserrat','Helvetica',sans-serif;font-weight:700;letter-spacing:1px;font-size:1.1em;margin:0px 8px;"]),T=s.a.p.withConfig({displayName:"ProjectForm__ReqText",componentId:"yr8yj8-2"})(["font-family:'Montserrat','Helvetica',sans-serif;"]),D=s.a.div.withConfig({displayName:"ProjectForm__NameSection",componentId:"yr8yj8-3"})(["display:flex;flex-direction:row;align-items:center;width:100%;"]),O=s.a.div.withConfig({displayName:"ProjectForm__NameLine",componentId:"yr8yj8-4"})(["width:48%;&:nth-child(2){margin-left:4%;}"]),G=s.a.div.withConfig({displayName:"ProjectForm__ServicesSection",componentId:"yr8yj8-5"})(["flex-direction:row;align-items:center;align-content:center;margin:25px;"]),B=s.a.div.withConfig({displayName:"ProjectForm__Recaptcha",componentId:"yr8yj8-6"})(["padding:0;margin:2px auto 8px;"]),Z=s.a.button.withConfig({displayName:"ProjectForm__SubmitBtn",componentId:"yr8yj8-7"})(["font-family:'Montserrat','Helvetica',sans-serif;font-weight:700;font-size:1.05em;letter-spacing:1px;color:white;background-color:#353535;padding:12px;margin:7px auto;box-shadow:none;border:none;&:hover{cursor:pointer;}@media (min-width:820px){padding:15px;font-size:1.1em;}"]),H=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={first_name:{label_text:"First Name:*",label_for:"genFirstName",input_type:"text",name:"firstName",id:"genFirstName",required:!0},last_name:{label_text:"Last Name:",label_for:"genLastName",input_type:"text",name:"lastName",id:"genLastName",required:!1},email:{label_text:"Email:*",label_for:"genEmail",input_type:"email",name:"email",id:"genEmail",required:!0},company:{label_text:"Company:",label_for:"proCompany",input_type:"text",name:"company",id:"proCompany",required:!1},textarea:{label_text:"Message:*",label_for:"genMessage",input_type:"text",name:"message",id:"genMessage",required:!0},checkbox:{new_site:{label_text:"New Website",label_for:"newSite",input_type:"checkbox",id:"newSite",name:"new_site"},current_site:{label_text:"Work Done on Current Website",label_for:"currentSite",input_type:"checkbox",id:"currentSite",name:"current_site"},blog:{label_text:"Blog",label_for:"blog",input_type:"checkbox",id:"blog",name:"blog"},portfolio:{label_text:"Portfolio",label_for:"portfolio",input_type:"checkbox",id:"portfolio",name:"portfolio"},ecommerce:{label_text:"Online Store",label_for:"ecommerce",input_type:"checkbox",id:"ecommerce",name:"ecommerce"},not_sure:{label_text:"I'm not sure!",label_for:"notSure",input_type:"checkbox",id:"notSure",name:"unknown"}}},n}return i()(t,e),t.prototype.render=function(){return m.a.createElement(z,{height:this.props.open?"auto":"0px",padding:this.props.open?"20px":"0px",margin:this.props.open?"22px":"0px",id:"projectForm",name:"projectForm",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field"},m.a.createElement("input",{type:"hidden",name:"form-name",value:"projectForm"}),m.a.createElement(P,null,"I just need a quick overview of your project!"),m.a.createElement(T,null,"* indicates required field"),m.a.createElement(D,null,m.a.createElement(O,null,m.a.createElement(u,{info:this.state.first_name})),m.a.createElement(O,null,m.a.createElement(u,{info:this.state.last_name}))),m.a.createElement(u,{info:this.state.email}),m.a.createElement(u,{info:this.state.company}),m.a.createElement(G,null,m.a.createElement(P,null,"What services do you need done?"),m.a.createElement(S,{info:this.state.checkbox.new_site}),m.a.createElement(S,{info:this.state.checkbox.current_site}),m.a.createElement(S,{info:this.state.checkbox.blog}),m.a.createElement(S,{info:this.state.checkbox.portfolio}),m.a.createElement(S,{info:this.state.checkbox.ecommerce}),m.a.createElement(S,{info:this.state.checkbox.not_sure})),m.a.createElement(b,{info:this.state.textarea}),m.a.createElement(B,{"data-netlify-recaptcha":!0}),m.a.createElement(Z,{type:"submit"},"Submit"))},t}(m.a.Component),q=n(156),A=s.a.div.withConfig({displayName:"contact__Container",componentId:"oor64t-0"})(["height:100%;width:100%;margin:0;padding:auto 0;background-repeat:no-repeat;background-size:cover;background-position:top;"]),W=s.a.div.withConfig({displayName:"contact__MainContent",componentId:"oor64t-1"})(["background-color:#fafafa;width:100%;padding:12px 0 24px;margin:2px auto;display:flex;flex-direction:column;justify-content:space-between;align-items:center;"]),K=s.a.div.withConfig({displayName:"contact__Body",componentId:"oor64t-2"})(["padding:15px;margin:auto 0;width:88%;max-width:1125px;display:flex;flex-direction:column;align-items:center;"]),R=s.a.div.withConfig({displayName:"contact__FormsHeader",componentId:"oor64t-3"})(["display:flex;flex-direction:column;align-items:center;"]),V=s.a.h2.withConfig({displayName:"contact__FormH2",componentId:"oor64t-4"})(["font-family:'Montserrat','Helvetica',sans-serif;@media (min-width:820px){font-size:2em;}"]),Y=s.a.h3.withConfig({displayName:"contact__FormH3",componentId:"oor64t-5"})(["font-family:'Montserrat','Helvetica',sans-serif;@media (min-width:820px){font-size:1.6em;}"]),Q=s.a.div.withConfig({displayName:"contact__FormBtnContainer",componentId:"oor64t-6"})(["display:flex;flex-direction:column;align-items:center;"]),U=s.a.button.withConfig({displayName:"contact__FormButton",componentId:"oor64t-7"})(["font-family:'Montserrat','Helvetica',sans-serif;text-transform:uppercase;font-weight:700;margin:8px auto;background-color:#fff;padding:10px;border:none;box-shadow:0px 0px 8px #444;transition:225ms;&:hover{cursor:pointer;transform:scale(1.14,1.14);}"]),J=function(e){function t(t){var n;return(n=e.call(this,t)||this).openMobileNav=n.openMobileNav.bind(r()(r()(n))),n.closeMobileNav=n.closeMobileNav.bind(r()(r()(n))),n.showGenForm=n.showGenForm.bind(r()(r()(n))),n.hideGenForm=n.hideGenForm.bind(r()(r()(n))),n.showProjectForm=n.showProjectForm.bind(r()(r()(n))),n.hideProjectForm=n.hideProjectForm.bind(r()(r()(n))),n.state={mobileNavIsOpen:!1,bgImg:"./images/yellow-telephone.jpg",genFormOpen:!1,proFormOpen:!1},n}i()(t,e);var n=t.prototype;return n.openMobileNav=function(){this.setState({mobileNavIsOpen:!0})},n.closeMobileNav=function(){this.setState({mobileNavIsOpen:!1})},n.showGenForm=function(){this.state.proFormOpen&&this.setState({proFormOpen:!1}),this.setState({genFormOpen:!0})},n.hideGenForm=function(){this.setState({genFormOpen:!1})},n.showProjectForm=function(){this.state.genFormOpen&&this.setState({genFormOpen:!1}),this.setState({proFormOpen:!0})},n.hideProjectForm=function(){this.setState({proFormOpen:!1})},n.render=function(){return m.a.createElement(A,null,m.a.createElement(c.Helmet,null,m.a.createElement("meta",{charSet:"utf-8"}),m.a.createElement("title",null,"Contact Me - Jacob D. Castro"),m.a.createElement("link",{rel:"stylesheet",src:"//normalize-css.googlecode.com/svn/trunk/normalize.css"}),m.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,700",rel:"stylesheet"})),m.a.createElement(p.a,{action:this.closeMobileNav,open:this.state.mobileNavIsOpen}),m.a.createElement(d.a,{action:this.openMobileNav,headline:"Let's Chat",aboutPage:!1}),m.a.createElement(W,null,m.a.createElement(K,null,m.a.createElement(R,null,m.a.createElement(V,null,"I can't wait to hear from you!"),m.a.createElement(Y,null,"So, what do you need?"),m.a.createElement(Q,null,m.a.createElement(U,{id:"genBtn",onClick:this.state.genFormOpen?this.hideGenForm:this.showGenForm},"Question or Comment"),m.a.createElement(U,{id:"protBtn",onClick:this.state.proFormOpen?this.hideProjectForm:this.showProjectForm},"I need a website built!"))),m.a.createElement(E,{open:this.state.genFormOpen}),m.a.createElement(H,{open:this.state.proFormOpen})),m.a.createElement(q.a,{backgroundIsBlack:!1})))},t}(m.a.Component);t.default=J},151:function(e,t,n){"use strict";var a=n(8),i=n.n(a),o=n(0),r=n.n(o),l=n(144),m=n(152),c=n(153),s=n.n(c),p=n(154),d=n.n(p),f=n(155),g=n.n(f),h=l.a.div.withConfig({displayName:"PageIntro__Header",componentId:"sc-2zyahe-0"})(["display:flex;justify-content:space-around;flex-direction:column;height:500px;width:100%;background-image:url(",");background-size:cover;background-position:center;margin:0;padding:0;@media (min-width:820px){height:650px;}"],function(e){return e.about?s.a:d.a}),u=l.a.div.withConfig({displayName:"PageIntro__BlackLayer",componentId:"sc-2zyahe-1"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;background-color:rgba(0,0,0,0.4);height:100%;width:100%;margin:0;padding:0;"]),x=l.a.h1.withConfig({displayName:"PageIntro__Headline",componentId:"sc-2zyahe-2"})(["font-family:'Montserrat','Helvetica',sans-serif;color:#fff;text-transform:uppercase;letter-spacing:4px;@media (min-width:820px){font-size:2.55em;letter-spacing:9px;}@media (min-width:1080px){font-size:3.15em;letter-spacing:12px;}"]),y=l.a.img.withConfig({displayName:"PageIntro__DownArrow",componentId:"sc-2zyahe-3"})(["height:33px;width:auto;fill:#000;padding-bottom:11px;@media (min-width:820px){height:42px;}"]),w=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(h,{about:this.props.aboutPage},r.a.createElement(u,null,r.a.createElement(m.a,{action:this.props.action}),r.a.createElement(x,null,this.props.headline),r.a.createElement(y,{src:g.a,alt:"down arrow icon"})))},t}(r.a.Component);t.a=w},153:function(e,t,n){e.exports=n.p+"static/cave-302155c4882881a14f5258b28784d575.jpg"},154:function(e,t,n){e.exports=n.p+"static/yellow-telephone-bcee2068463ce65995d5fae7479b9ec1.jpg"},155:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMjg0LjkyOSAyODQuOTI5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOTI5IDI4NC45Mjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjgyLjA4Miw3Ni41MTFsLTE0LjI3NC0xNC4yNzNjLTEuOTAyLTEuOTA2LTQuMDkzLTIuODU2LTYuNTctMi44NTZjLTIuNDcxLDAtNC42NjEsMC45NS02LjU2MywyLjg1NkwxNDIuNDY2LDE3NC40NDEgICBMMzAuMjYyLDYyLjI0MWMtMS45MDMtMS45MDYtNC4wOTMtMi44NTYtNi41NjctMi44NTZjLTIuNDc1LDAtNC42NjUsMC45NS02LjU2NywyLjg1NkwyLjg1Niw3Ni41MTVDMC45NSw3OC40MTcsMCw4MC42MDcsMCw4My4wODIgICBjMCwyLjQ3MywwLjk1Myw0LjY2MywyLjg1Niw2LjU2NWwxMzMuMDQzLDEzMy4wNDZjMS45MDIsMS45MDMsNC4wOTMsMi44NTQsNi41NjcsMi44NTRzNC42NjEtMC45NTEsNi41NjItMi44NTRMMjgyLjA4Miw4OS42NDcgICBjMS45MDItMS45MDMsMi44NDctNC4wOTMsMi44NDctNi41NjVDMjg0LjkyOSw4MC42MDcsMjgzLjk4NCw3OC40MTcsMjgyLjA4Miw3Ni41MTF6IiBmaWxsPSIjZmZmZmZmIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="},157:function(e,t,n){var a=n(27).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||n(17)&&a(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-ce844922649a0da2154a.js.map