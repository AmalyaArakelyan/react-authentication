(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{51:function(e,t,a){e.exports=a(82)},56:function(e,t,a){},57:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(26),o=a.n(l);a(56),a(57),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(15),c=a(24),u=r.a.createContext(null),i=function(e){return function(t){return r.a.createElement(u.Consumer,null,function(a){return r.a.createElement(e,Object.assign({},t,{firebase:a}))})}},m=u,h=a(8),p=a(29),d=a.n(p),f=(a(60),a(61),a(40)),E=a.n(f),b={apiKey:"AIzaSyAEO-jZPfPyPtprxDcS7gq35MK-LA_ESMM",authDomain:"reactapp-87062.firebaseapp.com",databaseURL:"https://reactapp-87062.firebaseio.com",projectId:"reactapp-87062",storageBucket:"reactapp-87062.appspot.com",messagingSenderId:"1:623734549781:web:aad2cf78766008d3"},g=function e(){var t=this;Object(h.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.createUser=function(e){t.db.ref("users/"+e.uid).set({username:e.username,email:e.email,phone:e.phoneNumber},function(e){})},this.getUser=function(){var e=t.auth.currentUser.uid;return t.db.ref("/users/"+e).once("value").then(function(e){return e.val()})},this.updateUser=function(e){var a=t.auth.currentUser;a.email!==e.email&&(t.auth.signInWithEmailAndPassword(a.email,"Amalya@123").then(function(e){e.user.updateEmail("user.email")}),a.updateEmail(e.email).then(function(){}).catch(function(e){})),a.updateProfile({displayName:e.username,photoURL:e.photoUrl}).then(function(){}).catch(function(e){}),t.db.ref("users/"+a.uid).set({username:e.username,email:e.email,phone:e.phoneNumber},function(e){})},this.onAuthStateChanged=function(){return t.auth.onAuthStateChanged(function(e){})},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e,a){var n=t.auth.currentUser;return t.auth.signInWithEmailAndPassword(n.email,e).then(function(e){e.user.updatePassword(a)})},this.addPhoto=function(e){var a,n={contentType:"image/jpeg"},r=[];for(a=0;a<e.length;a++){var l=e[a].name;t.storage.child("images/".concat(l)).put(e[a],n),t.storage.child("images/".concat(l)).getDownloadURL().then(function(e){r.push(e)}).catch(function(e){})}return r},this.addProfileImage=function(e){var a=t.auth.currentUser,n=e[0].name;return t.storage.child("images/".concat(n)).put(e[0],{contentType:"image/jpeg"}),t.storage.child("images/".concat(n)).getDownloadURL().then(function(e){return a.updateProfile({photoURL:e}),e}).catch(function(e){})},this.getImages=function(){var e=t.auth.currentUser;return t.storage.child("files/".concat(e.uid)).listAll()},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},d.a.initializeApp(b),this.auth=d.a.auth(),this.db=d.a.database(),this.storage=E.a.storage().ref()},v=a(2),w=i(function(e){var t=e.firebase;return r.a.createElement(v.a,{onClick:t.doSignOut,color:"default-color-dark",type:"submit"},"Sign Out")}),O="/home",j=r.a.createContext(null),y=a(10),N=a(12),C=a(11),S=a(13),U=function(e){var t=function(t){function a(e){var t;return Object(h.a)(this,a),(t=Object(N.a)(this,Object(C.a)(a).call(this,e))).state={authUser:null},t}return Object(S.a)(a,t),Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(t){t?e.setState({authUser:t}):e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(j.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),a}(r.a.Component);return i(t)},P=a(20),x=function(e){return function(t){var a=function(a){function n(){return Object(h.a)(this,n),Object(N.a)(this,Object(C.a)(n).apply(this,arguments))}return Object(S.a)(n,a),Object(y.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.auth.onAuthStateChanged(function(a){e(a)||t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var a=this;return r.a.createElement(j.Consumer,null,function(n){return e(n)?r.a.createElement(t,a.props):null})}}]),n}(r.a.Component);return Object(P.a)(c.e,i)(a)}},k=function(){return r.a.createElement(v.i,{color:"default-color",dark:!0,expand:"md"},r.a.createElement(v.j,null,r.a.createElement("strong",{className:"white-text"},"React Autentication")),r.a.createElement(v.l,null),r.a.createElement(v.c,{id:"navbarCollapse3",navbar:!0},r.a.createElement(v.k,{left:!0},r.a.createElement(v.g,{active:!0},r.a.createElement(v.h,{to:O},"Home")),r.a.createElement(v.g,null,r.a.createElement(v.h,{to:"/account"},"Edit Personal Date")),r.a.createElement(v.g,null,r.a.createElement(v.h,{to:"/admin"},"Add Photo")),r.a.createElement(v.g,null,r.a.createElement(w,null)))))},R=function(){return r.a.createElement(v.i,{color:"default-color",dark:!0,expand:"md"},r.a.createElement(v.j,null,r.a.createElement("strong",{className:"white-text"},"React Autentication")),r.a.createElement(v.l,null),r.a.createElement(v.c,{id:"navbarCollapse3",navbar:!0},r.a.createElement(v.k,{left:!0},r.a.createElement(v.g,{active:!0},r.a.createElement(v.h,{to:"/signin"},"Sign In")),r.a.createElement(v.g,null,r.a.createElement(v.h,{to:"/signup"},"Registration")))))},A=function(){return r.a.createElement("div",null,r.a.createElement(j.Consumer,null,function(e){return e?r.a.createElement(k,null):r.a.createElement(R,null)}))},I=function(){return r.a.createElement("div",null)},L=a(17),F=a(14),W={username:"",email:"",phoneNumber:"",photoURL:"",passwordOne:"",passwordTwo:"",error:null},D=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.phoneNumber,l=t.photoURL,o=t.email,s=t.passwordOne;a.props.firebase.doCreateUserWithEmailAndPassword(o,s).then(function(e){a.props.firebase.createUser({username:n,email:o,phoneNumber:r,photoURL:l,uid:e.user.uid}),a.props.firebase.updateUser({username:n,email:o,phoneNumber:r,photoURL:l})}).then(function(){a.setState(Object(F.a)({},W)),a.props.history.push(O)}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(F.a)({},W),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.phoneNumber,l=e.passwordOne,o=e.passwordTwo,s=e.error;return r.a.createElement(v.d,null,r.a.createElement(v.m,null,r.a.createElement(v.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Sign up"),r.a.createElement("label",{htmlFor:"email",className:"grey-text"},"Email Address as login"),r.a.createElement("input",{type:"email",id:"email",className:"form-control",name:"email",value:a,onChange:this.onChange,placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"name",className:"grey-text"},"Your name"),r.a.createElement("input",{type:"text",id:"name",className:"form-control",name:"username",value:t,onChange:this.onChange,placeholder:"Full Name"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"number",className:"grey-text"},"Phone number"),r.a.createElement("input",{type:"text",id:"number",className:"form-control",name:"phoneNumber",value:n,onChange:this.onChange,placeholder:"Phone number"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password",className:"grey-text"},"Your password"),r.a.createElement("input",{id:"password",className:"form-control",name:"passwordOne",value:l,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("label",{htmlFor:"passwordTwo",className:"grey-text"},"Repeat password"),r.a.createElement("input",{id:"passwordTwo",className:"form-control",name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"confirm Password"}),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(v.a,{color:"unique",type:"submit"},"Register")),s&&r.a.createElement("p",null,s.message)))))}}]),t}(n.Component),T=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(s.b,{to:"/signup"},"Sign Up"))},M=Object(P.a)(c.e,i)(D),q=function(){return r.a.createElement("div",null,r.a.createElement(M,null))},Y={email:"",error:null},z=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state.email;a.props.firebase.doPasswordReset(t).then(function(){a.setState(Object(F.a)({},Y))}).catch(function(e){a.setState({error:e})}),e.preventDefault()},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(F.a)({},Y),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.error;return r.a.createElement(v.d,null,r.a.createElement(v.m,null,r.a.createElement(v.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Update personal information"),r.a.createElement("label",{htmlFor:"email2",className:"grey-text"},"New password"),r.a.createElement("input",{id:"email2",className:"form-control",name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(v.a,{color:"unique",type:"submit"},"Reset My Password")),a&&r.a.createElement("p",null,a.message)))))}}]),t}(n.Component),B=function(){return r.a.createElement("p",null,r.a.createElement(s.b,{to:"/pw-forget"},"Forgot Password?"))},H=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(J,null))},J=i(z),K={email:"",password:"",error:null},Z=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.password;a.props.firebase.doSignInWithEmailAndPassword(n,r).then(function(e){a.setState(Object(F.a)({},K)),a.props.history.push(O);e.user}).catch(function(e){a.setState({error:e})})},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(F.a)({},K),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,l=""===a||""===t;return r.a.createElement(v.d,null,r.a.createElement(v.m,null,r.a.createElement(v.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h4 text-center mb-4"},"Sign in"),r.a.createElement("label",{htmlFor:"email3",className:"grey-text"},"Your email"),r.a.createElement("input",{type:"email",id:"email3",className:"form-control",name:"email",value:t,onChange:this.onChange,placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password2",className:"grey-text"},"Your password"),r.a.createElement("input",{type:"password",id:"password2",className:"form-control",name:"password",value:a,onChange:this.onChange,placeholder:"Password"}),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(v.a,{disabled:l,color:"indigo",type:"submit"},"Login")),n&&r.a.createElement("p",null,n.message)))))}}]),t}(n.Component),$=Object(P.a)(c.e,i)(Z),_=function(){return r.a.createElement("div",null,r.a.createElement($,null),r.a.createElement(B,null),r.a.createElement(T,null))},G=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).state={loading:!1,user:[],users:[]},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.getUser()}},{key:"componentWillReceiveProps",value:function(){console.log(this.state.user)}},{key:"getUser",value:function(){var e=this,t=this.props.firebase.auth.currentUser;this.setState({loading:!0,user:t}),this.props.firebase.users().on("value",function(t){var a=t.val(),n=Object.keys(a).map(function(e){return Object(F.a)({},a[e],{uid:e})});e.setState({users:n,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.user,a=e.users,n=e.loading;return r.a.createElement(j.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Hi ",r.a.createElement("span",{className:"teal-text"},t.displayName),", welcome to home page"),r.a.createElement("div",null,r.a.createElement("img",{src:t.photoURL,alt:"",width:150})),r.a.createElement("h1",null,"All users"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement(Q,{users:a}))})}}]),t}(n.Component),Q=function(e){var t=e.users;return r.a.createElement(v.p,null,r.a.createElement(v.r,{color:"primary-color",textWhite:!0},r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"email"),r.a.createElement("th",null,"Name"))),r.a.createElement(v.q,null,t.map(function(e){return r.a.createElement("tr",{key:e.uid},r.a.createElement("td",null,e.uid),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.username))})))},V=x(function(e){return!!e})(G),X={password:"",passwordOne:"",passwordTwo:"",error:null},ee=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault();var t=a.state,n=t.password,r=t.passwordOne;a.props.firebase.doPasswordUpdate(n,r).then(function(){a.setState(Object(F.a)({},X))}).catch(function(e){a.setState({error:e})})},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(F.a)({},X),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this.state,t=e.password,a=e.passwordOne,n=e.passwordTwo,l=e.error;return r.a.createElement(v.d,null,r.a.createElement(v.m,null,r.a.createElement(v.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("p",{className:"h4 text-center mb-4"},"Change password"),r.a.createElement("label",{htmlFor:"password0",className:"grey-text"},"Current password"),r.a.createElement("input",{id:"password0",className:"form-control",name:"password",value:t,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"password1",className:"grey-text"},"New password"),r.a.createElement("input",{id:"password1",className:"form-control",name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"passwordTwo1",className:"grey-text"},"Confirm password"),r.a.createElement("input",{id:"passwordTwo1",className:"form-control",name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm password"}),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(v.a,{color:"unique",type:"submit"},"Update")),l&&r.a.createElement("p",null,l.message)))))}}]),t}(n.Component),te=i(ee),ae=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).toggle=function(e){return function(){a.state.activeItem!==e&&a.setState({activeItem:e})}},a.state={activeItem:"1"},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(j.Consumer,null,function(t){return r.a.createElement(v.d,null,r.a.createElement(v.f,{tabs:!0,color:"default-color"},r.a.createElement(v.g,null,r.a.createElement(v.h,{to:"#",className:"1"===e.state.activeItem?"active teal-text":"cyan-text",onClick:e.toggle("1"),role:"tab"},r.a.createElement(v.e,{icon:"user"})," Update Information")),r.a.createElement(v.g,null,r.a.createElement(v.h,{to:"#",className:"3"===e.state.activeItem?"active teal-text":"cyan-text",onClick:e.toggle("3"),role:"tab"},r.a.createElement(v.e,{icon:"envelope"})," change Password"))),r.a.createElement(v.n,{className:"card",activeItem:e.state.activeItem},r.a.createElement(v.o,{tabId:"1",role:"tabpanel"},r.a.createElement(le,null)),r.a.createElement(v.o,{tabId:"3",role:"tabpanel"},r.a.createElement(te,null))))})}}]),t}(n.Component),ne={username:"",email:"",phoneNumber:"",photoURL:"",passwordOne:"",passwordTwo:"",error:null},re=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.phoneNumber,l=t.photoURL,o=t.email;e.preventDefault(),a.props.firebase.updateUser({username:n,email:o,phoneNumber:r,photoURL:l})},a.AddProfileImage=function(e){a.props.firebase.addProfileImage(e.target.files).then(function(e){return a.setState({photoURL:e}),e}).catch(function(e){})},a.onChange=function(e){a.setState(Object(L.a)({},e.target.name,e.target.value))},a.state=Object(F.a)({},ne),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.firebase.getUser().then(function(t){console.log(t,"data"),e.setState({username:t.username,email:t.email,phoneNumber:t.phone})}).catch(function(e){});var t=this.props.firebase.auth.currentUser;this.setState({username:t.username,email:t.email,photoURL:t.photoURL})}},{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.phoneNumber,l=e.photoURL,o=e.error;return console.log(l),r.a.createElement(v.d,null,r.a.createElement(v.m,null,r.a.createElement(v.b,{md:"6"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("h1",{className:"h4 text-center mb-4 mt-3"},"Update personal information"),r.a.createElement("label",{htmlFor:"file",className:"grey-text"},"Add profile image"),r.a.createElement("input",{type:"file",id:"file",className:"",name:"file",onChange:this.AddProfileImage,placeholder:"Full Name"}),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("img",{src:l,alt:"",width:150})),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"name",className:"grey-text"},"Your name"),r.a.createElement("input",{type:"text",id:"name",className:"form-control",name:"username",value:t||"",onChange:this.onChange,placeholder:"Full Name"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"phone",className:"grey-text"},"Phone Number"),r.a.createElement("input",{type:"text",id:"phone",className:"form-control",name:"phoneNumber",value:n||"",onChange:this.onChange,placeholder:"Phone Number"}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"email1",className:"grey-text"},"Email Address"),r.a.createElement("input",{type:"email",id:"email1",className:"form-control",name:"email",value:a||"",onChange:this.onChange,placeholder:"Email Address"}),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center mt-4"},r.a.createElement(v.a,{color:"unique",type:"submit"},"Update")),o&&r.a.createElement("p",null,o.message)))))}}]),t}(n.Component),le=Object(P.a)(c.e,i)(re),oe=x(function(e){return!!e})(ae),se=a(50),ce=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).toggle=function(e){return function(){a.state.activeItem!==e&&a.setState({activeItem:e})}},a.state={activeItem:"1"},a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return r.a.createElement(j.Consumer,null,function(e){return r.a.createElement(me,null)})}}]),t}(n.Component),ue={photo:"",files:"",error:null},ie=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(N.a)(this,Object(C.a)(t).call(this,e))).onSubmit=function(e){var t=a.state,n=t.username,r=t.phoneNumber,l=t.photoURL,o=t.email;e.preventDefault(),a.props.firebase.updateUser({username:n,email:o,phoneNumber:r,photoURL:l})},a.onChange=function(e){a.setState({file:e}),a.props.firebase.addPhoto(e)},a.state=Object(F.a)({},ue),a}return Object(S.a)(t,e),Object(y.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.props.firebase.getUser().then(function(t){console.log(t,"data"),e.setState({username:t.username,email:t.email,phoneNumber:t.phone})}).catch(function(e){})}},{key:"componentWillReceiveProps",value:function(){}},{key:"render",value:function(){var e=this,t=this.state.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{onDrop:function(t){return e.onChange(t)}},function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",Object.assign({},t(),{className:"dropzone"}),r.a.createElement("input",a()),r.a.createElement("p",{className:"pt-3"},"Click to select files")))}),t&&r.a.createElement("p",null,t.message),r.a.createElement("div",null,this.state.files.length>0&&this.state.files.map(function(e){return r.a.createElement(v.d,null,r.a.createElement("img",{src:e,alt:""}))})))}}]),t}(n.Component),me=Object(P.a)(c.e,i)(ie),he=x(function(e){return!!e})(ce),pe=U(function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("hr",null),r.a.createElement(c.a,{exact:!0,path:"/",component:I}),r.a.createElement(c.a,{path:"/signup",component:q}),r.a.createElement(c.a,{path:"/signin",component:_}),r.a.createElement(c.a,{path:"/pw-forget",component:H}),r.a.createElement(c.a,{path:O,component:V}),r.a.createElement(c.a,{path:"/account",component:oe}),r.a.createElement(c.a,{path:"/admin",component:he})))});a(79),a(80),a(81);o.a.render(r.a.createElement(m.Provider,{value:new g},r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[51,1,2]]]);
//# sourceMappingURL=main.a7b864be.chunk.js.map