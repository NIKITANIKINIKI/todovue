<script>
import TaskCard from './TaskCard.vue'
import TaskInput from './TaskInput.vue'
import {ref } from 'vue'


export default {
  name: 'Todo',
  components:{
    TaskCard,
    TaskInput,

  },
  setup(){
    const taskList=ref([{id:1, title:'Create message', description:'Add message', status:false}])
    // const addTask=({title, description}) =>{
    //   taskList.value=[...taskList.value, {id: taskList.value.length+1, title, description, status:false}]
    // }
    const addTask = ({ title, description }) => {
      const newTask = {
        id: (taskList.value.length+1),
        title,
        description,
        status: false
      }
      taskList.value.push(newTask)
    }

    const setDone=(id)=>{
      taskList.value=taskList.value.map(el=>{
        if(el.id===id){
          el.status=true
        }  
        return el
        })
      }
    const removeTask=(id)=>{
      taskList.value=taskList.value.filter(el => el.id!==id)
    }

    return {
      taskList,
      addTask,
      removeTask,
      setDone
    }
  }
}

</script>

<template>
  <main>
    <TaskInput @onAddTask="addTask"></TaskInput>
    <ul class="my-list">
      <li v-for="item in taskList" :key="item.id">
        <TaskCard @emitOnDone="setDone(item.id)" @emitOnRemove="removeTask(item.id)"  :modal="item"></TaskCard>
      </li>
    </ul>
  </main>
</template>

<style>
.my-list{
  list-style: none;
}
</style>
