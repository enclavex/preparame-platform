<template>
  <q-input
    filled
    color="secondary"
    v-model="model"
    :label="col.label"
    :rules="col.rules"
    dense
    :class="`col-${col.size} q-mb-sm q-mr-sm`"
  >
  </q-input>
</template>

<script>
export default {
  props: ["col"],
  data() {
    return {
      model: "",
    };
  },
  watch: {
    col: {
      handler(val){
       this.model = val.model
     },
     deep: true
    },
    model(newQuestion, oldQuestion) {
      this.$parent.alterData(this.col.name, newQuestion);
    },
  },
};
</script>

<style></style>
