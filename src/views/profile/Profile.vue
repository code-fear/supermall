<template>
  <div>
    <scroll class="content"/>
  </div>
</template>

<script>
import Scroll from '../../components/common/Scroll/Scroll.vue'
export default {
  components: { Scroll },

}
</script>

<style scoped>
.content{
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>