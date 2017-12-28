
<script>
    import con1 from './main/1-1.vue'
    import con2 from './main/1-2.vue'
    import con3 from './main/1-3.vue'
    import cona from './main/2-1.vue'
    import conb from './main/2-2.vue'
    import conc from './main/2-3.vue'
    import conA from './main/3-1.vue'
    import conB from './main/3-2.vue'
    import conC from './main/3-3.vue'
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