<script>
import TaskCard from './components/TaskCard.vue'
import TaskInput from './components/TaskInput.vue'
import {ref } from 'vue'


export default {
  name: 'App',
  components:{
    TaskCard,
    TaskInput 
  },
  setup(){
    const taskList=ref([{id:0, title:'Create message', description:'Add message', status:false}])
    const addTask=({title, description}) =>{
      taskList.value=[...taskList.value, {id: taskList.value.length+1, title, description, status:false}]
    }

    return {
      taskList,
      addTask
    }
  }
}

</script>

<template>
  <main>
    <TaskInput @onAddTask="addTask"></TaskInput>
    <ul class="my-list">
      <li v-for="item in taskList">
        <TaskCard :model="item"></TaskCard>
      </li>
    </ul>
    
  </main>
</template>

<style>
.my-list{
  list-style: none;
}
</style>
