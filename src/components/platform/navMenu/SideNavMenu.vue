<template>
  <div id="q-app">
    <q-drawer
      v-model="drawerController"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      overlay
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
        <q-list>
          <template v-for="(menuItem, index) in menuList">
            <q-item
              :key="index"
              clickable
              :active="menuItem.label === 'Outbox'"
              v-ripple
              @click="goUrl(menuItem.url)"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator
              :key="'sep' + index"
              v-if="menuItem.separator"
            ></q-separator>
          </template>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
const menuList = [
  {
    icon: "schedule",
    label: "Agendar Serviço",
    separator: true,
    url: "products",
  },
];

export default {
  data() {
    return {
      menuList,
      drawerController: false,
    };
  },
  props: ["sideNavMenuComponent"],
  methods: {
    goUrl: function (url) {
      if (this.$router.history.current.path !== `/${url}`) {
        this.$router.push({ path: `/${url}` });
      }
    },
    toogleMenu() {
      this.drawerController = !this.drawerController;
    },
  },
  mounted() {
    this.sideNavMenuComponent.$on("toogleMenu", this.toogleMenu);
  },
};
</script>

<style lang="scss">
.side-nav-menu {
  max-width: 200px;
  height: 100%;
}

.side-nav-menu-list {
  height: 100%;
}
</style>
