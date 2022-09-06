<template>
  <div
    id="companies-beneficits"
    :class="{
      row: !mobile,
      'companies-beneficits': true,
    }"
  >
    <div :class="{ row: !mobile, 'col-6': !mobile }">
      <q-space class="col-1" />
      <div
        :class="{
          column: true,
          'companies-beneficits-picture-container': true,
          'col-10': true,
          'justify-center': mobile,
        }"
      >
        <div v-if="!mobile" class="col-1" />
        <div
          :class="{
            'col-10': !mobile,
            'companies-beneficits-picture': true,
          }"
        />
      </div>
    </div>
    <div
      :class="{
        column: true,
        'col-6': !mobile,
        'justify-center': true,
      }"
    >
      <div class="companies-beneficits-info-container">
        <div
          :class="{
            'companies-beneficits-title': true,
            'text-h5': mobile,
            'col-9': true,
          }"
        >
          BENEFÍCIOS PARA A EMPRESA
        </div>
        <div class="companies-beneficits-steps">
          <br />
          <div class="companies-beneficits-step">
            <div class="companies-beneficits-step-mark"></div>
            Fortalecimento da marca empregadora
          </div>
          <br />
          <div class="companies-beneficits-step">
            <div class="companies-beneficits-step-mark"></div>
            Aumento da confiança dos colaboradores que ficam na empresa
          </div>
          <br />
          <div class="companies-beneficits-step">
            <div class="companies-beneficits-step-mark"></div>
            Diminuição do risco de processo trabalhista
          </div>
          <br />
          <div class="companies-beneficits-step">
            <div class="companies-beneficits-step-mark"></div>
            Diminuição do risco de exposição negativa da marca
          </div>
          <br />
          <div class="companies-beneficits-step">
            <div class="companies-beneficits-step-mark"></div>
            Fortalecimento da responsabilidadesocial da empresa - ESG
          </div>
          <br />
          <div class="companies-beneficits-step">
            <div class="companies-beneficits-step-mark"></div>
            Melhora da experiência do colaborador
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "companies-beneficits",
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
.companies-beneficits {
  height: 90vh;
  background-image: url("../../../../assets/imgs/companiesBeneficitsBg.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.companies-beneficits-info-container {
  height: 90vh;
  margin-left: 50px;
}

.companies-beneficits-step-mark {
  background-color: #1a27b7;
  height: 15px;
  width: 15px;
  display: inline-block;
  border-radius: 10px;
  margin-right: 20px;
}

.companies-beneficits-step {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 150%;
  color: black;
}

.companies-beneficits-picture {
  background-image: url("../../../../assets/imgs/companiesBeneficits.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 95% !important;
  margin-right: auto;
}

.companies-beneficits-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 2.7rem;
  color: $text-white;
  height: 35vh;
  line-height: 30vh;
}

.companies-beneficits-btn-products {
  width: 300px;
  background-color: #1a27b7;
  color: $text-white;
}

@media (max-height: 600px) and (orientation: landscape) {
  .companies-beneficits {
    height: 110vh;
  }

  .companies-beneficits-title {
    font-size: 2.5rem;
    height: 25vh;
    line-height: 10vh;
  }
}

@media (orientation: portrait) {
  .companies-beneficits {
    height: 100vh;
    background-image: url("../../../../assets/imgs/companiesBeneficitsBGMobile.png");
    display: flex;
    flex-direction: column-reverse;
  }

  .companies-beneficits-title {
    height: auto;
    font-size: 1.8rem;
    line-height: 4vh;
    margin: 8vh 0 5vh 0;
    text-align: center;
  }

  .companies-beneficits-info-container {
    padding: 10px;
    height: 70vh;
    margin-left: 10px;
  }

  .companies-beneficits-picture {
    position: relative;
    width: 200px !important;
    height: 200px;
    margin-right: unset;
    margin: 5% auto 0 auto;
  }

  .companies-beneficits-step {
    font-size: 0.9rem;
    line-height: 20px;
    color: black;
    font-weight: 400;
  }

  .companies-beneficits-step-mark {
    height: 10px;
    width: 10px;
    margin-right: 10px;
  }
}
</style>
