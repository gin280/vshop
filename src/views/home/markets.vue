<template>
  <div class="buy-markets lazyData" style="margin-bottom:10px;">
    <div class="markets-wrap module-list-wrap module-wrap">
      <div class="module-title">特色市场</div>
      <div class="module-content">
        <ul class="clearfix">
          <li class="module-item" v-for='item in markets'>
            <a href="">
              <div class="item-logo">
                <img :src='item.pic' alt="">
              </div>
              <div class="item-title">{{item.title}}</div>
              <div class="item-desc">{{item.desc}}</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['markets']
}
</script>

<style scoped lang='scss'>
  @mixin font-dpr($font-size){
    font-size: $font-size;

    [data-dpr="2"] & {
        font-size: $font-size * 2;
    }

    [data-dpr="3"] & {
        font-size: $font-size * 3;
    }
}

  .clearfix {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    a {
      text-decoration: none;
    }
    /*background-color: red;*/
    .module-item {
     /* width: 25%;*/
     text-align: center;
     align-content:space-between;
     .item-desc {
      color: #333;
     @include font-dpr(12px);

     }
      img {
        width: 70%;
      }
    }
  }
</style>