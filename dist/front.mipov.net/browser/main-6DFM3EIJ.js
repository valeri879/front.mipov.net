import{a as h,b as f}from"./chunk-65TJLP2W.js";import{a as re,b as ae,e as se,f as le,h as ce,i as C,j as b,k as w,l as pe,m as me}from"./chunk-25DZAR4D.js";import"./chunk-74JUVWB4.js";import{a as te,c as ne,d as oe,e as ie}from"./chunk-QFTSOMBC.js";import{Aa as j,Ab as Z,Ba as B,Ca as V,Ea as H,Fa as z,Ib as J,Jb as Q,K as D,Lb as q,M as R,Mb as ee,N as I,Na as P,P as T,Pa as G,Qa as v,Ra as a,Sa as l,Ta as m,V as s,Wa as $,Xa as d,Z as y,aa as L,cb as K,db as p,fa as M,ga as F,hb as k,ib as W,jb as X,kb as Y,n as x,qa as O,ra as N,ta as U,ya as u,z as A}from"./chunk-FEPXA7XF.js";var S=(t,e)=>{let n=s(C);return s(h).get("accessToken")?!0:(n.navigateByUrl("/"),!1)};var _=(t,e)=>{let n=s(C);return s(h).get("accessToken")?(n.navigateByUrl("/profile"),!1):!0};var de=[{path:"",loadComponent:()=>import("./chunk-62Z5CZXV.js").then(t=>t.SignUpPageComponent),title:"Share your social accounts profiles with mipov.net",canActivate:[_]},{path:"login",loadComponent:()=>import("./chunk-YQFDTO6G.js").then(t=>t.LoginPageComponent),title:"Login to mipov.net",canActivate:[_]},{path:"error",loadComponent:()=>import("./chunk-ZBQRHI53.js").then(t=>t.ErrorPageComponent),title:"Error"},{path:"privacy-policy",loadComponent:()=>import("./chunk-T6PV4HTP.js").then(t=>t.PrivacyPolicyPageComponent),title:"Privacy policy"},{path:"help",loadComponent:()=>import("./chunk-OG5SJKUV.js").then(t=>t.HelpPageComponent),title:"Help - mipov.net"},{path:"email-verification",loadComponent:()=>import("./chunk-LSCVGBSC.js").then(t=>t.EmailVerificationPageComponent),title:"Email verification - mipov.net",canActivate:[S]},{path:"profile",loadComponent:()=>import("./chunk-H3D65QIA.js").then(t=>t.ProfilePageComponent),title:"Privacy policy",canActivate:[S]},{path:"links",loadComponent:()=>import("./chunk-5Y6UQMXK.js").then(t=>t.LinksPageComponent),title:"Links",canActivate:[S]},{path:":userName",loadComponent:()=>import("./chunk-EOAYZKQF.js").then(t=>t.PublicPageComponent),title:"Links"}];var Se="@",Ae=(()=>{let e=class e{constructor(i,o,r,c,g){this.doc=i,this.delegate=o,this.zone=r,this.animationType=c,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=s(B,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-HLPUESHP.js").then(o=>o)).catch(o=>{throw new I(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:r})=>{this._engine=o(this.animationType,this.doc);let c=new r(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(i,o){let r=this.delegate.createRenderer(i,o);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let c=new E(r);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let we=g.createRenderer(i,o);c.use(we),this.scheduler?.notify(9)}).catch(g=>{c.use(r)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){j()},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})(),E=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,i,o){this.delegate.insertBefore(e,n,i,o)}removeChild(e,n,i){this.delegate.removeChild(e,n,i)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,i,o){this.delegate.setAttribute(e,n,i,o)}removeAttribute(e,n,i){this.delegate.removeAttribute(e,n,i)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,i,o){this.delegate.setStyle(e,n,i,o)}removeStyle(e,n,i){this.delegate.removeStyle(e,n,i)}setProperty(e,n,i){this.shouldReplay(n)&&this.replay.push(o=>o.setProperty(e,n,i)),this.delegate.setProperty(e,n,i)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,i){return this.shouldReplay(n)&&this.replay.push(o=>o.listen(e,n,i)),this.delegate.listen(e,n,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(Se)}};function he(t="animations"){return H("NgAsyncAnimations"),L([{provide:V,useFactory:(e,n,i)=>new Ae(e,n,i,t),deps:[Z,re,z]},{provide:N,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var fe=(t,e)=>e(t.clone({withCredentials:!0}));var ge=(t,e)=>{console.log("access token");let i=s(h).get("accessToken"),o=t.clone({headers:t.headers.set("authorization",i)});return e(o||t)};var ve=(t,e)=>{console.log("refresh token");let n=s(f);return e(t).pipe(A(i=>{if(i.status===401)return n.refreshToken().pipe(D(({accessToken:o})=>{let r=t.clone({headers:t.headers.set("authorization",o)});return e(r)}),A(o=>{throw o}));throw i}))};var ye=(t,e)=>{let n=s(U),i=s(O),o=`${t.url}`;if(q(i)){let r=n.get(o,null);return r?(n.remove(o),x(new te(r))):e(t)}return ee(i)?e(t).pipe(R(r=>{let c=r;n.set(o,c)})):e(t)};var ke={providers:[ne(oe([fe,ge,ve,ye]),ie()),pe(de),le(se({includePostRequests:!0})),he()]};var Ce=(()=>{let e=class e{constructor(){this.authenticationService=s(f),this.toggle=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=y({type:e,selectors:[["app-user-menu-dropdown"]],standalone:!0,features:[k],decls:16,vars:4,consts:[[1,"dropdown","d-flex","flex-column"],["type","button",1,"btn","text-start","text-lg-center","align-self-stretch","btn-sm","btn-primary","dropdown-toggle",3,"click"],[1,"dropdown-menu","dropdown-menu-end",2,"right","0","top","100%",3,"click"],["routerLinkActive","fw-bold","routerLink","/profile",1,"dropdown-item"],["routerLinkActive","fw-bold","routerLink","/links",1,"dropdown-item"],[1,"dropdown-divider"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"position-fixed","bg-red","w-100","h-100",2,"z-index","1","left","0","top","0",3,"click"]],template:function(o,r){o&1&&(a(0,"div",0)(1,"button",1),d("click",function(){return r.toggle=!r.toggle}),p(2," \u2699\uFE0F User "),l(),a(3,"ul",2),d("click",function(){return r.toggle=!r.toggle}),a(4,"li")(5,"a",3),p(6,"\u{1F464} Profile"),l()(),a(7,"li")(8,"a",4),p(9,"\u{1F517} Links"),l()(),a(10,"li"),m(11,"hr",5),l(),a(12,"li")(13,"div",6),d("click",function(){return r.authenticationService.logOut()}),p(14,"\u{1F6AA} Sign out"),l()()()(),a(15,"div",7),d("click",function(){return r.toggle=!r.toggle}),l()),o&2&&(u(3),v("show",r.toggle),u(12),v("d-none",!r.toggle))},dependencies:[b,w]});let t=e;return t})();function Pe(t,e){t&1&&(a(0,"ul",18)(1,"li",19),m(2,"app-user-menu-dropdown"),l()())}function _e(t,e){t&1&&(a(0,"a",20),p(1,"Log in"),l(),a(2,"a",21),p(3,"Sign up"),l())}var be=(()=>{let e=class e{constructor(){this.authenticationService=s(f),this.show=!1}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=y({type:e,selectors:[["app-root"]],standalone:!0,features:[k],decls:29,vars:6,consts:[["signUpButton",""],[1,"border-bottom"],[1,"navbar","navbar-expand-lg","bg-body-secondary"],[1,"container"],["routerLink","/",1,"navbar-brand","d-flex","align-items-center","mb-0","h1"],["src","/assets/logo.svg","width","30px","alt","mipovnet logo",1,"me-2"],["type","button",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],[1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],[1,"nav-item"],["routerLinkActive","active","routerLink","/help",1,"nav-link"],["routerLinkActive","active","routerLink","/privacy-policy",1,"nav-link"],["class","navbar-nav",4,"ngIf","ngIfElse"],[1,"content"],[1,"bg-body-tertiary","py-3"],[1,"text-center"],["target","_blank","href","https://github.com/valeri879"],[1,"navbar-nav"],[1,"nav-item","dropdown"],["routerLink","/login",1,"btn","d-block","w-md-auto","btn-sm","btn-primary","mb-2","mb-lg-0"],["routerLink","/",1,"btn","btn-sm","d-block","btn-outline-success","ms-0","ms-lg-2"]],template:function(o,r){if(o&1){let c=$();a(0,"header",1)(1,"nav",2)(2,"div",3)(3,"a",4),m(4,"img",5),a(5,"b"),p(6,"mipov.net"),l()(),a(7,"button",6),d("click",function(){return M(c),F(r.show=!r.show)}),m(8,"span",7),l(),a(9,"div",8)(10,"ul",9)(11,"li",10)(12,"a",11),p(13,"Help"),l()(),a(14,"li",10)(15,"a",12),p(16,"Privacy policy"),l()()(),P(17,Pe,3,0,"ul",13),W(18,"async"),P(19,_e,4,0,"ng-template",null,0,Y),l()()()(),a(21,"div",14),m(22,"router-outlet"),l(),a(23,"footer",15)(24,"div",16),p(25,"Created by "),a(26,"a",17),p(27,"Val Do"),l(),p(28," with \u2764\uFE0F"),l()()}if(o&2){let c=K(20);u(9),v("show",r.show),u(8),G("ngIf",X(18,4,r.authenticationService.isLoggedIn$))("ngIfElse",c)}},dependencies:[ce,Ce,me,b,w,J,Q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.content[_ngcontent-%COMP%]{flex:1}"]});let t=e;return t})();ae(be,ke).catch(t=>console.error(t));