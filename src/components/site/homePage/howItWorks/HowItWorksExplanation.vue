<template>
  <div class="how-it-works-explanation">
    <div class="how-it-works-explanation-title">Inicie agora seu caminho até o próximo nível!</div>
    <div class="how-it-works-explanation-steps">
      <div class="how-it-works-explanation-step">
        <img
          class="how-it-works-explanation-step-img"
          src="./../../../../assets/imgs/Prepara11.png"
          alt
        >
        <div class="how-it-works-explanation-step-text-title">Iniciando</div>
        <div
          class="how-it-works-explanation-step-text-description"
        >Adquira um ou mais de nossos serviços.</div>
      </div>
      <div class="how-it-works-explanation-step">
        <img
          class="how-it-works-explanation-step-img"
          src="./../../../../assets/imgs/Prepara23.png"
          alt
        >
        <div class="how-it-works-explanation-step-text-title">Agendando</div>
        <div
          class="how-it-works-explanation-step-text-description"
        >Será disponibilizado uma lista de dias e horários para o agendamento do serviço solicitado.</div>
      </div>
      <div class="how-it-works-explanation-step">
        <img
          class="how-it-works-explanation-step-img"
          src="./../../../../assets/imgs/Prepara21.png"
          alt
        >
        <div class="how-it-works-explanation-step-text-title">Realizando</div>
        <div
          class="how-it-works-explanation-step-text-description"
        >Nossa reunião ou nossos serviços estarão disponíveis no nosso ambiente no horário agendado.</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang= "scss">
  .how-it-works-explanation {
    height: 50vh;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 25% 75%;
    background-color: RGB(252, 253, 248);
  }

  .how-it-works-explanation-title {
    font-family: "Nunito", sans-serif;
    font-size: 30px;
    font-weight: 700;
    min-width: 600px;
    transition: all 1s ease;
    text-align: center;
    margin: 20px;
  }

  .how-it-works-explanation-steps {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 20vw;
  }

  .how-it-works-explanation-step {
    display: flex;
    max-width: 200px;
    flex-direction: column;
    align-items: center;
  }

  .how-it-works-explanation-step-img {
    height: 150px;
    width: 150px;
    background-color: #fff;
    border-radius: 50%;
  }

  .how-it-works-explanation-step-text-title {
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }

  .how-it-works-explanation-step-text-description {
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }

  @media (max-width: 600px) {
    .how-it-works-explanation {
      height: auto;
      width: 100vw;
      grid-template-rows: 10% 1fr;
    }

    .how-it-works-explanation-title {
      font-size: 20px;
      min-width: unset;
    }

    .how-it-works-explanation-steps {
      flex-direction: column;
      margin: 0 auto;
    }

    .how-it-works-explanation-step {
      margin-bottom: 20px;
    }
  }
</style>
