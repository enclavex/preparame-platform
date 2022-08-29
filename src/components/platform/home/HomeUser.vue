<template>
  <div id="q-app" class="homeUser">
    <q-page>
      <div class="row">
        <UserCard v-if="loadUserCard" class="col-3" :products="products" />
        <Schedule :homeType="'USER'" class="col-8" />
      </div>
    </q-page>
  </div>
</template>

<script>
import Schedule from "./templates/Schedule.vue";
import UserCard from "./user/UserCard.vue";

import { filterCrud } from "./../../general/crud/utils/filterCrud";

export default {
  data() {
    return {
      products: [],
      loadUserCard: false
    };
  },
  components: {
    Schedule,
    UserCard,
  },
  async created() {
    const filters = [
      {
        name: "status",
        model: "ACTIVE",
      },
      {
        name: "type",
        model: "SCHEDULED",
      },
    ];

    this.products = await filterCrud(filters, "products");

    for await (let product of this.products) {
      const filters = [
        {
          name: "productId",
          model: product.id,
        },
        {
          name: "userId",
          model: localStorage.getItem("userId"),
        },
      ];

      const userProducts = await filterCrud(filters, "users/products");

      if (userProducts.length > 0 && userProducts[0].availableQuantity > 0) {
        product.scheduled = false;
      } else {
        product.scheduled = true;
      }
    }

    this.loadUserCard = true
  },
  methods: {
    goUrl: function (url) {
      this.$router.push({ path: `${url}/${this.product.id}` });
    },
  },
};
</script>

<style>
.homeUser {
  height: 100%;
}
</style>
