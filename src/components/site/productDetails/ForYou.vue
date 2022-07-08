<template>
  <div class="for-you">
    <div class="for-you-text-container">
      <h1>Por que devo adquirir este serviço?</h1>
      <ul>
        <li>Prefere conversar com um de nossos especialistas ao vivo.</li>
        <li>É chamado para poucas ou nenhuma entrevista.</li>
        <li>Desconfia que seu currículo não transmite ao recrutador o valor da sua história.</li>
        <li>Não consegue contar sua história no currículo.</li>
        <li>Sabe que tem algo de errado com seu currículo, mas não sabe o que é (quem nunca?).</li>
      </ul>
    </div>
    <div class="for-you-image-container">
      <img class="for-you-image" src="../../../assets/imgs/Prepara1.png">
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  .for-you {
    display: grid;
    grid-template-columns: 55% 45%;
    grid-template-rows: 100%;
    margin: 0 5%;
  }

  .for-you-image-container {
    margin: auto;
  }

  .for-you-image {
    max-width: 400px;
    max-height: 400px;
    grid-column: 2;
  }

  .for-you-text-container {
    grid-column: 1;
  }

  .for-you-text-container > h1 {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    color: #667998;
    font-size: 3rem;
    margin: 1rem;
    line-height: 7vh;
  }

  .for-you-text-container li {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    color: #667998aa;
    font-size: 1.3rem;
    list-style: none;
    margin: 0.5rem 0;
  }

  @media (orientation: portrait) {
    .for-you {
      grid-template-columns: 1fr;
      grid-template-rows: 55% 45%;
    }

    .for-you-text-container > h1 {
      font-size: 1.6rem;
    }

    .for-you-image {
      max-width: 300px;
      max-height: 300px;
      grid-column: 1;
    }
  }
</style>
