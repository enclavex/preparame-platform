<template>
  <q-input
    :key="col.name"
    filled
    color="secondary"
    v-model="model"
    :label="col.label"
    :mask="mask"
    :rules="rules"
    dense
    :class="`col-${col.size} q-mb-sm q-mr-sm`"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date
            mask="DD-MM-YYYY"
            v-model="date"
            setToday
            :locale="localeDateStrings"
          >
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Fechar" color="primary" flat></q-btn>
              <q-btn
                label="Selecionar"
                color="primary"
                flat
                @click="save"
                v-close-popup
              ></q-btn>
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
import localeDateStrings from "./../../../../utils/localeDateStrings.js";

export default {
  props: ["col", "oldValue"],
  data() {
    return {
      model: new Date(),
      localeDateStrings,
      mask: "##/##/####",
      rules: ""
    };
  },
  created() {
    this.model = this.oldValue;

    const dateRule = [
      ((value) => {
        if (!value) {
          return true;
        }

        const dateParts = value.split("/");

        value = new Date(`${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`);

        return value instanceof Date && !isNaN(value.valueOf());
      }) || "Data Inválida",
    ];

    this.rules = dateRule;
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
