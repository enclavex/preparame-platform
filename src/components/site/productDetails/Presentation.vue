<template>
  <div class="presentation-product">
    <h1
      class="presentation-product-title"
    >Reconstrução e análise completa de currículo em português | Chamada de vídeo agendada</h1>
    <div class="presentation-product-image-container">
      <img class="presentation-product-image" src="../../../assets/imgs/Prepara1.png">
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .presentation-product {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 80%;
  }

  .presentation-product-title {
    text-align: center;
    grid-column: 1;
    grid-row: 1;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    color: #667998;
    font-size: 2.6rem;
    margin: 1rem;
    line-height: 7vh;
  }

  .presentation-product-image-container {
    grid-column: 1;
    grid-row: 2;
    margin: 0 auto;
  }

  .presentation-product-image {
    max-width: 400px;
    max-height: 400px;
  }

  @media (orientation: portrait) {
    .presentation-product-title {
      font-size: 1.5rem;
    }

    .presentation-product-image {
      max-width: 300px;
      max-height: 300px;
    }
  }
</style>
