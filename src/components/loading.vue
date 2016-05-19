<template>
  <div class="loader">
    <ring-loader class='loader' :loading="loading" :color="color" :size="size"></ring-loader>
  </div>
</template>

<script>
import RingLoader from 'vue-spinner/src/RingLoader.vue'
export default {
  components: {
    RingLoader
  }
}
</script>

<style scoped>
  .loader {
    position: absolute;
    top: 50%; 
    left: 50%;
    transform: translate(-25px,-25px);
  }
</style>

