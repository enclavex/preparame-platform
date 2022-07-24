<template>
  <div class="specialist-crud">
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
      apiUrl: "/specialists",
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
        bio: {
          label: "Bio",
          name: "bio",
          size: "12",
          row: 2,
          col: 1,
          model: "",
          type: "Input",
        },
        status: {
          label: "Situação",
          name: "status",
          size: "6",
          row: 2,
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
          ],
        },
        linkedinUrl: {
          label: "LinkedIn",
          name: "linkedinUrl",
          size: "6",
          row: 1,
          col: 2,
          model: "",
          type: "Input",
        },
        user: {
          label: "Usuário",
          name: "userId",
          size: "6",
          row: 2,
          col: 1,
          model: "",
          type: "DialogSelect",
          options: {
            table: "users",
            value: "id",
            label: "name",
          },
        },
      },
      breadcrumbs: [
        {
          title: "Especialistas",
          to: "/specialists",
        },
        {
          title: "Cadastro de Especialistas",
          to: "",
        },
      ],
      title: "Cadastro de Especialistas",
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
