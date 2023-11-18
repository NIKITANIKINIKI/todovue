<template>
    <div class="my-list">
        <input v-model="title" placeholder="Title" type="text">
        <input v-model="description" placeholder="Description" type="text">
        <button @click="onAddTask">Add task</button>
    </div>
</template>

<script>
import { ref } from 'vue'
 
export default{
    emits:{
        onAddTask({title, description}){
            if(title==='' || description==='' ){
                alert('Small info!')
                return false
            }
            return true
        }
    },
    setup(props, { emit }){
        const title=ref('')
        const description=ref('')
        const onAddTask=()=>{
            emit('onAddTask', { title: title.value, description: description.value} )
            title.value=''
            title.description=''
        }

        return{
            title,
            description,
            onAddTask
        }
    }
}
</script>

<style>
.my-list{
    margin-bottom: 10px;
}

</style>