<template>
    <div class="form mt-4 is-flex is-justify-content-center p-2">
        <form class="type-city" @submit.prevent="onSubmit">
            <input v-if="lang === 'ru'" v-model="newCity" class="input is-info " type="text" placeholder="Город..."> 
            <input v-else v-model="newCity"  class="input is-info " type="text" placeholder="City..."> 

            <!-- <button :disabled='!newCity' class="button is-info is-light ml-2" type='submit'>
                <i class="bi bi-caret-down-fill"></i>
            </button> -->
        </form>
        <button class=" card-header button is-primary is-light location border" @click="getLocation">
            <i class="bi bi-geo"></i>
        </button>
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
        },
        getLocation(){
            this.$emit('get-location')
        }
    }
}
</script>

<style scoped>
.form{
    max-width: 550px;
    margin: 0 auto;
    column-gap: 8px;
}
.type-city{
    width: 100%;
}
.location i{
    transform: scale(130%);
}
</style>
