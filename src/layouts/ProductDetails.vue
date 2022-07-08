<template>
  <div class="product-details">
    <article class="product-details-article">
      <Presentation />
      <ForYou />
      <Includes />
      <HowItWorks />
      <div class="product-details-buy">
        <a href="/#/ProductSchedule">Adquirir e Agendar este serviço</a>
      </div>
    </article>
  </div>
</template>

<script>
import ForYou from "../components/site/productDetails/ForYou.vue";
import Includes from "../components/site/productDetails/Includes.vue";
import HowItWorks from "../components/site/productDetails/HowItWorks.vue";
import Presentation from "../components/site/productDetails/Presentation.vue";

export default {
  components: {
    ForYou,
    Includes,
    HowItWorks,
    Presentation,
  },
  created() {
    window.scrollTo(0, 0);
  }
};
</script>

<style>
.product-details-article {
  padding: 2%;
  min-width: 950px;
}

.product-details h1 {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  margin: 0.5rem;
}

.product-details-buy {
  background-color: #667998;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 1.5rem;
  height: 100px;
  width: 500px;
  margin: 50px auto;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease;
  -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  user-select: none;
}

.product-details-buy a {
  color: #fff;
  font-family: "Nunito", sans-serif;
}

.product-details-buy:active {
  background-color: rgb(200, 200, 200);
}

@media (orientation: portrait) {
  .product-details-article {
    min-width: unset;
  }

  .product-details-buy {
    padding: 10px;
    font-size: 1rem;
    height: 50px;
    width: 300px;
    margin: 20px auto;
  }
}
</style>
