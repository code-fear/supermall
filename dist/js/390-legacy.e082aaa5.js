(self["webpackChunksupermall"]=self["webpackChunksupermall"]||[]).push([[390],{3558:function(t,e,c){"use strict";c.d(e,{Z:function(){return l}});var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"nav-bar"},[c("div",{staticClass:"left"},[t._t("left")],2),c("div",{staticClass:"center"},[t._t("center")],2),c("div",{staticClass:"right"},[t._t("right")],2)])},n=[],r={},i=r,a=c(1001),o=(0,a.Z)(i,s,n,!1,null,"3a16fd40",null),l=o.exports},6390:function(t,e,c){"use strict";c.r(e),c.d(e,{default:function(){return R}});var s=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"cart"}},[c("nav-bar",{staticClass:"nav-bar"},[c("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物车("+t._s(t.cartLength)+")")])]),c("cart-list",{staticClass:"cart-list"}),c("bottom-bar")],1)},n=[];c(7941),c(2526),c(7327),c(1539),c(5003),c(4747),c(9337);function r(t,e,c){return e in t?Object.defineProperty(t,e,{value:c,enumerable:!0,configurable:!0,writable:!0}):t[e]=c,t}function i(t,e){var c=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),c.push.apply(c,s)}return c}function a(t){for(var e=1;e<arguments.length;e++){var c=null!=arguments[e]?arguments[e]:{};e%2?i(Object(c),!0).forEach((function(e){r(t,e,c[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(c)):i(Object(c)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(c,e))}))}return t}var o=c(3558),l=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"cart-list"},[c("scroll",{ref:"scroll",staticClass:"content"},t._l(t.cartList,(function(t,e){return c("cart-list-item",{key:e,attrs:{itemInfo:t}})})),1)],1)},u=[],f=c(1691),d=c(4665),h=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"shop-item"}},[c("div",{staticClass:"item-selector"},[c("CheckButton",{attrs:{value:t.itemInfo.checked},on:{checkBtnClick:t.checkedChange}})],1),c("div",{staticClass:"item-img"},[c("img",{attrs:{src:t.itemInfo.imgURL,alt:"商品图片"}})]),c("div",{staticClass:"item-info"},[c("div",{staticClass:"item-title"},[t._v(t._s(t.itemInfo.title))]),c("div",{staticClass:"item-desc"},[t._v("商品描述: "+t._s(t.itemInfo.desc))]),c("div",{staticClass:"info-bottom"},[c("div",{staticClass:"item-price left"},[t._v("¥"+t._s(t.itemInfo.newPrice))]),c("div",{staticClass:"item-count right"},[t._v("x"+t._s(t.itemInfo.count))])])])])},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"icon-selector",class:{"selector-active":t.checked},on:{click:t.selectItem}},[s("img",{attrs:{src:c(3476),alt:""}})])])},p=[],C={name:"CheckButton",props:{value:{type:Boolean,default:!0}},data:function(){return{checked:this.value}},methods:{selectItem:function(){this.$emit("checkBtnClick")}},watch:{value:function(t){this.checked=t}}},k=C,b=c(1001),_=(0,b.Z)(k,v,p,!1,null,"15a80ef2",null),g=_.exports,O={props:{itemInfo:{type:Object,default:function(){return{}}}},components:{CheckButton:g},methods:{checkedChange:function(){this.itemInfo.checked=!this.itemInfo.checked}}},y=O,j=(0,b.Z)(y,h,m,!1,null,"56aa84bd",null),w=j.exports,B={components:{Scroll:f.Z,CartListItem:w},computed:a({},(0,d.Se)(["cartList"]))},P=B,I=(0,b.Z)(P,l,u,!1,null,"cb30ca9a",null),$=I.exports,L=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"bottom-menu"},[c("CheckButton",{staticClass:"select-all",on:{checkBtnClick:t.checkBtnClick},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}}),c("span",[t._v("全选")]),c("span",{staticClass:"total-price"},[t._v("合计: ¥"+t._s(t.totalPrice))]),c("span",{staticClass:"buy-product"},[t._v("去计算("+t._s(t.$store.getters.cartCount)+")")])],1)},x=[],E=(c(6977),c(9826),{components:{CheckButton:g},computed:{totalPrice:function(){var t=this.$store.getters.cartList;return t.filter((function(t){return t.checked})).reduce((function(t,e){return t+e.count*e.newPrice}),0).toFixed(2)},isSelectAll:function(){return void 0===this.$store.getters.cartList.find((function(t){return!1===t.checked}))}},methods:{checkBtnClick:function(){var t=this.$store.getters.cartList.find((function(t){return!t.checked}));t?this.$store.state.cartList.forEach((function(t){t.checked=!0})):this.$store.state.cartList.forEach((function(t){t.checked=!1}))}}}),S=E,Z=(0,b.Z)(S,L,x,!1,null,"04d8010e",null),D=Z.exports,A={name:"Cart",components:{NavBar:o.Z,CartList:$,BottomBar:D},computed:a({},(0,d.Se)(["cartLength"]))},F=A,N=(0,b.Z)(F,s,n,!1,null,"2a681a40",null),R=N.exports},9337:function(t,e,c){var s=c(2109),n=c(9781),r=c(3887),i=c(5656),a=c(1236),o=c(6135);s({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,c,s=i(t),n=a.f,l=r(s),u={},f=0;while(l.length>f)c=n(s,e=l[f++]),void 0!==c&&o(u,e,c);return u}})},3476:function(t,e,c){"use strict";t.exports=c.p+"img/tick.82dd6e3a.svg"}}]);
//# sourceMappingURL=390-legacy.e082aaa5.js.map