<template>
  <div id="app">
    <loading v-show='loading'></loading>
    <router-view class="ui-view" keep-alive :transition="effect" transition-mode="out-in"></router-view>
  </div>
</template>

<script>
import Loading from './components/loading.vue'

export default {
  components: {
    Loading
  },
  data () {
    return {
      loading: true,
      effect: 'fade'
    }
  }
}
</script>

<style>
/*body {
  background-color: blue;
}*/
</style>
