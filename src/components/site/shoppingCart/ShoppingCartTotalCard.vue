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
    <q-btn
      label="Comprar agora"
      color="primary"
      @click="requestLogin()"
      :disable="!(items.length > 0)"
    />
    <q-dialog persistent v-model="openLogin">
      <Login> </Login>
    </q-dialog>
    <q-dialog v-model="beforePayment">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="row q-mt-sm">
            <div class="text-h5 crud-title">Instruções para o pagamento</div>
          </div>
        </q-card-section>
        <q-card-section>
          <div class="row">
            <div class="text-h6">
              Após clicar em continuar, você será redirecionado para o site de
              pagamentos. <br /><br />
              Os produtos adquiridos estarão disponíveis dentro do ambiente da
              nossa plataforma. <br /><br />
              Caso encontrar algum problema referente ao pagamento entre em
              contato conosco e informe o protocolo: {{ paymentOrderLink }}
              <br /><br />
              O protocolo poderá ser encontrado dentro da nossa plataforma no
              menu "Pedidos".
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-card-actions align="right" class="text-primary">
            <q-btn label="Cancelar" color="negative" v-close-popup />
            <q-btn
              label="Continuar para pagamento"
              color="primary"
              @click="requestPagarMe()"
              v-close-popup
            />
          </q-card-actions>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-inner-loading :showing="loadingPagarMe">
      <q-spinner-dots size="100px" color="primary" />
    </q-inner-loading>
  </div>
</template>

<script>
import { priceConvert } from "../../../utils/priceConvert.js";
import axios from "axios";
import { baseApiUrl, showError } from "../../../global";
import Login from "../general/Login.vue";
import { loginControl } from "../../../utils/controls/loginControl.js";

export default {
  props: ["products"],
  components: {
    Login,
  },
  data() {
    return {
      total: 0,
      items: [],
      loadingPagarMe: false,
      idInterval: null,
      paymentOrderCreated: null,
      beforePayment: false,
      paymentOrderLink: "",
      openLogin: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.products.forEach((product) => {
        this.items.push({
          id: product.id,
          title: product.name,
          unit_price: product.price.replace(".", ""),
          quantity: product.qnty,
          tangible: false,
        });
        this.total += product.price * product.qnty;
      });

      this.total = priceConvert(this.total);
    }, 100);
  },
  methods: {
    requestLogin: function () {
      if (!loginControl.isLogged) {
        this.openLogin = true;
      }

      const loginInterval = setInterval(() => {
        if (loginControl.isLogged) {
          this.openLogin = false;

          this.beforePayment = true;

          clearInterval(loginInterval);
        }
      }, 100);
    },
    requestPagarMe: async function () {
      this.loadingPagarMe = true;

      const data = {
        items: this.items,
        amount: this.total.toString().replace(",", ""),
      };

      const token = localStorage.getItem("token");

      if (token) {
        let config = {
          method: "POST",
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
          data: data,
          url: `${baseApiUrl}${"/orders/pagarme"}`,
        };

        this.paymentOrderCreated = await axios(config)
          .then((created) => {
            return created;
          })
          .catch((err) => {
            return showError(err);
          });

        this.paymentOrderCreated.data.userId = localStorage.getItem("userId");
        this.paymentOrderCreated.data.pagarMeOrderId =
          this.paymentOrderCreated.data.id;
        this.paymentOrderCreated.data.status = "CREATED";
        this.paymentOrderCreated.data.dateCreated = new Date();

        delete this.paymentOrderCreated.data.id;

        config = {
          method: "POST",
          headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
          data: this.paymentOrderCreated.data,
          url: `${baseApiUrl}${"/orders"}`,
        };

        await axios(config)
          .then((created) => {
            this.paymentOrderCreated.data.orderId = created.data.id;

            return created;
          })
          .catch((err) => {
            return showError(err);
          });

        await Promise.all(
          this.paymentOrderCreated.data.items.map((orderItem) => {
            const newOrderItem = {
              orderId: this.paymentOrderCreated.data.orderId,
              productId: orderItem.external_id,
              amount: orderItem.unit_price,
              quantity: orderItem.quantity,
            };

            const config = {
              method: "POST",
              headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              data: newOrderItem,
              url: `${baseApiUrl}${"/orders/item"}`,
            };

            return axios(config);
          })
        );

        localStorage.removeItem("cart");

        this.goURL(this.paymentOrderCreated.data.url);

        this.idInterval = setInterval(this.getOrderStatus, 1000);
      } else {
        showError("Não foi possível identificar o usuário registrado.");
      }
    },
    getOrderStatus: async function () {
      const config = {
        method: "GET",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        url: `${baseApiUrl}/orders/pagarme?paymentLinkId=${this.paymentOrderCreated.data.pagarMeOrderId}`,
      };

      await axios(config)
        .then((orders) => {
          if (orders.data.length > 0 && orders.data[0].status === "created") {
            this.$q.notify({
              type: "success",
              message: "Sucesso",
            });

            this.loadingPagarMe = false;

            clearInterval(this.idInterval);

            this.$router.push("/platform");
          }

          return orders;
        })
        .catch((err) => {
          return showError(err);
        });
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
    width: 90vw;
  }

  .shopping-cart-total-value {
    font-size: 1.5rem;
  }

  .shopping-cart-total-1x,
  .shopping-cart-total-parcels,
  .shopping-cart-total-ticket {
    font-size: 1.1rem;
  }
}
</style>
