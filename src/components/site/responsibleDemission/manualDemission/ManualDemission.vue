<template>
  <div
    id="manual-demission"
    :class="{
      row: !mobile,
      'manual-demission': true,
    }"
  >
    <div :class="{ row: !mobile, 'col-6': !mobile }">
      <q-space v-if="!mobile" class="col-1" />
      <div class="column manual-demission-picture-container col-10">
        <div v-if="!mobile" class="col-1" />
        <div
          :class="{
            'col-10': !mobile,
            'manual-demission-picture': true,
          }"
        />
      </div>
    </div>
    <div
      :class="{
        column: true,
        'col-4': !mobile,
        'justify-center': true,
      }"
    >
      <div class="manual-demission-info-container">
        <div
          :class="{
            'manual-demission-title': true,
            'text-h3': !mobile,
            'col-9': true,
          }"
        >
          Baixe agora o e-book gratuito manual do desligamento humanizado
        </div>
        <div class="manual-demission-sub-title">
          <br />
          e aprenda a diminuir os impactos negativos das demissões
        </div>
        <q-btn
          class="manual-demission-btn"
          label="Acessar"
          href="https://preparame-backend.s3.sa-east-1.amazonaws.com/others/e-book+Manual+da+Demiss%C3%A3o+Respons%C3%A1vel+-+Prepara.me.pdf"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "manual-demission",
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
.manual-demission {
  height: 90vh;
}

.manual-demission-picture {
  background-image: url("../../../../assets/imgs/manual.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100% !important;
  height: 100%;
  margin-top: auto;
  margin-left: 10vw;
}

.manual-demission {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  color: #1a27b7;
}

.manual-demission-sub-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 170%;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.metorship-steps {
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
}

.manual-demission-btn-products {
  width: 300px;
  background-color: #1a27b7;
  color: #fff;
}

.manual-demission-btn {
  width: 200px;
  height: 50px;
  background-color: #1a27b7;
  color: #fff;
}

@media (max-height: 800px) and (orientation: landscape) {
  .manual-demission-title {
    font-size: 2rem;
  }

  .manual-demission-sub-title { 
    font-size: 1.1rem;

  }
}

@media (orientation: portrait) {
  .manual-demission {
    height: 100vh;
    display: flex;
    flex-direction: column-reverse;
  }

  .manual-demission-info-container {
    padding: 10%;
  }

  .manual-demission-picture {
    margin-right: unset;
    margin: 5% auto 0 auto;
    width: 170px !important;
    height: 200px;
  }

  .manual-demission-title {
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  .manual-demission-sub-title {
    font-size: 1rem;
  }
  
  .manual-demission-sub-title, .manual-demission-title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    line-height: 35px;
    background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}
</style>
