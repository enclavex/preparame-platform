<template>
  <div
    id="mentorship"
    :class="{ row: !mobile, column: mobile, reverse: mobile, mentorship: true }"
  >
    <div :class="{ row: true, 'col-6': !mobile, 'col-4': mobile }">
      <q-space class="col-1" />
      <div class="column mentorship-picture-container col-10">
        <div v-if="!mobile" class="col-2" />
        <div
          :class="{
            'col-8': !mobile,
            'col-12': mobile,
            'mentorship-picture': true,
          }"
        />
        <div v-if="!mobile" class="col-2" />
      </div>
      <q-space class="col-1" />
    </div>
    <div :class="{ row: true, 'col-5': !mobile, 'col-8': mobile }">
      <div class="col-12 mentorship-info-container">
        <div
          :class="{
            'mentorship-title': true,
            'text-h3': !mobile,
            'text-h5': mobile,
            'col-9': true,
          }"
        >
          FAÇA MENTORIAS <br />
          <b>INDIVIDUAIS!</b>
        </div>
        <div class="metorship-steps">
          <div class="metorship-step-container">
            <div class="metorship-step">
              <div class="metorship-step-title-highlighter" />
              <div class="metorship-step-title">Escolha o tema da mentoria</div>
            </div>
            <div class="metorship-step-obs">
              <div class="metorship-step-text-highlighter" />
              <div class="metorship-step-text">Temas desde A até B.</div>
            </div>
          </div>
          <div class="metorship-step-container">
            <div class="metorship-step">
              <div class="metorship-step-title-highlighter" />
              <div class="metorship-step-title">Escolha o especialista</div>
            </div>
            <div class="metorship-step-obs">
              <div class="metorship-step-text-highlighter" />
              <div class="metorship-step-text">
                Profissionais especializados em recrutamento e seleção.
              </div>
            </div>
          </div>
          <div class="metorship-step-container">
            <div class="metorship-step">
              <div class="metorship-step-title-highlighter" />
              <div class="metorship-step-title">Escolha o horário</div>
            </div>
            <div class="metorship-step-obs">
              <div class="metorship-step-text-highlighter" />
              <div class="metorship-step-text">
                Opções flexíveis para que você agende o momento ideal para você.
              </div>
            </div>
          </div>
          <q-btn
            class="mentorship-btn-products"
            color="indigo"
            label="Conheça nossos serviços"
            to="/ProductList"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mentorship",
  data() {
    return {
      mobile: false,
      step: 1,
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
.mentorship {
  height: 90vh;
}

.mentorship-picture {
  background-image: url("../../../../assets/imgs/mentorshipGirl.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 80% !important;
  height: 100%;
  margin-right: auto;
}

.mentorship {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  color: #1a27b7;
}

.metorship-steps {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
}

.metorship-step-container:nth-child(2) {
  position: relative;
  top: -15px;
}

.metorship-step-container:nth-child(3) {
  position: relative;
  top: -30px;
}

.metorship-step-container:nth-child(3) .metorship-step-text-highlighter {
  border: none;
}

.metorship-step {
  display: flex;
  flex-direction: row;
}

.metorship-step-obs {
  display: flex;
  position: relative;
  top: -10px;
  left: 7.5px;
}

.metorship-step-title-highlighter {
  position: relative;
  background-color: #1a27b7;
  height: 15px;
  width: 15px;
  border-radius: 10px;
  margin-right: 9px;
  top: 2.5px;
}

.metorship-step-title {
  font-size: 1rem;
}

.metorship-step-text-highlighter {
  height: 10vh;
  border-left: 2px #1a27b7 solid;
  margin-right: 15px;
}

.metorship-step-text {
  font-family: "Nunito";
  font-weight: 400;
  font-size: 0.9rem;
  color: #555555;
  line-height: 10vh;
}

.mentorship-btn-products {
  width: 300px;
}

@media (orientation: portrait) {
  .mentorship {
    height: 100vh;
  }

  .metorship-step-text {
    line-height: unset;
    margin-top: 7px;
  }

  .metorship-steps {
    margin-top: 5vh;
  }

  .mentorship-info-container {
    padding: 10%;
  }

  .mentorship-picture {
    width: unset;
    margin-right: unset;
    margin: 5% auto 0 auto;
  }
}
</style>
