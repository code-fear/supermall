<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    /* background-color: rgb(255, 87, 119); */
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 2px 1px rgb(100, 100, 100,.2);

    /* position: fixed;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0; */
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
</style>