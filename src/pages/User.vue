<template>
  <div>
      <van-nav-bar title="个人中心" left-text='' left-arrow 
           @click-left="goback"
           >
        <template #right>
        <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>

      <van-row class="uset">
      <van-col span="8">
        <img class="tir" src="../assets/daz.jpg" alt="" >
      </van-col>
      <van-col span="16" v-text="list" class="use"
      ></van-col>
      </van-row>

      <van-cell title="我的地址" is-link class="lisone" @click="goDress"/>
      <van-cell title="我的订单" is-link class="lisone"/>
      <van-cell title="联系客服" is-link
      class="lisone" />
       <van-cell title="我的足迹" is-link
      class="lisone" />

      <van-grid :column-num="3" class="xii">
      <van-grid-item icon="phone" text="意见反馈" />
      <van-grid-item icon="enlarge" text="客户端" />
      <van-grid-item icon="friends" text="退出登录" @click="dellogin"/>
      </van-grid>
     <Tabbar></Tabbar>
  </div>
</template>

<script>
  

import {Tabbar,} from '../components/comp/index.js'
import{ NavBar,
        icon,
        Col, 
        Row,
        Cell,
        CellGroup,
        Grid, 
        GridItem,
        Dialog }from'vant'
export default {
 data: function() {
    return {
      list:''
    }
  },
   components: {
   Tabbar,
   [NavBar.name]:NavBar,
   [icon.name]:icon,
   [Col.name]:Col,
   [Row.name]:Row,
   [Cell.name]:Cell,
   [CellGroup.name]:CellGroup,
   [Grid.name]:Grid,
   [GridItem.name]:GridItem
  },
  mounted(){
     this.list= localStorage.getItem('usename')
   },
  methods:{
      goback(){
      this.$router.back()
      },
      dellogin(){
     if(!this.list){
        Dialog.alert({
        title: '提示',
        message: '您还没有登录，请登录',
        }).then(() => {
        // on close
        });
        }else{
        Dialog.confirm({
        title: '',
        message: '你确定要退出登录吗',
        })
        .then(() => {
        localStorage.removeItem('usename') 
        localStorage.removeItem('token')
        location.reload()
        })
        .catch(() => {

        }); 
        }
      },
      goDress(){
        this.$router.push("/mydress")
      }
},
}
</script>

<style>
.uset{
  width: 10rem;
  height: 3rem;
  padding: 0;
  background: url(../assets/beij.jpg)no-repeat;
  background-size: 100%;
}
.van-grid-item__content::after{
  border: 0;
}
.tir{
  width:2rem;
  height: 2rem;
  border-radius: 50%;
  margin:0.5rem 0.4rem;
}
.use{
  font-size: 0.64rem;
  text-align: center;
  line-height: 3rem;
  font-family: "kaiti";
  
}
.lisone{
  margin-top:0.4rem;
  border-bottom: 1px solid rgb(249,249,180);
}
.xii{
  padding-bottom: 0.666667rem;
}
</style>

