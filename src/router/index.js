import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewHello from '@/components/NewHello'

Vue.use(Router)
// 定义路由
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: NewHello
    }
  ]
})
