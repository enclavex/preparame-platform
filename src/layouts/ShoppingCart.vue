<template>
  <div class="shopping-cart">
    <div class="shopping-cart-title">
      <h1>Meu carrinho</h1>
    </div>
    <div class="shopping-cart-container">
      <div class="shopping-cart-itens">
        <ShoppingCartItemCard />
        <ShoppingCartItemCard />
        <ShoppingCartItemCard />
        <ShoppingCartItemCard />
      </div>
      <div class="shopping-cart-total">
        <ShoppingCartTotalCard />
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
    ShoppingCartTotalCard
  },
  created() {
    window.scrollTo(0, 0);
  }
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
