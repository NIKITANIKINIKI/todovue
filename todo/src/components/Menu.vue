<template>
  <div class="menu">
    <router-link :to="{name:'TodoList'}" 
    class="menu-button active-menu"
    :class="{'active': isTodoActive}"
    >Todo list</router-link>
    <router-link :to="{name: 'MyCalendar'}"
    class="menu-button active-menu"
    :class="{'active': isCalendareActeve}"
    >My calendar</router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isTodoActive:false,
      isCalendareActeve: false
    };
  },
  watch:{
    $route(to, from){
      this.isTodoActive=to.name==='TodoList'
      this.isCalendareActeve=to.name==='MyCalendar'
    }
  }
};



</script>

<style>
.menu{
    margin: 10px 10px 10px 0;
    
}

.menu-button{
  margin: 10px;
  text-decoration: none;
  border-radius: 6px;
  border: solid 1px lightblue;
  padding:10px;
  transition: 0.5s ease;
}

.active-menu.active{
  background-color: lightblue;
}
</style>
