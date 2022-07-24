<template>
  <div class="subscription-plan-crud">
    <CrudRegister :breadcrumbs="breadcrumbs" :title="title" :columns="cols" />
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
      apiUrl: "/subscriptionPlans",
      id: null,
      cols: {
        name: {
          label: "Nome",
          name: "name",
          size: "6",
          row: 1,
          col: 1,
          model: "",
          type: "Input",
        },
        price: {
          label: "Preço",
          name: "price",
          size: "6",
          row: 1,
          col: 2,
          model: "",
          type: "Decimal",
        },
        status: {
          label: "Situação",
          name: "status",
          size: "6",
          row: 2,
          col: 1,
          model: "",
          type: "Select",
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

    openEditCrud(this.id, this.apiUrl, this.cols);
  },
  methods: {
    save: async function (data) {
      return await saveCrud(this.id, this.apiUrl, data);
    },
  },
};
</script>

<style></style>
