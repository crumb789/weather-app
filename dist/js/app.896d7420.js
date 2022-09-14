(function(){"use strict";var e={6965:function(e,t,i){var n=i(9242),a=i(3396);const s={key:0,class:"main animate__animated animate__fadeIn"},o={class:"container"},r=(0,a._)("i",{class:"bi bi-chevron-left"},null,-1),l=[r],c=(0,a._)("i",{class:"bi bi-chevron-right"},null,-1),d=[c],p={key:1},u={key:2};function m(e,t,i,r,c,m){const h=(0,a.up)("head-comp"),g=(0,a.up)("form-new-city"),w=(0,a.up)("card-city"),f=(0,a.up)("card-en"),v=((0,a.up)("city-load"),(0,a.up)("cards-list-ru")),y=(0,a.up)("slider-dot"),k=(0,a.up)("slider-dots-list"),_=(0,a.up)("error-card"),b=(0,a.up)("placeholderComp"),C=(0,a.up)("loader-card"),T=(0,a.up)("footer-comp");return(0,a.wg)(),(0,a.iD)(a.HY,null,[c.loadIcon?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("section",s,[(0,a._)("div",o,[(0,a.Wm)(h,{class:"fixed",lang:c.lang,onChangeLang:m.changeLang},null,8,["lang","onChangeLang"]),(0,a.Wm)(g,{lang:c.lang,onNewCityReq:m.newCityReq,onGetLocation:m.getLocation},null,8,["lang","onNewCityReq","onGetLocation"]),c.cardLoad&&"ru"===c.lang?((0,a.wg)(),(0,a.j4)(w,{key:0,info:c.geoInfo,units:c.units,onUpdateInfo:m.getDataFromLocation,onChangeUnits:m.changeUnits},null,8,["info","units","onUpdateInfo","onChangeUnits"])):(0,a.kq)("",!0),c.cardLoad&&"en"===c.lang?((0,a.wg)(),(0,a.j4)(f,{key:1,info:c.geoInfo,units:c.units,onUpdateInfo:m.getDataFromLocation,onChangeUnits:m.changeUnits},null,8,["info","units","onUpdateInfo","onChangeUnits"])):(0,a.kq)("",!0),(c.cardLoad,(0,a.kq)("",!0)),(0,a.kq)("",!0),m.currentCard?((0,a.wg)(),(0,a.j4)(v,{key:4,units:c.units,currentCard:m.currentCard,onDeleteThisCard:m.deleteCardFromInfoList,onPrevSlide:m.prevCard,onNextSlide:m.nextCard,onUpdateInfo:t[2]||(t[2]=e=>m.getData(m.currentCard.name)),onChangeUnits:m.changeUnits},{default:(0,a.w5)((()=>[(0,a.wy)((0,a._)("button",{onClick:t[0]||(t[0]=(...e)=>m.prevCard&&m.prevCard(...e)),id:"btn-prev",class:"button is-rounded is-ghost"},l,512),[[n.F8,c.infoList.length>1]]),(0,a.wy)((0,a._)("button",{onClick:t[1]||(t[1]=(...e)=>m.nextCard&&m.nextCard(...e)),id:"btn-next",class:"button is-rounded is-ghost"},d,512),[[n.F8,c.infoList.length>1]]),(0,a.Wm)(k,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.infoList,((e,t)=>((0,a.wg)(),(0,a.j4)(y,{key:e.id,item:e,index:t,currentCard:m.currentCard,onSwipeCardToDot:m.swipeCardToDot},null,8,["item","index","currentCard","onSwipeCardToDot"])))),128))])),_:1})])),_:1},8,["units","currentCard","onDeleteThisCard","onPrevSlide","onNextSlide","onChangeUnits"])):(0,a.kq)("",!0),c.errorShow?((0,a.wg)(),(0,a.j4)(_,{key:5})):(0,a.kq)("",!0),c.city?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(b,{key:6}))])])),c.loadIcon?((0,a.wg)(),(0,a.iD)("section",p,[(0,a.Wm)(C,{onLoadIconClose:m.loadIconClose},null,8,["onLoadIconClose"])])):(0,a.kq)("",!0),c.loadIcon?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("footer",u,[(0,a.Wm)(T)]))],64)}i(6699);var h=i(7139);const g={class:"mb-4"},w={key:0,class:"header title is-1"},f=(0,a.Uk)("Погода "),v={key:1,class:"header title is-1"},y=(0,a.Uk)("Weather ");function k(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",g,["ru"===i.lang?((0,a.wg)(),(0,a.iD)("h1",w,[f,(0,a._)("span",{style:{cursor:"pointer"},onClick:t[0]||(t[0]=t=>e.$emit("change-lang")),class:"subtitle is-5"},(0,h.zw)(i.lang),1)])):(0,a.kq)("",!0),"en"===i.lang?((0,a.wg)(),(0,a.iD)("h1",v,[y,(0,a._)("span",{style:{cursor:"pointer"},onClick:t[1]||(t[1]=t=>e.$emit("change-lang")),class:"subtitle is-5"},(0,h.zw)(i.lang),1)])):(0,a.kq)("",!0)])}var _={name:"head-component",props:{lang:{type:String}},data(){return{}}},b=i(89);const C=(0,b.Z)(_,[["render",k]]);var T=C;const D={class:"cardis animate__animated animate__zoomIn"},U={class:"box mt-4",style:{maxWidth:"500px",position:"relative",minHeight:"240px",backgroundColor:"#f4fdfd"}},L=(0,a._)("i",{class:"bi bi-geo-alt"},null,-1),I={class:"weather"},x={key:0,class:"wrapper-temp animate__animated animate__flipInX"},z={key:0},S=(0,a._)("span",null,"°F",-1),q={class:"weather-descr"},O={key:0,class:"weather-descr-icon"},F=(0,a._)("i",{class:"bi bi-cloud-sun"},null,-1),j=[F],$={key:1,class:"weather-descr-icon"},W=(0,a._)("i",{class:"bi bi-clouds"},null,-1),M=[W],A={key:2,class:"weather-descr-icon"},N=(0,a._)("i",{class:"bi bi-cloud-drizzle"},null,-1),X=[N],Z={key:3,class:"weather-descr-icon"},B=(0,a._)("i",{class:"bi bi-cloudy"},null,-1),H=[B],J={key:4,class:"weather-descr-icon"},P=(0,a._)("i",{class:"bi bi-brightness-high"},null,-1),R=[P],E={key:5,class:"weather-descr-icon"},G=(0,a._)("i",{class:"bi bi-cloud-lightning-rain"},null,-1),K=[G],V={key:6,class:"weather-descr-icon"},Y=(0,a._)("i",{class:"bi bi-cloud-fog"},null,-1),Q=[Y],ee={class:"weather-temp-feel"},te={key:0},ie={key:1},ne={class:"weather-wind"},ae={class:"mr-2"},se=(0,a._)("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"},null,-1),oe=[se],re={key:1,class:"wrapper-more animate__animated animate__flipInX"},le={class:"weather-temp-min"},ce={key:0},de={key:1},pe={class:"weather-temp-max"},ue={key:0},me={key:1},he={class:"weather-pressure"},ge={class:"weather-humidity"},we={class:"weather-visibility"},fe={class:"weather-latitude"},ve={class:"weather-longitude"};function ye(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",D,[(0,a._)("div",U,[(0,a._)("div",{onClick:t[1]||(t[1]=t=>e.$emit("update-info")),class:"name title is-4"},[L,(0,a.Uk)(" "+(0,h.zw)(i.info.name)+" "+(0,h.zw)(i.info.sys["country"])+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=(...e)=>o.updateTempLaunch&&o.updateTempLaunch(...e)),style:{cursor:"pointer"},class:(0,h.C_)([{rotate:s.updateTemp},"bi bi-arrow-clockwise"])},null,2)]),(0,a._)("div",I,[s.moreInfoOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",x,["metric"===i.units?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{verycold:o.toUpTemp>-100&&o.toUpTemp<-10,soblue:o.toUpTemp>-11&&o.toUpTemp<6,blue:o.toUpTemp>5&&o.toUpTemp<18,yellow:o.toUpTemp>17&&o.toUpTemp<28,red:o.toUpTemp>27},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(o.toUpTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",z,"°C")):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,h.C_)([{verycold:o.toUpTemp>-100&&o.toUpTemp<14,soblue:o.toUpTemp>13&&o.toUpTemp<51,blue:o.toUpTemp>41&&o.toUpTemp<64,yellow:o.toUpTemp>63&&o.toUpTemp<82,red:o.toUpTemp>81},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(o.toUpTemp),1),S],2)),(0,a._)("div",q,[(0,a.Uk)((0,h.zw)(o.descrTemp)+" ",1),"Облачно с прояснениями"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",O,j)):(0,a.kq)("",!0),"Переменная облачность"===o.descrTemp||"Небольшая облачность"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",$,M)):(0,a.kq)("",!0),"Небольшой проливной дождь"===o.descrTemp||"Дождь"===o.descrTemp||"Небольшой дождь"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",A,X)):(0,a.kq)("",!0),"Пасмурно"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",Z,H)):(0,a.kq)("",!0),"Ясно"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",J,R)):(0,a.kq)("",!0),"Гроза"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",E,K)):(0,a.kq)("",!0),"Плотный туман"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",V,Q)):(0,a.kq)("",!0)]),(0,a._)("div",ee,[(0,a.Uk)(" Ощущается как "+(0,h.zw)(o.feelLike),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",te,"°C")):((0,a.wg)(),(0,a.iD)("span",ie,"°F"))]),(0,a._)("div",ne,[(0,a._)("span",ae,[(0,a.Uk)("Ветер "+(0,h.zw)(i.info.wind["speed"])+" км/ч ",1),((0,a.wg)(),(0,a.iD)("svg",{style:(0,h.j5)({transform:o.degArrowWind,fontSize:"20px",color:"#0065bb"}),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right",viewBox:"0 0 16 16"},oe,4))])])])),s.moreInfoOpen?((0,a.wg)(),(0,a.iD)("div",re,[(0,a._)("div",le,[(0,a.Uk)(" Мин "+(0,h.zw)(o.minTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",ce,"°C")):((0,a.wg)(),(0,a.iD)("span",de,"°F"))]),(0,a._)("div",pe,[(0,a.Uk)(" Макс "+(0,h.zw)(o.maxTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",ue,"°C")):((0,a.wg)(),(0,a.iD)("span",me,"°F"))]),(0,a._)("div",he," Давление "+(0,h.zw)(i.info.main["pressure"])+" мбар ",1),(0,a._)("div",ge," Влажность "+(0,h.zw)(i.info.main["humidity"])+" % ",1),(0,a._)("div",we," Видимость "+(0,h.zw)(o.visability)+" км ",1),(0,a._)("div",fe," Широта "+(0,h.zw)(o.latitude),1),(0,a._)("div",ve," Долгота "+(0,h.zw)(o.longitude),1)])):(0,a.kq)("",!0)]),(0,a._)("i",{style:(0,h.j5)(s.moreIcon),onClick:t[2]||(t[2]=e=>s.moreInfoOpen=!s.moreInfoOpen),class:"bi bi-three-dots"},null,4),(0,a._)("div",{class:"units",onClick:t[3]||(t[3]=t=>e.$emit("change-units"))},(0,h.zw)(i.units),1)])])}var ke={name:"card-city-ru",props:{info:{type:Object},units:{type:String}},data(){return{moreIcon:{position:"absolute",right:"20px",bottom:"10px",fontSize:"20px",cursor:"pointer"},moreInfoOpen:!1,updateTemp:!1}},methods:{updateTempLaunch(){this.updateTemp=!0,setTimeout((()=>{this.updateTemp=!1}),2e3)}},computed:{degArrowWind(){let e=0+this.info.wind["deg"];return"rotate("+e+"deg)"},toUpTemp(){let e=this.info.main["temp"];return Math.round(e)},feelLike(){let e=this.info.main["feels_like"];return Math.round(e)},minTemp(){let e=this.info.main["temp_min"];return Math.round(e)},maxTemp(){let e=this.info.main["temp_max"];return Math.round(e)},descrTemp(){let e=this.info.weather[0].description;e=e.split("");let t=String(e[0]).toUpperCase();return e.splice(0,1),e.unshift(t),e.join("")},visability(){return this.info.visibility/1e3},latitude(){return this.info.coord.lat},longitude(){return this.info.coord.lon}}};const _e=(0,b.Z)(ke,[["render",ye]]);var be=_e;const Ce=e=>((0,a.dD)("data-v-269158c4"),e=e(),(0,a.Cn)(),e),Te={class:"form mt-4 is-flex is-justify-content-center p-2"},De=Ce((()=>(0,a._)("i",{class:"bi bi-geo"},null,-1))),Ue=[De];function Le(e,t,i,s,o,r){return(0,a.wg)(),(0,a.iD)("div",Te,[(0,a._)("form",{class:"type-city",onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>r.onSubmit&&r.onSubmit(...e)),["prevent"]))},["ru"===i.lang?(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=e=>o.newCity=e),class:"input is-info",type:"text",placeholder:"Город..."},null,512)),[[n.nr,o.newCity]]):(0,a.wy)(((0,a.wg)(),(0,a.iD)("input",{key:1,"onUpdate:modelValue":t[1]||(t[1]=e=>o.newCity=e),class:"input is-info",type:"text",placeholder:"City..."},null,512)),[[n.nr,o.newCity]])],32),(0,a._)("button",{class:"card-header button is-primary is-light location border",onClick:t[3]||(t[3]=(...e)=>r.getLocation&&r.getLocation(...e))},Ue)])}var Ie={name:"form-new-city",props:{lang:{type:String}},data(){return{newCity:""}},methods:{onSubmit(){this.$emit("new-city-req",this.newCity),this.newCity=""},getLocation(){this.$emit("get-location")}}};const xe=(0,b.Z)(Ie,[["render",Le],["__scopeId","data-v-269158c4"]]);var ze=xe;const Se={class:"placeholder mt-4 title is-4"};function qe(e,t){return(0,a.wg)(),(0,a.iD)("div",Se," Укажите город ")}const Oe={},Fe=(0,b.Z)(Oe,[["render",qe]]);var je=Fe;const $e={class:"error mt-4 title is-4 animate__animated animate__shakeX"};function We(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",$e," Город не найден ")}var Me={data(){return{}}};const Ae=(0,b.Z)(Me,[["render",We],["__scopeId","data-v-d13997f8"]]);var Ne=Ae;const Xe=(0,a._)("i",{style:{cursor:"pointer"},class:"bi bi-arrow-clockwise"},null,-1);function Ze(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",{onClick:t[0]||(t[0]=t=>e.$emit("update-info")),class:"city-load title is-4 mt-4"},[(0,a.Uk)((0,h.zw)(i.cityChanged)+" ",1),Xe])}var Be={name:"city-load",props:{cityChanged:{type:String}},data(){return{}}};const He=(0,b.Z)(Be,[["render",Ze]]);var Je=He;const Pe=e=>((0,a.dD)("data-v-2f4c5e93"),e=e(),(0,a.Cn)(),e),Re={class:"cardis animate__animated animate__zoomIn"},Ee={class:"box mt-4",style:{maxWidth:"500px",position:"relative",minHeight:"240px",backgroundColor:"#f4fdfd"}},Ge=Pe((()=>(0,a._)("i",{class:"bi bi-geo-alt"},null,-1))),Ke={class:"weather"},Ve={key:0,class:"wrapper-temp animate__animated animate__flipInX"},Ye={key:0},Qe=Pe((()=>(0,a._)("span",null,"°F",-1))),et={class:"weather-descr"},tt={key:0,class:"weather-descr-icon"},it=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-sun"},null,-1))),nt=[it],at={key:1,class:"weather-descr-icon"},st=Pe((()=>(0,a._)("i",{class:"bi bi-clouds"},null,-1))),ot=[st],rt={key:2,class:"weather-descr-icon"},lt=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-drizzle"},null,-1))),ct=[lt],dt={key:3,class:"weather-descr-icon"},pt=Pe((()=>(0,a._)("i",{class:"bi bi-cloudy"},null,-1))),ut=[pt],mt={key:4,class:"weather-descr-icon"},ht=Pe((()=>(0,a._)("i",{class:"bi bi-brightness-high"},null,-1))),gt=[ht],wt={key:5,class:"weather-descr-icon"},ft=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-lightning-rain"},null,-1))),vt=[ft],yt={key:6,class:"weather-descr-icon"},kt=Pe((()=>(0,a._)("i",{class:"bi bi-cloud-fog"},null,-1))),_t=[kt],bt={class:"weather-temp-feel"},Ct={key:0},Tt={key:1},Dt={class:"weather-wind"},Ut={class:"mr-2"},Lt=Pe((()=>(0,a._)("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"},null,-1))),It=[Lt],xt={key:1,class:"wrapper-more animate__animated animate__flipInX"},zt={class:"weather-temp-min"},St={key:0},qt={key:1},Ot={class:"weather-temp-max"},Ft={key:0},jt={key:1},$t={class:"weather-pressure"},Wt={class:"weather-humidity"},Mt={class:"weather-visibility"},At={class:"weather-latitude"},Nt={class:"weather-longitude"};function Xt(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",Re,[(0,a._)("div",Ee,[(0,a._)("div",{onClick:t[1]||(t[1]=t=>e.$emit("update-info")),class:"name title is-4"},[Ge,(0,a.Uk)(" "+(0,h.zw)(i.info.name)+" "+(0,h.zw)(i.info.sys["country"])+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=(...e)=>o.updateTempLaunch&&o.updateTempLaunch(...e)),style:{cursor:"pointer"},class:(0,h.C_)([{rotate:s.updateTemp},"bi bi-arrow-clockwise"])},null,2)]),(0,a._)("div",Ke,[s.moreInfoOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",Ve,["metric"===i.units?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{verycold:o.toUpTemp>-100&&o.toUpTemp<-10,soblue:o.toUpTemp>-11&&o.toUpTemp<6,blue:o.toUpTemp>5&&o.toUpTemp<18,yellow:o.toUpTemp>17&&o.toUpTemp<28,red:o.toUpTemp>27},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(o.toUpTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Ye,"°C")):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,h.C_)([{verycold:o.toUpTemp>-100&&o.toUpTemp<14,soblue:o.toUpTemp>13&&o.toUpTemp<51,blue:o.toUpTemp>41&&o.toUpTemp<64,yellow:o.toUpTemp>63&&o.toUpTemp<82,red:o.toUpTemp>81},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(o.toUpTemp),1),Qe],2)),(0,a._)("div",et,[(0,a.Uk)((0,h.zw)(o.descrTemp)+" ",1),"Broken clouds"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",tt,nt)):(0,a.kq)("",!0),"Scattered clouds"===o.descrTemp||"Few clouds"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",at,ot)):(0,a.kq)("",!0),"Light intensity shower rain"===o.descrTemp||"Moderate rain"===o.descrTemp||"Light rain"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",rt,ct)):(0,a.kq)("",!0),"Overcast clouds"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",dt,ut)):(0,a.kq)("",!0),"Clear sky"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",mt,gt)):(0,a.kq)("",!0),"Thunderstorm"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",wt,vt)):(0,a.kq)("",!0),"Fog"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",yt,_t)):(0,a.kq)("",!0)]),(0,a._)("div",bt,[(0,a.Uk)(" Feel like "+(0,h.zw)(o.feelLike),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Ct,"°C")):((0,a.wg)(),(0,a.iD)("span",Tt,"°F"))]),(0,a._)("div",Dt,[(0,a._)("span",Ut,[(0,a.Uk)("Wind "+(0,h.zw)(i.info.wind["speed"])+" km/h ",1),((0,a.wg)(),(0,a.iD)("svg",{style:(0,h.j5)({transform:o.degArrowWind,fontSize:"20px",color:"#0065bb"}),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right",viewBox:"0 0 16 16"},It,4))])])])),s.moreInfoOpen?((0,a.wg)(),(0,a.iD)("div",xt,[(0,a._)("div",zt,[(0,a.Uk)(" Min "+(0,h.zw)(o.minTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",St,"°C")):((0,a.wg)(),(0,a.iD)("span",qt,"°F"))]),(0,a._)("div",Ot,[(0,a.Uk)(" Max "+(0,h.zw)(o.maxTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Ft,"°C")):((0,a.wg)(),(0,a.iD)("span",jt,"°F"))]),(0,a._)("div",$t," Pressure "+(0,h.zw)(i.info.main["pressure"])+" hPa ",1),(0,a._)("div",Wt," Humidity "+(0,h.zw)(i.info.main["humidity"])+" % ",1),(0,a._)("div",Mt," Visibility "+(0,h.zw)(o.visability)+" km ",1),(0,a._)("div",At," Latitude "+(0,h.zw)(o.latitude),1),(0,a._)("div",Nt," Longitude "+(0,h.zw)(o.longitude),1)])):(0,a.kq)("",!0)]),(0,a._)("i",{style:(0,h.j5)(s.moreIcon),onClick:t[2]||(t[2]=e=>s.moreInfoOpen=!s.moreInfoOpen),class:"bi bi-three-dots"},null,4),(0,a._)("div",{class:"units",onClick:t[3]||(t[3]=t=>e.$emit("change-units"))},(0,h.zw)(i.units),1)])])}var Zt={name:"card-city-en",props:{info:{type:Object},units:{type:String}},data(){return{moreIcon:{position:"absolute",right:"20px",bottom:"10px",fontSize:"20px",cursor:"pointer"},moreInfoOpen:!1,updateTemp:!1}},methods:{updateTempLaunch(){this.updateTemp=!0,setTimeout((()=>{this.updateTemp=!1}),2e3)}},computed:{degArrowWind(){let e=0+this.info.wind["deg"];return"rotate("+e+"deg)"},toUpTemp(){let e=this.info.main["temp"];return Math.round(e)},feelLike(){let e=this.info.main["feels_like"];return Math.round(e)},minTemp(){let e=this.info.main["temp_min"];return Math.round(e)},maxTemp(){let e=this.info.main["temp_max"];return Math.round(e)},descrTemp(){let e=this.info.weather[0].description;e=e.split("");let t=String(e[0]).toUpperCase();return e.splice(0,1),e.unshift(t),e.join("")},visability(){return this.info.visibility/1e3},latitude(){return this.info.coord.lat},longitude(){return this.info.coord.lon}}};const Bt=(0,b.Z)(Zt,[["render",Xt],["__scopeId","data-v-2f4c5e93"]]);var Ht=Bt;const Jt={class:"container is-max-desktop"},Pt={class:"notification is-light"},Rt={href:"https://openweathermap.org/"},Et=["title"],Gt=["src"],Kt={href:"https://t.me/crumb789"},Vt={class:"footer-icon image is-64x64"},Yt=["src"];function Qt(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",Jt,[(0,a._)("div",Pt,[(0,a._)("a",Rt,[(0,a._)("div",{class:"footer-icon image is-64x64",title:s.titleLink},[(0,a._)("img",{src:s.WeatherIcon,alt:""},null,8,Gt)],8,Et)]),(0,a._)("a",Kt,[(0,a._)("div",Vt,[(0,a._)("img",{src:s.Crumb,alt:""},null,8,Yt)])])])])}var ei=i.p+"img/crumb-logo.962c51d5.png",ti=i.p+"img/unnamed.0c3f8631.svg",ii={data(){return{WeatherIcon:ti,Crumb:ei,titleLink:"The information is taken from the OpenWeather website"}}};const ni=(0,b.Z)(ii,[["render",Qt]]);var ai=ni;const si={class:"load"},oi=(0,a.uE)('<div class="sunset animate__animated" data-v-17be223e><i class="bi bi-cloud-sun-fill" data-v-17be223e></i></div><div class="sun animate__animated animate__fadeInRightBig" data-v-17be223e><i class="bi bi-brightness-high-fill" data-v-17be223e></i></div><div class="moon animate__animated animate__fadeInRightBig" data-v-17be223e><i class="bi bi-cloud-moon-fill" data-v-17be223e></i></div>',3),ri=[oi];function li(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",si,[s.loadBlock?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{loadAnim:s.loadAnim,loadClose:s.loadBack},"wrapper"])},ri,2)):(0,a.kq)("",!0)])}var ci={data(){return{loadBlock:!0,loadAnim:!0,loadBack:!1}},methods:{loadAnimGo(){setTimeout((()=>{this.loadAnim=!1,this.loadBack=!0}),2200),setTimeout((()=>{this.loadBlock=!1,this.$emit("load-icon-close")}),2500)}},mounted(){this.loadAnimGo()}};const di=(0,b.Z)(ci,[["render",li],["__scopeId","data-v-17be223e"]]);var pi=di;const ui=e=>((0,a.dD)("data-v-72c8c48a"),e=e(),(0,a.Cn)(),e),mi={class:"cardis animate__animated animate__zoomIn"},hi=ui((()=>(0,a._)("i",{class:"bi bi-bookmark-check",style:{color:"#7c7c7c"}},null,-1))),gi=[hi],wi={class:"weather"},fi={key:0,class:"wrapper-temp animate__animated animate__flipInX"},vi={key:0},yi=ui((()=>(0,a._)("span",null,"°F",-1))),ki={class:"weather-descr"},_i={key:0,class:"weather-descr-icon"},bi=ui((()=>(0,a._)("i",{class:"bi bi-cloud-sun"},null,-1))),Ci=[bi],Ti={key:1,class:"weather-descr-icon"},Di=ui((()=>(0,a._)("i",{class:"bi bi-clouds"},null,-1))),Ui=[Di],Li={key:2,class:"weather-descr-icon"},Ii=ui((()=>(0,a._)("i",{class:"bi bi-cloud-drizzle"},null,-1))),xi=[Ii],zi={key:3,class:"weather-descr-icon"},Si=ui((()=>(0,a._)("i",{class:"bi bi-cloudy"},null,-1))),qi=[Si],Oi={key:4,class:"weather-descr-icon"},Fi=ui((()=>(0,a._)("i",{class:"bi bi-brightness-high"},null,-1))),ji=[Fi],$i={key:5,class:"weather-descr-icon"},Wi=ui((()=>(0,a._)("i",{class:"bi bi-cloud-lightning-rain"},null,-1))),Mi=[Wi],Ai={key:6,class:"weather-descr-icon"},Ni=ui((()=>(0,a._)("i",{class:"bi bi-cloud-fog"},null,-1))),Xi=[Ni],Zi={class:"weather-temp-feel"},Bi={key:0},Hi={key:1},Ji={class:"weather-wind"},Pi={class:"mr-2"},Ri=ui((()=>(0,a._)("path",{"fill-rule":"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"},null,-1))),Ei=[Ri],Gi={key:1,class:"wrapper-more animate__animated animate__flipInX"},Ki={class:"weather-temp-min"},Vi={key:0},Yi={key:1},Qi={class:"weather-temp-max"},en={key:0},tn={key:1},nn={class:"weather-pressure"},an={class:"weather-humidity"},sn={class:"weather-visibility"},on={class:"weather-latitude"},rn={class:"weather-longitude"};function ln(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",mi,[(0,a.WI)(e.$slots,"default",{},void 0,!0),(0,a._)("div",{onClick:t[5]||(t[5]=(...t)=>e.mouseOver&&e.mouseOver(...t)),class:"box mt-4",ref:"card",style:(0,h.j5)({maxWidth:"500px",position:"relative",minHeight:"240px",cursor:"pointer",transform:o.computedPos})},[(0,a._)("div",{onClick:t[2]||(t[2]=t=>e.$emit("update-info")),class:"name title is-4"},[(0,a.Uk)((0,h.zw)(i.currentCard.name)+" "+(0,h.zw)(i.currentCard.sys["country"])+" ",1),(0,a._)("i",{onClick:t[0]||(t[0]=(...e)=>o.updateTempLaunch&&o.updateTempLaunch(...e)),style:{cursor:"pointer"},class:(0,h.C_)([{rotate:s.updateTemp},"bi bi-arrow-clockwise"])},null,2),s.moreInfoOpen?((0,a.wg)(),(0,a.iD)("div",{key:0,onClick:t[1]||(t[1]=t=>e.$emit("delete-this-card",i.currentCard.id)),class:"card-delete",title:"Удалить"},gi)):(0,a.kq)("",!0)]),(0,a._)("div",wi,[s.moreInfoOpen?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",fi,["metric"===i.units?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,h.C_)([{verycold:o.toUpTemp>-100&&o.toUpTemp<-10,soblue:o.toUpTemp>-11&&o.toUpTemp<6,blue:o.toUpTemp>5&&o.toUpTemp<18,yellow:o.toUpTemp>17&&o.toUpTemp<28,red:o.toUpTemp>27},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(o.toUpTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",vi,"°C")):(0,a.kq)("",!0)],2)):((0,a.wg)(),(0,a.iD)("div",{key:1,class:(0,h.C_)([{verycold:o.toUpTemp>-100&&o.toUpTemp<14,soblue:o.toUpTemp>13&&o.toUpTemp<51,blue:o.toUpTemp>41&&o.toUpTemp<64,yellow:o.toUpTemp>63&&o.toUpTemp<82,red:o.toUpTemp>81},"weather-temp title is-1"])},[(0,a.Uk)((0,h.zw)(o.toUpTemp),1),yi],2)),(0,a._)("div",ki,[(0,a.Uk)((0,h.zw)(o.descrTemp)+" ",1),"Облачно с прояснениями"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",_i,Ci)):(0,a.kq)("",!0),"Переменная облачность"===o.descrTemp||"Небольшая облачность"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",Ti,Ui)):(0,a.kq)("",!0),"Небольшой проливной дождь"===o.descrTemp||"Дождь"===o.descrTemp||"Небольшой дождь"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",Li,xi)):(0,a.kq)("",!0),"Пасмурно"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",zi,qi)):(0,a.kq)("",!0),"Ясно"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",Oi,ji)):(0,a.kq)("",!0),"Гроза"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",$i,Mi)):(0,a.kq)("",!0),"Плотный туман"===o.descrTemp?((0,a.wg)(),(0,a.iD)("div",Ai,Xi)):(0,a.kq)("",!0)]),(0,a._)("div",Zi,[(0,a.Uk)(" Ощущается как "+(0,h.zw)(o.feelLike),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Bi,"°C")):((0,a.wg)(),(0,a.iD)("span",Hi,"°F"))]),(0,a._)("div",Ji,[(0,a._)("span",Pi,[(0,a.Uk)("Ветер "+(0,h.zw)(i.currentCard.wind["speed"])+" км/ч ",1),((0,a.wg)(),(0,a.iD)("svg",{style:(0,h.j5)({transform:o.degArrowWind,fontSize:"20px",color:"#0065bb"}),xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-arrow-right",viewBox:"0 0 16 16"},Ei,4))])])])),s.moreInfoOpen?((0,a.wg)(),(0,a.iD)("div",Gi,[(0,a._)("div",Ki,[(0,a.Uk)(" Мин "+(0,h.zw)(o.minTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",Vi,"°C")):((0,a.wg)(),(0,a.iD)("span",Yi,"°F"))]),(0,a._)("div",Qi,[(0,a.Uk)(" Макс "+(0,h.zw)(o.maxTemp),1),"metric"===i.units?((0,a.wg)(),(0,a.iD)("span",en,"°C")):((0,a.wg)(),(0,a.iD)("span",tn,"°F"))]),(0,a._)("div",nn," Давление "+(0,h.zw)(i.currentCard.main["pressure"])+" мбар ",1),(0,a._)("div",an," Влажность "+(0,h.zw)(i.currentCard.main["humidity"])+" % ",1),(0,a._)("div",sn," Видимость "+(0,h.zw)(o.visability)+" км ",1),(0,a._)("div",on," Широта "+(0,h.zw)(o.latitude),1),(0,a._)("div",rn," Долгота "+(0,h.zw)(o.longitude),1)])):(0,a.kq)("",!0)]),(0,a._)("i",{style:(0,h.j5)(s.moreIcon),onClick:t[3]||(t[3]=e=>s.moreInfoOpen=!s.moreInfoOpen),class:"bi bi-three-dots"},null,4),(0,a._)("div",{class:"units",onClick:t[4]||(t[4]=t=>e.$emit("change-units"))},(0,h.zw)(i.units),1)],4)])}var cn={name:"card-list-ru",props:{currentCard:{type:Object},units:{type:String}},data(){return{moreIcon:{position:"absolute",right:"20px",bottom:"10px",fontSize:"20px",cursor:"pointer"},moreInfoOpen:!1,updateTemp:!1,posX:void 0,posY:void 0,prevCard:{transform:"translateX(100px)"}}},methods:{updateTempLaunch(){this.updateTemp=!0,setTimeout((()=>{this.updateTemp=!1}),2e3)}},computed:{degArrowWind(){let e=0+this.currentCard.wind["deg"];return"rotate("+e+"deg)"},toUpTemp(){let e=this.currentCard.main["temp"];return Math.round(e)},feelLike(){let e=this.currentCard.main["feels_like"];return Math.round(e)},minTemp(){let e=this.currentCard.main["temp_min"];return Math.round(e)},maxTemp(){let e=this.currentCard.main["temp_max"];return Math.round(e)},descrTemp(){let e=this.currentCard.weather[0].description;e=e.split("");let t=String(e[0]).toUpperCase();return e.splice(0,1),e.unshift(t),e.join("")},visability(){return this.currentCard.visibility/1e3},latitude(){return this.currentCard.coord.lat},longitude(){return this.currentCard.coord.lon},computedPos(){let e;return this.posX<1150&&(e=-this.posX/10),this.posX>1450&&(e=this.posX/10),`translateX(${e}px)`}}};const dn=(0,b.Z)(cn,[["render",ln],["__scopeId","data-v-72c8c48a"]]);var pn=dn;const un={class:"slide-wrapper"};function mn(e,t){return(0,a.wg)(),(0,a.iD)("div",un,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}const hn={},gn=(0,b.Z)(hn,[["render",mn],["__scopeId","data-v-4f9ea9a9"]]);var wn=gn;function fn(e,t,i,n,s,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,h.C_)(["slide-dot",{active:i.item.id==i.currentCard.id}]),onClick:t[0]||(t[0]=t=>e.$emit("swipe-card-to-dot",i.index))},null,2)}var vn={name:"slider-dot",props:{item:{type:Object},index:{type:Number},currentCard:{type:Object}},data(){return{}}};const yn=(0,b.Z)(vn,[["render",fn],["__scopeId","data-v-21215867"]]);var kn=yn,_n=i(6265),bn=i.n(_n),Cn={name:"App",components:{HeadComp:T,CardCity:be,FormNewCity:ze,PlaceholderComp:je,ErrorCard:Ne,CityLoad:Je,CardEn:Ht,FooterComp:ai,LoaderCard:pi,CardsListRu:pn,SliderDotsList:wn,SliderDot:kn},data(){return{apiKey:"93b55014fe1c000569089e576e885abf",loadIcon:!0,city:null,geoData:[{latitude:"",longitude:""}],info:[],cardLoad:!1,lang:"ru",errorShow:!1,units:"metric",geoInfo:[],infoList:[],countCard:0}},methods:{async getData(e){let t=`https://api.openweathermap.org/data/2.5/weather?q=${e}&lang=${this.lang}&units=${this.units}&appid=${this.apiKey}`;bn().get(t).then((e=>{if(console.log(e.data),this.info=e.data,0==this.infoList.length)this.infoList.push(this.info);else{let e=[];if(this.infoList.forEach((t=>e.push(t.id))),e.includes(this.info.id))return!1;this.infoList.unshift(this.info),this.countCard=0}this.cardLoad=!0,this.errorShow=!1})).catch((e=>{console.log(e),this.errorShow=!0}))},getLocation(){navigator.geolocation.getCurrentPosition((e=>{this.geoData[0].latitude=e.coords.latitude,this.geoData[0].longitude=e.coords.longitude,this.getDataFromLocation()}))},async getDataFromLocation(){let e=this.geoData[0].latitude,t=this.geoData[0].longitude,i=`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&appid=${this.apiKey}&units=${this.units}&lang=${this.lang}`;bn().get(i).then((e=>{this.city=e.data.name,this.geoInfo=e.data,this.cardLoad=!0}))},newCityReq(e){this.city=e,this.getData(e)},changeLang(){"ru"===this.lang?this.lang="en":this.lang="ru",this.getDataFromLocation()},changeUnits(){"metric"===this.units?this.units="imperial":this.units="metric",this.getDataFromLocation()},loadIconClose(){this.loadIcon=!1},deleteCardFromInfoList(e){this.infoList=this.infoList.filter((t=>t.id!==e))},prevCard(){0==this.countCard?this.countCard=this.infoList.length-1:this.countCard--},nextCard(){this.countCard==this.infoList.length-1?this.countCard=0:this.countCard++},swipeCardToDot(e){this.countCard=e}},computed:{cityChanged(){let e=String(this.city).toUpperCase();return e},currentCard(){return this.infoList?this.infoList[this.countCard]:console.log("false")}},mounted(){null!=this.city&&this.getData(),setTimeout((()=>{""!==this.geoData[0].latitude&&this.getDataFromLocation()}),10),localStorage.city&&(this.city=JSON.parse(localStorage.city)),localStorage.lang&&(this.lang=JSON.parse(localStorage.lang)),sessionStorage.loadIcon&&(this.loadIcon=JSON.parse(sessionStorage.loadIcon)),localStorage.geoData&&(this.geoData=JSON.parse(localStorage.geoData)),localStorage.infoList&&(this.infoList=JSON.parse(localStorage.infoList))},watch:{city:{handler(e){localStorage.city=JSON.stringify(e)},deep:!0},lang:{handler(e){localStorage.lang=JSON.stringify(e)},deep:!0},loadIcon:{handler(e){sessionStorage.loadIcon=JSON.stringify(e)},deep:!0},geoData:{handler(e){localStorage.geoData=JSON.stringify(e)},deep:!0},infoList:{handler(e){localStorage.infoList=JSON.stringify(e)},deep:!0}}};const Tn=(0,b.Z)(Cn,[["render",m]]);var Dn=Tn;(0,n.ri)(Dn).mount("#app")}},t={};function i(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.m=e,function(){var e=[];i.O=function(t,n,a,s){if(!n){var o=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],s=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(i.O).every((function(e){return i.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<o&&(o=s));if(r){e.splice(d--,1);var c=a();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,a,s]}}(),function(){i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,{a:t}),t}}(),function(){i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){i.p="/weather-app/"}(),function(){var e={143:0};i.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,o=n[0],r=n[1],l=n[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(a in r)i.o(r,a)&&(i.m[a]=r[a]);if(l)var d=l(i)}for(t&&t(n);c<o.length;c++)s=o[c],i.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return i.O(d)},n=self["webpackChunkapp_weather"]=self["webpackChunkapp_weather"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=i.O(void 0,[998],(function(){return i(6965)}));n=i.O(n)})();
//# sourceMappingURL=app.896d7420.js.map