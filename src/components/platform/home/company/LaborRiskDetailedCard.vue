<template>
  <q-card class="home-company-labor-risk-detailed-card column q-pb-md q-px-md">
    <div class="home-company-labor-risk-detailed-card-header column">
      <div class="home-company-labor-risk-detailed-card-info-container">
        <q-card-section class="home-company-labor-risk-detailed-card-title"
          >Riscos Trabalhistas</q-card-section
        >
      </div>
      <Pie
        v-if="showChart"
        :data="laborRiskDataChartConverted"
        :height="380"
      />
    </div>
  </q-card>
</template>

<script>
import Pie from "../../../general/charts/Pie.vue";
export default {
  components: {
    Pie,
  },
  props: ["laborRisks"],
  data() {
    return {
      laborRiskDataChartConverted: [],
      showChart: false,
    };
  },
  mounted() {
    this.converDataChart();
    this.showChart = true;
  },
  methods: {
    converDataChart: function () {
      this.laborRiskDataChartConverted.push(["Risco Trabalhista", "Soma"]);

      this.laborRisks.forEach((laborRisk) => {
        this.laborRiskDataChartConverted.push([
          laborRisk.question,
          laborRisk.count,
        ]);
      });
    },
  },
};
</script>

<style lang="scss">
.home-company-labor-risk-detailed-card {
  width: 15vw;
  height: 20vh;
}

.home-company-labor-risk-detailed-card-title {
  color: $text-grey;
  font-size: 2.2rem;
  text-align: center;
  width: 100%;
  padding-top: 10px;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
}

@media (orientation: portrait) {
  .home-company-labor-risk-detailed-card {
    width: 90vw;
    height: 20vh;
  }
}
</style>
