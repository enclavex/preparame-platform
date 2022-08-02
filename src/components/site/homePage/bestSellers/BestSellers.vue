<template>
  <div id="bestSellers" class="best-sellers">
    <div class="best-sellers-title">Serviços mais vendidos</div>
    <div class="best-sellers-cards">
      <BestSellersCard
        v-for="product in products"
        :key="product.id"
        :short-name="product.shortName"
        :name="product.name"
        :price="product.price"
        :product-content="product.productContent"
      />
    </div>
    <a class="best-sellers-see-all" href="/#/ProductList">Ver Todos</a>
  </div>
</template>

<script>
import BestSellersCard from "./BestSellersCard.vue";

import { filterCrud } from "./../../../platform/crud/utils/filterCrud.js";

export default {
  components: {
    BestSellersCard,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.loadProducts();
  },
  methods: {
    async loadProducts() {
      const filters = [
        { name: "status", model: "ACTIVE" },
        { name: "bestSeller", model: "BEST_SELLER" },
      ];

      this.products = await filterCrud(filters, "products");
    },
  },
};
</script>

<style>
.best-sellers {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100vw;
  background-color: rgb(243, 244, 249);
}

.best-sellers-title {
  position: relative;
  font-family: "Nunito", sans-serif;
  font-size: 40px;
  font-weight: 100;
  margin: 40px auto 30px auto;
  text-align: center;
}

.best-sellers-cards {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
}

.best-sellers-see-all {
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-weight: 100;
  height: 50px;
  width: 220px;
  margin: 50px auto 50px auto;
  line-height: 50px;
  text-align: center;
  border: 1px solid #667998;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  background-color: #667998;
  transition: all 0.25s ease;
}

.best-sellers-see-all:hover {
  color: #667998;
  background-color: rgb(243, 244, 249);
}

@media (max-width: 600px) {
  .best-sellers-title {
    font-size: 30px;
  }

  .best-sellers-cards {
    flex-direction: column;
    justify-content: space-around;
    width: unset;
  }

  .best-sellers-see-all {
    margin: 10px auto 20px auto;
  }
}
</style>
