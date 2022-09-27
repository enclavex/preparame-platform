<template>
  <div class="user-crud">
    <CrudQuery
      :title="title"
      :breadcrumbs="breadcrumbs"
      :filters="filters"
      :columns="columns"
      :url="url"
      :blockCreateNew="blockCreateNew"
      :blockRemove="blockRemove"
    />
  </div>
</template>

<script>
import CrudQuery from "../../general/crud/CrudQuery.vue";

export default {
  components: {
    CrudQuery,
  },
  data() {
    return {
      title: "Grupos de Videos do Simulador",
      url: "products/simulatorVideosGroup",
      blockCreateNew: false,
      blockRemove: false,
      breadcrumbs: [
        {
          title: "Grupos de Videos do Simulador",
          to: "",
        },
      ],
      filters: {
        name: {
          label: "Nome",
          name: "name",
          size: "9",
          row: 1,
          col: 1,
          model: "",
          type: "Input",
          visible: true,
        },
        active: {
          label: "Situação",
          name: "active",
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
          visible: true,
        },
      },
      columns: [
        {
          name: "name",
          label: "Nome",
          align: "left",
          field: "name",
          sortable: true,
          visible: true,
        },
        {
          name: "active",
          align: "left",
          label: "Situação",
          field: "active.label",
          sortable: true,
          visible: true,
        },
        {
          name: "actions",
          label: "Ações",
          align: "center",
          field: "actions",
          sortable: false,
          style: "width: 10px;",
          visible: true,
        },
      ],
    };
  },
};
</script>

<style></style>
