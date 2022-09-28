<template>
  <q-card
    class="home-company-employeer-brand-risk-card column q-pb-md q-px-md q-ma-md"
  >
    <div class="home-company-employeer-brand-risk-card-header row">
      <q-icon
        name="mdi-account-alert-outline"
        class="text-h1 text-grey-4 text-weight-thin q-ml-md col-4"
      ></q-icon>
      <div class="home-company-employeer-brand-risk-card-info-container col-6">
        <q-card-section class="home-company-employeer-brand-risk-card-title"
          >Risco de Marca</q-card-section
        >
        <q-card-section class="home-company-employeer-brand-risk-card-nps">{{
          employeerBrandRisk
        }}</q-card-section>
      </div>
    </div>
    <q-card-section
      class="home-company-employeer-brand-risk-card-bar-container row"
    >
      <div
        class="home-company-employeer-brand-risk-card-progress-bar-container col-12"
      >
        <div
          class="home-company-employeer-brand-risk-card-progress-bar-indicator"
          :style="{
            width: `${employeerBrandRiskPercent}%`,
          }"
        ></div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: ["employeerBrandRisk"],
  data() {
    return {
      employeerBrandRiskPercent: 0,
    };
  },
  mounted() {
    this.employeerBrandRiskPercent = (this.employeerBrandRisk * 10).toFixed(2);
  },
};
</script>

<style lang="scss">
.home-company-employeer-brand-risk-card {
  width: 18vw;
  height: 20vh;
}

.home-company-employeer-brand-risk-card-header {
  height: 16vh;
}

.home-company-employeer-brand-risk-card-title {
  color: $text-grey;
  text-align: right;
  width: 100%;
  padding-top: 10px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}

.home-company-employeer-brand-risk-card-nps {
  color: $text-dark-grey;
  width: 100%;
  font-size: 2rem;
  text-align: right;
  padding: 0;
  letter-spacing: 0;
}

.home-company-employeer-brand-risk-card-bar-container {
  padding: 0;
}

.home-company-employeer-brand-risk-card-indicator {
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.home-company-employeer-brand-risk-card-progress-bar-container {
  height: 10px !important;
  background: $background-grey;
  position: relative;
  border-radius: 5px;
}

.home-company-employeer-brand-risk-card-progress-bar-indicator {
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  -webkit-mask: linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0);
}

.home-company-employeer-brand-risk-card-progress-bar-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right,
    rgb(0, 170, 0) 0%,
    #ffdb3a 45%,
    #e5405e 100%
  );
}

@media (orientation: portrait) {
  .home-company-employeer-brand-risk-card {
    width: 90vw;
    height: 20vh;
  }
}
</style>
