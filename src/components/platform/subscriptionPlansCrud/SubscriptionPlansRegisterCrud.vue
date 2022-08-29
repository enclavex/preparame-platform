<template>
  <div class="subscription-plan-crud">
    <CrudRegister
      :breadcrumbs="breadcrumbs"
      :title="title"
      :tables="tables"
      :registerType="registerType"
    />
  </div>
</template>

<script>
import CrudRegister from "./../../general/crud/CrudRegister.vue";
import { openEditCrud } from "./../../general/crud/utils/openEditCrud.js";
import { saveCrud } from "./../../general/crud/utils/saveCrud.js";

export default {
  components: {
    CrudRegister,
  },
  data: () => {
    return {
      registerType: "parentChild",
      editUrl: "/subscriptionPlans",
      tables: {
        mainTable: {
          id: null,
          apiUrl: "/subscriptionPlans",
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
            price: {
              label: "Preço",
              name: "price",
              size: "6",
              row: 1,
              col: 2,
              model: "",
              type: "Decimal",
              visible: true,
            },
            status: {
              label: "Situação",
              name: "status",
              size: "6",
              row: 2,
              col: 1,
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
            type: {
              label: "Tipo",
              name: "type",
              size: "6",
              row: 2,
              col: 2,
              model: "",
              type: "Select",
              visible: true,
              options: [
                {
                  label: "Site",
                  value: "SITE",
                },
                {
                  label: "Empresa",
                  value: "COMPANY",
                },
              ],
            },
          },
        },
        childTable: {
          content: "subscriptionPlanProduct",
          apiUrl: "/subscriptionPlans/:id/products",
          removeUrl: "subscriptionPlans/products",
          registerColumns: {
            id: {
              label: "Id",
              name: "id",
              size: "12",
              col: 1,
              row: 1,
              model: "",
              type: "Input",
              visible: false,
            },
            ref: {
              label: "Ref",
              name: "ref",
              size: "12",
              col: 1,
              row: 1,
              model: "",
              type: "Input",
              visible: false,
            },
            productId: {
              label: "Produto",
              name: "productId",
              size: "8",
              col: 1,
              row: 1,
              model: "",
              type: "DialogSelect",
              visible: true,
              options: {
                table: "products",
                value: "id",
                label: "name",
                editFieldLabel: "product",
                editFieldValue: "productId",
              },
            },
            availableQuantity: {
              label: "Quantidade Disponível",
              name: "availableQuantity",
              size: "4",
              col: 2,
              row: 1,
              model: "",
              type: "Integer",
              visible: true,
            },
          },
          tableColumns: [
            {
              name: "id",
              label: "Id",
              align: "left",
              field: "id",
              sortable: false,
              visible: false,
            },
            {
              name: "productName",
              label: "Produto",
              align: "left",
              field: "product.name",
              sortable: false,
              visible: true,
            },
            {
              name: "productId",
              label: "Produto Id",
              align: "left",
              field: "productId",
              type: "DialogSelect",
              labelColumn: "productName",
              sortable: false,
              visible: false,
            },
            {
              name: "availableQuantity",
              label: "Quantidade Disponivel",
              align: "right",
              field: "availableQuantity",
              sortable: false,
              visible: true,
            },
          ],
          tableData: [],
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
      title: "Cadastro de Plano de Assinatura",
    };
  },
  async created() {
    this.id = this.$router.history.current.params.id;

    openEditCrud(this.id, this.editUrl, this.tables);
  },
  methods: {
    save: async function (data) {
      try {
        const subscriptionPlanCreated = await saveCrud(
          this.tables.mainTable.apiUrl,
          data.mainTable
        );

        if (subscriptionPlanCreated.status === 201) {
          this.tables.childTable.apiUrl = this.tables.childTable.apiUrl.replace(
            ":id",
            subscriptionPlanCreated.data.id
          );

          data.childTable.forEach(async (values) => {
            await saveCrud(this.tables.childTable.apiUrl, values);
          });
        }

        return subscriptionPlanCreated;
      } catch (err) {
        showError(err);

        return false;
      }
    },
  },
};
</script>

<style></style>
