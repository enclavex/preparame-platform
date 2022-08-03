import ScheduleProductsList from "../../components/platform/scheduleProducts/ScheduleProductsList.vue"
import ProductsQueryCrud from "../../components/platform/productsCrud/ProductsQueryCrud.vue"
import ProductsRegisterCrud from "../../components/platform/productsCrud/ProductsRegisterCrud.vue"
import ScheduleSpecialistsList from "../../components/platform/scheduleProducts/ScheduleSpecialistsList.vue"
import Platform from "../../layouts/Platform.vue"

const productRoutes = [
    {
        path: "/products",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: ProductsQueryCrud
            }
        }]
    },
    {
        path: "/products/new",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: ProductsRegisterCrud
            }
        }],
        props: {
            userTypes: [
                'ADMIN',
            ]
        }
    },
    {
        path: "/products/:id",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: ProductsRegisterCrud
            }
        }],
        props: {
            userTypes: [
                'ADMIN',
            ]
        }
    },
    {
        path: "/products/list",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: ScheduleProductsList
            }
        }]
    },
    {
        path: "/products/schedule/:productId",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: ScheduleSpecialistsList
            }
        }]
    },
]

export { productRoutes }