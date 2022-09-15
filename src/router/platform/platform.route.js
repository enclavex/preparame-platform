import Platform from "../../layouts/Platform.vue"
import HomeDynamicTemplate from "../../components/platform/home/HomeDynamicTemplate.vue"
import NPSSurvey from '../../components/platform/NPSSurvey/NPSSurvey.vue'

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
    {
        path: "/survey",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: NPSSurvey
            }
        }]
    },
]

export { platformRoutes }