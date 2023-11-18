<template>
    <div class="task-card my-style">
        <div>
            <h4>{{ modal.title }}</h4>
            <p>{{ modal.description }}</p>
        </div>
        <div class="task-card">
            <button @click="emitOnDone" v-if="!modal.status ">✓</button>
            <button @click="emitOnRemove" v-else>х</button>
        </div>
    </div>
</template>

<script>
export default{
    props:{
       modal:{
        required: true,
        default:{
            id:0,
            title:'Create video ',
            description: 'And upload on YouTube ',
            status:true
        }
       } 
    },
    setup(props, {emit}){
        const emitOnDone=()=>{
            emit('onDone')
        }
        const emitOnRemove=()=>{
            emit('OmRemove')
        }
        return {
            emitOnDone,
            emitOnRemove
        }
    }
}
    
</script>

<style>
.task-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>