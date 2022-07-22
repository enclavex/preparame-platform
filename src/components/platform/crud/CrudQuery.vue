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

import { filterCrud } from "./../crud/utils/filterCrud.js";
import { removeCrud } from "./../crud/utils/removeCrud.js";

export default {
  components: {
    CrudQueryFilter,
    CrudQueryTable,
    CrudQueryTitle,
    Breadcrumbs,
  },
  props: ["title", "filters", "breadcrumbs", "columns", "url"],
  data() {
    return {
      rows: [],
      data: [],
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

        await removeCrud(selecteds, this.url, this.data);

        return true;
      }
    },
    filter: async function (filters) {
      this.data = await filterCrud(filters, this.url);
    },
  },
  created() {
    this.filter();

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
