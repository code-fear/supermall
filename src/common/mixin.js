// import {POP, NEW, SELL} from "./const";
import { debounce } from "../common/utils";
import BackTop from "../components/common/bacTop/BackTop.vue";

export const itemListenerMixin = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 100);
    this.itemImgListener = () => {
      refresh();
    }
    this.$bus.$on("itemImageLoad", this.itemImgListener);
    //  
  }
}

export const backTopMixin = {
  components:{
    BackTop,
  },
  data() {
    return {
      isShowBackTop: true,
    }
  },
  methods: {
    backClick() {
      //返回顶部
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}

// export const tabControlMixin = {
//   data: function () {
//     return {
//       currentType: POP
//     }
//   },
//   methods: {
//     tabClick(index) {
//       switch (index) {
//         case 0:
//           this.currentType = POP
//           break
//         case 1:
//           this.currentType = NEW
//           break
//         case 2:
//           this.currentType = SELL
//           break
//       }
//       console.log(this.currentType);
//     }
//   }
// }
