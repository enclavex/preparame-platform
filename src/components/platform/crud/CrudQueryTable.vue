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
  ></q-table>
</template>

<script>
export default {
  props: ["result"],
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
