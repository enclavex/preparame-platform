<template>
  <div class="how-it-works-product-explanation">
    <div class="how-it-works-product-explanation-title">Como funciona?</div>
    <div class="how-it-works-product-explanation-steps">
      <div class="how-it-works-product-explanation-step">
        <img class="how-it-works-product-explanation-step-img" src="../../../assets/imgs/Prepara11.png" alt>
        <div class="how-it-works-product-explanation-step-text-title">Passo 1</div>
        <div class="how-it-works-product-explanation-step-text-description">Você escolhe a melhor data e hora para você
          de acordo com a disponibilidade dos nossos especialistas.</div>
      </div>
      <div class="how-it-works-product-explanation-step">
        <img class="how-it-works-product-explanation-step-img" src="../../../assets/imgs/Prepara23.png" alt>
        <div class="how-it-works-product-explanation-step-text-title">Passo 2</div>
        <div class="how-it-works-product-explanation-step-text-description">No dia e hora combinado, você entrará na
          nossa plataforma e entrará na videoconferência.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang= "scss">
.how-it-works-product-explanation {
  height: 50vh;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 25% 75%;
}

.how-it-works-product-explanation-title {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: #667998;
  font-size: 3rem;
  margin: 1rem;
  text-align: center;
}

.how-it-works-product-explanation-steps {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 20vw;
}

.how-it-works-product-explanation-step {
  display: flex;
  max-width: 200px;
  flex-direction: column;
  align-items: center;
}

.how-it-works-product-explanation-step-img {
  height: 150px;
  width: 250px;
  background-color: #fff;
  border-radius: 5%;
}

.how-it-works-product-explanation-step-text-title {
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
}

.how-it-works-product-explanation-step-text-description {
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
}

@media (orientation: portrait) {
  .how-it-works-product-explanation {
    height: auto;
    width: 80vw;
    grid-template-rows: 10% 1fr;
    margin: 0 auto;
  }

  .how-it-works-product-explanation-title {
    font-size: 1.6rem;
    min-width: unset;
  }

  .how-it-works-product-explanation-steps {
    flex-direction: column;
    margin: 0 auto;
  }

  .how-it-works-product-explanation-step {
    margin-bottom: 20px;
  }
}
</style>
