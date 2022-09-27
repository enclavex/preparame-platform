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
      colors: ['660029', '7A0031', '8F0039', 'A30041', 'B80049', 'CC0052', 'E0005A', 'F50062', 'FF0A6C', 'FF1F78'],
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
          arrayDataChart.push({ role: "style" });
          arrayDataChart.push({ role: 'annotation' });
        } else {
          arrayDataChart.push(`color: #${this.colors[index - 1]}`);
          arrayDataChart.push(arrayDataChart[1]);
        }
      });
    },
  },
};
</script>
