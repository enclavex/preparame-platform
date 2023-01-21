<template>
  <div class="resume-creator-presentation">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <div :class="{ 'resume-creator-presentation-header': true, row: !mobile }">
      <div
        :class="{
          'resume-creator-presentation-info': true,
          'col-8': !mobile,
        }"
      >
        <div :class="{ 'resume-creator-presentation-header-title': true }">
          CRIADOR DE CURRÍCULOS
        </div>
        <div :class="{ 'resume-creator-presentation-header-text': true }">
          Se você chegou até aqui, provavelmente precisa de um currículo para
          chamar de seu, né? Então a gente fez este construtor de CV gratuito
          (grátis, de graça, free mesmo) e fácil de usar (seria um sonho?).<br />
          Fazer seu currículo é um momento de autoconhecimento, então tire um
          tempo de qualidade e concentre-se em explorar ao máximo suas
          experiências.
        </div>
        <q-btn
          flat
          label="CRIAR MEU CV"
          v-close-popup
          @click="goURL()"
          :class="{ 'resume-creator-presentation-header-btn': true }"
        />
      </div>
      <div
        v-if="!mobile"
        :class="{
          'resume-creator-presentation-header-img': true,
          'col-4': !mobile,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../../general/Breacrumbs.vue";

export default {
  data() {
    return {
      mobile: false,
      breadcrumbs: [
        {
          title: "Apresentação do Criador de Currículos",
          to: "",
        },
      ],
    };
  },
  components: {
    Breadcrumbs,
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  methods: {
    goURL() {
      this.$router.push({ path: `/${"resumeCreator"}` });
    },
  },
};
</script>

<style lang="scss">
.resume-creator-presentation {
  height: 94vh;
}

.resume-creator-presentation-header {
  position: relative;
  width: 96vw;
  height: 40vh;
  margin: 0 auto 0 auto;
  background-color: white;
  top: 3vh;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-content: center;
}

.resume-creator-presentation-second-header {
  position: relative;
  width: 96vw;
  height: 40vh;
  margin: 0 auto 0 auto;
  background: linear-gradient(90deg, #dfe1f3 0%, #f6e9f2 100%);
  top: 5vh;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-content: center;
}

.resume-creator-presentation-header-title {
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2vw;
  margin-top: 3vh;
  margin-right: auto;
}

.resume-creator-presentation-header-text {
  color: $text-dark-grey;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 2vw;
  margin-top: 1vh;
  margin-right: auto;
}

.resume-creator-presentation-pro-header-images {
  width: 100vw;
  height: 20vh;
  color: $text-dark-grey;
  font-size: 1rem;
  font-weight: 400;
  margin-left: 2vw;
  margin-top: 1vh;
  margin-right: auto;
}

.resume-creator-presentation-header-btn {
  margin-top: 2vh;
  margin-left: 2vw;
  height: 50px;
  width: 250px;
  background-color: $prepara-me-blue;
  border-radius: 5px;
  color: $text-white;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.resume-creator-presentation-header-pro-img {
  position: relative;
  background-image: url("../../../assets/imgs/mentorshipGirl.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 40%;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

.resume-creator-presentation-header-img {
  position: relative;
  background-image: url("../../../assets/imgs/mentorshipGirl.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-x: 40%;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

@media (orientation: portrait) {
  .resume-creator-presentation-header {
    height: 40vh;
    width: 94%;
  }

  .resume-creator-presentation-header-title {
    font-size: 1.3rem;
    margin-left: 1vw;
    margin-top: 1vh;
  }

  .resume-creator-presentation-header-text {
    font-size: 0.8rem;
    margin-left: 1vw;
    margin-top: 1vh;
  }

  .resume-creator-presentation-header-btn {
    height: 40px;
    width: 150px;
    font-size: 0.8rem;
  }
}
</style>
