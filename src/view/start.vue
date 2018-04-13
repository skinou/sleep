<template>
   <div class="start">
       <div class="top">
           <img src="../assets/start/top.png" class="img_top">
       </div>
       <div class="middle">
           <div class="img_sleep"></div>
       </div>
       <div class="bottom">
           <router-link to='/play'><button class="start_btn"></button></router-link>
       </div>

   </div>
</template>

<script type="text/ecmascript-6">
export default {
   data() {
       return {

       }
   },
   components: {

   }
}
</script>

<style scoped>
.start,.top,.middle,.bottom{
    width: 100%;

}

.img_top{
    width: 90%;
    margin-top: 5%;
}

.img_sleep{
    display: inline-block;
    width: 40%;
    height: 6rem;
    background-color: white;
    animation:change 2s infinite;
    margin: 5% 0 5% 0;
    /* background-image:url("../assets/start/sleep/sleep_01.png");
    background-position: center;
    background-repeat: no-repeat; */
}

.start_btn{
    display: inline-block;
    width: 20%;
    height: 2rem;
    background-image:url("../assets/start/start.png");
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    background-color: white;
}

@keyframes change{
    0%{
        background-image:url("../assets/start/sleep/sleep_01.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
    }
     20%{
        background-image:url("../assets/start/sleep/sleep_02.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
    }
    
     40%{
        background-image:url("../assets/start/sleep/sleep_03.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
    }
    
     60%{
        background-image:url("../assets/start/sleep/sleep_04.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
    }
     80%{
        background-image:url("../assets/start/sleep/sleep_05.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
    }
     100%{
        background-image:url("../assets/start/sleep/sleep_06.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size:cover;
    }

}


</style>