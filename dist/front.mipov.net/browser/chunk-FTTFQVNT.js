import{i as U}from"./chunk-Q6DRLPQ6.js";import{a as d}from"./chunk-74JUVWB4.js";import{a as C}from"./chunk-CRV3CNVD.js";import{Ab as x,Lb as b,M as l,P as f,U as g,V as u,k as I,qa as k}from"./chunk-FEPXA7XF.js";var v=(()=>{let o=class o{constructor(e,t){this.document=e,this.platformId=t,this.documentIsAccessible=b(this.platformId)}static getCookieRegExp(e){let t=e.replace(/([\[\]{}()|=;+?,.*^$])/gi,"\\$1");return new RegExp("(?:^"+t+"|;\\s*"+t+")=(.*?)(?:;|$)","g")}static safeDecodeURIComponent(e){try{return decodeURIComponent(e)}catch{return e}}check(e){return this.documentIsAccessible?(e=encodeURIComponent(e),o.getCookieRegExp(e).test(this.document.cookie)):!1}get(e){if(this.documentIsAccessible&&this.check(e)){e=encodeURIComponent(e);let s=o.getCookieRegExp(e).exec(this.document.cookie);return s[1]?o.safeDecodeURIComponent(s[1]):""}else return""}getAll(){if(!this.documentIsAccessible)return{};let e={},t=this.document;return t.cookie&&t.cookie!==""&&t.cookie.split(";").forEach(s=>{let[n,r]=s.split("=");e[o.safeDecodeURIComponent(n.replace(/^ /,""))]=o.safeDecodeURIComponent(r)}),e}set(e,t,s,n,r,p,h,R){if(!this.documentIsAccessible)return;if(typeof s=="number"||s instanceof Date||n||r||p||h){let m={expires:s,path:n,domain:r,secure:p,sameSite:h||"Lax",partitioned:R};this.set(e,t,m);return}let c=encodeURIComponent(e)+"="+encodeURIComponent(t)+";",i=s||{};if(i.expires)if(typeof i.expires=="number"){let m=new Date(new Date().getTime()+i.expires*1e3*60*60*24);c+="expires="+m.toUTCString()+";"}else c+="expires="+i.expires.toUTCString()+";";i.path&&(c+="path="+i.path+";"),i.domain&&(c+="domain="+i.domain+";"),i.secure===!1&&i.sameSite==="None"&&(i.secure=!0,console.warn(`[ngx-cookie-service] Cookie ${e} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)),i.secure&&(c+="secure;"),i.sameSite||(i.sameSite="Lax"),c+="sameSite="+i.sameSite+";",i.partitioned&&(c+="Partitioned;"),this.document.cookie=c}delete(e,t,s,n,r="Lax"){if(!this.documentIsAccessible)return;let p=new Date("Thu, 01 Jan 1970 00:00:01 GMT");this.set(e,"",{expires:p,path:t,domain:s,secure:n,sameSite:r})}deleteAll(e,t,s,n="Lax"){if(!this.documentIsAccessible)return;let r=this.getAll();for(let p in r)r.hasOwnProperty(p)&&this.delete(p,e,t,s,n)}};o.\u0275fac=function(t){return new(t||o)(g(x),g(k))},o.\u0275prov=f({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();var P=(()=>{let o=class o{constructor(){this._http=u(C),this._cookieService=u(v),this._router=u(U),this.isLoggedIn$=new I(!1),this._isLoggedIn()}signUp(e){return this._http.post(`${d.apiUrl}/sign-up`,e).pipe(l(()=>this.isLoggedIn$.next(!0)))}logIn(e){return this._http.post(`${d.apiUrl}/login`,e).pipe(l(()=>this.isLoggedIn$.next(!0)))}refreshToken(){return this._http.get(`${d.apiUrl}/token`)}logOut(){this._cookieService.deleteAll(),this._router.navigateByUrl("/"),this.isLoggedIn$.next(!1)}_isLoggedIn(){this._cookieService.get("accessToken")?this.isLoggedIn$.next(!0):this.isLoggedIn$.next(!1)}};o.\u0275fac=function(t){return new(t||o)},o.\u0275prov=f({token:o,factory:o.\u0275fac,providedIn:"root"});let a=o;return a})();export{v as a,P as b};
