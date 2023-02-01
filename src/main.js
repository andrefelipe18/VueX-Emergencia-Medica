import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//Criando a instância do Vue
const Vue = createApp(App)
//Adicionando o vueX 
Vue.use(store)
//Adicionando o Vue Router
Vue.use(router)
//Montando a instância do Vue
Vue.mount('#app')
