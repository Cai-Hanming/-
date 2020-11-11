import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const home=()=>import('../src/pages/home.vue')
const User=()=>import('../src/pages/User.vue')
const cate=()=>import('../src/pages/cate.vue')
const cart=()=>import('../src/pages/cart.vue')
const register=()=>import('../src/pages/register.vue')
const Login=()=>import('../src/pages/Login.vue')
const item=()=>import('../src/pages/item.vue')
const dress=()=>import('../src/pages/dress.vue')
const mydress=()=>import("../src/pages/mydress.vue")
const router= new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/User',component:User},
        {path:'/cate',component:cate},
        {path:'/cart',component:cart},
        {path:'/register',component:register},
        {path:'/Login',component:Login},
        {path:'/item/:id',component:item},
        {path:'/dress',component:dress},
        {path:'/mydress',component:mydress},
        {path:'/*',redirect:'/home'}
    ]
})

//全局守卫
//判断注册登录状态
router.beforeEach((to,from,next)=>{
    if(to.path==='/cart'){
        let token=localStorage.getItem('token')
        if(token){
            next()
        }else{
            next('/Login')
        }
    }else{
        next()
    }
})
export default router