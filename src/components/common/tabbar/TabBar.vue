<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>


<style>
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  box-shadow: 0 -1px 3px rgba(100, 100, 100, 0.2);
}
</style>
  