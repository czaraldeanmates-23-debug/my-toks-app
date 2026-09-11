import { createRouter, createWebHistory } from 'vue-router'

import homepage from '@/views/homepage.vue'
import about_us from '@/views/About_us.vue'
import admission from '@/views/admission.vue'
import academics from '@/views/academics.vue'
import campus_life from '@/views/campus_life.vue'
import news from '@/views/news.vue'
import contact from '@/views/contact.vue'
import SampleData from '@/views/SampleData.vue'
import SampleMethod from '@/views/SampleMethod.vue'
import SampleVmodel from '@/views/SampleVmodel.vue'

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '/',

      name: 'homepage',

      component: homepage,
    },

    {
      path: '/about_us',

      name: 'about_us',

      component: about_us,
    },

    {
      path: '/admission',

      name: 'admission',

      component: admission,
    },

    {
      path: '/academics',

      name: 'academics',

      component: academics,
    },

    {
      path: '/campus_life',

      name: 'campus_life',

      component: campus_life,
    },

    {
      path: '/news',

      name: 'news',

      component: news,
    },

    {
      path: '/contact',

      name: 'contact',

      component: contact,
    },

    { path: '/sample-data', 

      name: 'sample-Data', 
      
      component: SampleData,
    },
    { path: '/sample-method', 

      name: 'sample-Method', 
      
      component: SampleMethod,
    },
    { path: '/sample-Vmodel', 

      name: 'sample-Vmodel', 
      
      component: SampleVmodel,
    }
  ],
})

export default router
