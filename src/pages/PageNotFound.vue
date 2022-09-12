<template>
  <div id="home" :class="{ row: !mobile, 'page-not-found': true }">
    <div
      :class="{
        column: true,
        'page-not-found-text-container': true,
      }"
    >
      <div
        :class="{
          'page-not-found-title': true,
        }"
      >
        <span>OPSSSS!</span>
        <br />
        <span
          class="page-not-found-text"
          :style="{ 
            'font-weight': mobile ? '700' : '10px' ,
            'font-size': mobile ? '1.1rem' : '2.1rem' 
            }"
          >PARECE QUE NOS PERDEMOS...
        </span>
        <br />
        <div
          class="page-not-found-text"
          :style="{ 'margin-top': mobile ? '30px' : '10px' }"
        >
          Não conseguimos encontrar a página que você estava procurando.
        </div>
        <div
          class="page-not-found-text"
          :style="{ 'margin-top': mobile ? '10px' : '0px' }"
        >
          Mas não se preocupe, ainda podemos te ajudar!
        </div>
      </div>
      <br />
      <q-btn class="page-not-found-btn" label="IR PARA O INÍCIO" to="/" />
    </div>
    <br />
    <div v-if="!mobile" :class="{ row: true, 'col-5': !mobile }">
      <q-space class="col-1" />
      <div class="column col-10">
        <div class="col-2" />
        <div class="col-8 presentation-demission-picture" />
        <div class="col-2" />
      </div>
      <q-space class="col-1" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { mobile: false };
  },
  name: "ErrorNotFound",
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
};
</script>

<style lang="scss">
.page-not-found {
  position: relative;
  height: 80vh;
  background-image: url("../assets/imgs/404.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 100%;
  background-position-y: 60%;
}

.page-not-found-text-container {
  font-family: "nunito", sans-serif;
  margin: 20vh 10vw;
}

.page-not-found-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 700;
  max-width: 600px;
  font-size: 2.2rem;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-not-found-btn {
  color: $text-white;
  background-color: #1a27b7;
  width: 200px;
}

.page-not-found-text {
  font-weight: 400;
  font-size: 20px;
}

@media (orientation: portrait) {
  .page-not-found {
    background-image: url("../assets/imgs/404_mobile.png");
    background-position-x: unset;
    background-position-y: unset;
    height: 100vh;
  }

  .page-not-found-text-container {
    margin: 5vh 5vw;
  }

  .page-not-found-title {
    font-size: 1.2rem;
  }

  .page-not-found-text {
    font-size: 1rem;
  }
}
</style>
