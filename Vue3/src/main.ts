import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

const Global = {
  CND : process.env.VUE_APP_CDN,
  API : process.env.VUE_APP_API,
  IS_TEST: process.env.VUE_APP_IS_TEST,
};

router.beforeEach((to, from, next) => {
  next()
})

for (let i in Global) {
  app.config.globalProperties['$' + i] = Global[i]
}

app.use(store).use(router).mount('#app')
