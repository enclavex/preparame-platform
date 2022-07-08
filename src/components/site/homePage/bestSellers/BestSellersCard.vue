<template>
  <div class="best-sellers-card">
    <div class="best-sellers-card-title">{{shortName}}</div>
    <hr>
    <ul class="best-sellers-card-list">
      <li v-for="item in productContent" :key="item.id" class="best-sellers-card-list-item">
        <q-icon name="done"/>{{item.content}}
      </li>
    </ul>
    <div class="best-sellers-card-know-more">
      <a href="/#/ProductDetails">Saiba mais</a>
    </div>
    <div class="best-sellers-card-price">R$ {{priceConverted}}</div>
    <a href="/#/ProductSchedule">
      <div class="best-sellers-card-buy">Comprar</div>
    </a>
  </div>
</template>

<script>
  import { priceConvert } from "../../../../utils/priceConvert.js"

  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      shortName: {
        type: String,
        required: true,
        default: "ANÁLISE DE CURRÍCULO"
      },
      price: {
        type: String,
        required: true
      },
      productContent: {
        type: Array,
        required: false,
        default: () => {
          return []
        }
      }
    },
    computed: {
      priceConverted() {
        return priceConvert(this.price)
      }
    }
  };
</script>

<style lang="scss">
  .best-sellers-card {
    height: auto;
    width: 280px;
    border-radius: 10px;
    background-color: rgb(249, 250, 255);
    box-shadow: 5px 5px 15px -5px #667998;
    padding: 20px;
  }

  .best-sellers-card-title {
    margin: 20px 0 10px 0;
    font-family: "nunito", sans-serif;
    color: #1a27b7;
    font-weight: 700;
    font-size: 20px;
    text-align: center;
  }

  .best-sellers-card-list {
    margin: 20px 0 10px 0;
    font-family: "nunito", sans-serif;
    color: #667998;
    font-weight: 100;
    font-size: 16px;
    text-align: left;
    list-style: none;
    max-height: 90px;
    min-height: 90px;
  }

  .best-sellers-card-list-item {
    margin-left: 5px;
  }

  .best-sellers-card-know-more a {
    font-family: "nunito", sans-serif;
    color: #667998;
    font-weight: 700;
    font-size: 16px;
    text-align: left;
    margin: 10px 0;
    cursor: pointer;
  }

  .best-sellers-card-price {
    font-family: "nunito", sans-serif;
    color: #444;
    font-weight: 700;
    font-size: 40px;
    text-align: center;
    margin: 10px 0;
    max-width: 240px;
  }

  .best-sellers-card-buy {
    height: 50px;
    width: 220px;
    margin: 20px auto 10px auto;
    line-height: 50px;
    text-align: center;
    border: 1px solid #667998;
    font-family: "nunito", sans-serif;
    color: #667998;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .best-sellers-card-buy:hover {
    border: 1px solid #fff;
    color: #fff;
    background-color: #667998;
  }

  @media (max-width: 600px) {
    .best-sellers-card {
      margin: 20px 0;
    }
  }
</style>
