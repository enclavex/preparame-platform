<template>
  <div class="row crud-title-container q-mb-sm q-mt-sm">
    <div class="text-h6 crud-title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style lang="scss">
.crud-title {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
}
</style>
