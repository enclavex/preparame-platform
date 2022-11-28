<template>
  <q-banner
    rounded
    :class="{
      'event-schedule': true,
      'q-ma-sm': true,
      'text-white': true,
      'bg-secondary': order.status === 'CREATED',
      'bg-primary': order.status === 'PAID',
      'bg-grey': order.status === 'RESCUED',
    }"
  >
    <div class="row items-start items-center event-schedule">
      <div class="col event-schedule-day-info text-center text-h5 col-2">
        <div class="event-schedule-day">Pedido</div>
        <div class="event-schedule-day text-caption">
          {{ order.shortId }}
        </div>
      </div>
      <div class="col event-schedule-day-info text-center text-h5 col-2">
        <div class="event-schedule-day">Data</div>
        <div class="event-schedule-day text-caption">
          {{ order.dateCreatedFormated }}
        </div>
      </div>
      <div class="col event-schedule-day-info text-center text-h5 col-2">
        <div class="event-schedule-day">Situação</div>
        <div class="event-schedule-day text-caption">
          {{ order.status }}
        </div>
      </div>
      <div class="col-3 text-center">
        <q-btn
          v-if="order.status === 'CREATED'"
          color="white"
          class="text-caption"
          flat
          @click="refreshStatus()"
        >
          Atualizar Situação
        </q-btn>
        <q-btn
          v-else-if="order.status === 'PAID'"
          color="white"
          class="text-caption"
          flat
          @click="rescueProducts()"
        >
          Resgatar Produtos
        </q-btn>
        <div v-else class="text-caption" color="white">PRODUTOS RESGATADOS</div>
      </div>
    </div>
  </q-banner>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../../global";

export default {
  props: ["order"],
  methods: {
    rescueProducts: async function () {
      await Promise.all(
        this.order.orderItem.map((orderItem) => {
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

          return axios(config);
        })
      );

      const updatedOrder = this.order;

      updatedOrder.status = "RESCUED";
      updatedOrder.dateUpdated = new Date();

      let config = {
        method: "POST",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        data: updatedOrder,
        url: `${baseApiUrl}${"/orders"}`,
      };

      await axios(config)
        .then((created) => {
          return created;
        })
        .catch((err) => {
          return showError(err);
        });
    },
    refreshStatus: async function () {
      let config = {
        method: "GET",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        url: `${baseApiUrl}/orders/pagarme?paymentLinkId=${this.order.pagarMeOrderId}`,
      };

      const order = await axios(config)
        .then((order) => {
          return order.data[0];
        })
        .catch((err) => {
          return showError(err);
        });

      if (order.status !== "paid") {
        return;
      }

      const updatedOrder = this.order;

      updatedOrder.status = "PAID";
      updatedOrder.dateUpdated = new Date();

      config = {
        method: "POST",
        headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
        data: updatedOrder,
        url: `${baseApiUrl}${"/orders"}`,
      };

      await axios(config)
        .then((created) => {
          return created;
        })
        .catch((err) => {
          return showError(err);
        });
    },
  },
};
</script>

<style></style>
