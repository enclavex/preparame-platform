<template>
  <div
    id="demission-course"
    :class="{
      row: !mobile,
      'demission-course': true,
    }"
  >
    <div
      :class="{
        column: true,
        'col-5': !mobile,
        'justify-center': true,
      }"
    >
      <div class="demission-course-info-container">
        <div
          :class="{
            'demission-course-title': true,
            'text-h3': !mobile,
            'col-9': true,
          }"
        >
          CURSO DE DEMISSÃO
        </div>
        <div class="demission-course-sub-title">
          <br />
          Valor convertido para o projeto <b>Cruzando Histórias</b>
        </div>
        <q-btn
          class="demission-course-btn"
          label="INSCREVER-ME"
          to="/ProductList"
        />
      </div>
    </div>
    <div :class="{ row: true, 'col-7': !mobile }">
      <div class="column demission-course-picture-container col-10">
        <div
          :class="{
            'col-10': !mobile,
            'demission-course-picture': true,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "demission-course",
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
.demission-course {
  height: 90vh;
  background: linear-gradient(90deg, #15aa7c 0%, #1a27b7 100%);
}

.demission-course-picture {
  background-image: url("../../../../assets/imgs/course.png");
  background-repeat: no-repeat;
  background-size: contain;
  width: 100% !important;
  height: 100%;
  margin-top: auto;
  margin-left: 10vw;
}

.demission-course {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 64px;
  color: $text-white;
}

.demission-course-sub-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 170%;
  color: $text-white;
}

.demission-course-info-container {
  margin-left: 10vw;
}

.demission-course-btn-products {
  width: 300px;
  background-color: #1a27b7;
  color: #fff;
}

.demission-course-btn {
  width: 200px;
  height: 50px;
  background-color: #1a27b7;
  color: #fff;
}

@media (orientation: portrait) {
  .demission-course {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .demission-course-info-container {
    padding:  20% 0 0 10%;
    margin-left: unset;
  }

  .demission-course-title {
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 40px;
    color: $text-white;
  }

  .demission-course-sub-title {
    font-size: 1rem;
  }

  .demission-course-picture {
    width: 300px !important;
    height: 300px;
    margin: 5% auto 0 auto;
  }

  .demission-course-picture-container {
    margin: auto;
  }
}
</style>
