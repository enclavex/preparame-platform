<template>
  <div id="home" :class="{ row: !mobile, presentation: true }">
    <div :class="{ 'col-2': !mobile }" />
    <div
      :class="{
        column: true,
        'col-5': !mobile,
        'col-12': mobile,
        'presentation-prepara-me': true,
      }"
    >
      <div class="row">
        <div
          :class="{
            'presentation-prepara-me-title': true,
            'text-h3': !mobile,
            'col-9': !mobile,
          }"
        >
          Perca o medo e aumente sua confiança para fazer entrevistas de emprego
        </div>
      </div>
      <br />
      <div class="row">
        <div class="presentation-prepara-me-text text-h6 text-grey-6 col-9">
          Aumente suas chances de passar na entrevista. <br /><b
            >É fácil. É rápido. É gratuito!</b
          >
        </div>
      </div>
      <br />
      <div class="row justify-start">
        <div class="presentation-obs">
          Estamos em manutenção para melhor atender você.
        </div>
      </div>
    </div>
    <div v-if="!mobile" :class="{ row: true, 'col-5': !mobile }">
      <q-space class="col-1" />
      <div class="column col-10">
        <div class="col-2" />
        <div class="col-8 presentation-picture" />
        <div class="col-2" />
      </div>
      <q-space class="col-1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  data() {
    return {
      mobile: false,
    };
  },
  components: {},
  setup() {},
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
};
</script>

<style lang="scss">
.presentation {
  position: relative;
  height: 100vh;
  background-image: url("../../../../assets/imgs/homeGirl.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 100%;
  top: -8vh;
}

.presentation-picture {
  width: 80% !important;
  height: 100%;
  margin-right: auto;
}

.presentation-prepara-me {
  font-family: "nunito", sans-serif;
  margin: auto;
}

.presentation-prepara-me-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  font-size: 2.2rem;
  text-transform: uppercase;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.presentation-prepara-me-text {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 170%;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.presentation-obs {
  color: #aaa;
}

@media (orientation: portrait) {
  .presentation {
    position: unset;
    background-size: 150%;
    background-position-y: 100%;
    height: 90vh;
  }

  .presentation-prepara-me {
    height: 100%;
    padding: 10%;
  }

  .presentation-prepara-me-title {
    font-size: 1.4rem;
  }
}
</style>
