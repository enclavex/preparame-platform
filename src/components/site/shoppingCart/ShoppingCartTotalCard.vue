<template>
  <div class="shopping-cart-total-card">
    <div class="shopping-cart-total-resume">Resumo do Pedido</div>
    <br>
    <div class="shopping-cart-total-count-products">3 Produtos</div>
    <hr>
    <div class="shopping-cart-total-value-container">
      <div class="shopping-cart-total-value-total-container">
        <div class="shopping-cart-total-value-label">Total</div>
        <div class="shopping-cart-total-value">300,00R$</div>
      </div>
      <div class="shopping-cart-total-1x">A vista no cartão</div>
      <div class="shopping-cart-total-parcels">Ou 320,00R$ parcelado em até 8x</div>
      <div class="shopping-cart-total-ticket">290R$ no boleto</div>
    </div>
    <hr>
    <div class="shopping-cart-total-btn-continue">Continuar</div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .shopping-cart-total-card {
    display: flex;
    flex-direction: column;
    height: 40vh;
    width: 95%;
    -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
    box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
    border-radius: 5px;
    background-color: rgb(243, 244, 249);
    padding: 5%;
    min-width: 290px;
  }

  .shopping-cart-total-resume {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 1.5rem;
    color: #000;
    text-align: center;
  }

  .shopping-cart-total-count-products {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: #667998;
  }

  .shopping-cart-total-card hr {
    width: 85%;
    margin: 10px auto 10px auto;
    border: none;
    border-bottom: 1px solid #66799855;
  }

  .shopping-cart-total-value-container {
    text-align: right;
  }

  .shopping-cart-total-value-total-container {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  .shopping-cart-total-1x,
  .shopping-cart-total-parcels,
  .shopping-cart-total-ticket {
    font-family: "Nunito", sans-serif;
    font-size: 0.7rem;
    color: #667998;
  }

  .shopping-cart-total-btn-continue {
    font-family: "Nunito", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    background-color: #15aa7c;
    color: #fff;
    border-radius: 5px;
    -webkit-box-shadow: 5px 5px 10px 1px #667998;
    box-shadow: 2px 2px 10px -2px #667998;
    transition: all 0.2s ease;
    cursor: pointer;
  }

  .shopping-cart-total-btn-continue:hover {
    background-color: #15aa7cdd;
  }

  @media (orientation: portrait) {
    .shopping-cart-total-card {
      height: auto;
      width: 100%;
    }

    .shopping-cart-total-value {
      font-size: 2.5rem;
    }

    .shopping-cart-total-1x,
    .shopping-cart-total-parcels,
    .shopping-cart-total-ticket {
      font-size: 1.1rem;
    }
  }
</style>
