import './polyfills.server.mjs';
import{c as ce}from"./chunk-NKZC2HHM.mjs";import{a as h,b as f}from"./chunk-5NLLBLXU.mjs";import{d as ae,e as se,h as le,i as pe,k as me,m as C,n as b,o as w,p as de,q as ue}from"./chunk-M5PVHEUU.mjs";import{a as oe,d as ne,e as ie,f as re}from"./chunk-HTRSZA6C.mjs";import{Aa as V,Bb as Z,Ca as H,Da as z,Fb as J,G as R,I as D,J as I,L as T,La as P,Na as G,Oa as v,Pa as a,Pb as Q,Qa as l,Qb as q,R as s,Ra as m,Tb as ee,Ua as $,Ub as te,V as y,Va as d,Y as L,ab as K,ba as M,bb as c,ca as F,fb as k,gb as W,hb as X,ib as Y,j as x,ma as O,na as N,pa as U,v as A,wa as u,ya as j,za as B}from"./chunk-6OPP236L.mjs";var fe=(()=>{let e=class e{constructor(){this.authenticationService=s(f),this.toggle=!1}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=y({type:e,selectors:[["app-user-menu-dropdown"]],standalone:!0,features:[k],decls:16,vars:4,consts:[[1,"dropdown","d-flex","flex-column"],["type","button",1,"btn","text-start","text-lg-center","align-self-stretch","btn-sm","btn-primary","dropdown-toggle",3,"click"],[1,"dropdown-menu","dropdown-menu-end",2,"right","0","top","100%",3,"click"],["routerLinkActive","fw-bold","routerLink","/profile",1,"dropdown-item"],["routerLinkActive","fw-bold","routerLink","/links",1,"dropdown-item"],[1,"dropdown-divider"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],[1,"position-fixed","bg-red","w-100","h-100",2,"z-index","1","left","0","top","0",3,"click"]],template:function(n,r){n&1&&(a(0,"div",0)(1,"button",1),d("click",function(){return r.toggle=!r.toggle}),c(2," \u2699\uFE0F User "),l(),a(3,"ul",2),d("click",function(){return r.toggle=!r.toggle}),a(4,"li")(5,"a",3),c(6,"\u{1F464} Profile"),l()(),a(7,"li")(8,"a",4),c(9,"\u{1F517} Links"),l()(),a(10,"li"),m(11,"hr",5),l(),a(12,"li")(13,"div",6),d("click",function(){return r.authenticationService.logOut()}),c(14,"\u{1F6AA} Sign out"),l()()()(),a(15,"div",7),d("click",function(){return r.toggle=!r.toggle}),l()),n&2&&(u(3),v("show",r.toggle),u(12),v("d-none",!r.toggle))},dependencies:[b,w]});let t=e;return t})();function _e(t,e){t&1&&(a(0,"ul",18)(1,"li",19),m(2,"app-user-menu-dropdown"),l()())}function Ee(t,e){t&1&&(a(0,"a",20),c(1,"Log in"),l(),a(2,"a",21),c(3,"Sign up"),l())}var ge=(()=>{let e=class e{constructor(){this.authenticationService=s(f),this.show=!1}ngOnInit(){}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=y({type:e,selectors:[["app-root"]],standalone:!0,features:[k],decls:29,vars:6,consts:[["signUpButton",""],[1,"border-bottom"],[1,"navbar","navbar-expand-lg","bg-body-secondary"],[1,"container"],["routerLink","/",1,"navbar-brand","d-flex","align-items-center","mb-0","h1"],["src","/assets/logo.svg","width","30px","alt","mipovnet logo",1,"me-2"],["type","button",1,"navbar-toggler",3,"click"],[1,"navbar-toggler-icon"],[1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],[1,"nav-item"],["routerLinkActive","active","routerLink","/help",1,"nav-link"],["routerLinkActive","active","routerLink","/privacy-policy",1,"nav-link"],["class","navbar-nav",4,"ngIf","ngIfElse"],[1,"content"],[1,"bg-body-tertiary","py-3"],[1,"text-center"],["target","_blank","href","https://github.com/valeri879"],[1,"navbar-nav"],[1,"nav-item","dropdown"],["routerLink","/login",1,"btn","d-block","w-md-auto","btn-sm","btn-primary","mb-2","mb-lg-0"],["routerLink","/",1,"btn","btn-sm","d-block","btn-outline-success","ms-0","ms-lg-2"]],template:function(n,r){if(n&1){let p=$();a(0,"header",1)(1,"nav",2)(2,"div",3)(3,"a",4),m(4,"img",5),a(5,"b"),c(6,"mipov.net"),l()(),a(7,"button",6),d("click",function(){return M(p),F(r.show=!r.show)}),m(8,"span",7),l(),a(9,"div",8)(10,"ul",9)(11,"li",10)(12,"a",11),c(13,"Help"),l()(),a(14,"li",10)(15,"a",12),c(16,"Privacy policy"),l()()(),P(17,_e,3,0,"ul",13),W(18,"async"),P(19,Ee,4,0,"ng-template",null,0,Y),l()()()(),a(21,"div",14),m(22,"router-outlet"),l(),a(23,"footer",15)(24,"div",16),c(25,"Created by "),a(26,"a",17),c(27,"Val Do"),l(),c(28," with \u2764\uFE0F"),l()()}if(n&2){let p=K(20);u(9),v("show",r.show),u(8),G("ngIf",X(18,4,r.authenticationService.isLoggedIn$))("ngIfElse",p)}},dependencies:[me,fe,ue,b,w,Q,q],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}.content[_ngcontent-%COMP%]{flex:1}"]});let t=e;return t})();var S=(t,e)=>{let o=s(C);return s(h).get("accessToken")?!0:(o.navigateByUrl("/"),!1)};var _=(t,e)=>{let o=s(C);return s(h).get("accessToken")?(o.navigateByUrl("/profile"),!1):!0};var ve=[{path:"",loadComponent:()=>import("./chunk-IXAEGMNS.mjs").then(t=>t.SignUpPageComponent),title:"Share your social accounts profiles with mipov.net",canActivate:[_]},{path:"login",loadComponent:()=>import("./chunk-SRTARFRX.mjs").then(t=>t.LoginPageComponent),title:"Login to mipov.net",canActivate:[_]},{path:"error",loadComponent:()=>import("./chunk-WW4CAHPE.mjs").then(t=>t.ErrorPageComponent),title:"Error"},{path:"privacy-policy",loadComponent:()=>import("./chunk-M2532AJR.mjs").then(t=>t.PrivacyPolicyPageComponent),title:"Privacy policy"},{path:"help",loadComponent:()=>import("./chunk-4M2ACP4N.mjs").then(t=>t.HelpPageComponent),title:"Help - mipov.net"},{path:"email-verification",loadComponent:()=>import("./chunk-OA5HMF6R.mjs").then(t=>t.EmailVerificationPageComponent),title:"Email verification - mipov.net",canActivate:[S]},{path:"profile",loadComponent:()=>import("./chunk-FC3577DW.mjs").then(t=>t.ProfilePageComponent),title:"Privacy policy",canActivate:[S]},{path:"links",loadComponent:()=>import("./chunk-YJZ4YNJD.mjs").then(t=>t.LinksPageComponent),title:"Links",canActivate:[S]},{path:":userName",loadComponent:()=>import("./chunk-OJMB2P4Z.mjs").then(t=>t.PublicPageComponent),title:"Links"}];var xe="@",Re=(()=>{let e=class e{constructor(i,n,r,p,g){this.doc=i,this.delegate=n,this.zone=r,this.animationType=p,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=s(B,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-GVJQZN3A.mjs").then(n=>n)).catch(n=>{throw new I(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:r})=>{this._engine=n(this.animationType,this.doc);let p=new r(this.delegate,this._engine,this.zone);return this.delegate=p,p})}createRenderer(i,n){let r=this.delegate.createRenderer(i,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let p=new E(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Pe=g.createRenderer(i,n);p.use(Pe),this.scheduler?.notify(9)}).catch(g=>{p.use(r)}),p}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(n){j()},e.\u0275prov=T({token:e,factory:e.\u0275fac});let t=e;return t})(),E=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let o of this.replay)o(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,o){return this.delegate.createElement(e,o)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,o){this.delegate.appendChild(e,o)}insertBefore(e,o,i,n){this.delegate.insertBefore(e,o,i,n)}removeChild(e,o,i){this.delegate.removeChild(e,o,i)}selectRootElement(e,o){return this.delegate.selectRootElement(e,o)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,o,i,n){this.delegate.setAttribute(e,o,i,n)}removeAttribute(e,o,i){this.delegate.removeAttribute(e,o,i)}addClass(e,o){this.delegate.addClass(e,o)}removeClass(e,o){this.delegate.removeClass(e,o)}setStyle(e,o,i,n){this.delegate.setStyle(e,o,i,n)}removeStyle(e,o,i){this.delegate.removeStyle(e,o,i)}setProperty(e,o,i){this.shouldReplay(o)&&this.replay.push(n=>n.setProperty(e,o,i)),this.delegate.setProperty(e,o,i)}setValue(e,o){this.delegate.setValue(e,o)}listen(e,o,i){return this.shouldReplay(o)&&this.replay.push(n=>n.listen(e,o,i)),this.delegate.listen(e,o,i)}shouldReplay(e){return this.replay!==null&&e.startsWith(xe)}};function ye(t="animations"){return H("NgAsyncAnimations"),L([{provide:V,useFactory:(e,o,i)=>new Re(e,o,i,t),deps:[J,ae,z]},{provide:N,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ke=(t,e)=>e(t.clone({withCredentials:!0}));var Ce=(t,e)=>{console.log("access token");let i=s(h).get("accessToken"),n=t.clone({headers:t.headers.set("authorization",i)});return e(n||t)};var be=(t,e)=>{console.log("refresh token");let o=s(f);return e(t).pipe(A(i=>{if(i.status===401)return o.refreshToken().pipe(R(({accessToken:n})=>{let r=t.clone({headers:t.headers.set("authorization",n)});return e(r)}),A(n=>{throw n}));throw i}))};var we=(t,e)=>{let o=s(U),i=s(O),n=`${t.url}`;if(ee(i)){let r=o.get(n,null);return r?(o.remove(n),x(new oe(r))):e(t)}return te(i)?e(t).pipe(D(r=>{let p=r;o.set(n,p)})):e(t)};var Se={providers:[ne(ie([ke,Ce,be,we]),re()),de(ve),pe(le({includePostRequests:!0})),ye()]};var De={providers:[ce()]},Ae=Z(Se,De);var Ie=()=>se(ge,Ae),Ht=Ie;export{Ht as a};