export default{
    namespaced:true,
    state:{
        cateobj:{},
    },
    mutations:{
        goCateobj(state,payload){
         state.cateobj[payload.idx]=payload.arr
        }
    },
    actions:{},
}