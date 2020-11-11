 <template>
  <div>
    <!-- 导航 -->
      <van-nav-bar title="详情页" left-text="返回" left-arrow @click-left="gost" fiexd>
        <template #right>
        <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    <div class="list">
        <!-- 左边 -->
      <div class="xqleft">
        <van-sidebar v-model="activeKey" >
            <van-sidebar-item  
            v-for="item in lisx" :key="item._id" class="listt" v-text="item.cate_zh">
            </van-sidebar-item>
        </van-sidebar>
      </div>
      <!-- 右边 -->
      <div class="xqright">
            <van-grid :border="false" :column-num="3">
              <van-grid-item v-for="ite in lisk" :key="ite._id">
                 <van-image :src="ite.img" />
                 <van-grid-item v-text="ite.desc" />
              </van-grid-item>
            </van-grid>
      </div>
    </div>
      <Tabbar></Tabbar>
  </div>
</template>

<script>
import {Tabbar} from '../components/comp/index.js'
import {
        NavBar,
        icon,
        Sidebar, 
        SidebarItem,
        Grid,
        GridItem,
        image
      } from 'vant'
import { mapMutations ,mapState} from 'vuex';
export default {
   components: {
      Tabbar,
      [NavBar.name]:NavBar,
      [icon.name]:icon,
      [Sidebar.name]:Sidebar,
      [SidebarItem.name]:SidebarItem,
      [Grid.name]:Grid,
      [GridItem.name]:GridItem,
      [image.name]:image
  },
  data:function(){
    return {
      activeKey: 0,
      lisx:[],
      lisk:[],
       cateArr: [],
    };
  },
  watch:{
activeKey: function(){
this.getint(this.lisx[this.activeKey].cate)
}
  },
  computed:{
    ...mapState('cate',['cateobj'])
  },
  mounted(){
    this.get()
  },
  methods:{
    ...mapMutations('cate',["goCateobj"]),
   async get(){
    this.lisx=await this.$axios.goDetail({})
    this.getint(this.lisx[0].cate)
    },
    getint(cate){
      if(this.cateobj[this.activeKey]){
        this.lisk=this.cateobj[this.activeKey]
      }
      else{
        this.$axios.goGoodcode({cate}).then(res=>{
        this.lisk=res,
         this.goCateobj({idx: this.activeKey, arr: res})
      })
      }
    },
    gost(){
      this.$router.push("/home")
    }
    
  },
  
}
</script>

<style>
.list{
  width: 10rem;
  height: 15.306667rem;
}
.xqleft{
  width: 2.293334rem;
  height: 15.306667rem;
  overflow: auto;float: left;
}
.listt{
  width: 2.266667rem;
  height: 1.226667rem;
}
.xqright{
  width: 7.706667rem;
  height:15.306667rem ;float: left;
  overflow: auto;
  font-size: 0.186667rem;
}
</style>