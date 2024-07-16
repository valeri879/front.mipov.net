import{a as G}from"./chunk-2DLUGXE4.js";import{b as R}from"./chunk-65TJLP2W.js";import{a as F,b as o,c as U,d as D,e as I,f as u,g as q,i as M,l as L,o as A}from"./chunk-26BHK4R3.js";import{i as k,j as P,m as T}from"./chunk-25DZAR4D.js";import"./chunk-74JUVWB4.js";import"./chunk-QFTSOMBC.js";import{Ib as C,Na as h,Pa as m,Qa as f,Ra as t,Sa as e,Ta as d,Ua as x,V as E,Va as b,Xa as S,Ya as v,Z as w,db as i,eb as y,fb as N,hb as _,ya as r,za as g}from"./chunk-FEPXA7XF.js";function O(a,l){a&1&&(t(0,"div",37),i(1,"Username can only contain letters and numbers, no spaces or special characters."),e())}function z(a,l){if(a&1&&(x(0),h(1,O,2,0,"div",10),b()),a&2){let c=v();r(),m("ngIf",c.userName.errors.pattern)}}function Y(a,l){if(a&1&&(t(0,"div",37),i(1),e()),a&2){let c=v();r(),y(c.error.message)}}function V(a,l){if(a&1&&(t(0,"div",37),i(1),e()),a&2){let c=v();r(),y(c.error.message)}}var te=(()=>{let l=class l{constructor(s,p){this._authenticationService=s,this._router=p,this.meta=E(G),this.showPassword=!1}ngOnInit(){this.meta.update("Share Your Social Networks Links - Mipov.net","Share Your Social Media Profile Links With One Platform"),this.form=new I({userName:new u("",[o.required,o.minLength(2),o.pattern(new RegExp("^[a-zA-Z0-9]+$"))]),firstName:new u("",[o.required]),lastName:new u("",[o.required]),email:new u("",[o.required,o.email]),password:new u("",[o.required,o.minLength(6),o.maxLength(55)]),about:new u("",[o.required,o.maxLength(55)])})}signUp(){this._authenticationService.signUp(this.form.value).subscribe({next:({accessToken:s})=>{s&&this._router.navigateByUrl("/email-verification")},error:({error:s})=>this.error=s})}get userName(){return this.form.controls.userName}};l.\u0275fac=function(p){return new(p||l)(g(R),g(k))},l.\u0275cmp=w({type:l,selectors:[["app-sign-up-page"]],standalone:!0,features:[_],decls:109,vars:15,consts:[[1,"container","py-3"],[1,"row"],[1,"col-md-4","mb-3"],[3,"formGroup"],["for","userName"],[1,"input-group","has-validation","mb-3"],[1,"input-group-text"],[1,"text-success"],["id","userName","type","text","formControlName","userName","placeholder","Unique user name",1,"form-control"],[4,"ngIf"],["class","invalid-feedback",4,"ngIf"],["for","name"],[1,"input-group","mb-3"],["id","name","type","text","formControlName","firstName",1,"form-control"],["for","lastName"],["id","lastName","type","text","formControlName","lastName",1,"form-control"],["for","email"],["id","email","type","type","formControlName","email",1,"form-control"],["for","password"],[1,"input-group","mb-2"],["id","password","formControlName","password",1,"form-control",3,"type"],[1,"form-check","mb-3"],["type","checkbox","value","","id","showNewPassword",1,"form-check-input",3,"change"],["for","showNewPassword",1,"form-check-label","text-primary","user-select-none"],["for","about"],["id","about","formControlName","about",1,"form-control"],[1,"mb-3"],["routerLink","/privacy-policy"],[1,"btn","btn-success","w-100",3,"click","disabled"],[1,"col-md-8"],[1,"partners","pb-3"],[1,"container"],[1,"text-center"],[1,"d-flex","align-items-center","gap-3","justify-content-center"],["target","_blank","href","https://val-do.com"],["target","_blank","href","https://servisebi.ge"],["target","_blank","href","https://upstore.ge"],[1,"invalid-feedback"]],template:function(p,n){p&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),i(4,"\u{1F680} Sign up"),e(),t(5,"p"),i(6," Streamline your online presence with our app, where you can conveniently manage and share all your social media profiles from one centralized platform. "),e(),t(7,"form",3)(8,"label",4),i(9,"User name:"),e(),t(10,"div",5)(11,"span",6)(12,"span",7),i(13,"https:"),e(),i(14,"//mipov.net/"),e(),d(15,"input",8),h(16,z,2,1,"ng-container",9)(17,Y,2,1,"div",10),e(),t(18,"label",11),i(19,"First name:"),e(),t(20,"div",12)(21,"span",6),i(22,"\u{1F464}"),e(),d(23,"input",13),e(),t(24,"label",14),i(25,"Last name:"),e(),t(26,"div",12)(27,"span",6),i(28,"\u{1F3A9}"),e(),d(29,"input",15),e(),t(30,"label",16),i(31,"Email:"),e(),t(32,"div",12)(33,"span",6),i(34,"\u2709\uFE0F"),e(),d(35,"input",17),h(36,V,2,1,"div",10),e(),t(37,"label",18),i(38,"Password"),e(),t(39,"div",19)(40,"span",6),i(41,"\u{1F512}"),e(),d(42,"input",20),e(),t(43,"div",21)(44,"input",22),S("change",function(){return n.showPassword=!n.showPassword}),e(),t(45,"label",23)(46,"u"),i(47),e()()(),t(48,"label",24),i(49,"About"),e(),t(50,"div",12),d(51,"textarea",25),e(),t(52,"div",26),i(53,"\u26A0\uFE0F By "),t(54,"b"),i(55,"signing up"),e(),i(56," on this site, you agree to our "),t(57,"a",27),i(58,"privacy policy."),e()(),t(59,"button",28),S("click",function(){return n.signUp()}),i(60,"Sign up"),e()()(),t(61,"div",29)(62,"h2"),i(63,"Connect and Share Your Social Media Profiles with Ease"),e(),t(64,"p"),i(65," At Mipov.net, we make it simple for you to share all your social media profiles in one convenient place. Whether you're a content creator, influencer, or just someone who loves to connect with friends and followers, our platform is designed to help you manage and share your social media presence effortlessly. "),e(),t(66,"h2"),i(67,"Sign Up to Get Started"),e(),t(68,"p"),i(69,"Create your free account today and start sharing your social media profiles in minutes. Simply fill in the form below:"),e(),t(70,"h3"),i(71,"Required Fields:"),e(),t(72,"ul")(73,"li"),i(74,"Username: Create a unique username that will be part of your public profile URL. (Must be unique)"),e(),t(75,"li"),i(76,"First Name: Enter your first name."),e(),t(77,"li"),i(78,"Last Name: Enter your last name."),e(),t(79,"li"),i(80,"Email: Enter a valid email address. This will be used for account verification and communication. (Must be unique)"),e(),t(81,"li"),i(82,"Password: Choose a strong password to keep your account secure."),e()(),t(83,"h2"),i(84,"Why Join mipov.net?"),e(),t(85,"ul")(86,"li"),i(87,"All-In-One Platform: Share your YouTube, TikTok, Facebook, Twitter, Instagram, and more from a single profile."),e(),t(88,"li"),i(89,"Easy to Use: Our user-friendly interface makes adding and managing your links quick and simple."),e(),t(90,"li"),i(91,"Customizable: Personalize your profile to reflect your brand or personality."),e(),t(92,"li"),i(93,"Connect with Everyone: Make it easier for people to find and follow you on all your social media accounts."),e()(),t(94,"h2"),i(95,"Get Started Now!"),e(),t(96,"p"),i(97,"Fill out the form to create your account and start sharing your social media links today. Join the growing community of users who trust mipov.net to manage their social media links."),e()()()(),t(98,"section",30)(99,"div",31)(100,"h5",32),i(101,"Our partners"),e(),t(102,"div",33)(103,"a",34),i(104,"val-do.com"),e(),t(105,"a",35),i(106,"servisebi.ge"),e(),t(107,"a",36),i(108,"upstore.ge"),e()()()()),p&2&&(r(7),m("formGroup",n.form),r(3),f("has-validation",n.userName.invalid&&n.userName.dirty||(n.error==null?null:n.error.errorType)=="userName"),r(5),f("is-invalid",n.userName.invalid&&n.userName.dirty||(n.error==null?null:n.error.errorType)=="userName"),r(),m("ngIf",n.userName.errors),r(),m("ngIf",(n.error==null?null:n.error.errorType)=="userName"),r(15),f("has-validation",n.error?n.error.errorType=="email":!1),r(3),f("is-invalid",n.error?n.error.errorType=="email":!1),r(),m("ngIf",(n.error==null?null:n.error.errorType)=="email"),r(6),m("type",n.showPassword?"text":"password"),r(5),N("",n.showPassword?"Hide":"Show"," password"),r(12),m("disabled",n.form.invalid))},dependencies:[A,q,F,U,D,M,L,T,P,C]});let a=l;return a})();export{te as SignUpPageComponent};