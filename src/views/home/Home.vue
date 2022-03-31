<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script scoped>
import HomeSwiper from "./childCom/index.vue";
import RecommendView from "./childCom/RecommendView.vue";
import FeatureView from "./childCom/FeatureView.vue";

import NavBar from "../../components/common/navbar/NavBar.vue";
import TabControl from "../../components/content/tabControl/TabControl.vue";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import { getHomeMultidata, getHomeGoods } from "../../../network/home";
import Scroll from "../../components/common/Scroll/Scroll";

import {itemListenerMixin,backTopMixin} from "../../common/mixin"

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
  },

  data() {
    //用来保存拿到后的数据
    return {
      banners: [],
      recommends: [],
      goods: {
        //首页下方数据结构
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop", //默认当前类型
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY:0,
      itemImgListener: null,
    };
  },
  created() {
    //组件创建完就会执行的函数
    //请求多个数据
    this.getSData();
    // .catch(error=>{
    //   console.log(error);
    // })

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mixins:[itemListenerMixin,backTopMixin],
  mounted() {

  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  destroyed() {
    console.log("home destroyed");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    //保存Y值
    this.saveY = this.$refs.scroll.getScrollY();
    // console.log(this.saveY);
    // 取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    contentScroll(position) {
      //下拉监听
      // console.log(position);
      this.isShowBackTop = -position.y > 3000;
      // 2.决定tabControl是否吸顶(position: fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      // console.log('上拉加载更多');
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      //获取TabControl的OffsetTop
      //所有的组件都有一个属性$el: 用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      // console.log(this.$refs.tabControl.$el.offsetTop);
    },

    /*网络请求相关方法*/

    getSData() {
      getHomeMultidata().then((res) => {
        //console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    //请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //动态获取当前类型的页数  增强复用性
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.data.list);
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        //完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  position: relative;
  /* padding-top: 44px; */
  height: 100vh; /*视口高度*/
}
.home-nav {
  background-color: rgb(255, 87, 119);
  color: #fff;
}
.tab-control {
  position: relative;
  /* top: 44px; */
  z-index: 998;
}
.content {
  /* height: calc(100% - 93px); */
  position: absolute;
  top: 44px;
  bottom: 51px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/* .fixed {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
} */
</style>