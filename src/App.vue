<template>
  <div id="app">
  <header-nav></header-nav>

    <router-view/>
  </div>
</template>

<script>
import headerNav from 'components/common/headerNav'

export default {
  name: 'app',
  data(){
    return{
      msg: 'hello vue'
    }
  },
  components: {
      headerNav,
  }

}
</script>

<style>
#app {

}
</style>
