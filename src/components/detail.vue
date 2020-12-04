<template>
<div class="detail">
  <div class="lotto-title">
    <div class="title-shenzhou"></div>
    <img src="../assets/s3.png" @click="getRule"/>
  </div>
  <div class="lotto-container">
    <div class="lotto-draw">
      <div class="prize-item">
        <img src="../assets/s5.png">
        <p>窝窝窝1000元旅行基金+神州租车1000元租车卡</p>
        <div class="cover" v-show="coverNum !== 1"></div>
      </div>
      <div class="prize-item">
        <img src="../assets/s6.png">
        <p>专享租车券包</p>
        <div class="cover" v-show="coverNum !== 6"></div>
      </div>
      <div class="prize-item btn" @click="btnClick" >
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
        <p>窝窝窝周边</p>
        <div class="cover" v-show="coverNum !== 4"></div>
      </div>
      <div class="prize-item">
        <img src="../assets/s7.png">
        <p>新人150元券</p>
        <div class="cover" v-show="coverNum !== 3"></div>
      </div>
    </div>
    <div class="point-text" v-if="active">抽奖机会已经用完啦！</div>
    <div class="lotto-share">
      <div class="share-btn"  @click="getShare" ></div>
    </div>
    <div class="share-modal" v-show="shareShow" @click="closeShare">
      <img src="../assets/s17.png" />
    </div>
    <div class="lotto-award">
      <div class="award-item">
        <div class="award-content" 
        v-for="(item,index) in awardiItems" 
        :key="index" 
        v-show="index == coverNum-1">
          <div class="award-wraper" :class="{'first-award':coverNum == 1}">
            <div class="award-list">
              <img v-bind:src = 'awardiItems[index].imgSrc'>
            </div>
            <p>{{awardiItems[index].title}}</p>
          </div>
          <div class="award-wraper" v-show="coverNum !==1">
            <div class="award-list">
              <img v-bind:src = 'awardiItems[index].imgSrc'>
            </div>
            <p>{{awardiItems[index].title}}</p>
          </div> 
        </div>
      </div>
    </div>
  </div>
  <div class="lotto-banner" @click="getDetail">
    <img src="../assets/s16.jpg" />
  </div>
  <div class="lotto-rule" v-show="ruleShow">
    <div class="rule-modal">
      <div class="header-wrapper">
          <img src="../assets/s19.png" />
      </div>
      <div class="modal-content" v-html="modalRule">
        {{modalRule}}
      </div>
    </div>
    <div class="modal-footer">
      <img src="../assets/s20.png" @click="ruleBtn"/>
    </div> 
  </div>
</div> 
</template>
<script>
import {rules} from './rule'
export default {
  name:'detail',
  data(){
    return{
      drawNum:0,
      coverNum:0,
      modalRule:rules,
      ruleShow:false,
      shareShow:false,
      active:false,
      awardiItems:[
        {title:'窝窝窝1000元旅行基金+神州租车1000元租车卡',imgSrc:require('../assets/s5.png')},
        {title:'新人150元券',imgSrc:require('../assets/s7.png')},
        {title:'新人150元券',imgSrc:require('../assets/s7.png')},
        {title:'窝窝窝周边',imgSrc:require('../assets/s8.png')},
        {title:'新人150元券',imgSrc:require('../assets/s7.png')},
        {title:'专享租车券包',imgSrc:require('../assets/s6.png')},
      ],
      buttonStatus:true,
      speed:0,
      timer:null,
      proId:null
    }
  },
  mounted(){
    let last = localStorage.getItem('key')
    if(last == null){
      localStorage.setItem('key','5')
      last = 5;
    }
    this.drawNum = Number(last) 
  },
  methods:{
    //  转盘转动的函数
    drawRotate(){
      this.buttonStatus = false
      if(this.coverNum > 6){
        this.coverNum = 1
      }
      this.timer = setTimeout(()=>{
        this.coverNum++;
        this.drawRotate()
        this.speed += 20
      },this.speed)
      this.random(1,7)
      if(this.speed >= 300 && this.coverNum == this.proId){
        this.stopDraw()
      }
    },
    // 转盘停止的函数
    stopDraw(){
      clearTimeout(this.timer)
      this.speed = 0
      this.buttonStatus = true
    },
    // 随机生成的商品id
    random(min,max){
     this.proId = Math.floor((Math.random()*(max-min))+min)
    },
    // 点击事件
    btnClick(){
      if(this.buttonStatus == false){
        return
      }
      if(this.drawNum <1 ){
        this.active = true
        return
      }else{
        this.coverNum = 0
        this.drawNum --;
        localStorage.setItem('key',this.drawNum);
        this.drawRotate()
      }
    },
    getRule(){
      this.ruleShow = true;
      document.body.style.overflow ='hidden';
    },
    ruleBtn(){
      this.ruleShow = false;
      document.body.style.overflow = 'auto';
    },
    getShare(){
      this.shareShow = true;
      document.body.style.overflow = 'hidden';
    },
    closeShare(){
      this.shareShow = false;
      document.body.style.overflow = 'auto';
    },
    getDetail(){
      this.$router.push('one')
    }
  },
}
</script>
<style scoped>
 .detail{
   width: 540px;
   position: relative;
   margin:  0 auto;
   background: url("../assets/s1.jpg") no-repeat ;
   background-size:540px;
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
   position: relative;
 }
 .lotto-draw{
   width: 400px;
   height: 394px;
   margin: 0 auto;
   padding-top: 100px;
   display:flex;
   flex-wrap: wrap;
 }
 .prize-item,.award-list{
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
   width: 386px;
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
 .point-text{
   width: 400px;
   height: 60px;
   border-radius: 15px;
   line-height: 60px;
   color: #fff;
   font-size: 28px;
   font-weight: 500;
   position:absolute;
   left: 50%;
   top: 28%;
   transform: translateX(-50%);
   z-index: 99;
   background: #f8962b;
 }
 .btn{
   background: #f9da5d;
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
 .lotto-rule{
   position: fixed;
   background: rgba(0,0,0,.7);
   left: 0px;
   top: 0px;
   z-index: 99;
   width: 100%;
   height: 100%;
 }
.rule-modal{
  width: 430px;
  height: 530px;
  margin:0  auto;
  margin-top: 60px;
  background-color: #e6e6e6;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  padding: 20px 0;
}
.modal-header{
  width: 100%;
  height:40px;
  position: relative;
  margin: 20px;
}
.header-wrapper{
  position: fixed;
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
}
.header-wrapper img{
  width:195px;
  height: 36px;
}
.modal-content{
  height: 440px;
  overflow: auto;
  text-align: left;
  margin:  0 auto;
  margin-top: 50px;
  padding: 0 24px;
}
.modal-content::-webkit-scrollbar{
  width: 3px;
  border-radius: 15px;
}
.modal-content::-webkit-scrollbar-thumb{
  background-color: #f6c944;
  border-radius: 15px;
}
.modal-content::-webkit-scrollbar-track{
 background-color: #dadada;
}
.modal-footer img{
  width: 46px;
  height: 46px;
  margin:  0 auto;
  margin-top: 30px;
}
.share-modal{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.7);
  z-index: 999;
}
.share-modal img{
  width: 319px;
  height: 216px;
  position: absolute;
  right: 20px;
}
.lotto-banner{
  margin: 0px auto;
  padding: 30px 0px;
}
.lotto-banner img{
  width: 480px;
  height: 224px;
  border-radius: 15px;
}
.lotto-award{
  width: 100%;
  position: absolute;
  bottom: 20px;
}
.award-wraper{
  display: inline-block;
  font-size:18px;
  font-weight: 600;
}
.award-content  .award-wraper:first-child{
  margin-right: 20px;
}
.award-list{
  margin-bottom: 4px;
}
.award-list img{
  width:93px ;
  height:74px ;
  margin-top: 20px;
}
.first-award .award-list{
  width: 388px;
  height: 120px;
}
.first-award img{
  width: 300px;
  height: 70px;
  margin-top: 24px;
}
</style>