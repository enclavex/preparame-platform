<template>
  <div class="shopping-cart-item-card column">
    <div class="shopping-cart-item-card-info-product">
      <div class="shopping-cart-item-card-info-product-title">
        {{ product.name }}
      </div>
      <div class="shopping-cart-item-card-info-product-schedule-label">
        {{ product.shortName }}

        <div class="shopping-cart-item-card-delete text-caption" @click="deleteItem(product.id)">
          Excluir item
        </div>
      </div>
      <div :class="{ 'shopping-cart-item-card-add-info': true, row: !mobile }">
        <div
          :class="{
            'shopping-cart-item-card-info-product-schedule-container': true,
            'col-9': !mobile,
          }"
        >
          <div class="shopping-cart-item-card-info-product-schedule-label-qty">
            Quantidade: {{ product.qnty }}
          </div>
        </div>
        <q-space v-if="mobile"></q-space>
        <div
          :class="{
            'shopping-cart-item-card-info-product-value-container': true,
            'col-3': !mobile,
          }"
        >
          <div class="shopping-cart-item-card-info-product-value-label">
            Total
          </div>
          <div class="shopping-cart-item-card-info-product-value">
            R$ {{ price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { priceConvert } from "../../../utils/priceConvert.js";

export default {
  props: ["product"],
  data() {
    return {
      price: 0,
      mobile: false,
    };
  },
  methods: {
    deleteItem(productId) {
      this.$parent.deleteItem(productId)
    }
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();

    this.price = priceConvert(this.product.price * this.product.qnty);
  },
};
</script>

<style>
.shopping-cart-item-card {
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
  margin-bottom: 5vh;
}

.shopping-cart-item-card-info-product-schedule-label-qty {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 0.9rem;
  color: #667998;
  margin-bottom: 5vh;
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

.shopping-cart-item-card-delete {
  cursor: pointer;
}

.shopping-cart-item-card-delete:hover {
  color: red;
  transition: .5s ease all;
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

  .shopping-cart-item-card-info-product {
    padding: 0.5em 2rem;
  }

  .shopping-cart-item-card-info-product-title {
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 10px;
  }

  .shopping-cart-item-card-add-info {
    justify-content: unset;
  }

  .shopping-cart-item-card-info-product-schedule-label {
    font-size: 0.8rem;
    text-align: center;
  }

  .shopping-cart-item-card-info-product-schedule-label-qty {
    font-size: 0.8rem;
    text-align: right;
  }

  .shopping-cart-item-card-info-product-schedule {
    font-size: 0.9rem;
    text-align: right;
  }

  .shopping-cart-item-card-info-product-value-label {
    font-size: 0.8rem;
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
