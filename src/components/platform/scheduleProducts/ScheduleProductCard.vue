<template>
  <q-card class="schedule-product-card q-mr-sm q-mb-sm">
    <q-card-section class="q-ml-sm q-pa-sm">
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">{{ product.shortName }}</div>
        <q-badge
          class="q-pa-sm q-mr-sm"
          rounded
          :color="
            userProducts && userProducts.availableQuantity > 0
              ? 'secondary'
              : 'negative'
          "
          :label="`${
            (userProducts && userProducts.availableQuantity) || 0
          } Disponível(eis)`"
        ></q-badge>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1 text-grey-8">{{ product.name }}</div>
    </q-card-section>
    <q-separator />
    <q-card-actions class="row no-wrap justify-end">
      <q-btn
        class="col-4"
        color="secondary"
        @click="goUrl('schedule')"
        :disable="
          !userProducts ||
          !'availableQuantity' in userProducts ||
          (userProducts &&
            'availableQuantity' in userProducts &&
            userProducts.availableQuantity <= 0)
        "
      >
        Agendar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { filterCrud } from "./../../general/crud/utils/filterCrud";

export default {
  data() {
    return {
      userProducts: {},
    };
  },
  props: ["product"],
  computed: {
    priceConverted() {
      return priceConvert(this.price);
    },
  },
  methods: {
    goUrl: function (url) {
      this.$router.push({ path: `${url}/${this.product.id}` });
    },
  },
  async mounted() {
    const filters = [
      {
        name: "productId",
        model: this.product.id,
      },
      {
        name: "userId",
        model: localStorage.getItem("userId"),
      },
    ];

    const userProducts = await filterCrud(filters, "users/products");

    this.userProducts = userProducts[0];
  },
};
</script>

<style lang="scss">
.schedule-product-card {
  width: 400px;
}
</style>
