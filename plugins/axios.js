import Axios from 'axios'

const DEFAULT_HOST = {DEV_HOST:"dev.xinhulu.com", BETA_HOST:"beta.xinhulu.com", IDC_HOST:"www.xiaoyusan.com"}
const NODE_ENV = global.process.env.NODE_ENV || 'DEV_HOST'

export default Axios.create({
    baseURL:NODE_ENV[DEFAULT_HOST]
})
