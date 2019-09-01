import Vue from 'vue'
import Vuex from 'vuex'
import faq from './module/faq'
import index from './module/home'
Vue.use(Vuex)
const Store = () => new Vuex.Store({
    modules: {
        faq,
        index
    },
    actions: {
        test(){
            console.log('ce是')
        }
    },
    mutations: {
        test(){
            console.log('ce是')
        }
    }
})

export default Store