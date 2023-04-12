<template>
  <div class="row crud-filter-buttons-row">
    <q-space></q-space>
    <q-btn label="Salvar" @click="onSubmit" color="primary" class="q-ma-sm" />
    <q-btn
      label="Cancelar"
      @click="onReset"
      color="negative"
      flat
      class="q-ma-sm"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: {},
      data: {},
    };
  },
  created() {
    if (this.$parent.$parent.$refs.mainTable) {
      this.tables.mainTable = this.$parent.$parent.$refs.mainTable._props.table;
    }

    if (this.$parent.$parent.$refs.childTable) {
      this.tables.childTable =
        this.$parent.$parent.$refs.childTable._props.data;
    }
  },
  methods: {
    onSubmit: async function () {
      Object.values(this.tables).forEach((table, index) => {
        const values = [];

        if (Object.keys(this.tables)[index] === "childTable") {
          this.data[Object.keys(this.tables)[index]] = table.tableData;
        } else {
          table.registerColumns.forEach((fields) => {
            fields.cols.forEach((field) => {
              values.push({
                name: field.name,
                model: field.model,
                type: field.type,
              });
            });
          });

          values.map((value) => {
            if (
              (value.type === "Select" || value.type === "DialogSelect") &&
              value.model &&
              value.model.value
            ) {
              value.model = value.model.value;
            }
          });

          this.data[Object.keys(this.tables)[index]] = values.reduce(
            (array, value) => {
              if (value.type === "Date") {
                const dateParts = value.model.split("/");

                value.model = new Date(
                  `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`
                );
              }

              return { ...array, [value.name]: value.model };
            },
            {}
          );
        }
      });

      const result = await this.$parent.$parent.$parent.save(this.data);

      if (result && result.status === 201) {
        this.$q.notify({
          type: "success",
          message: "Cadastrado com sucesso.",
        });
      }

      this.onReset();
    },
    onReset: function () {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    },
  },
};
</script>

<style></style>
