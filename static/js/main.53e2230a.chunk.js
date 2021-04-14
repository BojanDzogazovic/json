(this.webpackJsonpjson=this.webpackJsonpjson||[]).push([[0],{26:function(e,t,s){},33:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),a=s(18),o=s.n(a),l=s(14),r=s.n(l),i=s(7),j=s(19),b=s(11),d=(s(26),s(9)),m=s(2),p=Object(c.createContext)(null),u=s.p+"static/media/json-icon.80b6ed8a.svg",h=s(1),O=n.a.memo((function(){var e=Object(c.useContext)(p).globalState;return console.log("".concat(e.welcomeMsg," ").concat("Header")),Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("img",{className:"header__icon",src:u,alt:"json-icon"}),Object(h.jsx)("h1",{className:"header__title",children:"JSON app"})]})})),x=s.p+"static/media/arrow-icon.bfa8cdc8.svg",g=function(e){var t=e.post,s=e.link,n=Object(c.useContext)(p),a=n.globalState,o=n.setGlobalState;console.log("".concat(a.welcomeMsg," ").concat("Single Post"));var l=a.comments.filter((function(e){return e.postId===t.id}));return Object(h.jsxs)("div",{className:"single-post",children:[Object(h.jsxs)("p",{className:"single-post__user",children:["User: ",t.name]}),Object(h.jsx)("h3",{className:"single-post__title",children:t.title}),Object(h.jsx)("p",{className:"single-post__body",children:t.body}),Object(h.jsxs)("div",{className:"single-post__comments",children:[Object(h.jsx)("h4",{className:"single-post__comments-title",children:"Comments:"}),l.map((function(e){return Object(h.jsxs)("div",{className:"single-post__comment",children:[Object(h.jsx)("p",{className:"single-post__comment-title",children:e.name}),Object(h.jsxs)("p",{className:"single-post__comment-email",children:["- ",e.email]}),Object(h.jsx)("p",{className:"single-post__comment-body",children:e.body})]},e.id)}))]}),Object(h.jsx)("div",{className:"single-post__cta-box",children:s?Object(h.jsx)(d.b,{target:"_blank",to:"/post/".concat(t.id),onClick:function(){o((function(e){return Object(i.a)(Object(i.a)({},e),{},{postID:t.id})}))},children:Object(h.jsxs)("button",{className:"cta",children:["Go to post",Object(h.jsx)("img",{className:"cta__icon",src:x,alt:"arrow"})]})},t.id):Object(h.jsx)("div",{})})]})},f=function(){var e=Object(c.useContext)(p).globalState;console.log("".concat(e.welcomeMsg," ").concat("Posts"));var t=Object(c.useState)(""),s=Object(b.a)(t,2),n=s[0],a=s[1],o=Object(c.useState)([]),l=Object(b.a)(o,2),r=l[0],i=l[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{}),Object(h.jsxs)("section",{className:"container",children:[Object(h.jsxs)("div",{className:"search-box",children:[Object(h.jsx)("label",{htmlFor:"search",className:"search-box__label",children:"Search:"}),Object(h.jsx)("input",{type:"text",placeholder:"Search posts by user name...",className:"search-box__input",onChange:function(t){if(0===t.target.value.length)a("");else{a(t.target.value);var s=e.posts.filter((function(e){return e.name.toLowerCase().includes(t.target.value.toLowerCase())}));i(s)}}})]}),Object(h.jsx)("h2",{children:"Posts:"}),e.loading?Object(h.jsx)("div",{className:"loading",children:"Loading..."}):n?r.length?Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"search-results",children:["Search results: ",r.length]}),r.map((function(e){return Object(h.jsx)(g,{post:e,link:!0},e.id)}))]}):Object(h.jsx)("div",{className:"no-results",children:"No results..."}):e.posts.map((function(e){return Object(h.jsx)(g,{post:e,link:!0},e.id)}))]})]})},v=function(){var e=Object(c.useContext)(p),t=e.globalState,s=e.setGlobalState;return console.log("".concat(t.welcomeMsg," ").concat("Post")),Object(c.useEffect)((function(){s((function(e){return Object(i.a)(Object(i.a)({},e),{},{postID:window.location.pathname.split("/").pop()-1})}))}),[]),Object(h.jsx)("div",{className:"container",children:t.loading?Object(h.jsx)("div",{className:"loading",children:"Loading..."}):Object(h.jsx)(g,{post:t.posts[t.postID],link:!1},t.postID)})},_=function(){var e=Object(c.useContext)(p).globalState;return console.log("".concat(e.welcomeMsg," ").concat("Notfound")),Object(h.jsxs)("div",{className:"no-page",children:[Object(h.jsxs)("p",{className:"no-page__message",children:["404 ",Object(h.jsx)("br",{})," Page not found"]}),Object(h.jsx)(d.b,{className:"no-page__link",to:"/posts",children:"Back to Posts"})]})};var N=function(){var e=Object(c.useState)({loading:!0,welcomeMsg:"Hello from",postID:0,posts:[],comments:[]}),t=Object(b.a)(e,2),s=t[0],n=t[1];Object(c.useEffect)((function(){(function(){var e=Object(j.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([fetch("https://jsonplaceholder.typicode.com/posts/"),fetch("https://jsonplaceholder.typicode.com/comments/"),fetch("https://jsonplaceholder.typicode.com/users/")]);case 3:return t=e.sent,e.next=6,Promise.all(t.map((function(e){return e.json()})));case 6:(s=e.sent)[0].forEach((function(e){s[2].forEach((function(t){e.userId===t.id&&(e.name=t.name)}))})),n((function(e){return Object(i.a)(Object(i.a)({},e),{},{posts:s[0],comments:s[1],loading:!1})})),e.next=14;break;case 11:throw e.prev=11,e.t0=e.catch(0),Error("Fetching data failed");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var a=Object(c.useMemo)((function(){return{globalState:s,setGlobalState:n}}),[s,n]);return Object(h.jsx)(d.a,{children:Object(h.jsx)(p.Provider,{value:a,children:Object(h.jsxs)(m.c,{children:[Object(h.jsx)(m.a,{path:"/posts",exact:!0,component:f}),Object(h.jsx)(m.a,{path:"/post/:id",exact:!0,component:v}),Object(h.jsx)(m.a,{component:_})]})})})};o.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.53e2230a.chunk.js.map