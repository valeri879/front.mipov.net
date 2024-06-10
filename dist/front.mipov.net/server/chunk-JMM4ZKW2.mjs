import './polyfills.server.mjs';
import{a as K}from"./chunk-RZ2MQLHB.mjs";import{a as O,b as x,c as B,d as D,e as M,f as y,h as j,i as q,j as R,k as $,l as z,m as J,n as H}from"./chunk-MHESCEK7.mjs";import"./chunk-OTV2TRQT.mjs";import{n as U}from"./chunk-O2QNRHV7.mjs";import"./chunk-NQNYQKRP.mjs";import{I as w,La as f,Na as d,Oa as C,Ob as P,Pa as i,Pb as A,Qa as t,Qb as V,R as h,Ra as m,Sa as E,Ta as L,Ua as b,V as S,Va as v,Wa as c,Ya as _,ba as u,bb as r,ca as k,cb as p,db as G,fb as T,gb as N,hb as I,ta as F,wa as n}from"./chunk-6OPP236L.mjs";import"./chunk-NDYDZJSS.mjs";function Q(a,s){if(a&1){let o=b();i(0,"div")(1,"div",28)(2,"div",7)(3,"div",11),m(4,"input",29),t()(),i(5,"div",8)(6,"div",11)(7,"div",30)(8,"div",16),m(9,"input",31),t(),i(10,"div",18)(11,"button",32),v("click",function(){let l=u(o).index,g=c(2);return k(g.removeLink(l))}),r(12,"Delete"),t()()()()()()()}if(a&2){let o=s.index;n(),d("formGroupName",o),n(3),_("id","linkTitle-",o,""),n(5),_("id","link-",o,"")}}function W(a,s){if(a&1&&(i(0,"a",33)(1,"div",34),r(2),t()()),a&2){let o=s.$implicit,e=c(2);C("bg-success-subtle",e.linksUpdatedSuccess)("border-success",e.linksUpdatedSuccess),d("href",o.link,F),n(2),p(o.linkTitle)}}function X(a,s){if(a&1&&(i(0,"div",35),r(1),t()),a&2){let o=c(2);n(),p(o.linksUpdatedSuccess)}}function Y(a,s){a&1&&(i(0,"div",36),r(1,"\u26A0\uFE0F\uFE0F Please add at least one profile link to save"),t())}function Z(a,s){if(a&1){let o=b();E(0),i(1,"div",2)(2,"div",3)(3,"div",4)(4,"h1"),r(5,"Links"),t(),i(6,"div",5),r(7,' Enter a descriptive title for your link in the "Link Title" field. This title will be displayed to other users. '),m(8,"hr"),r(9,' Next, enter the URL of your social media profile in the "Profile Link" field. Make sure to provide the direct link to your profile page. '),t(),i(10,"div",6)(11,"div",7),r(12,"Link title"),t(),i(13,"div",8),r(14,"Profile link"),t()(),f(15,Q,13,5,"div",9),t(),i(16,"div",10)(17,"h2"),r(18,"Add new profile link"),t(),i(19,"div",7)(20,"div",11)(21,"label",12),r(22,"Link title"),t(),m(23,"input",13),t()(),i(24,"div",8)(25,"div",11)(26,"label",14),r(27,"Profile link"),t(),i(28,"div",15)(29,"div",16),m(30,"input",17),t(),i(31,"div",18)(32,"button",19),v("click",function(){u(o);let l=c();return k(l.addLinks(l.addLinksFormGroup.value))}),r(33,"Add"),t()()()()()()(),i(34,"div",20)(35,"div",21)(36,"div",22),r(37),t(),r(38),i(39,"div",23),r(40),t(),f(41,W,3,6,"a",24)(42,X,2,1,"div",25)(43,Y,2,0,"div",26),i(44,"button",19),v("click",function(){u(o);let l=c();return k(l.save())}),r(45,"Save"),t()(),i(46,"a",27),r(47,"View as guest"),t()()(),L()}if(a&2){let o=s.ngIf,e=c();n(2),d("formGroup",e.linksFormGroup),n(13),d("ngForOf",e.links.controls),n(),d("formGroup",e.addLinksFormGroup),n(16),d("disabled",e.addLinksFormGroup.invalid),n(5),p(o.userName.slice(0,1)),n(),G(" ","@"+o.userName," "),n(2),p(o.about),n(),d("ngForOf",e.linksFormGroup.value.links),n(),d("ngIf",e.linksUpdatedSuccess),n(),d("ngIf",e.linksFormGroup.invalid),n(),d("disabled",e.linksFormGroup.invalid),n(2),_("routerLink","/",o.userName,"")}}var ce=(()=>{let s=class s{constructor(){this._profileService=h(K),this._formBuilder=h(J),this.linksFormGroup=this._formBuilder.group({links:new z([],[x.required])}),this.addLinksFormGroup=this._linksGroup()}ngOnInit(){this.user$=this._profileService.profile().pipe(w(({links:e})=>{e.forEach(l=>{this.links.push(this._linksGroup(l.link,l.linkTitle))})}))}_linksGroup(e="",l=""){return new M({link:new y(e,[x.required]),linkTitle:new y(l,[x.required])})}get links(){return this.linksFormGroup.get("links")}addLinks(e){let l=this._linksGroup(e.link,e.linkTitle);this.links.push(l),this.addLinksFormGroup.reset()}removeLink(e){this.links.removeAt(e)}save(){this._profileService.updateLinks(this.linksFormGroup.value).subscribe({next:({message:e})=>{this.linksUpdatedSuccess=e,setTimeout(()=>{this.linksUpdatedSuccess=null},1500)},error:e=>{console.error(e.error.message)}})}};s.\u0275fac=function(l){return new(l||s)},s.\u0275cmp=S({type:s,selectors:[["app-links-page"]],standalone:!0,features:[T],decls:3,vars:3,consts:[[1,"container","py-3"],[4,"ngIf"],[1,"row"],[1,"col-md-8",3,"formGroup"],["formArrayName","links"],[1,"alert","alert-info"],[1,"row","gx-2","mb-3"],[1,"col-5"],[1,"col-7"],[4,"ngFor","ngForOf"],[1,"row","gx-2","mb-3",3,"formGroup"],[1,"form-group"],["for","linkTitle"],["type","text","id","linkTitle","placeholder","Enter a descriptive title","formControlName","linkTitle",1,"form-control"],["for","link"],[1,"row","gx-1"],[1,"col-9"],["type","text","id","link","placeholder","Actual your profile link","formControlName","link",1,"form-control"],[1,"col-3"],[1,"btn","btn-primary","w-100",3,"click","disabled"],[1,"col-md-4"],[1,"card","bg-light","card-body","d-flex","flex-column","align-items-center",2,"gap","15px"],[1,"border","bg-dark","text-white","rounded-circle","d-flex","align-items-center","font-weight-bold","justify-content-center",2,"width","100px","height","100px","font-size","48px"],[1,"text-secondary"],["target","_blank","style","text-decoration: none;","class","card w-100",3,"bg-success-subtle","border-success","href",4,"ngFor","ngForOf"],["class","alert w-100 mb-0 alert-success",4,"ngIf"],["class","alert w-100 mb-0 alert-warning",4,"ngIf"],[1,"btn","btn-link","w-100",3,"routerLink"],[1,"row","gx-2","mb-3",3,"formGroupName"],["type","text","placeholder","Link icon","formControlName","linkTitle",1,"form-control",3,"id"],[1,"row","gx-2"],["type","text","placeholder","Actual link","formControlName","link",1,"form-control",3,"id"],[1,"btn","w-100","btn-danger",3,"click"],["target","_blank",1,"card","w-100",2,"text-decoration","none",3,"href"],[1,"card-body","text-decoration-none","d-flex","justify-content-center"],[1,"alert","w-100","mb-0","alert-success"],[1,"alert","w-100","mb-0","alert-warning"]],template:function(l,g){l&1&&(i(0,"div",0),f(1,Z,48,13,"ng-container",1),N(2,"async"),t()),l&2&&(n(),d("ngIf",I(2,1,g.user$)))},dependencies:[V,A,P,H,O,B,D,j,$,q,R,U]});let a=s;return a})();export{ce as LinksPageComponent};
