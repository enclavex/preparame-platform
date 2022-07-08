<template>
  <div id="contact" class="contact">
    <a class="contact-prepara-me-logo" href="/#/">
      <img src="../../../../assets/logos/logo_preparame_home.png">

    </a>
    <div class="contact-address">
      <div class="contact-address-text">Entre em contato</div>
      <div class="contact-address-email">contato@prepara.me</div>
      <div class="contact-address-social">
        <a href="https://www.instagram.com/prepara.me/" target="_blank">
          <div class="contact-address-icon-container">
            <q-icon name="mdi-instagram" class="presentation-icon"/>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/prepara-mebr/" target="_blank">
          <div class="contact-address-icon-container">
            <q-icon name="mdi-linkedin" />
          </div>
        </a>
        <a href="https://www.facebook.com/prepara.mebr/" target="_blank">
          <div class="contact-address-icon-container">
            <q-icon name="mdi-facebook" />
          </div>
        </a>
      </div>
      <div class="contact-address-use-terms">
        <a href="/#/UseTerms">Termos de Uso</a>
      </div>
    </div>
    <div class="contact-news">
      <div class="contact-news-text">Receba nossas dicas!</div>
      <input id="name" class="contact-news-input" type="text" name="name" placeholder="Digite seu nome...">
      <input id="email" class="contact-news-input" type="email" name="email" placeholder="Digite seu e-mail...">
      <button class="contact-news-send-btn">Enviar</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact {
  height: 20vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 50% 25% 25%;
}

.contact-prepara-me-logo {
  grid-column-start: 1;
  margin: auto;
  display: flex;
  justify-items: space-around;
  justify-content: space-around;
}

.contact-prepara-me-logo img {
  height: 10vh;
  margin: auto;
}

.contact-address {
  grid-column-start: 2;
  margin: auto;
  font-family: "nunito", sans-serif;
}

.contact-address-email {
  font-weight: 700;
  color: #1a27b7;
  cursor: pointer;
}

.contact-address-social {
  display: flex;
  flex-direction: row;
}

.contact-address-icon-container {
  color: #1a27b7;
  margin: 2px;
}

.contact-address-use-terms a {
  margin-top: 10px;
  font-weight: 700;
  color: #1a27b7;
  cursor: pointer;
}

.contact-news {
  display: flex;
  grid-column-start: 3;
  flex-direction: column;
  margin: auto 20px;
  font-family: "nunito", sans-serif;
}

.contact-news-input {
  border-radius: 5px;
  height: 30px;
  border: 1px solid #bbb;
  padding-left: 10px;
}

.contact-news-input:nth-child(2) {
  margin: 5px 0;
}

.contact-news-send-btn {
  margin: 5px auto;
  height: 30px;
  width: 100px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #667998;
  font-family: "nunito", sans-serif;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.25s ease;
  background-color: rgb(249, 250, 255);
}

.contact-news-send-btn:hover {
  border: 1px solid #fff;
  color: #fff;
  background-color: #667998;
}

@media (orientation: portrait) {
  .contact {
    display: flex;
    flex-direction: column;
  }

  .contact-prepara-me-logo img {
    height: 5vh;
    margin: 10px auto auto 10px;
  }

  .contact-address {
    margin: 10px auto auto 10px;
  }

  .contact-news {
    margin: 10px auto auto auto;
    width: 94vw;
  }
}
</style>
