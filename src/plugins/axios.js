import Vue from 'vue'
import axios from 'axios'

axios.interceptors.response.use(({ data }) => data)

Vue.prototype.$http = axios
