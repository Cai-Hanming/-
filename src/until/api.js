import axios from './fentch'
//注册
export function goZhuce(data){
    return axios({
        url:'/jd/regist',
        method:'POST',
        data
    })
}
//登录
export function goDenglu(data){
    return axios({
        url:'/jd/login',
        method:'POST',
        data
    })
}
//首页
export function shopList(params){
    return axios({
        url:'/jd/getHotGoodList',
        method:'GET',
        params,
    })
}
//商品详情
export function goDetail(params){
    return axios({
        url:'/jd/getAllCates',
        method:'GET',
        params,
    })
}
//商品详情图片
export function goGoodcode(params){
    return axios({
        url:'/jd/getCateGoodList',
        method:'GET',
        params,
    })
}
//货物首页商品的详情数据
export function goidxGood(params){
    return axios({
        url:'/jd/getGoodDetail',
        method:'GET',
        params,
    })
}
//添加商品到购物车
export function addGoods(data){
    return axios({
        url:'/jd/addToCart',
        method:'POST',
        data,
    })
}
//获取购物车列表
export function addGoodslist(params){
    return axios({
        url:'/jd/getCartList',
        method:'GET',
        params,
    })
}
//购物车中商品的计算
export function comGoodslist(data){
    return axios({
        url:'/jd/updateCartNum',
        method:'POST',
        data,
    })
}
//删除商品
export function delGoodslist(params){
    return axios({
        url:'/jd/deleteToCart',
        method:'GET',
        params,
    })
}
export default{
    goZhuce,
    goDenglu,
    shopList,
    goDetail,
    goGoodcode,
    goidxGood,
    addGoods,
    addGoodslist,
    comGoodslist,
    delGoodslist
}