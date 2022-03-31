(function(){"use strict";var t={2989:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("main-tab-bar")],1)},o=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home",activeColor:"rgb(255, 87, 119)"}},[r("img",{attrs:{slot:"item-icon",src:n(9537),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(996),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/category",activeColor:"rgb(255, 87, 119)"}},[r("img",{attrs:{slot:"item-icon",src:n(4166),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(1488),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"/cart",activeColor:"rgb(255, 87, 119)"}},[r("img",{attrs:{slot:"item-icon",src:n(720),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(4150),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"/profile",activeColor:"rgb(255, 87, 119)"}},[r("img",{attrs:{slot:"item-icon",src:n(8561),alt:""},slot:"item-icon"}),r("img",{attrs:{slot:"item-icon-active",src:n(5120),alt:""},slot:"item-icon-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item",on:{click:t.itemClick}},[t.isActive?n("div",[t._t("item-icon-active")],2):n("div",[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},s=[],l=(n(4916),n(5306),{data:function(){return{}},props:{path:String,activeColor:{type:String}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.replace(this.path)}}}),f=l,m=n(1001),d=(0,m.Z)(f,u,s,!1,null,null,null),p=d.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"}},[t._t("default")],2)},h=[],g={},b=(0,m.Z)(g,v,h,!1,null,null,null),y=b.exports,x={components:{TabBar:y,TabBarItem:p}},C=x,_=(0,m.Z)(C,a,c,!1,null,null,null),w=_.exports,k={components:{MainTabBar:w}},O=k,Z=(0,m.Z)(O,i,o,!1,null,null,null),E=Z.exports,T=(n(1539),n(8783),n(3948),n(2809)),S=function(){return Promise.all([n.e(691),n.e(856),n.e(20)]).then(n.bind(n,1198))},P=function(){return n.e(742).then(n.bind(n,4742))},j=function(){return Promise.all([n.e(691),n.e(659)]).then(n.bind(n,5644))},A=function(){return Promise.all([n.e(691),n.e(390)]).then(n.bind(n,6390))},L=function(){return Promise.all([n.e(691),n.e(856),n.e(920)]).then(n.bind(n,5996))};r.Z.use(T.Z);var $=T.Z.prototype.replace;T.Z.prototype.replace=function(t){return $.call(this,t).catch((function(t){return t}))};var N=[{path:"/",name:"home"},{path:"/home",component:S},{path:"/category",component:P},{path:"/profile",component:j},{path:"/cart",component:A},{path:"/detail/:iid",component:L}],B=new T.Z({mode:"history",base:"/",routes:N}),F=B,M=n(4665),D={addCounter:function(t,e){e.count++},addToCart:function(t,e){t.cartList.push(e)}},q=D,I=(n(9826),{addCart:function(t,e){var n=t.state.cartList.find((function(t){return t.iid===e.iid}));n?t.commit("addCounter",n):(e.count=1,t.commit("addToCart",e))}}),H=I,K={cartLength:function(t,e){return t.cartList.length},cartList:function(t){return t.cartList}};r.Z.use(M.ZP);var U=new M.ZP.Store({state:{cartList:[]},getters:K,mutations:q,actions:H,modules:{}});r.Z.config.productionTip=!1,r.Z.prototype.$bus=new r.Z,new r.Z({router:F,store:U,render:function(t){return t(E)}}).$mount("#app")},4166:function(t,e,n){t.exports=n.p+"img/category.7181e1c2.svg"},1488:function(t,e,n){t.exports=n.p+"img/category_active.a33536c0.svg"},9537:function(t,e,n){t.exports=n.p+"img/home.cd35010f.svg"},996:function(t,e,n){t.exports=n.p+"img/home_active.1ba3ef5a.svg"},8561:function(t,e,n){t.exports=n.p+"img/profile.f85b0ca1.svg"},5120:function(t,e,n){t.exports=n.p+"img/profile_active.999a4310.svg"},720:function(t,e,n){t.exports=n.p+"img/shopcart.03205c0d.svg"},4150:function(t,e,n){t.exports=n.p+"img/shopcart_active.8521e9d3.svg"}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,r,i,o){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],i=t[l][1],o=t[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&o||a>=o)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(c=!1,o<a&&(a=o));if(c){t.splice(l--,1);var s=i();void 0!==s&&(e=s)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[r,i,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{20:"5c0dd155",390:"e082aaa5",659:"307cbef6",691:"7dc207b4",742:"363df3b5",856:"d18ecb64",920:"8af71184"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{20:"514fcd9e",390:"e9caf3f5",659:"cd9e0d7e",920:"69d1193b"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="supermall:";n.l=function(r,i,o,a){if(t[r])t[r].push(i);else{var c,u;if(void 0!==o)for(var s=document.getElementsByTagName("script"),l=0;l<s.length;l++){var f=s[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+o){c=f;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+o),c.src=r),t[r]=[i];var m=function(e,n){c.onerror=c.onload=null,clearTimeout(d);var i=t[r];if(delete t[r],c.parentNode&&c.parentNode.removeChild(c),i&&i.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=m.bind(null,c.onerror),c.onload=m.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var o=function(o){if(i.onerror=i.onload=null,"load"===o.type)n();else{var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=a,u.request=c,i.parentNode.removeChild(i),r(u)}};return i.onerror=i.onload=o,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var i=n[r],o=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===t||o===e))return i}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){i=a[r],o=i.getAttribute("data-href");if(o===t||o===e)return i}},r=function(r){return new Promise((function(i,o){var a=n.miniCssF(r),c=n.p+a;if(e(a,c))return i();t(r,c,i,o)}))},i={143:0};n.f.miniCss=function(t,e){var n={20:1,390:1,659:1,920:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=r(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)r.push(i[2]);else{var o=new Promise((function(n,r){i=t[e]=[n,r]}));r.push(i[2]=o);var a=n.p+n.u(e),c=new Error,u=function(r){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,i[1](c)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var i,o,a=r[0],c=r[1],u=r[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(u)var l=u(n)}for(e&&e(r);s<a.length;s++)o=a[s],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},r=self["webpackChunksupermall"]=self["webpackChunksupermall"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2989)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.ffcd0545.js.map