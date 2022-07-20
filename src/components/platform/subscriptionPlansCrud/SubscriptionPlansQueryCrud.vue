<template>
  <div class="subscription-plan-crud">
    <CrudQuery
      :title="title"
      :breadcrumbs="breadcrumbs"
      :filters="filters"
      :columns="columns"
      :data="data"
    />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";

import CrudQuery from "../crud/CrudQuery.vue";

export default {
  components: {
    CrudQuery,
  },
  created() {
    this.filter();
  },
  methods: {
    filter: async function (filters) {
      let queryString = "";
      let url = "/subscriptionPlans";

      if (filters) {
        filters.forEach((filter) => {
          if (filter.model) {
            if (queryString) {
              queryString += "&";
            }
            queryString += `${filter.name}=${filter.model}`;
          }
        });

        if (queryString) {
          url += `?${queryString}`;
        }
      }

      const config = {
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      };

      const subscriptionPlans = await axios
        .get(`${baseApiUrl}${url}`, config)
        .catch(showError);

      this.data = subscriptionPlans.data;
    },
  },
  data() {
    return {
      title: "Planos de Assinaturas",
      breadcrumbs: [
        {
          title: "Planos de Assinaturas",
          to: "",
        },
      ],
      filters: {
        name: {
          label: "Nome",
          name: "name",
          size: "6",
          row: 1,
          col: 1,
          model: "",
          type: "input",
        },
        status: {
          label: "Situação",
          name: "status",
          size: "2",
          row: 1,
          col: 2,
          model: "",
          type: "select",
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
        type: {
          label: "Tipo",
          name: "type",
          size: "3",
          row: 1,
          col: 3,
          model: "",
          type: "select",
          options: [
            {
              label: "Site",
              value: "SITE",
            },
            {
              label: "Empresa",
              value: "COMPANY",
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
          name: "price",
          align: "right",
          label: "Preço",
          field: "price",
          sortable: true,
        },
        {
          name: "status",
          label: "Situação",
          field: "status",
          sortable: true,
        },
        {
          name: "type",
          label: "Tipo",
          field: "type",
          sortable: true,
        },
      ],
      data: [],
    };
  },
};
</script>

<style></style>
