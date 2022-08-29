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
import CrudQuery from "./../../general/crud/CrudQuery.vue";

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
          type: "Input",
          visible: true
        },
        status: {
          label: "Situação",
          name: "status",
          size: "3",
          row: 1,
          col: 2,
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
          visible: true
        },
        type: {
          label: "Tipo",
          name: "type",
          size: "3",
          row: 1,
          col: 3,
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
            {
              label: "Todos",
              value: "",
            },
          ],
          visible: true
        },
      },
      columns: [
        {
          name: "name",
          label: "Nome",
          align: "left",
          field: "name",
          sortable: true,
          visible: true
        },
        {
          name: "price",
          align: "right",
          label: "Preço",
          field: "price",
          sortable: true,
          visible: true
        },
        {
          name: "status",
          label: "Situação",
          align: "left",
          field: "status.label",
          sortable: true,
          visible: true
        },
        {
          name: "type",
          label: "Tipo",
          align: "left",
          field: "type.label",
          sortable: true,
          visible: true
        },
        {
          name: "actions",
          label: "Ações",
          align: "center",
          field: "actions",
          sortable: false,
          style: "width: 10px;",
          visible: true
        },
      ],
    };
  },
};
</script>

<style></style>
