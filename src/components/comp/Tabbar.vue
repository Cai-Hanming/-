<template>
 <div router>
    <van-tabbar  active-color="#07c160" inactive-color="#000">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/cate">详情页</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/cart" :badge="list">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/User">我的</van-tabbar-item>
  </van-tabbar>
 </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant';

export default {
    components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data:function(){
    return {
      list:'',
    }
  },
  mounted(){
    this.$axios.addGoodslist().then(res=>{
      this.list=res.length
    })
  }
}
</script>

<style>

</style>