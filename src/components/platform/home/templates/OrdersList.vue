<template>
  <q-card class="orders q-ma-md">
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col q-ml-md q-mt-md text-h5 ellipsis">Meus Pedidos</div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <OrderBanner
        v-for="(order, index) in orders"
        :key="index"
        :order="order"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import OrderBanner from "./OrderBanner.vue";
import { filterCrud } from "../../../general/crud/utils/filterCrud";
import { formatDateToStringMasked } from "../../../../utils/formatDate.js";

export default {
  components: {
    OrderBanner,
  },
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    loadOrders: async function () {
      const filters = [
        {
          name: "userId",
          model: localStorage.getItem("userId"),
        },
      ];

      this.orders = await filterCrud(filters, "orders");

      this.orders.map((order) => {
        order.dateCreatedFormated = formatDateToStringMasked(
          order.dateCreated,
          "dd/mm/yyyy"
        );

        return order;
      });
    },
  },
  created() {
    this.loadOrders();
  },
};
</script>

<style></style>
