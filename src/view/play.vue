<template>
   <div class="background">









       <div class="footer">
           <div class="btn">

           </div>
           <div class="select">
            <ul class="content">
               <li>

               </li>
            </ul>

            <ul class="nav">
                <li v-for="item in icons" :key="item.icon">
                    <img :src="item.icon" class="icon">
                </li>
            </ul>
           </div>
       </div>

        <guide 
        v-show="start"
        @begin = "begin"
        >
        </guide>

   </div>
</template>

<script type="text/ecmascript-6">
import guide from "../components/guide"
import data from "../data"
export default {
    created(){
        
    },
    methods:{
        begin(){
            this.start = !this.start
        }
    },
   data() {
       return {
           start:true,
           icons:data.icons
       }
   },
   components: {
       guide
   }
}
</script>

<style scoped>
.background{
    width: 100%;
    height: 18rem;
    background-image: url("../assets/play/room1.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.footer{
    width: 100%;
    height: 4rem;
    background: rgba(121, 0, 0, 0.5);
    position: fixed;
    bottom: 0;
}
.btn{
    width: 100%;
    height: 30%;
    background: rgba(225, 225, 255, 0.5);
}
.select{
    width: 100%;
    height: 70%;
    background: rgba(0, 0, 0, 0.5);
}
.content{
    width: 100%;
    height: 60%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
}
.nav{
    width: 100%;
    height: 40%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    text-align: left;
    overflow-x: auto;
}
.nav>li{
    display: inline-block;
    width: 1.5rem;
    height: 100%;
}
.icon{
    width: 50%;
    height: 60%;
    margin: 20%
}
</style>