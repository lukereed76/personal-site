(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(n,e,t){"use strict";t.r(e);t(145);var r=t(8),i=t.n(r),a=t(52),o=t.n(a),c=t(141),l=t.n(c),s=t(0),u=t.n(s),p=t(146),m=t(142),f=(t(147),t(148)),d=t(149);t(155);function h(){var n=l()(["\n  font-family: 'Open Sans', sans-serif;\n  padding: 8px;\n  border: 3px solid #999;\n  background-color: rgba(0,0,0,0);\n  font-weight: 500;\n  letter-spacing: 1px;\n"]);return h=function(){return n},n}function g(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n"]);return g=function(){return n},n}function x(){var n=l()(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 9px auto;\n"]);return x=function(){return n},n}var b=m.a.div(x()),v=m.a.label(g()),w=m.a.input(h()),y=function(n){function e(){return n.apply(this,arguments)||this}return i()(e,n),e.prototype.render=function(){return u.a.createElement(b,null,u.a.createElement(v,{for:this.props.info.label_for},this.props.info.label_text),u.a.createElement(w,{type:this.props.info.input_type,name:this.props.info.name,id:this.props.info.id,required:this.props.info.required}))},e}(u.a.Component);function M(){var n=l()(["\n  height: 90px;\n  font-family: 'Open Sans', sans-serif;\n  padding: 8px;\n  border: 3px solid #999;\n  background-color: rgba(0,0,0,0);\n  font-weight: 500;\n  letter-spacing: 1px;\n"]);return M=function(){return n},n}function N(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding-bottom: 4px;\n"]);return N=function(){return n},n}function E(){var n=l()(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin: 9px auto;\n"]);return E=function(){return n},n}var j=m.a.div(E()),C=m.a.label(N()),_=m.a.textarea(M()),I=function(n){function e(){return n.apply(this,arguments)||this}return i()(e,n),e.prototype.render=function(){return u.a.createElement(j,null,u.a.createElement(C,{for:this.props.info.label_for},this.props.info.label_text),u.a.createElement(_,{name:this.props.info.name,type:this.props.info.input_type,id:this.props.info.id,required:this.props.info.required}))},e}(u.a.Component);function k(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  font-weight: 700;\n  font-size: 1.05em;\n  letter-spacing: 1px;\n  color: white;\n  background-color: #353535;\n  padding: 12px;\n  margin: 7px auto;\n  box-shadow: none;\n  border: none;\n  &:hover { cursor:pointer; }\n\n  @media (min-width: 820px) {\n    padding: 15px;\n    font-size: 1.1em;\n  }\n"]);return k=function(){return n},n}function L(){var n=l()(["\n  padding: 0;\n  margin: 2px auto 8px;\n"]);return L=function(){return n},n}function F(){var n=l()(["\n  width: 48%;\n  &:nth-child(2) {\n    margin-left: 4%;\n  }\n"]);return F=function(){return n},n}function z(){var n=l()(["\n  display: flex;\n  flex-direction: row;\n  align-content: space-between;\n  width: 100%;\n"]);return z=function(){return n},n}function S(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n"]);return S=function(){return n},n}function D(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 1.1em;\n  margin: 0px 8px;\n"]);return D=function(){return n},n}function O(){var n=l()(["\n  display: flex;\n  flex-direction: column;\n  width: 85%;\n  max-width: 635px;\n  height: ",";\n  overflow: hidden;\n  text-align: left;\n  background-color: #fff;\n  padding: ",";\n  margin: ",";\n  box-shadow: 0px 0px 8px #444;\n  transition: 300ms;\n"]);return O=function(){return n},n}var T=m.a.form(O(),function(n){return n.height},function(n){return n.padding},function(n){return n.margin}),P=m.a.legend(D()),Z=m.a.p(S()),G=m.a.div(z()),B=m.a.div(F()),H=m.a.div(L()),W=m.a.button(k()),K=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={first_name:{label_text:"First Name:*",label_for:"genFirstName",input_type:"text",name:"firstName",id:"genFirstName",required:!0},last_name:{label_text:"Last Name:",label_for:"genLastName",input_type:"text",name:"lastName",id:"genLastName",required:!1},email:{label_text:"Email:*",label_for:"genEmail",input_type:"email",name:"email",id:"genEmail",required:!0},textarea:{label_text:"Message:*",label_for:"genMessage",input_type:"text",name:"message",id:"genMessage",required:!0}},t}return i()(e,n),e.prototype.render=function(){return u.a.createElement(T,{height:this.props.open?"auto":"0px",padding:this.props.open?"20px":"0px",margin:this.props.open?"22px":"0px",id:"genForm",name:"genForm",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field"},u.a.createElement("input",{type:"hidden",name:"form-name",value:"genForm"}),u.a.createElement(P,null,"Have any questions or comments? Or just wanna say hi? Hit me up!"),u.a.createElement(Z,null,"* indicates required field"),u.a.createElement(G,null,u.a.createElement(B,null,u.a.createElement(y,{info:this.state.first_name})),u.a.createElement(B,null,u.a.createElement(y,{info:this.state.last_name}))),u.a.createElement(y,{info:this.state.email}),u.a.createElement(I,{info:this.state.textarea}),u.a.createElement(H,{"netlify-recaptcha":!0}),u.a.createElement(W,{type:"submit"},"Submit"))},e}(u.a.Component);function q(){var n=l()(["\n  height: 25px;\n  width: 25px;\n  background-color: rgba(0,0,0,0);\n  border-radius: 0;\n  &:hover { cursor:pointer; }\n"]);return q=function(){return n},n}function A(){var n=l()(["\nfont-family: 'Montserrat', 'Helvetica', sans-serif;\n\n  margin-left: 10px;\n  &:hover { cursor:pointer; }\n"]);return A=function(){return n},n}function V(){var n=l()(["\n  margin: 7px 25px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return V=function(){return n},n}var Y=m.a.div(V()),R=m.a.label(A()),Q=m.a.input(q()),U=function(n){function e(){return n.apply(this,arguments)||this}return i()(e,n),e.prototype.render=function(){return u.a.createElement(Y,null,u.a.createElement(Q,{type:this.props.info.input_type,id:this.props.info.id,name:this.props.info.name}),u.a.createElement(R,{for:this.props.info.label_for},this.props.info.label_text))},e}(u.a.Component);function J(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  font-weight: 700;\n  font-size: 1.05em;\n  letter-spacing: 1px;\n  color: white;\n  background-color: #353535;\n  padding: 12px;\n  margin: 7px auto;\n  box-shadow: none;\n  border: none;\n  &:hover { cursor:pointer; }\n\n  @media (min-width: 820px) {\n    padding: 15px;\n    font-size: 1.1em;\n  }\n"]);return J=function(){return n},n}function X(){var n=l()(["\n  padding: 0;\n  margin: 2px auto 8px;\n"]);return X=function(){return n},n}function $(){var n=l()(["\n  flex-direction: row;\n  align-items: center;\n  align-content: center;\n  margin: 25px;\n"]);return $=function(){return n},n}function nn(){var n=l()(["\n  width: 48%;\n  &:nth-child(2) {\n    margin-left: 4%;\n  }\n"]);return nn=function(){return n},n}function en(){var n=l()(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 100%;\n"]);return en=function(){return n},n}function tn(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n"]);return tn=function(){return n},n}function rn(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  font-weight: 700;\n  letter-spacing: 1px;\n  font-size: 1.1em;\n  margin: 0px 8px;\n"]);return rn=function(){return n},n}function an(){var n=l()(["\n  display: flex;\n  flex-direction: column;\n  align-content: space-between;\n  width: 85%;\n  max-width: 635px;\n  height: ",";\n  overflow: hidden;\n  text-align: left;\n  background-color: #fff;\n  padding: ",";\n  margin: ",";\n  box-shadow: 0px 0px 8px #444;\n  transition: 300ms;\n"]);return an=function(){return n},n}var on=m.a.form(an(),function(n){return n.height},function(n){return n.padding},function(n){return n.margin}),cn=m.a.legend(rn()),ln=m.a.p(tn()),sn=m.a.div(en()),un=m.a.div(nn()),pn=m.a.div($()),mn=m.a.div(X()),fn=m.a.button(J()),dn=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={first_name:{label_text:"First Name:*",label_for:"genFirstName",input_type:"text",name:"firstName",id:"genFirstName",required:!0},last_name:{label_text:"Last Name:",label_for:"genLastName",input_type:"text",name:"lastName",id:"genLastName",required:!1},email:{label_text:"Email:*",label_for:"genEmail",input_type:"email",name:"email",id:"genEmail",required:!0},company:{label_text:"Company:",label_for:"proCompany",input_type:"text",name:"company",id:"proCompany",required:!1},textarea:{label_text:"Message:*",label_for:"genMessage",input_type:"text",name:"message",id:"genMessage",required:!0},checkbox:{new_site:{label_text:"New Website",label_for:"newSite",input_type:"checkbox",id:"newSite",name:"new_site"},current_site:{label_text:"Work Done on Current Website",label_for:"currentSite",input_type:"checkbox",id:"currentSite",name:"current_site"},blog:{label_text:"Blog",label_for:"blog",input_type:"checkbox",id:"blog",name:"blog"},portfolio:{label_text:"Portfolio",label_for:"portfolio",input_type:"checkbox",id:"portfolio",name:"portfolio"},ecommerce:{label_text:"Online Store",label_for:"ecommerce",input_type:"checkbox",id:"ecommerce",name:"ecommerce"},not_sure:{label_text:"I'm not sure!",label_for:"notSure",input_type:"checkbox",id:"notSure",name:"unknown"}}},t}return i()(e,n),e.prototype.render=function(){return u.a.createElement(on,{height:this.props.open?"auto":"0px",padding:this.props.open?"20px":"0px",margin:this.props.open?"22px":"0px",id:"projectForm",name:"projectForm",method:"POST","data-netlify":"true","data-netlify-honeypot":"bot-field"},u.a.createElement("input",{type:"hidden",name:"form-name",value:"projectForm"}),u.a.createElement(cn,null,"I just need a quick overview of your project!"),u.a.createElement(ln,null,"* indicates required field"),u.a.createElement(sn,null,u.a.createElement(un,null,u.a.createElement(y,{info:this.state.first_name})),u.a.createElement(un,null,u.a.createElement(y,{info:this.state.last_name}))),u.a.createElement(y,{info:this.state.email}),u.a.createElement(y,{info:this.state.company}),u.a.createElement(pn,null,u.a.createElement(cn,null,"What services do you need done?"),u.a.createElement(U,{info:this.state.checkbox.new_site}),u.a.createElement(U,{info:this.state.checkbox.current_site}),u.a.createElement(U,{info:this.state.checkbox.blog}),u.a.createElement(U,{info:this.state.checkbox.portfolio}),u.a.createElement(U,{info:this.state.checkbox.ecommerce}),u.a.createElement(U,{info:this.state.checkbox.not_sure})),u.a.createElement(I,{info:this.state.textarea}),u.a.createElement(mn,{"data-netlify-recaptcha":!0}),u.a.createElement(fn,{type:"submit"},"Submit"))},e}(u.a.Component),hn=t(154);function gn(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  text-transform: uppercase;\n  font-weight: 700;\n  margin: 8px auto;\n  background-color: #fff;\n  padding: 10px;\n  border: none;\n  box-shadow: 0px 0px 8px #444;\n  transition: 225ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.14, 1.14);\n  }\n"]);return gn=function(){return n},n}function xn(){var n=l()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return xn=function(){return n},n}function bn(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  @media (min-width: 820px) {\n    font-size: 1.6em;\n  }\n"]);return bn=function(){return n},n}function vn(){var n=l()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  @media (min-width: 820px) {\n    font-size: 2em;\n  }\n"]);return vn=function(){return n},n}function wn(){var n=l()(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return wn=function(){return n},n}function yn(){var n=l()(["\n  padding: 15px;\n  margin: auto 0;\n  width: 88%;\n  max-width: 1125px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return yn=function(){return n},n}function Mn(){var n=l()(["\n  background-color: #fafafa;\n  width: 100%;\n  padding: 12px 0 24px;\n  margin: 2px auto;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n"]);return Mn=function(){return n},n}function Nn(){var n=l()(["\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: auto 0;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: top;\n"]);return Nn=function(){return n},n}var En=m.a.div(Nn()),jn=m.a.div(Mn()),Cn=m.a.div(yn()),_n=m.a.div(wn()),In=m.a.h2(vn()),kn=m.a.h3(bn()),Ln=m.a.div(xn()),Fn=m.a.button(gn()),zn=function(n){function e(e){var t;return(t=n.call(this,e)||this).openMobileNav=t.openMobileNav.bind(o()(o()(t))),t.closeMobileNav=t.closeMobileNav.bind(o()(o()(t))),t.showGenForm=t.showGenForm.bind(o()(o()(t))),t.hideGenForm=t.hideGenForm.bind(o()(o()(t))),t.showProjectForm=t.showProjectForm.bind(o()(o()(t))),t.hideProjectForm=t.hideProjectForm.bind(o()(o()(t))),t.state={mobileNavIsOpen:!1,bgImg:"./images/yellow-telephone.jpg",genFormOpen:!1,proFormOpen:!1},t}i()(e,n);var t=e.prototype;return t.openMobileNav=function(){this.setState({mobileNavIsOpen:!0})},t.closeMobileNav=function(){this.setState({mobileNavIsOpen:!1})},t.showGenForm=function(){this.state.proFormOpen&&this.setState({proFormOpen:!1}),this.setState({genFormOpen:!0})},t.hideGenForm=function(){this.setState({genFormOpen:!1})},t.showProjectForm=function(){this.state.genFormOpen&&this.setState({genFormOpen:!1}),this.setState({proFormOpen:!0})},t.hideProjectForm=function(){this.setState({proFormOpen:!1})},t.render=function(){return u.a.createElement(En,null,u.a.createElement(p.Helmet,null,u.a.createElement("meta",{charSet:"utf-8"}),u.a.createElement("title",null,"Contact Me - Jacob D. Castro"),u.a.createElement("link",{rel:"stylesheet",src:"//normalize-css.googlecode.com/svn/trunk/normalize.css"}),u.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,700",rel:"stylesheet"})),u.a.createElement(f.a,{action:this.closeMobileNav,open:this.state.mobileNavIsOpen}),u.a.createElement(d.a,{action:this.openMobileNav,headline:"Let's Chat",aboutPage:!1}),u.a.createElement(jn,null,u.a.createElement(Cn,null,u.a.createElement(_n,null,u.a.createElement(In,null,"I can't wait to hear from you!"),u.a.createElement(kn,null,"So, what do you need?"),u.a.createElement(Ln,null,u.a.createElement(Fn,{id:"genBtn",onClick:this.state.genFormOpen?this.hideGenForm:this.showGenForm},"Question or Comment"),u.a.createElement(Fn,{id:"protBtn",onClick:this.state.proFormOpen?this.hideProjectForm:this.showProjectForm},"I need a website built!"))),u.a.createElement(K,{open:this.state.genFormOpen}),u.a.createElement(dn,{open:this.state.proFormOpen})),u.a.createElement(hn.a,{backgroundIsBlack:!1})))},e}(u.a.Component);e.default=zn},149:function(n,e,t){"use strict";var r=t(8),i=t.n(r),a=t(141),o=t.n(a),c=t(0),l=t.n(c),s=t(142),u=t(150),p=t(151),m=t.n(p),f=t(152),d=t.n(f),h=t(153),g=t.n(h);function x(){var n=o()(["\n  height: 33px;\n  width: auto;\n  fill: #000;\n  padding-bottom: 11px;\n\n  @media (min-width: 820px) {\n    height: 42px;\n  }\n"]);return x=function(){return n},n}function b(){var n=o()(["\n  font-family: 'Montserrat', 'Helvetica', sans-serif;\n  color: #fff;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n\n  @media (min-width: 820px) {\n    font-size: 2.55em;\n    letter-spacing: 9px;\n  }\n\n  @media (min-width: 1080px) {\n    font-size: 3.15em;\n    letter-spacing: 12px;\n  }\n"]);return b=function(){return n},n}function v(){var n=o()(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.4);\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n"]);return v=function(){return n},n}function w(){var n=o()(["\n  display: flex;\n  justify-content: space-around;\n  flex-direction: column;\n  height: 500px;\n  width: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  margin: 0;\n  padding: 0;\n\n  @media (min-width: 820px) {\n    height: 650px;\n  }\n"]);return w=function(){return n},n}var y=s.a.div(w(),function(n){return n.about?m.a:d.a}),M=s.a.div(v()),N=s.a.h1(b()),E=s.a.img(x()),j=function(n){function e(){return n.apply(this,arguments)||this}return i()(e,n),e.prototype.render=function(){return l.a.createElement(y,{about:this.props.aboutPage},l.a.createElement(M,null,l.a.createElement(u.a,{action:this.props.action}),l.a.createElement(N,null,this.props.headline),l.a.createElement(E,{src:g.a,alt:"down arrow icon"})))},e}(l.a.Component);e.a=j},151:function(n,e,t){n.exports=t.p+"static/cave-302155c4882881a14f5258b28784d575.jpg"},152:function(n,e,t){n.exports=t.p+"static/yellow-telephone-bcee2068463ce65995d5fae7479b9ec1.jpg"},153:function(n,e){n.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgMjg0LjkyOSAyODQuOTI5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyODQuOTI5IDI4NC45Mjk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMjgyLjA4Miw3Ni41MTFsLTE0LjI3NC0xNC4yNzNjLTEuOTAyLTEuOTA2LTQuMDkzLTIuODU2LTYuNTctMi44NTZjLTIuNDcxLDAtNC42NjEsMC45NS02LjU2MywyLjg1NkwxNDIuNDY2LDE3NC40NDEgICBMMzAuMjYyLDYyLjI0MWMtMS45MDMtMS45MDYtNC4wOTMtMi44NTYtNi41NjctMi44NTZjLTIuNDc1LDAtNC42NjUsMC45NS02LjU2NywyLjg1NkwyLjg1Niw3Ni41MTVDMC45NSw3OC40MTcsMCw4MC42MDcsMCw4My4wODIgICBjMCwyLjQ3MywwLjk1Myw0LjY2MywyLjg1Niw2LjU2NWwxMzMuMDQzLDEzMy4wNDZjMS45MDIsMS45MDMsNC4wOTMsMi44NTQsNi41NjcsMi44NTRzNC42NjEtMC45NTEsNi41NjItMi44NTRMMjgyLjA4Miw4OS42NDcgICBjMS45MDItMS45MDMsMi44NDctNC4wOTMsMi44NDctNi41NjVDMjg0LjkyOSw4MC42MDcsMjgzLjk4NCw3OC40MTcsMjgyLjA4Miw3Ni41MTF6IiBmaWxsPSIjZmZmZmZmIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="},155:function(n,e,t){var r=t(27).f,i=Function.prototype,a=/^\s*function ([^ (]*)/;"name"in i||t(17)&&r(i,"name",{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(n){return""}}})}}]);
//# sourceMappingURL=component---src-pages-contact-js-06a9ef1e884bb06f325c.js.map