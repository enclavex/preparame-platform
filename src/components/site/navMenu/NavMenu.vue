<template>
  <nav id="nav-menu" class="nav-menu">
    <div class="menu-container">
      <a class="menu-prepara-me-logo-container" href="/#/">
        <img class="menu-prepara-me-logo" :src="imgURL(logoImg)">
      </a>
      <ul class="menu-items">
        <li class="menu-item">
          <div class="menu-item-name">
            <a>
              Para Você
              <q-icon name="expand_more"/>
            </a>
          </div>
          <ul class="menu-item-content">
            <a>Nossas Trilhas</a>
            <a href="/#/ProductList">Adquira Nossos Serviços</a>
          </ul>
        </li>
        <li class="menu-item">
          <div class="menu-item-name">
            <a>
              Para Empresas
              <q-icon name="expand_more"/>
            </a>
          </div>
          <ul class="menu-item-content">
            <a>Contratos Para Colaboradores</a>
          </ul>
        </li>
        <li class="menu-item">
          <div class="menu-item-name">
            <a>
              Materiais Gratuitos
              <q-icon name="expand_more"/>
            </a>
          </div>
          <ul class="menu-item-content">
            <a>Criador de Currículos</a>
            <a>Dicas e Videos</a>
          </ul>
        </li>
        <li class="menu-item">
          <div class="menu-item-name">
            <a>
              Sobre Nós
              <q-icon name="expand_more"/>
            </a>
          </div>
          <ul class="menu-item-content">
            <a href="/#/CompanyDetails">Nossa Empresa</a>
            <a href="/#/FAQ">Dúvidas Frequentes</a>
          </ul>
        </li>
        <li class="menu-item menu-item-acessar-ambiente">
          <a href="/#/login">Acessar Ambiente</a>
        </li>
      </ul>
      <ul class="menu-cart">
        <li class="menu-item menu-item-cart">
          <div class="menu-item-name">
            <a href="/#/ShoppingCart" class="menu-item-cart-icon-container">
              <div class="menu-item-cart-icon">
                <q-icon name="shopping_cart"></q-icon>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <ul class="menu-login">
        <li class="menu-item">
          <div class="menu-item-name">
            <a href="/#/login">
            Acessar Ambiente</a>
          </div>
        </li>
      </ul>
      <a class="menu-open-icon" @click="openMenu()">
        <i>
          <q-icon name="menu"></q-icon>
        </i>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavMenu",
  data: () => {
    return {
      icon: "angle-down",
      logoImg: "logo_preparame_home.png"
    };
  },
  methods: {
    openMenu: function () {
      var menu = document.getElementById("nav-menu");

      if (menu.className === "nav-menu") {
        menu.classList.add("responsive");
        this.logoImg = "logo_preparame_home_neg.png";
      } else {
        menu.classList.remove("responsive");
        this.logoImg = "logo_preparame_home.png";
      }
    },
    imgURL: function (pathName) {
      var images = require.context("../../../assets/logos/", false, /\.png$/);

      return images("./" + pathName);
    }
  }
};
</script>

<style lang="scss">
.nav-menu {
  height: 10vh;
  width: 100vw;
  z-index: 1000;
  position: sticky;
  background-color: #fff;
  top: 0px;
  transition: all 0.25s ease;
}

.nav-menu .menu-open-icon {
  grid-column-start: 5;
  display: none;
  font-size: 2em;
}

.menu-container {
  display: grid;
  grid-template-columns: 20% 3% 55% 2% 5% 15%;
  grid-template-rows: 10vh 0%;
  height: 100%;
  width: 100vw;
}

.menu-prepara-me-logo {
  width: 100%;
  background-position: 0%;
  background-size: cover;
  padding-left: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  margin: auto 0;
  cursor: pointer;
}

.menu-items {
  display: flex;
  flex-direction: row;
  grid-column-start: 3;
  grid-row-start: 1;
  list-style: none;
  justify-content: space-around;
  height: 100%;
}

.menu-item {
  display: flex;
  font-family: "Nunito", sans-serif;
  line-height: 3vh;
  height: 10vh;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.menu-item a {
  margin: auto 0;
  font-size: 1.2em;
}

.menu-item:hover {
  background-color: rgb(200, 200, 200);
  color: #fff;
}

.menu-cart {
  display: flex;
  flex-direction: row;
  grid-column-start: 5;
  grid-row-start: 1;
  list-style: none;
  justify-content: flex-end;
  height: 100%;
}

.menu-item-cart-icon::after {
  content: "2";
  line-height: 1.9vh;
  color: #fff;
  font-size: 0.7rem;
  border: 2px solid #fff;
  display: inline-block;
  position: absolute;
  background-color: #1d1d1d;
  height: 2vh;
  width: 2vh;
  left: 48%;
  top: 28%;
  border-radius: 50%;
}

.menu-item-cart {
  font-size: 1.2em;
  ;
}

.menu-item-cart-icon:hover::after {
  color: rgb(200, 200, 200);
  border: 2px solid rgb(200, 200, 200);
}

.menu-login {
  display: flex;
  flex-direction: row;
  grid-column-start: 6;
  grid-row-start: 1;
  list-style: none;
  justify-content: flex-end;
  height: 100%;
}

.menu-login>.menu-item {
  top: 0;
  bottom: 0;
  margin: auto 0;
  font-family: "Nunito", sans-serif;
  line-height: 3vh;
  height: 10vh;
  width: 100%;
  text-align: center;
  cursor: pointer;
}

.menu-login>.menu-item:hover {
  background-color: rgb(200, 200, 200);
  color: #fff;
}

.menu-item {
  top: 0;
  bottom: 0;
  margin: auto 0;
  position: relative;
  display: block;
  width: 100%;
}

.menu-item-name {
  height: 100%;
  display: flex;
  margin: auto;
}

.menu-item-name a {
  line-height: 10vh;
}

.menu-item-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  width: 170%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.menu-item-content a {
  text-decoration: none;
  height: 50px;
  line-height: 50px;
  display: block;
  text-align: left;
  padding-left: 10px;
  font-size: 1.2em;
}

.menu-item-content a:hover {
  background-color: #ddd;
}

.menu-item:hover .menu-item-content {
  display: block;
}

.menu-item a {
  display: block;
  width: 100%;
  margin: auto;
}

.menu-item.menu-item-acessar-ambiente {
  display: none;
}

.menu-prepara-me-logo-container {
  display: flex;
}

@media (orientation: portrait) {
  .menu-items .menu-item {
    display: none;
  }

  .menu-container {
    grid-template-columns: 75% 15% 10%;
    grid-template-rows: 10vh 1fr;
  }

  .menu-container .menu-login {
    display: none;
  }

  .menu-container .menu-open-icon {
    display: block;
    grid-row-start: 1;
    grid-column-start: 3;
    color: #667998;
    margin: auto;
  }


  .menu-prepara-me-logo {
    max-width: 200px;
    max-height: 40px;
    grid-column-end: 2;
    margin: auto 0;
  }

  .menu-cart {
    grid-row: 1;
    grid-column: 2;
  }

  .nav-menu.responsive {
    position: relative;
    background-color: #667998;
    height: 40vh;
  }

  .nav-menu.responsive .menu-container a.menu-open-icon {
    color: #fff;
  }

  .nav-menu.responsive .menu-items {
    display: flex;
    flex-direction: column;
    z-index: 1;
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row: 2;
    height: 100%;
  }

  .nav-menu.responsive a:not(.menu-open-icon, .menu-prepara-me-logo-container, .menu-item-cart-icon-container) {
    float: none;
    display: block;
    text-align: left;
    color: #fff;
    padding-left: 10px;
  }

  .nav-menu.responsive .menu-item-cart-icon-container {
    color: #fff;
  }

  .nav-menu.responsive .menu-item-cart-icon::before {
    line-height: 1.9vh;
    color: #fff;
    font-size: 0.7rem;
    border: 2px solid #fff;
    display: inline-block;
    position: absolute;
    background-color: #667998;
    height: 1.9vh;
    width: 1.9vh;
    left: 48%;
    top: 28%;
    border-radius: 50%;
  }

  .nav-menu.responsive .menu-item-cart-icon:hover::before {
    background-color: #fff;
    color: rgb(200, 200, 200);
    border: 2px solid rgb(200, 200, 200);
  }

  .nav-menu.responsive .menu-items .menu-item {
    display: block;
    height: 6vh;
    line-height: 6vh;
  }

  .nav-menu.responsive .menu-items .menu-item:hover {
    background-color: #3c4759;
  }

  .menu-item-content {
    background-color: #556680;
    width: 100vw;
  }

  .menu-item-content a:hover {
    background-color: #6f84a6;
  }

  .menu-item-content a {
    text-decoration: none;
    height: 6vh;
    line-height: 6vh;
    display: inline;
    text-align: left;
    padding-left: 10px;
  }
}
</style>
