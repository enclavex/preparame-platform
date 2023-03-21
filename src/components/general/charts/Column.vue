<template>
  <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
</template>

<script>
import { GChart } from "vue-google-charts/legacy";

export default {
  name: "ColumnChart",
  props: ["legend", "title", "subtitle", "data", "height", "width"],
  components: {
    GChart,
  },
  data() {
    return {
      chartData: [],
      chartOptions: {
        chart: {
          title: "ColumnChart",
          subtitle: "",
        },
        chartArea: { left: "0%", top: "5%", width: "100%", height: "80%" },
        height: 0,
        backgroundColor: "transparent",
        pieSliceBorderColor: "transparent",
        legend: "none",
        tooltip: {isHtml: true},
      },
    };
  },
  created() {
    this.adjustColors();

    this.chartData = this.data;
    this.chartOptions.chart.title = this.title;
    this.chartOptions.chart.subtitle = this.subtitle;
    this.chartOptions.height = this.height;
  },
  methods: {
    adjustColors: function () {
      this.data.forEach((arrayDataChart, index) => {
        if (index === 0) {
          arrayDataChart.push({ role: "annotation" });
          arrayDataChart.push({ role: "tooltip" });
        } else {
          arrayDataChart.push(arrayDataChart[1].toFixed(2).replace(".", ","));
          arrayDataChart.push(arrayDataChart[0] + '\n' + 'Média: ' + arrayDataChart[1].toFixed(2).replace(".", ","));
        }
      });
    },
  },
};
</script>
