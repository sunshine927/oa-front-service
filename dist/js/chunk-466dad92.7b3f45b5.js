(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-466dad92"],{3750:function(t,n,e){"use strict";var c=e("eaee"),r=e.n(c);r.a},9658:function(t,n,e){"use strict";e.r(n);var c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"reset-mail",staticStyle:{height:"100%"}},[e("div",{staticClass:"content"},[t.loading?t._e():e("a-card",{attrs:{title:t.isSuccess?"验证成功":"验证失败"}},[e("div",{staticClass:"header m-b-lg text-center"},[e("p",[e("a-icon",{class:{icon:!0,isSuccess:t.isSuccess,error:!t.isSuccess},attrs:{type:t.isSuccess?"check-circle":"close-circle"}})],1),t.isSuccess?e("span",[t._v("您已成功绑定邮箱")]):e("span",[t.tips?e("span",[t._v(t._s(t.tips))]):e("span",[t._v("绑定邮箱失败")])])]),e("a-button",{staticClass:"middle-btn",attrs:{type:"primary",block:"",size:"large"},on:{click:function(n){return t.routerLink("/home",!0)}}},[e("span",[t._v("进入首页")])])],1)],1)])},r=[],i=e("c24f"),a=e("2f14"),o={data:function(){return{loading:!0,isSuccess:!1,tips:""}},created:function(){this.checkBindMail()},methods:{checkBindMail:function(){var t=this;Object(i["b"])({token:this.$route.query.token}).then((function(n){if(t.loading=!1,!Object(a["a"])(n))return t.tips=n.msg,!1;t.isSuccess=!0}))}}},u=o,s=(e("3750"),e("2877")),d=Object(s["a"])(u,c,r,!1,null,null,null);n["default"]=d.exports},c24f:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"j",(function(){return d})),e.d(n,"h",(function(){return p})),e.d(n,"d",(function(){return f})),e.d(n,"i",(function(){return l})),e.d(n,"g",(function(){return h})),e.d(n,"k",(function(){return b})),e.d(n,"f",(function(){return g})),e.d(n,"c",(function(){return j})),e.d(n,"e",(function(){return m})),e.d(n,"b",(function(){return v}));e("96cf"),e("ac6a");var c=e("3b8d"),r=e("22b6"),i=e("a18c"),a=e("4360"),o=e("2f14");function u(t){return s.apply(this,arguments)}function s(){return s=Object(c["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",r["a"].post("project/login",n));case 1:case"end":return t.stop()}}),t)}))),s.apply(this,arguments)}function d(t){return r["a"].post("project/login/register",t)}function p(t){return r["a"].post("project/login/getCaptcha",{mobile:t})}function f(t){var n=t.code;return a["a"].dispatch("setCurrentOrganization",t),r["a"].post("project/index/changeCurrentOrganization",{organizationCode:n}).then((function(t){if(Object(o["a"])(t))return a["a"].dispatch("SET_MENU",t.data.menuList),a["a"].dispatch("SET_USER",t.data.member),a["a"].dispatch("windowLoading",!0),setTimeout((function(){var n=t.data.menuList;if(n){var e=i["a"].options.routes;n.forEach((function(t){e[0].children.push(Object(o["b"])(t)),t.children&&t.children.forEach((function(t){e[0].children.push(Object(o["b"])(t)),t.children&&t.children.forEach((function(t){e[0].children.push(Object(o["b"])(t))}))}))})),i["a"].addRoutes(e),a["a"].dispatch("windowLoading",!1)}}),500),Promise.resolve(t)}))}function l(t){return r["a"].post("project/account",t)}function h(t){return r["a"].post("project/account/forbid",{accountCode:t,status:0})}function b(t){return r["a"].post("project/account/resume",{accountCode:t,status:1})}function g(t){var n="project/account/add";return t.code&&(n="project/account/edit"),r["a"].post(n,t)}function j(t,n){return r["a"].post("project/account/auth",{id:t,auth:n})}function m(t){return r["a"].post("project/account/del",{accountCode:t})}function v(t){return r["a"].post("project/login/_checkBindMail",t)}},eaee:function(t,n,e){}}]);