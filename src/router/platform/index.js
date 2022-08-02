import { companyRoutes } from "./companies.route"
import { loginRoutes } from "./login.route"
import { platformRoutes } from "./platform.route"
import { productRoutes } from "./products.route"
import { specialistRoutes } from "./specialists.route"
import { subscriptionPlanRoutes } from "./subscriptionPlans.route"
import { userRoutes } from "./users.route"

const platformRoutesGroup =
    [
        ...companyRoutes,
        ...loginRoutes,
        ...platformRoutes,
        ...productRoutes,
        ...specialistRoutes,
        ...subscriptionPlanRoutes,
        ...userRoutes,
    ]

export { platformRoutesGroup }