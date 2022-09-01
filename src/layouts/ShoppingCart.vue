<template>
  <div class="shopping-cart">
    <div class="shopping-cart-title">
      <h1>Meu carrinho</h1>
    </div>
    <div
      :class="{'shopping-cart-container': true, 'row': !mobile, 'column':mobile}"
    >
      <div class="shopping-cart-itens col-8">
        <ShoppingCartItemCard
          v-for="(product, index) in productsAdjusted"
          :key="index"
          :product="product"
        />
      </div>
      <div class="shopping-cart-total col-4">
        <ShoppingCartTotalCard :products="productsAdjusted" />
      </div>
    </div>
  </div>
</template>

<script>
import ShoppingCartItemCard from "../components/site/shoppingCart/ShoppingCartItemCard.vue";
import ShoppingCartTotalCard from "../components/site/shoppingCart/ShoppingCartTotalCard.vue";

export default {
  components: {
    ShoppingCartItemCard,
    ShoppingCartTotalCard,
  },
  data() {
    return {
      products: [],
      productsAdjusted: [],
      mobile: false
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    
    this.mobile = window.mobileAndTabletCheck();

    this.products = JSON.parse(localStorage.getItem("cart") || "[]");

    this.products.forEach((product) => {
      const indexProductAdjusted = this.productsAdjusted.findIndex(
        (productAdjusted) => {
          return product.id == productAdjusted.id;
        }
      );

      if (indexProductAdjusted > -1) {
        this.productsAdjusted[indexProductAdjusted].qnty += 1;
      } else {
        Object.assign(product, { qnty: 1 });

        this.productsAdjusted.push(product);
      }
    });
  },
};
</script>

<style>
.shopping-cart-title h1 {
  text-align: center;
  grid-column: 1;
  grid-row: 1;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: #667998;
  font-size: 3rem;
  margin-bottom: 20px;
}

.shopping-cart-container {
  display: flex;
  flex-direction: row;
  min-width: 1200px;
}

.shopping-cart-total {
  height: 50vh;
  width: 30vw;
}

@media (orientation: portrait) {
  .shopping-cart-container {
    flex-direction: column;
    min-width: unset;
  }

  .shopping-cart-total {
    height: 40vh;
    width: 90vw;
    margin: 0 auto 20px auto;
  }
}
</style>
