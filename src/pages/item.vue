<template>
  <div>
    <van-nav-bar :title="info.name" left-text="返回" left-arrow @click-left="shouye">
    <template #right>
    </template>
    </van-nav-bar>
    <!-- 商品详情信息 -->
     <div>
    <img :src="info.img" alt="">
    <div>
      <span>￥</span>
      <span v-text='info.price'></span>
      <span>元</span>
    </div>
  </div>
  <!-- 添加购物车 -->
  <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服"  />
  <van-goods-action-icon icon="cart-o" text="购物车" />
  <van-goods-action-icon icon="shop-o" text="店铺"  />
  <van-goods-action-button
    type="danger"
    text="添加购物车"
    @click="onClickButton"
  />
</van-goods-action>
  </div>
</template>

<script>
import{NavBar,
       GoodsAction, 
       GoodsActionIcon, 
       GoodsActionButton
       }from 'vant'
export default {
  data:function(){
      return{
        info:{}
      }
  },
  components:{
      [NavBar.name]:NavBar,
      [GoodsAction.name]:GoodsAction,
      [GoodsActionIcon.name]:GoodsActionIcon,
      [GoodsActionButton.name]: GoodsActionButton
  },
   mounted(){
     this.$axios.goidxGood({good_id:this.$route.params.id}).then(res=>{
        this.info=res
     })
  },
  methods:{
      shouye(){
          this.$router.push("/home");
      }, 
      onClickButton(){
          const data={
          num:1,
          good_id:this.info._id
          
          }
          this.$axios.addGoods(data).then((res)=>{
              if(res){
                  this.$router.push('/cart')
              }
          })
      }    
  }
  
}
</script>

<style>

</style>