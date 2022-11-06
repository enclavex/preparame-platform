<template>
  <div
    v-if="simulatorVideos.length > 0"
    :class="{ 'interview-simulator': true, column: !mobile }"
  >
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <q-card-section class="interview-simulator-card-progress-bar-container row">
      <div class="interview-simulator-progress-bar-container col-12">
        <div
          class="interview-simulator-progress-bar-indicator"
          :style="{
            width: `${interviewPercent}%`,
          }"
        ></div>
      </div>
    </q-card-section>
    <div class="interview-simulator-video-title">
      {{ simulatorVideos[videoNumber].question }}
    </div>
    <video
      class="interview-simulator-video"
      controls
      autoplay
      controlsList="nodownload"
      oncontextmenu="return false;"
    >
      <source :src="simulatorVideos[videoNumber].linkVideo" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="interview-simulator-control row justify-around">
      <q-btn
        outline
        label="ANTERIOR"
        :class="{
          'interview-simulator-previous-btn': true,
          'interview-simulator-btn': true,
        }"
        @click="priorVideo()"
      />
      <q-btn
        v-if="!mobile"
        flat
        label="APOIO DE RESPOSTA"
        :class="{
          'interview-simulator-tip-btn': true,
          'interview-simulator-btn': true,
        }"
        @click="showTipDialog()"
      />
      <q-btn
        flat
        label="PRÓXIMA"
        :class="{
          'interview-simulator-next-btn': true,
          'interview-simulator-btn': true,
        }"
        @click="nextVideo()"
      />
      <q-btn
        v-if="mobile"
        flat
        label="APOIO DE RESPOSTA"
        :class="{
          'interview-simulator-tip-btn': true,
          'interview-simulator-btn': true,
        }"
        @click="showTipDialog()"
      />
    </div>
    <q-dialog v-model="showTip">
      <q-card flat class="interview-simulator-tip-card">
        <q-card class="interview-simulator-tip-card-background">
          <div class="interview-simulator-tip-card-logo"></div>
          <div class="interview-simulator-tip-card-title">
            Apoio de Resposta
          </div>

          <q-card-section class="q-pt-none">
            <div
              class="interview-simulator-tip-card-tip"
              v-html="simulatorVideos[videoNumber].tip"
            ></div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              label="Estou Pronto"
              :class="{ 'interview-simulator-tip-card-btn': true }"
              @click="showTip = false"
            />
          </q-card-actions>
        </q-card>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import Breadcrumbs from "../../general/Breacrumbs.vue";
import { filterCrud } from "./../../general/crud/utils/filterCrud";

export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      simulatorVideos: [],
      showTip: false,
      interviewPercent: 0,
      videoNumber: 0,
      mobile: false,
      breadcrumbs: [
        {
          title: "Apresentação do Simulador de Entrevistas",
          to: "interviewSimulatorPresentation",
        },
        {
          title: "Simulador de Entrevistas",
          to: "",
        },
      ],
    };
  },
  methods: {
    showTipDialog: function () {
      this.showTip = true;

      this.loadTip();
    },
    async loadVideos() {
      this.simulatorVideos = await filterCrud([], "products/simulatorVideos");

      this.calculatePercent();
    },
    nextVideo() {
      if (this.videoNumber + 1 < this.simulatorVideos.length) {
        this.videoNumber = this.videoNumber + 1;
      }

      var video = document.querySelector("video");

      video.load();
      video.play();

      this.calculatePercent();
    },
    priorVideo() {
      if (this.videoNumber > 0) {
        this.videoNumber = this.videoNumber - 1;
      }

      this.calculatePercent();
    },
    calculatePercent() {
      this.interviewPercent =
        ((this.videoNumber + 1) / this.simulatorVideos.length) * 100;
    },
  },
  created() {
    this.loadVideos();
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
};
</script>

<style lang="scss">
.interview-simulator {
  height: 95vh;
  padding: 0 40px 0 40px;
}

.interview-simulator-video-title {
  position: relative;
  text-align: left;
  padding: 20px 0 0 0;
  font-size: 2rem;
  font-family: "nunito";
  text-transform: uppercase;
  color: $prepara-me-blue;
  font-weight: 700;
  margin: auto;
}

.interview-simulator-video {
  height: 60vh;
  width: 50vw;
  margin: auto;
}

.interview-simulator-control {
  height: 10vh;
}

.interview-simulator-btn {
  height: 50px;
  width: 250px;
}

.interview-simulator-previous-btn {
  color: $prepara-me-blue;
}

.interview-simulator-next-btn {
  color: $text-white;
  background-color: $prepara-me-blue;
}

.interview-simulator-tip-btn {
  background: $prepara-me-gradient;
  color: $text-white;
}

.interview-simulator-tip-card {
  background-color: transparent;
  padding: 50px;
}

.interview-simulator-tip-card-background {
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.interview-simulator-tip-card-logo {
  position: absolute;
  height: 5vw;
  width: 5vw;
  margin-top: 2vh;
  background-image: url("./../../../assets/logos/logo_reduzida.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  background-position-y: 1vh;
  border-radius: 5vw !important;
  top: -7vh;
}

.interview-simulator-tip-card-title {
  position: relative;
  width: 100%;
  font-family: "nunito";
  font-size: 2rem;
  top: 4vh;
  text-align: left;
  color: #1a27b7;
  padding-left: 20px;
}

.interview-simulator-tip-card-tip {
  position: relative;
  width: 100%;
  top: 4vh;
}

.interview-simulator-tip-card-btn {
  position: relative;
  background: $prepara-me-gradient;
  color: $text-white;
  height: 50px;
  width: 250px;
}

.interview-simulator-card-progress-bar-container {
  padding: 0;
  margin-top: 20px;
}

.interview-simulator-progress-bar-container {
  height: 10px !important;
  background: $background-grey;
  position: relative;
  border-radius: 5px;
}

.interview-simulator-progress-bar-indicator {
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  -webkit-mask: linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0);
}

.interview-simulator-progress-bar-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
}

@media (orientation: portrait) {
  .interview-simulator {
    height: 92.5vh;
    padding: 4vw;
  }

  .interview-simulator-video-title {
    font-size: 1rem;
  }

  .interview-simulator-video {
    height: 30vh;
    width: 90vw;
    margin: auto;
  }

  .interview-simulator-tip-card {
    padding: 50px 0 0 0;
  }

  .interview-simulator-tip-card-title {
    font-size: 1rem;
  }

  .interview-simulator-tip-card-tip {
    font-size: 0.8rem;
    top: 4vh;
  }

  .interview-simulator-tip-card-btn {
    font-size: 0.8rem;
    height: 40px;
    width: 200px;
  }

  .interview-simulator-tip-card-logo {
    height: 15vw;
    width: 15vw;
    border-radius: 15vw !important;
    top: -6vh;
  }

  .interview-simulator-btn {
    height: 40px;
    width: 150px;
    font-size: 0.7rem;
    margin: 10px 0 10px 0;
  }
}
</style>
