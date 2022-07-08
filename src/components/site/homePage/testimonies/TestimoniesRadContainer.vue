<template>
  <div class="testimonies-rad-container">
    <div
      v-for="testimonie in testimonies"
      :id="testimonie.idRad"
      :key="testimonie.idRad"
      :class="{'rad-input':true,'rad-checked': testimonie.checked}"
      @click="slideShapes($event.target)"
    />
  </div>
</template>

<script>
  export default {
    props: {
      testimonies: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      slideShapes(target) {
        this.$parent.slideShapes(target);
      }
    }
  };
</script>

<style>
  .testimonies-rad-container {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

  .rad-input {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    margin: 20px 3px;
  }

  .rad-input.rad-checked {
    background-color: #667998;
  }

  @media (max-height: 600px) {
    .rad-input {
      height: 15px;
      width: 15px;
    }
  }
</style>
