(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1);c(10),c(11);function d(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var i=c(4),o=c.n(i),r=c(0),j=Object(l.memo)((function(e){var t=e.todos,c=e.selectTodoId,s=e.selectedTodoId;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(r.jsx)("td",{className:"is-vcentered",children:e.id}),Object(r.jsx)("td",{className:"is-vcentered",children:e.completed?Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})}):void 0}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:o()("",{"has-text-success":e.completed},{"has-text-danger":!e.completed}),children:e.title})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){c(e.id)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:o()("far",{"fa-eye":0===s},{"fa-eye-slash":s===e.id})})})})})]},e.id)}))})]})})),b=Object(l.memo)((function(e){var t=e.filter,c=e.query,s=e.filterChange,a=e.setQuery;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:t,onChange:function(e){return s(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:c,onChange:function(e){return a(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})})),h=(c(13),function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),u=Object(l.memo)((function(e){var t=e.todo,c=e.closeModal,s=t.id,a=t.title,i=t.completed,o=t.userId,j=Object(l.useState)(null),b=Object(n.a)(j,2),u=b[0],m=b[1];return Object(l.useEffect)((function(){(function(e){return d("/users/".concat(e))})(o).then(m)}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),u?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:a}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[i?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(u.email),children:u.name})]})]})]}):Object(r.jsx)(h,{})]})})),m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(0),i=Object(n.a)(a,2),o=i[0],m=i[1],O=Object(l.useState)(""),x=Object(n.a)(O,2),f=x[0],p=x[1],N=Object(l.useState)("all"),v=Object(n.a)(N,2),y=v[0],g=v[1];Object(l.useEffect)((function(){d("/todos").then((function(e){return s(e)}))}),[]);var k=Object(l.useCallback)((function(){return m(0)}),[]),C=Object(l.useMemo)((function(){return c.find((function(e){return e.id===o}))}),[o]),w=c.filter((function(e){var t,c=e.title.toLowerCase().includes(f.toLowerCase());switch(y){case"completed":t=e.completed;break;case"active":t=!e.completed;break;case"all":return c}return c&&t}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{query:f,setQuery:p,filter:y,filterChange:g})}),Object(r.jsx)("div",{className:"block",children:w.length>0?Object(r.jsx)(j,{todos:w,selectTodoId:function(e){m(e)},selectedTodoId:o}):Object(r.jsx)(h,{})})]})})}),C&&Object(r.jsx)(u,{todo:C,closeModal:k})]})};a.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e7265999.chunk.js.map