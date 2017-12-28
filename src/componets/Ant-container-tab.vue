<template>
    <div class="usermagger">
        <h2>{{meunname[$route.params.id-1]}}</h2>
        <!--<el-menu-->
                <!--default-active="2"-->
                <!--class="el-menu-vertical-demo"-->
                <!--@open="handleOpen"-->
                <!--@close="handleClose"-->
                <!--background-color="#545c64"-->
                <!--text-color="#fff"-->
                <!--active-text-color="#ffd04b">-->
            <router-link :to="'/user/'+$route.params.id+'/'+item" v-for="(item,index) in menus[$route.params.id - 1]">
                <!--<el-menu-item index="index">-->
                <div>{{item+'======='}}</div>
                <!--</el-menu-item>-->
            </router-link>
        <!--</el-menu>-->
    </div>
</template>

<script>
    export default {
        data(){
            return{
                menus:[
                    ['a','b','c'],
                    ['1','2','3'],
                    ['A','B','C']
                ],
                meunname:['用户管理','账单管理','车辆管理']
            }
        }
    }
</script>

<style>
    .usermagger{
        text-align: center;
    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .usermagger ul li{
        height: 40px;
        line-height: 40px;
        color: blue;
    }
</style>