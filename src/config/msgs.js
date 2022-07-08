import Vue from "vue"
import Toasted from "vue-toasted"

Vue.use(Toasted, {
    iconPack: "fontawesome",
    duration: 3000
})

Vue.toasted.register(
    "defaultSuccess",
    payload => {
        return !payload.msg ? "Operação realizada com sucesso." : payload.msg
    },
    {
        type: "success",
        icon: "check",
        className: "toasted-layout"
    }
)

Vue.toasted.register(
    "defaultError",
    payload => {
        return !payload.msg ? "Erro inesperado." : payload.msg
    },
    {
        type: "error",
        icon: "times",
        className: "toasted-layout"
    }
)
