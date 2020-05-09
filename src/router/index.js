import Vue from 'vue'
import Router from 'vue-router'
import BookReader from "../views/book-reader/book-reader.vue";
import BookInfo from '@/views/book-info.vue'
import UniverseList from '@/views/universe-list.vue'
import Home from '@/views/home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: "/book-reader",
            name: "book-reader",
            component: BookReader
        },
        {
            path: '/book-info',
            name: 'book-info',
            component: BookInfo
        },
        {
            path: '/universe-list',
            name: 'universe-list',
            component: UniverseList
        }
    ]
})