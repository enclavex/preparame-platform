<template>
  <div class="crud-register">
    <q-page>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="crud-register-content">
        <CrudRegisterTitle :title="title" />
        <CrudRegisterForm :rows="rows" />
      </div>
    </q-page>
  </div>
</template>

<script>
import CrudRegisterTitle from "./CrudRegisterTitle.vue";
import CrudRegisterForm from "./CrudRegisterForm.vue";
import Breadcrumbs from "../../general/Breacrumbs.vue";

export default {
  components: {
    CrudRegisterTitle,
    CrudRegisterForm,
    Breadcrumbs,
  },
  props: ["title", "breadcrumbs", "columns"],
  data() {
    return {
      rows: [],
    };
  },
  created() {
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

    Object.values(this.columns).forEach((column) => {
      if (column.type === "date") {
        column.mask = "##/##/####";
        column.rules = dateRule;
        column.slotType = "date";
      }
    });

    const rows = Object.values(this.columns)
      .map((column) => {
        return column.row;
      })
      .filter((row, index, self) => {
        return self.indexOf(row) === index;
      });

    rows.forEach((row) => {
      const cols = Object.values(this.columns).filter((column) => {
        return column.row === row;
      });

      this.rows.push({
        row: row,
        cols: cols,
      });
    });
  },
};
</script>

<style>
.crud-register-content {
  padding: 20px 50px;
}
</style>
