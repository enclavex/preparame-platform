<template>
  <div class="crud-query">
    <q-page>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="crud-filter-content">
        <CrudQueryTitle :title="title" />
        <CrudQueryFilter :rows="rows" />
        <CrudQueryTable ref="table" :result="{ columns, data }" />
      </div>
    </q-page>
  </div>
</template>

<script>
import CrudQueryFilter from "./CrudQueryFilter.vue";
import CrudQueryTable from "./CrudQueryTable.vue";
import CrudQueryTitle from "./CrudQueryTitle.vue";
import Breadcrumbs from "../../general/Breacrumbs.vue";

export default {
  components: {
    CrudQueryFilter,
    CrudQueryTable,
    CrudQueryTitle,
    Breadcrumbs,
  },
  props: ["title", "filters", "breadcrumbs", "columns", "data"],
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    removeSelected: async function (id) {
      if (!this.$refs.table.selecteds.length > 0 && !id) {
        this.$q.notify({
          type: "error",
          message: "Nenhum registro selecionado para ser excluído.",
        });

        return false;
      } else {
        const selecteds = id ? [id] : this.$refs.table.selecteds;

        return await this.$parent.removeSelected(selecteds);
      }
    },
    filter: function (filters) {
      this.$parent.filter(filters);
    },
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

    Object.values(this.filters).forEach((filter) => {
      if (filter.type === "date") {
        filter.mask = "##/##/####";
        filter.rules = dateRule;
        filter.slotType = "date";
      }
    });

    const rows = Object.values(this.filters)
      .map((filter) => {
        return filter.row;
      })
      .filter((row, index, self) => {
        return self.indexOf(row) === index;
      });

    rows.forEach((row) => {
      const cols = Object.values(this.filters).filter((filter) => {
        return filter.row === row;
      });

      this.rows.push({
        row: row,
        cols: cols,
      });
    });
  },
};
</script>

<style lang="scss">
.crud-filter-content {
  padding: 20px 50px;
}
</style>
