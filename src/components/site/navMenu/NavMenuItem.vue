<template>
  <q-btn-dropdown
  v-if="!mobile"
    class="nav-menu-item-name"
    stretch
    flat
    no-caps
    :label="menuItem.name"
    dropdown-icon="expand_more"
  >
    <q-list>
      <q-item
        clickable
        v-close-popup
        tabindex="0"
        v-for="(item, index) in menuItem.itens"
        :key="index"
        :to="item.to"
      >
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  props: ["menuItem", "mobile"],
};
</script>

<style>
.nav-menu-item-name {
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
}
</style>
