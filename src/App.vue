<script>
import Menu from './components/Menu.vue'

export default {
  name: 'App',
  components:{
    Menu
  },
}

</script>

<template>
  <main>
    <Menu></Menu>
    <router-view></router-view>
  </main>
</template>

<style>

</style>
