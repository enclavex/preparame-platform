<template>
  <div :class="`col-${col.size} q-mb-sm q-mr-sm`">
    <q-editor
      v-model="model"
      flat
      content-class="input-prepara-me-grey"
      toolbar-bg="input-prepara-me-grey"
      toolbar-toggle-color="yellow-8"
    />
  </div>
</template>

<script>
export default {
  props: ["col", "oldValue"],
  data() {
    return {
      model: "",
    };
  },
  created() {
    this.model = this.oldValue || 'Insira aqui a dica para resposta';
  },
  watch: {
    col: {
      handler(val) {
        this.model = val.model;
      },
      deep: true,
    },
    model(newQuestion, oldQuestion) {
      this.$parent.alterData(this.col.name, newQuestion);
    },
  },
};
</script>

<style></style>
