<template>
  <q-toolbar class="row bg-white text-grey-8 shadow-1">
    <q-btn
      v-if="mobile"
      flat
      @click="openMobileMenu()"
      round
      dense
      icon="menu"
    />
    <q-btn stretch flat :class="{ row: true, 'col-2': !mobile }" to="/">
      <img
        :src="imgURL(logoImg)"
        :class="{ 'nav-menu-prepara-me-logo': true, 'col-12': true }"
      />
    </q-btn>
    <q-space />
    <NavMenuItem
      v-for="(menuItem, index) in menuItems"
      :key="index"
      :menuItem="menuItem"
      :mobile="mobile"
    />
    <q-space v-if="!mobile" />
    <q-btn
      v-if="!mobile"
      flat
      stretch
      color="grey-8"
      icon="shopping_cart"
      label="Meu Carrinho"
      to="/ShoppingCart"
      no-caps
      class="nav-menu-item-name"
    />
    <q-space v-if="!mobile" />
    <q-space v-if="!mobile" />
    <q-btn
      v-if="!mobile"
      stretch
      flat
      label="Acessar Ambiente"
      to="/login"
      no-caps
      class="nav-menu-item-name"
    />
  </q-toolbar>
</template>

<script>
import NavMenuItem from "./NavMenuItem.vue";
import { menuItems } from "./menuItems.js"

export default {
  name: "NavMenu",
  data: () => {
    return {
      logoImg: "logo_preparame_home.png",
      mobile: false,
      menuItems
    };
  },
  components: {
    NavMenuItem,
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  methods: {
    imgURL: function (pathName) {
      var images = require.context("../../../assets/logos/", false, /\.png$/);

      return images("./" + pathName);
    },
    openMobileMenu: function () {
      this.$parent.$parent.$parent.openMobileMenu = true;
    },
  },
};
</script>

<style></style>
