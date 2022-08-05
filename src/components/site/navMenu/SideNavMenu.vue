<template>
  <div>
    <q-expansion-item
      expand-separator
      :label="menuItem.name"
      v-for="(menuItem, index) in menuItems"
      :key="index"
    >
      <q-item
        clickable
        v-ripple
        v-for="(item, index) in menuItem.items"
        :key="index"
        :to="item.to"
      >
        <q-item-section>
          <q-item-label>{{ item.name }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-expansion-item>
  </div>
</template>

<script>
import { menuItems } from "./menuItems.js";

export default {
  name: "SideNavMenu",
  data: () => {
    return {
      menuItems,
    };
  },
};
</script>

<style></style>
