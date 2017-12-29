import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import './css/element-theme.scss'
import App from './App.vue'
import Antcontainertab from './componets/Ant-container-tab.vue'
import Antcontainermain from './componets/Ant-container-main.vue'

//import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI);

// const router = new VueRouter({
//     routes: [
//         { path: '/user/:id', components: {
//             default:Antcontentone
//         },
//             children: [
//                 {   path: 'a',
//                     components:{
//                         a : Antcontenttwo
//                     }
//                 },
//                 { path: 'b', component: Antcontenttwo },
//                 { path: 'c', component: Antcontenttwo }
//             ]
//         }
//     ]
// })

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect:'/user/1/a'
        },
        {
            path: '/user/:id',
            components: {
                default: Antcontainertab,
                a:Antcontainermain
            }
        },
        {
            path: '/user/:id/:con',
            components: {
                default: Antcontainertab,
                a : Antcontainermain
            }
        }
    ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
