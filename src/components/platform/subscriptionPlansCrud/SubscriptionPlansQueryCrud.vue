<template>
  <div class="subscription-plan-crud">
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
  methods: {
  },
  data() {
    return {
      title: "Planos de Assinaturas",
      url: "subscriptionPlans",
      breadcrumbs: [
        {
          title: "Planos de Assinaturas",
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
          type: "input",
        },
        status: {
          label: "Situação",
          name: "status",
          size: "2",
          row: 1,
          col: 2,
          model: "",
          type: "select",
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
          row: 1,
          col: 3,
          model: "",
          type: "select",
          options: [
            {
              label: "Site",
              value: "SITE",
            },
            {
              label: "Empresa",
              value: "COMPANY",
            },
            {
              label: "Todos",
              value: "",
            },
          ],
        },
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
          name: "price",
          align: "right",
          label: "Preço",
          field: "price",
          sortable: true,
        },
        {
          name: "status",
          label: "Situação",
          align: "left",
          field: "status",
          sortable: true,
        },
        {
          name: "type",
          label: "Tipo",
          align: "left",
          field: "type",
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
