<template>
  <h2>全部商品</h2>
  <div class="goods">
    
    <ul>
      <li v-for='item in goods'>
        <img :src='item.pic' alt="">
        <h3>{{item.title}}</h3>
        <h4>{{item.desc}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['goods']
}
</script>

<style scoped lang='postcss'>
  h2 {
    font-size: 56px;
  }
  .goods {
    ul {
      display: flex;
      flex-flow:row wrap;
      li {
        flex:0 0 25%;
        text-align: center;
      }
    }
  }
</style>