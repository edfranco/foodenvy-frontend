(window.webpackJsonpfrontend=window.webpackJsonpfrontend||[]).push([[0],{34:function(e,t,a){e.exports=a(69)},39:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),o=a.n(s),l=a(10),i=(a(39),a(5)),c=a(6),u=a(8),m=a(7),h=a(9),p=a(13),d=a(2),g=a.n(d),f=(a(57),function(e){var t=e.logout,a=e.currentUser;return r.a.createElement("nav",null,r.a.createElement(l.b,{to:a?"/my_home":"/"},r.a.createElement("h1",{className:"nav-header"},"FoodEnvy")),r.a.createElement("ul",{className:"nav-links"},a?r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/my_home"},r.a.createElement("li",null,"Profile")),r.a.createElement("li",{style:{cursor:"pointer"},onClick:t},"Logout")):r.a.createElement(r.a.Fragment,null,r.a.createElement(l.b,{to:"/login"},r.a.createElement("li",null,"Log In")),r.a.createElement(l.b,{to:"/"},r.a.createElement("li",null,"Register")))))}),E=a(14),v=function(e){var t=e.handleChange,a=e.handleSubmit,n=e.formInfo;return r.a.createElement("form",{className:"register-form"},r.a.createElement("h5",null,"Register"),r.a.createElement("label",null,"Username"),r.a.createElement("input",{name:"username",type:"text",onChange:t,value:n.username}),r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",type:"text",onChange:t,value:n.email}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",onChange:t,value:n.password}),r.a.createElement("label",null,"Confirm Password"),r.a.createElement("input",{name:"password2",type:"password",onChange:t,value:n.password2}),r.a.createElement("button",{onClick:a},"Register"),r.a.createElement("p",null,"Come join our ever growing community of foodies. Be the envy of your friends' appetites"))},b=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state;g.a.post("http://localhost:4000/api/v1/auth/login",t,{withCredentials:!0}).then(function(e){a.props.setCurrentUser(e.data.id),a.props.history.push("/my_home")}).catch(function(e){console.log(e.response)})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"register-form"},r.a.createElement("h5",null,"Log In"),r.a.createElement("label",null,"Email"),r.a.createElement("input",{name:"email",type:"text",onChange:this.handleChange,value:this.state.email}),r.a.createElement("label",null,"Password"),r.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange,value:this.state.password}),r.a.createElement("button",{onClick:this.handleSubmit},"Log In"))}}]),t}(n.Component),y=(a(63),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",password2:""},a.registerUser=function(){var e=a.state;g.a.post("http://localhost:4000/api/v1/auth/register",e).then(function(e){a.props.history.push("/login")}).catch(function(e){console.log(e.response)})},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.registerUser()},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"home-image"},r.a.createElement("img",{src:"https://static8.depositphotos.com/1273864/887/i/950/depositphotos_8878936-stock-photo-greek-salad-gourmet-food-white.jpg",alt:"fruit salad"})),this.props.login?r.a.createElement(b,{history:this.props.history,currentUser:this.props.currentUser,setCurrentUser:this.props.setCurrentUser}):r.a.createElement(v,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,formInfo:this.state}))}}]),t}(n.Component)),C=a(33),w=(a(64),function(e){var t=e.deletePost,a=e.restaurantName,n=e.image,s=e.time,o=e.description,i=e.slug,c=e.id,u=e.user;return r.a.createElement("div",{className:"post-card"},r.a.createElement("div",{className:"post-header"},u&&r.a.createElement("div",{className:"post-author-info"},r.a.createElement("img",{src:u.profile_image,alt:"".concat(u.username," profile")}),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/profile/".concat(u._id)},r.a.createElement("h3",null,"@",u.username)),r.a.createElement(l.b,{to:"/restaurant/".concat(i)}," ",r.a.createElement("p",null," ",a," ")," "))),r.a.createElement("p",{style:{cursor:"pointer"},onClick:function(){return t(c)}},"x")),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:n,alt:"post"})),r.a.createElement("p",null," ",o),r.a.createElement("p",null,"Posted at: ",new Date(s).toLocaleDateString()))}),P=(a(65),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).displayPosts=function(){return a.props.posts.map(function(e,t){return r.a.createElement(w,{key:t,id:e._id,restaurantName:e.restaurant_name,image:e.image,time:e.time_posted,description:e.description,slug:e.restaurant_slug,deletePost:a.props.deletePost,user:e.user_id})})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"posts"},this.displayPosts())}}]),t}(n.Component)),N="http://localhost:4000/api/v1/",j=(a(66),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={restaurant:{},posts:[],shouldDisplayMap:!1,KEY:""},a.setRestaurant=function(){g.a.get("".concat(N,"restaurants/").concat(a.props.name)).then(function(e){a.setState({restaurant:e.data.data,posts:e.data.data.posts})}).catch(function(e){return console.log(e)})},a.getKey=function(){g.a.get("".concat(N,"maps")).then(function(e){return a.setState({KEY:e.data.key})})},a.displayPosts=function(){return a.state.posts.map(function(e,t){return r.a.createElement(w,{key:t,id:e._id,restaurantName:e.restaurant_name,image:e.image,time:e.time_posted,description:e.description,slug:e.restaurant_slug,deletePost:a.props.deletePost,user:e.user_id})})},a.handleClick=function(){a.setState({shouldDisplayMap:!a.state.shouldDisplayMap})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setRestaurant(),this.getKey()}},{key:"render",value:function(){return r.a.createElement("div",{className:"restaurant"},this.state.restaurant&&this.props.name&&r.a.createElement("div",{className:"restaurants"},this.state.restaurant.name,r.a.createElement("img",{className:"restaurant-image",src:this.state.restaurant.image_url,alt:"".concat(this.state.restaurant.name," storefront")}),r.a.createElement("p",null," ",this.state.restaurant.location," "),r.a.createElement("button",{onClick:this.handleClick},"Show Location")),!this.state.shouldDisplayMap&&this.state.posts.length>0?this.displayPosts():r.a.createElement("div",null,r.a.createElement("iframe",{className:"map",src:"https://www.google.com/maps/embed/v1/place?key=".concat(this.state.KEY,"\n                                &q=").concat(this.state.restaurant.location),allowfullscreen:!0})))}}]),t}(n.Component)),O=(a(67),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={shouldDisplayNewPostForm:!1,shouldDisplayNewPicForm:!1,user:{},buttonText:"New Post",image:"",description:"",restaurant_name:"",user_id:a.props.currentUser,restaurant_slug:"",profileImage:"",bio:"",posts:[],homeGridStyleWithRestaurant:{display:"grid",gridTemplateColumns:"25% 40% 45%"},defaultHomeGridStyle:{display:"grid",gridTemplateColumns:"40% 60%"}},a.setPosts=function(e){console.log(e),g.a.get("".concat(N,"users/").concat(e)).then(function(e){return a.setState({posts:e.data.data.posts})}).catch(function(e){return console.log(e)})},a.deletePost=function(e){a.setState({posts:a.state.posts.filter(function(t){return t._id!==e})}),g.a.delete("".concat(N,"posts/").concat(e)).then().catch()},a.getUserInfo=function(e){console.log(e),g.a.get("".concat(N,"users/").concat(e)).then(function(e){console.log(e),a.setState({user:e.data.data,bio:e.data.data.bio,posts:e.data.data.posts,profileImage:e.data.data.profile_image})}).catch(function(e){return console.log(e)})},a.changeProfilePic=function(){g.a.put("".concat(N,"users/").concat(a.state.user._id),{profile_image:a.state.profileImage}).then(function(e){return console.log(e.data.data.profile_image)}).catch(function(e){return console.log(e)})},a.changeBio=function(){g.a.put("".concat(N,"users/").concat(a.state.user._id),{bio:a.state.bio}).then(function(e){return console.log(e.data.data.bio)}).catch(function(e){return console.log(e)})},a.submitPost=function(){var e={image:a.state.image,description:a.state.description,restaurant_name:a.state.restaurant_name,user_id:a.props.currentUser,restaurant_slug:a.state.restaurant_slug};a.setState({posts:[].concat(Object(C.a)(a.state.posts),[e]),shouldDisplayNewPostForm:!1,image:"",description:"",restaurantName:""}),g.a.post("".concat(N,"posts"),e).then().catch()},a.handleProfileImageChange=function(e){a.setState({profileImage:e.target.value})},a.handleDisplayPostForm=function(){a.setState({shouldDisplayNewPostForm:!a.state.shouldDisplayNewPostForm})},a.handleDisplayPicForm=function(){a.setState({shouldDisplayNewPicForm:!a.state.shouldDisplayNewPicForm})},a.handleFormPost=function(e){e.preventDefault(),a.submitPost()},a.handlePicChange=function(e){e.preventDefault(),a.changeProfilePic()},a.handleBioChange=function(e){e.preventDefault(),a.changeBio()},a.handleChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.user),this.state.user?(console.log(!0),this.getUserInfo(this.props.user),this.setPosts(this.props.user)):(this.getUserInfo(this.props.currentUser),this.setPosts(this.props.currentUser))}},{key:"componentWillReceiveProps",value:function(e){console.log(e),e.user?(this.getUserInfo(e.user),this.setPosts(e.user)):(this.getUserInfo(e.currentUser),this.setPosts(e.currentUser))}},{key:"render",value:function(){return r.a.createElement("div",{className:"my-home",style:this.props.restaurantName?this.state.homeGridStyleWithRestaurant:this.state.defaultHomeGridStyle},r.a.createElement("div",{className:"profile"},r.a.createElement("div",{className:"profile-header"},r.a.createElement("div",{className:"image-container"},r.a.createElement("i",{style:{cursor:"pointer"},onClick:this.handleDisplayPicForm,className:"far fa-edit"}),r.a.createElement("img",{src:this.state.profileImage,alt:"".concat(this.state.user.username,"'s profile")})),r.a.createElement("div",{className:"user-info"},r.a.createElement("strong",null,r.a.createElement("p",null,"@",this.state.user.username)),r.a.createElement("p",null,this.state.user.name))),this.state.shouldDisplayNewPicForm&&r.a.createElement("div",{className:"new-pic"},r.a.createElement("label",null,"New Pic Url"),r.a.createElement("input",{onChange:this.handleProfileImageChange}),r.a.createElement("button",{onClick:this.handlePicChange},"Submit")),r.a.createElement("div",null,r.a.createElement("strong",null,"Bio:"),this.state.shouldDisplayNewPicForm?r.a.createElement("div",null,r.a.createElement("input",{name:"bio",onChange:this.handleChange}),r.a.createElement("button",null,"Submit")):r.a.createElement("p",{className:"bio"}," ",this.state.bio," ")),r.a.createElement("button",{onClick:this.handleDisplayPostForm},this.state.buttonText),this.state.shouldDisplayNewPostForm&&r.a.createElement("form",{className:"new-post-form profile-form"},r.a.createElement("h5",null,"New Post"),r.a.createElement("label",null,"Restaurant Name"),r.a.createElement("input",{type:"text",placeholder:"Where did you go?",name:"restaurant_name",value:this.state.restaurant_name,onChange:this.handleChange}),r.a.createElement("label",null,"Description"),r.a.createElement("input",{type:"text",placeholder:"yummy food",name:"description",value:this.state.description,onChange:this.handleChange}),r.a.createElement("label",null,"Image Url"),r.a.createElement("input",{name:"image",value:this.state.image,onChange:this.handleChange}),r.a.createElement("select",{name:"restaurant_slug",onChange:this.handleChange,value:this.state.restaurant_slug},r.a.createElement("option",null,"Select Restaurant"),r.a.createElement("option",{value:"valla-sf"},"Taqueria Vallarta"),r.a.createElement("option",{value:"gordatorta"},"La Torta Gorda")),r.a.createElement("button",{onClick:this.handleFormPost},"Post"))),r.a.createElement(P,{posts:this.state.posts,currentUser:this.props.currentUser,deletePost:this.deletePost}),this.props.restaurantName&&r.a.createElement(j,{name:this.props.restaurantName,deletePost:this.deletePost}))}}]),t}(n.Component)),U=Object(p.f)(function(e){var t=e.currentUser,a=e.setCurrentUser;return r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:y}),r.a.createElement(p.a,{path:"/login",render:function(e){return r.a.createElement(y,Object.assign({},e,{login:"login",setCurrentUser:a,currentUser:t}))}}),r.a.createElement(p.a,{path:"/register",component:v}),r.a.createElement(p.a,{path:"/my_home",render:function(e){return r.a.createElement(O,Object.assign({},e,{currentUser:t}))}}),r.a.createElement(p.a,{path:"/restaurant/:restaurant_name",render:function(e){return r.a.createElement(O,Object.assign({},e,{currentUser:t,restaurantName:e.match.params.restaurant_name}))}}),r.a.createElement(p.a,{path:"/profile/:user",render:function(e){return r.a.createElement(O,Object.assign({},e,{user:e.match.params.user}))}}))}),_=(a(68),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentUser:localStorage.getItem("uid")},a.setCurrentUser=function(e){localStorage.setItem("uid",e),a.setState({currentUser:e})},a.handleLogout=function(){localStorage.removeItem("uid"),g.a.post("http://localhost:4000/api/v1/auth/logout",{withCredentials:!0}).then(function(){a.setState({currentUser:null}),a.props.history.push("/login")}).catch(function(e){return console.log(e.response)})},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,{logout:this.handleLogout,currentUser:this.state.currentUser}),r.a.createElement(U,{setCurrentUser:this.setCurrentUser,currentUser:this.state.currentUser}))}}]),t}(n.Component)),S=Object(p.f)(_);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.cac98e85.chunk.js.map