<template>
  <q-breadcrumbs class="q-pl-md q-pt-md">
    <q-breadcrumbs-el label="Início" to="/platform" />
    <q-breadcrumbs-el
      v-for="breadcrumb in breadcrumbs"
      :key="breadcrumb.title"
      :label="breadcrumb.title"
      :to="breadcrumb.to"
    />
  </q-breadcrumbs>
</template>

<script>
export default {
  props: ["breadcrumbs"],
};
</script>

<style></style>
