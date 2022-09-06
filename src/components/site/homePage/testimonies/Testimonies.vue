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
          class="row fit justify-around items-center q-gutter-md q-col-gutter no-wrap"
        >
          <div
            class="testimonies-card"
            v-for="testimony in testimonyAdjusted.carouselItems"
            :key="testimony.id"
          >
            <img :src="testimony.avatar" alt="" class="testimonies-card-img" />
            <div class="testimonies-name">
              {{ testimony.name }}
              <q-icon
                name="mdi-linkedin"
                class="testimonies-linkedin-link"
                @click="goUrl(testimony.linkedinURL)"
              />
            </div>

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
          name: "Leonardo, São Paulo",
          function: "",
          testimony: `[...] então queria indicar para vocês essa ajuda que a Prepara.me me deu, uma consultoria INCRÍVEL que me ajudou a montar meu linkedin e cv de uma forma simples e direta, [...] me deu todas as dicas necessárias, feedbacks, suporte, como usar o linkedin melhor. [...] Vale a pena... hoje eu consegui um Emprego e posso dizer com segurança que essa consultoria foi essencial para mim, como pode ser para você também, então invista nisso, nada melhor do que investir no nosso futuro, boa sorte nessa caminhada!`,
          avatar: require("../../../../assets/imgs/testimonies_pics/leonardo.jpeg"),
          linkedinURL: "https://www.linkedin.com/in/leonardostefanini/",
        },
        {
          sequence: 2,
          name: "Davidson, Minas Gerais",
          function: "",
          testimony: `Gostei demais viu, fez a entrevista e logo depois me deu os toques do que realmente os entrevistadores querem saber com cada pergunta e tal .. gostei tanto que, dois dias após, fiz uma entrevista em uma empresa e passei para a fase seguinte do processo que envolve alguns testes de  perfil, português/inglês etc.. estou aguardando resultados .. enfim, já a parabenizei pelo trabalho na época mas quero reforçar o quanto a Natasha é boa no que faz, bela profissional vcs tem`,
          avatar: require("../../../../assets/imgs/testimonies_pics/davidson.jpeg"),
          linkedinURL: "https://www.linkedin.com/in/davidsonadm2503",
        },
        {
          sequence: 3,
          name: "Evandro, Rio de Janeiro",
          function: "",
          testimony: `Primeiro quero lhe agradecer mais uma vez, pela grande ajuda que você me deu, reformulando meu Cv e meu LinkedIn, nessa segunda feira me vi em uma situação que jamais acharia que fosse passar, recebi 5 ligações para entrevista, é claro que escolhi as oportunidades que mais eu em enquadrava é que via um grande possibilidade de conseguir a vaga, enfim eu consegui, para Aux. de Logística. Muito obrigado mesmo, e grato por ter me ajudado na minha recolocação.`,
          avatar: require("../../../../assets/imgs/testimonies_pics/evandro.jpeg"),
          linkedinURL: "https://www.linkedin.com/in/evandrobomfim",
        },
      ],
    };
  },
  methods: {
    goUrl: function (url) {
      window.open(url, "_blank").focus();
    },
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
  margin-top: 4vh;
}

.testimonies .q-carousel {
    height: 450px;
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
  width: 25vw;
  padding-bottom: 10px;
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

.testimonies-linkedin-link {
  font-size: 1.3rem;
  cursor: pointer;
  color: #0e76a8;
}

@media (orientation: portrait) {
  .testimonies {
    height: 120vh;
  }

  .testimonies-cards-container {
    flex-wrap: wrap;
    margin: 10vh 0 0 10vw;
  }

  .testimonies-card {
    width: unset;
    height: unset;
    margin-right: unset;
    margin: auto;
    padding-bottom: 0px;
  }

  .testimonies-card-img {
    top: unset;
    margin: 10px 0;
  }

  .testimonies-rating {
    top: unset;
  }

  .testimonies-name {
    top: unset;
  }

  .testimonies-position {
    top: unset;
  }

  .testimonies-testimony {
    margin-top: 10px;
    margin-bottom: 10px;

  }
}
</style>
