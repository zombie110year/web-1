import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import HelloWorld from '@/components/HelloWorld'
import sec from '@/components/sec'
import BookReader from "../views/book-reader/book-reader.vue";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'App',
            component: App
        },
        {
            path: '/sec',
            name: 'sec',
            component: sec
        },
        {
            path: '/hollow',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: "/book-reader",
            name: "book-reader",
            component: BookReader
        }
    ]
})