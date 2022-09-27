<template>
  <GChart type="BarChart" :data="chartData" :options="chartOptions" />
</template>

<script>
import { GChart } from "vue-google-charts/legacy";

export default {
  name: "BarChart",
  props: ["legend", "title", "subtitle", "data", "height", "width"],
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [],
      chartOptions: {
        chart: {
          title: "BarChart",
          subtitle: "",
        },
        chartArea: { left: "0%", top: "5%", width: "100%", height: "80%" },
        height: 0,
        backgroundColor: "transparent",
        pieSliceBorderColor: "transparent",
        legend: {
          position: 'bottom'
        }
      },
    };
  },
  created() {
    this.chartData = this.data;
    this.chartOptions.chart.title = this.title;
    this.chartOptions.chart.subtitle = this.subtitle;
    this.chartOptions.height = this.height;
  },
};
</script>
