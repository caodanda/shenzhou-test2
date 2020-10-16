<template>
<div class="detail">
  <div class="lotto-title">
    <div class="title-shenzhou"></div>
    <img src="../assets/s3.png" />
  </div>
  <div class="lotto-container">
    <div class="lotto-draw">
      <div class="prize-item">
        <img src="../assets/s5.png">
        <p>马蜂窝1000元旅行基金+神州租车1000元租车卡</p>
        <div class="cover" v-show="coverNum !== 1"></div>
      </div>
      <div class="prize-item">
        <img src="../assets/s6.png">
        <p>专享租车券包</p>
        <div class="cover" v-show="coverNum !== 6"></div>
      </div>
      <div class="prize-item btn" @click="btnClick">
        <img src="../assets/s9.png">
        <p>剩余 {{drawNum}} 次</p>
      </div>
      <div class="prize-item">
        <img src="../assets/s7.png">
        <p>新人150元券</p>
        <div class="cover" v-show="coverNum !== 2"></div>
      </div>
      <div class="prize-item">
        <img src="../assets/s7.png">
        <p>新人150元券</p>
        <div class="cover" v-show="coverNum !== 5"></div>
      </div>
      <div class="prize-item">
        <img src="../assets/s8.png">
        <p>马蜂窝周边</p>
        <div class="cover" v-show="coverNum !== 4"></div>
      </div>
      <div class="prize-item">
        <img src="../assets/s7.png">
        <p>新人150元券</p>
        <div class="cover" v-show="coverNum !== 3"></div>
      </div>
    </div>
    <div class="lotto-share">
      <div class="share-btn" ></div>
      <div class="share-text">首次分享额外获得一次抽奖机会</div>
    </div>
    <div class="lotto-award">
      <div class="award-item">
        <div class="award-content">
          <img src=""/>
        </div>
        <div class="award-title"></div>
      </div>
    </div>
  </div>
  <div class="lotto-banner">

  </div>
  <div class="lotto-rule">
  </div>
</div>
  
</template>
<script>
export default {
  name:'detail',
  data(){
    return{
      drawNum:99,
      coverNum:100,
    }
  },
  methods:{
    btnClick(){
      this.coverNum =1;
      var test = setInterval(
        ()=>{
          if(this.coverNum == 6){
            this.coverNum =1
          }else{
            this.coverNum++;
          }
        },100);
      setTimeout(() => {
        clearInterval(test)
      }, Math.random()*10*500);
    },
    
  },
}
</script>
<style scoped>
 .detail{
   width: 540px;
   height: 1600px;
   margin:  0 auto;
   /* 再学习css中背景的缩写形式，确认contain的意思 */
   background: url("../assets/s1.jpg") no-repeat 50%/contain;
 }
 .lotto-title{
   width: 100%;
   padding-top: 48px;
   position: relative;
 }
 .title-shenzhou{
   width: 316px;
   height: 144px;
   margin: 0 auto;
   background-image: url('../assets/s2.png');
   background-size: 316px 144px;
 }
 .lotto-title img{
   width:84px;
   height: 32px;
   position: absolute;
   right: 0px;
   top: 34px;
 }
 .lotto-container{
   width: 480px;
   height: 974px;
   margin: 0 auto;
   margin-top: 60px;
   background: url('../assets/s4.png');
   background-size: 480px 974px;
 }
 .lotto-draw{
   width: 410px;
   height: 394px;
   margin: 0 auto;
   padding-top: 100px;
 }
 .prize-item{
   display: inline-block;
   width: 122px;
   height: 122px;
   vertical-align: top;
   border-radius: 15px;
   color: #c58432;
   font-size: 18px;
   font-weight: 700;
   background: linear-gradient(180deg,#fcf1db,#f9eaaf);
   border: 1px solid #f5e3bf;
   margin-bottom: 20px; 
   position: relative; 
 }
 .prize-item:first-child{
   width: 401px;
   height: 122px;
 }
 .lotto-draw .prize-item:nth-child(3),.lotto-draw .prize-item:nth-child(6){
   margin: 0 10px;
 }
 .prize-item:first-child img{
   width: 290px;
   height: 62px;
 }
 .prize-item img{
   width: 76px;
   height: 60px;
   margin-top: 12px;
 }
 .btn{
   background: #f9da5d;
   /* 阴影需要再学习一下 */
   box-shadow: 0 8px 0 #f8962b;
 }
 .btn img{
   width: 94px;
   height: 44px;
   margin-top: 24px;
 }
 .prize-item .cover{
   position: absolute;
   top: -1px;
   left: -1px;
   width: 102%;
   height: 102%;
   background:rgba(0,0,0,.5) ;
   border-radius: 15px;
 }
 .prize-item:first-child .cover{
   width: 100.5%;
 }
 .lotto-share{
   width: 100%;
   margin-top: 60px;
   font-size: 16px;
 }
 .share-btn{
   background: url('../assets/s10.png');
   background-size: 208px 64px;
   width: 208px;
   height: 64px;
   margin: 0 auto;
   margin-bottom: 10px;
 }

</style>