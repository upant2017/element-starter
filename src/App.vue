<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
          <div class="header">
            <i class="el-icon-upload"></i>
            <img src="./assets/logo.png">
          </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <el-button @click="startHacking">Start</el-button>
      </el-col>
      <el-col :span="20">
        <el-button type="primary" plain>主要按钮</el-button>
      </el-col>
    </el-row>

    <el-container>
      <el-header><i class="el-icon-back"></i>Header</el-header>
      <el-container class="ant-left-width-back">
        <el-aside :width="asideWidth+'px'">Aside</el-aside>
        <antspan @dargx="fdargx"></antspan>
        <el-container>
          <el-main>
            <div>
              <p>main</p><p>main</p>
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import antspan from './antResizer.vue'
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
        console.log(x);
        this.asideWidth = x;
    }
  },
  data:function () {
    return{
        asideWidth:100
    }
  },
  components:{
    antspan
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
#app {

}
  .header{
    height: 40px;
    overflow: hidden;
    background: red;
  }
  .el-header, .el-footer {
    background-color: #3c3f41;
    color: #bbbbbb;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #3c3c3c;
    color: #bbbbbb;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #2b2b2b;
    color: #bbbbbb;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .ant-left-width-back{
    background: black;
  }
  .ant-left-width{
    width: 11px;
    margin: 0 -5px;
    background: #000;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    cursor: col-resize;
    visibility: visible;
    background-clip: padding-box;
    box-sizing: border-box;
    opacity: .4;
    z-index: 30;
  }
  .ant-left-width:hover {
    border-left: 5px solid rgba(0,0,0,.5);
    border-right: 5px solid rgba(0,0,0,.5);
  }
</style>
