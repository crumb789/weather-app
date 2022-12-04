<template>
    <div class="cardis  animate__animated animate__zoomIn">
        <slot></slot>
        <div @click="mouseOver" class="box mt-4 " ref="card"
            
            :style="{maxWidth: 500 +'px', position: 'relative', minHeight: 240 + 'px', transform: computedPos}" >
            <!-- <div class="divider" :style="{width: widthLine + '%'}">
            </div> -->

            <div @click="$emit('update-info')" class="name title is-4">
                {{currentCard.name}} {{currentCard.sys['country']}}
                <i @click="updateTempLaunch" :style="{cursor: 'pointer'}" :class="{rotate: updateTemp}" class="bi bi-arrow-clockwise"></i>

                <div v-if="moreInfoOpen && bookmark" 
                    @click="deletingCard(currentCard.id)"
                    class="card-delete" 
                    title="Удалить" >
                    <i class="bi bi-bookmark-check" :style="{color: '#ab3939'}"></i>
                </div>
                <div v-if="moreInfoOpen && bookmark == false" 
                    @click="clearTimer"
                    class="card-delete-cancel" 
                    title="Delete" >
                    <i class="bi bi-bookmark" :style="{color: '#ab3939'}"></i>
                    <span class="card-delete-cancel_timer">{{timerLeft}}</span>
                </div>                
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
                        <div v-if="descrTemp === 'Fog' || descrTemp === 'Mist' " class="weather-descr-icon">
                            <i class="bi bi-cloud-fog"></i>
                        </div>
                        <div v-if="descrTemp === 'Light snow' || descrTemp === 'Light shower snow' || descrTemp === 'Snow' " class="weather-descr-icon">
                            <i class="bi bi-cloud-snow"></i>
                        </div>
                    </div>    

                    <div class="weather-temp-feel">
                        Feel like {{feelLike}}<span v-if="units === 'metric'">°C</span>
                        <span v-else>°F</span>
                    </div>  
                    <div class="weather-wind" v-if="units === 'metric'">
                        <span class="mr-2">Wind {{currentCard.wind['speed']}} m/s 
                            <svg :style="{transform: degArrowWind, fontSize: 20 + 'px', color: '#0065bb'}" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class=" bi bi-arrow-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg> 
                        </span>      
                    </div>

                    <div class="weather-wind" v-else>
                        <span class="mr-2">Wind {{currentCard.wind['speed']}} mph
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
                        Pressure {{currentCard.main['pressure']}} hPa 
                    </div>
                    <div class="weather-humidity">
                        Humidity {{currentCard.main['humidity']}} %  
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
            <i :style="moreIcon" @click="changeMoreInfo" class="bi bi-three-dots"></i>
            <div class="units" @click="$emit('change-units')">
                {{units}}
            </div>
            <!-- {{posX}}  {{posY}}
            {{computedPos}} -->
        </div>
        
    </div>

    
</template>

<script>
export default {
    name:'card-list-ru',
    props:{
        currentCard:{
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
            updateTemp: false,
            posX: undefined,
            posY: undefined,
            prevCard: {
                transform: `translateX(100px)`
            },
            bookmark: true,
            timer: null,
            interval: null,
            timerLeft: 3
        }
    },
    methods:{
        updateTempLaunch(){
            this.updateTemp = true
            setTimeout(() => {
                this.updateTemp = false
            }, 2000)
        },
        changeMoreInfo(){
            this.moreInfoOpen = !this.moreInfoOpen
            this.$emit('change-more-info-open', this.moreInfoOpen)
        },
        // deletingCard(cardId){
        //         this.$emit('delete-this-card', cardId)
        // }
        deletingCard(cardId){
            this.bookmark = false

            this.interval = setInterval(() => {
              this.timerLeft--  
            },1000)

            this.timer = setTimeout(() => {
                this.$emit('delete-this-card', cardId)
                this.bookmark = true
                clearInterval(this.interval)
                this.timerLeft = 3
                this.moreInfoOpen = false
            }, 3000);


        },
        clearTimer(){
            clearTimeout(this.timer)
            clearInterval(this.interval)
            this.timer = null
            this.interval = null
            this.bookmark = true
            this.timerLeft = 3
        }
    },
    computed: {
        degArrowWind(){
            let where = 0 + this.currentCard.wind['deg']
            return  'rotate('+where+'deg)'
        },
        toUpTemp(){
            let temp = this.currentCard.main['temp']
            return Math.round(temp)
        },
        feelLike(){
            let temp = this.currentCard.main['feels_like']
            return Math.round(temp)
        },
        minTemp(){
            let temp = this.currentCard.main['temp_min']
            return Math.round(temp)
        },
        maxTemp(){
            let temp = this.currentCard.main['temp_max']
            return Math.round(temp)
        },
        descrTemp(){
            let descr = this.currentCard.weather[0].description
            descr = descr.split('')
            let a = String(descr[0]).toUpperCase()
            descr.splice(0,1)
            descr.unshift(a)
            return descr.join('')
        },
        visability(){
            return this.currentCard.visibility / 1000
        },
        latitude(){
            return this.currentCard.coord.lat
        },
        longitude(){
            return this.currentCard.coord.lon
        },
        computedPos(){
            let transformX 
            if(this.posX < 1150 ){
                transformX = -this.posX / 10
            }
            if(this.posX > 1450){
                transformX = this.posX / 10
            }
            return `translateX(${transformX}px)`
        }
    }
}
</script>

<style scoped>
.box{
    margin: 0 auto;
    position: relative;
}
.cardis {
    height: 300px;
    transition: 0.5s all;
}
.card-delete {
    position: absolute;
    top: 18px;
    right: 10px;
    cursor: pointer;
}
.card-delete-cancel{
    position: absolute;
    top: 18px;
    cursor: pointer;
    right: 10px;
    animation: flip 1s infinite linear;
}
.card-delete-cancel_timer{
    position: absolute;
    font-weight: 100;
    font-size: 14px;
    left: 50%;
    top: 44%;
    transform: translate(-50%, -50%);
}
@keyframes flip{
    0%{
        transform: rotate(0deg);
    }
    25%{
        transform: rotate(-30deg);

    }
    75%{
        transform: rotate(30deg);
    }
    100%{
        transform: rotate(0deg);
    }
}




.divider{
    position: absolute;
    display: block;
    height: 1px;
    background-color: #2d8d91;
    top: 0;
    left: 0;
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




