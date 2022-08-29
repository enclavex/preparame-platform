<template>
  <GChart type="PieChart" :data="chartData" :options="chartOptions" />
</template>

<script>
import { GChart } from "vue-google-charts/legacy";

export default {
  name: "DonutChart",
  props: ["legend", "title", "subtitle", "data", "height", "width", "color"],
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [],
      chartOptions: {
        chart: {
          title: "DonutChart",
          subtitle: "",
        },
        pieHole: 0.5,
        legend: "none",
        chartArea: { left: "10%", top: "10%", width: "80%", height: "80%" },
        height: 0,
        width: 0,
        backgroundColor: "transparent",
        colors: ["#1a27b7", "transparent"],
        tooltip: {
          trigger: "none",
        },
        pieSliceText: "none",
        pieSliceBorderColor: "transparent",
        enableInteractivity: false,
        pieStartAngle: 110,
      },
    };
  },
  created() {
    this.chartData = this.data;
    this.chartOptions.chart.title = this.title;
    this.chartOptions.chart.subtitle = this.subtitle;
    this.chartOptions.legend = this.legend;
    this.chartOptions.height = this.height;
    this.chartOptions.width = this.width;
  },
};
</script>
