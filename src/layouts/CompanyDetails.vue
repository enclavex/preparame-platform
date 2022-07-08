<template>
  <div class="company-details">
    <article class="company-details-article">
      <section class="company-details-employes-container">
        <h1>Nossa História</h1>
        <p>
          Nascemos de uma vontade imensa de ajudar e existimos para
          <b>descomplicar e tornar a orientação de carreira acessível a todos os brasileiros.</b>
        </p>
        <br>
        <p>
          Nossa história inicia com um projeto totalmente voluntário chamado Revisores do Bem (revisoresdobem.com.br), onde um grupo de voluntários iniciado e organizado pela Lucy (nossa fundadora) auxilia pessoas desempregadas em vulnerabilidade social e econômica a melhorar currículo e LinkedIn, para que possam ir mais preparados para o processo seletivo.
        </p>
        <br>
        <p>
          Com o imenso sucesso desse projeto social, sabíamos que podíamos fazer muito mais, então para oferecer <b>mais serviços</b> e impactar muito <b>mais pessoas</b>, surgiu o Prepara.me!
        </p>
        <br>
        <p>
          Com um sonho grande e querendo ir longe, a Lucy sabia que não dava para ir sozinha por muito tempo, foi quando a Nathalia, compartilhando da mesma visão, abraçou nossa missão e seguimos juntas nessa jornada desde então.
        </p>
        <br>
        <p>
          Hoje nosso time está crescendo bastante, assim como os nossos serviços oferecidos. Estamos prontos e ansiosos para fazer a diferença na sua carreira.
        </p>
        <br>
        <p>
          <b>
            Conte com a gente!
          </b>
        </p>
        <br>
        <p>
          <b>
            Atenciosamente,
          </b>
        </p>
        <p>
          <b>
            O time Prepara.me
          </b>
        </p>
      </section>
    </article>
  </div>
</template>


<script>

  export default {
    created() {
      window.scrollTo(0, 0);
    }
  };
</script>

<style>
  .company-details-article {
    padding: 2%;
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 30px auto;
  }

  .company-details h1 {
    font-family: "Nunito", sans-serif;
    font-weight: bold;
    margin: 0.5rem;
  }

  .company-details-employes-container {
    display: flex;
    flex-direction: column;
  }

  .company-details-employes-container h1 {
    font-size: 3rem;
    font-family: "Nunito", sans-serif;
    color: #0922bc;
  }

  .company-details-employes-container p {
    font-family: "Nunito", sans-serif;
    font-size: 1.1rem;
    color: #000;
    font-weight: 100;
  }

  .company-details-employes-container p b{
    color: #667998;
  }

  .company-details-employes {
    margin: auto;
    padding: 20px;
  }

  .company-details-employes img {
    max-height: 200px;
  }

  .company-details-employes-images-name {
    width: 100%;
    text-align: center;
    font-family: "Nunito", sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: #0922bc;
  }
</style>
