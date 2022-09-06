<template>
  <q-table
    class="q-mt-md bg-secondary crud-table q-ma-md"
    :data="result.data"
    :columns="result.columns"
    row-key="ref"
    table-class="bg-background"
    table-header-class="text-white bg-secondary"
    no-data-label="Sem dados para mostrar."
    no-results-label="Não foi encontrado nenhum dado a partir de sua pesquisa."
    :filter="filter"
    dense
    title="Itens"
    title-class="text-white bg-secondary crud-query-title"
    rows-per-page-label="Linhas por página: "
    :visible-columns="visibleColumns"
  >
    <template v-slot:body-cell-actions="props">
      <q-td auto-width :props="props">
        <q-btn-group>
          <q-btn
            color="negative"
            icon="mdi-delete"
            @click="removeRow(props.row)"
          ></q-btn>
          <q-btn
            color="grey-8"
            icon="mdi-pencil"
            @click="editRow(props.row)"
          ></q-btn>
        </q-btn-group>
      </q-td>
    </template>
  </q-table>
</template>

<script>
export default {
  props: ["result"],
  data() {
    return {
      data: [],
      filter: "",
      visibleColumns: [],
    };
  },
  created() {
    this.definesVisibleColumns();
  },
  methods: {
    definesVisibleColumns: function () {
      this.visibleColumns = this.result.columns
        .filter((column) => {
          return column.visible;
        })
        .map((column) => {
          return column.name;
        });
    },
    removeRow: function (row) {
      this.$parent.$parent.$parent.removeRow(row);
    },
    editRow: function (row) {
      this.$parent.$parent.$parent.editRow(row);
    },
  },
};
</script>

<style lang="scss">
.crud-table {
  .q-table__bottom-item {
    color: $text-white;
  }

  .q-field__native {
    color: $text-white;
  }

  .q-select__dropdown-icon {
    color: $text-white;
  }

  .q-btn__content {
    color: $text-white;
  }

  .q-table__bottom {
    color: $text-white;
  }

  .q-icon {
    color: $text-white;
  }
}

.crud-query-title {
  font-size: 1rem;
}
</style>
