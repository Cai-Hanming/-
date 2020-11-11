<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="goidx" fixed>
      <template #right>
      <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

   <!-- 商品详情页 -->
  <div v-for="item in lisr" :key="item._id">
    <van-swipe-cell>
      <van-row type="flex" justify="center" align='center'>
         <!-- 复选框 -->
        <van-col span="4" class="fxk" >
          <van-checkbox v-model="item.checked"></van-checkbox>
        </van-col>
        <!-- 商品列 -->
        <van-col span="20">
            <van-card
              :num="item.num"
              :price="item.good.price"
              :desc="item.good.desc"
              :title="item.good.name"
              :thumb="item.good.img"
              >
              <template #footer>
                <van-button size="mini" class="jian"
                 @click="jiagoods(item,'sub')">-</van-button>
                <van-button 
                size="mini" 
                class="jia"
                @click="jiagoods(item)"
                >+</van-button>
              </template>
            </van-card>
        </van-col>
    </van-row>
        <template #right>
        <van-button square text="删除" type="danger" class="delete-button" @click="del(item)" />
        </template>
     </van-swipe-cell>
  </div>

    <!-- 提交订单 -->
    <van-submit-bar :price="total" button-text="提交订单">
      <van-checkbox v-model="full">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
//import {Tabbar} from '../components/comp/index.js'
import {
    NavBar,
    icon,
    Col,
    Row,
    SubmitBar,
    Checkbox,
    Card,
    Button,
    CheckboxGroup,
    SwipeCell,
    Toast,
    Dialog
    } from 'vant'
export default {
   components: {
   //Tabbar,
   [NavBar.name]:NavBar,
   [icon.name]:icon,
   [Col.name]:Col,
   [Row.name]:Row,
   [SubmitBar.name]: SubmitBar,
   [Checkbox.name]:Checkbox,
   [Card.name]:Card,
   [Button.name]:Button,
   [Checkbox.name]:Checkbox,
   [CheckboxGroup.name]: CheckboxGroup,
   [ SwipeCell.name]: SwipeCell,
   [Toast.name]:Toast
  },
  data:function(){
    return{
      checked: true,
      lisr:[],
      //full:false,
    }
  },
  mounted(){
    this.$axios.addGoodslist().then(res=>{
      this.lisr=res
    })
  },
  computed:{
     full: {
      get() {
        let arr = this.lisr.filter(ele=>ele.checked)
        return arr.length === this.lisr.length
      },
      set(v) {
        //console.log('v', v)
        this.lisr.map((ele,idx,arr)=>{
          arr[idx].checked = v
        })
      }
      },
      total(){
        let t=0;
        this.lisr.map(ele=>{
        if(ele.checked) {
          t += ele.num*ele.good.price*100
        }
      })
      return t
      }
  },
  methods:{
    // init(){
    //    this.$axios.delGoodslist({}).then(arr=>{
    //     console.log('商品列表', arr)
    //     this.lisr = arr
    //   })
    // },
    goidx(){
      this.$router.back()//返回上一页
    },
      //num: Number     新的数量
      //id: String      购物车id
      jiagoods(item,flag){
        let data={
          num:flag?item.num-1:item.num+1,
          id:item._id
        }
        if(data.num<=0){
          Toast.success('商品数量不少于一个哦');
          data.num=1
        }
      this.$axios.comGoodslist(data).then(()=>{
       this.lisr.map((ele,idx,arr)=>{
       if(ele._id === item._id) {
            arr[idx].num = data.num
          }
       })
      })
  
    },
    del(item){
     Dialog.confirm({
        title: '警告',
        message: '你确定要删除当前商品吗？',
      })
      .then(() => {
       this.$axios.delGoodslist({id:item._id}).then(()=>{
         this.lisr = this.lisr.filter(ele=>ele._id!==item._id)
       })
      })
    },
  },
  
  
}
</script>

<style>
.delete-button {
    height: 100%;
  }
.van-row {
  border-bottom:1px solid #eee;
}
.van-card{
    background-color: #ffffff;
}
.jia{
  width:0.666667rem;
  height:0.666667rem;
 
}
.jian{
  width:0.666667rem;
  height:0.666667rem; 
}
</style>