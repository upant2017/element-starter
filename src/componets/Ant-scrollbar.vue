<template>
    <div class="ant-scrollbar-main" @wheel = "onWheel">
        <div class="ant-scrollbar-main-move"
             ref="scrollArea"
             :style="{
               marginTop:top*-1+'px',
               marginLeft:left*-1+'px'
             }">

            <slot></slot>
        </div>

        <div class="ant-scrollbar-height" v-if="scrheight<100" @click="onJump($event,1)"
             ref="scrollHeight">
            <div @mousedown="darg($event,1)" @touchstart="darg($event,1)"
                 :style="{
                          height: scrheight+'%',
                          top: scrtop + '%'
                 }">

            </div>
        </div>
        <div class="ant-scrollbar-width" v-if="scrwidth<100" @click="onJump($event,2)"
             ref="scrollWidth">
            <div @mousedown="darg($event,2)" @touchstart="darg($event,2)"
                :style="{
                         width: scrwidth+'%',
                         left: scrleft + '%'
                 }">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data:function () {
            return{
                top:0,
                left:0,
                scrheight:0,
                scrtop:0,
                scrwidth:0,
                scrleft:0,
                /**
                 * 点击事件开始位置
                 */
                start : 0,
                startX : 0,
                startY : 0,
                starttop:0,
                startleft:0,
                //滚动速度
                speed: 53
            }
        },
        methods:{
            init(){
                let rs = this.getSize();
                this.scrheight = rs.offHeight / rs.scrHeight * 100;
                this.scrwidth = rs.offWidth / rs.scrWidth * 100;
                this.updatas();
            },
            updatas(){
                let rs = this.getSize();
                if(rs.scrHeight > rs.offHeight){
                    this.scrtop = this.top / rs.scrHeight * 100;
                }else this.top = 0;
                if (rs.scrWidth > rs.offWidth) {
                    this.scrleft = this.left / rs.scrWidth * 100;
                }else this.scrleft = 0;
            },
            getSize(){
                let scrollWrapper = this.$el;
                let scrollArea = this.$refs.scrollArea;
                let retSize = {
                    scrHeight : scrollArea.scrollHeight,
                    scrWidth : scrollArea.scrollWidth,
                    offHeight : scrollWrapper.clientHeight,
                    offWidth :  scrollWrapper.clientWidth
                };
                return retSize;
            },
            onWheel(e){
                let rs = this.getSize();
                let nmb = this.speed;
                let ymove = e.deltaY;
                let xmove = e.deltaX;
                if(rs.scrHeight > rs.offHeight){
                    this.top += ymove;
                    if (this.top < 0) this.top = 0;
                    if ((rs.scrHeight-this.top ) < rs.offHeight)
                        this.top = (rs.scrHeight-rs.offHeight );
                }else this.top = 0;
                if (rs.scrWidth > rs.offWidth){
                    this.left += xmove;
                    if (this.left < 0) this.left = 0;
                    if ((rs.scrWidth-this.left ) < rs.offWidth)
                        this.left = (rs.scrWidth-rs.offWidth );
                }else this.left = 0;
                this.updatas();
            },
            onJump(e,n){
                let rs = this.getSize();

                if (n===1){
                    let position = this.$refs.scrollHeight.getBoundingClientRect();
                    let yMovement = e.clientY - position.top;
                    let centerize = (this.scrheight / 2);
                    let ymove = yMovement / rs.offHeight * 100 - centerize;
                    if (ymove < 0){
                        ymove = 0;
                    }else if(ymove+this.scrheight > 100){
                        ymove = 100 - this.scrheight;
                    }
                    this.top = rs.scrHeight/100*ymove;
                }else{
                    let position = this.$refs.scrollWidth.getBoundingClientRect();
                    let xMovement = e.clientX - position.left;
                    let centerize = (this.scrwidth / 2);
                    let xmove = xMovement / rs.offWidth * 100 - centerize;
                    if (xmove < 0){
                        xmove = 0;
                    }else if(xmove+this.scrwidth > 100){
                        xmove = 100 - this.scrwidth;
                    }
                    this.left = rs.scrWidth/100*xmove;
                }
                this.updatas();
            },
            darg(e,n){
                e.preventDefault();
                e.stopPropagation();
                e = e.changedTouches ? e.changedTouches[0] : e;

                this.start = n;
                this.startX = e.clientX;
                this.startY = e.clientY;
                this.starttop = this.scrtop;
                this.startleft = this.scrleft;
                document.addEventListener("mousemove",this.onDarg);
            },
            onDarg(e){
                let rs = this.getSize();
                if(this.start){

                    e.preventDefault();
                    e.stopPropagation();
                    e = e.changedTouches ? e.changedTouches[0] : e;

                    if (this.start === 1)
                    {
                        let yMovement = e.clientY - this.startY;
                        let yMovementPercentage = yMovement / rs.offHeight * 100;
                        let ymove = this.starttop+yMovementPercentage;
                        if (ymove < 0){
                            ymove = 0;
                        }else if(ymove+this.scrheight > 100){
                            ymove = 100 - this.scrheight;
                        }
                        this.top = rs.scrHeight/100*ymove;
                    }else{
                        let xMovement = e.clientX - this.startX;
                        let xMovementPercentage = xMovement / rs.offWidth * 100;
                        let xmove = this.startleft+xMovementPercentage;
                        if (xmove < 0){
                            xmove = 0;
                        }else if(xmove+this.scrwidth > 100){
                            xmove = 100 - this.scrwidth;
                        }
                        this.left = rs.scrWidth/100*xmove;
                    }
                    this.updatas();
                }
            },
            stopDarg(){
                this.start = 0;
                this.startX = 0;
                this.startY = 0;
                document.removeEventListener("mousemove",this.onDarg);
            }
        },
        mounted(){
            this.$nextTick(function () {
                // DOM 现在更新了
                // `this` 绑定到当前实例
                this.init();
            });
            window.addEventListener('resize',this.init);
            document.addEventListener("click", this.init);
            document.addEventListener("mouseup", this.stopDarg);
            document.addEventListener("touchend", this.stopDarg);
        },
        beforeDestroy() {
            window.removeEventListener('resize',this.init);
            document.removeEventListener("click", this.init);
            document.removeEventListener("mouseup", this.stopDarg);
            document.removeEventListener("touchend", this.stopDarg);
        },
    }
</script>

<style>
    .ant-scrollbar-main{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
        transition: all 0.5s ease;
    }
    .ant-scrollbar-main-move{
        background: transparent;
    }
    /**
    滚动条公共样式
     */
    .ant-scrollbar-height,.ant-scrollbar-width{
        position: absolute;
        background: transparent;
        border-radius:5px;
        transition: all 0.5s ease;
    }
    .ant-scrollbar-height:hover,.ant-scrollbar-width:hover{
        background: rgba(0, 0, 0, 0.3);
    }
    .ant-scrollbar-height{
        width: 10px;
        height: 100%;
        right: 3px;
        top: 0;
    }
    .ant-scrollbar-width{
        height: 10px;
        width:100%;
        bottom:3px;
        right: 0;
    }
    /**
    滚动轴公共样式
     */
    .ant-scrollbar-height div,.ant-scrollbar-width div{
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        border-radius:5px;
    }
    .ant-scrollbar-height div{
        width: 10px;
        height: 30%;
    }
    .ant-scrollbar-width div{
        height: 10px;
        width: 30%;
    }
    /**
    主窗口激活时滚动条颜色加深
     */
    .ant-scrollbar-main:hover .ant-scrollbar-height div,.ant-scrollbar-main:hover .ant-scrollbar-width div{
        background: rgba(0, 0, 0, 0.5);
    }
</style>