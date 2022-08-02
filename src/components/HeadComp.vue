<template>
    <div class="header mb-4 ">
        <h1 v-if="lang === 'ru' " 
        class="title is-1">Погода <span :style="{cursor: 'pointer'}" @click="$emit('change-lang')" class="subtitle is-5">{{lang}}</span> </h1>
        <h1 v-if="lang === 'en' "
         class="title is-1">Weather <span :style="{cursor: 'pointer'}" @click="$emit('change-lang')" class="subtitle is-5">{{lang}}</span> </h1>
        
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