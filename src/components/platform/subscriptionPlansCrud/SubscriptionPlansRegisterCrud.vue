<template>
  <div class="subscription-plan-crud">
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

export default {
  components: {
    CrudRegister,
  },
  data: () => {
    return {
      registerType: "unique",
      editUrl: "/subscriptionPlans",
      tables: {
        mainTable: {
          id: null,
          apiUrl: "/subscriptionPlans",
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
              size: "6",
              row: 1,
              col: 1,
              model: "",
              type: "Input",
              visible: true,
            },
            price: {
              label: "Preço",
              name: "price",
              size: "6",
              row: 1,
              col: 2,
              model: "",
              type: "Decimal",
              visible: true,
            },
            status: {
              label: "Situação",
              name: "status",
              size: "6",
              row: 2,
              col: 1,
              model: "",
              type: "Select",
              visible: true,
              options: [
                {
                  label: "Ativo",
                  value: "ACTIVE",
                },
                {
                  label: "Inativo",
                  value: "INACTIVE",
                },
              ],
            },
            type: {
              label: "Tipo",
              name: "type",
              size: "6",
              row: 2,
              col: 2,
              model: "",
              type: "Select",
              visible: true,
              options: [
                {
                  label: "Site",
                  value: "SITE",
                },
                {
                  label: "Empresa",
                  value: "COMPANY",
                },
              ],
            },
          },
        },
      },
      breadcrumbs: [
        {
          title: "Planos de Assinaturas",
          to: "/subscriptionPlans",
        },
        {
          title: "Cadastro de Planos de Assinaturas",
          to: "",
        },
      ],
      title: "Cadastro de Plano de Assinatura",
    };
  },
  async created() {
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
