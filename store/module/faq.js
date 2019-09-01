import fetch from '@/plugins/axios'
const state = () => ({list: []})

const mutations = {
    updateState (state,list) {
        state.list = list
    }
}

const actions = {
    async questionInit ({commit}) {
        return Promise.resolve(
            await fetch('/question/getFaqList',{}).then(res =>{
            commit('updateState', res);
            return res
        }))
    }
}
export default {state,mutations,actions}
 