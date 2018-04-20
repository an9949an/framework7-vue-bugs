import Home from './pages/home.vue'
import RoutableTabsBugPage from './pages/routable-tabs-bug/routable-tabs-bug.vue';
import Tab1 from './pages/routable-tabs-bug/tab1.vue';
import Tab2 from './pages/routable-tabs-bug/tab2.vue';
import Tab3 from './pages/routable-tabs-bug/tab3.vue';
import Page1 from './pages/firefox-back-bug/page1.vue';
import Page2 from './pages/firefox-back-bug/page2.vue';


export default [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/routable-tabs-bug/',
    component: RoutableTabsBugPage,
    tabs: [
      {
        path: '/',
        id: 'tab1',
        component: Tab1,
      },
      {
        path: '/tab2/',
        id: 'tab2',
        component: Tab2,
      },
      {
        path: '/tab3/',
        id: 'tab3',
        component: Tab3,
      },
    ],
  },
  {
    path: '/page1/',
    component: Page1,
  },
  {
    path: '/page2/',
    component: Page2,
  }

];
