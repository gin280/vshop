<template>
  <div id="views">
    <!--欢迎业务组件-->
      <markets-module :markets="markets"></markets-module>

      <!--秒杀倒计时组件-->
      <promotions-module></promotions-module>

      <!--商品组件-->
      <goods-module :goods="goods"></goods-module>

      <!--分类展示组件-->
      <showcase-module></showcase-module>
  </div>
</template>

<script>
import MarketsModule from './markets.vue'
import PromotionsModule from '../../views/home/promotions.vue'
import GoodsModule from '../../views/home/goods.vue'
import ShowcaseModule from '../../views/home/showcase.vue'

export default {
  props: [ 'goods', 'markets' ],
  components: {
    MarketsModule, PromotionsModule, GoodsModule, ShowcaseModule
  }
}
</script>