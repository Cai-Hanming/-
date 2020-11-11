<template>
 <div>
     <van-nav-bar title="地址" left-text="返回" left-arrow @click-left="goidg">
      <template #right>
      <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
  <van-address-list
  v-model="chosenAddressId"
  :list="list"
  disabled-text="以下地址超出配送范围"
  default-tag-text="默认"
  @add="onAdd"
  @edit="onEdit"
/>
 </div>
</template>

<script>
import { Toast,AddressList,NavBar,
        icon, } from 'vant';

export default {
  data() {
    return {
      chosenAddressId: '1',
      list:[],
      lis:'',
    };
  },
  //{id},{name},{address},{ tel},{}
  mounted(){
  // this.lis=JSON.parse(localStorage.getItem('content'))
  // let obj={}
  // obj.id=this.lis.areaCode
  // obj.name=this.lis.name
  // obj.tel=this.lis.tel
  // obj.address=this.lis.city+this.lis.addressDetail
  // obj.isDefault=this.lis.isDefault
  // this.list.push(obj)
  this.list =JSON.parse(localStorage.getItem('dress')) 
  },
  methods: {
    onAdd() {
      //Toast('新增地址');
      this.$router.push("/dress")
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
    goidg(){
       this.$router.push("/User") 
  }},
  components:{
    [AddressList.name]:AddressList,
    [NavBar.name]:NavBar,
    [icon.name]:icon,
    

}
};
</script>

<style>

</style>