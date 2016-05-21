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
* {
  margin: 0;
  padding: 0;
}
html,body {
  max-width: 100%;
}
[v-cloak]{
    display: none;
  }
.fade-enter{
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  .fade-leave {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);

  }
  .ui-view {
    min-width: 320px;
    max-width: 100%;
    /*margin-left: auto;
    margin-right: auto;*/
    transition: all .3s ease;
  }
</style>
