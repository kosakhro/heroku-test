(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t(1),a=t(15),o=t.n(a),u=t(6),i=t(3),s=function(e){return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{children:["filter shown with:",Object(c.jsx)("input",{value:e.searchValue,onChange:e.handleSearchPresent})]})})},l=function(e){var n=e.handleClick,t=e.text;return Object(c.jsx)("button",{onClick:n,children:t})},d=function(e){var n=e.contact,t=e.onClick;return Object(c.jsxs)("div",{children:[n.name," ",n.number," ",Object(c.jsx)(l,{handleClick:function(){return t(n.id)},text:"delete"})]})},j=function(e){return Object(c.jsxs)("form",{onSubmit:e.addPerson,children:[Object(c.jsxs)("div",{children:["name: ",Object(c.jsx)("input",{value:e.newName,onChange:e.handleNamePresent})]}),Object(c.jsxs)("div",{children:["number: ",Object(c.jsx)("input",{value:e.newNumber,onChange:e.handleNumberPresent})]}),Object(c.jsx)("div",{children:Object(c.jsx)("button",{type:"submit",children:"add"})})]})},b=t(4),h=t.n(b),f="/api/persons",m=function(){var e=h.a.get(f),n={id:1e4,name:"pipa",number:"2019-05-30T17:30:31.098Z"};return e.then((function(e){return e.data.concat(n)}))},O=function(e){return h.a.post(f,e).then((function(e){return e.data}))},v=function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return h.a.delete("".concat(f,"/").concat(e))},x=function(e){var n=e.message;return null===n?null:Object(c.jsx)("div",{className:"change",children:n})},g=function(){var e=Object(r.useState)([]),n=Object(i.a)(e,2),t=n[0],a=n[1],o=Object(r.useState)("njkj"),l=Object(i.a)(o,2),b=l[0],h=l[1],f=Object(r.useState)("123"),g=Object(i.a)(f,2),w=g[0],k=g[1],C=Object(r.useState)(""),N=Object(i.a)(C,2),P=N[0],S=N[1],y=Object(r.useState)(null),L=Object(i.a)(y,2),D=L[0],E=L[1];Object(r.useEffect)((function(){m().then((function(e){a(e)}))}),[]),console.log("render",t.length,"persons");var J=function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&p(e).then((function(){a(t.filter((function(n){return n.id!==e})))}))},T=t.filter((function(e){return!0===e.name.toLowerCase().includes(P.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(x,{message:D}),Object(c.jsx)(s,{searchValue:P,handleSearchPresent:function(e){console.log(e.target.value),S(e.target.value)}}),Object(c.jsx)("h2",{children:"add a new"}),Object(c.jsx)(j,{addPerson:function(e){e.preventDefault();var n=t.map((function(e){return e.name.toLowerCase()}));if(console.log(n.indexOf(b)),-1===n.indexOf(b))O({name:b,number:w}).then((function(e){a(t.concat(e))})),h(""),k("");else if(window.confirm("".concat(b," is already added to phonebook, replace the phone number with new one?"))){var c=t.find((function(e){return e.name===b}));console.log("person number:",c.number);var r=Object(u.a)(Object(u.a)({},c),{},{number:w});console.log("changed person number:",r.number),v(c.id,r).then((function(e){a(t.map((function(n){return n.id!==r.id?n:e})))})).catch((function(e){alert("the person '".concat(c.name,"' was already deleted from server")),a(t.filter((function(e){return e.id!==c.id})))}))}E("Added .."),setTimeout((function(){E(null)}),5e3)},newName:b,handleNamePresent:function(e){console.log(e.target.value),h(e.target.value)},newNumber:w,handleNumberPresent:function(e){console.log(e.target.value),k(e.target.value)}}),Object(c.jsx)("h2",{children:"Numbers"}),Object(c.jsx)("div",{children:T.map((function(e){return Object(c.jsx)(d,{contact:e,onClick:J},e.name)}))})]})};t(38);o.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.75a7ef06.chunk.js.map