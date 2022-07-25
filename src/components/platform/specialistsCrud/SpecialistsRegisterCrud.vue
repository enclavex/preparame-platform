<template>
  <div class="specialist-crud">
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
      editUrl: "/specialists",
      tables: {
        mainTable: {
          id: null,
          apiUrl: "/specialists",
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
              size: "6",
              row: 1,
              col: 1,
              model: "",
              type: "Input",
              visible: true,
            },
            bio: {
              label: "Bio",
              name: "bio",
              size: "12",
              row: 2,
              col: 1,
              model: "",
              type: "Input",
              visible: true,
            },
            status: {
              label: "Situação",
              name: "status",
              size: "6",
              row: 2,
              col: 2,
              model: "",
              type: "Select",
              visible: true,
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
              visible: true,
            },
            user: {
              label: "Usuário",
              name: "userId",
              size: "6",
              row: 2,
              col: 1,
              model: "",
              type: "DialogSelect",
              visible: true,
              options: {
                table: "users",
                value: "id",
                label: "name",
              },
            },
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
