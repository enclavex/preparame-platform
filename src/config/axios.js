const sucess = res => res
const error = err => {
    if (err.response && 401 === err.response.status) {
        window.location = '/'
    } else {
        return Promise.reject(err)
    }
}