(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{11:function(e,t,a){"use strict";a.r(t);var n=a(4),i=a.n(n),s=a(2),r=(a(9),a(1)),c=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],o=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"some other todo",completed:!1,userId:1},{id:3,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}],l=a(0),d=function(){var e=Object(r.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(r.useState)("0"),d=Object(s.a)(i,2),u=d[0],m=d[1],h=Object(r.useState)("0"),j=Object(s.a)(h,2),b=j[0],p=j[1],f=Object(r.useState)("0"),O=Object(s.a)(f,2),v=O[0],x=O[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Add todo form"}),Object(l.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),""!==a&&"0"!==u&&(o.push({userId:+u,title:a,completed:!1,id:o.length+1}),n(""),m("0")),"0"===u&&p("1"),""===a&&x("1")},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("input",{type:"text","data-cy":"titleInput",onChange:function(e){e.preventDefault(),x("0"),n(e.target.value)},value:a}),Object(l.jsx)("span",{className:"error",children:"1"===v&&"Please enter a title"})]}),Object(l.jsxs)("div",{className:"field",children:[Object(l.jsxs)("select",{"data-cy":"userSelect",value:u,onChange:function(e){m(e.target.value),p("0")},children:[Object(l.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),c.map((function(e){return Object(l.jsx)("option",{value:e.id,children:e.name})})),";"]}),Object(l.jsx)("span",{className:"error",children:"1"===b&&"Please choose a user"})]}),Object(l.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(l.jsx)("section",{className:"TodoList",children:o.map((function(e){var t,a;return Object(l.jsxs)("article",{"data-id":e.id,className:"TodoInfo ".concat(e.completed&&"TodoInfo--completed"),children:[Object(l.jsx)("h2",{className:"TodoInfo__title",children:e.title}),Object(l.jsx)("a",{className:"UserInfo",href:null===(t=c.find((function(t){return t.id===e.userId})))||void 0===t?void 0:t.email,children:null===(a=c.find((function(t){return t.id===e.userId})))||void 0===a?void 0:a.name})]})}))})]})};i.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))},9:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.1dd6509a.chunk.js.map