<template>
  <div class="product-crud">
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
      editUrl: "/users/products",
      tables: {
        mainTable: {
          id: null,
          apiUrl: "/users/products",
          registerColumns: {
            user: {
              label: "Usuário",
              name: "userId",
              size: "5",
              row: 1,
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
            product: {
              label: "Produto",
              name: "productId",
              size: "5",
              row: 1,
              col: 2,
              model: "",
              type: "DialogSelect",
              visible: true,
              options: {
                table: "products",
                value: "id",
                label: "name",
              },
            },
            availableQuantity: {
              label: "Quantidade",
              name: "availableQuantity",
              size: "1",
              row: 1,
              col: 3,
              model: "",
              type: "Integer",
              visible: true,
            },
          },
        }
      },
      breadcrumbs: [
        {
          title: "Adicionar Produtos Para Usuários",
          to: "",
        },
      ],
      title: {
        mainTable: "Adicionar Produtos Para Usuários",
      },
    };
  },
  created() {
    this.id = this.$router.history.current.params.id;

    openEditCrud(this.id, this.editUrl, this.tables);
  },
  methods: {
    save: async function (data) {
      try {
        await saveCrud(
          this.tables.mainTable.apiUrl,
          data.mainTable
        );
      } catch (err) {
        showError(err);

        return false;
      }
    },
  },
};
</script>

<style></style>
