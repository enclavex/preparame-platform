<template>
  <div
    id="free-mentorship"
    :class="{
      'free-mentorship': true,
      row: !mobile,
    }"
  >
    <div
      :class="{
        'free-mentorship-register': true,
        column: true,
        'justify-center': true,
        'col-8': !mobile,
      }"
    >
      <div v-if="!mobile" class="free-mentorship-register-title">
        <div class="text-h3">Mentoria gratuita</div>
        <div class="text-h2">DEMISSÃO RESPONSÁVEL</div>
      </div>
      <div class="free-mentorship-register-inputs column">
        <div class="row justify-center">
          <input
            v-model="name"
            type="text"
            placeholder="Seu nome"
            :class="{
              'free-mentorship-register-input': true,
              'col-5': !mobile,
              'col-12': mobile,
            }"
          />
          <input
            v-model="email"
            type="text"
            placeholder="Seu e-mail"
            :class="{
              'free-mentorship-register-input': true,
              'col-5': !mobile,
              'col-12': mobile,
            }"
          />
        </div>
        <div class="row justify-center">
          <input
            v-model="phone"
            type="text"
            placeholder="Telefone"
            :class="{
              'free-mentorship-register-input': true,
              'col-5': !mobile,
              'col-12': mobile,
            }"
          />
          <input
            v-model="position"
            type="text"
            placeholder="Seu cargo"
            :class="{
              'free-mentorship-register-input': true,
              'col-5': !mobile,
              'col-12': mobile,
            }"
          />
        </div>
        <div class="row justify-center">
          <input
            v-model="company"
            type="text"
            placeholder="Sua empresa"
            :class="{
              'free-mentorship-register-input': true,
              'col-10': !mobile,
              'col-12': mobile,
            }"
          />
        </div>
        <div class="row justify-center">
          <q-btn
            rounded
            style="background: #ff0080; color: white"
            no-caps
            :class="{
              'col-2': !mobile,
              'col-6': mobile,
              'q-mb-md': mobile,
              'q-mt-sm': mobile,
            }"
            @click="sendFreeMentorshipMail()"
            >Enviar</q-btn
          >
        </div>
      </div>
    </div>
    <div
      :class="{
        'free-mentorship-specialist': true,
        'col-2': !mobile,
        column: !mobile,
        'justify-center': true,
        'q-mb-md': mobile,
      }"
    >
      <div v-if="mobile" class="free-mentorship-register-title">
        <div class="text-h5">Mentoria gratuita</div>
        <div class="text-h6">DEMISSÃO RESPONSÁVEL</div>
      </div>
      <img class="free-mentorship-specialist-image" :src="imgURL('lucy')" alt />
      <div class="free-mentorship-specialist-name text-h5">Lucy Nunes</div>
      <div class="free-mentorship-specialist-position text-h6">Fundadora</div>
      <q-icon
        name="mdi-linkedin"
        :class="{
          'free-mentorship-specialist-icon': true,
          'q-mr-sm': true,
        }"
        size="35px"
        @click="goUrl('https://www.linkedin.com/in/nuneslucy/')"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global.js";

import { emailValidation } from "../../../../utils/emailValidation.js";

export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      position: "",
      company: "",
      mobile: false,
    };
  },
  methods: {
    goUrl: function (url) {
      window.open(url, "_blank").focus();
    },
    imgURL: function (pathName) {
      var images = require.context("../../../../assets/imgs/", false, /\.png$/);

      return images(`./${pathName}.png`);
    },
    sendFreeMentorshipMail: async function () {
      if (!emailValidation(this.email)) {
        showError("Email Inválido.");
        return;
      }

      await axios
        .post(`${baseApiUrl}/companies/freeMentorship`, {
          name: this.name,
          email: this.email,
          phone: this.phone,
          position: this.position,
          company: this.company,
        })
        .then(() => {
          this.$q.notify({
            type: "success",
            message: "Sucesso",
          });

          this.name = "";
          this.email = "";
          this.phone = "";
          this.position = "";
          this.company = "";

          this.$router.push({ path: `/` });
        })
        .catch(showError);
    },
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
};
</script>

<style lang="scss">
.free-mentorship {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
}

.free-mentorship-register-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  color: $text-white;
  text-align: center;
}

.free-mentorship-register-title .text-h2 {
  margin-top: 20px;
  font-weight: 700;
}

.free-mentorship-register-inputs {
  width: 70%;
  margin: 0 auto;
}

.free-mentorship-register-input {
  border-radius: 30px;
  height: 30px !important;
  margin: 10px 5px;
  padding: 20px;
  border: none;
}

.free-mentorship-specialist-image {
  height: 25vh;
  margin: 0 auto;
}

.free-mentorship-specialist-name {
  color: $text-white;
  text-align: center;
}

.free-mentorship-specialist-position {
  color: $text-white;
  text-align: center;
}

.free-mentorship-specialist-icon {
  color: $text-white;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
}

@media (orientation: portrait) {
  .free-mentorship {
    height: 95vh;
    display: flex;
    flex-direction: column-reverse;
  }

  .free-mentorship-specialist {
    display: flex;
    flex-direction: column;
  }

  .free-mentorship-register-input {
    margin: 5px 5px;
    padding: 15px;
  }
}
</style>
