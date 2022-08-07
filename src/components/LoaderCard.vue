<template>
    <div class="load">
        <div v-if="loadBlock" :class="{loadAnim: loadAnim, loadClose: loadBack}" class="wrapper">
            <div class="sunset animate__animated ">
                <i class="bi bi-cloud-sun-fill"></i>
            </div>
            <div class="sun animate__animated animate__fadeInRightBig">
                <i class="bi bi-brightness-high-fill"></i>
            </div>
            <div class="moon animate__animated animate__fadeInRightBig">
                <i class="bi bi-cloud-moon-fill"></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return{
            loadBlock: true,
            loadAnim: true,
            loadBack: false
        }
    },
    methods:{
        loadAnimGo(){
            setTimeout(()=>{
                this.loadAnim = false
                this.loadBack = true
            }, 2200)
            setTimeout(()=>{
                this.loadBlock = false
                this.$emit('load-icon-close')
            },2500)

        }
    },
    mounted(){
        this.loadAnimGo()
    }
}
</script>

<style  scoped>

/* wrapper/ */
.wrapper{
    /* width: 280px; */
    /* display: flex; */
    column-gap: 40px;
    border: 3px solid rgb(26, 25, 58);
    width: 100px;
    height: 100px;
    border-radius: 14px;
    overflow: hidden;
    background: #fff;
}
.load{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.loadAnim{
    animation: rotate-height 0.3s 1  ease-in-out;
}
@keyframes rotate-height{
    from{
        transform: rotate(0deg);
        width: 0px;
        height: 0px;
        border-radius: 100%;
    }
    to{
        transform: rotate(360deg);
        width: 100px;
        height: 100px;
        border-radius: 14px;
    }
}
.loadClose{
    animation: rotate-back 0.3s 1  ease-in-out;
}
@keyframes rotate-back{
    from{
        transform: rotate(0deg);
        width: 100px;
        height: 100px;
        border-radius: 14px;
    }
    to{
        transform: rotate(360deg);
        width: 0px;
        height: 0px;
        border: none;
        border-radius: 14px;
    }
}


/* icons */
i{
    font-size: 60px;
    position: absolute;
}

.little-rain{
    animation: leftgo 0.7s 1 0.5s linear;
    opacity: 1;
    transform: translateX(-4000%)
}

@keyframes leftgo{
    0%{
        transform: translateX(300px);
        opacity: 0.3;
    }
    50%{
        transform: none;
        opacity: 1;
    }
    100%{
        transform: translateX(-100px);
        opacity: 0.7;

    }
}

.sunset{
    animation: leftgo 1s 1 0.5s ease-in;
    transform: translateX(-4000%);
    color: #cf9b3a;
    
}
.sun{
    animation: leftgo 1s 1 1s ease-in-out;
    transform: translateX(-4000%);
    color: #ffc254;
}
.moon{
    animation: leftgo 1s 1 1.5s ease-out;
    transform: translateX(-4000%);
    color: cornflowerblue;
}



</style>
