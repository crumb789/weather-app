<template>
    <div class="cardis  animate__animated animate__zoomIn">
        <div class="box mt-4 " :style="{maxWidth: 500 +'px', position: 'relative', minHeight: 240 + 'px'}" >
            <div @click="$emit('update-info')" class="name title is-4">
                {{info.name}} {{info.sys['country']}}
                <i @click="updateTempLaunch" :style="{cursor: 'pointer'}" :class="{rotate: updateTemp}" class="bi bi-arrow-clockwise"></i>
            </div>

            <div class="weather ">
                <div class="wrapper-temp animate__animated animate__flipInX" v-if="!moreInfoOpen" >
                    <div v-if="units === 'metric'" :class="{
                        verycold: toUpTemp > -100 && toUpTemp < -10,
                        soblue: toUpTemp > -11 && toUpTemp < 6,
                        blue:  toUpTemp > 5 && toUpTemp < 18,
                        yellow: toUpTemp > 17 && toUpTemp < 28,
                        red: toUpTemp > 27}"  class="weather-temp title is-1">
                        {{toUpTemp}}<span v-if="units === 'metric'">°C</span>
                    </div>
                    <div v-else  :class="{
                        verycold: toUpTemp > -100 && toUpTemp < 14,
                        soblue: toUpTemp > 13 && toUpTemp < 51,
                        blue:  toUpTemp > 41 && toUpTemp < 64,
                        yellow: toUpTemp > 63 && toUpTemp < 82,
                        red: toUpTemp > 81}"  class="weather-temp title is-1">
                        {{toUpTemp}}<span>°F</span>
                    </div>


                    <div class="weather-descr ">
                        {{descrTemp}}
                        <div v-if="descrTemp === 'Broken clouds'" class="weather-descr-icon">
                            <i class="bi bi-cloud-sun"></i>  
                        </div>
                        <div v-if="descrTemp === 'Scattered clouds' || descrTemp === 'Few clouds' " class="weather-descr-icon">
                            <i class="bi bi-clouds"></i>  
                        </div> 
                        <div v-if=" descrTemp === 'Light intensity shower rain' 
                        || descrTemp === 'Moderate rain' 
                        || descrTemp === 'Light rain'" class="weather-descr-icon">
                            <i class="bi bi-cloud-drizzle"></i>  
                        </div> 
                        <div v-if="descrTemp === 'Overcast clouds'" class="weather-descr-icon">
                            <i class="bi bi-cloudy"></i>
                        </div> 
                        <div v-if="descrTemp === 'Clear sky'" class="weather-descr-icon">
                            <i class="bi bi-brightness-high"></i>
                        </div>
                        <div v-if="descrTemp === 'Thunderstorm' " class="weather-descr-icon">
                            <i class="bi bi-cloud-lightning-rain"></i>
                        </div>
                        <div v-if="descrTemp === 'Fog' " class="weather-descr-icon">
                            <i class="bi bi-cloud-fog"></i>
                        </div>
                    </div>    
                    <div class="weather-temp-feel">
                        Feel like {{feelLike}}<span v-if="units === 'metric'">°C</span><span v-else>°F</span>
                    </div>    
                    <div class="weather-wind">
                        <span class="mr-2">Wind {{info.wind['speed']}} km/h 
                            <svg :style="{transform: degArrowWind, fontSize: 20 + 'px', color: '#0065bb'}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg> 
                        </span>
                        
                        
                    </div> 
                </div> 
                <div class="wrapper-more animate__animated animate__flipInX" v-if="moreInfoOpen">
                    <div class="weather-temp-min ">
                        Min {{minTemp}}<span v-if="units === 'metric'">°C</span><span v-else>°F</span>
                    </div>
                    <div class="weather-temp-max">
                        Max {{maxTemp}}<span v-if="units === 'metric'">°C</span><span v-else>°F</span>
                    </div>
                    <div class="weather-pressure">
                        Pressure {{info.main['pressure']}} hPa 
                    </div>
                    <div class="weather-humidity">
                        Humidity {{info.main['humidity']}} %  
                    </div>
                    <div class="weather-visibility">
                        Visibility {{visability}} km 
                    </div>
                    <div class="weather-latitude">
                        Latitude {{latitude}}
                    </div>
                    <div class="weather-longitude">
                        Longitude {{longitude}}
                    </div>
                </div>
            </div>
            <i :style="moreIcon" @click="moreInfoOpen = !moreInfoOpen" class="bi bi-three-dots"></i>
            <div  class="units" @click="$emit('change-units')">
                {{units}}
            </div>
        </div>
        
    </div>

    
</template>

<script>
export default {
    name:'card-city-en',
    props:{
        info:{
            type: Object
        },
        units:{
            type: String
        }
    },
    data() {
        return{
            moreIcon:{
                position: 'absolute',
                right: 20 + 'px',
                bottom: 10 +'px',
                fontSize: 20 + 'px',
                cursor: 'pointer'
            },
            moreInfoOpen: false,
            updateTemp: false
        }
    },
    methods:{
        updateTempLaunch(){
            this.updateTemp = true
            setTimeout(() => {
                this.updateTemp = false
            }, 2000)
        }
    },
    computed: {
        degArrowWind(){
            let where = 0 + this.info.wind['deg']
            return  'rotate('+where+'deg)'
        },
        toUpTemp(){
            let temp = this.info.main['temp']
            return Math.round(temp)
        },
        feelLike(){
            let temp = this.info.main['feels_like']
            return Math.round(temp)
        },
        minTemp(){
            let temp = this.info.main['temp_min']
            return Math.round(temp)
        },
        maxTemp(){
            let temp = this.info.main['temp_max']
            return Math.round(temp)
        },
        descrTemp(){
            let descr = this.info.weather[0].description
            descr = descr.split('')
            let a = String(descr[0]).toUpperCase()
            descr.splice(0,1)
            descr.unshift(a)
            return descr.join('')
        },
        visability(){
            return this.info.visibility / 1000
        },
        latitude(){
            return this.info.coord.lat
        },
        longitude(){
            return this.info.coord.lon
        }
    }
}
</script>

<style scoped>
.box{
    margin: 0 auto;
}
.wrapper-temp{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100px 40px;
}
.weather-temp-feel{
    display: flex;
    align-items: center;
    justify-content: center;
}
.weather-wind{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.weather-temp{
    display: flex;
    align-items: flex-end;
    justify-content: center;

    
}
.weather-descr-icon 
    i {
    font-size: 45px;
}
.units{
    position: absolute;
    bottom: 10px;
    opacity: 0.5;
    cursor: pointer;
}
.yellow{
    color: #f9bc0f;
    text-shadow: 2px 1px #000;
}
.red{
    color: #f9450f;
    text-shadow: 2px 1px 3px #8f2100;
}
.blue{
    color: #46c5eb;
    text-shadow: 2px 1px 3px #140e0c;
}
.soblue{
    color: #98e7ff;
    text-shadow: 5px 3px 3px #2d8d91;
}
.verycold{
    color: #ddf7ff;
    text-shadow: -1px 1px 13px #0051ff;
}

.rotate:before{
        animation: rotating 2s ease infinite;
    }
@keyframes rotating{
    0%{
        transform: rotateZ(0deg);
    }
    100%{
        transform: rotateZ(360deg);
    }
}

/* color: #f9bc0f;  if > 18 < 27 */

</style>