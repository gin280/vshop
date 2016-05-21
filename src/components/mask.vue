<template>
  <div class="mask" v-if='show' @click='closeMask'>
    
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    closeMask () {
      this.$parent.mask = false
      this.$parent.menu.show = false
    }
  }
}
</script>

<style scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0,0,0,.6);
}
</style>