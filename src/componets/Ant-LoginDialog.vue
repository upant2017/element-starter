<template>
    <el-dialog title="用户登录" :visible.sync="showdialog" :width="fwidth" center>
        <el-form :model="form">
            <el-form-item label="用户名:" :label-width="formLabelWidth">
                <el-input v-model="form.name" placeholder="请输用户名" clearable></el-input>
            </el-form-item>
            <el-form-item label="密 码:" :label-width="formLabelWidth">
                <el-input type="password" v-model="form.pass" auto-complete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer">
            <el-button type="primary" @click="onclick">登 录</el-button>
            <el-button @click="onclick">取 消</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        props:['show'],
        data() {
            return {
                form: {
                    name: '',
                    pass: ''
                },
                formLabelWidth: '60px',
                fwidth:'400px'
            }
        },
        computed:{
            showdialog:{
                get(){
                    return this.show;
                },
                set(val){
                    this.$emit('showoff', val);
                }
            }
        },
        methods:{
            onclick(){
                this.$emit('showoff',false);
            }
        }
    }
</script>

<style>
</style>