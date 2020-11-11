import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import cate from './modules/cate'
export default new Vuex.Store({
    state:{
        address:[]
    },
    mutations:{
        adddizhi(state,payload){
            state.address.push(payload)
           }
    },
    actions:{},
    getters:{
     
    },
    modules:{
       cate,
    }
})