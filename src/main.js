import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import detail from './components/detail'
import one from './components/one'

// 需要熟练掌握vue-router的基础使用
Vue.use(VueRouter)

Vue.config.productionTip = false;

const routes = [
  {path:'/',component:detail},
  {path:'/one',component:one}
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
