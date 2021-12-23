(this.webpackJsonpmyappp=this.webpackJsonpmyappp||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(16),r=a.n(n),l=(a(22),a(10)),o=(a(23),a(8)),i=a(0);function d(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)(o.b,{className:"navbar-brand",to:"/",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link","aria-current":"page",to:"/",children:"Home"})}),Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)(o.b,{className:"nav-link",to:"/about",children:e.aboutText})})]}),Object(i.jsx)("div",{className:"d-flex"}),Object(i.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(i.jsx)("input",{className:"form-check-input",onClick:function(){e.toggleMode()},type:"checkbox",id:"flexSwitchCheckDefault"}),Object(i.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],n=a[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h1",{className:"mb-4",children:e.heading}),Object(i.jsx)("div",{className:"mb-3",children:Object(i.jsx)("textarea",{className:"form-control",value:s,onChange:function(e){n(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#13466e":"white",color:"dark"===e.mode?"white":"#042743"},id:"myBox",rows:"10"})}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toUpperCase();n(t),e.showAlert("Converted to Uppercase","success")},children:"Convert to Uppercase"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();n(t),e.showAlert("Converted to Lowercase","success")},children:"Convert to Lowercase"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){n(""),e.showAlert("Text cleared","success")},children:"Clear Text"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){for(var t=s.toLowerCase().split(" "),a=0;a<t.length;a++)t[a]=t[a].charAt(0).toUpperCase()+t[a].slice(1);n(t.join(" ")),e.showAlert("Titlecase enabled","success")},children:"Convert First letter in Capital"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(s),e.showAlert("Text copied","success")},children:"Copy Text"}),Object(i.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);n(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:"Remove Extra Spaces"})]}),Object(i.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"#042743"},children:[Object(i.jsx)("h2",{children:"Your text summary"}),Object(i.jsxs)("p",{children:[s.split(/\S+/).filter((function(e){return 0!==e.length})).length," words and ",s.length," characters"]}),Object(i.jsxs)("p",{children:[.008*s.split(" ").filter((function(e){return 0!==e.length})).length," minutes to read"]}),Object(i.jsx)("h2",{children:"Preview"}),Object(i.jsx)("p",{children:s.length>0?s:"Nothing to preview"})]})]})}function h(e){var t={color:"dark"===e.mode?"white":"black",backgroundColor:"dark"===e.mode?"rgb(36 74 104)":"white"};return Object(i.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(i.jsx)("h2",{className:"my-2",children:"About Us"}),Object(i.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(i.jsx)("button",{className:"accordion-button",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:Object(i.jsx)("strong",{children:"Analyze Your text"})})}),Object(i.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"Textutils gives you a way to analyze text quickly anf efficiently. Be it word count, character count or"})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",children:Object(i.jsx)("strong",{children:"Free to use"})})}),Object(i.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"Textutils is a free character counter tool that provides instant character count $ word count statistics for a given text. Textutils reports the number of words and characters, thus it is suitable for writing text with wird/ character limit."})})]}),Object(i.jsxs)("div",{className:"accordion-item",children:[Object(i.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(i.jsx)("button",{className:"accordion-button collapsed",style:t,type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",children:Object(i.jsx)("strong",{children:"Browse Compatible"})})}),Object(i.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(i.jsx)("div",{className:"accordion-body",style:t,children:"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essays etc."})})]})]})]})}d.defaultProps={title:"set title here",aboutText:"About text here"};var j=function(e){return Object(i.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(i.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(i.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})})},m=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(null),r=Object(l.a)(n,2),u=r[0],x=r[1],p=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),1500)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(o.a,{children:[Object(i.jsx)(d,{title:"TextUtils",aboutText:"About Us",mode:a,toggleMode:function(e){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",p("Dark mode has been enabled","success")):(s("light"),document.body.style.backgroundColor="white",p("Light mode has been enabled","success"))}}),Object(i.jsx)(j,{alert:u}),Object(i.jsx)("div",{className:"container my-3",children:Object(i.jsxs)(m.c,{children:[Object(i.jsx)(m.a,{exact:!0,path:"/about",children:Object(i.jsx)(h,{mode:a})}),Object(i.jsx)(m.a,{exact:!0,path:"/",children:Object(i.jsx)(b,{showAlert:p,heading:"Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces",mode:a})})]})})]})})},x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.25e45a50.chunk.js.map