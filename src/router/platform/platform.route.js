import Platform from "../../layouts/Platform.vue"
import HomeDynamicTemplate from "../../components/platform/home/HomeDynamicTemplate.vue"

const platformRoutes = [
    {
        path: "/platform",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: HomeDynamicTemplate
            }
        }]
    },
]

export { platformRoutes }