<template>
  <q-card class="home-company-feelings-map-card column q-pb-md q-px-md">
    <div class="home-company-feelings-map-card-header column">
      <div class="home-company-feelings-map-card-info-container">
        <q-card-section class="home-company-feelings-map-card-title"
          >Mapa de Sentimentos</q-card-section
        >
      </div>
      <Pie
        v-if="showChart"
        :data="feelingsMapDataChartConverted"
        :height="380"
      />
    </div>
  </q-card>
</template>

<script>
import Pie from "./../../../general/charts/Pie.vue";
export default {
  components: {
    Pie,
  },
  props: ["feelingsMap"],
  data() {
    return {
      feelingsMapDataChartConverted: [],
      showChart: false,
    };
  },
  mounted() {
    this.converDataChart();
    this.showChart = true;
  },
  methods: {
    converDataChart: function () {
      this.feelingsMapDataChartConverted.push(["Sentimento", "Quantidade"]);

      this.feelingsMap.forEach((feeling) => {
        this.feelingsMapDataChartConverted.push([
          feeling.feeling,
          feeling.count,
        ]);
      });
    },
  },
};
</script>

<style lang="scss">
.home-company-feelings-map-card {
  width: 15vw;
  height: 20vh;
}

.home-company-feelings-map-card-title {
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
  .home-company-feelings-map-card {
    width: 90vw;
    height: 20vh;
  }
}
</style>
