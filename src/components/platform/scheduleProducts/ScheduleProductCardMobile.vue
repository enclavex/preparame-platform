<template>
  <q-card class="schedule-product-card-mobile q-mr-sm q-mb-sm">
    <q-card-section class="q-pa-none">
      <div
        :class="{
          col: true,
          'no-wrap': true,
          'items-center': true,
          'bg-secondary': userProducts && userProducts.availableQuantity > 0,
          'bg-negative': !(userProducts && userProducts.availableQuantity > 0),
          'q-pa-sm': true,
          'schedule-product-card-mobile-header': true
        }"
      >
        <div class="col text-h6 text-white ellipsis">
          {{ product.shortName }}
        </div>
        <div class="text-white text-caption">
          {{
            `${
              (userProducts && userProducts.availableQuantity) || 0
            } Disponível(eis)`
          }}
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-none">
      <div class="text-subtitle1 text-grey-8 q-pa-sm">{{ product.name }}</div>
    </q-card-section>
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
import { filterCrud } from "../crud/utils/filterCrud";

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
.schedule-product-card-mobile {
  width: 100%;
}

.schedule-product-card-mobile-header{
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
</style>
