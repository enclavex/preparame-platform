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
      title: "Videos do Simulador",
      url: "products/simulatorVideos",
      blockCreateNew: false,
      blockRemove: false,
      breadcrumbs: [
        {
          title: "Videos do Simulador",
          to: "",
        },
      ],
      filters: {
        simulatorVideosGroupId: {
          label: "Grupos de Videos do Simulador",
          name: "simulatorVideosGroupId",
          size: "12",
          row: 1,
          col: 1,
          model: "",
          type: "DialogSelect",
          visible: true,
          options: {
            table: "products/simulatorVideosGroup",
            value: "id",
            label: "name"
          }
        },       
      },
      columns: [
        {
          name: "question",
          label: "Questão",
          align: "left",
          field: "question",
          sortable: true,
          visible: true,
        },
        {
          name: "linkVideo",
          label: "Link",
          align: "left",
          field: "linkVideo",
          sortable: true,
          visible: true,
        },
        {
          name: "tip",
          label: "Dica",
          align: "left",
          field: "tip",
          sortable: true,
          visible: true,
        },
        {
          name: "objective",
          label: "Objetivo",
          align: "left",
          field: "objective",
          sortable: true,
          visible: true,
        },
        {
          name: "necessariesSkills",
          label: "Habilidades Necessárias",
          align: "left",
          field: "necessariesSkills",
          sortable: true,
          visible: true,
        },
        {
          name: "answerStrategy",
          label: "Estratégia de Resposta",
          align: "left",
          field: "answerStrategy",
          sortable: true,
          visible: true,
        },
        {
          name: "avoid",
          label: "Evite",
          align: "left",
          field: "avoid",
          sortable: true,
          visible: true,
        },
        {
          name: "simulatorVideosGroupName",
          align: "left",
          label: "Grupo de Simulador de Videos",
          field: "simulatorVideosGroup.name",
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
