
import { createRouter, createWebHashHistory } from 'vue-router';



const constantRouterMap = [  
  {
    path: '/',
    component: () => import('/@/views/index.vue'),
    meta: {
        title: "Saving DAO",
    },
  },
  {
    path: '/home',
    name: 'home',
	component: () => import('/@/views/index.vue'),
	meta: {
	    title: "Saving DAO",
	},
  },
  {
    path: '/guild',
    name: 'guild',
  	component: () => import('/@/views/community.vue'),
	meta: {
	    title: "Guild",
	},
  },
  {
    path: '/ecology',
    name: 'ecology',
  	component: () => import('/@/views/EcoProduct.vue'),
	meta: {
	    title: "Eco Product",
	},
  },
  {
    path: '/governance',
    name: 'governance',
  	component: () => import('/@/views/governance.vue'),
	meta: {
	    title: "Saving DAO",
	},
  },
  {
    path: '/intro',
    name: 'intro',
  	component: () => import('/@/views/intro.vue'),
	meta: {
	    title: "Intro",
	},
  },
  {
    path: '/privacy',
    name: 'privacy',
  	component: () => import('/@/views/privacy.vue'),
	meta: {
	    title: "Privacy Policy",
	},
  },
  {
    path: '/terms',
    name: 'terms',
  	component: () => import('/@/views/terms.vue'),
	meta: {
	    title: "Terms Of Use",
	},
  }
]

const router = new createRouter({
  history:createWebHashHistory(),
  scrollBehavior() {
  	return { top: 0 };
  },
  routes: constantRouterMap
})

export default router