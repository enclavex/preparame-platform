<template>
  <div
    id="help-employees"
    :class="{
      row: !mobile,
      column: mobile,
      reverse: mobile,
      'help-employees': true,
    }"
  >
    <div :class="{ row: true, 'col-6': !mobile, 'col-4': mobile }">
      <q-space class="col-1" />
      <div class="column help-employees-picture-container col-10">
        <div v-if="!mobile" class="col-1" />
        <div
          :class="{
            'col-10': !mobile,
            'col-12': mobile,
            'help-employees-picture': true,
          }"
        />
      </div>
      <q-space v-if="mobile" class="col-1" />
    </div>
    <div
      :class="{
        column: true,
        'col-4': !mobile,
        'col-8': mobile,
        'justify-center': true,
      }"
    >
      <div class="help-employees-info-container">
        <div
          :class="{
            'help-employees-title': true,
            'text-h3': !mobile,
            'text-h5': mobile,
            'col-9': true,
          }"
        >
          Apoie seus ex-colaboradores a continuarem suas carreiras pós-demissão
        </div>
        <div class="help-employees-sub-title">
          <br />
          e diminua os impactos negativos causados pelo processo.
        </div>
      </div>
      <q-btn
        class="demission-course-btn"
        label="DESCUBRA COMO"
        href="#free-mentorship"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "help-employees",
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
.help-employees {
  height: 80vh;
}

.help-employees-picture {
  background-image: url("../../../../assets/imgs/findHelpEmployees.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 95% !important;
  height: 100%;
  margin-right: auto;
}

.help-employees {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  color: #1a27b7;
}

.help-employees-title {
  margin: 10% 0 0 0;
}

.help-employees-sub-title {
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

.demission-course-btn {
  margin: 10% 0;
}

@media (orientation: portrait) {
  .help-employees {
    height: 100vh;
  }

  .help-employees-info-container {
    padding: 10%;
  }

  .help-employees-picture {
    width: unset;
    margin-right: unset;
    margin: 5% auto 0 auto;
  }

  .help-employees-title {
    text-transform: uppercase;
    background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .help-employees-sub-title {
    font-size: 1rem;
    color: #1a27b7;
  }

  .demission-course-btn {
    margin: 10%;
  }
}
</style>
