<template>
    <div class="cardis  animate__animated animate__zoomIn">
        <div class="box mt-4 " :style="{maxWidth: 500 +'px', position: 'relative', height: 240 + 'px'}" >
            <div @click="$emit('update-info')" class="name title is-4">
                {{info.name}} {{info.sys['country']}}
                <i @click="updateTempLaunch" :style="{cursor: 'pointer'}" :class="{rotate: updateTemp}" class="bi bi-arrow-clockwise"></i>
            </div>

            <div class="weather ">
                <div class="wrapper-temp animate__animated animate__flipInX" v-if="!moreInfoOpen" >
                    <div :class="{
                        verycold: toUpTemp > -100 && toUpTemp < -10,
                        soblue: toUpTemp > -11 && toUpTemp < 6,
                        blue:  toUpTemp > 5 && toUpTemp < 18,
                        yellow: toUpTemp > 17 && toUpTemp < 28,
                        red: toUpTemp > 27}"  class="weather-temp title is-1">
                        {{toUpTemp}}°C
                    </div>         
                    <div class="weather-descr ">
                        {{descrTemp}}
                        <div v-if="descrTemp === 'Облачно с прояснениями' || descrTemp === 'Broken clouds'" class="weather-descr-icon">
                            <i class="bi bi-cloud-sun"></i>  
                        </div>
                        <div v-if="descrTemp === 'Переменная облачность' || descrTemp === 'Scattered clouds' " class="weather-descr-icon">
                            <i class="bi bi-clouds"></i>  
                        </div> 
                        <div v-if="descrTemp === 'Небольшой проливной дождь' 
                        || descrTemp === 'Light intensity shower rain' 
                        || descrTemp === 'Дождь' 
                        || descrTemp === 'Moderate rain' 
                        || descrTemp === 'Небольшой дождь' 
                        || descrTemp === 'Light rain'" class="weather-descr-icon">
                            <i class="bi bi-cloud-drizzle"></i>  
                        </div> 
                        <div v-if="descrTemp === 'Пасмурно' || descrTemp === 'Overcast clouds'" class="weather-descr-icon">
                            <i class="bi bi-cloudy"></i>
                        </div> 
                        <div v-if="descrTemp === 'Ясно' || descrTemp === 'Clear sky'" class="weather-descr-icon">
                            <i class="bi bi-brightness-high"></i>
                        </div>
                    </div>    
                    <div class="weather-temp-feel">
                        Ощущается как {{feelLike}}°C
                    </div>    
                    <div class="weather-wind">
                        <span class="mr-2">Ветер {{info.wind['speed']}} км/ч 
                            <svg :style="{transform: degArrowWind, fontSize: 20 + 'px', color: '#0065bb'}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg> 
                        </span>
                        
                        
                    </div> 
                </div> 
                <div class="wrapper-more animate__animated animate__flipInX" v-if="moreInfoOpen">
                    <div class="weather-temp-min ">
                        Мин {{minTemp}}°C
                    </div>
                    <div class="weather-temp-max">
                        Макс {{maxTemp}}°C
                    </div>
                    <div class="weather-pressure">
                        Давление {{info.main['pressure']}} мбар 
                    </div>
                    <div class="weather-humidity">
                        Влажность {{info.main['humidity']}} %  
                    </div>
                    <div class="weather-visibility">
                        Видимость {{visability}} км.  
                    </div>
                </div>
            </div>
            <i :style="moreIcon" @click="moreInfoOpen = !moreInfoOpen" class="bi bi-three-dots"></i>
        </div>
        
    </div>

    
</template>

<script>
export default {
    name:'card-city',
    props:{
        info:{
            type: Object
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
    justify-content: space-around;
}
.weather-wind{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.weather-temp{
    display: flex;
    align-items: flex-end;
    justify-content: space-around;

    
}
.weather-descr-icon 
    i {
    font-size: 45px;
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




