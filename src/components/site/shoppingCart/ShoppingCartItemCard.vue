<template>
  <div class="shopping-cart-item-card">
    <div class="shopping-cart-item-card-image-container">
      <img
        class="shopping-cart-item-card-image"
        src="https://www.prepara.me/assets/img/lucy.png"
        alt
      >
    </div>
    <div class="shopping-cart-item-card-info-product">
      <div
        class="shopping-cart-item-card-info-product-title"
      >Reconstrução e análise completa de currículo em português | Chamada de vídeo agendada</div>
      <div class="shopping-cart-item-card-add-info">
        <div class="shopping-cart-item-card-info-product-schedule-container">
          <div
            class="shopping-cart-item-card-info-product-schedule-label"
          >Data e Hora do Agendamento</div>
          <div class="shopping-cart-item-card-info-product-schedule">26/05/2022 9:00:00</div>
        </div>
        <div class="shopping-cart-item-card-info-product-value-container">
          <div class="shopping-cart-item-card-info-product-value-label">Total</div>
          <div class="shopping-cart-item-card-info-product-value">100,00R$</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .shopping-cart-item-card {
    display: flex;
    flex-direction: row;
    height: 200px;
    width: 80%;
    min-width: 740px;
    -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
    margin: 40px auto 40px 15%;
    border-radius: 5px;
    background-color: rgb(243, 244, 249);
  }

  .shopping-cart-item-card:nth-child(1) {
    margin: 0px auto 40px 15%;
  }

  .shopping-cart-item-card-image-container {
    display: flex;
    min-height: 200px;
    min-width: 200px;
  }

  .shopping-cart-item-card-image {
    height: 150px;
    width: 150px;
    margin: auto;
  }

  .shopping-cart-item-card-info-product {
    padding: 1em;
  }

  .shopping-cart-item-card-info-product-title {
    text-align: left;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .shopping-cart-item-card-info-product-total {
    text-align: left;
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    color: #0922bc;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .shopping-cart-item-card-info-product-schedule-label {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    color: #667998;
  }

  .shopping-cart-item-card-info-product-schedule {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    color: #667998;
  }

  .shopping-cart-item-card-info-product-value-container {
    width: 30%;
  }

  .shopping-cart-item-card-info-product-value-label {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 0.9rem;
    color: #667998;
  }

  .shopping-cart-item-card-info-product-value {
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 2rem;
    color: #667998;
  }

  .shopping-cart-item-card-add-info {
    display: flex;
    justify-content: space-between;
  }

  @media (orientation: portrait) {
    .shopping-cart-item-card {
      flex-direction: column;
      height: auto;
      width: 90%;
      margin: 40px auto 40px auto;
      min-width: unset;
    }

    .shopping-cart-item-card:nth-child(1) {
      margin: 0px auto 40px auto;
    }

    .shopping-cart-item-card-image-container {
      min-height: 150px;
      min-width: 150px;
      margin: 20px;
    }

    .shopping-cart-item-card-info-product {
      padding: 0.5em 2rem;
    }

    .shopping-cart-item-card-info-product-title {
      text-align: left;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    .shopping-cart-item-card-add-info {
      display: flex;
      flex-direction: column;
      justify-content: unset;
    }

    .shopping-cart-item-card-info-product-schedule-label {
      font-size: .8rem;
      text-align: right;
    }

    .shopping-cart-item-card-info-product-schedule {
      font-size: .9rem;
      text-align: right;
    }

    .shopping-cart-item-card-info-product-value-label {
      font-size: .8rem;
      text-align: right;
    }

    .shopping-cart-item-card-info-product-value-container {
      width: unset;
    }

    .shopping-cart-item-card-info-product-value {
      font-size: 1.2rem;
      text-align: right;
    }
  }
</style>
