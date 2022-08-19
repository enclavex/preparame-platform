<template>
  <div class="testimonies">
    <div class="testimonies-title">DEPOIMENTOS</div>
    <div class="testimonies-second-title">O que dizem nossos clientes</div>
    <div class="testimonies-text">
      Acompanhe os feedbacks e casos reais de pessoas que utilizaram <br />
      nossos serviços e deram um novo passo nas suas carreiras!
    </div>
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
        v-for="testimonyAdjusted in carousel"
        :name="testimonyAdjusted.id"
        :key="testimonyAdjusted.id"
        class="column"
      >
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <div
            class="testimonies-card"
            v-for="testimony in testimonyAdjusted.carouselItems"
            :key="testimony.id"
          >
            <img :src="testimony.avatar" alt="" class="testimonies-card-img" />
            <div class="testimonies-name">{{ testimony.name }}</div>
            <div class="testimonies-position">{{ testimony.function }}</div>
            <q-rating
              v-model="ratingModel"
              size="1rem"
              color="yellow-5"
              readonly
              class="testimonies-rating"
            />
            <div class="testimonies-testimony">
              {{ testimony.testimony }}
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 1,
      ratingModel: 5,
      carousel: [],
      mobile: false,
      testimonies: [
        {
          sequence: 1,
          name: "Cliente",
          function: "CEO",
          testimony: `“A ajuda que a Prepara.me me deu foi sensacional. Aprendi muito nas consultorias que fiz e consegui um emprego na área que buscava”`,
          avatar: require("../../../../assets/imgs/avatar.png"),
        },
        {
          sequence: 2,
          name: "Cliente",
          function: "CEO",
          testimony: `“A ajuda que a Prepara.me me deu foi sensacional. Aprendi muito nas consultorias que fiz e consegui um emprego na área que buscava”`,
          avatar: require("../../../../assets/imgs/avatar.png"),
        },
        {
          sequence: 3,
          name: "Cliente",
          function: "CEO",
          testimony: `“A ajuda que a Prepara.me me deu foi sensacional. Aprendi muito nas consultorias que fiz e consegui um emprego na área que buscava”`,
          avatar: require("../../../../assets/imgs/avatar.png"),
        },
        {
          sequence: 4,
          name: "Cliente",
          function: "CEO",
          testimony: `“A ajuda que a Prepara.me me deu foi sensacional. Aprendi muito nas consultorias que fiz e consegui um emprego na área que buscava”`,
          avatar: require("../../../../assets/imgs/avatar.png"),
        },
      ],
    };
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();

    var maxCarousel = this.mobile ? 1 : 4;
    var carouselItems = [];

    this.testimonies.forEach((testimony, index, testimonies) => {
      carouselItems.push(testimony);

      if (
        maxCarousel === carouselItems.length ||
        index === testimonies.length - 1
      ) {
        this.carousel.push({
          carouselItems: carouselItems,
          id: this.carousel.length + 1,
        });

        carouselItems = [];
      }
    });
  },
};
</script>

<style>
.testimonies {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.testimonies-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 1rempx;
  letter-spacing: 0.14em;
  color: #626262;
  margin: 0 0 0 10vw;
}

.testimonies-second-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  color: #020202;
  margin: 0 0 0 10vw;
}

.testimonies-text {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  color: #626262;
  margin: 0 0 0 10vw;
}

.testimonies-cards-container {
  display: flex;
  flex-direction: row;
}

.testimonies-card {
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 35vh;
  background: #fff;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 50px;
}

.testimonies-name {
  position: relative;
  width: 100%;
  top: -4vh;
  text-align: center;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
}

.testimonies-position {
  position: relative;
  width: 100%;
  top: -4vh;
  font-family: "Nunito";
  font-style: normal;
  font-weight: 500;
  font-size: 0.7rem;
  text-align: center;
  color: #858585;
}

.testimonies-card-img {
  position: relative;
  background-color: #626262;
  height: 10vh;
  width: 10vh;
  align-self: center;
  top: -5vh;
  border-radius: 5vh;
}

.testimonies-rating {
  position: relative;
  top: -4vh;
  margin: 0 auto;
}

.testimonies-testimony {
  font-family: "Nunito";
  font-style: italic;
  font-weight: 500;
  font-size: 0.7rem;
  color: #858585;
  margin: 0px 30px;
  text-align: justify;
}

@media (orientation: portrait) {
  .testimonies-cards-container {
    flex-wrap: wrap;
    margin: 10vh 0 0 10vw;
  }

  .testimonies-card {
    width: unset;
    height: unset;
    margin-right: unset;
    margin: auto;
    padding-bottom: 20px;
  }
}
</style>
