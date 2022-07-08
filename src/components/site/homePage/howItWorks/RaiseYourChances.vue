<template>
  <div class="how-to-works-raise-your-chances">
    <h1 class="how-to-works-raise-your-chances-title">Aumente suas chances de</h1>
    <div class="how-to-works-raise-your-chances-space">&nbsp;&nbsp;&nbsp;</div>
    <transition name="slide-fade" mode="out-in">
      <div
        :key="raiseYourChancesText"
        class="how-to-works-raise-your-chances-alternative"
      >{{`${raiseYourChancesText}`}}</div>
    </transition>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        raiseYourChancesText: "ser recolocado"
      };
    },
    mounted() {
      this.alterRaiseYourChancesOptions();
    },
    methods: {
      alterRaiseYourChancesOptions: function() {
        let indexOption = 0;
        const raiseYourChancesOptions = [
          "ser chamado para entrevistas",
          "ter seu CV selecionado",
          "ser recolocado",
        ];


        setInterval(() => {
          this.raiseYourChancesText = raiseYourChancesOptions[indexOption];

          indexOption === 2 ? (indexOption = 0) : indexOption++;
        }, 3000);
      }
    }
  };
</script>

<style lang="scss">
  .how-to-works-raise-your-chances {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 15vh;
    line-height: 15vh;
    justify-content: center;
  }

  .how-to-works-raise-your-chances-title {
    font-family: "Nunito", sans-serif;
    font-size: 40px;
    font-weight: 100;
  }

  h1.how-to-works-raise-your-chances-title {
    line-height: unset;
  }

  .how-to-works-raise-your-chances-alternative {
    font-family: "Nunito", sans-serif;
    font-size: 40px;
    font-weight: 700;
    min-width: 600px;
    transition: all 1s ease;
  }

  .slide-fade-enter-active {
    transition: all 0.4s ease;
  }
  .slide-fade-leave-active {
    transition: all 1s ease;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .slide-fade-leave,
  .slide-fade-enter-to {
    transform: translateX(-10px);
    opacity: 1;
  }

  @media (orientation: portrait) {
    .slide-fade-enter,
    .slide-fade-leave-to {
      transform: unset;
      opacity: 0;
    }

    .slide-fade-leave,
    .slide-fade-enter-to {
      transform: unset;
      opacity: 1;
    }

    .how-to-works-raise-your-chances {
      display: flex;
      flex-direction: column;
      width: 100vw;
      height: 15vh;
      justify-content: center;
      line-height: 30px;
    }

    .how-to-works-raise-your-chances h1 {
      line-height: 3vh;
    }

    .how-to-works-raise-your-chances-title {
      font-size: 20px;
      text-align: center;
    }

    .how-to-works-raise-your-chances-alternative {
      font-size: 20px;
      min-width: 300px;
      text-align: center;
    }

    .how-to-works-raise-your-chances-space {
      display: none;
    }
  }
</style>
