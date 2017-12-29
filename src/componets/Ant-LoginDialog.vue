<template>
    <el-dialog title="收货地址" :visible.sync="showdialog">
        <el-form :model="form">
            <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="onclick">取 消</el-button>
            <el-button type="primary" @click="onclick">确 定</el-button>
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
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
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