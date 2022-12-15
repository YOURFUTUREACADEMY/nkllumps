<template>
  <Head />
  <main class="container bg-white">
    <router-view />
  </main>
 
</template>
<script>
// imports
import Head from "@/components/Head.vue";
// requires
require("@/styles/global.css");
require("@/styles/bootstrap.scss");

//export
export default {
  name: "App",
  components:{
    Head
  },
  data(){
    return{
      myvar:"this is a placeholder var"
    }
  },
  created() {  
    document.title = "Aanmelding umpires NK Little League 2023";	  
  },  
}

</script>

<style scoped>

</style>

<style lang="scss">

</style>
