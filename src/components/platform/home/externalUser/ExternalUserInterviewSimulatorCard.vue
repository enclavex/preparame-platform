<template>
  <div
    :class="{
      row: true,
      'external-user-interview-simulator-card': true,
      'justify-around': true,
      'q-mb-xl': !mobile,
    }"
  >
    <q-card
      class="row col-12 external-user-interview-simulator-card-container q-pa-sm"
    >
      <q-card-section
        class="col-12 row external-user-interview-simulator-card-header"
      >
        <div
          class="row external-user-interview-simulator-card-info space-around col-12"
        >
          <div class="external-user-interview-simulator-card-title col-12">
            SIMULADOR DE ENTREVISTA
          </div>
          <div
            :class="{
              row: true,
              'external-user-interview-simulator-card-info-container': true,
              'col-9': !mobile,
              'col-12': mobile,
              'q-mt-md': true,
            }"
          >
            <div
              class="external-user-interview-simulator-card-info-container-msg col-12 q-mb-sm"
            >
              Simule uma entrevista com perguntas reais que você encontrará em
              suas próximas entrevistas.
            </div>
            <div
              :class="{'external-user-interview-simulator-card-info-container-msg':true, 'col-12':!mobile, 'col-6':mobile, 'q-mb-md':true}"
            >
              <b>Perca o medo e aumente sua confiança!</b>
            </div>
            <img
              v-if="mobile"
              :class="{
                'external-user-interview-simulator-card-img': true,
                'col-6': true,
              }"
              src="./../../../../assets/imgs/mentorshipGirl.png"
            />
            <div v-if="!mobile" class="col-4 q-mb-sm">
              <q-btn
                color="secondary"
                label="ACESSAR SIMULADOR"
                @click="goURL()"
              />
            </div>
          </div>
          <img
            v-if="!mobile"
            :class="{
              'external-user-interview-simulator-card-img': true,
              'col-3': true,
            }"
            src="./../../../../assets/imgs/mentorshipGirl.png"
          />
          <div v-if="mobile" class="q-my-md">
            <q-btn
              color="secondary"
              label="ACESSAR SIMULADOR"
              @click="goURL()"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
    };
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  methods: {
    goURL: function () {
      this.$router.push({ path: `/interviewSimulatorPresentation` });
    },
  },
};
</script>

<style>
.external-user-interview-simulator-card-container {
  border-radius: 15px;
}

.external-user-interview-simulator-card-title {
  font-weight: 700;
  font-size: 1.5rem;
  font-family: "Nunito";
  font-style: normal;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 40%);
  opacity: 1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.external-user-interview-simulator-card-img {
  height: 150px;
}

.external-user-interview-simulator-card-btn-container {
  width: 100%;
  position: relative;
}

.external-user-interview-simulator-card-btn-know-more {
  height: 40px;
  margin: 10px auto;
}
</style>
