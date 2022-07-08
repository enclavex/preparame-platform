<template>
  <div class="site">
    <NavMenu/>
    <router-view name="content"/>
    <Contact/>
  </div>
</template>


<script>
  import NavMenu from "../components/site/navMenu/NavMenu.vue";
  import Contact from "../components/site/homePage/contact/Contact.vue";

  export default {
    components: {
      Contact,
      NavMenu
    }
  };
</script>
