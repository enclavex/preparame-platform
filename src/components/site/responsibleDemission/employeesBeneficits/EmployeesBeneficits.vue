<template>
  <div
    id="employees-beneficits"
    :class="{
      row: !mobile,
      'employees-beneficits': true,
    }"
  >
    <div
      :class="{
        'employees-beneficits-title': true,
        'col-12': !mobile,
        'text-center': true,
      }"
    >
      BENEFÍCIOS PARA O EX-COLABORADOR
    </div>
    <div
      :class="{
        column: true,
        'col-6': !mobile,
        'justify-center': true,
      }"
    >
      <div class="employees-beneficits-info-container">
        <div class="employees-beneficits-steps">
          <br />
          <div class="employees-beneficits-step">
            <div class="employees-beneficits-step-mark"></div>
            Apoio na preparação para a recolocação
          </div>
          <br />
          <div class="employees-beneficits-step">
            <div class="employees-beneficits-step-mark"></div>
            Banco de talentos e conexão com recrutadores
          </div>
          <br />
          <div class="employees-beneficits-step">
            <div class="employees-beneficits-step-mark"></div>
            Aumento da chance de recolocação
          </div>
          <br />
          <div class="employees-beneficits-step">
            <div class="employees-beneficits-step-mark"></div>
            Aumento da autoestima
          </div>
          <br />
          <div class="employees-beneficits-step">
            <div class="employees-beneficits-step-mark"></div>
            Aumento da segurança psicológica
          </div>
          <br />
          <div class="employees-beneficits-step">
            <div class="employees-beneficits-step-mark"></div>
            Acompanhamento individual
          </div>
          <br />
          <div class="employees-beneficits-step">
            <div class="employees-beneficits-step-mark"></div>
            Diminuição do tempo do luto
          </div>
        </div>
      </div>
    </div>
    <div :class="{ row: !mobile, 'col-6': !mobile, 'col-4': mobile }">
      <div class="column employees-beneficits-picture-container col-10">
        <div
          :class="{
            'col-10': !mobile,
            'employees-beneficits-picture': true,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "employees-beneficits",
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
.employees-beneficits {
  height: 90vh;
  background-image: url("../../../../assets/imgs/employeesBeneficitsBG.png");
  background-repeat: no-repeat;
  background-size: cover;
  top: -10vh;
}

.employees-beneficits-info-container {
  height: 90vh;
  margin-left: 8vw;
}

.employees-beneficits-step-mark {
  background-color: #1a27b7;
  height: 15px;
  width: 15px;
  display: inline-block;
  border-radius: 10px;
  margin-right: 20px;
}

.employees-beneficits-step {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 160%;
  color: black;
}

.employees-beneficits-picture {
  background-image: url("../../../../assets/imgs/employeesBeneficits.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 70% !important;
  margin-left: 8vw;
}

.employees-beneficits-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 2.7rem;
  color: $text-white;
  height: 35vh;
  line-height: 30vh;
}

.employees-beneficits-btn-products {
  width: 300px;
  background-color: #1a27b7;
  color: #fff;
}

@media (max-height: 600px) and (orientation: landscape) {
  .employees-beneficits {
    height: 110vh;
  }

  .employees-beneficits-title {
    font-size: 2.5rem;
    height: 35vh !important;
    line-height: 30vh;
  }
}

@media (orientation: portrait) {
  .employees-beneficits {
    height: 100vh;
    background-image: url("../../../../assets/imgs/employeesBeneficitsBGMobile.png");
    display: flex;
    flex-direction: column;
  }

  .employees-beneficits-info-container {
    padding: 10%;
  }

  .employees-beneficits-picture {
    width: unset;
    margin-right: unset;
    margin: 5% auto 0 auto;
  }

  .employees-beneficits-title {
    height: auto;
    font-size: 1.8rem;
    line-height: 4vh;
    margin: 8vh 0 5vh 0;
    text-align: center;
  }

  .employees-beneficits-info-container {
    padding: 10px;
    height: 47vh;
    margin-left: 10px;
  }

  .employees-beneficits-picture {
    position: relative;
    width: 200px !important;
    height: 200px;
    margin-right: unset;
    margin: 5% auto 0 auto;
  }

  .employees-beneficits-step {
    font-size: 0.9rem;
    line-height: 20px;
    color: black;
    font-weight: 400;
  }

  .employees-beneficits-step-mark {
    height: 10px;
    width: 10px;
    margin-right: 10px;
  }
}
</style>
