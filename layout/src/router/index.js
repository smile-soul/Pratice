import Vue from 'vue'
import Router from 'vue-router'
import Flex from '@/components/Flex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Flex',
      component: Flex
    }
  ]
})
