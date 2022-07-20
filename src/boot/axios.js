import Vue from 'vue'
import axios from 'axios'
import { refreshToken } from 'src/utils/refreshToken'

const sucess = res => res

const error = err => {
    const refresh_token = localStorage.getItem("refresh_token")
    if (401 === err.response.status && refresh_token) {
        refreshToken()
    } else {
        return Promise.reject(err)
    }
}

const config = config => {
    axios.defaults.headers.common["authorization"] = `Bearer ${localStorage.getItem('token')}`
    axios.defaults.headers.common["reauthorization"] = `${localStorage.getItem("refresh_token")}`

    return config
}

axios.interceptors.response.use(sucess, error)
axios.interceptors.request.use(config)

Vue.prototype.$axios = axios
