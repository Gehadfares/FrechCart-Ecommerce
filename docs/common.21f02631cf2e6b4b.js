"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[592],{1651:(x,f,i)=>{i.d(f,{r:()=>h});var d=i(4769);let h=(()=>{var t;class p{transform(g,b){return g.split(" ",b).join(" ")}}return(t=p).\u0275fac=function(g){return new(g||t)},t.\u0275pipe=d.Yjl({name:"cuttext",type:t,pure:!0,standalone:!0}),p})()},4768:(x,f,i)=>{i.d(f,{e:()=>b});var d=i(6726),h=i(5619);const t_baseUrlAuth="https://ecommerce.routemisr.com/api/v1/auth";var p=i(4769),e=i(9862),g=i(1120);let b=(()=>{var m;class C{constructor(o,s){this._HttpClient=o,this._Router=s,this.userData=new h.X(null),this.saveUser()}saveUser(){const o=localStorage.getItem("_token");if(o)try{const s=(0,d.Z)(o);s.name&&this.userData.next(s)}catch(s){s.message.includes("Invalid token")&&(localStorage.removeItem("_token"),this._Router.navigate(["/login"]))}}setRegister(o){return this._HttpClient.post(t_baseUrlAuth+"/signup",o)}setLogin(o){return this._HttpClient.post(t_baseUrlAuth+"/signin",o)}setForgotPassword(o){return this._HttpClient.post(t_baseUrlAuth+"/forgotPasswords",o)}setVerifyResetCode(o){return this._HttpClient.post(t_baseUrlAuth+"/verifyResetCode",o)}resetPassword(o){return this._HttpClient.put(t_baseUrlAuth+"/resetPassword",o)}setChangePassword(o){return this._HttpClient.put("https://ecommerce.routemisr.com/api/v1/users/changeMyPassword",o)}}return(m=C).\u0275fac=function(o){return new(o||m)(p.LFG(e.eN),p.LFG(g.F0))},m.\u0275prov=p.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),C})()},5830:(x,f,i)=>{i.d(f,{A:()=>u});var d=i(6814),h=i(1120),t=i(2425),p=i(1651),e=i(4769),g=i(1731);function b(r,_){if(1&r){const v=e.EpF();e.TgZ(0,"span",14),e.NdJ("click",function(){e.CHM(v);const n=e.oxw();return e.KtG(n.addToWhish(n.product._id))}),e._UZ(1,"i",15),e.qZA()}}function m(r,_){if(1&r){const v=e.EpF();e.TgZ(0,"span",14),e.NdJ("click",function(){e.CHM(v);const n=e.oxw();return e.KtG(n.removeFromWhish(n.product._id))}),e._UZ(1,"i",16),e.qZA()}}function C(r,_){1&r&&e._UZ(0,"i",18)}function l(r,_){if(1&r&&(e.TgZ(0,"li"),e.YNc(1,C,1,0,"i",17),e.qZA()),2&r){const v=_.$implicit,c=e.oxw();e.xp6(1),e.Q6J("ngIf",v<=c.product.ratingsAverage)}}function o(r,_){1&r&&(e.TgZ(0,"li"),e._UZ(1,"i",19),e.qZA())}const s=function(r){return["/products",r]},a=function(){return[1,2,3,4,5]};let u=(()=>{var r;class _{constructor(c,n,Z){this._EcomdataService=c,this._ToastrService=n,this._ChangeDetectorRef=Z,this.cutTextNum=0,this.whish=[]}addToCart(c){this._EcomdataService.addToCart(c)}addToWhish(c){this._EcomdataService.setWishlist(c).subscribe({next:n=>{"success"===n.status&&(this._ToastrService.success(n.message,"",{positionClass:"toast-bottom-right"}),this.whish=n.data,this._EcomdataService.whishNumber.next(this.whish.length))}})}removeFromWhish(c){this._EcomdataService.removeWishlist(c).subscribe({next:n=>{"success"===n.status&&(this._ToastrService.success(n.message,"",{positionClass:"toast-bottom-right"}),this.whish=n.data,this._EcomdataService.whishNumber.next(this.whish.length))}})}}return(r=_).\u0275fac=function(c){return new(c||r)(e.Y36(g.J),e.Y36(t._W),e.Y36(e.sBO))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-card"]],inputs:{product:"product",cutTextNum:"cutTextNum",whish:"whish"},standalone:!0,features:[e.jDz],decls:24,vars:20,consts:[[1,"product"],[1,"ptorcut-area","position-relative"],["role","button","class","heart",3,"click",4,"ngIf"],["role","button",3,"routerLink"],["loading","lazy",1,"w-100",3,"src","alt"],[1,"h6","font-sm","text-main"],[1,"h6","small"],[1,"hstack","justify-content-between"],[1,"small"],[1,"d-flex","font-sm","align-items-center"],[1,"d-flex","mb-0","list-unstyled"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"add-btn","main-btn","w-100",3,"click"],["role","button",1,"heart",3,"click"],[1,"fas","fa-heart"],[1,"fa-solid","fa-heart-crack"],["class","fas fa-star rating-color",4,"ngIf"],[1,"fas","fa-star","rating-color"],[1,"fas","fa-star-half","rating-color"]],template:function(c,n){1&c&&(e.TgZ(0,"div")(1,"div",0)(2,"div",1),e.YNc(3,b,2,0,"span",2),e.YNc(4,m,2,0,"span",2),e.TgZ(5,"header",3),e._UZ(6,"img",4),e.TgZ(7,"h4",5),e._uU(8),e.qZA(),e.TgZ(9,"h3",6),e._uU(10),e.ALo(11,"cuttext"),e.qZA()(),e.TgZ(12,"footer",7)(13,"span",8),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"div",9)(17,"ul",10),e.YNc(18,l,2,1,"li",11),e.YNc(19,o,2,0,"li",12),e.qZA(),e.TgZ(20,"span"),e._uU(21),e.qZA()()()(),e.TgZ(22,"button",13),e.NdJ("click",function(){return n.addToCart(n.product._id)}),e._uU(23," + Add To Cart "),e.qZA()()()),2&c&&(e.xp6(3),e.Q6J("ngIf",!n.whish.includes(n.product._id)),e.xp6(1),e.Q6J("ngIf",n.whish.includes(n.product._id)),e.xp6(1),e.Q6J("routerLink",e.VKq(17,s,n.product._id)),e.xp6(1),e.Q6J("src",n.product.imageCover,e.LSH)("alt",n.product.title),e.xp6(2),e.Oqu(n.product.category.name),e.xp6(2),e.Oqu(e.xi3(11,11,n.product.title,n.cutTextNum)),e.xp6(4),e.hij(" ",e.xi3(15,14,n.product.price,"EGP")," "),e.xp6(4),e.Q6J("ngForOf",e.DdM(19,a)),e.xp6(1),e.Q6J("ngIf",n.product.ratingsAverage%1!=0),e.xp6(2),e.hij(" ",n.product.ratingsAverage," "))},dependencies:[d.ez,d.sg,d.O5,d.H9,h.rH,p.r,t.Rh],styles:[".product[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.product[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px;z-index:99;font-size:40px;color:#0aad0a;opacity:0;transform:translateY(20px);transition:opacity 1s,transform 1s}"]}),_})()},953:(x,f,i)=>{i.d(f,{S:()=>C});var d=i(6814),h=i(1120),t=i(4769),p=i(4768),e=i(1731);const g=["navbar"];function b(l,o){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const s=t.oxw();t.xp6(1),t.hij(" ",s.whishItemNumber," ")}}function m(l,o){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const s=t.oxw();t.xp6(1),t.hij(" ",s.cartItemNumber," ")}}let C=(()=>{var l;class o{constructor(a,u,r,_){this._AuthService=a,this._Router=u,this._Renderer2=r,this._EcomdataService=_,this.cartItemNumber=0,this.whishItemNumber=0,this.userName=""}ngOnInit(){this._AuthService.userData.subscribe({next:a=>{null!==a?(console.log("data",a),this.userName=a.name?a?.name?.slice(0,1).toUpperCase():"U"):this.userName="U"}}),this._Router.url.includes("cart")||this._EcomdataService.getCartData().subscribe({next:a=>{"success"===a.status&&this._EcomdataService.cartNumber.next(a.numOfCartItems)},error:a=>{console.log("Error Cart Nav",a.error.message)}}),this._EcomdataService.cartNumber.subscribe({next:a=>{this.cartItemNumber=a}}),this._Router.url.includes("whishlist")||this._EcomdataService.getWishlist().subscribe({next:a=>{if("success"===a.status){const u=a.data.map(r=>r._id);this._EcomdataService.whishList.next(u),this._EcomdataService.whishNumber.next(a.data.length),this.whishItemNumber=a.data.length}}}),this._EcomdataService.whishNumber.subscribe({next:a=>{this.whishItemNumber=a}})}onScroll(){scrollY>200?(this._Renderer2.addClass(this.navbar.nativeElement,"px-5"),this._Renderer2.addClass(this.navbar.nativeElement,"py-3")):(this._Renderer2.removeClass(this.navbar.nativeElement,"px-5"),this._Renderer2.removeClass(this.navbar.nativeElement,"py-3"))}logOut(){localStorage.removeItem("_token"),this._AuthService.userData.next(null),this._Router.navigate(["/login"])}}return(l=o).\u0275fac=function(a){return new(a||l)(t.Y36(p.e),t.Y36(h.F0),t.Y36(t.Qsj),t.Y36(e.J))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-navbar"]],viewQuery:function(a,u){if(1&a&&t.Gf(g,5),2&a){let r;t.iGM(r=t.CRH())&&(u.navbar=r.first)}},hostBindings:function(a,u){1&a&&t.NdJ("scroll",function(){return u.onScroll()},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:55,vars:2,consts:[[1,"navbar","shadow-sm","navbar-expand-lg","fixed-top","navbar-light","bg-light"],["navbar",""],[1,"container-fluid"],["routerLink","/",1,"navbar-brand"],["src","./assets/images/freshcart-logo.svg","alt","freshCart"],["type","button","data-bs-toggle","collapse","data-bs-target","#collapsibleNavId","aria-controls","collapsibleNavId","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","d-lg-none"],[1,"navbar-toggler-icon"],["id","collapsibleNavId",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mt-2","mt-lg-0"],[1,"nav-item"],["routerLinkActive","active-link","routerLink","/home",1,"nav-link"],["routerLinkActive","active-link","routerLink","/products",1,"nav-link"],["routerLinkActive","active-link","routerLink","/brands",1,"nav-link"],["routerLinkActive","active-link","routerLink","/categories",1,"nav-link"],[1,"navbar-nav","ms-auto","mt-2","mt-lg-0"],[1,"nav-item","me-4","hstack"],["routerLink","/whishlist",1,"text-main","number-item"],[1,"fas","fa-heart","fa-2x"],[4,"ngIf"],[1,"nav-item","me-4"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle"],[1,"fas","fa-user","text-success"],[1,"dropdown-menu"],["routerLinkActive","active-link","routerLink","/forgot",1,"dropdown-item","small"],["routerLinkActive","active-link","routerLink","/updatepass",1,"dropdown-item","small"],["routerLinkActive","active-link","routerLink","/profile",1,"dropdown-item","small"],["routerLinkActive","active-link","routerLink","/allorders",1,"dropdown-item","small"],["routerLink","/cart",1,"text-main","number-item"],[1,"fas","fa-cart-shopping","fa-xl"],[1,"nav-item","d-flex","align-items-center","gap-3","me-4"],["href","https://www.facebook.com/ahmed.m.menisy/","target","_blank",1,"text-reset"],[1,"fab","fa-facebook"],["target","_blank","href","https://api.whatsapp.com/send?phone=01015265077",1,"text-reset"],[1,"fab","fa-whatsapp"],["role","button",1,"nav-link",3,"click"]],template:function(a,u){1&a&&(t.TgZ(0,"nav",0,1)(2,"div",2)(3,"a",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"button",5),t._UZ(6,"span",6),t.qZA(),t.TgZ(7,"div",7)(8,"ul",8)(9,"li",9)(10,"a",10),t._uU(11,"Home"),t.qZA()(),t.TgZ(12,"li",9)(13,"a",11),t._uU(14,"Products"),t.qZA()(),t.TgZ(15,"li",9)(16,"a",12),t._uU(17,"Brands"),t.qZA()(),t.TgZ(18,"li",9)(19,"a",13),t._uU(20,"Categories"),t.qZA()()(),t.TgZ(21,"ul",14)(22,"li",15)(23,"a",16),t._UZ(24,"i",17),t.YNc(25,b,2,1,"span",18),t.qZA()(),t.TgZ(26,"li",19)(27,"div",20)(28,"button",21),t._UZ(29,"i",22),t.qZA(),t.TgZ(30,"ul",23)(31,"li")(32,"a",24),t._uU(33,"Forgot Password"),t.qZA()(),t.TgZ(34,"li")(35,"a",25),t._uU(36,"Update password"),t.qZA()(),t.TgZ(37,"li")(38,"a",26),t._uU(39,"Profile"),t.qZA()(),t.TgZ(40,"li")(41,"a",27),t._uU(42,"My Orders"),t.qZA()()()()(),t.TgZ(43,"li",15)(44,"a",28),t._UZ(45,"i",29),t.YNc(46,m,2,1,"span",18),t.qZA()(),t.TgZ(47,"li",30)(48,"a",31),t._UZ(49,"i",32),t.qZA(),t.TgZ(50,"a",33),t._UZ(51,"i",34),t.qZA()(),t.TgZ(52,"li",9)(53,"span",35),t.NdJ("click",function(){return u.logOut()}),t._uU(54,"SignOut"),t.qZA()()()()()()),2&a&&(t.xp6(25),t.Q6J("ngIf",u.whishItemNumber),t.xp6(21),t.Q6J("ngIf",u.cartItemNumber))},dependencies:[d.ez,d.O5,h.rH,h.Od],styles:['.navbar[_ngcontent-%COMP%]{transition:padding 1s}.number-item[_ngcontent-%COMP%]{position:relative}.number-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;bottom:18%;left:36%;color:#343a40;z-index:10;font-weight:900}.dropdown-toggle[_ngcontent-%COMP%]{background-color:transparent;border:1px solid #0aad0a;border-radius:50%;width:40px;height:40px;display:inline-block;padding:0;font-size:15px;position:relative}.dropdown-toggle[_ngcontent-%COMP%]:after{display:inline-block;margin-left:0;vertical-align:0;content:"";border-top:.5em solid #0aad0a;border-right:.5em solid transparent;border-left:.5em solid transparent;position:absolute;top:100%;left:50%;transform:translate(-50%)}.dropdown-item[_ngcontent-%COMP%]:focus, .dropdown-item[_ngcontent-%COMP%]:hover{background-color:#055d0a!important;color:#fff!important}.dropdown-item[_ngcontent-%COMP%]{transition:1s!important;padding:4px!important}.dropdown-menu[_ngcontent-%COMP%]{padding:3px!important;text-align:center}.dropdown-menu[data-bs-popper][_ngcontent-%COMP%]{left:-124%!important}']}),o})()}}]);