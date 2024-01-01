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
    emits:['onAddTask'],
    setup(props, { emit }){
        const title=ref('')
        const description=ref('')
        const onAddTask=() =>{
            if(title.value === '' || description.value === ''){
                alert('Small info!')
            }
            else{
                emit('onAddTask', { title: title.value, description: description.value} )
                title.value=''
                description.value=''
            }
            
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