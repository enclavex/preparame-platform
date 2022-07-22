<template>
  <q-table
    class="q-mt-md bg-secondary crud-table"
    :data="result.data"
    :columns="result.columns"
    row-key="id"
    table-class="bg-background"
    table-header-class="text-white bg-secondary"
    no-data-label="Sem dados para mostrar"
    :filter="filter"
    selection="multiple"
    dense
    title="Resultado(s) Pesquisa"
    title-class="text-white bg-secondary crud-query-title"
    :selected.sync="selecteds"
    :selected-rows-label="getSelectedString"
    rows-per-page-label="Linhas por página: "
  >
    <template v-slot:top-right>
      <q-input
        borderless
        dense
        debounce="300"
        v-model="filter"
        placeholder="Search"
      >
        <q-icon slot="append" name="search"></q-icon>
      </q-input>
    </template>

    <template v-slot:body-cell-actions="props">
      <q-td auto-width :props="props">
        <q-btn-group>
          <q-btn
            color="negative"
            icon="mdi-delete"
            @click="removeSelected({ id: props.row.id })"
          ></q-btn>
          <q-btn
            color="grey-8"
            icon="mdi-pencil"
            @click="editSelected({ id: props.row.id })"
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
      selecteds: [],
      filter: "",
    };
  },
  methods: {
    getSelectedString() {
      return "";
    },
    removeSelected: function (id) {
      this.$parent.$parent.removeSelected(id);
    },
    editSelected: function (id) {
      const actualUrl = this.$router.history.current.path;

      this.$router.push({ path: `${actualUrl}/${id.id}` });
    },
  },
  mounted() {
    const searchField = document.getElementsByClassName('q-field__native q-placeholder');

    if (searchField[0].placeholder = 'Search') {
      searchField[0].placeholder = 'Pesquisar'
    }
    

    
  }
};
</script>

<style lang="scss">
.crud-table {
  .q-table__bottom-item {
    color: #fff;
  }

  .q-field__native {
    color: #fff;
  }

  .q-select__dropdown-icon {
    color: #fff;
  }

  .q-btn__content {
    color: #fff;
  }

  .q-table__bottom {
    color: #fff;
  }

  .q-icon {
    color: #fff;
  }
}

.crud-query-title {
  font-size: 1rem;
}
</style>
