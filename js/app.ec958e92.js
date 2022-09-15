(function(){"use strict";var e={4649:function(e,t,i){var n=i(9242),a=i(3396);const o={key:0,class:"main animate__animated animate__fadeIn"},r={class:"container"},s=(0,a._)("i",{class:"bi bi-chevron-left"},null,-1),l=[s],d=(0,a._)("i",{class:"bi bi-chevron-right"},null,-1),c=[d],p={key:1},u={key:2};function m(e,t,i,s,d,m){const h=(0,a.up)("head-comp"),g=(0,a.up)("form-new-city"),w=(0,a.up)("card-city"),f=(0,a.up)("card-en"),v=((0,a.up)("city-load"),(0,a.up)("cards-list-ru")),k=(0,a.up)("slider-dot"),y=(0,a.up)("slider-dots-list"),_=(0,a.up)("error-card"),b=(0,a.up)("placeholderComp"),C=(0,a.up)("loader-card"),T=(0,a.up)("footer-comp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d.loadIcon?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("section",o,[(0,a._)("div",r,[(0,a.Wm)(h,{class:"fixed",lang:d.lang,onChangeLang:m.changeLang},null,8,["lang","onChangeLang"]),(0,a.Wm)(g,{lang:d.lang,onNewCityReq:m.newCityReq,onGetLocation:m.getLocation},null,8,["lang","onNewCityReq","onGetLocation"]),d.cardLoad&&"ru"===d.lang?((0,a.wg)(),(0,a.j4)(w,{key:0,info:d.geoInfo,units:d.units,onUpdateInfo:m.getDataFromLocation,onChangeUnits:t[0]||(t[0]=t=>m.changeUnits(e.howCard="geo"))},null,8,["info","units","onUpdateInfo"])):(0,a.kq)("",!0),d.cardLoad&&"en"===d.lang?((0,a.wg)(),(0,a.j4)(f,{key:1,info:d.geoInfo,units:d.units,onUpdateInfo:m.getDataFromLocation,onChangeUnits:t[1]||(t[1]=t=>m.changeUnits(e.howCard="geo"))},null,8,["info","units","onUpdateInfo"])):(0,a.kq)("",!0),(d.cardLoad,(0,a.kq)("",!0)),(0,a.kq)("",!0),m.currentCard?((0,a.wg)(),(0,a.j4)(v,{key:4,units:d.units,currentCard:m.currentCard,onDeleteThisCard:m.deleteCardFromInfoList,onPrevSlide:m.prevCard,onNextSlide:m.nextCard,onUpdateInfo:t[4]||(t[4]=e=>m.getData(m.currentCard.name,d.countCard)),onChangeUnits:t[5]||(t[5]=t=>m.changeUnits(e.howCard="currentCard",m.currentCard.name,d.countCard))},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>m.prevCard&&m.prevCard(...e)),id:"btn-prev",class:"button is-rounded is-ghost"},l,512),[[n.F8,d.infoList.length>1]]),(0,a.wy)((0,a._)("button",{onClick:t[3]||(t[3]=(...e)=>m.nextCard&&m.nextCard(...e)),id:"btn-next",class:"button is-rounded is-ghost"},c,512),[[n.F8,d.infoList.length>1]]),(0,a.Wm)(y,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.infoList,((e,t)=>((0,a.wg)(),(0,a.j4)(k,{key:e.id,item:e,index:t,currentCard:m.currentCard,onSwipeCardToDot:m.swipeCardToDot},null,8,["item","index","currentCard","onSwipeCardToDot"])))),128))])),_:1})])),_:1},8,["units","currentCard","onDeleteThisCard","onPrevSlide","onNextSlide"])):(0,a.kq)("",!0),d.errorShow?((0,a.wg)(),(0,a.j4)(_,{key:5})):(0,a.kq)("",!0),d.city?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(b,{key:6}))])])),d.loadIcon?((0,a.wg)(),(0,a.iD)("section",p,[(0,a.Wm)(C,{onLoadIconClose:m.loadIconClose},null,8,["onLoadIconClose"])])):(0,a.kq)("",!0),d.loadIcon?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("footer",u,[(0,a.Wm)(T)]))],64)}i(6699);var h=i(7139);const g={class:"mb-4"},w={key:0,class:"header title is-1"},f=(0,a.Uk)("Погода "),v={key:1,class:"header title is-1"},k=(0,a.Uk)("Weather ");function y(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",g,["ru"===i.lang?((0,a.wg)(),(0,a.iD)("h1",w,[f,(0,a._)("span",{style:{cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.$emit("change-lang")),class:"subtitle is-5"},(0,h.zw)(i.lang),1)])):(0,a.kq)("",!0),"en"===i.lang?((0,a.wg)(),(0,a.iD)("h1",v,[k,(0,a._)("span",{style:{cursor:"pointer"},onClick:t[1]||(t[1]=t=>e.$emit("change-lang")),class:"subtitle is-5"},(0,h.zw)(i.lang),1)])):(0,a.kq)("",!0)])}var _={name:"head-component",props:{lang:{type:String}},data(){return{}}},b=i(89);const C=(0,b.Z)(_,[["render",y]]);var T=C;const D={class:"cardis animate__animated animate__zoomIn"},U={class:"box mt-4",style:{maxWidth:"500px",position:"relative",minHeight:"240px",backgroundColor:"#f4fdfd"}},L=(0,a._)("i",{class:"bi bi-geo-alt"},null,-1),I={class:"weather"},x={key:0,class:"wrapper-temp animate__animated animate__flipInX"},z={key:0},S=(0,a._)("span",null,"°F",-1),q={class:"weather-descr"},O={key:0,class:"weather-descr-icon"},F=(0,a._)("i",{class:"bi bi-cloud-sun"},null,-1),j=[F],$={key:1,class:"weather-descr-icon"},W=(0,a._)("i",{class:"bi bi-clouds"},null,-1),M=[W],A={key:2,class:"weather-descr-icon"},N=(0,a._)("i",{class:"bi bi-cloud-drizzle"},null,-1),X=[N],Z={key:3,class:"weather-descr-icon"},B=(0,a._)("i",{class:"bi bi-cloudy"},null,-1),H=[B],J={key:4,class:"weather-descr-icon"},P=(0,a._)("i",{class:"bi bi-brightness-high"},null,-1),R=[P],E={key:5,class:"weather-descr-icon"},G=(0,a._)("i",{class:"bi bi-cloud-lightning-rain"},null,-1),K=[G],V={key:6,class:"weather-descr-icon"},Y=(0,a._)("i",{class:"bi bi-cloud-fog"},null,-1),Q=[Y],ee={class:"weather-temp-feel"},te={key:0},ie={key:1},ne={class:"weather-wind"},ae={class:"mr-2"},oe=(0,a._)("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"},null,-1),re=[oe],se={key:1,class:"wrapper-more animate__animated animate__flipInX"},le={class:"weather-temp-min"},de={key:0},ce={key:1},pe={class:"weather-temp-max"},ue={key:0},me={key:1},he={class:"weather-pressure"},ge={class:"weather-humidity"},we={class:"weather-visibility"},fe={class:"weather-latitude"},ve={class:"weather-longitude"};function ke(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",U,[(0,a._)("div",{onClick:t[1]||(t[1]=t=>e.$emit("update-info")),class:"name title is-4"},[L,(0,a.Uk)(" "+(0,h.zw)(i.info.name)+" "+(0,h.zw)(i.info.sys["country"])+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=(...e)=>r.updateTempLaunch&&r.updateTempLaunch(...e)),style:{cursor:"pointer"},class:(0,h.C_)([{rotate:o.updateTemp},"bi bi-arrow-clockwise"])},null,2)]),(0,a._)("div",I,[o.moreInfoOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",x,["metric"===i.units?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{verycold:r.toUpTemp>-100&&r.toUpTemp<-10,soblue:r.toUpTemp>-11&&r.toUpTemp<6,blue:r.toUpTemp>5&&r.toUpTemp<18,yellow:r.toUpTemp>17&&r.toUpTemp<28,red:r.toUpTemp>27},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(r.toUpTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",z,"°C")):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,h.C_)([{verycold:r.toUpTemp>-100&&r.toUpTemp<14,soblue:r.toUpTemp>13&&r.toUpTemp<51,blue:r.toUpTemp>41&&r.toUpTemp<64,yellow:r.toUpTemp>63&&r.toUpTemp<82,red:r.toUpTemp>81},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(r.toUpTemp),1),S],2)),(0,a._)("div",q,[(0,a.Uk)((0,h.zw)(r.descrTemp)+" ",1),"Облачно с прояснениями"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",O,j)):(0,a.kq)("",!0),"Переменная облачность"===r.descrTemp||"Небольшая облачность"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",$,M)):(0,a.kq)("",!0),"Небольшой проливной дождь"===r.descrTemp||"Дождь"===r.descrTemp||"Небольшой дождь"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",A,X)):(0,a.kq)("",!0),"Пасмурно"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",Z,H)):(0,a.kq)("",!0),"Ясно"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",J,R)):(0,a.kq)("",!0),"Гроза"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",E,K)):(0,a.kq)("",!0),"Плотный туман"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",V,Q)):(0,a.kq)("",!0)]),(0,a._)("div",ee,[(0,a.Uk)(" Ощущается как "+(0,h.zw)(r.feelLike),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",te,"°C")):((0,a.wg)(),(0,a.iD)("span",ie,"°F"))]),(0,a._)("div",ne,[(0,a._)("span",ae,[(0,a.Uk)("Ветер "+(0,h.zw)(i.info.wind["speed"])+" км/ч ",1),((0,a.wg)(),(0,a.iD)("svg",{style:(0,h.j5)({transform:r.degArrowWind,fontSize:"20px",color:"#0065bb"}),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right",viewBox:"0 0 16 16"},re,4))])])])),o.moreInfoOpen?((0,a.wg)(),(0,a.iD)("div",se,[(0,a._)("div",le,[(0,a.Uk)(" Мин "+(0,h.zw)(r.minTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",de,"°C")):((0,a.wg)(),(0,a.iD)("span",ce,"°F"))]),(0,a._)("div",pe,[(0,a.Uk)(" Макс "+(0,h.zw)(r.maxTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",ue,"°C")):((0,a.wg)(),(0,a.iD)("span",me,"°F"))]),(0,a._)("div",he," Давление "+(0,h.zw)(i.info.main["pressure"])+" мбар ",1),(0,a._)("div",ge," Влажность "+(0,h.zw)(i.info.main["humidity"])+" % ",1),(0,a._)("div",we," Видимость "+(0,h.zw)(r.visability)+" км ",1),(0,a._)("div",fe," Широта "+(0,h.zw)(r.latitude),1),(0,a._)("div",ve," Долгота "+(0,h.zw)(r.longitude),1)])):(0,a.kq)("",!0)]),(0,a._)("i",{style:(0,h.j5)(o.moreIcon),onClick:t[2]||(t[2]=e=>o.moreInfoOpen=!o.moreInfoOpen),class:"bi bi-three-dots"},null,4),(0,a._)("div",{class:"units",onClick:t[3]||(t[3]=t=>e.$emit("change-units"))},(0,h.zw)(i.units),1)])])}var ye={name:"card-city-ru",props:{info:{type:Object},units:{type:String}},data(){return{moreIcon:{position:"absolute",right:"20px",bottom:"10px",fontSize:"20px",cursor:"pointer"},moreInfoOpen:!1,updateTemp:!1}},methods:{updateTempLaunch(){this.updateTemp=!0,setTimeout((()=>{this.updateTemp=!1}),2e3)}},computed:{degArrowWind(){let e=0+this.info.wind["deg"];return"rotate("+e+"deg)"},toUpTemp(){let e=this.info.main["temp"];return Math.round(e)},feelLike(){let e=this.info.main["feels_like"];return Math.round(e)},minTemp(){let e=this.info.main["temp_min"];return Math.round(e)},maxTemp(){let e=this.info.main["temp_max"];return Math.round(e)},descrTemp(){let e=this.info.weather[0].description;e=e.split("");let t=String(e[0]).toUpperCase();return e.splice(0,1),e.unshift(t),e.join("")},visability(){return this.info.visibility/1e3},latitude(){return this.info.coord.lat},longitude(){return this.info.coord.lon}}};const _e=(0,b.Z)(ye,[["render",ke]]);var be=_e;const Ce=e=>((0,a.dD)("data-v-269158c4"),e=e(),(0,a.Cn)(),e),Te={class:"form mt-4 is-flex is-justify-content-center p-2"},De=Ce((()=>(0,a._)("i",{class:"bi bi-geo"},null,-1))),Ue=[De];function Le(e,t,i,o,r,s){return(0,a.wg)(),(0,a.iD)("div",Te,[(0,a._)("form",{class:"type-city",onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>s.onSubmit&&s.onSubmit(...e)),["prevent"]))},["ru"===i.lang?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=e=>r.newCity=e),class:"input is-info",type:"text",placeholder:"Город..."},null,512)),[[n.nr,r.newCity]]):(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=e=>r.newCity=e),class:"input is-info",type:"text",placeholder:"City..."},null,512)),[[n.nr,r.newCity]])],32),(0,a._)("button",{class:"card-header button is-primary is-light location border",onClick:t[3]||(t[3]=(...e)=>s.getLocation&&s.getLocation(...e))},Ue)])}var Ie={name:"form-new-city",props:{lang:{type:String}},data(){return{newCity:""}},methods:{onSubmit(){this.$emit("new-city-req",this.newCity),this.newCity=""},getLocation(){this.$emit("get-location")}}};const xe=(0,b.Z)(Ie,[["render",Le],["__scopeId","data-v-269158c4"]]);var ze=xe;const Se={class:"placeholder mt-4 title is-4"};function qe(e,t){return(0,a.wg)(),(0,a.iD)("div",Se," Укажите город ")}const Oe={},Fe=(0,b.Z)(Oe,[["render",qe]]);var je=Fe;const $e={class:"error mt-4 title is-4 animate__animated animate__shakeX"};function We(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",$e," Город не найден ")}var Me={data(){return{}}};const Ae=(0,b.Z)(Me,[["render",We],["__scopeId","data-v-d13997f8"]]);var Ne=Ae;const Xe=(0,a._)("i",{style:{cursor:"pointer"},class:"bi bi-arrow-clockwise"},null,-1);function Ze(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",{onClick:t[0]||(t[0]=t=>e.$emit("update-info")),class:"city-load title is-4 mt-4"},[(0,a.Uk)((0,h.zw)(i.cityChanged)+" ",1),Xe])}var Be={name:"city-load",props:{cityChanged:{type:String}},data(){return{}}};const He=(0,b.Z)(Be,[["render",Ze]]);var Je=He;const Pe=e=>((0,a.dD)("data-v-2f4c5e93"),e=e(),(0,a.Cn)(),e),Re={class:"cardis animate__animated animate__zoomIn"},Ee={class:"box mt-4",style:{maxWidth:"500px",position:"relative",minHeight:"240px",backgroundColor:"#f4fdfd"}},Ge=Pe((()=>(0,a._)("i",{class:"bi bi-geo-alt"},null,-1))),Ke={class:"weather"},Ve={key:0,class:"wrapper-temp animate__animated animate__flipInX"},Ye={key:0},Qe=Pe((()=>(0,a._)("span",null,"°F",-1))),et={class:"weather-descr"},tt={key:0,class:"weather-descr-icon"},it=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-sun"},null,-1))),nt=[it],at={key:1,class:"weather-descr-icon"},ot=Pe((()=>(0,a._)("i",{class:"bi bi-clouds"},null,-1))),rt=[ot],st={key:2,class:"weather-descr-icon"},lt=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-drizzle"},null,-1))),dt=[lt],ct={key:3,class:"weather-descr-icon"},pt=Pe((()=>(0,a._)("i",{class:"bi bi-cloudy"},null,-1))),ut=[pt],mt={key:4,class:"weather-descr-icon"},ht=Pe((()=>(0,a._)("i",{class:"bi bi-brightness-high"},null,-1))),gt=[ht],wt={key:5,class:"weather-descr-icon"},ft=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-lightning-rain"},null,-1))),vt=[ft],kt={key:6,class:"weather-descr-icon"},yt=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-fog"},null,-1))),_t=[yt],bt={class:"weather-temp-feel"},Ct={key:0},Tt={key:1},Dt={class:"weather-wind"},Ut={class:"mr-2"},Lt=Pe((()=>(0,a._)("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"},null,-1))),It=[Lt],xt={key:1,class:"wrapper-more animate__animated animate__flipInX"},zt={class:"weather-temp-min"},St={key:0},qt={key:1},Ot={class:"weather-temp-max"},Ft={key:0},jt={key:1},$t={class:"weather-pressure"},Wt={class:"weather-humidity"},Mt={class:"weather-visibility"},At={class:"weather-latitude"},Nt={class:"weather-longitude"};function Xt(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",Re,[(0,a._)("div",Ee,[(0,a._)("div",{onClick:t[1]||(t[1]=t=>e.$emit("update-info")),class:"name title is-4"},[Ge,(0,a.Uk)(" "+(0,h.zw)(i.info.name)+" "+(0,h.zw)(i.info.sys["country"])+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=(...e)=>r.updateTempLaunch&&r.updateTempLaunch(...e)),style:{cursor:"pointer"},class:(0,h.C_)([{rotate:o.updateTemp},"bi bi-arrow-clockwise"])},null,2)]),(0,a._)("div",Ke,[o.moreInfoOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Ve,["metric"===i.units?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{verycold:r.toUpTemp>-100&&r.toUpTemp<-10,soblue:r.toUpTemp>-11&&r.toUpTemp<6,blue:r.toUpTemp>5&&r.toUpTemp<18,yellow:r.toUpTemp>17&&r.toUpTemp<28,red:r.toUpTemp>27},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(r.toUpTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Ye,"°C")):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,h.C_)([{verycold:r.toUpTemp>-100&&r.toUpTemp<14,soblue:r.toUpTemp>13&&r.toUpTemp<51,blue:r.toUpTemp>41&&r.toUpTemp<64,yellow:r.toUpTemp>63&&r.toUpTemp<82,red:r.toUpTemp>81},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(r.toUpTemp),1),Qe],2)),(0,a._)("div",et,[(0,a.Uk)((0,h.zw)(r.descrTemp)+" ",1),"Broken clouds"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",tt,nt)):(0,a.kq)("",!0),"Scattered clouds"===r.descrTemp||"Few clouds"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",at,rt)):(0,a.kq)("",!0),"Light intensity shower rain"===r.descrTemp||"Moderate rain"===r.descrTemp||"Light rain"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",st,dt)):(0,a.kq)("",!0),"Overcast clouds"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",ct,ut)):(0,a.kq)("",!0),"Clear sky"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",mt,gt)):(0,a.kq)("",!0),"Thunderstorm"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",wt,vt)):(0,a.kq)("",!0),"Fog"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",kt,_t)):(0,a.kq)("",!0)]),(0,a._)("div",bt,[(0,a.Uk)(" Feel like "+(0,h.zw)(r.feelLike),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Ct,"°C")):((0,a.wg)(),(0,a.iD)("span",Tt,"°F"))]),(0,a._)("div",Dt,[(0,a._)("span",Ut,[(0,a.Uk)("Wind "+(0,h.zw)(i.info.wind["speed"])+" km/h ",1),((0,a.wg)(),(0,a.iD)("svg",{style:(0,h.j5)({transform:r.degArrowWind,fontSize:"20px",color:"#0065bb"}),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right",viewBox:"0 0 16 16"},It,4))])])])),o.moreInfoOpen?((0,a.wg)(),(0,a.iD)("div",xt,[(0,a._)("div",zt,[(0,a.Uk)(" Min "+(0,h.zw)(r.minTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",St,"°C")):((0,a.wg)(),(0,a.iD)("span",qt,"°F"))]),(0,a._)("div",Ot,[(0,a.Uk)(" Max "+(0,h.zw)(r.maxTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Ft,"°C")):((0,a.wg)(),(0,a.iD)("span",jt,"°F"))]),(0,a._)("div",$t," Pressure "+(0,h.zw)(i.info.main["pressure"])+" hPa ",1),(0,a._)("div",Wt," Humidity "+(0,h.zw)(i.info.main["humidity"])+" % ",1),(0,a._)("div",Mt," Visibility "+(0,h.zw)(r.visability)+" km ",1),(0,a._)("div",At," Latitude "+(0,h.zw)(r.latitude),1),(0,a._)("div",Nt," Longitude "+(0,h.zw)(r.longitude),1)])):(0,a.kq)("",!0)]),(0,a._)("i",{style:(0,h.j5)(o.moreIcon),onClick:t[2]||(t[2]=e=>o.moreInfoOpen=!o.moreInfoOpen),class:"bi bi-three-dots"},null,4),(0,a._)("div",{class:"units",onClick:t[3]||(t[3]=t=>e.$emit("change-units"))},(0,h.zw)(i.units),1)])])}var Zt={name:"card-city-en",props:{info:{type:Object},units:{type:String}},data(){return{moreIcon:{position:"absolute",right:"20px",bottom:"10px",fontSize:"20px",cursor:"pointer"},moreInfoOpen:!1,updateTemp:!1}},methods:{updateTempLaunch(){this.updateTemp=!0,setTimeout((()=>{this.updateTemp=!1}),2e3)}},computed:{degArrowWind(){let e=0+this.info.wind["deg"];return"rotate("+e+"deg)"},toUpTemp(){let e=this.info.main["temp"];return Math.round(e)},feelLike(){let e=this.info.main["feels_like"];return Math.round(e)},minTemp(){let e=this.info.main["temp_min"];return Math.round(e)},maxTemp(){let e=this.info.main["temp_max"];return Math.round(e)},descrTemp(){let e=this.info.weather[0].description;e=e.split("");let t=String(e[0]).toUpperCase();return e.splice(0,1),e.unshift(t),e.join("")},visability(){return this.info.visibility/1e3},latitude(){return this.info.coord.lat},longitude(){return this.info.coord.lon}}};const Bt=(0,b.Z)(Zt,[["render",Xt],["__scopeId","data-v-2f4c5e93"]]);var Ht=Bt;const Jt={class:"container is-max-desktop"},Pt={class:"notification is-light"},Rt={href:"https://openweathermap.org/"},Et=["title"],Gt=["src"],Kt={href:"https://t.me/crumb789"},Vt={class:"footer-icon image is-64x64"},Yt=["src"];function Qt(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",Jt,[(0,a._)("div",Pt,[(0,a._)("a",Rt,[(0,a._)("div",{class:"footer-icon image is-64x64",title:o.titleLink},[(0,a._)("img",{src:o.WeatherIcon,alt:""},null,8,Gt)],8,Et)]),(0,a._)("a",Kt,[(0,a._)("div",Vt,[(0,a._)("img",{src:o.Crumb,alt:""},null,8,Yt)])])])])}var ei=i.p+"img/crumb-logo.962c51d5.png",ti=i.p+"img/unnamed.0c3f8631.svg",ii={data(){return{WeatherIcon:ti,Crumb:ei,titleLink:"The information is taken from the OpenWeather website"}}};const ni=(0,b.Z)(ii,[["render",Qt]]);var ai=ni;const oi={class:"load"},ri=(0,a.uE)('<div class="sunset animate__animated" data-v-17be223e><i class="bi bi-cloud-sun-fill" data-v-17be223e></i></div><div class="sun animate__animated animate__fadeInRightBig" data-v-17be223e><i class="bi bi-brightness-high-fill" data-v-17be223e></i></div><div class="moon animate__animated animate__fadeInRightBig" data-v-17be223e><i class="bi bi-cloud-moon-fill" data-v-17be223e></i></div>',3),si=[ri];function li(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",oi,[o.loadBlock?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{loadAnim:o.loadAnim,loadClose:o.loadBack},"wrapper"])},si,2)):(0,a.kq)("",!0)])}var di={data(){return{loadBlock:!0,loadAnim:!0,loadBack:!1}},methods:{loadAnimGo(){setTimeout((()=>{this.loadAnim=!1,this.loadBack=!0}),2200),setTimeout((()=>{this.loadBlock=!1,this.$emit("load-icon-close")}),2500)}},mounted(){this.loadAnimGo()}};const ci=(0,b.Z)(di,[["render",li],["__scopeId","data-v-17be223e"]]);var pi=ci;const ui=e=>((0,a.dD)("data-v-1614ec08"),e=e(),(0,a.Cn)(),e),mi={class:"cardis animate__animated animate__zoomIn"},hi=ui((()=>(0,a._)("i",{class:"bi bi-bookmark-check",style:{color:"#ab3939"}},null,-1))),gi=[hi],wi=ui((()=>(0,a._)("i",{class:"bi bi-bookmark",style:{color:"#ab3939"}},null,-1))),fi=[wi],vi={class:"weather"},ki={key:0,class:"wrapper-temp animate__animated animate__flipInX"},yi={key:0},_i=ui((()=>(0,a._)("span",null,"°F",-1))),bi={class:"weather-descr"},Ci={key:0,class:"weather-descr-icon"},Ti=ui((()=>(0,a._)("i",{class:"bi bi-cloud-sun"},null,-1))),Di=[Ti],Ui={key:1,class:"weather-descr-icon"},Li=ui((()=>(0,a._)("i",{class:"bi bi-clouds"},null,-1))),Ii=[Li],xi={key:2,class:"weather-descr-icon"},zi=ui((()=>(0,a._)("i",{class:"bi bi-cloud-drizzle"},null,-1))),Si=[zi],qi={key:3,class:"weather-descr-icon"},Oi=ui((()=>(0,a._)("i",{class:"bi bi-cloudy"},null,-1))),Fi=[Oi],ji={key:4,class:"weather-descr-icon"},$i=ui((()=>(0,a._)("i",{class:"bi bi-brightness-high"},null,-1))),Wi=[$i],Mi={key:5,class:"weather-descr-icon"},Ai=ui((()=>(0,a._)("i",{class:"bi bi-cloud-lightning-rain"},null,-1))),Ni=[Ai],Xi={key:6,class:"weather-descr-icon"},Zi=ui((()=>(0,a._)("i",{class:"bi bi-cloud-fog"},null,-1))),Bi=[Zi],Hi={class:"weather-temp-feel"},Ji={key:0},Pi={key:1},Ri={class:"weather-wind"},Ei={class:"mr-2"},Gi=ui((()=>(0,a._)("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"},null,-1))),Ki=[Gi],Vi={key:1,class:"wrapper-more animate__animated animate__flipInX"},Yi={class:"weather-temp-min"},Qi={key:0},en={key:1},tn={class:"weather-temp-max"},nn={key:0},an={key:1},on={class:"weather-pressure"},rn={class:"weather-humidity"},sn={class:"weather-visibility"},ln={class:"weather-latitude"},dn={class:"weather-longitude"};function cn(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",mi,[(0,a.WI)(e.$slots,"default",{},void 0,!0),(0,a._)("div",{onClick:t[6]||(t[6]=(...t)=>e.mouseOver&&e.mouseOver(...t)),class:"box mt-4",ref:"card",style:(0,h.j5)({maxWidth:"500px",position:"relative",minHeight:"240px",cursor:"pointer",transform:r.computedPos})},[(0,a._)("div",{onClick:t[3]||(t[3]=t=>e.$emit("update-info")),class:"name title is-4"},[(0,a.Uk)((0,h.zw)(i.currentCard.name)+" "+(0,h.zw)(i.currentCard.sys["country"])+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=(...e)=>r.updateTempLaunch&&r.updateTempLaunch(...e)),style:{cursor:"pointer"},class:(0,h.C_)([{rotate:o.updateTemp},"bi bi-arrow-clockwise"])},null,2),o.moreInfoOpen&&o.bookmark?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:t[1]||(t[1]=e=>r.deletingCard(i.currentCard.id)),class:"card-delete",title:"Удалить"},gi)):(0,a.kq)("",!0),o.moreInfoOpen&&0==o.bookmark?((0,a.wg)(),(0,a.iD)("div",{key:1,onClick:t[2]||(t[2]=e=>this.bookmark=!0),class:"card-delete-cancel",title:"Удалить"},fi)):(0,a.kq)("",!0)]),(0,a._)("div",vi,[o.moreInfoOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",ki,["metric"===i.units?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{verycold:r.toUpTemp>-100&&r.toUpTemp<-10,soblue:r.toUpTemp>-11&&r.toUpTemp<6,blue:r.toUpTemp>5&&r.toUpTemp<18,yellow:r.toUpTemp>17&&r.toUpTemp<28,red:r.toUpTemp>27},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(r.toUpTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",yi,"°C")):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,h.C_)([{verycold:r.toUpTemp>-100&&r.toUpTemp<14,soblue:r.toUpTemp>13&&r.toUpTemp<51,blue:r.toUpTemp>41&&r.toUpTemp<64,yellow:r.toUpTemp>63&&r.toUpTemp<82,red:r.toUpTemp>81},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(r.toUpTemp),1),_i],2)),(0,a._)("div",bi,[(0,a.Uk)((0,h.zw)(r.descrTemp)+" ",1),"Облачно с прояснениями"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",Ci,Di)):(0,a.kq)("",!0),"Переменная облачность"===r.descrTemp||"Небольшая облачность"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",Ui,Ii)):(0,a.kq)("",!0),"Небольшой проливной дождь"===r.descrTemp||"Дождь"===r.descrTemp||"Небольшой дождь"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",xi,Si)):(0,a.kq)("",!0),"Пасмурно"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",qi,Fi)):(0,a.kq)("",!0),"Ясно"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",ji,Wi)):(0,a.kq)("",!0),"Гроза"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",Mi,Ni)):(0,a.kq)("",!0),"Плотный туман"===r.descrTemp?((0,a.wg)(),(0,a.iD)("div",Xi,Bi)):(0,a.kq)("",!0)]),(0,a._)("div",Hi,[(0,a.Uk)(" Ощущается как "+(0,h.zw)(r.feelLike),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Ji,"°C")):((0,a.wg)(),(0,a.iD)("span",Pi,"°F"))]),(0,a._)("div",Ri,[(0,a._)("span",Ei,[(0,a.Uk)("Ветер "+(0,h.zw)(i.currentCard.wind["speed"])+" км/ч ",1),((0,a.wg)(),(0,a.iD)("svg",{style:(0,h.j5)({transform:r.degArrowWind,fontSize:"20px",color:"#0065bb"}),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right",viewBox:"0 0 16 16"},Ki,4))])])])),o.moreInfoOpen?((0,a.wg)(),(0,a.iD)("div",Vi,[(0,a._)("div",Yi,[(0,a.Uk)(" Мин "+(0,h.zw)(r.minTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Qi,"°C")):((0,a.wg)(),(0,a.iD)("span",en,"°F"))]),(0,a._)("div",tn,[(0,a.Uk)(" Макс "+(0,h.zw)(r.maxTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",nn,"°C")):((0,a.wg)(),(0,a.iD)("span",an,"°F"))]),(0,a._)("div",on," Давление "+(0,h.zw)(i.currentCard.main["pressure"])+" мбар ",1),(0,a._)("div",rn," Влажность "+(0,h.zw)(i.currentCard.main["humidity"])+" % ",1),(0,a._)("div",sn," Видимость "+(0,h.zw)(r.visability)+" км ",1),(0,a._)("div",ln," Широта "+(0,h.zw)(r.latitude),1),(0,a._)("div",dn," Долгота "+(0,h.zw)(r.longitude),1)])):(0,a.kq)("",!0)]),(0,a._)("i",{style:(0,h.j5)(o.moreIcon),onClick:t[4]||(t[4]=e=>o.moreInfoOpen=!o.moreInfoOpen),class:"bi bi-three-dots"},null,4),(0,a._)("div",{class:"units",onClick:t[5]||(t[5]=t=>e.$emit("change-units"))},(0,h.zw)(i.units),1)],4)])}var pn={name:"card-list-ru",props:{currentCard:{type:Object},units:{type:String}},data(){return{moreIcon:{position:"absolute",right:"20px",bottom:"10px",fontSize:"20px",cursor:"pointer"},moreInfoOpen:!1,updateTemp:!1,posX:void 0,posY:void 0,prevCard:{transform:"translateX(100px)"},bookmark:!0}},methods:{updateTempLaunch(){this.updateTemp=!0,setTimeout((()=>{this.updateTemp=!1}),2e3)},deletingCard(e){this.$emit("delete-this-card",e)}},computed:{degArrowWind(){let e=0+this.currentCard.wind["deg"];return"rotate("+e+"deg)"},toUpTemp(){let e=this.currentCard.main["temp"];return Math.round(e)},feelLike(){let e=this.currentCard.main["feels_like"];return Math.round(e)},minTemp(){let e=this.currentCard.main["temp_min"];return Math.round(e)},maxTemp(){let e=this.currentCard.main["temp_max"];return Math.round(e)},descrTemp(){let e=this.currentCard.weather[0].description;e=e.split("");let t=String(e[0]).toUpperCase();return e.splice(0,1),e.unshift(t),e.join("")},visability(){return this.currentCard.visibility/1e3},latitude(){return this.currentCard.coord.lat},longitude(){return this.currentCard.coord.lon},computedPos(){let e;return this.posX<1150&&(e=-this.posX/10),this.posX>1450&&(e=this.posX/10),`translateX(${e}px)`}}};const un=(0,b.Z)(pn,[["render",cn],["__scopeId","data-v-1614ec08"]]);var mn=un;const hn={class:"slide-wrapper"};function gn(e,t){return(0,a.wg)(),(0,a.iD)("div",hn,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}const wn={},fn=(0,b.Z)(wn,[["render",gn],["__scopeId","data-v-4f9ea9a9"]]);var vn=fn;function kn(e,t,i,n,o,r){return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["slide-dot",{active:i.item.id==i.currentCard.id}]),onClick:t[0]||(t[0]=t=>e.$emit("swipe-card-to-dot",i.index))},null,2)}var yn={name:"slider-dot",props:{item:{type:Object},index:{type:Number},currentCard:{type:Object}},data(){return{}}};const _n=(0,b.Z)(yn,[["render",kn],["__scopeId","data-v-21215867"]]);var bn=_n,Cn=i(6265),Tn=i.n(Cn),Dn={name:"App",components:{HeadComp:T,CardCity:be,FormNewCity:ze,PlaceholderComp:je,ErrorCard:Ne,CityLoad:Je,CardEn:Ht,FooterComp:ai,LoaderCard:pi,CardsListRu:mn,SliderDotsList:vn,SliderDot:bn},data(){return{apiKey:"93b55014fe1c000569089e576e885abf",loadIcon:!0,city:null,geoData:[{latitude:"",longitude:""}],info:[],cardLoad:!1,lang:"ru",errorShow:!1,units:"metric",geoInfo:[],infoList:[],countCard:0}},methods:{async getData(e,t){let i=`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=${this.lang}&units=${this.units}&appid=${this.apiKey}`;Tn().get(i).then((e=>{if(this.info=e.data,0==this.infoList.length)this.infoList.push(this.info);else{let e=[];if(this.infoList.forEach((t=>e.push(t.id))),e.includes(this.info.id))return this.infoList[t]=this.info;this.infoList.unshift(this.info),this.countCard=0}this.cardLoad=!0,this.errorShow=!1})).catch((e=>{console.log(e),this.errorShow=!0}))},getLocation(){navigator.geolocation.getCurrentPosition((e=>{this.geoData[0].latitude=e.coords.latitude,this.geoData[0].longitude=e.coords.longitude,this.getDataFromLocation()}))},async getDataFromLocation(){let e=this.geoData[0].latitude,t=this.geoData[0].longitude,i=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=${this.apiKey}&units=${this.units}&lang=${this.lang}`;Tn().get(i).then((e=>{this.city=e.data.name,this.geoInfo=e.data,this.cardLoad=!0}))},newCityReq(e){this.city=e,this.getData(e)},changeLang(){"ru"===this.lang?this.lang="en":this.lang="ru",this.getDataFromLocation()},changeUnits(e,t,i){"metric"===this.units?this.units="imperial":this.units="metric","geo"==e&&this.getDataFromLocation(),"currentCard"==e&&this.getData(t,i)},loadIconClose(){this.loadIcon=!1},deleteCardFromInfoList(e){this.infoList=this.infoList.filter((t=>t.id!==e))},prevCard(){0==this.countCard?this.countCard=this.infoList.length-1:this.countCard--},nextCard(){this.countCard==this.infoList.length-1?this.countCard=0:this.countCard++},swipeCardToDot(e){this.countCard=e}},computed:{cityChanged(){let e=String(this.city).toUpperCase();return e},currentCard(){return this.infoList?this.infoList[this.countCard]:console.log("false")}},mounted(){null!=this.city&&this.getData(),setTimeout((()=>{""!==this.geoData[0].latitude&&this.getDataFromLocation()}),10),localStorage.city&&(this.city=JSON.parse(localStorage.city)),localStorage.lang&&(this.lang=JSON.parse(localStorage.lang)),sessionStorage.loadIcon&&(this.loadIcon=JSON.parse(sessionStorage.loadIcon)),localStorage.geoData&&(this.geoData=JSON.parse(localStorage.geoData)),localStorage.infoList&&(this.infoList=JSON.parse(localStorage.infoList))},watch:{city:{handler(e){localStorage.city=JSON.stringify(e)},deep:!0},lang:{handler(e){localStorage.lang=JSON.stringify(e)},deep:!0},loadIcon:{handler(e){sessionStorage.loadIcon=JSON.stringify(e)},deep:!0},geoData:{handler(e){localStorage.geoData=JSON.stringify(e)},deep:!0},infoList:{handler(e){localStorage.infoList=JSON.stringify(e)},deep:!0}}};const Un=(0,b.Z)(Dn,[["render",m]]);var Ln=Un;(0,n.ri)(Ln).mount("#app")}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,i),o.exports}i.m=e,function(){var e=[];i.O=function(t,n,a,o){if(!n){var r=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],o=e[c][2];for(var s=!0,l=0;l<n.length;l++)(!1&o||r>=o)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(c--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,a,o]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/weather-app/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,r=n[0],s=n[1],l=n[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(a in s)i.o(s,a)&&(i.m[a]=s[a]);if(l)var c=l(i)}for(t&&t(n);d<r.length;d++)o=r[d],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},n=self["webpackChunkapp_weather"]=self["webpackChunkapp_weather"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(4649)}));n=i.O(n)})();
//# sourceMappingURL=app.ec958e92.js.map