<template>
  <div class="row user-card q-ma-md">
    <q-card class="row col-12 user-card-container">
      <q-card-section class="col-12 row user-card-header q-mb-sm">
        <div class="user-card-picture col-3">
          <img :src="userAvatarUrl" alt="" />
        </div>
        <div class="user-card-info col-9">
          <div class="user-card-name">
            {{ userName }}
          </div>
          <!-- <div class="user-card-access-profile" @click="goUrl('profile')">
            Acessar Perfil
          </div> -->
        </div>
      </q-card-section>
      <!-- <q-card-section class="col-12 user-card-profile-level-info">
        <div class="user-card-profile-level-label q-mt-sm">
          Seu perfil está quase completo!
        </div>
        <div class="user-card-profile-level-progress q-pa-sm row">
          <q-linear-progress :value="0.9" size="10px" class="col-10" rounded />
          <div class="user-card-profile-level-progress-percent col-2">90%</div>
        </div>
      </q-card-section> -->
      <q-card-section class="col-12 user-card-profile-level-info">
        <q-banner
          v-if="!surveyAnswered"
          rounded
          class="q-ma-sm text-white bg-secondary"
        >
          <div class="user-card-banner-content row">
            <q-btn
              flat
              color="white"
              label="Responder Pesquisa de Perfil"
              class="col-12"
              @click="goUrl(`survey`)"
            />
          </div>
        </q-banner>
        <q-banner
          rounded
          :class="{
            'q-ma-sm': true,
            'text-white': true,
            'bg-green': product.scheduled,
            'bg-secondary': !product.scheduled,
          }"
          v-for="product in products"
          :key="product.id"
        >
          <div class="user-card-banner-content row">
            <q-btn
              v-if="!product.scheduled"
              flat
              color="white"
              :label="`Agendar ${product.name}`"
              class="col-12"
              @click="goUrl(`products/schedule/${product.id}`)"
            />
            <div v-else class="text-uppercase text-center text-weight-medium">
              Agendamento {{ product.name }} realizado
            </div>
          </div>
        </q-banner>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ["products"],
  data() {
    return {
      userAvatarUrl: "",
      userName: "",
      surveyAnswered: false,
      data: [
        ["Completo", "Falta"],
        ["Percentual", 70],
        ["Percentual", 30],
      ],
    };
  },
  created() {
    this.userAvatarUrl = localStorage.getItem("userAvatarUrl");

    this.userName = localStorage.getItem("userName");
  },
  mounted() {
    this.surveyAnswered =
      localStorage.getItem("surveyAnswered") == "true" ? true : false;
  },
  methods: {
    goUrl: function (url) {
      this.$router.push({ path: `/${url}` });
    },
  },
};
</script>

<style lang="scss">
.user-card-picture {
  height: 10vh;
}

.user-card-picture > img {
  height: 10vh;
  border-radius: 50%;
}

.user-card-name {
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
}

.user-card-access-profile {
  cursor: pointer;
}

.user-card-profile-level-label {
  font-family: "Manrope", sans-serif;
  font-weight: 200;
  font-size: 1rem;
  text-align: center;
}

.user-card-header.q-card__section--vert {
  padding: 16px 16px 0 16px;
}

.user-card-profile-level-info.q-card__section--vert {
  padding: 0 16px;
}

.user-card-profile-level-progress-percent {
  text-align: center;
}

.user-card-profile-level-progress-percent {
  line-height: 20px;
}

.user-card-profile-level-info {
  width: 100%;
}

.user-card-charts-profile-complete {
  height: auto;
}

.user-card-charts-profile-complete-chart {
  border-radius: 5px;
}

.echarts {
  width: 100%;
  height: 100%;
}

.user-card-charts-profile-complete-chart-title {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 5px;
  font-family: "Manrope", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: $back-dis;
}
</style>
