<template>
  <div class="who-we-are">
    <div class="who-we-are-title-container">
      <div class="who-we-are-flowers">
        <img src="../../../../assets/imgs/vasoflor.png" alt>
      </div>
      <div class="who-we-are-title">
        <h1>Quem somos</h1>
      </div>
    </div>
    <div class="who-we-are-employees-container">
      <WhoWeAreEmployee/>
      <WhoWeAreEmployee/>
      <WhoWeAreEmployee/>
      <WhoWeAreEmployee/>
    </div>
  </div>
</template>

<script>
  import WhoWeAreEmployee from "./WhoWeAreEmployee.vue";

  export default {
    components: {
      WhoWeAreEmployee
    }
  };
</script>

<style lang="scss">
  .who-we-are {
    display: flex;
    flex-direction: row;
  }

  .who-we-are-title-container {
    display: flex;
    flex-direction: column;
  }

  .who-we-are-title h1 {
    font-family: "nunito", sans-serif;
    font-weight: 700;
    margin: 5vh 5vw;
    color: #000;
    text-align: left;
    font-size: 3rem;
    max-width: 200px;
  }

  .who-we-are-flowers img {
    height: 200px;
  }

  .who-we-are-employees-container {
    margin: 10vh 5vw;
    display: flex;
    gap: 1vh 10vw;
    max-width: 70vw;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    .who-we-are {
      flex-direction: column;
    }

    .who-we-are-flowers {
      display: flex;
    }

    .who-we-are-flowers img {
      height: 200px;
      margin: 0 auto;
    }

    .who-we-are-title h1 {
      margin: 1vh 5vw;
      text-align: center;
      font-size: 2rem;
      max-width: 100vw;
    }

    .who-we-are-employees-container {
      margin: 20px auto;
    }
  }
</style>
