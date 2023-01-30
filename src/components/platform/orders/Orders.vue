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
                'bg-negative': order.status === 'EXPIRED',
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
                        'col-1': !mobile,
                      }"
                    >
                      <q-btn-group push>
                        <q-btn
                          color="primary"
                          :disable="order.status !== 'CREATED'"
                          @click="requestPagarMe(order)"
                          >Pagar</q-btn
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
import Breadcrumbs from "../../general/Breacrumbs.vue";

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
    requestPagarMe: async function (order) {
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
