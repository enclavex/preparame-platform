<template>
  <div class="product-schedule">
    <Presentation/>
    <h1 class="product-schedule-title">Agende com um de nossos especialistas!</h1>
    <SpecialistSchedule/>
    <SpecialistSchedule/>
    <SpecialistSchedule/>
  </div>
</template>

<script>
  import Presentation from "../components/site/productDetails/Presentation.vue";
  import SpecialistSchedule from "../components/site/productSchedule/SpecialistSchedule.vue";


  export default {
    components: {
      Presentation,
      SpecialistSchedule,
    },
    created() {
      window.scrollTo(0, 0);
    }
  };
</script>

<style>
  .product-schedule-article {
    padding: 2%;
  }

  .product-schedule h1 {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    margin: 0.5rem;
    text-align: center;
  }

  .product-schedule-title {
    font-size: 2rem;
  }
</style>
