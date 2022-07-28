<template>
  <div class="product-list">
    <q-page>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="product-list-content">
        <div class="col q-ml-md q-mt-md text-h5 ellipsis">
          Agende Nossos Serviços
        </div>
        <div class="product-list-container">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :id="product.id"
            :name="product.name"
            :shortName="product.shortName"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";

import ProductCard from "./ProductCard";
import Breadcrumbs from "./../../general/Breacrumbs.vue";

export default {
  data() {
    return {
      products: [],
      breadcrumbs: [
        {
          title: "Serviços",
          to: "",
        },
      ],
    };
  },
  components: {
    ProductCard,
    Breadcrumbs,
  },
  async mounted() {
    const products = await axios.get(`${baseApiUrl}/products`).catch(showError);

    this.products = products.data;
  },
};
</script>

<style lang="scss">
.product-list-content {
  padding: 20px 50px;
}

.product-list-container {
  display: flex;
  flex-direction: row;
}

</style>
