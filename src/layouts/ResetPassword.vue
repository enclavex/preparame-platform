<template>
  <div class="reset-password">
    <div class="reset-password-container">
      <div class="reset-password-modal">
        <a href="/">
          <div class="reset-password-prepara-me-logo" />
        </a>
        <div class="reset-password-form-signin">
          <div class="reset-password-modal-title">
            Para concluir o processo, insira sua nova senha.
          </div>

          <q-input
            id="password"
            class="reset-password-form-signin-container"
            v-model="user.password"
            type="password"
            name="password"
            label="Senha"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
          </q-input>

          <q-input
            id="confirmPassword"
            class="reset-password-form-signin-container"
            v-model="user.confirmPassword"
            type="password"
            name="confirmPassword"
            label="Confirmação da Senha"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
          </q-input>

          <div class="reset-password-form-signin-in" @click="resetPassword()">
            Alterar senha
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../global.js";

export default {
  components: {},
  provide: function () {
    return {};
  },
  data() {
    return {
      user: {},
    };
  },
  methods: {
    resetPassword: function () {
      const token = this.$router.history.current.params.token;

      if (!token) {
        showError("Token de segurança inválido");
        return
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

      axios
        .post(`${baseApiUrl}/password/reset?token=${token}`, {
          password: this.user.password
        })
        .then(() => {
          this.$q.notify({
            type: "success",
            message: "Sucesso",
          });

          this.resetPasswordDialog = false;
          this.$router.push({ path: "/login" });
        })
        .catch(showError);


      this.user = {};
    },
  },
};
</script>

<style lang="scss">
.reset-password-container {
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

.reset-password-modal {
  margin: auto;
  width: 90%;
  max-width: 600px;
  background: #fff;
  border-radius: 5px;
  padding: 30px;
  -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
}

.reset-password-prepara-me-logo {
  height: 100px;
  width: 80%;
  background-image: url("../assets/logos/logo_preparame_home.png");
  background-position: 0%;
  background-size: cover;
  padding-left: 10px;
  margin: 0 auto 20px auto;
  cursor: pointer;
}

.reset-password-form-signin {
  display: flex;
  flex-direction: column;
}

.reset-password-modal-title {
  width: 80%;
  margin: 0 auto 20px auto;
  font-family: "Nunito", sans-serif;
  font-size: 20px;
  text-align: center;
  color: #0922bc;
  font-weight: bold;
  user-select: none;
}

.reset-password-form-signin-container {
  width: 80%;
  margin: auto;
}

.reset-password-form-icon {
  width: 30px;
  color: #667998;
}

.reset-password-form-eye-icon {
  cursor: pointer;
}

.reset-password-form-signin input {
  max-width: 800px;
}

.reset-password-others-links {
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

.reset-password-forgot-pass {
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

.reset-password-form-signin-in {
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

.reset-password-form-signin-in:hover {
  border: 1px solid #fff;
  color: #fff;
  background-color: #667998;
}

@media screen and (max-width: 600px) {
  .reset-password-prepara-me-logo {
    height: 60px;
    width: 100%;
  }
}
</style>
