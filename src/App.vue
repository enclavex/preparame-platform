<template>
  <div id="q-app">
    <router-view name="site"/>
  </div>
</template>

<script>
export default {
  name: "PreparaMe",
  setup() { },
  mounted() { },
  created() {
    document.title = "Prepara.me";
  }
}
</script>
