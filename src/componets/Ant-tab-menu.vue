<template>

        <div class="ant-tab">
            <div class="ant-tab-left-top">
                <ul>
                   <li v-for="item in menus" :key="item.key" ><!--@click="onclick($event,item.key)"-->
                        <router-link :to="'/user/'+item.key">
                            <i :class="item.name + (item.activate ? ' activate' : '')"></i>
                        </router-link>
                    </li>
                </ul>
            </div>


            <div class="ant-tab-right">
                <router-view></router-view>
            </div>
            <div class="ant-tab-left-bottom" @click="messageBox">
                <a href="#"><i class="el-icon-setting"></i></a>
            </div>
            <ant-login-dialog :show="login" @showoff="showclose"></ant-login-dialog>
        </div>

</template>

<script>
    import AntLoginDialog from './Ant-LoginDialog.vue'
    export default {
        props:['height'],
        data() {
            return {
                menus:[
                        {name:'el-icon-edit-outline',key : 1,activate : true},
                        {name:'el-icon-message',key : 2,activate : false},
                        {name:'el-icon-edit', key : 3,activate : false}
                ],
                login:false
            }
        },
        methods:{
            /**
             * 自己实现激活 可以用 router 自带类查看激活状态 可省略此方法
             * @param e
             * @param n
             */
            onclick(e,n){
                for (let i of this.menus){
                    if (n === i.key){
                        i.activate = true;
                    }else{
                        i.activate = false;
                    }
                }
            },
            messageBox(){
                this.login = true;
            },
            showclose(val){
                this.login = val;
            }
        },
        computed:{

        },
        components:{
            AntLoginDialog,
        }

    };
</script>

<style>

    .ant-tab a{
        text-decoration:none;
        color: #adadad;
    }
    .ant-tab a:hover{
        color: red;
    }
    .ant-tab{
        width: 100%;
        height: 100%;
        background: #3c3c3c;
        display: grid;
        grid-template-columns: 50px auto;
        grid-template-rows: auto 50px;
    }

    .ant-tab .ant-tab-right{
        grid-row: 1/3;
        grid-column: 2/3;
        background: #2b2b2b;
    }
    /*.ant-tab .ant-tab-left-top .activate{*/
        /*color: #fff;*/
    /*}*/
    /*router 自带类 这方法更简单*/
    .ant-tab .ant-tab-left-top .router-link-active{
        color: #fff;
    }
    .ant-tab .ant-tab-left-top ul{
        list-style:none;
        margin: 0;
        padding: 0;
    }
    .ant-tab .ant-tab-left-top li,.ant-tab .ant-tab-left-bottom{
        width:50px;
        height:50px;
        margin-top: 10px;
        text-align: center;
        font-size: 26px;
        line-height: 50px;
        text-decoration:none;
    }
    .ant-tab .ant-tab-left-bottom {
        margin-top: 0;
    }
</style>