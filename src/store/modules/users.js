import axios from "axios"

export default ({
    namespaced: true,
    state: {
        user: null,
        auth: true
    },
    mutations: {
        setUser(state, user) {
            state.user = user
            state.auth = !user

            console.log(user.user)
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('refresh_token', user.refresh_token);
                localStorage.setItem('userAvatarUrl', user.user.avatarUrl);
                localStorage.setItem('userName', user.user.name);
                localStorage.setItem('userEmail', user.user.email);
                localStorage.setItem('userId', user.user.id);
                localStorage.setItem('userType', user.user.type.value);
                localStorage.setItem('surveyAnswered', user.user.surveyAnswered);
                localStorage.setItem('laborRiskAlert', user.user.laborRiskAlert.value);
                localStorage.setItem('companyId', user.user.companyId);

            } else {
                delete axios.defaults.headers.common["Authorization"]
            }
        }
    },
    actions: {
        setUser(state, payload) {
            state.commit("setUser", payload)
        }
    }
})
