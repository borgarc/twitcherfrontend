import Vue from 'vue';
import Router from 'vue-router';
import People from './views/People.vue';
import Login from './views/Login.vue';
import Following from './views/Following.vue';
import Home from './views/Home.vue';
import Header from './components/Header.vue';
import Menu from './components/Menu.vue';
import NewTwit from './views/NewTwit.vue';
import NewUser from './views/NewUser.vue';
import Replies from './views/Replies.vue';
import Reply from './views/NewReply.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/people',
      name: 'people',
      components: {
        default: People,
        header: Header,
        menu: Menu,
      },
    },
    {
      path: '/following',
      name: 'following',
      components: {
        default: Following,
        header: Header,
        menu: Menu,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/twits/new',
      name: 'new',
      components: {
        default: NewTwit,
        header: Header,
        menu: Menu,
      },
    },
    {
      path: '/twits/:twitID/replies',
      name: 'replies',
      components: {
        default: Replies,
        header: Header,
        menu: Menu,
      },
    },
    {
      path: '/twits/:twitID/reply',
      name: 'reply',
      components: {
        default: Reply,
        header: Header,
        menu: Menu,
      },
    },
    {
      path: '/users/:userID',
      name: 'user',
      components: {
        default: Home,
        header: Header,
        menu: Menu,
      },
    },
    {
      path: '/new-user',
      name: 'newuser',
      component: NewUser,
    },
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        header: Header,
        menu: Menu,
      },
    },
  ],
});
