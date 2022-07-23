<template>
  <q-card class="crud-register-form">
    <q-card-section>
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="col crud-register q-pa-md"
      >
        <div v-for="row in rows" :key="row.row" class="row">
          <DynamicTemplate v-for="col in row.cols" :key="col.name" :col="col" />
        </div>

        <div class="row crud-filter-buttons-row">
          <q-space></q-space>
          <q-btn label="Salvar" type="submit" color="primary" class="q-ma-sm" />
          <q-btn
            label="Cancelar"
            type="reset"
            color="negative"
            flat
            class="q-ma-sm"
          />
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script>
import DynamicTemplate from "./templates/DynamicTemplate.vue";

export default {
  components: {
    DynamicTemplate,
  },
  props: ["rows"],
  methods: {
    onSubmit: async function () {
      const values = [];

      this.rows.forEach((row) => {
        row.cols.forEach((col) => {
          values.push({
            name: col.name,
            model: col.model,
            type: col.type,
          });
        });
      });

      values.map((value) => {
        if ((value.type === "Select"|| value.type === "DialogSelect") && value.model && value.model.value) {
          value.model = value.model.value;
        }
      });

      const data = values.reduce(
        (array, value) => ({ ...array, [value.name]: value.model }),
        {}
      );

      const result = await this.$parent.$parent.$parent.save(data);

      if (result && result.status === 201) {
        this.$q.notify({
          type: "success",
          message: "Cadastrado com sucesso.",
        });
      }

      this.onReset()
    },
    onReset: function () {
      this.rows.forEach((row) => {
        row.cols.forEach((col) => {
          col.model = null;
        });
      });
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
  }
};
</script>

<style>
.crud-register-form .q-card__section--vert {
  padding: unset;
}

.crud-register-form {
  background-color: #f1f1f1;
  border-radius: 5px;
}
</style>
