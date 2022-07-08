<template>
  <q-page>
    <q-breadcrumbs class="q-pl-md q-pt-md">
      <q-breadcrumbs-el label="Início" to="/platform" />
      <q-breadcrumbs-el label="Serviços" />
    </q-breadcrumbs>
    <div class="col q-ml-md q-mt-md text-h5 ellipsis">
      Agende Nossos Serviços
    </div>
    <div class="product-list">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :shortName="product.shortName"
      />
    </div>
  </q-page>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";

import ProductCard from "./ProductCard";

export default {
  data() {
    return {
      products: [],
    };
  },
  components: {
    ProductCard,
  },
  async mounted() {
    const products = await axios.get(`${baseApiUrl}/products`).catch(showError);

    this.products = products.data;
  },
};
</script>

<style lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
