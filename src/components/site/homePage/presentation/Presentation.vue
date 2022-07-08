<template>
  <div id="home" class="presentation">
    <div class="presentation-picture-container">
      <div class="presentation-picture" />
      <div class="presentation-box">
        <h5>O que nos move:</h5>
        <div class="presentation-logo">
          <img src="../../../../assets/logos/logo_reduzida.png" alt>
        </div>
        <div class="presentation-box-in">
          <h6>Descomplicar e tornar a orientação de carreira acessível para todos os brasileiros.</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Presentation",
  components: {},
  setup() { },
  mounted() { }
};
</script>

<style lang="scss">
.presentation {
  display: flex;
  height: 90vh;
  width: 100vw;
  align-items: center;
  justify-content: center;
  background: #fff;
}

.presentation-picture-container {
  margin: auto;
}

.presentation-picture {
  background-image: url("../../../../assets/imgs/Prepara21.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 91vh;
  width: 90vw;
  margin: auto;
}

.presentation-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 65vh;
  left: 40vw;
  height: 25vh;
  min-height: 225px;
  width: 20vw;
  min-width: 260px;
  background-color: #fff;
  border-radius: 5px;
  font-family: "nunito", sans-serif;
  font-weight: 400;
  color: #667998;
  text-align: center;
}

.presentation-box h5 {
  margin: 2.5vh auto 2.5vh auto;
  font-size: 1.5em;
}

.presentation-box-in {
  display: flex;
  background-color: rgb(243, 244, 249);
  border-radius: 5px;
  height: 16vh;
  min-height: 140px;
  width: 18vw;
  min-width: 230px;
  margin: auto auto 10px auto;
  font-family: "nunito", sans-serif;
  font-weight: 400;
  color: #000;
  padding: 10px;
  text-align: center;
  line-height: 3vh;
}

.presentation-box-in h6 {
  margin: auto;
  font-size: 1.3em;
}

.presentation-logo img {
  position: absolute;
  width: 50px;
  height: 50px;
  top: -25px;
  left: max(50% - 25px, 100px);
}

.presentation-logo::before {
  content: "";
  top: -27px;
  left: max(50% - 22.5px, 102px);
  position: absolute;
  background-color: #fff;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}

@media (orientation: portrait){
  .presentation {
    grid-template-rows: 45% 55%;
    grid-template-columns: 100%;
    max-height: 75vh;
  }

  .presentation-picture-container {
    height: 100%;
    grid-column: 1;
    grid-row: 1;
  }

  .presentation-picture {
    background-image: url("../../../../assets/imgs/Prepara21.png");
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(80vh * 0.26);
    width: unset;
    margin: 10vh 0;
  }

  .presentation-box {
    position: relative;
    top: 0px;
    left: unset;
    height: auto;
    width: 75vw;
    background-color: rgb(243, 244, 249);
    margin: 10px auto;
  }

  .presentation-box h5 {
    margin: 10px auto 10px auto;
  }

  .presentation-box-in {
    background-color: #fff;
    border-radius: 5px;
    height: auto;
    width: 90%;
    margin: 10px auto 10px auto;
    font-family: "nunito", sans-serif;
    font-weight: 400;
    color: #000;
    padding: 10px;
    text-align: center;
    line-height: 3vh;
  }

  .presentation-box-in h6 {
    margin: auto;
  }

  .presentation-logo {
    display: none;
  }

  .presentation-logo::before {
    content: "";
    top: unset;
    left: unset;
    position: relative;
    background-color: #000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
}
</style>
