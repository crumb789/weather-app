<template>
    <div @click="$emit('update-info')" class="city-load title is-4 mt-4">
        {{cityChanged}} <i :style="{cursor: 'pointer'}"  class="bi bi-arrow-clockwise"></i>
    </div>
</template>

<script>
export default {
    name:'city-load',
    props:{
        cityChanged:{
            type: String
        }
    },
    data() {
        return{

        }
    },
}
</script>