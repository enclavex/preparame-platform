<template>
  <div class="user-crud">
    <CrudRegister
      :breadcrumbs="breadcrumbs"
      :title="title"
      :tables="tables"
      :registerType="registerType"
    />
  </div>
</template>

<script>
import CrudRegister from "../../general/crud/CrudRegister.vue";
import { openEditCrud } from "../../general/crud/utils/openEditCrud.js";
import { saveCrud } from "../../general/crud/utils/saveCrud.js";
import { showError } from "../../../global.js";

export default {
  components: {
    CrudRegister,
  },
  data: () => {
    return {
      registerType: "unique",
      editUrl: "/products/simulatorVideosGroup",
      tables: {
        mainTable: {
          id: null,
          apiUrl: "/products/simulatorVideosGroup",
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
            order: {
              label: "Ordem",
              name: "order",
              size: "3",
              row: 1,
              col: 2,
              model: "",
              type: "Input",
              visible: true,
            },
            active: {
              label: "Situação",
              name: "active",
              size: "3",
              row: 1,
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
              ],
              visible: true
            },
          },
        },
      },
      breadcrumbs: [
        {
          title: "Grupos de Videos do Simulador",
          to: "/simulatorVideosGroups",
        },
        {
          title: "Cadastro Grupos de Videos do Simulador",
          to: "",
        },
      ],
      title: "Cadastro Grupos de Videos do Simulador",
    };
  },
  created() {
    this.id = this.$router.history.current.params.id;

    openEditCrud(this.id, this.editUrl, this.tables);
  },
  methods: {
    save: async function (data) {
      try {
        const videoSimulatorGroupCreated = await saveCrud(
          this.tables.mainTable.apiUrl,
          data.mainTable
        );

        return videoSimulatorGroupCreated;
      } catch (err) {
        showError(err);

        return false;
      }
    },
  },
};
</script>

<style></style>
