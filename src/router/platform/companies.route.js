import CompaniesQueryCrud from "../../components/platform/companiesCrud/CompaniesQueryCrud.vue"
import CompanyEmployeesQueryCrud from "../../components/platform/companyEmployeesCrud/CompanyEmployeesQueryCrud.vue"
import CompanyEmployeesRegisterCrud from "../../components/platform/companyEmployeesCrud/CompanyEmployeesRegisterCrud.vue"
import CompaniesRegisterCrud from "../../components/platform/companiesCrud/CompaniesRegisterCrud.vue"
import Platform from "../../layouts/Platform.vue"

const companyRoutes = [
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
]

export { companyRoutes }