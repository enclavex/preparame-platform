import HomePage from "../layouts/HomePage.vue"
import Login from "../layouts/Login.vue"
import ResetPassword from "../layouts/ResetPassword.vue"
import ProductDetails from "../layouts/ProductDetails.vue"
import ProductList from "../layouts/ProductList.vue"
import ScheduleProductsList from "../components/platform/scheduleProducts/ScheduleProductsList.vue"
import ProductSchedule from "../layouts/ProductSchedule.vue"
import ShoppingCart from "../layouts/ShoppingCart.vue"
import Site from "../layouts/Site.vue"
import Platform from "../layouts/Platform.vue"
import CompanyDetails from "../layouts/CompanyDetails.vue"
import FAQ from "../layouts/FAQ.vue"
import PrivacyTerms from "../layouts/PrivacyTerms.vue"
import UseTerms from "../layouts/UseTerms.vue"
import ScheduleSpecialistsList from "../components/platform/scheduleProducts/ScheduleSpecialistsList.vue"
import HomeUser from "../components/platform/home/HomeUser.vue"
import SubscriptionPlansQueryCrud from "../components/platform/subscriptionPlansCrud/SubscriptionPlansQueryCrud.vue"
import SubscriptionPlansRegisterCrud from "../components/platform/subscriptionPlansCrud/SubscriptionPlansRegisterCrud.vue"
import CompaniesQueryCrud from "../components/platform/companiesCrud/CompaniesQueryCrud.vue"
import CompanyEmployeesQueryCrud from "../components/platform/companyEmployeesCrud/CompanyEmployeesQueryCrud.vue"
import CompanyEmployeesRegisterCrud from "../components/platform/companyEmployeesCrud/CompanyEmployeesRegisterCrud.vue"
import CompaniesRegisterCrud from "../components/platform/companiesCrud/CompaniesRegisterCrud.vue"
import SpecialistsQueryCrud from "../components/platform/specialistsCrud/SpecialistsQueryCrud.vue"
import SpecialistsRegisterCrud from "../components/platform/specialistsCrud/SpecialistsRegisterCrud.vue"
import SpecialistProvidesTimetables from "../components/platform/specialistProvidesTimetables/SpecialistProvidesTimetables"
import ProductsQueryCrud from "../components/platform/productsCrud/ProductsQueryCrud.vue"
import ProductsRegisterCrud from "../components/platform/productsCrud/ProductsRegisterCrud.vue"
import UsersQueryCrud from "../components/platform/usersCrud/UsersQueryCrud.vue"
import UsersRegisterCrud from "../components/platform/usersCrud/UsersRegisterCrud.vue"

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
    }]
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
    path: "/products/:id",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: ProductsRegisterCrud
      }
    }]
  },
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
  {
    path: "/companies/employees",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: CompanyEmployeesQueryCrud
      }
    }]
  },
  {
    path: "/companies/employees/new",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: CompanyEmployeesRegisterCrud
      }
    }]
  },
  {
    path: "/companies/employees/:id",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: CompanyEmployeesRegisterCrud
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
        content: CompaniesQueryCrud
      }
    }]
  },
  {
    path: "/companies/new",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: CompaniesRegisterCrud
      }
    }]
  },
  {
    path: "/companies/:id",
    components: {
      site: Platform
    },
    children: [{
      path: "/",
      components: {
        content: CompaniesRegisterCrud
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
