<template>
  <div v-if="!cookiesAccepted" id="cookies-consent-container" class="cookies-consent-container">
    <div class="cookies-consent-title">
      <a>Termo de Privacidade</a>
    </div>
    <div class="cookies-consent-text">
      <p>Este site utiliza cookies e tecnologias semelhantes de acordo com a nota Política de Privacidade. Ao continuar navegando em nosso site você concorda com esses termos.</p>
      <br>
      <a @click="goURL()">Clique aqui para ler nosso termo de privacidade.</a>
    </div>
    <div class="cookies-consent-btn">
      <a @click="purecookieDismiss()">Aceitar termo</a>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        cookieName: "acceptCookies",
        cookiesAccepted: false
      };
    },
    created() {
      this.cookieConsent()
    },
    methods: {
      setCookie(cookieName, cookieExists, cookieDaysDuration) {
        let cookieExpiryDate = "";

        if (cookieDaysDuration) {
          const actualDate = new Date();

          actualDate.setTime(
            actualDate.getTime() + 24 * cookieDaysDuration * 60 * 60 * 1e3
          );
          cookieExpiryDate = "; expires=" + actualDate.toUTCString();
        }

        document.cookie =
          cookieName + "=" + (cookieExists || "") + cookieExpiryDate + "; path=/";
      },
      getCookie(cookieName) {
        const cookie = cookieName + "=";
        const cookieDecoded = decodeURIComponent(document.cookie);
        const cookiePathArray = cookieDecoded.split("; ");
        let cookieFiltered = cookiePathArray.filter(value => {
          if (value.indexOf(cookie) === 0) {
            return true;
          }
        });

        if (cookieFiltered.length > 0) {
          return cookieFiltered[0].substring(cookieFiltered[0].length - 1);
        } else {
          return null;
        }
      },
      eraseCookie(cookieName) {
        document.cookie = cookieName + "=; Max-Age=-99999999;";
        this.cookiesAccepted = false;
      },
      cookieConsent() {
        this.cookiesAccepted = this.getCookie(this.cookieName) === "1";
      },
      purecookieDismiss() {
        this.setCookie(this.cookieName, "1", 7);
        this.cookiesAccepted = true;
      },
      goURL() {
        this.$router.push({ path: `/${"PrivacyTerms"}` });
      }
    }
  };
</script>

<style lang="scss">
  .cookies-consent-container {
    width: 350px;
    min-height: 20px;
    box-sizing: border-box;
    padding: 30px 30px 30px 30px;
    background: #232323;
    overflow: hidden;
    position: fixed;
    bottom: 30px;
    right: 30px;
  }

  .cookies-consent-container .cookies-consent-title a {
    font-family: OpenSans, arial, sans-serif;
    color: $white;
    font-size: 22px;
    line-height: 20px;
    display: block;
  }

  .cookies-consent-container .cookies-consent-text p {
    margin: 0;
    padding: 0;
    font-family: OpenSans, arial, sans-serif;
    color: $white;
    font-size: 13px;
    line-height: 20px;
    display: block;
    margin-top: 10px;
  }

  .cookies-consent-container .cookies-consent-text a {
    cursor: pointer;
    font-family: OpenSans, arial, sans-serif;
    color: $white;
    text-decoration: underline;
  }

  .cookies-consent-container .cookies-consent-btn a {
    display: inline-block;
    font-family: OpenSans, arial, sans-serif;
    color: $white;
    font-size: 14px;
    font-weight: 700;
    margin-top: 14px;
    background: #000;
    box-sizing: border-box;
    padding: 15px 24px;
    text-align: center;
    transition: background 0.3s;
  }

  .cookies-consent-container .cookies-consent-btn a:hover {
    cursor: pointer;
    background: #3e9b67;
  }

  @media (max-width: 980px) {
    .cookies-consent-container {
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 2;
    }
  }
</style>
