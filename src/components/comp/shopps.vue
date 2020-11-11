<template>
    <div class="shoppsa" @click="shapp">
            <div class="zhua"> 
                <img class="xian" :src="good.img">

                <div class="gi-desc" v-text="good.desc">

                </div>

                <div class="gi-bot">
                    <span class="s1">￥</span>
                    <span class="s2" v-text="good.price"></span>
                    <span class="s3">看相似</span>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    props:{
        good:{
            type:Object,
            required:true
        },
        
    },
    methods:{
            shapp(){
              this.$router.push("/item/"+this.good._id)
            }
        }
}
</script>

<style>

.shoppsa{
    width: 4.9rem;
    height: 100%;
      display: inline-block;
}

.zhua{
     width: 4.693333rem;
     height: 7.12rem;
     display: inline-block;
     margin-left:0.266667rem;
     margin-bottom: 0.133333rem;
     background-color: #ffffff;
}

.xian{
     display: inline-block;
    width: 4.693333rem;
    height: 4.693333rem;
}
.gi-desc {
    margin: .2rem 0;
    font-size: .35rem;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    line-height: .53rem;
    
  }
 .gi-bot {
    height: .8rem;
    line-height: .8rem;
    overflow: hidden;}
   .s1 {
      float: left;
      color: red;
      font-size: .29rem;
    }
    .s2{
      float: left;
      color: red;
      font-size: .4rem;
    }
   .s3 {
      float: right;
      font-size: .29rem;
      height: .4rem;
      line-height: .4rem;
      border: 1px solid #ccc;
      padding: 0 .07rem;
      margin-top: .2rem;
  }
</style>