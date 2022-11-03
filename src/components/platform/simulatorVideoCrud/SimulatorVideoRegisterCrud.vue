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
      editUrl: "/products/simulatorVideos",
      tables: {
        mainTable: {
          id: null,
          apiUrl: "/products/simulatorVideos",
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
            question: {
              label: "Questão",
              name: "question",
              size: "6",
              row: 1,
              col: 1,
              model: "",
              type: "Input",
              visible: true,
            },
            linkVideo: {
              label: "Link",
              name: "linkVideo",
              size: "6",
              row: 1,
              col: 2,
              model: "",
              type: "Input",
              visible: true,
            },
            tip: {
              label: "Dica",
              name: "tip",
              size: "6",
              row: 2,
              col: 2,
              model: "",
              type: "TextEditor",
              visible: true,
            },
            simulatorVideosGroup: {
              label: "Grupo de Simulador de Videos",
              name: "simulatorVideosGroupId",
              size: "6",
              row: 2,
              col: 1,
              model: "",
              type: "DialogSelect",
              visible: true,
              options: {
                table: "products/simulatorVideosGroup",
                value: "id",
                label: "name",
              },
            },
          },
        },
      },
      breadcrumbs: [
        {
          title: "Videos do Simulador",
          to: "/simulatorVideos",
        },
        {
          title: "Cadastro Videos do Simulador",
          to: "",
        },
      ],
      title: "Cadastro Videos do Simulador",
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
