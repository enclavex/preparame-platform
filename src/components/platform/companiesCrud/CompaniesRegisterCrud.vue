<template>
  <div class="company-crud">
    <CrudRegister
      :breadcrumbs="breadcrumbs"
      :title="title"
      :tables="tables"
      :registerType="registerType"
    />
  </div>
</template>

<script>
import CrudRegister from "./../crud/CrudRegister.vue";
import { openEditCrud } from "./../crud/utils/openEditCrud.js";
import { saveCrud } from "./../crud/utils/saveCrud.js";
import { showError } from "./../../../global.js";

export default {
  components: {
    CrudRegister,
  },
  data: () => {
    return {
      registerType: "parentChild",
      editUrl: "/companies",
      tables: {
        mainTable: {
          id: null,
          apiUrl: "/companies",
          registerColumns: {
            id: {
              label: "Id",
              name: "id",
              size: "12",
              row: 1,
              col: 1,
              model: "",
              type: "Input",
              visible: false,
            },
            name: {
              label: "Nome",
              name: "name",
              size: "12",
              row: 1,
              col: 1,
              model: "",
              type: "Input",
              visible: true,
            },
          },
        },
        childTable: {
          content: "companySubscriptionPlan",
          apiUrl: "/companies/:id/subscriptionPlans",
          removeUrl: "companies/subscriptionPlans",
          registerColumns: {
            id: {
              label: "Id",
              name: "id",
              size: "12",
              col: 1,
              row: 1,
              model: "",
              type: "Input",
              visible: false,
            },
            ref: {
              label: "Ref",
              name: "ref",
              size: "12",
              col: 1,
              row: 1,
              model: "",
              type: "Input",
              visible: false,
            },
            subscriptionPlanId: {
              label: "Plano de Assinatura",
              name: "subscriptionPlanId",
              size: "4",
              col: 1,
              row: 1,
              model: "",
              type: "DialogSelect",
              visible: true,
              options: {
                table: "subscriptionPlans",
                value: "id",
                label: "name",
                editFieldLabel: "subscriptionPlan",
                editFieldValue: "subscriptionPlanId"
              },
            },
            startDate: {
              label: "Data de Início",
              name: "startDate",
              size: "2",
              col: 2,
              row: 1,
              model: "",
              type: "Date",
              visible: true,
            },
            endDate: {
              label: "Data de Fim",
              name: "endDate",
              size: "2",
              col: 3,
              row: 1,
              model: "",
              type: "Date",
              visible: true,
            },
            subscribeToken: {
              label: "Token",
              name: "subscribeToken",
              size: "4",
              col: 4,
              row: 1,
              model: "",
              type: "Input",
              visible: true,
            },
          },
          tableColumns: [
            {
              name: "id",
              label: "Id",
              align: "left",
              field: "id",
              sortable: false,
              visible: false,
            },
            {
              name: "subscriptionPlanName",
              label: "Plano de Assinatura",
              align: "left",
              field: "subscriptionPlan.name",
              sortable: false,
              visible: true,
            },
            {
              name: "subscriptionPlanId",
              label: "Plano de Assinatura Id",
              align: "left",
              field: "subscriptionPlanId",
              type: "DialogSelect",
              labelColumn: "subscriptionPlanName",
              sortable: false,
              visible: false,
            },
            {
              name: "startDate",
              label: "Data de Início",
              align: "left",
              field: "startDate",
              sortable: false,
              visible: true,
              type: 'date'
            },
            {
              name: "endDate",
              label: "Data de Fim",
              align: "left",
              field: "endDate",
              sortable: false,
              visible: true,
              type: 'date'
            },
            {
              name: "subscribeToken",
              label: "Token",
              align: "left",
              field: "subscribeToken",
              sortable: false,
              visible: true,
            },
          ],
          tableData: [],
        },
      },
      breadcrumbs: [
        {
          title: "Empresas",
          to: "/companies",
        },
        {
          title: "Cadastro de Empresas",
          to: "",
        },
      ],
      title: "Cadastro de Empresas",
    };
  },
  created() {
    this.id = this.$router.history.current.params.id;

    openEditCrud(this.id, this.editUrl, this.tables);
  },
  methods: {
    save: async function (data) {
      try {
        const companyCreated = await saveCrud(
          this.tables.mainTable.apiUrl,
          data.mainTable
        );

        if (companyCreated.status === 201) {
          this.tables.childTable.apiUrl = this.tables.childTable.apiUrl.replace(
            ":id",
            companyCreated.data.id
          );

          data.childTable.forEach(async (values) => {
            await saveCrud(this.tables.childTable.apiUrl, values);
          });
        }

        return companyCreated;
      } catch (err) {
        showError(err);

        return false;
      }
    },
  },
};
</script>

<style></style>
