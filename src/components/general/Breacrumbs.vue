<template>
  <q-breadcrumbs class="q-pl-md q-pt-md">
    <q-breadcrumbs-el
      label="Início"
      to="/platform"
      class="breadcrumb-item-non-selected"
    />
    <q-breadcrumbs-el
      v-for="(breadcrumb, index) in breadcrumbs"
      :key="breadcrumb.title"
      :label="breadcrumb.title"
      :to="breadcrumb.to"
      :class="{
        'breadcrumb-item-selected': index == breadcrumbs.length - 1,
        'breadcrumb-item-non-selected': index < breadcrumbs.length - 1,
      }"
    />
  </q-breadcrumbs>
</template>

<script>
export default {
  props: ["breadcrumbs"],
};
</script>

<style lang="scss">
.breadcrumb-item-non-selected {
  color: $text-grey;
}

.breadcrumb-item-selected {
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}
</style>
