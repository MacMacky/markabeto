(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237cc7"],{fd3f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-app",{staticClass:"dark",attrs:{dark:""}},[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase",attrs:{to:"/"}},[a("span",{staticClass:"font-weight-light"},[t._v("Mark A")])]),a("v-spacer"),a("v-btn",{staticClass:"nav-menu",attrs:{flat:"",to:"/"}},[a("span",{staticClass:"mr-2"},[t._v("Home")])])],1),a("v-container",[a("h1",{staticClass:"font-weight-medium"},[t._v("Blog")]),a("v-layout",{attrs:{row:"","justify-center":"",wrap:""}},t._l(t.blogs,(function(t){return a("blog-item",{key:t.title,attrs:{title:t.title,imgSrc:t.cover_image,likes:t.positive_reactions_count,commentsCount:t.comments_count,url:t.url}})})),1)],1)],1)],1)},n=[],s=(a("96cf"),a("3b8d")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{attrs:{xs12:"",sm6:"",md4:""}},[a("v-card",{staticClass:"blog-card ma-3",attrs:{color:"white",href:t.url,target:"__blank"}},[a("v-img",{attrs:{src:t.imgSrc?t.imgSrc:t.NotFoundImage,position:"center"}}),a("v-card-title",[a("div",{staticClass:"text-xs-center headline black--text"},[t._v(t._s(t.title))])]),a("v-layout",{attrs:{"align-center":"","justify-center":"","pb-3":""}},[a("v-icon",{attrs:{large:"",color:"red"}},[t._v("favorite")]),a("span",{staticClass:"subheading mr-2 dark-text"},[t._v(t._s(t.likes))]),a("v-icon",{attrs:{large:"",color:"blue"}},[t._v("comment")]),a("span",{staticClass:"subheading mr-2 dark-text"},[t._v(t._s(t.commentsCount))])],1)],1)],1)},o=[],c=(a("c5f6"),a("6bcb")),l=a.n(c),u={name:"BlogItem",data:function(){return{NotFoundImage:l.a}},props:{imgSrc:{type:String,default:function(){return l.a}},title:{type:String,required:!0},likes:{type:Number,required:!0},commentsCount:{type:Number,required:!0},url:{type:String,required:!0}}},m=u,d=a("2877"),p=a("6544"),v=a.n(p),g=a("b0af"),f=a("12b2"),b=a("0e8f"),_=a("132d"),h=a("adda"),k=a("a722"),C=Object(d["a"])(m,i,o,!1,null,null,null),w=C.exports;v()(C,{VCard:g["a"],VCardTitle:f["a"],VFlex:b["a"],VIcon:_["a"],VImg:h["a"],VLayout:k["a"]});var x={name:"Blog",data:function(){return{blogs:[]}},created:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://dev.to/api/articles?username=macmacky");case 2:return e=t.sent,t.next=5,e.json();case 5:a=t.sent,this.blogs=a;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),components:{BlogItem:w}},y=x,V=a("7496"),S=a("8336"),j=a("a523"),I=a("9910"),B=a("71d9"),q=a("2a7f"),N=Object(d["a"])(y,r,n,!1,null,null,null);e["default"]=N.exports;v()(N,{VApp:V["a"],VBtn:S["a"],VContainer:j["a"],VLayout:k["a"],VSpacer:I["a"],VToolbar:B["a"],VToolbarTitle:q["a"]})}}]);
//# sourceMappingURL=chunk-2d237cc7.c1e1da59.js.map