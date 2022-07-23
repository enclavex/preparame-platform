<template>
  <div class="product-crud">
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
      apiUrl: "/products",
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
        shortName: {
          label: "Nome Resumido",
          name: "shortName",
          size: "5",
          row: 1,
          col: 2,
          model: "",
          type: "Input",
        },
        status: {
          label: "Situação",
          name: "status",
          size: "3",
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
          size: "3",
          row: 2,
          col: 2,
          model: "",
          type: "Select",
          options: [
            {
              label: "Agendado",
              value: "SCHEDULED",
            },
            {
              label: "Não Agendado",
              value: "NON_SCHEDULED",
            },
          ],
        },
        bestSeller: {
          label: "Mais Vendido",
          name: "bestSeller",
          size: "3",
          row: 2,
          col: 3,
          model: "",
          type: "Select",
          options: [
            {
              label: "Mais Vendido",
              value: "BEST_SELLER",
            },
            {
              label: "Normal",
              value: "NORMAL",
            },
          ],
        },
        price: {
          label: "Preço",
          name: "price",
          size: "2",
          row: 2,
          col: 4,
          model: "",
          type: "Decimal",
        },
      },
      breadcrumbs: [
        {
          title: "Produtos",
          to: "/products",
        },
        {
          title: "Cadastro de Produtos",
          to: "",
        },
      ],
      title: "Cadastro de Produtos",
    };
  },
  async created() {
    this.id = this.$router.history.current.params.id;

    await openEditCrud(this.id, this.apiUrl, this.cols);
  },
  methods: {
    save: async function (data) {
      return await saveCrud(this.id, this.apiUrl, data);
    },
  },
};
</script>

<style></style>
