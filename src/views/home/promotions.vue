<template>
  
  <div class="promotions">
    <div class="left">
      <h3><i class="icon ion-ios-alarm-outline">11</i><span>限时快抢</span></h3>
      <p><img src="http://s18.mogucdn.com/p1/160425/7ldo7_ie4tqnbvg4zdimzshazdambqgqyde_640x640.jpg_320x999.jpg_235x235.jpg" alt=""></p>
    </div>
    <div class="right">
      <img src="http://s7.mogucdn.com/p1/160314/2p_ifrtamjrgjstoyrug4zdambqhayde_428x174.jpg" alt="">
      <img src="http://s8.mogucdn.com/p1/16http://s7.mogucdn.com/p1/160404/h6_ifrgkyjwhftdontcg4zdambqmeyde_209x174.jpg0401/ec_ie4dindfmyydoodbg4zdambqgiyde_209x174.jpg" alt="">
      <img src="http://s7.mogucdn.com/p1/160404/h6_ifrgkyjwhftdontcg4zdambqmeyde_209x174.jpg" alt="">
    </div>
  </div>
</template>

<style scoped lang='postcss'>
.promotions {
  display: flex;
  h3 {
    color: #D32F2F;
    text-align: center;
  }
  .left {
    flex: 0 0 40%;
    p {
      img {
      display: inline-block;
      width: 100%;
    }
    }
  }
  .right {
    flex:1;
    img {
      display: inline-block;
      width: 97%;
      &:nth-child(2), &:nth-child(3){
        width:48%;
      }
    }
  }

}
</style>