import Platform from "../../layouts/Platform.vue"
import ResumeCreatorPresentations from "./../../components/platform/resumeCreator/ResumeCreatorPresentations.vue"
import ResumeCreator from "./../../components/platform/resumeCreator/ResumeCreator.vue"

const resumeRoutes = [
    {
        path: "/resumeCreatorPresentation",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: ResumeCreatorPresentations
            }
        }]
    },
    {
        path: "/resumeCreator",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: ResumeCreator
            }
        }]
    }]

export { resumeRoutes }