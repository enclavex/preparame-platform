<template>
  <div id="home" :class="{ row: !mobile, 'presentation-demission': true }">
    <div :class="{ 'col-1': !mobile }" />
    <div
      :class="{
        column: true,
        'col-4': !mobile,
        'col-12': mobile,
        'presentation-demission-prepara-me': true,
      }"
    >
        <div
          :class="{
            'presentation-demission-prepara-me-title': true,
            'text-h3': !mobile,
            'col-8': !mobile,
          }"
        >
          <span> Nem sempre é possível evitar uma demissão, </span>
          <br />
          <br />
          <span style="font-weight: bold">
            Mas é sempre possível torná-la responsável
          </span>
        </div>
        <br>
        <br>
        <q-btn
          class="presentation-demission-btn"
          label="SAIBA MAIS"
          href="#free-mentorship"
        />
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
  name: "Presentation-demission",
  data() {
    return {
      mobile: false,
    };
  },
  components: {},
  setup() {},
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
};
</script>

<style lang="scss">
.presentation-demission {
  position: relative;
  height: 100vh;
  background-image: url("../../../../assets/imgs/responsibleDemissionPresent.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: 100%;
  top: -8vh;
}

.presentation-demission-picture {
  width: 80% !important;
  height: 100%;
  margin-right: auto;
}

.presentation-demission-prepara-me {
  font-family: "nunito", sans-serif;
  margin: auto;
}

.presentation-demission-prepara-me-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 2.2rem;
  text-transform: uppercase;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.presentation-demission-btn {
  color: $text-white;
  background-color: #1a27b7;
  width: 200px;
}

@media (orientation: portrait) {
  .presentation-demission {
    position: unset;
    background-size: 150%;
    background-position-y: 100%;
    height: 90vh;
  }

  .presentation-demission-prepara-me {
    height: 100%;
    padding: 10%;
  }

  .presentation-demission-prepara-me-title {
    font-size: 1.4rem;
  }

  .presentation-demission-btn {
  width: 150px;
}
}
</style>
