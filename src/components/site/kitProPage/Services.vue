<template>
  <div class="services">
    <div class="title">kit de recolocação pró</div>
    <div class="subtitle">
      Um pagamento único de R$29,90 te dará
      <b>acesso ilimitado por 3 meses</b> a:
    </div>
    <div class="items-service">
      <div class="item">
        <img class="image" :src="imgURL(services[0].img)" alt />
        <div class="name">
          <b>{{ services[0].name }}</b>
        </div>
        <div class="advantage">
          <b>{{ services[0].advantage }}</b>
        </div>
      </div>
      <div class="plus-sign">
        <img :src="imgURL(plus.img)" alt />
      </div>
      <div class="item">
        <img class="image" :src="imgURL(services[1].img)" alt />
        <div class="name">
          <b>{{ services[1].name }}</b>
        </div>
        <div class="advantage">
          <b>{{ services[1].advantage }}</b>
        </div>
      </div>
    </div>
    <q-btn
      class="q-mt-sm text-white bg-prepara-me-blue"
      label="Apenas R$29,90"
      @click="addToCart()"
    />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";

export default {
  data() {
    return {
      plus: {
        img: "service_plus",
      },
      services: [
        {
          id: 1,
          name: "Simulador de entrevista",
          advantage: "Acesso ilimitado",
          img: "service_simulador",
        },
        {
          id: 2,
          name: "Simulador de entrevista com",
          advantage: "Apoio de resposta",
          img: "service_apoio_resp",
        },
      ],
    };
  },
  methods: {
    imgURL: function (pathName) {
      var images = require.context("../../../assets/imgs/", false, /\.png$/);

      return images(`./${pathName}.png`);
    },
    addToCart: async function () {
      let product = await axios
        .get(`${baseApiUrl}/products/5fca32d9-2abd-42a1-9043-2920ef156530`)
        .then((products) => {
          return products.data[0];
        })
        .catch(showError);

      let actualCart = localStorage.getItem("cart") || "[]";

      actualCart = JSON.parse(actualCart);

      localStorage.removeItem("cart");

      actualCart.push(product);

      localStorage.setItem("cart", JSON.stringify(actualCart));

      this.$q.notify({
        type: "success",
        message: "Produto adicionado com sucesso",
      });

      this.$router.push({ path: "/ShoppingCart" });
    }
  },
};
</script>

<style lang="scss">
.kit-pro-page {
  .services {
    width: 100vw;
    height: 65vh;
    display: flex;
    flex-direction: column;

    .title {
      font-family: "Russo One", sans-serif;
      font-weight: 400;
      font-size: 4rem;
      line-height: 4rem;
      text-align: center;
      background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
    }

    .subtitle {
      text-align: center;
      font-size: 1.5rem;
    }

    .items-service {
      display: flex;
      flex-direction: row;
      margin: 4rem auto;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .image {
          height: 20vh;
        }

        .name {
          text-align: center;
        }

        .advantage {
          background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
          color: #fff;
          text-align: center;
          width: 70%;
          justify-self: center;
          align-self: center;
          border-radius: 0.8rem;
          text-transform: uppercase;
        }

        .plus-sign {
          margin: 10px;
        }
      }
    }

    button {
      width: 20vw;
      margin: 0 auto;
    }
  }
}

@media (orientation: portrait) {
  .kit-pro-page {
    .services {
      height: 110vh;

      .title {
        font-size: 1.8rem;
        line-height: unset;
        margin-top: 20px;
      }

      .subtitle {
        font-size: 1rem;
      }

      .items-service {
        flex-direction: column;
        .item {
          margin: 1rem auto 0 auto;

          .image {
            height: 10vh;
          }

          .advantage {
            width: 100%;
          }
        }

        .plus-sign {
          margin: auto;
        }
      }

      button {
        width: 80vw;
      }
    }
  }
}
</style>
