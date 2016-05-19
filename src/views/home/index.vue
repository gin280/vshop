<template>
  <div class="ui-app with-header">
    <views-module :goods="goodslist" :markets="marketslist"></views-module>
    <!-- <img src="../../assets/images/common/loading.png" height="1000" width="200" alt=""> -->
  </div>
</template>

<script>
// import Cover from '../../components/cover.vue'
// import Mask from '../../components/mask.vue'
// import Menuleft from '../../components/menuleft.vue'
// import HeadModule from '../../components/head.vue'
// import DownModule from '../../views/home/down.vue'
// import LoginModule from '../../views/home/login.vue'
import ViewsModule from '../../views/home/views.vue'

export default {
  components: {
    ViewsModule
  },
  data () {
    return {
      marketslist: [],
      goodslist: []
    }
  },
  route: {
    data (transition) {
      this.getAjax(transition)
    }
  },
  methods: {
    getAjax (transition) {
      let a = (response) => {
        const jsondata = response.data
        this.$parent.loading = false
        if (jsondata && jsondata.code === 0) {
          transition.next({
            marketslist: jsondata.data.markets
          })
        }
      }
      let b = (response) => {
        console.log(response)
      }
      this.$http.get('home.json').then(a, b)
    }
  }
}
</script>


<style scoped lang='postcss'>
.ui-app {
  /*background-color: red;*/
}
</style>