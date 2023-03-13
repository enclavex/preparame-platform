<template>
  <div class="presentation">
    <div class="info">
      <div class="title">kit de recolocação</div>
      <div class="subtitle">Simulador de Entrevistas Automático</div>
      <div class="plus-sign">
        <img :src="imgURL(plus.img)" alt />
      </div>
      <div class="subtitle">Modelo de Currículo Assertivo</div>
      <div v-if="mobile" class="image"></div>
      <div class="form">
        <q-btn
          class="q-mt-lg text-white bg-prepara-me-blue"
          label="Acessar Gratuitamente"
          @click="freeAccess()"
        />
      </div>
    </div>
    <div v-if="!mobile" class="image"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
      plus: {
        img: "service_plus",
      },
    };
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  methods: {
    freeAccess() {
      this.$router.push({ path: "/login" });
    },
    imgURL: function (pathName) {
      var images = require.context("../../../assets/imgs/", false, /\.png$/);

      return images(`./${pathName}.png`);
    },
  },
};
</script>

<style lang="scss">
.kit-pro-page {
  .presentation {
    height: 100vh;
    background: linear-gradient(287.73deg, #1a27b7 3.75%, #ff4690 94.95%);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .info {
      .title {
        font-family: "Russo One", sans-serif;
        font-weight: 400;
        font-size: 83px;
        line-height: 72px;
        text-align: center;
        color: #ffffff;
      }

      .subtitle {
        font-family: "Nunito";
        font-weight: 700;
        font-size: 35px;
        line-height: 45px;
        text-align: center;
        color: #ffffff;
        margin-bottom: 20px;
        margin-top: 20px;
      }

      .plus-sign {
        display: flex;
        justify-content: center;
      }

      .form {
        display: flex;
        flex-direction: column;

        .title {
          font-family: "Nunito";
          font-style: normal;
          font-size: 25px;
          line-height: 45px;
          text-align: center;
          color: #ffffff;
        }

        label {
          font-family: "Nunito";
          font-style: normal;
          font-size: 1rem;
          line-height: 1rem;
          text-align: left;
          color: #ffffff;
        }

        button {
          align-self: center;
          justify-self: center;
          width: 400px;
          height: 70px;
          font-size: 1.5rem;
        }
      }
    }

    .image {
      position: relative;
      height: 100vh;
      background-image: url("../../../assets/imgs/kitproimg.png");
      background-repeat: no-repeat;
      background-size: contain;
      background-position-x: 100%;
      right: 0px;
      width: 50vw;
      top: 10vh;
    }
  }
}

@media (orientation: portrait) {
  .kit-pro-page {
    .presentation {
      align-items: unset;
      flex-direction: column;

      .info {
        .title {
          font-size: 2rem;
          line-height: unset;
        }

        .subtitle {
          font-size: 1.2rem;
          line-height: unset;
          margin-bottom: unset;
        }

        .form {
          .title {
            font-size: 1rem;
            line-height: unset;
          }

          label {
            width: 80vw;
            margin: 5px auto;
          }

          button {
            width: unset;
            height: unset;
            font-size: unset;
          }
        }
      }

      .image {
        width: 100vw;
        height: 45vh;
        top: unset;
      }
    }
  }
}
</style>
