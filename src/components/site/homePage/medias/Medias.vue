<template>
  <div class="medias">
    <div class="medias-banner" />
    <div class="medias-news-container">
      <div class="medias-news">
        <div class="medias-news-logo medias-news-estadao" />
        <div class="medias-news-headline">
          Negócios sociais dão mentoria a quem precisa se recolocar no mercado.
        </div>
        <div class="medias-news-see">
          Voluntários de plataformas analisam...
        </div>
        <div
          class="medias-news-read-more"
          @click="
            goURL(
              'https://economia.estadao.com.br/noticias/sua-carreira,negocios-sociais-dao-mentoria-a-quem-precisa-se-recolocar-no-mercado,70003513386'
            )
          "
        >
          Leia Matéria
        </div>
      </div>
      <div class="medias-news">
        <div class="medias-news-logo medias-news-folha" />
        <div class="medias-news-headline">
          Empresas tentam abrandar demissões com extensão de benefícios.
        </div>
        <div class="medias-news-see">Pandemia amplificou tendência...</div>
        <div
          class="medias-news-read-more"
          @click="
            goURL(
              'https://www1.folha.uol.com.br/sobretudo/carreiras/2021/05/empresas-tentam-abrandar-demissao-com-extensao-de-beneficios-e-orientacao-de-recolocacao.shtml'
            )
          "
        >
          Leia Matéria
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goURL: function (url) {
      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style>
.medias {
  height: 100vh;
  width: 100vw;
}

.medias-banner {
  position: relative;
  background-image: url("../../../../assets/imgs/mediaPreparame.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 32vh;
  margin: 0 20px;
}

.medias-news-container {
  height: 68vh;
  background: linear-gradient(90deg, #15aa7c 0%, #1a27b7 100%);
  display: flex;
  flex-direction: row;
}

.medias-news {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: auto;
  width: 40vw;
  border-radius: 20px;
  margin: auto;
  min-height: 300px;
  justify-content: space-around;
}

.medias-news-logo {
  height: 80px;
  width: 250px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 15px auto;
}

.medias-news-estadao {
  background-image: url("../../../../assets/imgs/estadaoLogo.png");
}

.medias-news-folha {
  background-image: url("../../../../assets/imgs/folhaSPLogo.png");
}

.medias-news-headline {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 1.9rem;
  margin: 10px 0 0 30px;
}

.medias-news-see {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 10px 0 0 30px;
  color: #626262;
}

.medias-news-read-more {
  color: #1a27b7;
  align-self: end;
  border: 1px solid #1a27b7;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
  transition: all 0.5s ease;
  cursor: pointer;
}

.medias-news-read-more:hover {
  background-color: #1a27b7;
  border: 1px solid #fff;
  color: #fff;
}

@media (orientation: portrait) {
  .medias {
    height: auto;
  }

  .medias-banner {
    margin-top: 100px;
    background-image: url("../../../../assets/imgs/mediaPreparame-mobile.png");
  }

  .medias-news-container {
    height: auto;
    flex-wrap: wrap;
  }

  .medias-news {
    width: unset;
    margin: 5%;
    padding: 2%;
  }

  .medias-news-headline {
    font-size: 1.4rem;
  }

  .medias-news-see {
    font-size: 1.1rem;
  }
}
</style>
