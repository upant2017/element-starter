<template>
  <div id="app">
    <el-container class="all-app-main" :style="'height:'+allWidth+'px'">
      <el-header>
        <!--头部 -->
        <i class="el-icon-back"></i>Header
      </el-header>
      <el-container class="ant-left-width-back">
        <!--左侧 -->
        <el-aside :width="asideWidth+'px'">

          <!--<scrollbar :styles="scrollbar">-->
          <antscrollbar>
          <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  @open="handleOpen"
                  @close="handleClose"
                  background-color="#3c3c3c"
                  text-color="#fff"
                  active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
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
                <div>
                  <span>aaaaaaaaqqqqqqqqqqqqqqqaa</span>
                  <p>aaaaaaaaaqqqqqqqqqqqqqqqqqqqqqqqqq1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111qqqqqqqqqqqqqqqqqqqaa</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>main</p>
                  <p>main</p><p>111111111111111111111111111</p>
                </div>
              </antscrollbar>
              <!--</scrollbar>-->
          </el-main>
          <!--右下侧 -->
          <el-footer>
            Footer
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import antspan from './antResizer.vue'
  import scrollbar from './componets/vue-scrollbar.vue'
  import antscrollbar from './componets/Ant-scrollbar.vue'
  require("./css/vue2-scrollbar.css")
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
    antspan, scrollbar,antscrollbar
  },
  mounted: function () {
    this.$nextTick(function () {
        window.addEventListener('resize', this.windsize);
        this.allWidth = window.innerHeight;
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
    padding: 20px 0 0 20px;
  }
  .el-menu{
    border: 0px;
  }
  .ant-left-width-back{
    background: black;
  }
</style>
