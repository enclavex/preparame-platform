<template>
  <q-table
    class="q-mt-md bg-secondary crud-table"
    :data="result.data"
    :columns="result.columns"
    row-key="id"
    table-class="bg-background"
    table-header-class="text-white bg-secondary"
    title-class="text-white bg-secondary"
    no-data-label="Sem dados para mostrar"
    selection="multiple"
    :selected.sync="selecteds"
    :selected-rows-label="getSelectedString"
  >
    <template v-slot:body-cell-actions="props">
      <q-td auto-width :props="props">
        <q-btn-group>
          <q-btn color="negative" icon="mdi-delete" @click="removeSelected({id: props.row.id})"></q-btn>
          <q-btn color="grey-8" icon="mdi-pencil" @click="editSelected({id: props.row.id})"></q-btn>
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
      const actualUrl = this.$router.history.current.path

      this.$router.push({ path: `${actualUrl}/${id.id}` });
    },
  },
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
}
</style>
