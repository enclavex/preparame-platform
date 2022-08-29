import UsersQueryCrud from "../../components/platform/usersCrud/UsersQueryCrud.vue"
import UsersRegisterCrud from "../../components/platform/usersCrud/UsersRegisterCrud.vue"
import UserProfile from "../../components/platform/userProfile/UserProfile.vue"
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
        }],
        props: {
            userTypes: [
                'ADMIN',
            ]
        }
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
        }],
        props: {
            userTypes: [
                'ADMIN',
            ]
        }
    },
    {
        path: "/profile",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: UserProfile
            }
        }],
        props: {
            userTypes: [
                'ADMIN',
                'USER',
                'SPECIALIST'
            ]
        }
    },
]

export { userRoutes }