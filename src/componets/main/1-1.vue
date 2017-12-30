<template>
    <div>
        <el-table
                v-loading="loading"
                v-if="datas"
                :data="datas.tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="date"
                    label="日期"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
        </el-table>
        <div class="el-pagination-block">
            <el-pagination @current-change="nextPage"
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import imgurl from "../../assets/logo.png";
    export default {
        data() {
            return{
                datas:0,
                imgadd:imgurl,
                loading:true
            }
        },
        methods:{
            getDatas(){
                // GET /someUrl
                this.$http.get('../../src/json/datas.html').then(response => {

                    console.log(response);
                    // get body data
                    this.datas = JSON.parse(response.bodyText);
                    this.loading = false;
                }, response => {
                    // error callback
                });
            },
            nextPage(p){
                console.log(p);
            }
        },
        mounted:function () {
            this.$nextTick(function () {
                this.getDatas();
            })
        }
    }
</script>

<style>
    .el-pagination-block{
        text-align: center;
    }
</style>