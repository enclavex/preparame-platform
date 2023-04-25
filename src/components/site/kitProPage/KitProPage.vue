<template>
  <div class="kit-pro-page">
    <Presentation />
    <Services />
    <Advantages />
    <Newsletter />
  </div>
</template>

<script>
import Presentation from "./Presentation.vue";
import Services from "./Services.vue";
import Advantages from "./Advantages.vue";
import Newsletter from "../homePage/newsletter/Newsletter.vue";

export default {
  components: {
    Presentation,
    Services,
    Advantages,
    Newsletter,
  },
};
</script>

<style lang="scss">
.kit-pro-page {
  height: 100%;
  width: 100vw;
}

@media (orientation: portrait) {
  .kit-pro-page {
    height: 100%;
    width: 100vw;
  }
}
</style>
