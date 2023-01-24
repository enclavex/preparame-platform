<template>
  <div id="q-app" class="orders">
    <q-page>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div>
        <q-card class="row col-12 q-ma-md">
          <q-card-section>
            <div class="row no-wrap items-center">
              <div class="col q-ml-md q-mt-md text-h5 ellipsis">
                Meus Pedidos
              </div>
            </div>
          </q-card-section>
          <q-card-section class="col-12">
            <q-banner
              v-for="order in orders"
              :key="order.shortId"
              rounded
              :class="{
                'q-ma-sm': true,
                'text-white': true,
                'bg-secondary': order.status === 'CREATED',
                'bg-primary': order.status === 'PAID',
                'bg-grey': order.status === 'RESCUED',
              }"
            >
              <div class="row">
                <div class="row items-start items-center col-12">
                  <div
                    :class="{
                      row: !mobile,
                      'items-start': true,
                      'items-center': true,
                      'event-schedule-info': true,
                      'col-12': true,
                    }"
                  >
                    <div
                      :class="{
                        col: true,
                        'items-center': true,
                        'col-2': !mobile,
                        'col-6': mobile,
                      }"
                    >
                      <div class="text-caption text-weight-light">Pedido</div>
                      <div class="text-subtitle1">{{ order.shortId }}</div>
                    </div>
                    <div
                      :class="{
                        col: true,
                        'items-center': true,
                        'col-2': !mobile,
                        'col-6': mobile,
                      }"
                    >
                      <div class="text-caption text-weight-light">Data</div>
                      <div class="text-subtitle1">
                        {{ order.dateCreatedFormated }}
                      </div>
                    </div>
                    <div
                      :class="{
                        col: true,
                        'items-center': true,
                        'col-1': !mobile,
                      }"
                    >
                      <div class="text-caption text-weight-light">Itens</div>
                      <div class="text-subtitle1">
                        {{ order.orderItem.length }}
                      </div>
                    </div>
                    <div
                      :class="{
                        col: true,
                        'items-center': true,
                        'col-1': !mobile,
                      }"
                    >
                      <div class="text-caption text-weight-light">Valor</div>
                      <div class="text-subtitle1">
                        {{ order.amountFormated }}
                      </div>
                    </div>
                    <div
                      :class="{
                        col: true,
                        'items-center': true,
                        'col-1': !mobile,
                      }"
                    >
                      <div class="text-caption text-weight-light">Situação</div>
                      <div class="row text-subtitle1">
                        {{ order.status }}
                      </div>
                    </div>
                    <div
                      :class="{
                        row: true,
                        'items-center': true,
                        'col-4': !mobile,
                      }"
                    >
                      <q-btn-group push>
                        <q-btn
                          glossy
                          color="primary"
                          @click="requestPagarMe(order)"
                          >Pagar</q-btn
                        >
                        <q-btn
                          glossy
                          color="primary"
                          @click="rescueProducts(order)"
                          >Resgatar Produtos</q-btn
                        >
                      </q-btn-group>
                    </div>
                  </div>
                </div>
              </div>
            </q-banner>
          </q-card-section>
        </q-card>
      </div>
    </q-page>
  </div>
</template>

<script>
import { filterCrud } from "../../general/crud/utils/filterCrud";
import { formatDateToStringMasked } from "../../../utils/formatDate.js";
import { priceConvert } from "../../../utils/priceConvert.js";
import axios from "axios";
import { baseApiUrl, showError } from "../../../global";
import Breadcrumbs from "../../general/Breacrumbs.vue";
import { saveCrud } from "./../../general/crud/utils/saveCrud.js";

export default {
  components: {
    Breadcrumbs,
  },
  data() {
    return {
      orders: [],
      mobile: false,
      breadcrumbs: [
        {
          title: "Meus Pedidos",
          to: "",
        },
      ],
    };
  },
  methods: {
    updateOrder: async function (order) {
      const config = {
        method: "POST",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        url: `${baseApiUrl}/orders/${order.id}`,
        data: order,
      };

      await axios(config)
        .then((order) => {
          return order.data;
        })
        .catch((err) => {
          showError(err);
        });
    },
    rescueKitPro: async function () {
      await axios
        .get(`${baseApiUrl}/users/${localStorage.getItem("userId")}`)
        .then(async (user) => {
          user = user.data[0];

          let date = new Date();

          let periodTestRemaining =
            ((new Date() - new Date(user.periodTest)) / 1000 / 60 / 60 / 24) *
            -1;

          periodTestRemaining =
            periodTestRemaining > 0 ? periodTestRemaining : 0;

          let periodKitProRemaining =
            ((new Date() - new Date(user.periodKitPro)) / 1000 / 60 / 60 / 24) *
            -1;

          periodKitProRemaining =
            periodKitProRemaining > 0 ? periodKitProRemaining : 0;

          date.setDate(
            (
              date.getDate() +
              (90 + periodKitProRemaining + periodTestRemaining)
            ).toFixed(0)
          );

          user.expiresDate = date;
          console.log(user);

          console.log(user);

          localStorage.setItem("expiresDate", date);

          return await saveCrud(`/users`, user, "POST", true);
        })
        .catch((err) => {
          showError(err);
        });
    },
    rescueProducts: async function (order) {
      await this.getOrderStatus(order);

      if (order.status !== "PAID") {
        this.$q.notify({
          type: "error",
          message: "Situação indisponível para resgate de produtos.",
        });

        return;
      }

      for (const orderItem of order.orderItem) {
        let config = {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          url: `${baseApiUrl}/users/products`,
          data: {
            userId: localStorage.getItem("userId"),
            productId: orderItem.productId,
            availableQuantity: orderItem.quantity,
          },
        };

        await axios(config).catch((err) => showError(err));

        if (orderItem.productId == "b2dda7e3-a6f6-4771-b59a-eeb8b7b5769a" || orderItem.productId == "5fca32d9-2abd-42a1-9043-2920ef156530") {
          await this.rescueKitPro();
        }
      }

      order.status = "RESCUED";
      order.dateUpdated = new Date();

      await this.updateOrder(order).catch((err) => showError(err));
    },
    requestPagarMe: async function (order) {
      await this.getOrderStatus(order);

      if (order.status == "PAID" || order.status == "RESCUED") {
        this.$q.notify({
          type: "info",
          message: "Pedido já está pago.",
        });

        return;
      }

      window.open(order.urlPagarMe, "_blank").focus();
    },
    retrieveOrders: async function () {
      const filters = [
        {
          name: "userId",
          model: localStorage.getItem("userId"),
        },
      ];

      this.orders = await filterCrud(filters, "orders");

      this.orders.forEach((order) => {
        order.dateCreatedFormated = formatDateToStringMasked(
          order.dateCreated,
          "dd/mm/yyyy"
        );

        order.amountFormated = priceConvert(order.amount / 100);
      });
    },
    getOrderStatus: async function (order) {
      const config = {
        method: "GET",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        url: `${baseApiUrl}/orders/pagarme?paymentLinkId=${order.pagarMeOrderId}`,
      };

      const payments = await axios(config).then((order) => {
        return order.data;
      });

      const verifyTransactionStatus = function () {
        return new Promise((resolve, reject) => {
          try {
            payments.forEach((payment) => {
              if (order.status == "RESCUED") {
                return resolve("RESCUED");
              }

              if (payment.status === "paid") {
                return resolve("PAID");
              }
            });

            return resolve("CREATED");
          } catch (err) {
            return reject(err);
          }
        });
      };

      const orderStatus = await verifyTransactionStatus().then((result) => {
        return result;
      });

      let orderUpdate = { ...order };

      orderUpdate.status = orderStatus;
      order.status = orderStatus;

      orderUpdate.dateUpdated = new Date();

      delete orderUpdate.orderItem;

      await this.updateOrder(orderUpdate);
    },
  },
  created() {
    this.retrieveOrders();
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
};
</script>

<style></style>
