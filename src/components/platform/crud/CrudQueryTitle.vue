<template>
  <div class="row crud-title-container q-mb-sm">
    <div class="text-h6 crud-title">{{ title }}</div>
    <q-space></q-space>
    <q-btn
      color="secondary"
      flat
      label="Novo"
      icon="mdi-plus-circle"
      class="crud-new-button"
      no-caps
      @click="createNew()"
    ></q-btn>
  </div>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    createNew: function () {
      const actualUrl = this.$router.history.current.path

      this.$router.push({ path: `${actualUrl}/new` });
    }
  }
};
</script>

<style lang="scss">
.crud-title {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
}

.crud-new-button {
  font-family: "Manrope", sans-serif;
}
</style>
