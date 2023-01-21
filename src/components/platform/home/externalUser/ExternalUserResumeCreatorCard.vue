<template>
  <div class="row external-user-resume-creator-card justify-around q-mb-xl">
    <q-card
      class="row col-12 external-user-resume-creator-card-container q-pa-sm"
    >
      <q-card-section
        class="col-12 row external-user-resume-creator-card-header"
      >
        <div
          class="row external-user-resume-creator-card-info space-around col-12"
        >
          <div class="external-user-resume-creator-card-title col-12">
            MODELO DE CURRÍCULO GRÁTIS
          </div>
          <div
            :class="{
              row: true,
              'external-user-resume-creator-card-info-container': true,
              'col-6': mobile,
              'col-9': !mobile,
              'q-mt-md': true,
            }"
          >
            <div
              class="external-user-resume-creator-card-info-container-msg col-12 q-mb-sm"
            >
              Aumente as chances de ter seu CV selecionado com nosso modelo e
              dicas para preenchimento!
            </div>
            <div
              class="external-user-resume-creator-card-info-container-msg col-12 q-mb-md"
            >
              <b>É fácil. É rápido. É gratuito!</b>
            </div>
            <div v-if="!mobile" class="col-4 q-mb-sm">
              <q-btn
                color="secondary"
                label="BAIXAR MODELO"
                href="https://preparame-backend.s3.sa-east-1.amazonaws.com/others/Modelo+1+-+CV+Nome+Sobrenome+-+%C3%81rea++(1).docx"
              />
            </div>
          </div>
          <img
            :class="{
              'external-user-resume-creator-card-img': true,
              'col-3': !mobile,
              'col-6': mobile,
            }"
            src="./../../../../assets/imgs/check.png"
          />
        </div>
        <div v-if="mobile" class="col-12 q-mt-md">
          <q-btn
            color="secondary"
            label="BAIXAR MODELO"
            href="https://preparame-backend.s3.sa-east-1.amazonaws.com/others/Modelo+1+-+CV+Nome+Sobrenome+-+%C3%81rea++(1).docx"
          />
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
.external-user-resume-creator-card-container {
  border-radius: 15px;
}

.external-user-resume-creator-card-title {
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

.external-user-resume-creator-card-img {
  height: 150px;
}

.external-user-resume-creator-card-btn-container {
  width: 100%;
  position: relative;
}

.external-user-resume-creator-card-btn-know-more {
  height: 40px;
  margin: 10px auto;
}
</style>
