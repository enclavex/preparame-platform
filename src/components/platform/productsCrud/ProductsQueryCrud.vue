<template>
  <div class="product-crud">
    <CrudQuery
      :title="title"
      :breadcrumbs="breadcrumbs"
      :filters="filters"
      :columns="columns"
      :url="url"
    />
  </div>
</template>

<script>
import CrudQuery from "../crud/CrudQuery.vue";

export default {
  components: {
    CrudQuery,
  },
  methods: {},
  data() {
    return {
      title: "Produtos",
      url: "products",
      breadcrumbs: [
        {
          title: "Produtos",
          to: "",
        },
      ],
      filters: {
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
          size: "6",
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
            {
              label: "Todos",
              value: "",
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
            {
              label: "Todos",
              value: "",
            },
          ],
        },
        bestSeller: {
          label: "Mais Vendidos",
          name: "bestSeller",
          size: "6",
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
            {
              label: "Todos",
              value: "",
            },
          ],
        }
      },
      columns: [
        {
          name: "name",
          label: "Nome",
          align: "left",
          field: "name",
          sortable: true,
        },
        {
          name: "shortName",
          label: "Nome Resumido",
          align: "left",
          field: "shortName",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "Situação",
          field: "status.label",
          sortable: true,
        },
        {
          name: "type",
          align: "left",
          label: "Tipo",
          field: "type.label",
          sortable: true,
        },
        {
          name: "bestSeller",
          align: "left",
          label: "Mais Vendidos",
          field: "bestSeller.label",
          sortable: true,
        },
        {
          name: "price",
          align: "right",
          label: "Preço",
          field: "price",
          sortable: true,
        },
        {
          name: "actions",
          label: "Ações",
          align: "center",
          field: "actions",
          sortable: false,
          style: "width: 10px;",
        },
      ],
    };
  },
};
</script>

<style></style>
