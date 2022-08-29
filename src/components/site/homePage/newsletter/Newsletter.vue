<template>
  <div class="newsletter">
    <div class="newsletter-invite-title">
      Inscreva-se para receber nossas dicas
    </div>
    <div class="newsletter-invite-subtitle">
      Assim como você, nós também não gostamos de spam. Nos comprometemos a não
      enviá-los
    </div>
    <div class="newsletter-invite-email-input-container row">
      <input
        v-model="email"
        type="text"
        class="newsletter-invite-email-input col-8"
      />
      <q-space />
      <button
        v-if="!mobile"
        class="newsletter-invite-email-btn col-2 q-mr-xs q-my-xs"
        @click="save(email)"
      >
        Inscrever-se
      </button>
    </div>
    <button
      v-if="mobile"
      class="newsletter-invite-email-btn col-2 q-mr-xs q-my-xs"
      @click="save(email)"
    >
      Inscrever-se
    </button>
  </div>
</template>

<script>
import { saveCrud } from "./../../../general/crud/utils/saveCrud.js";
import { showError } from "../../../../global.js";
import { emailValidation } from "../../../../utils/emailValidation.js";

export default {
  data() {
    return {
      email: "",
      mobile: false,
    };
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  methods: {
    save: async function (data) {
      try {
        const email = data;

        if (!emailValidation(email)) {
          showError("Email Inválido.");
          return;
        }

        const result = await saveCrud("/users/subscriptionNewsletter", {
          email,
        });

        if (result && result.status === 201) {
          this.$q.notify({
            type: "success",
            message: "Cadastrado com sucesso.",
          });

          this.email = "";
        }
      } catch (err) {
        showError(err);

        return false;
      }
    },
  },
};
</script>

<style>
.newsletter {
  height: 30vh;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.newsletter-invite-title {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  text-align: center;
  color: #ffffff;
}

.newsletter-invite-subtitle {
  font-family: "Nunito";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  color: #ffffff;
}

.newsletter-invite-email-input-container {
  height: 50px;
  width: 50%;
  background-color: #fff;
  margin: 20px 0 0 0;
  border-radius: 20px;
}

.newsletter-invite-email-input {
  border: none;
  margin: 10px;
}

.newsletter-invite-email-btn {
  border: none;
  border-radius: 20px;
  background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
  color: #fff;
  cursor: pointer;
}

.newsletter-invite-email-btn:hover {
  background: linear-gradient(90deg, #1a27b7dd 0%, #ff4690dd 100%);
}

@media (orientation: portrait) {
  .newsletter {
    height: 50vh;
  }
  .newsletter-invite-title {
    font-size: 1.4rem;
  }

  .newsletter-invite-email-input-container {
    width: 90%;
  }

  .newsletter-invite-email-btn {
    background: linear-gradient(90deg, #1a27b7 0%, #ff4690 100%);
    padding: 10px;
    margin: 20px 0 0 0;
  }

  .newsletter-invite-email-btn:hover {
    background: linear-gradient(90deg, #1a27b7dd 0%, #ff4690dd 100%);
  }
}
</style>
