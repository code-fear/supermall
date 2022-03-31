<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
        <!-- <li v-for="item in cartList" :key="item">{{ item }}</li> -->
        <cart-list-item
          v-for="(item, index) in cartList"
          :key="index"
          :itemInfo="item"
        ></cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../../components/common/Scroll/Scroll";
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";

export default {
  // name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  // props: {
  //   cartList: {
  //     type: Array,
  //     default() {
  //       return [];
  //     },
  //   },
  // },
  // activated(){
  //   this.$refs.Scroll.refresh()
  // }
};
</script>

<style scoped>
.cart-list {
  position: absolute;
  top: 44px;
  bottom: 49px;
  width: 100%;
  height: (100% - 44px - 49px - 40px);
}
.content {
  height: 100%;
  overflow: hidden;
}
</style>
