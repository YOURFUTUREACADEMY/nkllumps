<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>
<script>
// imports

// requires
require("@/styles/global.css");
require("@/styles/bootstrap.scss");

//export
export default {
  name: "App",
  components:{

  },
  data(){
    return{
      myvar:"this is a placeholder var"
    }
  }
}

</script>

<style scoped>

</style>

<style lang="scss">

</style>
