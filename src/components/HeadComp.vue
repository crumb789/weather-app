<template>
    <div class="header mb-4 ">
        <h1 class="title is-1">Weather <span @click="$emit('change-lang')" class="subtitle is-5">{{lang}}</span> </h1>
        
    </div>
</template>

<script>
export default {
    name:'head-component',
    props:{
        lang:{
            type: String
        }
    },
    data() {
        return{

        }
    },
}
</script>


<style lang="scss" scoped>

</style>