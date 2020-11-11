<template>
<div>
   <van-nav-bar title="登录" left-text="返回" left-arrow @click-left="goidx">
      <template #right>
      <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>

    <van-form @submit="onSubmit">
  <van-field
    v-model="username"
    name="username"
    label="用户名"
    placeholder="用户名"
    :rules="[{ required: true, message: '请填写用户名' }]"
  />
  <van-field
    v-model="password"
    type="password"
    name="password"
    label="密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      登录
    </van-button>
     <router-link to="/register" class="denglu">没有账号，立即注册</router-link>
  </div>
</van-form>
</div>
</template>

<script>
import{
Form,
Field,
Button,
NavBar,icon
}from 'vant';
export default {
components:{
    [Form.name]:Form,
    [Field.name]:Field,
    [Button.name]:Button,
    [NavBar.name]:NavBar,
    [icon.name]:icon
},
data:function(){
    return {
      username: '',
      password: '',
    }
},
methods:{
    onSubmit(data){
      console.log(data)
        this.$axios.goDenglu(data).then(res=>{
            //console.log(res)
        localStorage.setItem('token', res.token)
        this.$router.replace("/home"),
        localStorage.setItem('usename',this.username)
        })
    },
    goidx(){
      this.$router.back()
    }
}
}
</script>

<style>
.denglu{
    width: 2.666667rem;
    height: 0.666667rem;
    font-size: 0.266667rem;
    margin: 0 3rem;
    color: black;
}
</style>