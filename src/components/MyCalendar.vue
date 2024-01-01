<template>
    <div>
        <div>
            <button>&lt</button>
            <h1> В разработке</h1>
            <button>&gt</button>

        </div>
        <div>

        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            curentDate: new Date()
        }
    },
    computed:{
        currentMonth(){

        },
        daysInMonth(){

        }
    },
    methods:{
        previousMonth(){

        },
        nextMonth(){
            
        }
    },
    
}
</script>

<style>

</style>