
<template>
  <div class="ui-app with-header">
    <mask :show='mask'></mask>
    <menu-left :show='menu.show' :list='menu.list'></menu-left>
    <head-module></head-module>
    <views-module :goods="goodslist" :markets="marketslist"></views-module>
    <!-- <img src="../../assets/images/common/loading.png" height="1000" width="200" alt=""> -->
  </div>
</template>

<script>
// import Cover from '../../components/cover.vue'
import Mask from '../../components/mask.vue'
import MenuLeft from '../../components/menuleft.vue'
import HeadModule from '../../components/head.vue'
// import DownModule from '../../views/home/down.vue'
// import LoginModule from '../../views/home/login.vue'
import ViewsModule from '../../views/home/views.vue'

export default {
  components: {
    ViewsModule,
    MenuLeft,
    HeadModule,
    Mask
  },
  data () {
    return {
      marketslist: [],
      goodslist: [],
      menu: {
        show: false,
        list: []
      },
      mask: false
    }
  },
  // route: {
  //   data (transition) {
  //     this.getAjax(transition)
  //   }
  // },
  // methods: {
  //   getAjax (transition) {
  //     let a = (response) => {
  //       const jsondata = response.data
  //       this.$parent.loading = false
  //       if (jsondata && jsondata.code === 0) {
  //         transition.next({
  //           marketslist: jsondata.data.markets,
  //           goodslist: jsondata.data.goods,
  //           menu: {
  //             show: false,
  //             list: jsondata.data.goods
  //           }
  //         })
  //       }
  //     }
  //     let b = (response) => {
  //       console.log(response)
  //     }
  //     this.$http.get('home.json').then(a, b)
  //   }
  // }
  ready () {
    this.$http.get('home.json').then((response) => {
      const jsondata = response.data
      if (jsondata && jsondata.code === 0) {
        this.$parent.loading = false
        this.marketslist = jsondata.data.markets
        this.goodslist = jsondata.data.goods
        this.menu.list = jsondata.data.goods
      }
    }).then((response) => {
      console.log(response)
    })
  }
}
</script>


<style scoped lang='postcss'>
.ui-app {
  margin-left: 15px;
  margin-right: 15px;
}
</style>