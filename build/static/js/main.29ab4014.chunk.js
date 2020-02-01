(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,t,n){e.exports=n(262)},261:function(e,t,n){},262:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),l=n.n(o),c=n(58),u=n(32),i=n(120),s=n(17),m=n(127),d={SAVE:"SAVE",SET_LOAD_ERROR:"SET_LOAD_ERROR",START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",DELETE_POST:"DELETE_POST",DELETE_COMMENT:"DELETE_COMMENT",FILTER:"FILTER",FILTER_BUTTON:"FILTER_BUTTON"},f=function(e){return function(t){t(function(e){return{type:d.FILTER_BUTTON,payload:e}}(e))}},p=function(e){return function(t){t(function(e){return{type:d.FILTER,payload:e}}(e))}},E=function(e){return function(t){t(function(e){return{type:d.DELETE_COMMENT,commentId:e}}(e))}},T=function(e){return function(t){t(function(e){return{type:d.DELETE_POST,postId:e}}(e))}},O=["https://jsonplaceholder.typicode.com/posts","https://jsonplaceholder.typicode.com/users","https://jsonplaceholder.typicode.com/comments"],L=function(){return function(e){e({type:d.START_LOADING});var t=O.map(function(e){return fetch(e).then(function(e){return e.json()})});Promise.all(t).then(function(t){var n;e((n=t,{type:d.SAVE,payload:n}))}).catch(function(t){return e(function(e){return{type:d.SET_LOAD_ERROR,payload:e}}(t.message))}).finally(function(){return e({type:d.STOP_LOADING})})}},P={isLoading:!1,error:!1,preparedPosts:[],filter:""};function b(e){var t=Object(m.a)(e,3),n=t[0],r=t[1],a=t[2];return n&&r&&a?n.map(function(e){return Object(s.a)({},e,{user:r.find(function(t){return e.userId===t.id}),comments:a.filter(function(t){return t.postId===e.id})})}):[]}var y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Object(u.c)(),_=[i.a],h=Object(u.d)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d.SAVE:var n=t.payload;return Object(s.a)({},e,{error:!1,preparedPosts:b(n)});case d.SET_LOAD_ERROR:return Object(s.a)({},e,{error:!0,preparedPosts:[]});case d.START_LOADING:return Object(s.a)({},e,{isLoading:!0});case d.STOP_LOADING:return Object(s.a)({},e,{isLoading:!1});case d.DELETE_POST:var r=t.postId;return Object(s.a)({},e,{preparedPosts:e.preparedPosts.filter(function(e){return e.id!==r})});case d.DELETE_COMMENT:var a=t.commentId;return Object(s.a)({},e,{preparedPosts:e.preparedPosts.map(function(e){return Object(s.a)({},e,{comments:e.comments.filter(function(e){return e.id!==a})})})});case d.FILTER:var o=t.payload;return Object(s.a)({},e,{filter:o});case d.FILTER_BUTTON:switch(t.payload){case"Post Text":return Object(s.a)({},e,{preparedPosts:e.preparedPosts.filter(function(t){return t.body.includes(e.filter)})});case"Post Title":return Object(s.a)({},e,{preparedPosts:e.preparedPosts.filter(function(t){return t.title.includes(e.filter)})});default:return Object(s.a)({},e,{preparedPosts:e.preparedPosts})}default:return e}},y(u.a.apply(void 0,_))),D=n(263),g=n(41),v=function(e){return e},C=Object(g.a)(v,function(e){return e.preparedPosts}),R=Object(g.a)(v,function(e){return e.filter}),A=Object(g.a)(v,function(e){return e.error}),I=Object(g.a)(v,function(e){return e.isLoading}),j=n(28),S=function(e){var t=e.user;return a.a.createElement("td",null,t.name)},N=function(e){var t=e.comment,n=e.deleteComment;return a.a.createElement("tr",null,a.a.createElement("td",null,a.a.createElement("p",null,"Author:",t.name),a.a.createElement("p",null,"Email:",t.email)),a.a.createElement("td",null,t.body),a.a.createElement("td",null,a.a.createElement(D.a,{icon:!0},a.a.createElement(j.a,{name:"delete",onClick:function(e){return function(e,t){e.preventDefault(),n(t)}(e,t.id)}}))))},k=function(e){var t=e.comments,n=e.deleteComment;return a.a.createElement("table",null,t.map(function(e){return a.a.createElement(N,{comment:e,key:e.id,deleteComment:n})}))},F=function(e){var t=e.post,n=e.deleteComment,r=e.deletePost;return a.a.createElement("tr",null,a.a.createElement("td",null,t.title),a.a.createElement("td",null,t.body),a.a.createElement(S,{user:t.user}),a.a.createElement(k,{comments:t.comments,deleteComment:n}),a.a.createElement("td",null,a.a.createElement(D.a,{icon:!0},a.a.createElement(j.a,{name:"user delete",onClick:function(e){return function(e,t){e.preventDefault(),r(t)}(e,t.id)}}))))},w=function(e){var t=e.posts,n=e.deletePost,r=e.deleteComment;return a.a.createElement("table",{className:"ui red table"},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Title"),a.a.createElement("th",null,"The text of the post"),a.a.createElement("th",null,"Authors name"),a.a.createElement("th",null,"post comments"))),a.a.createElement("tbody",null,t.map(function(e){return a.a.createElement(F,{post:e,key:e.id,deletePost:n,deleteComment:r})})))},G=n(269),M=function(e){var t=e.filterbutton,n=e.filterCanged,r=e.filter,o=e.loadData;return a.a.createElement(a.a.Fragment,null,a.a.createElement(G.a,{type:"text",placeholder:"What are you searching?",onChange:function(e){return n(e.target.value)},value:r}),a.a.createElement(D.a,{type:"button",onClick:function(){return t("Post Text")}},"Post Text"),a.a.createElement(D.a,{type:"button",onClick:function(){return t("Post Title")}},"Post Title"),a.a.createElement(D.a,{type:"button",onClick:function(){return o(!0)},color:"facebook"},"Refresh"))};M.defaultProps={filter:""};var x=M;n(261);var B=Object(c.b)(function(e){return{filter:R(e),preparedPosts:C(e),error:A(e),isLoading:I(e)}},function(e){return{loadData:function(){return e(L())},stopLoading:function(t){return e({type:d.STOP_LOADING,isLoading:t})},deletePost:function(t){return e(T(t))},deleteComment:function(t){return e(E(t))},filterCanged:function(t){return e(p(t))},filterbutton:function(t){return e(f(t))}}})(function(e){var t=e.isLoading,n=e.error,r=e.preparedPosts,o=e.filter,l=e.loadData,c=e.deletePost,u=e.deleteComment,i=e.filterCanged,s=e.filterbutton;return t?a.a.createElement("p",null,"loading..."):n?a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Error occurred!!!"),a.a.createElement(D.a,{type:"button",onClick:function(){return l(!0)}},"Try Again!")):r&&r.length?a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,"List of posts"),a.a.createElement(x,{filter:o,filterCanged:i,filterbutton:s,loadData:l}),a.a.createElement(w,{posts:r,deletePost:c,deleteComment:u})):a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"No posts yet!"),a.a.createElement(D.a,{type:"button",onClick:function(){return l(!0)},color:"green"},"Load"))});x.defaultProps={error:!1,isLoading:!1,filter:""},l.a.render(a.a.createElement(c.a,{store:h},a.a.createElement(B,null)),document.getElementById("root"))}},[[137,1,2]]]);
//# sourceMappingURL=main.29ab4014.chunk.js.map