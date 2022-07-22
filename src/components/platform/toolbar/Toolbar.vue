<template>
  <div id="q-app" class="platform-toolbar">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn flat @click="toogleMenu()" round dense icon="menu"></q-btn>
        <q-toolbar-title>Prepara.me</q-toolbar-title>
        <q-space></q-space>
        <q-btn-dropdown stretch flat label="Perfil">
          <q-list class="toolbar-perfil">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="userAvatarUrl" alt="" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label>{{ userName }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-separator></q-separator>
            <q-item @click="logout()" clickable v-close-popup tabindex="0">
              <q-item-section avatar>
                <q-icon color="icon" name="mdi-logout-variant"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label >Sair</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userAvatarUrl: "",
      userName: "",
    };
  },
  methods: {
    toogleMenu: function () {
      this.$parent.$parent.toogleMenu();
    },
    logout: function () {
      localStorage.removeItem("token");
      localStorage.removeItem("refresh_token");
      localStorage.removeItem("userAvatarUrl");
      localStorage.removeItem("userName");
      localStorage.removeItem("userType");

      this.$router.push({ path: "/login" });
    },
  },
  created() {
    this.userAvatarUrl = localStorage.getItem("userAvatarUrl");
    this.userName = localStorage.getItem("userName");
  },
};
</script>

<style>
 .q-menu {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
