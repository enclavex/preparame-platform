import ProductDetails from "../../layouts/ProductDetails.vue"
import ProductList from "../../layouts/ProductList.vue"
import ProductSchedule from "../../layouts/ProductSchedule.vue"
import HomePage from "../../layouts/HomePage.vue"
import ShoppingCart from "../../layouts/ShoppingCart.vue"
import Site from "../../layouts/Site.vue"
import CompanyDetails from "../../layouts/CompanyDetails.vue"
import FAQ from "../../layouts/FAQ.vue"
import PrivacyTerms from "../../layouts/PrivacyTerms.vue"
import UseTerms from "../../layouts/UseTerms.vue"
import ResponsibleDemission from "../../layouts/ResponsibleDemission.vue"

const siteRoutes = [
    {
        path: "/",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: HomePage
            }
        }]
    },
    {
        path: "/ProductDetails",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: ProductDetails
            }
        }]
    },
    {
        path: "/demissaohumanizada",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: ResponsibleDemission
            }
        }]
    },
    {
        path: "/ProductList",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: ProductList
            }
        }]
    },
    {
        path: "/ProductSchedule",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: ProductSchedule
            }
        }]
    },
    {
        path: "/ShoppingCart",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: ShoppingCart
            }
        }]
    },
    {
        path: "/CompanyDetails",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: CompanyDetails
            }
        }]
    },
    {
        path: "/FAQ",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: FAQ
            }
        }]
    },
    {
        path: "/PrivacyTerms",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: PrivacyTerms
            }
        }]
    },
    {
        path: "/UseTerms",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: UseTerms
            }
        }]
    },
    {
        path: "*",
        components: {
            site: Site
        },
        children: [{
            path: "/",
            components: {
                content: HomePage
            }
        }]
    }

]

export { siteRoutes }