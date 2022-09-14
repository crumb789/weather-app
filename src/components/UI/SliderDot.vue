<template>
    <div class="slide-dot" 
        @click="$emit('swipe-card-to-dot', index)"
        :class="{active: item.id == currentCard.id}">
        
    </div>
</template>


<script>
export default {
    name:'slider-dot',
    props:{
        item:{
            type: Object
        },
        index:{
            type: Number
        },
        currentCard:{
            type: Object
        }
    },
    data() {
        return{

        }
    },
}
</script>



<style scoped>

.slide-dot{
    width: 5px;
    height: 5px;
    background-color: #25a592;
    border-radius: 100%;
    transition: 0.3s all;
    opacity: 0.5;
}

.active{
    width: 8px;
    height: 8px;
    background-color: #ffc254;
    border-radius: 100%;
    opacity: 1;
}
</style>