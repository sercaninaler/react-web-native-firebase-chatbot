(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{87:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(13),i=n.n(o),c=n(21),s=n.n(c),l=n(20),u=n.n(l),f=n(5),d=n(11),g=n(89),p=n(15),m=n(47),h=n(88),y=n(83),b=n(79),w=n.n(b),E=function(e){return"https://pixabay.com/api/?key=14265060-81ead90aa88e46a5937fa954d\n&q="+e+"&image_type=photo&safesearch=true&orientation=horizontal&per_page=100"},O=["animals","fruits","planets"],k={theme:"light"},x=n(80),C=n.n(x),S=n(81),v=new(n.n(S).a),L=C.a.create(v,{}),j=function(e,t){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.a.awrap(L.set(e,t));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),null,null,[[0,5]])},P=function(e){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.a.awrap(L.get(e));case 3:return t.abrupt("return",t.sent);case 6:t.prev=6,t.t0=t.catch(0);case 8:case"end":return t.stop()}}),null,null,[[0,6]])},D=n(82).a.get("window"),F=Math.round(9*D.width/16),J={app:{paddingTop:15,paddingBottom:10,height:"100%",backgroundColor:"#000000"},button:{backgroundColor:"#eee",paddingLeft:11,paddingRight:11,borderRadius:4,borderColor:"#ddd",borderWidth:1,width:"fit-content",margin:2,marginLeft:1,marginTop:1,padding:3},searchForm:{justifyContent:"center",flexDirection:"row"},searchButtonView:{height:40,marginLeft:12,marginTop:3},searchButton:{height:48,padding:4,fontSize:18,borderRadius:7},searchInput:{fontSize:16,padding:8,backgroundColor:"#eee",borderColor:"#ddd",borderWidth:1,borderRadius:5,width:260,height:40},tags:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",marginTop:15,marginBottom:15,marginLeft:"auto",marginRight:"auto",maxWidth:800},message:{flexWrap:"wrap",justifyContent:"center",marginTop:25,color:"red",fontSize:16,alignSelf:"center"},loader:{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:"center",position:"absolute",top:0,width:"100%",backgroundColor:"#FFF",height:"100%",opacity:.7,zIndex:1,paddingBottom:100},footer:{backgroundColor:"#ececec",padding:"10 0",position:"absolute",width:"100%",bottom:0,left:0,display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap"},footerLink:{margin:"0 5",borderColor:"#999999",padding:5,paddingLeft:10,paddingRight:10},pictureHolder:{flexDirection:"column",justifyContent:"center",position:"relative",alignItems:"center"},picture:{marginTop:"5%",marginBottom:"10%",width:D.width,height:F},pictureInfo:{position:"absolute",bottom:"17%",flexDirection:"row",alignSelf:"center"}};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(n,!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(){P("pictures").then((function(e){null===e&&j("pictures",JSON.stringify({})).then()})),P("tags").then((function(e){null===e&&j("tags",JSON.stringify(O)).then()})),P("settings").then((function(e){null===e&&j("settings",JSON.stringify(k)).then()}));var e=Object(r.useState)([]),t=u()(e,2),n=t[0],o=t[1],c=Object(r.useState)(""),l=u()(c,2),b=l[0],x=l[1],C=Object(r.useState)(0),S=u()(C,2),v=S[0],L=S[1],D=Object(r.useState)(null),F=u()(D,2),T=F[0],N=F[1],W=Object(r.useState)(!1),R=u()(W,2),B=R[0],M=R[1],z=Object(r.useState)(10),_=u()(z,2),U=_[0],H=_[1],A=Object(r.useState)(k),V=u()(A,2),q=V[0],G=V[1],K=Object(r.useState)(O),Q=u()(K,2),X=Q[0],Y=Q[1];Object(r.useEffect)((function(){P("settings").then((function(e){G(JSON.parse(e))})),P("tags").then((function(e){Y(JSON.parse(e))})),P("pictures").then((function(e){o(JSON.parse(e))}))}),[]);var Z=J,$=q.theme;"light"===$&&(Z=I({},J,{app:I({},J.app,{backgroundColor:"#FFFFFF"})}));var ee=function(e){var t,r,a,c;return i.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(t=e.trim(),N(null),H(10),Array.isArray(n[t])&&n[t].length&&!(Math.round((new Date).getTime()/1e3)-n[t+"_lastUpdate"]>43200)){s.next=13;break}return M(!0),s.next=7,i.a.awrap(w.a.get(E(t)));case 7:r=s.sent,(a=r.data.hits).length?(te(t),c=[],a.forEach((function(e){c.push({image:e.webformatURL,tags:e.tags,isDeleted:!1})})),n[t]=c,n[t+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),j("pictures",JSON.stringify(n)),o(I({},n))):setTimeout((function(){N("Couldn't find any results ")}),500),setTimeout((function(){M(!1)}),500),s.next=14;break;case 13:-1===X.indexOf(t)&&te(t);case 14:case"end":return s.stop()}}))},te=function(e){""!==e&&-1===X.indexOf(e)&&(X.unshift(e),Y(X),j("tags",JSON.stringify(X)))},ne=null,re=function(e){n[b][e].showInfo=!n[b][e].showInfo,o(I({},n))},ae=function(){L(v+1)},oe=n[b]?n[b].filter((function(e){return!e.isDeleted})).slice(0,U):[];return a.a.createElement(f.a,{style:Z.app},a.a.createElement(f.a,{style:Z.searchForm},a.a.createElement(g.a,{style:Z.searchInput,value:b,onChangeText:function(e){return function(e){x(e.toLowerCase())}(e)},onSubmitEditing:function(){ee(b)},placeholder:"cats, planets, fruits,...",selectTextOnFocus:!0})),a.a.createElement(f.a,{style:Z.tags},X.map((function(e){return a.a.createElement(p.a,{key:e,style:Z.button,underlayColor:"#cccccc",onPress:function(){x(e),ee(e)}},a.a.createElement(d.a,null,e))}))),T&&a.a.createElement(d.a,{style:Z.message},T),B&&a.a.createElement(f.a,{style:Z.loader},a.a.createElement(y.a,{size:"large",color:"#0000ff"})),!B&&0!==oe.length&&a.a.createElement(f.a,{style:Z.pictureHolder},oe.map((function(e,t){return a.a.createElement(m.a,{key:e.image,onLongPress:function(){return re(t)},onPress:function(){return function(e){var t=Date.now();ne&&t-ne<200?re(e):ne=t}(t)}},a.a.createElement(f.a,{style:Z.pictureHolder},a.a.createElement(h.a,{style:Z.picture,resizeMode:"cover",source:{uri:e.image}}),e.showInfo&&a.a.createElement(f.a,{style:Z.pictureInfo},a.a.createElement(p.a,{underlayColor:"#cccccc",style:I({},Z.button,{marginLeft:2,marginRight:2}),onPress:function(){return function(e){n[b][e].isDeleted=!0,n[b+"_lastUpdate"]=Math.round((new Date).getTime()/1e3),j("pictures",JSON.stringify(n)),o(I({},n))}(t)}},a.a.createElement(d.a,null,"x")),e.tags.split(",").map((function(e){return a.a.createElement(p.a,{key:e,style:I({},Z.button,{marginLeft:2,marginRight:2}),underlayColor:"#cccccc",onPress:function(){x(e.trim()),ee(e)}},a.a.createElement(d.a,null,e))})))))})),a.a.createElement(p.a,{style:I({},Z.button,{marginBottom:50,marginLeft:"auto",marginRight:"auto"}),underlayColor:"#cccccc",onPress:function(){return H(U+10)}},a.a.createElement(d.a,null,"Load More"))),a.a.createElement(f.a,{style:Z.footer},v<4&&a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{style:Z.footerLink,underlayColor:"#ccc",onPress:function(){ae()}},a.a.createElement(d.a,null,"Media Viewer")),a.a.createElement(p.a,{style:I({},Z.footerLink,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){!function(e,t){var n=I({},q,s()({},e,t));G(n),j("settings",JSON.stringify(n))}("theme","dark"===$?"light":"dark")}},a.a.createElement(d.a,null,"dark"===$?"Light":"Dark"," Mode"))),v>20&&a.a.createElement(p.a,{style:Z.footerLink,onPress:function(){return ae()},underlayColor:"#ccc"},a.a.createElement(d.a,null,"Language (English)")),4===v&&a.a.createElement(p.a,{style:Z.footerLink,onPress:function(){return ae()},underlayColor:"#ccc"},a.a.createElement(d.a,null,"Settings")),v>4&&a.a.createElement(p.a,{style:Z.footerLink,onPress:function(){return L(0)},underlayColor:"#ccc"},a.a.createElement(d.a,null,"Back")),v>4&&a.a.createElement(p.a,{style:I({},Z.footerLink,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){localStorage.setItem("tags",JSON.stringify([])),Y([]),x("")}},a.a.createElement(d.a,null,"Clear tags")),v>4&&a.a.createElement(p.a,{style:I({},Z.footerLink,{borderLeftWidth:1}),underlayColor:"#ccc",onPress:function(){o([]),localStorage.setItem("pictures",JSON.stringify({}))}},a.a.createElement(d.a,null,"Clear cache"))))};window.oncontextmenu=function(e){return e.preventDefault(),e.stopPropagation(),!1};t.a=N},90:function(e,t,n){n(91),e.exports=n(138)},91:function(e,t){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/expo-service-worker.js",{scope:"/"}).then((function(e){})).catch((function(e){console.info("Failed to register service-worker",e)}))}))}},[[90,1,2]]]);
//# sourceMappingURL=../../f63c616cccd33a99384c.map