(this["webpackJsonpquick-lists"]=this["webpackJsonpquick-lists"]||[]).push([[0],{17:function(t,e,n){t.exports=n(25)},22:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(13),o=n.n(a),l=n(4),s=n(5),c=n(8),u=n(7),d=n(1),m=n(2),f=(n(22),n(11)),g=n(3);function p(){var t=Object(d.a)(["\n  display: grid;\n  max-width: 100%;\n  grid-template-columns: 4fr 1fr;\n  justify-content: space-between;\n  background-color: #f7f9fc;\n  /* background-color: ","; */\n  border-radius: 1rem;\n  margin: 1rem auto;\n  cursor: pointer;\n  /* text-decoration: ","; */\n\n  & label {\n    font-size: 1.6rem;\n    padding: 1rem;\n    cursor: pointer;\n    /* width: 100%; */\n  }\n\n  & .text {\n    /* max-width: 80%; */\n    word-wrap: break-word;\n  }\n\n  & .time {\n    border-radius: 0 1rem 1rem 0;\n    background-color: rgba(0, 0, 0, 0.01);\n    border: none;\n    /* width: 20%; */\n    text-align: center;\n  }\n\n  &:hover {\n    background-color: #f8d57e;\n    text-decoration: line-through;\n  }\n"]);return p=function(){return t},t}m.a.li(p(),(function(t){return t.show?"#F7F9FC":"#FFEFCA"}),(function(t){return t.show?"none":"line-through"}));var b=function(t){return i.a.createElement("div",null,i.a.createElement("li",null,t.text))};function h(){var t=Object(d.a)(["\n  background-color: transparent;\n  width: 2rem;\n  height: 2rem;\n  border: none;\n  /* box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1); */\n  border-radius: 5rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  margin-top: 1rem;\n  outline: none;\n\n  & svg {\n    fill: lightgray;\n  }\n\n  &:hover > svg {\n    fill: #00C9B2;\n  }\n\n  /* &:active {\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n  } */\n"]);return h=function(){return t},t}var w=m.a.button(h()),v=function(t){return i.a.createElement(w,{onClick:t.clicked},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},i.a.createElement("path",{className:"bin",d:"M18 22H6V8H4v13.7C4 22.8 4.9 24 6 24h12c1.1 0 2-1.2 2-2.3V8h-2V22zM15 4V2H9v2H2v2h20V4H15zM9 10v10h2V10H9zM13 10v10h2V10H13z"})))};function x(){var t=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n  /* background-color: #f7f9fc; */\n  border: 0.3rem solid #f7f9fc;\n  border-radius: 1rem;\n  margin: 1rem auto;\n\n  & input {\n    border: none;\n    font-size: 1.6rem;\n    padding: 1rem;\n    background-color: transparent;\n    outline: none;\n    width: 75%;\n\n    &.time {\n      padding: 0;\n      text-align: center;\n      font-size: 1.4rem;\n      width: 25%;\n      /* background-color: rgba(0, 0, 0, 0.01); */\n      border-left: 0.3rem solid #f7f9fc;\n    }\n  }\n"]);return x=function(){return t},t}function O(){var t=Object(d.a)(["\n  display: inline-block;\n  width: 30rem;\n  padding: 3rem;\n  background-color: #ffffff;\n  border-radius: 2rem;\n  margin: 1rem;\n\n  & h3 {\n    font-size: 2.4rem;\n    color: #f8d57e;\n    margin-bottom: 2rem;\n  }\n\n  & ul {\n    list-style: none;\n  }\n"]);return O=function(){return t},t}var S=m.a.div(O()),y=m.a.form(x()),E=function(t){var e=[];return t.info.items&&(e=t.info.items.map((function(t){return console.log(t),i.a.createElement(b,{text:t.text,key:t.text},t.text)}))),i.a.createElement(S,null,i.a.createElement("h3",null,t.info.title),i.a.createElement("ul",null,e),i.a.createElement(y,{onSubmit:t.submit,name:t.info.id},i.a.createElement("input",{type:"text",onChange:function(e){return t.changed(t.info.id,e)},name:"text",value:t.info.newItem.text,id:"textInput".concat(t.info.id),autoFocus:!0}),i.a.createElement("input",{type:"text",className:"time",onChange:function(e){return t.changed(t.info.id,e)},name:"time",value:t.info.newItem.time}),i.a.createElement("input",{type:"submit",hidden:!0})),i.a.createElement(v,{clicked:function(){return t.listDelete(t.info.id)}}))};function k(){var t=Object(d.a)(["\n  border: 0.3rem solid #f7f9fc;\n  border-radius: 1rem;\n  width: 75%;\n\n  & input {\n    border: none;\n    font-size: 1.6rem;\n    padding: 1rem;\n    background-color: transparent;\n    outline: none;\n    width: 100%;\n  }\n"]);return k=function(){return t},t}function j(){var t=Object(d.a)(["\n  display: inline-block;\n  width: 30rem;\n  padding: 3rem;\n  background-color: #ffffff;\n  border-radius: 2rem;\n  margin: 1rem;\n"]);return j=function(){return t},t}var C=m.a.div(j()),I=m.a.form(k()),H=function(t){return i.a.createElement(C,null,i.a.createElement(I,{onSubmit:t.submit},i.a.createElement("input",{type:"text",onChange:t.changed,name:"title",value:t.newList.title,autoFocus:!0}),i.a.createElement("input",{type:"submit",hidden:!0})))};function D(){var t=Object(d.a)(["\n  margin-left: -7rem;\n  margin-top: 2rem;\n  background-color: transparent;\n  border: none;\n  border-radius: 2rem;\n  cursor: pointer;\n  font-size: 4rem;\n  color: lightgray;\n  height: 4rem;\n  width: 4rem;\n  outline: none;\n\n  &:hover {\n    color: #00c9b2;\n  }\n"]);return D=function(){return t},t}var L=m.a.button(D()),z=function(t){return i.a.createElement(L,{onClick:t.clicked},"+")};function J(){var t=Object(d.a)(["\n  width: 100vw;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return J=function(){return t},t}var N=m.a.div(J()),F=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(t=e.call.apply(e,[this].concat(i))).state={listCounter:1,newList:"",lists:[{id:1,title:"The first list",items:[],newItem:{text:"",time:"",complete:!1}}],draggedList:""},t.inputChangeHandler=function(e,n){var r=Object(g.a)(t.state.lists).map((function(t){return t.id===e&&(t.newItem[n.target.name]=n.target.value),t}));t.setState({lists:r})},t.itemAddHandler=function(e){e.preventDefault();var n=Object(g.a)(t.state.lists);n.forEach((function(r){r.id==e.target.name&&(r.items.push(r.newItem),r.newItem={text:"",time:"",complete:!1},t.setState({lists:n}),window.localStorage.setItem("lists",JSON.stringify(t.state.lists))),document.querySelector("#textInput".concat(r.id)).focus()}))},t.itemDoneHandler=function(e,n){var r=Object(g.a)(t.state.lists).map((function(t){if(t.id==e){var r=t.items.map((function(t){return t===n&&(t.complete=!t.complete),t}));t.items=r}return t}));t.setState({lists:r}),window.localStorage.setItem("lists",JSON.stringify(t.state.lists))},t.itemDeleteHandler=function(t){console.log(t)},t.newListHandler=function(){var e={id:t.state.listCounter+1,title:"",items:[],newItem:{text:"",time:"",complete:!1}};t.setState({newList:e})},t.titleChangeHandler=function(e){var n=Object(f.a)({},t.state.newList);n.title=e.target.value,t.setState({newList:n})},t.newListSubmit=function(e){e.preventDefault();var n=Object(g.a)(t.state.lists);n.push(t.state.newList);var r=t.state.listCounter+1;t.setState({newList:"",lists:n,listCounter:r}),window.localStorage.setItem("lists",JSON.stringify(t.state.lists)),window.localStorage.setItem("listCounter",JSON.stringify(r))},t.listDeleteHandler=function(e){var n=Object(g.a)(t.state.lists).filter((function(t){return t.id!=e}));t.setState({lists:n}),window.localStorage.setItem("lists",JSON.stringify(n))},t.dragStart=function(e){t.setState({draggedList:e.target.children[0].innerText})},t.dragOver=function(t){t.preventDefault()},t.dragEnter=function(e,n){var r=n.target.innerText,i=Object(g.a)(t.state.lists),a=Object(f.a)({},i.filter((function(t){return t.id===e}))),o=a[0].items.findIndex((function(e){return e.text.trim()===t.state.draggedList.trim()})),l=a[0].items.findIndex((function(t){return t.text.trim()===r.trim()})),s=Object(g.a)(a[0].items),c=s.splice(o,1);s.splice(l,0,c[0]);var u=i.map((function(t){return t.id===a[0].id&&(t.items=Object(g.a)(s)),t}));t.setState({lists:u})},t.onDrop=function(e,n){n.preventDefault(),t.dragEnter(e,n),window.localStorage.setItem("lists",JSON.stringify(t.state.lists))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){if(window.localStorage.getItem("lists")){var t=JSON.parse(window.localStorage.getItem("lists"));this.setState({lists:t})}if(window.localStorage.getItem("listCounter")){var e=JSON.parse(window.localStorage.getItem("listCounter"));this.setState({listCounter:e})}}},{key:"render",value:function(){var t=this,e=this.state.lists.map((function(e){return i.a.createElement(E,{key:e.id,info:e,submit:t.itemAddHandler,changed:t.inputChangeHandler,listDelete:t.listDeleteHandler,itemDelete:t.itemDeleteHandler,itemDone:t.itemDoneHandler,dragStart:t.dragStart,dragOver:t.dragOver,dragEnter:function(n){return t.dragEnter(e.id,n)},onDrop:function(n){return t.onDrop(e.id,n)}})})),n=null;return this.state.newList&&(n=i.a.createElement(H,{newList:this.state.newList,changed:this.titleChangeHandler,submit:this.newListSubmit})),i.a.createElement(N,null,e,n,i.a.createElement(z,{clicked:this.newListHandler}))}}]),n}(r.Component);function V(){var t=Object(d.a)(["\n  display: grid;\n  height: 100vh;\n  align-items: center;\n  justify-items: center;\n  background-color: #e6ebed;\n  /* background-color: #3ADDC2; */\n"]);return V=function(){return t},t}var A=m.a.div(V()),M=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return i.a.createElement(A,null,i.a.createElement(F,null))}}]),n}(r.Component);o.a.render(i.a.createElement(M,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4b80b965.chunk.js.map