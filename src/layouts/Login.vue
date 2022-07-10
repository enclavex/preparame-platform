<template>
  <div class="login">
    <div class="login-container">
      <div class="login-modal">
        <a href="/">
          <div class="login-prepara-me-logo" />
        </a>
        <div v-if="loggingIn" class="login-form-signin">
          <div class="login-modal-title">Acesse a nossa plataforma</div>
          <q-input
            id="loginEmail"
            class="login-form-signin-container"
            v-model="user.email"
            name="loginEmail"
            label="E-Mail"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-email" />
            </template>
          </q-input>

          <q-input
            id="loginPassword"
            class="login-form-signin-container"
            v-model="user.password"
            :type="!showPassword ? 'password' : 'text'"
            name="loginPassword"
            label="Senha"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="!showPassword ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="showPassword = !showPassword"
              ></q-icon>
            </template>
          </q-input>
          <div class="login-forgot-pass">
            Esqueceu sua senha?
            <a @click="loggingIn = !loggingIn">Redefina agora!</a>
          </div>

          <div class="login-form-signin-in" @click="login()">Entrar</div>
          <div class="login-others-links">
            Ainda não tem cadastro?
            <a @click="loggingIn = false">Clique aqui!</a>
          </div>
        </div>
        <div v-else class="login-form-signin">
          <div class="login-modal-title">Cadastre-se em nossa plataforma</div>

          <q-input
            id="name"
            class="login-form-signin-container"
            v-model="user.name"
            name="name"
            label="Nome Completo"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-account" />
            </template>
          </q-input>

          <q-input
            id="email"
            class="login-form-signin-container"
            v-model="user.email"
            name="email"
            label="E-Mail"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-email" />
            </template>
          </q-input>

          <q-input
            id="documentId"
            class="login-form-signin-container"
            v-model="user.documentId"
            mask="###.###.###-##"
            name="cpf"
            label="CPF"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-card-account-details" />
            </template>
          </q-input>

          <q-input
            id="password"
            class="login-form-signin-container"
            v-model="user.password"
            type="password"
            mask="'###.###.###-##'"
            name="password"
            label="Senha"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
          </q-input>

          <q-input
            id="confirmPassword"
            class="login-form-signin-container"
            v-model="user.confirmPassword"
            type="confirmPassword"
            mask="'###.###.###-##'"
            name="confirmPassword"
            label="Confirmação da Senha"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
          </q-input>

          <div class="login-form-signin-in" @click="signUp()">Cadastrar</div>
          <div class="login-others-links">
            Já tem cadastro?
            <a @click="loggingIn = !loggingIn">Clique aqui!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import { baseApiUrl, showError } from "../../src/global.js";
import { cpfValidation } from "../utils/cpfValidation.js";
import { emailValidation } from "../utils/emailValidation.js";
import { refreshToken } from "src/utils/refreshToken";

export default {
  components: {},
  provide: function () {
    return {};
  },
  data() {
    return {
      loggingIn: true,
      showPassword: false,
      eyePassIco: "eye-off",
      user: {},
    };
  },
  async beforeCreate() {
    try {
      const loggedUser = await refreshToken().then((token) => {
        return token.status === 200;
      });

      if (loggedUser) {
        this.$router.push({ path: "/platform" });
      }
    } catch (err) {
      //
    }
  },
  methods: {
    ...mapActions("users", ["setUser"]),
    switchVisibility: function () {
      const passwordField = document.getElementsByName("password")[0];

      if (passwordField.getAttribute("type") === "password") {
        passwordField.setAttribute("type", "text");
        this.eyePassIco = "eye";
      } else {
        passwordField.setAttribute("type", "password");
        this.eyePassIco = "eye-off";
      }
    },
    login: function () {
      if (!this.user.email) {
        showError("E-mail do usuário deve ser preenchido.");
        document.getElementById("loginEmail").focus();
        return;
      }

      if (!emailValidation(this.user.email)) {
        showError("Email Inválido.");
        document.getElementById("email").focus();
        return;
      }

      if (!this.user.password) {
        showError("Senha do usuário deve ser preenchido.");
        document.getElementById("loginPassword").focus();
        return;
      }

      const userData = {
        email: this.user.email,
        password: this.user.password,
      };

      axios
        .post(`${baseApiUrl}/sessions`, userData)
        .then(async (user) => {
          this.$q.notify({
            type: "success",
            message: "Sucesso",
          });

          this.loggingIn = false;

          await this.setUser(user.data);

          this.$router.push({ path: "/platform" });
        })
        .catch(showError => {
          console.log(showError)
        });

      this.user = {};
    },
    signUp: function () {
      if (!this.user.name) {
        showError("Nome do usuário deve ser preenchido.");
        document.getElementById("name").focus();
        return;
      }

      if (!this.user.email) {
        showError("E-mail do usuário deve ser preenchido.");
        document.getElementById("email").focus();
        return;
      }

      if (!emailValidation(this.user.email)) {
        showError("Email Inválido.");
        document.getElementById("email").focus();
        return;
      }

      if (!this.user.documentId) {
        showError("CPF do usuário deve ser preenchido.");
        document.getElementById("documentId").focus();
        return;
      }

      if (!this.user.password) {
        showError("Senha do usuário deve ser preenchida.");
        document.getElementById("password").focus();
        return;
      }

      if (!this.user.confirmPassword) {
        showError("A confirmação de senha deve ser preenchida.");
        document.getElementById("confirmPassword").focus();
        return;
      }

      if (this.user.password !== this.user.confirmPassword) {
        showError("As senhas inseridas não conferem.");
        document.getElementById("confirmPassword").focus();
        return;
      }

      if (!cpfValidation(this.user.documentId)) {
        showError("CPF Inválido.");
        document.getElementById("documentId").focus();
        return;
      }

      const userData = {
        name: this.user.name,
        username: this.user.name,
        email: this.user.email,
        password: this.user.password,
        documentId: this.user.documentId,
        type: "C",
      };

      axios
        .post(`${baseApiUrl}/users`, userData)
        .then(() => {
          this.$toasted.global.defaultSuccess();
          this.loggingIn = true;
        })
        .catch(showError);

      this.user = {};
    },
  },
};
</script>

<style lang="scss">
.login-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    90deg,
    rgba(255, 70, 144, 1) 0%,
    rgba(26, 39, 183, 1) 100%
  );
  flex-direction: column;
}

.login-modal {
  margin: auto;
  width: 90%;
  max-width: 600px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
}

.login-prepara-me-logo {
  height: 100px;
  width: 80%;
  background-image: url("../assets/logos/logo_preparame_home.png");
  background-position: 0%;
  background-size: cover;
  padding-left: 10px;
  margin: 0 auto 20px auto;
  cursor: pointer;
}

.login-form-signin {
  display: flex;
  flex-direction: column;
}

.login-modal-title {
  width: 80%;
  margin: 0 auto 20px auto;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  text-align: center;
  color: #0922bc;
  font-weight: bold;
  user-select: none;
}

.login-form-signin-container {
  width: 80%;
  margin: auto;
}

.login-form-icon {
  width: 30px;
  color: #667998;
}

.login-form-eye-icon {
  cursor: pointer;
}

.login-form-signin input {
  max-width: 800px;
}

.login-others-links {
  width: 80%;
  margin: 2px auto;
  font-family: "Nunito", sans-serif;
  color: #667998;
  user-select: none;
  a {
    font-family: "Nunito", sans-serif;
    color: #667998;
    font-weight: bold;
    cursor: pointer;
  }
}

.login-forgot-pass {
  width: 80%;
  margin: 2px auto;
  font-family: "Nunito", sans-serif;
  font-size: 0.7rem;
  color: #667998;
  user-select: none;

  a {
    font-family: "Nunito", sans-serif;
    color: #667998;
    font-weight: bold;
    cursor: pointer;
  }
}

.login-form-signin-in {
  height: 50px;
  width: 220px;
  margin: 15px auto 30px auto;
  line-height: 50px;
  text-align: center;
  border: 1px solid #667998;
  font-family: "nunito", sans-serif;
  color: #667998;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.25s ease;
  background-color: #fff;
  user-select: none;
}

.login-form-signin-in:hover {
  border: 1px solid #fff;
  color: #fff;
  background-color: #667998;
}

@media screen and (max-width: 600px) {
  .login-prepara-me-logo {
    height: 60px;
    width: 100%;
  }
}
</style>
