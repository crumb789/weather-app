<template>
    <div class="form mt-4">
        <form @submit.prevent="onSubmit">
            <input v-if="lang === 'ru'" v-model="newCity" :style="{width: 80 + '%'}" class="input is-info" type="text" placeholder="Город..."> 
            <input v-else v-model="newCity" :style="{width: 80 + '%'}" class="input is-info" type="text" placeholder="City..."> 

            <button :disabled='!newCity' class="button is-info is-light ml-2" type='submit'>
                <i class="bi bi-caret-down-fill"></i>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name:'form-new-city',
    props:{
        lang:{
            type: String
        }
    },
    data() {
        return{
            newCity: ''
        }
    },
    methods:{
        onSubmit(){
            this.$emit('new-city-req', this.newCity)
            this.newCity = ''
        }
    }
}
</script>

<style scoped>
.form{
    max-width: 550px;
    margin: 0 auto;
}
</style>
