"use strict";(self["webpackChunksupermall"]=self["webpackChunksupermall"]||[]).push([[757],{3558:function(t,e,s){s.d(e,{Z:function(){return o}});var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-bar"},[s("div",{staticClass:"left"},[t._t("left")],2),s("div",{staticClass:"center"},[t._t("center")],2),s("div",{staticClass:"right"},[t._t("right")],2)])},i=[],a={},n=a,l=s(1001),r=(0,l.Z)(n,c,i,!1,null,"3a16fd40",null),o=r.exports},6757:function(t,e,s){s.r(e),s.d(e,{default:function(){return N}});var c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"cart"}},[s("nav-bar",{staticClass:"nav-bar"},[s("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物车("+t._s(t.cartLength)+")")])]),s("cart-list",{staticClass:"cart-list"}),s("bottom-bar")],1)},i=[],a=s(3558),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cart-list"},[s("scroll",{ref:"scroll",staticClass:"content"},t._l(t.cartList,(function(t,e){return s("cart-list-item",{key:e,attrs:{itemInfo:t}})})),1)],1)},l=[],r=s(1691),o=s(4665),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"shop-item"}},[s("div",{staticClass:"item-selector"},[s("CheckButton",{attrs:{value:t.itemInfo.checked},on:{checkBtnClick:t.checkedChange}})],1),s("div",{staticClass:"item-img"},[s("img",{attrs:{src:t.itemInfo.imgURL,alt:"商品图片"}})]),s("div",{staticClass:"item-info"},[s("div",{staticClass:"item-title"},[t._v(t._s(t.itemInfo.title))]),s("div",{staticClass:"item-desc"},[t._v("商品描述: "+t._s(t.itemInfo.desc))]),s("div",{staticClass:"info-bottom"},[s("div",{staticClass:"item-price left"},[t._v("¥"+t._s(t.itemInfo.newPrice))]),s("div",{staticClass:"item-count right"},[t._v("x"+t._s(t.itemInfo.count))])])])])},d=[],h=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("div",{staticClass:"icon-selector",class:{"selector-active":t.checked},on:{click:t.selectItem}},[c("img",{attrs:{src:s(3476),alt:""}})])])},m=[],f={name:"CheckButton",props:{value:{type:Boolean,default:!0}},data:function(){return{checked:this.value}},methods:{selectItem:function(){this.$emit("checkBtnClick")}},watch:{value:function(t){this.checked=t}}},v=f,C=s(1001),k=(0,C.Z)(v,h,m,!1,null,"15a80ef2",null),p=k.exports,_={props:{itemInfo:{type:Object,default(){return{}}}},components:{CheckButton:p},methods:{checkedChange(){this.itemInfo.checked=!this.itemInfo.checked}}},g=_,b=(0,C.Z)(g,u,d,!1,null,"56aa84bd",null),B=b.exports,I={components:{Scroll:r.Z,CartListItem:B},computed:{...(0,o.Se)(["cartList"])}},$=I,L=(0,C.Z)($,n,l,!1,null,"cb30ca9a",null),x=L.exports,Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottom-menu"},[s("CheckButton",{staticClass:"select-all",on:{checkBtnClick:t.checkBtnClick},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}}),s("span",[t._v("全选")]),s("span",{staticClass:"total-price"},[t._v("合计: ¥"+t._s(t.totalPrice))]),s("span",{staticClass:"buy-product"},[t._v("去计算("+t._s(t.$store.getters.cartCount)+")")])],1)},E=[],S={components:{CheckButton:p},computed:{totalPrice(){const t=this.$store.getters.cartList;return t.filter((t=>t.checked)).reduce(((t,e)=>t+e.count*e.newPrice),0).toFixed(2)},isSelectAll:function(){return void 0===this.$store.getters.cartList.find((t=>!1===t.checked))}},methods:{checkBtnClick:function(){let t=this.$store.getters.cartList.find((t=>!t.checked));t?this.$store.state.cartList.forEach((t=>{t.checked=!0})):this.$store.state.cartList.forEach((t=>{t.checked=!1}))}}},w=S,y=(0,C.Z)(w,Z,E,!1,null,"04d8010e",null),A=y.exports,P={name:"Cart",components:{NavBar:a.Z,CartList:x,BottomBar:A},computed:{...(0,o.Se)(["cartLength"])}},j=P,F=(0,C.Z)(j,c,i,!1,null,"2a681a40",null),N=F.exports},3476:function(t,e,s){t.exports=s.p+"img/tick.82dd6e3a.svg"}}]);
//# sourceMappingURL=757.84f438e0.js.map