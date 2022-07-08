import { Notify } from 'quasar'

export const userKey = "__knowledge_user"
export const baseApiUrl = "http://localhost:3334"

export function showError(e) {
    if (e && e.response && e.response.data && e.response.data.message) {
        Notify.create(e.response.data.message)
    } else if (e && e.response && e.response.data) {
        Notify.create(e.response.data)
    } else if (typeof e === "string") {
        Notify.create(e)
    } else {
        Notify.create("Error")
    }
}

export default { baseApiUrl, showError }
