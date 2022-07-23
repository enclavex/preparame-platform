<template>
  <div class="specialist-crud">
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
      title: "Especialistas",
      url: "specialists",
      breadcrumbs: [
        {
          title: "Especialistas",
          to: "",
        },
      ],
      filters: {
        name: {
          label: "Nome",
          name: "name",
          size: "4",
          row: 1,
          col: 1,
          model: "",
          type: "Input",
        },
        userId: {
          label: "Usuário",
          name: "userId",
          size: "5",
          row: 1,
          col: 3,
          model: "",
          type: "DialogSelect",
          options: {
            table: "users",
            value: "id",
            label: "name"
          }
        },
        status: {
          label: "Situação",
          name: "status",
          size: "2",
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
          name: "status",
          align: "left",
          label: "Situação",
          field: "status.label",
          sortable: true,
        },
        {
          name: "userName",
          align: "left",
          label: "Usuário",
          field: "user.name",
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
