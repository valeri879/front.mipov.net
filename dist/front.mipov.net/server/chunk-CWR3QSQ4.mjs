import './polyfills.server.mjs';
import{a as E}from"./chunk-OTV2TRQT.mjs";import{a as x}from"./chunk-NQNYQKRP.mjs";import{L as d,La as c,Na as a,Ob as F,Pa as l,Pb as H,Qa as o,Qb as S,R as p,Ra as v,Sa as g,Ta as u,V as f,bb as m,cb as y,fb as I,gb as _,hb as C,sa as h,wa as i}from"./chunk-6OPP236L.mjs";import"./chunk-NDYDZJSS.mjs";var T=(()=>{let e=class e{constructor(){this._http=p(x)}help(){return this._http.get(`${E.apiUrl}/help`)}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function $(t,e){if(t&1&&(l(0,"div")(1,"h2"),m(2),o(),v(3,"div",3)(4,"hr"),o()),t&2){let r=e.$implicit;i(2),y(r.title),i(),a("innerHTML",r.data,h)}}function P(t,e){if(t&1&&(g(0),c(1,$,5,2,"div",2),u()),t&2){let r=e.ngIf;i(),a("ngForOf",r)}}var B=(()=>{let e=class e{constructor(){this.helpService=p(T),this.help$=this.helpService.help()}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=f({type:e,selectors:[["app-help-page"]],standalone:!0,features:[I],decls:5,vars:3,consts:[[1,"container","py-3"],[4,"ngIf"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(n,j){n&1&&(l(0,"div",0)(1,"h1"),m(2,"Help - mipov.net"),o(),c(3,P,2,1,"ng-container",1),_(4,"async"),o()),n&2&&(i(3),a("ngIf",C(4,1,j.help$)))},dependencies:[S,H,F]});let t=e;return t})();export{B as HelpPageComponent};
