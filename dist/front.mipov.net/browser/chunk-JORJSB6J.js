import{a as e}from"./chunk-74JUVWB4.js";import{a as o}from"./chunk-CRV3CNVD.js";import{P as p,V as a}from"./chunk-FEPXA7XF.js";var c=(()=>{let r=class r{constructor(){this._http=a(o)}profile(t=""){return this._http.get(`${e.apiUrl}/profile/${t}`)}updateUserNameFirstNameLastNameAbout(t){return this._http.put(`${e.apiUrl}/profile/update-username-firstname-lastname-about`,t)}updatePassword(t){return this._http.put(`${e.apiUrl}/profile/update-password`,t)}updateLinks(t){return this._http.put(`${e.apiUrl}/profile/update-links`,t)}};r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=p({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{c as a};
