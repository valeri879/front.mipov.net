import './polyfills.server.mjs';
import{c as ce}from"./chunk-NKZC2HHM.mjs";import{a as h,b as f}from"./chunk-5NLLBLXU.mjs";import{d as ae,e as se,h as le,i as pe,k as me,m as C,n as w,o as S,p as de,q as ue}from"./chunk-M5PVHEUU.mjs";import{a as ne,d as oe,e as re,f as ie}from"./chunk-HTRSZA6C.mjs";import{Aa as H,Bb as Z,Ca as V,Da as z,Fb as J,G as R,I as D,J as I,L as T,La as A,Na as G,Oa as v,Pa as a,Pb as Q,Qa as l,Qb as q,R as s,Ra as m,Tb as ee,Ua as $,Ub as te,V as y,Va as d,Y as L,ab as K,ba as M,bb as c,ca as F,fb as k,gb as W,hb as X,ib as Y,j as x,ma as O,na as N,pa as U,v as b,wa as u,ya as j,za as B}from"./chunk-6OPP236L.mjs";var fe=(()=>{let e=class e{constructor(){this.authenticationService=s(f),this.toggle=!1}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=y({type:e,selectors:[["app-user-menu-dropdown"]],standalone:!0,features:[k],decls:16,vars:4,consts:[[1,"dropdown","d-flex","flex-column"],["type","button",1,"btn","text-start","text-lg-center","align-self-stretch","btn-sm","btn-primary","dropdown-toggle",3,"click"],[1,"dropdown-menu","dropdown-menu-end",2,"right","0","top","100%",3,"click"],["routerLinkActive","fw-bold","routerLink","/profile",1,"dropdown-item"],["routerLinkActive","fw-bold","routerLink","/links",1,"dropdown-item"],[1,"dropdown-divider"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"position-fixed","bg-red","w-100","h-100",2,"z-index","1","left","0","top","0",3,"click"]],template:function(o,i){o&1&&(a(0,"div",0)(1,"button",1),d("click",function(){return i.toggle=!i.toggle}),c(2," \u2699\uFE0F User "),l(),a(3,"ul",2),d("click",function(){return i.toggle=!i.toggle}),a(4,"li")(5,"a",3),c(6,"\u{1F464} Profile"),l()(),a(7,"li")(8,"a",4),c(9,"\u{1F517} Links"),l()(),a(10,"li"),m(11,"hr",5),l(),a(12,"li")(13,"div",6),d("click",function(){return i.authenticationService.logOut()}),c(14,"\u{1F6AA} Sign out"),l()()()(),a(15,"div",7),d("click",function(){return i.toggle=!i.toggle}),l()),o&2&&(u(3),v("show",i.toggle),u(12),v("d-none",!i.toggle))},dependencies:[w,S]});let t=e;return t})();function _e(t,e){t&1&&(a(0,"ul",17)(1,"li",18),m(2,"app-user-menu-dropdown"),l()())}function Ee(t,e){t&1&&(a(0,"a",19),c(1,"Log in"),l(),a(2,"a",20),c(3,"Sign up"),l())}var ge=(()=>{let e=class e{constructor(){this.authenticationService=s(f),this.show=!1}ngOnInit(){}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=y({type:e,selectors:[["app-root"]],standalone:!0,features:[k],decls:29,vars:6,consts:[["signUpButton",""],[1,"navbar","navbar-expand-lg","bg-light"],[1,"container"],["routerLink","/",1,"navbar-brand","d-flex","align-items-center","mb-0","h1"],["src","/assets/logo.svg","width","30px","alt","mipovnet logo",1,"me-2"],["type","button",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],[1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],[1,"nav-item"],["routerLinkActive","active","routerLink","/help",1,"nav-link"],["routerLinkActive","active","routerLink","/privacy-policy",1,"nav-link"],["class","navbar-nav",4,"ngIf","ngIfElse"],[1,"content"],[1,"bg-body-tertiary","py-3"],[1,"text-center"],["target","_blank","href","https://github.com/valeri879"],[1,"navbar-nav"],[1,"nav-item","dropdown"],["routerLink","/login",1,"btn","d-block","w-md-auto","btn-sm","btn-primary","mb-2","mb-lg-0"],["routerLink","/",1,"btn","btn-sm","d-block","btn-outline-success","ms-0","ms-lg-2"]],template:function(o,i){if(o&1){let p=$();a(0,"header")(1,"nav",1)(2,"div",2)(3,"a",3),m(4,"img",4),a(5,"b"),c(6,"mipov.net"),l()(),a(7,"button",5),d("click",function(){return M(p),F(i.show=!i.show)}),m(8,"span",6),l(),a(9,"div",7)(10,"ul",8)(11,"li",9)(12,"a",10),c(13,"Help"),l()(),a(14,"li",9)(15,"a",11),c(16,"Privacy policy"),l()()(),A(17,_e,3,0,"ul",12),W(18,"async"),A(19,Ee,4,0,"ng-template",null,0,Y),l()()()(),a(21,"div",13),m(22,"router-outlet"),l(),a(23,"footer",14)(24,"div",15),c(25,"Created by "),a(26,"a",16),c(27,"Val Do"),l(),c(28," with \u2764\uFE0F"),l()()}if(o&2){let p=K(20);u(9),v("show",i.show),u(8),G("ngIf",X(18,4,i.authenticationService.isLoggedIn$))("ngIfElse",p)}},dependencies:[me,fe,ue,w,S,Q,q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.content[_ngcontent-%COMP%]{flex:1}"]});let t=e;return t})();var P=(t,e)=>{let n=s(C);return s(h).get("accessToken")?!0:(n.navigateByUrl("/"),!1)};var _=(t,e)=>{let n=s(C);return s(h).get("accessToken")?(n.navigateByUrl("/profile"),!1):!0};var ve=[{path:"",loadComponent:()=>import("./chunk-NNO76Q6P.mjs").then(t=>t.SignUpPageComponent),title:"Share your social accounts profiles with mipov.net",canActivate:[_]},{path:"login",loadComponent:()=>import("./chunk-4YNQZ3ML.mjs").then(t=>t.LoginPageComponent),title:"Login to mipov.net",canActivate:[_]},{path:"error",loadComponent:()=>import("./chunk-WW4CAHPE.mjs").then(t=>t.ErrorPageComponent),title:"Error"},{path:"privacy-policy",loadComponent:()=>import("./chunk-M2532AJR.mjs").then(t=>t.PrivacyPolicyPageComponent),title:"Privacy policy"},{path:"help",loadComponent:()=>import("./chunk-4M2ACP4N.mjs").then(t=>t.HelpPageComponent),title:"Help - mipov.net"},{path:"profile",loadComponent:()=>import("./chunk-UYSDUOW2.mjs").then(t=>t.ProfilePageComponent),title:"Privacy policy",canActivate:[P]},{path:"links",loadComponent:()=>import("./chunk-RMDQUI6G.mjs").then(t=>t.LinksPageComponent),title:"Links",canActivate:[P]},{path:":userName",loadComponent:()=>import("./chunk-OJMB2P4Z.mjs").then(t=>t.PublicPageComponent),title:"Links"}];var xe="@",Re=(()=>{let e=class e{constructor(r,o,i,p,g){this.doc=r,this.delegate=o,this.zone=i,this.animationType=p,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=s(B,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-GVJQZN3A.mjs").then(o=>o)).catch(o=>{throw new I(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let p=new i(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(r,o){let i=this.delegate.createRenderer(r,o);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let p=new E(i);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Pe=g.createRenderer(r,o);p.use(Pe),this.scheduler?.notify(9)}).catch(g=>{p.use(i)}),p}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){j()},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})(),E=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,r,o){this.delegate.insertBefore(e,n,r,o)}removeChild(e,n,r){this.delegate.removeChild(e,n,r)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,r,o){this.delegate.setAttribute(e,n,r,o)}removeAttribute(e,n,r){this.delegate.removeAttribute(e,n,r)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,r,o){this.delegate.setStyle(e,n,r,o)}removeStyle(e,n,r){this.delegate.removeStyle(e,n,r)}setProperty(e,n,r){this.shouldReplay(n)&&this.replay.push(o=>o.setProperty(e,n,r)),this.delegate.setProperty(e,n,r)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,r){return this.shouldReplay(n)&&this.replay.push(o=>o.listen(e,n,r)),this.delegate.listen(e,n,r)}shouldReplay(e){return this.replay!==null&&e.startsWith(xe)}};function ye(t="animations"){return V("NgAsyncAnimations"),L([{provide:H,useFactory:(e,n,r)=>new Re(e,n,r,t),deps:[J,ae,z]},{provide:N,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ke=(t,e)=>e(t.clone({withCredentials:!0}));var Ce=(t,e)=>{console.log("access token");let r=s(h).get("accessToken"),o=t.clone({headers:t.headers.set("authorization",r)});return e(o||t)};var we=(t,e)=>{console.log("refresh token");let n=s(f);return e(t).pipe(b(r=>{if(r.status===401)return n.refreshToken().pipe(R(({accessToken:o})=>{let i=t.clone({headers:t.headers.set("authorization",o)});return e(i)}),b(o=>{throw o}));throw r}))};var Se=(t,e)=>{let n=s(U),r=s(O),o=`${t.url}`;if(ee(r)){let i=n.get(o,null);return i?(n.remove(o),x(new ne(i))):e(t)}return te(r)?e(t).pipe(D(i=>{let p=i;n.set(o,p)})):e(t)};var be={providers:[oe(re([ke,Ce,we,Se]),ie()),de(ve),pe(le({includePostRequests:!0})),ye()]};var De={providers:[ce()]},Ae=Z(be,De);var Ie=()=>se(ge,Ae),Vt=Ie;export{Vt as a};
