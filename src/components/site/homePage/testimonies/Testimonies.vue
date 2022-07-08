<template>
  <div id="testimonies" class="testimonies">
    <div class="testimonies-title">Depoimentos</div>
    <TestimoniesCard/>
    <TestimoniesRadContainer :testimonies="testimonies"/>
  </div>
</template>

<script>
  import TestimoniesCard from "./TestimoniesCard.vue";
  import TestimoniesRadContainer from "./TestimoniesRadContainer.vue";
  export default {
    components: {
      TestimoniesCard,
      TestimoniesRadContainer
    },
    data: () => {
      return {
        testimonies: [
          {
            idRad: 0,
            checked: true
          },
          {
            idRad: 1,
            checked: false
          },
          {
            idRad: 2,
            checked: false
          }
        ]
      };
    }
  };
</script>

<style>
  .testimonies {
    display: flex;
    width: 100vw;
    height: auto;
    background: linear-gradient(
      90deg,
      rgba(255, 70, 144, 1) 0%,
      rgba(26, 39, 183, 1) 100%
    );
    flex-direction: column;
  }

  .testimonies-title {
    position: relative;
    font-family: "Nunito", sans-serif;
    font-size: 40px;
    font-weight: 100;
    color: #fff;
    margin: 30px auto 30px auto;
    text-align: center;
  }
</style>
