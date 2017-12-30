<template>
  <div id="app">
    <el-container class="all-app-main" :style="'height:'+allWidth+'px'">
      <el-header>
        <!--头部 -->
        <i class="el-icon-back"></i>顶部
      </el-header>
      <el-container class="ant-left-width-back">
        <!--左侧 -->
          <el-aside :width="asideWidth+'px'" >

            <!--<scrollbar :styles="scrollbar">-->
            <antscrollbar>
              <anttabmenu></anttabmenu>
            </antscrollbar>
            <!--</scrollbar>-->
          </el-aside>

        <antspan @dargx="fdargx"></antspan>
        <!--右侧 -->
        <el-container>
          <!--右上侧 -->
          <el-main>
              <!--<scrollbar :styles="scrollbar">-->
            <antscrollbar>
              <router-view class="view two" name="a"></router-view>
            </antscrollbar>
              <!--</scrollbar>-->
          </el-main>
          <!--右下侧 -->
          <el-footer>
            底部
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import antspan from './componets/Ant-Resizer.vue'
  import scrollbar from './componets/vue-scrollbar.vue'
  import antscrollbar from './componets/Ant-scrollbar.vue'
  import anttabmenu from './componets/Ant-tab-menu.vue'

  require("./css/vue2-scrollbar.css");

export default {
  methods: {
    startHacking () {
      this.$notify({
        title: 'It works!',
        type: 'success',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
    fdargx:function(x){
      this.asideWidth = x;
    },
    windsize:function () {
      this.allWidth = window.innerHeight;
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
    }
  },
  data:function () {
    return{
        asideWidth:200,
        allWidth:0,
        scrollbar: {
            width: '100%',
            height: '100%'
        },
    }
  },
  components:{
    antspan, scrollbar,antscrollbar,anttabmenu
  },
  computed:{

  },
  mounted: function () {
    this.$nextTick(function () {
        window.addEventListener('resize', this.windsize);
        this.windsize();
    })
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
  .el-header, .el-footer {
    background-color: #3c3f41;
    color: #bbbbbb;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #3c3c3c;
  }
  .el-main{
    background: #2b2b2b;
    color: #bbbbba;
    padding: 0;
  }
  .el-menu{
    border: 0px;
  }
  .ant-left-width-back{
    background: black;
  }
</style>
