<template>
  <div class="cv">
    <q-btn label="Conheça nossos serviços" @click="teste()" />
    <div id="element-to-print">guilherme</div>
  </div>
</template>

<script>
function addScript(url) {
  var script = document.createElement("script");
  script.type = "application/javascript";
  script.src = url;
  document.head.appendChild(script);
}

addScript(
  "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
);

export default {
  methods: {
    teste: function () {
      var element = document.getElementById("element-to-print");
      html2pdf(element);
    },
  },
};
</script>

<style></style>
