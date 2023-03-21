<template>
  <q-card class="home-company-feelings-map-card column q-pb-md q-px-md">
    <div class="home-company-feelings-map-card-header column">
      <div class="home-company-feelings-map-card-info-container">
        <q-card-section class="home-company-feelings-map-card-title"
          >Mapa de Sentimentos</q-card-section
        >
      </div>
      <Column
        v-if="showChart"
        :data="feelingsMapDataChartConverted"
        :height="450"
      />
    </div>
  </q-card>
</template>

<script>
import Column from "./../../../general/charts/Column.vue";
export default {
  components: {
    Column,
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
      this.feelingsMapDataChartConverted.push(["Sentimento", "Quantidade", { role: 'style' }]);

      this.feelingsMap.forEach((feeling) => {
        this.feelingsMapDataChartConverted.push([
          feeling.feeling,
          feeling.count,
          'color: #1a27b7'
        ]);
      });

      console.log(this.feelingsMapDataChartConverted)
    },
  },
};
</script>

<style lang="scss">
.home-company-feelings-map-card {
  width: 40vw;
  height: 60vh;
  box-shadow: none;
  border-radius: 5%;
}

.home-company-feelings-map-card-title {
  color: $text-dark-grey;
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
