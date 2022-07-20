<template>
  <q-expansion-item
    class="shadow-1 overflow-hidden"
    style="border-radius: 5px"
    icon="mdi-filter"
    label="Filtro"
    header-class="bg-secondary text-white"
    expand-icon-class="text-white"
  >
    <q-card class="crud-filter">
      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset" class="col crud-filter">
          <div v-for="row in rows" :key="row.row" class="row">
            <q-input
              v-for="col in row.cols"
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
                <DynamicTemplate
                  :type="col.slotType"
                  :data="col.model"
                  :filterName="col.name"
                />
              </template>
            </q-input>
          </div>

          <div class="row crud-filter-buttons-row">
            <q-space></q-space>
            <q-btn
              label="Filtrar"
              type="submit"
              color="primary"
              class="q-ma-sm"
            />
            <q-btn
              label="Limpar"
              type="reset"
              color="negative"
              flat
              class="q-ma-sm"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-expansion-item>
</template>

<script>
import DynamicTemplate from "./templates/DynamicTemplate.vue";

export default {
  props: ["rows"],
  components: {
    DynamicTemplate,
  },
  methods: {
    onSubmit: function () {
      let filters = []

      this.rows.forEach((row) => {
        filters.push(...row.cols)
      })

      this.$parent.$parent.filter(filters)
    },
    onReset: function () {},
    startListen: function () {
      this.$root.$on("alterData", (data) => {
        this.alterData(data.name, data.data);
      });
    },
    stopListen: function () {
      this.$root.$off("alterData");
    },
    alterData: function (name, data) {
      this.rows.forEach((row) => {
        row.cols.forEach((col) => {
          if (col.name === name) {
            col.model = data;
          }
        });
      });
    },
  },
  created() {
    this.startListen();
  },
  beforeDestroy() {
    this.stopListen();
  },
};
</script>

<style lang="scss">
.crud-filter {
  background-color: #f1f1f1;
  border-radius: 5px;
}
</style>
