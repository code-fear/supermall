"use strict";(self["webpackChunksupermall"]=self["webpackChunksupermall"]||[]).push([[447],{3354:function(e,t,s){s.r(t),s.d(t,{default:function(){return V}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"home"}},[s("nav-bar",{staticClass:"home-nav"},[s("div",{attrs:{slot:"center"},slot:"center"},[e._v("购物街")])]),s("tab-control",{directives:[{name:"show",rawName:"v-show",value:e.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"tab-control",attrs:{titles:["流行","新款","精选"]},on:{tabClick:e.tabClick}}),s("scroll",{ref:"scroll",staticClass:"content",attrs:{probeType:3,pullUpLoad:!0},on:{scroll:e.contentScroll,pullingUp:e.loadMore}},[s("home-swiper",{attrs:{banners:e.banners},on:{swiperImageLoad:e.swiperImageLoad}}),s("recommend-view",{attrs:{recommends:e.recommends}}),s("feature-view"),s("tab-control",{ref:"tabControl2",attrs:{titles:["流行","新款","精选"]},on:{tabClick:e.tabClick}}),s("goods-list",{attrs:{goods:e.showGoods}})],1),s("back-top",{directives:[{name:"show",rawName:"v-show",value:e.isShowBackTop,expression:"isShowBackTop"}],nativeOn:{click:function(t){return e.backClick.apply(null,arguments)}}})],1)},a=[],o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("swiper",{staticClass:"swiper"},e._l(e.banners,(function(t,r){return s("swiper-item",{key:r},[s("a",{attrs:{href:t.link}},[s("img",{attrs:{src:t.image},on:{load:e.imageLoad}})])])})),1)},n=[],i=s(2594),l={name:"HomeSwiper",props:{banners:{type:Array,default(){return[]}}},data(){return{isLoad:!1}},methods:{imageLoad(){this.isLoad||(this.$emit("swiperImageLoad"),this.isLoad=!0)}},components:{Swiper:i.k,SwiperItem:i.t}},c=l,m=s(1001),d=(0,m.Z)(c,o,n,!1,null,null,null),u=d.exports,p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"recommend"},e._l(e.recommends,(function(t){return s("div",{key:t.acm,staticClass:"recommend-item"},[s("a",{attrs:{href:t.link}},[s("img",{attrs:{src:t.image}}),s("div",[e._v(e._s(t.title))])])])})),0)},h=[],f={name:"RecommendView",props:{recommends:{type:Array,defaut(){return[]}}}},b=f,g=(0,m.Z)(b,p,h,!1,null,null,null),v=g.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"feature"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:s(8775),alt:""}})])])}],C={},y=C,_=(0,m.Z)(y,w,k,!1,null,null,null),T=_.exports,x=s(3558),$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tab-control"},e._l(e.titles,(function(t,r){return s("div",{key:t,staticClass:"tab-control-item",class:{active:r===e.currentIndex},on:{click:function(t){return e.itemClick(r)}}},[s("span",[e._v(" "+e._s(t)+" ")])])})),0)},L=[],I={name:"TabControl",props:{titles:{type:Array,default(){return[]}}},data(){return{currentIndex:0}},methods:{itemClick(e){this.currentIndex=e,this.$emit("tabClick",e)}}},S=I,G=(0,m.Z)(S,$,L,!1,null,null,null),Z=G.exports,H=s(80),E=s(256);function F(){return(0,E.W)({url:"/home/multidata"})}function B(e,t){return(0,E.W)({url:"/home/data",params:{type:e,page:t}})}var O=s(1691),Y=s(7639),A={components:{HomeSwiper:u,RecommendView:v,FeatureView:T,NavBar:x.Z,TabControl:Z,GoodsList:H.Z,Scroll:O.Z},data(){return{banners:[],recommends:[],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,isTabFixed:!1,saveY:0,itemImgListener:null}},created(){this.getSData(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell")},mixins:[Y.x,Y.s],mounted(){},computed:{showGoods(){return this.goods[this.currentType].list}},destroyed(){console.log("home destroyed")},activated(){this.$refs.scroll.scrollTo(0,this.saveY,0),this.$refs.scroll.refresh()},deactivated(){this.saveY=this.$refs.scroll.getScrollY(),this.$bus.$off("itemImageLoad",this.itemImgListener)},methods:{tabClick(e){switch(e){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=e,this.$refs.tabControl2.currentIndex=e},contentScroll(e){this.isShowBackTop=-e.y>3e3,this.isTabFixed=-e.y>this.tabOffsetTop},loadMore(){this.getHomeGoods(this.currentType)},swiperImageLoad(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},getSData(){F().then((e=>{this.banners=e.data.data.banner.list,this.recommends=e.data.data.recommend.list}))},getHomeGoods(e){const t=this.goods[e].page+1;B(e,t).then((t=>{this.goods[e].list.push(...t.data.data.list),this.goods[e].page+=1,this.$refs.scroll.finishPullUp()}))}}},N=A,U=(0,m.Z)(N,r,a,!1,null,"1e3790e4",null),V=U.exports},8775:function(e,t,s){e.exports=s.p+"img/recommend_bg.a1646d5d.jpg"}}]);
//# sourceMappingURL=447.76b64af8.js.map