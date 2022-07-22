<template>
  <div class="company-crud">
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
  data() {
    return {
      title: "Empresas",
      url: "companies",
      breadcrumbs: [
        {
          title: "Empresas",
          to: "",
        },
      ],
      filters: {
        name: {
          label: "Nome",
          name: "name",
          size: "12",
          row: 1,
          col: 1,
          model: "",
          type: "Input",
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
          name: "actions",
          label: "Ações",
          align: "center",
          field: "actions",
          sortable: false,
          style: "width: 10px;",
        },
      ],
    };
  }
};
</script>

<style></style>
