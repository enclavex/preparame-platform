<template>
  <div class="platform">
    <q-layout
      view="hHh Lpr lff"
      container
      style="height: 100vh"
      class="shadow-2 rounded-borders"
    >
      <Toolbar class="platform-toolbar" />
      <SideNavMenu class="platform-side-nav-menu" :drawer="drawer" />
      <q-page-container>
        <router-view name="content" class="platform-content" />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
import SideNavMenu from "../components/platform/navMenu/SideNavMenu.vue";
import Toolbar from "../components/platform/toolbar/Toolbar.vue";
import { refreshToken } from "src/utils/refreshToken";

export default {
  data() {
    return {
      drawer: false,
    };
  },
  async beforeCreate() {
    try {
      const loggedUser = await refreshToken().then((token) => {
        return token.status === 200;
      });
  
      if (!loggedUser) {
        this.$router.push({ path: "/login" });
      }
    } catch (err) {
    }
  },
  methods: {
    toogleMenu: function () {
      this.drawer = !this.drawer;
    },
  },
  components: {
    SideNavMenu,
    Toolbar,
  },
};
</script>

<style lang="scss"></style>
