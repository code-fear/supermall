<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <cart-list class="cart-list"></cart-list>
    <!-- :cartList="cartList" -->
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";
import { mapGetters } from "vuex";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar,
  },
  computed: {
    ...mapGetters(["cartLength"]),
    // cartList() {
    //   return this.$store.getters.cartList;
    // },
    // cartCount() {
    //   return this.$store.getters.cartCount;
    // },
  },
};
</script>

<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  background-color: rgb(255, 87, 119);
  font-weight: 700;
  color: #fff;
}
</style>
