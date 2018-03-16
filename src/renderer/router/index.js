import Vue from 'vue'
import Router from 'vue-router'

import ChatPage from '@/pages/ChatPage'
import ChatListPage from '@/pages/ChatListPage'
import GroupListPage from '@/pages/GroupListPage'
import GroupDetailPage from '@/pages/GroupDetailPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ChatPage
    },
    {
      path: '/chat/:id',
      name: 'ChatPage',
      component: ChatPage
    },
    {
      path: '/username/:id',
      name: 'GroupDetailPage',
      component: GroupDetailPage
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
