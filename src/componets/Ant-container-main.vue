
<script>
    import con1 from './main/1.vue'
    import con2 from './main/2.vue'
    import con3 from './main/3.vue'
    import cona from './main/a.vue'
    import conb from './main/b.vue'
    import conc from './main/c.vue'
    import conA from './main/A.vue'
    import conB from './main/B.vue'
    import conC from './main/C.vue'
    export default {
        data(){
            return{
                states:'1'
            }
        },
        components:{
            con1,con2,con3,cona,conb,conc,conA,conB,conC
        },
        render: function (createElement) {
            if (this.$route.params.con)
                this.states = this.$route.params.con;
            console.log(this.$route.params.con);
            return createElement(
                'con' + this.states,   // tag name 标签名称
            )
        },
        methods:{

        },
    }
</script>

<style>

</style>