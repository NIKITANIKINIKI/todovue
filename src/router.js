import {createRouter, createWebHistory } from 'vue-router'
import Todo from './components/Todo.vue'
import MyCalendar from './components/MyCalendar.vue'

const routes =[
    {
        path:'/',
        name: 'TodoList',
        component: Todo
    },
    {
        path:'/index',
        name: "MyCalendar",
        component: MyCalendar
    }
]

const router=createRouter({
    history: createWebHistory(),
    routes
})

export default router;