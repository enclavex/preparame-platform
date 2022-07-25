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

export default {
  components: {
    CrudRegister,
  },
  data: () => {
    return {
      registerType: "unique",
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
