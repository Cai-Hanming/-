<template>
 <div>
   <van-nav-bar title="注册" left-text="返回" left-arrow @click-left="goidxv">
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
  <van-field
    v-model="password2"
    type="password"
    name="password2"
    label="确认密码"
    placeholder="密码"
    :rules="[{ required: true, message: '请填写密码' }]"
  />
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      注册
    </van-button>
     <router-link to="/Login" class="login">已有账号，立即登录</router-link>
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
      password2:'',
    }
},
methods:{
    onSubmit(data){
        this.$axios.goZhuce(data).then(()=>{
            this.$router.replace('/Login')
        })
    },
    goidxv(){
      this.$router.back()
    }
}
}
</script>

<style>
.login{
    width: 2.666667rem;
    height: 0.666667rem;
    font-size: 0.266667rem;
    margin: 0 3rem;
    color: black;
}
</style>