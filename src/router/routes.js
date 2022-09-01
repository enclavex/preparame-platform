import { platformRoutesGroup } from "./platform/index"
import { siteRoutesGroup } from "./site/index"
import Site from "../layouts/Site.vue"

const routes = [
  ...platformRoutesGroup,
  ...siteRoutesGroup,
]

export default routes
