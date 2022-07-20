<template>
  <q-select
    v-model="model"
    :options="col.options"
    filled
    color="secondary"
    :label="col.label"
    dense
    :class="`col-${col.size} q-mb-sm q-mr-sm`"
  ></q-select>
</template>

<script>
export default {
  props: ["col"],
  data() {
    return {
      model: "",
      altered: false
    };
  },
  watch: {
    col: {
      handler(val) {
        this.altered = true
        this.model = val.model;
        this.altered = false
      },
      deep: true,
    },
    model: {
      handler(val) {
        if (!this.altered) {
          if (val) {
            this.$parent.alterData(this.col.name, val);
          }
        }
      },
      deep: true,
    },
  },
};
</script>

<style></style>
