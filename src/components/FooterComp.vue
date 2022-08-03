<template>
    <div class="container is-max-desktop">
        <div class="notification is-light">
            <a href="https://openweathermap.org/">
                <div class="footer-icon image is-64x64" :title='titleLink'>
                    <img :src="WeatherIcon" alt="">
                </div>
            </a>
            <a href="https://t.me/crumb789">
                <div class="footer-icon image is-64x64">
                    <img :src="Crumb" alt="">
                </div>
            </a>
        </div>
        
        
    </div>
</template>

<script>
import Crumb from '@/assets/crumb-logo.png'
import WeatherIcon from '@/assets/unnamed.svg'

export default {
    data() {
        return{
            WeatherIcon,
            Crumb,
            titleLink: 'The information is taken from the OpenWeather website'
        }
    },
}
</script>

<style>
.notification  {
    display: flex;
    justify-content: center;
    column-gap: 20px;
}
</style>