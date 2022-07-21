import HomePage from "../layouts/HomePage.vue"
import Login from "../layouts/Login.vue"
import ResetPassword from "../layouts/ResetPassword.vue"
import ProductDetails from "../layouts/ProductDetails.vue"
import CrudQuery from "../components/platform/crud/CrudQuery.vue"
import ProductList from "../layouts/ProductList.vue"
import PlatformProductList from "../components/platform/scheduleProducts/ProductsList.vue"
import ProductSchedule from "../layouts/ProductSchedule.vue"
import ShoppingCart from "../layouts/ShoppingCart.vue"
import Site from "../layouts/Site.vue"
import Platform from "../layouts/Platform.vue"
import CompanyDetails from "../layouts/CompanyDetails.vue"
import FAQ from "../layouts/FAQ.vue"
import PrivacyTerms from "../layouts/PrivacyTerms.vue"
import UseTerms from "../layouts/UseTerms.vue"
import SpecialistsList from "../components/platform/scheduleProducts/SpecialistsList.vue"
import HomeUser from "../components/platform/home/HomeUser.vue"
import SubscriptionPlansQueryCrud from "../components/platform/subscriptionPlansCrud/SubscriptionPlansQueryCrud.vue"
import SubscriptionPlansRegisterCrud from "../components/platform/subscriptionPlansCrud/SubscriptionPlansRegisterCrud.vue"

const routes = [
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
    path: "/platform",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: HomeUser
      }
    }]
  },
  {
    path: "/products",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: PlatformProductList
      }
    }]
  },
  {
    path: "/companies",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: CrudQuery
      }
    }]
  },
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
    }]
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
    }]
  },
  {
    path: "/schedule/:productId",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: SpecialistsList
      }
    }]
  },
  {
    path: "/login",
    name: "Login",
    components: {
      site: Login
    }
  },
  {
    path: "/password/reset/:token",
    name: "ResetPassword",
    components: {
      site: ResetPassword
    }
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
  }
]

export default routes
