<template>
  <div class="advantages">
    <div class="background-top"></div>
    <div class="container">
      <div class="pre-title">conheça as vantagens do nosso</div>
      <div class="title">kit da recolocação</div>
      <div class="subtitle">
        Assine o <b>Pró</b> para ter acesso a <b>todos</b> os nossos benefícios
      </div>
      <div class="services">
        <div v-if="!mobile" class="services-names box">
          <div class="description">
            <div>Simulador de entrevista</div>
          </div>
          <div class="description">
            <div>
              Apoio de resposta <br />
              <div class="detail">(Simulação de Entrevista)</div>
            </div>
          </div>
          <div class="btn-simulated"></div>
        </div>

        <div class="free box">
          <div v-if="mobile" class="name"><b>Simulador de entrevista</b></div>
          <div class="description">
            <img src="../../../assets/imgs/contem.png" />
            <div>Acesso por 3 dias</div>
          </div>
          <div v-if="mobile" class="name"><b>Apoio de entrevista</b></div>
          <div v-if="mobile" class="name">(Simulação de entrevista)</div>
          <div class="description">
            <img src="../../../assets/imgs/nao-contem.png" />
            <div>Não incluído</div>
          </div>
          <q-btn outline style="color: blue" @click="freeAccess()">Grátis</q-btn>
        </div>

        <div class="pro box">
          <div v-if="mobile" class="name"><b>Simulador de entrevista</b></div>
          <div class="description">
            <img src="../../../assets/imgs/contem.png" />
            <div>Acesso por 3 meses</div>
          </div>
          <div v-if="mobile" class="name"><b>Apoio de entrevista</b></div>
          <div v-if="mobile" class="detail">(Simulação de entrevista)</div>
          <div class="description">
            <img src="../../../assets/imgs/contem.png" />
            <div>Incluído</div>
          </div>
          <q-btn class="bg-prepara-me-blue text-white" @click="addToCart()">Apenas R$29,90</q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";

export default {
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  methods: {
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
    },
    freeAccess() {
      this.$router.push({ path: "/login" });
    }
  },
};
</script>

<style lang="scss">
.kit-pro-page {
  .advantages {
    height: 110vh;
    width: 100vw;

    .background-top {
      width: 100vw;
      height: 100vh;
      background-image: url("../../../assets/imgs/advantages-background.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position-x: 100%;
      position: absolute;
      z-index: 1;
    }

    .container {
      top: 35vh;
      position: relative;
      z-index: 2;

      .pre-title {
        font-family: "Nunito", sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin-bottom: 20px;
        text-transform: uppercase;
      }

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
        margin-bottom: 10px;
      }

      .subtitle {
        text-align: center;
        font-size: 1.5rem;
      }

      .services {
        height: 40vh;
        width: 60vw;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 40px auto 0 auto;

        .box {
          height: 40vh;
          width: 15vw;
          padding: 40px;
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: space-around;

          .description {
            display: flex;
            font-family: "Nunito";
            font-weight: 700;
            height: 2.5rem;
            line-height: 2.5rem;
            font-size: 1.3rem;

            img {
              height: 2.5rem;
            }
          }

          button {
            height: 2.5rem;
          }
        }

        .services-names {
          padding: 40px 0 40px 40px;

          .description {
            div {
              width: 100%;
              color: $prepara-me-blue;
              text-align: right;
            }
          }

          .btn-simulated {
            height: 2.5rem;
            background-color: white;
          }
        }

        .free,
        .pro {
          box-shadow: 0px 30px 52px rgba(0, 0, 0, 0.23);
          border-radius: 12px;
        }

        .pro {
          border: #ff4690 2px solid;
        }
      }
    }
  }
}

@media (orientation: portrait) {
  .kit-pro-page {
    .advantages {
      height: 110vh;
      width: 100vw;

      .container {
        top: 10vh;
        width: 100vw;

        .pre-title {
          font-size: 1.2rem;
          line-height: unset;
          margin-bottom: 20px;
        }

        .title {
          font-size: 3rem;
          line-height: 2.4rem;
        }

        .subtitle {
          font-size: 1rem;
        }

        .services {
          height: 70vh;
          width: 100vw;
          flex-direction: column;
          margin: 5vw;

          .box {
            width: 90%;
            margin-top: 20px;

            .name {
              margin-top: 15px;
              color: $prepara-me-blue;
              text-align: center;
            }

            .detail {
              color: $prepara-me-blue;
              text-align: center;
            }

            .description {
              align-self: center;
            }

            button {
              margin-top: 15px;
              width: 90%;
              height: 2.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
