<template>
  <div class="site">
    <q-layout view="hhh LpR lFr">
      <q-header>
        <NavMenu />
      </q-header>
      <q-drawer v-model="openMobileMenu" side="left" overlay bordered>
        <SideNavMenu />
      </q-drawer>
      <q-page-container>
        <router-view name="content" />
      </q-page-container>
      <Contact />
      <WhatsApp />
    </q-layout>
  </div>
</template>

<script>
import NavMenu from "../components/site/navMenu/NavMenu.vue";
import SideNavMenu from "../components/site/navMenu/SideNavMenu.vue";
import Contact from "../components/site/homePage/contact/Contact.vue";
import WhatsApp from "../components/site/general/WhatsApp.vue";

export default {
  components: {
    Contact,
    NavMenu,
    SideNavMenu,
    WhatsApp
  },
  data() {
    return {
      openMobileMenu: false,
    };
  },
};
</script>

<style>

</style>