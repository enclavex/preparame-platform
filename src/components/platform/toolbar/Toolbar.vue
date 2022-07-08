<template>
  <div id="q-app">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn flat @click="toogleMenu()" round dense icon="menu"></q-btn>
        <q-toolbar-title>Prepara.me</q-toolbar-title>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  methods: {
    toogleMenu: function () {
      this.$parent.$parent.toogleMenu();
      
    },
  },
};
</script>

<style></style>
