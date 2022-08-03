import SubscriptionPlansQueryCrud from "../../components/platform/subscriptionPlansCrud/SubscriptionPlansQueryCrud.vue"
import SubscriptionPlansRegisterCrud from "../../components/platform/subscriptionPlansCrud/SubscriptionPlansRegisterCrud.vue"
import Platform from "../../layouts/Platform.vue"

const subscriptionPlanRoutes = [
    {
        path: "/subscriptionPlans",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: SubscriptionPlansQueryCrud
            }
        }]
    },
    {
        path: "/subscriptionPlans/new",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: SubscriptionPlansRegisterCrud
            }
        }],
        props: {
            userTypes: [
                'ADMIN',
            ]
        }
    },
    {
        path: "/subscriptionPlans/:id",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: SubscriptionPlansRegisterCrud
            }
        }],
        props: {
            userTypes: [
                'ADMIN',
            ]
        }
    },
]

export { subscriptionPlanRoutes }