<template>
  <div id="q-app">
    <q-drawer
      v-if="menuList.length > 0"
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
const menu = {
  ADMIN: {
    menuList: [
      {
        icon: "mdi-domain",
        label: "Empresas",
        separator: false,
        url: "companies",
      },
      {
        icon: "mdi-account-multiple-plus-outline",
        label: "Usuários",
        separator: false,
        url: "users",
      },
      {
        icon: "mdi-account-multiple",
        label: "Funcionários",
        separator: false,
        url: "companies/employees",
      },
      {
        icon: "mdi-file-document-edit-outline",
        label: "Planos de Assinaturas",
        separator: false,
        url: "subscriptionPlans",
      },
      {
        icon: "mdi-account-check",
        label: "Especialistas",
        separator: false,
        url: "specialists",
      },
      {
        icon: "mdi-briefcase",
        label: "Produtos",
        separator: false,
        url: "products",
      },
    ],
  },
  USER: {
    menuList: [],
  },
  SPECIALIST: {
    menuList: [
      {
        icon: "mdi-calendar",
        label: "Disponibilizar Horários",
        separator: true,
        url: "providesTimetables",
      },
    ],
  },
};

export default {
  data() {
    return {
      menuList: [],
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
  created() {
    const userType = localStorage.getItem("userType");

    this.menuList = menu[userType].menuList;
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
