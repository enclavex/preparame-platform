<template>
  <div class="company-crud">
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
      apiUrl: "/companies",
      id: null,
      cols: {
        name: {
          label: "Nome",
          name: "name",
          size: "12",
          row: 1,
          col: 1,
          model: "",
          type: "input",
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
