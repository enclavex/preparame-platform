import { Notify } from 'quasar'

export const userKey = "__knowledge_user"
export const baseApiUrl = "http://54.90.104.135/"

export function showError(e) {
    if (e && e.response && e.response.data && e.response.data.message) {
        Notify.create({ type: 'error', message: e.response.data.message })
        console.log(e.response.data.message)
    } else if (e && e.response && e.response.data) {
        Notify.create({ type: 'error', message: e.response.data })
        console.log(e.response.data)
    } else if (typeof e === "string") {
        Notify.create({ type: 'error', message: e })
        console.log(e)
    } else {
        Notify.create({ type: 'error' })
        console.log('error')
    }


    return false
}

export default { baseApiUrl, showError }
