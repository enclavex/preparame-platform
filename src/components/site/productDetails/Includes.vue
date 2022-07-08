<template>
  <div class="includes">
    <div class="includes-text-container">
      <h1>O que este serviço inclui?</h1>
      <ul>
        <li>Por uma hora, um de nossos especialistas em currículo, recrutamento e seleção estará a sua disposição e reconstruirá o seu currículo ao vivo.</li>
        <li>Você poderá tirar todas as suas dúvidas, ao vivo, com nosso especialista.</li>
        <li>Ao final da videoconferência, você terá seu currículo novo em word.</li>
      </ul>
    </div>
    <div class="includes-image-container">
      <img class="includes-image" src="../../../assets/imgs/Prepara1.png">
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .includes {
    display: grid;
    grid-template-columns: 45% 55%;
    grid-template-rows: 100%;
    margin: 0 5%;
  }

  .includes-image-container {
    grid-column: 1;
    grid-row: 1;
    margin: auto;
  }

  .includes-image {
    max-width: 400px;
    max-height: 400px;
  }

  .includes-text-container {
    grid-row: 1;
    grid-column: 2;
  }

  .includes-text-container > h1 {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    color: #667998;
    font-size: 3rem;
    margin: 1rem;
    line-height: 7vh;
  }

  .includes-text-container li {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    color: #667998aa;
    font-size: 1.3rem;
    list-style: none;
    margin: 0.5rem 0;
  }

  @media (orientation: portrait) {
    .includes {
      grid-template-columns: 1fr;
      grid-template-rows: 45% 55%;
    }

    .includes-text-container > h1 {
      font-size: 1.6rem;
    }

    .includes-text-container {
      grid-column: 1;
    }

    .includes-image-container {
      grid-row: 2;
    }

    .includes-image {
      margin-top: 10px;
      max-width: 300px;
      max-height: 300px;
    }
  }
</style>
