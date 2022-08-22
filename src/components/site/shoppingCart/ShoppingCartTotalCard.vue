<template>
  <div class="shopping-cart-total-card">
    <div class="shopping-cart-total-resume">Resumo do Pedido</div>
    <br />
    <div class="shopping-cart-total-count-products">
      {{ products.length }} Produto(s)
    </div>
    <hr />
    <div class="shopping-cart-total-value-container">
      <div class="shopping-cart-total-value-total-container">
        <div class="shopping-cart-total-value-label">Total</div>
        <div class="shopping-cart-total-value">R$ {{ total }}</div>
      </div>
    </div>
    <hr />
    <div
      class="shopping-cart-total-btn-continue q-mt-xs"
      @click="requestScheduleWhatsApp()"
    >
      Solicitar Agendamento Via WhatsApp
    </div>
    <div
      class="shopping-cart-total-btn-continue q-mt-sm bg-secondary"
      @click="openScheduleEmail()"
    >
      Solicitar Agendamento Via E-Mail
    </div>
    <q-dialog v-model="openSendEmail">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="row q-mt-sm">
            <div class="text-h6 crud-title">
              Insira suas informações para solicitar o agendamento dos produtos
              selecionados.
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <q-input
            filled
            color="secondary"
            v-model="user.name"
            :label="'Nome'"
            dense
            :class="`col-12 q-mb-sm q-mr-sm`"
          >
          </q-input>
          <q-input
            filled
            color="secondary"
            v-model="user.email"
            :label="'E-Mail'"
            dense
            :class="`col-12 q-mb-sm q-mr-sm`"
          >
          </q-input>
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn label="Cancelar" color="negative" v-close-popup />
          <q-btn label="Solicitar Agendamento" color="primary" @click="requestScheduleEmail()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { priceConvert } from "../../../utils/priceConvert.js";
import { refreshToken } from "../../../utils/refreshToken.js";
import { saveCrud } from "../../platform/crud/utils/saveCrud.js";
import { showError } from "../../../global.js";
import { emailValidation } from "../../../utils/emailValidation.js";

export default {
  props: ["products"],
  data() {
    return {
      total: 0,
      user: {},
      openSendEmail: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.products.forEach((product) => {
        this.total += product.price * product.qnty;
      });

      this.total = priceConvert(this.total);
    }, 100);
  },
  methods: {
    requestScheduleWhatsApp: function () {
      var msgProducts = "";

      this.products.forEach((product) => {
        msgProducts += `*${product.name}*: ${product.qnty} agendamento(s) \n`;

        return msgProducts;
      });

      let msg = `Olá, desejo fazer o agendamento dos seguintes serviços: \n`;

      msg += msgProducts;

      const msgEncoded = window.encodeURIComponent(msg);

      this.goURL(
        `https://web.whatsapp.com/send?phone=+5511953399384&text=${msgEncoded}`
      );
    },
    openScheduleEmail: async function () {
      try {
        const loggedUser = await refreshToken().then((token) => {
          return false
        });

        if (loggedUser) {
          this.user.email = localStorage.getItem("userEmail");
          this.user.name = localStorage.getItem("userName");
        }

        this.openSendEmail = true;
      } catch (err) {
        showError(err);
      }
    },
    requestScheduleEmail: async function () {
      try {
        var msgProducts = "";

        this.products.forEach((product) => {
          msgProducts += `${product.name}: ${product.qnty} agendamento(s) \n`;

          return msgProducts;
        });

        let msg = `Olá, desejo fazer o agendamento dos seguintes serviços: \n`;

        msg += msgProducts;

        if (!emailValidation(this.user.email)) {
          showError("Email Inválido.");
          return;
        }

        const result = await saveCrud("/products/requestSchedule", {
          email: this.user.email,
          name: this.user.name,
          obs: msg,
        });

        if (result && result.status === 201) {
          this.$q.notify({
            type: "success",
            message: "Solicitado com sucesso.",
          });

          this.$router.push({ path: `/` });
          
          localStorage.removeItem("cart");
        }
      } catch (err) {
        showError(err);

        return false;
      }
    },
    goURL: function (url) {
      window.open(url, "_blank").focus();
    },
  },
};
</script>

<style>
.shopping-cart-total-card {
  display: flex;
  flex-direction: column;
  height: auto;
  width: 95%;
  -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.32);
  border-radius: 5px;
  background-color: rgb(243, 244, 249);
  padding: 5%;
  min-width: 290px;
}

.shopping-cart-total-resume {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
  text-align: center;
}

.shopping-cart-total-count-products {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 1rem;
  color: #667998;
}

.shopping-cart-total-card hr {
  width: 85%;
  margin: 10px auto 10px auto;
  border: none;
  border-bottom: 1px solid #66799855;
}

.shopping-cart-total-value-container {
  text-align: right;
}

.shopping-cart-total-value-total-container {
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.5rem;
}

.shopping-cart-total-1x,
.shopping-cart-total-parcels,
.shopping-cart-total-ticket {
  font-family: "Nunito", sans-serif;
  font-size: 0.7rem;
  color: #667998;
}

.shopping-cart-total-btn-continue {
  font-family: "Nunito", sans-serif;
  font-size: 1.2rem;
  text-align: center;
  height: 3rem;
  line-height: 3rem;
  background-color: #15aa7c;
  color: #fff;
  border-radius: 5px;
  -webkit-box-shadow: 5px 5px 10px 1px #667998;
  box-shadow: 2px 2px 10px -2px #667998;
  transition: all 0.2s ease;
  cursor: pointer;
}

.shopping-cart-total-btn-continue:hover {
  background-color: #15aa7cdd;
}

@media (orientation: portrait) {
  .shopping-cart-total-card {
    height: auto;
    width: 100%;
  }

  .shopping-cart-total-value {
    font-size: 2.5rem;
  }

  .shopping-cart-total-1x,
  .shopping-cart-total-parcels,
  .shopping-cart-total-ticket {
    font-size: 1.1rem;
  }
}
</style>
