<template>
    <span class="ant-darg-width" @mousedown="darg($event)"></span>
</template>

<script>
export default {
    data:function () {
        return{
            asideWidth:100
        }
    },
    methods: {
        /**
         * 拖拽
         * @param e
         */
        darg: function (e) {
            let _this = this;
            //鼠标按下，计算当前元素距离可视区的距离
            document.onmousemove = function (e) {
                /**
                 * 如果有 getSelection 方法表明 非IE浏览器
                 * 功能:清楚选中内容
                 */
                if ("getSelection" in window){
                    window.getSelection().removeAllRanges();
                }else {
                    document.selection.empty();
                };
                //鼠标位置
                let l = e.clientX;
                /**
                 * 将此时的位置传出去
                 * 最低100 最高 500 pk
                 */
                if (500 > l && l > 100)
                    _this.$emit('dargx',l);
                else{
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            };
            document.onmouseup = function (e) {
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    }
}
</script>

<style>
.ant-darg-width{
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
    z-index: 300;
    transition: all .5s;
}
.ant-darg-width:hover {
    border-left: 5px solid rgba(0,0,0,.5);
    border-right: 5px solid rgba(0,0,0,.5);
}
</style>