<template>
   <div class="outer">
       <div class="guide">
           <div class="top">
               <div src="../assets/play/guide.gif" class="guide_gif"></div>
           </div>
           <div class="bottom">
               <button class="btn_begin" @click="begin"></button>
           </div>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   data() {
       return {

       }
   },
    methods: {
        begin () {
            this.$emit("begin");
        }
    },
}
</script>

<style scoped>
.outer{
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    background: rgba(0, 0, 0, 0.5)
}
.guide{
    width: 80%;
    height: 11rem;
    background-image: url("../assets/play/guide_bg.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
    position: relative;
    top: 40%;
    transform: translateY(-50%);
}
.top{
    width: 100%;
    height: 80%;
}
.bottom{
    width: 100%;
    height: 20%;
}
.guide_gif{
    width: 100%;
    height: 80%;
    background-image: url("../assets/play/guide.gif");
    background-position: 50% 18%;
    background-repeat: no-repeat;
    background-size: cover;

}
.btn_begin{
    display: inline-block;
    width: 20%;
    height: 80%;
    opacity: 0;
}
</style>