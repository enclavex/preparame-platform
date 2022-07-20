<template>
  <div class="subscription-plan-crud">
    <CrudRegister
      :breadcrumbs="breadcrumbs"
      :title="'Cadastro de Plano de Assinatura'"
      :columns="cols"
    />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";

import CrudRegister from "./../crud/CrudRegister.vue";

export default {
  components: {
    CrudRegister,
  },
  data: () => {
    return {
      cols: {
        name: {
          label: "Nome",
          name: "name",
          size: "5",
          row: 1,
          col: 1,
          model: "",
          type: "input",
        },
        price: {
          label: "Preço",
          name: "price",
          mask: "####.##",
          size: "5",
          row: 1,
          col: 2,
          model: "",
          type: "decimal",
        },
        status: {
          label: "Situação",
          name: "status",
          size: "5",
          row: 2,
          col: 1,
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
          size: "5",
          row: 2,
          col: 2,
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
      breadcrumbs: [
        {
          title: "Planos de Assinaturas",
          to: "/subscriptionPlans",
        },
        {
          title: "Cadastro de Planos de Assinaturas",
          to: "",
        },
      ],
      rows: [],
    };
  },
  methods: {
    save: async function (data) {
      let url = "/subscriptionPlans";

      const config = {
        method: "post",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        data: data,
        url: `${baseApiUrl}${url}`,
      };

      const result = await axios(config)
        .then(subscriptionPlan => {
          return subscriptionPlan
        })
        .catch(showError);

      return result;
    },
  },
};
</script>

<style></style>
