<template>
  <q-input
    filled
    color="secondary"
    v-model="model"
    :label="col.label"
    :mask="col.mask"
    :rules="col.rules"
    dense
    :class="`col-${col.size} q-mb-sm q-mr-sm`"
    reverse-fill-mask
  >
  </q-input>
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
    this.model = this.oldValue
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
