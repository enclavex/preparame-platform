import SpecialistsQueryCrud from "../../components/platform/specialistsCrud/SpecialistsQueryCrud.vue"
import SpecialistsRegisterCrud from "../../components/platform/specialistsCrud/SpecialistsRegisterCrud.vue"
import SpecialistProvidesTimetables from "../../components/platform/specialistProvidesTimetables/SpecialistProvidesTimetables"
import Platform from "../../layouts/Platform.vue"

const specialistRoutes = [
    {
        path: "/specialists",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: SpecialistsQueryCrud
            }
        }]
    },
    {
        path: "/specialists/new",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: SpecialistsRegisterCrud
            }
        }]
    },
    {
        path: "/specialists/:id",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: SpecialistsRegisterCrud
            }
        }]
    },
    {
        path: "/providesTimetables",
        components: {
            site: Platform
        },
        children: [{
            path: "/",
            components: {
                content: SpecialistProvidesTimetables
            }
        }]
    },
]

export { specialistRoutes }