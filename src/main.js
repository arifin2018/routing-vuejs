import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound from './components/teams/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const route = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'router-link-active',
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      name: 'teams',
      // component: TeamsList,
      components: {
        default: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        {
          path: ':data',
          name: 'teamName',
          component: TeamMember,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      name: 'users',
      // component: UsersList,
      components: {
        default: UsersList,
        footer: UsersFooter,
      },
    },
    {
      path: '/:notFound(.*)',
      name: 'notFound',
      component: NotFound,
      beforeEnter(to, from) {
        console.log('before enter');
        console.log(to, from);
      },
    },
  ],
  scrollBehavior(to, from, savedPostion) {
    if (savedPostion) {
      return savedPostion;
    }
    return {
      left: 0,
      top: 80,
    };
  },
});

route.beforeEach(function (to, from, next) {
  if (from.path == '/users' && to.path == '/teams') {
    // route.replace({
    //   path: '/hai',
    // });
    next({ name: 'teamName', params: { data: 't3' } });
  }
  next();
});
const app = createApp(App);
app.use(route);
app.mount('#app');
