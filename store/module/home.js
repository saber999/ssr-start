import fetch from '@/plugins/axios'

const state = {

}

const actions = {
  async getIndexData(){
    return Promise.resolve(
      await Promise.all([fetch('/index/getIndexData'), fetch('/index/getAppIndexData')]).then( res => {
        return {
          res
        }
      })
    )
  },
}

export default{ state, actions}