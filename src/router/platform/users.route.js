import UsersQueryCrud from "../../components/platform/usersCrud/UsersQueryCrud.vue"
import UsersRegisterCrud from "../../components/platform/usersCrud/UsersRegisterCrud.vue"
import Platform from "../../layouts/Platform.vue"

const userRoutes = [
    {
        path: "/users",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: UsersQueryCrud
            }
        }]
    },
    {
        path: "/users/:id",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: UsersRegisterCrud
            }
        }]
    },
]

export { userRoutes }