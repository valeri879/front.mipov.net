import './polyfills.server.mjs';
import{a as H}from"./chunk-OTV2TRQT.mjs";import{b as P}from"./chunk-U7N27B74.mjs";import{La as m,Na as n,Pa as l,Pb as h,Qa as a,Qb as C,R as o,Ra as s,Sa as d,Ta as f,V as r,bb as y,fb as g,gb as v,hb as u,sa as p,wa as c}from"./chunk-XGU76GQN.mjs";import"./chunk-NDYDZJSS.mjs";function E(t,e){if(t&1&&(d(0),l(1,"div",1)(2,"h1"),y(3,"Privacy Policy"),a(),s(4,"article",2),a(),f()),t&2){let I=e.ngIf;c(4),n("innerHTML",I.data,p)}}var L=(()=>{let e=class e{constructor(){this.http=o(P),this.data$=this.http.get(`${H.apiUrl}/privacy-policy`)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=r({type:e,selectors:[["app-privacy-policy-page"]],standalone:!0,features:[g],decls:2,vars:3,consts:[[4,"ngIf"],[1,"container"],[3,"innerHTML"]],template:function(i,T){i&1&&(m(0,E,5,1,"ng-container",0),v(1,"async")),i&2&&n("ngIf",u(1,1,T.data$))},dependencies:[C,h]});let t=e;return t})();export{L as PrivacyPolicyPageComponent};