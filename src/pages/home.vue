<template>
<div>
 <!-- 广告排 -->
 <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
<van-notice-bar
  left-icon="volume-o"
  scrollable
  mode='closeable'
  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
/> 
<!-- 搜索框 -->
<div class="serch">
  <van-search
  shape="round"
  background=" red"
  show-action
  show-left
  :placeholder="serArr"
  class="serchz"
>
 <template #left>
         <img src="../assets/san.png" class="imgss" />
  </template>
  <template #action>
        <div class="anniu" @click="dl">登录</div>
  </template>
</van-search>
</div>
<!-- 轮播图 -->
<div class="kk">
<van-swipe :autoplay="5000" >
  <van-swipe-item v-for="(image, index) in images" :key="index" >
    <img v-lazy="image" class="imgs" />
  </van-swipe-item>
</van-swipe>
</div>
<h1 v-text="msg"></h1>
<!-- 商品页 -->


<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
  :immediate-check='false'
>
    <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" 
    class="oneimg"
    >
  <div class="goods" v-for="item in row" :key="item._id" >
    <shopps :good='lis[item*2-2]'></shopps>
    <shopps :good='lis[item*2-1]'></shopps>
  </div>


</van-list>
<!-- 菜单 -->

</van-pull-refresh>
<Tabbar></Tabbar>
</div>

</template>
<script >
import Vue from 'vue';
import {Tabbar} from '../components/comp/index.js'
 import shopps from'../components/comp/shopps'
import{mapState} from 'vuex'
import { 
    NoticeBar,
    Search,
     Lazyload,
     Swipe, 
     SwipeItem,
     PullRefresh,
    List  
} from 'vant';
Vue.use(Lazyload);
export default {
   components: {
   Tabbar,
    shopps,
  [ NoticeBar.name]:NoticeBar,
  [Search.name]: Search,
  [Swipe.name]:Swipe,
  [ SwipeItem.name]:SwipeItem,
  [PullRefresh.name]:PullRefresh,
  [List.name]:List 

  },
  data:function(){
    return {
      images: [
       '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/142547/35/7849/179012/5f5748e9E677be362/86b80918a8d2b0d8.jpg!q70.jpg.dpg',
       '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/141612/2/870/63577/5ee9b877E0b380113/a507260fe1ba69b2.jpg!cr_1125x445_0_171!q70.jpg.dpg',
       '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/116038/2/7519/92906/5ec3a1c4E45df8837/5517920d04004f6c.jpg!q70.jpg.dpg',
       '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/149330/5/7717/135574/5f51d7ccE5a081548/024622c15b5bcd4d.jpg!q70.jpg.dpg',
       '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/147670/15/7927/77426/5f5adfc3E567fefd0/112f07ecf41aabfa.jpg!q70.jpg.dpg'
      ],
      list: [],
      gjs:[
        {id:1,serch:'电脑'},
        {id:2,serch:'手机'},
        {id:3,serch:'电视'},
        {id:4,serch:'洗衣机'}
      ],
      lis:[],
      loading: false,
      finished: false,
      refreshing:false,
      page:1
    };
  },computed:{
    ...mapState('cate',['msg']),
    row:function(){
      return this.lis.length/2
    },
    serArr:function(){
      let idx=Math.floor(Math.random()*this.gjs.length)
      return this.gjs[idx].serch
    }
  },
  mounted(){
    this.getli()
  },
  methods: {
    getli(){
      let params={
      hot:false,
      page:this.page,
      size:6,
    }
    this.$axios.shopList(params).then(res=>{
          if(this.refreshing){
            this.lis = res.list
            this.refreshing =false
            this.finished = false
            // console.log(3)
        }else{
           this.lis = [...this.lis ,...res.list]
          //  console.log(333)
           this.loading = false
        }
         if(this.lis.length>=res.total){
          // console.log(3334)
          this.finished = true
        }
           //console.log(res)
        })},
    onRefresh() {
       this.page=1,
       this.getli()
    },
    onLoad() {
     // 异步更新数据
      //setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // console.log(33)
      this.page++
      this.getli()
      
    },
    dl(){
      this.$router.push('/Login')
    }
  },
}

</script>
<style  scoped>
.serch{
    width: 10rem;
    height: 1.173333rem;
}
.serchz .van-search .van-search--show-action{
    width: 10rem;
    height: 1.173333rem;
}
.imgss{
   width: 0.533333rem;
    height: 0.48rem;
    margin-right: 0.186667rem;
}
.anniu{
    color: white;
}
.anniul{
    font-size: 0.4375rem;
    color: white;
    padding-left:-0.125rem;
    
}
.van-swipe {
    width: 9.333333rem;
    height: 3.733333rem;
    margin: 0 auto;
    }
 .imgs{
    width: 100%;
    height: 100%;
    display: inline-block;
    padding-top:0.133333rem;
    border-radius: .35rem;
    margin-top:0.026667rem;
} 
.kk{
  width: 10rem;
  height:  3.733333rem;
  background: red;
  border:1px solid red;
  border-bottom-left-radius: 8rem 3rem ;
  border-bottom-right-radius: 8rem 3rem;
}
.van-list{
  padding-bottom:1.066667rem;
}
.oneimg{
     width: 9.466667rem;
    height: 0.933333rem;
    display: block;
    margin: 0 auto;
}
</style>