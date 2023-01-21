<template>
  <div class="row external-user-individual-mentorship-card justify-around">
    <q-card
      class="row col-12 external-user-individual-mentorship-card-container q-pa-sm"
    >
      <q-card-section
        class="col-12 row external-user-individual-mentorship-card-header"
      >
        <div
          class="row external-user-individual-mentorship-card-info space-around col-12"
        >
          <div class="external-user-individual-mentorship-card-title col-12">
            MENTORIA INDIVIDUAL
          </div>
          <div
            :class="{
              'external-user-individual-mentorship-card-steps': true,
              'col-7': !mobile,
              'q-mt-md': mobile,
            }"
          >
            <div
              class="external-user-individual-mentorship-card-step-container"
            >
              <div class="external-user-individual-mentorship-card-step">
                <div
                  class="external-user-individual-mentorship-card-step-title-highlighter"
                />
                <div
                  class="external-user-individual-mentorship-card-step-title"
                >
                  Escolha o <b>tema</b> da mentoria, temas de A até B
                </div>
              </div>
              <div class="external-user-individual-mentorship-card-line">
                <div
                  class="external-user-individual-mentorship-card-step-line-highlighter"
                />
              </div>
            </div>
            <div
              class="external-user-individual-mentorship-card-step-container"
            >
              <div class="external-user-individual-mentorship-card-step">
                <div
                  class="external-user-individual-mentorship-card-step-title-highlighter"
                />
                <div
                  class="external-user-individual-mentorship-card-step-title"
                >
                  Escolha algum de nossos <b>mentores</b> especializados
                </div>
              </div>
              <div class="external-user-individual-mentorship-card-line">
                <div
                  class="external-user-individual-mentorship-card-step-line-highlighter"
                />
              </div>
            </div>
            <div
              class="external-user-individual-mentorship-card-step-container"
            >
              <div class="external-user-individual-mentorship-card-step">
                <div
                  class="external-user-individual-mentorship-card-step-title-highlighter"
                />
                <div
                  class="external-user-individual-mentorship-card-step-title"
                >
                  Escolha o <b>horário ideal</b> para você
                </div>
              </div>
            </div>
            <q-space></q-space>
            <div
              :class="{
                row: !mobile,
                column: mobile,
                'col-12': true,
                'justify-around': true,
              }"
            >
              <q-btn
                :class="{
                  'q-mb-md': mobile,
                }"
                color="secondary"
                label="Acessar agenda de mentorias"
                to="/ProductList"
              />
              <q-btn
                color="primary"
                label="Adquirir mentorias"
                to="/ProductList"
              />
            </div>
          </div>
          <q-space></q-space>
          <div class="external-user-individual-mentorship-card-img col-3"></div>
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
};
</script>

<style>
.external-user-individual-mentorship-card-container {
  border-radius: 15px;
}

.external-user-individual-mentorship-card-title {
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

.external-user-individual-mentorship-card-img {
  height: 150px;
  background-color: #ff4690;
}

.external-user-individual-mentorship-card-btn-container {
  width: 100%;
  position: relative;
}

.external-user-individual-mentorship-card-btn-know-more {
  height: 40px;
  margin: 10px auto;
}

.external-user-individual-mentorship-card-steps {
  display: flex;
  flex-direction: column;
}

.external-user-individual-mentorship-card-step-container:nth-child(2) {
  position: relative;
  top: -15px;
}

.external-user-individual-mentorship-card-step-container:nth-child(3) {
  position: relative;
  top: -30px;
}

.external-user-individual-mentorship-card-step-container:nth-child(3)
  .external-user-individual-mentorship-card-step-text-highlighter {
  border: none;
}

.external-user-individual-mentorship-card-step {
  display: flex;
  flex-direction: row;
}

.external-user-individual-mentorship-card-line {
  display: flex;
  position: relative;
  top: -10px;
  left: 5.5px;
}

.external-user-individual-mentorship-card-step-title-highlighter {
  position: relative;
  background-color: #1a27b7;
  height: 15px;
  width: 15px;
  border-radius: 10px;
  margin-right: 9px;
  top: 2.5px;
}

.external-user-individual-mentorship-card-step-title {
  font-size: 1rem;
}

.external-user-individual-mentorship-card-step-line-highlighter {
  height: 5vh;
  border-left: 2px #1a27b7 solid;
  margin-right: 15px;
}

@media (orientation: portrait) {
  .external-user-individual-mentorship-card-step-container {
    display: flex;
    flex-direction: column;
  }

  .external-user-individual-mentorship-card-step-container:nth-child(2) {
    position: relative;
    top: -15px;
  }

  .external-user-individual-mentorship-card-step-container:nth-child(3) {
    position: relative;
    top: -30px;
  }

  .external-user-individual-mentorship-card-step-title {
    font-size: 0.8rem;
  }

  .external-user-individual-mentorship-card-line {
    left: 5px;
  }
  .external-user-individual-mentorship-card-step-line-highlighter {
    height: 30px;
    background-color: transparent;
    border-left: unset;
    margin-right: 10px;
  }

  .external-user-individual-mentorship-card-step-title-highlighter {
    background-color: transparent;
    height: 12px;
    width: 12px;
    border-radius: 20px;
    margin-right: 5px;
    top: unset;
  }
}
</style>
