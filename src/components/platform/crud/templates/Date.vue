<template>
  <q-input
    :key="col.name"
    filled
    color="secondary"
    v-model="col.model"
    :label="col.label"
    :mask="col.mask"
    :rules="col.rules"
    dense
    :class="`col-${col.size} q-mb-sm q-mr-sm`"
  >
    <template v-if="col.slotType" v-slot:append>
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
  data() {
    return {
      date: new Date(),
      localeDateStrings,
    };
  },
  methods: {
    save: function () {
      this.$parent.alterData(this.date);
    },
  },
};
</script>

<style></style>
