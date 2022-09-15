<template>
  <div class="companies column">
    <div class="companies-info-container">
      <div class="companies-title">PARA EMPRESAS</div>
      <div class="companies-second-title">
        Clientes corporativos e parceiros
      </div>
      <div class="companies-text">
        Você também pode ser um! <br /><br />
        Descubra como podemos te ajudar a fazer desligamentos humanizados!
      </div>
      <q-btn v-if="showKnowMore" class="companies-read-more" @click="goURL()">
        SAIBA MAIS
      </q-btn>
      <div class="">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          control-color="secondary"
          padding
          arrows
        >
          <q-carousel-slide
            v-for="companyAdjusted in carousel"
            :name="companyAdjusted.id"
            :key="companyAdjusted.id"
            class="column"
          >
            <div
              class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
            >
              <q-img
                v-for="item in companyAdjusted.carouselItems"
                :key="item.sequence"
                :class="{ 'rounded-borders': true, 'col-3': !mobile }"
                :src="item.src"
              />
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["showKnowMore"],
  data() {
    return {
      slide: 1,
      carousel: [],
      companies: [
        {
          name: "Alice",
          url: "",
          src: require("../../../../assets/imgs/company-alice.svg"),
          sequence: 1,
        },
        {
          name: "CertSign",
          url: "",
          src: require("../../../../assets/imgs/company-cert.svg"),
          sequence: 2,
        },
        {
          name: "Grey",
          url: "",
          src: require("../../../../assets/imgs/company-grey.png"),
          sequence: 3,
        },
        {
          name: "Caritas",
          url: "",
          src: require("../../../../assets/imgs/company-caritas.png"),
          sequence: 4,
        },
        {
          name: "Urano",
          url: "",
          src: require("../../../../assets/imgs/company-urano.png"),
          sequence: 5,
        },
      ],
      mobile: false,
    };
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();

    var maxCarousel = this.mobile ? 1 : 4;
    var carouselItems = [];

    this.companies.forEach((company, index, companies) => {
      carouselItems.push(company);

      if (
        maxCarousel === carouselItems.length ||
        index === companies.length - 1
      ) {
        this.carousel.push({
          carouselItems: carouselItems,
          id: this.carousel.length + 1,
        });

        carouselItems = [];
      }
    });
  },
  methods: {
    goURL() {
      this.$router.push({ path: `/${"ResponsibleDemission"}` });
    },
  },
};
</script>

<style>
.companies {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("../../../../assets/imgs/wave-companies.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position-y: 101%;
}

.companies-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.14em;
  color: #626262;
  margin: 0 0 0 10vw;
}

.companies-second-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #020202;
  margin: 0 0 0 10vw;
}

.companies-text {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #626262;
  margin: 0 0 0 10vw;
}

.companies-read-more {
  background-color: #1a27b7;
  width: 10vw;
  line-height: 7vh;
  text-align: center;
  color: #fff;
  border-radius: 20px;
  cursor: pointer;
  margin: 20px 0 0 10vw;
  transition: all 0.5s ease;
}

.companies-read-more:hover {
  background-color: #1a27b7cc;
}

.companies-info-container {
  position: relative;
}

.companies .q-img__image {
  background-size: unset !important;
}

.companies .q-carousel {
  background-color: transparent;
  height: 300px;
  overflow: hidden;
}

.companies .scroll {
  overflow: hidden;
}

.companies .q-carousel .fit {
  height: 80% !important;
}

@media (max-height: 800px) and (orientation: landscape) {
  .companies {
    height: 110vh;
  }
}

@media (orientation: portrait) {
  .companies {
    margin-top: 10%;
    background-image: unset;
  }

  .companies-second-title {
    font-size: 1.5rem;
  }

  .companies-read-more {
    width: 30vw;
  }

  .companies .q-carousel__slide {
    padding-left: unset;
    padding-right: unset;
  }

  .companies .q-carousel__slide .q-img {
    position: unset;
    width: 80%;
  }
}
</style>
