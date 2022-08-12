<template>
  <div id="home" :class="{ row: !mobile, column: mobile, presentation: true }">
    <div class="col col-5 presentation-prepara-me">
      <div class="row">
        <q-space />
        <div class="q-ml-md presentation-prepara-me-title text-h3 col-9">
          O que nos move...
        </div>
      </div>
      <br />
      <div class="row">
        <q-space />
        <div class="presentation-prepara-me-text text-h6 text-grey-6 col-8">
          ...é descomplicar e tornar a orientação de carreira acessível para
          todos os brasileiros
        </div>
      </div>
      <br />
      <div class="row">
        <q-space />
        <q-btn
          class="q-px-xl q-py-xs q-ml-md col-6"
          color="purple"
          label="Acesse nossa plataforma"
          rounded
          to="/login"
        />
      </div>
    </div>
    <div class="row col-7">
      <q-space class="col-1" />
      <div class="column presentation-picture-container col-10">
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
      mobile: false
    }
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
  height: 90vh;
}

.presentation-picture {
  background-image: url("../../../../assets/imgs/homePageGirl.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 80% !important;
  height: 100%;
  margin-right: auto;
}

.presentation-prepara-me {
  font-family: "nunito", sans-serif;
  margin: auto;
}

.presentation-prepara-me-title {
  font-family: "Anton", sans-serif;
  letter-spacing: 3px;
}

.presentation-prepara-me-text {
  letter-spacing: 1px;
}
</style>
