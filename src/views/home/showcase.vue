<template>
  <div class="showcase">
    <ul>
      <li>
        <img src="http://s18.mogucdn.com/p1/160506/upload_ifqtszldmmzdczjvhazdambqgyyde_315x315.png" alt="">
        <h3>长不大的少女心</h3>
        <h4>我不想 我不想 不想长大~</h4>
      </li>
      <li>
        <img src="http://s18.mogucdn.com/p1/160506/upload_ifqtszldmmzdczjvhazdambqgyyde_315x315.png" alt="">
        <h3>长不大的少女心</h3>
        <h4>我不想 我不想 不想长大~</h4>
      </li>
      <li>
        <img src="http://s18.mogucdn.com/p1/160506/upload_ifqtszldmmzdczjvhazdambqgyyde_315x315.png" alt="">
        <h3>长不大的少女心</h3>
        <h4>我不想 我不想 不想长大~</h4>
      </li>
      <li>
        <img src="http://s18.mogucdn.com/p1/160506/upload_ifqtszldmmzdczjvhazdambqgyyde_315x315.png" alt="">
        <h3>长不大的少女心</h3>
        <h4>我不想 我不想 不想长大~</h4>
      </li>
      <li>
        <img src="http://s18.mogucdn.com/p1/160506/upload_ifqtszldmmzdczjvhazdambqgyyde_315x315.png" alt="">
        <h3>长不大的少女心</h3>
        <h4>我不想 我不想 不想长大~</h4>
      </li>
    </ul>
  </div>
</template>

<style scoped lang='postcss'>
.showcase {
  ul {
    margin-top: 50px;
    display: flex;
    flex-flow:row wrap;
    li {
      flex:0 0 46%;
      position: relative;
      text-align: center;
      &::before {
          content:'家具';
          position: absolute;
          top: 0;
          left: 0;
          width: 100px;
          height: 100px;
          background-color: #fff;
          z-index:99;
          color: #000;
          border-radius: 50%;
        }
      &:nth-child(odd) {
        margin-right: 8%;
      }
      img {
        width: 100%;
        display: inline-block;
        position: relative;
        
      }
    }
  }
}
</style>