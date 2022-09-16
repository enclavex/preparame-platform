<template>
  <div id="q-app" class="home-user">
    <q-page>
      <div :class="{ row: !mobile }">
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
      loadUserCard: false,
      mobile: false,
    };
  },
  components: {
    Schedule,
    UserCard,
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  async created() {
    const filters = [
      {
        name: "userId",
        model: localStorage.getItem("userId"),
      },
    ];

    const userProducts = await filterCrud(filters, "users/products");

    userProducts.forEach((userProduct) => {
      if (userProduct.availableQuantity > 0) {
        userProduct.scheduled = false;
      } else {
        userProduct.scheduled = true;
      }

      this.products.push(userProduct.product);
    });

    this.loadUserCard = true;
  },
  methods: {
    goUrl: function (url) {
      this.$router.push({ path: `${url}/${this.product.id}` });
    },
  },
};
</script>

<style>
.home-user {
  height: 100%;
}
</style>
