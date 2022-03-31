<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon" /></div>
    <div v-else><slot name="item-icon-active" /></div>
    <div :style="activeStyle"><slot name="item-text" /></div>

    <!-- <img src="../../../assets/img/tabbar/home.svg" alt="" />
    <div>首页</div>  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // isActive: true,
    };
  },
  props:{
    path: String,
    activeColor:{
      type:String
    }
  },
  computed:{
    isActive(){
      // console.log(this.path);
      // console.log(this.$route.path);
      return this.$route.path.indexOf(this.path) !== -1 //判断目前所在路径是不是在这个路径之下
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path)
    }
  },
};
</script>


<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle; /*去掉图片下方距离 */
  margin-bottom: 2px;
}
/* .active {
  color: rgb(255, 87, 119);
} */
</style>