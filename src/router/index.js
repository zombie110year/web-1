import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import sec from '@/components/sec'
import BookReader from "../views/book-reader/book-reader.vue";
import bookInfo from '@/components/bookInfo'
import universeList from '@/components/universeList'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
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
        },
        {
            path: '/bookInfo',
            name: 'bookInfo',
            component: bookInfo
        },
        {
            path: '/universeList',
            name: 'universeList',
            component: universeList
        }
    ]
})