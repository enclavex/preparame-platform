<template>
  <div class="schedule-product-list">
    <q-page>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="schedule-product-list-content">
        <PageTitle :title="title"></PageTitle>
        <div class="schedule-product-list-container">
          <ScheduleProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import Breadcrumbs from "../../general/Breacrumbs.vue";
import PageTitle from "../../general/PageTitle.vue";

import { filterCrud } from "./../../general/crud/utils/filterCrud";

export default {
  data() {
    return {
      title: "Selecione um serviço para o agendamento",
      products: [],
      breadcrumbs: [
        {
          title: "Serviços",
          to: "",
        },
      ],
    };
  },
  components: {
    ScheduleProductCard: () => {
      const component = window.mobileAndTabletCheck()
        ? import("./ScheduleProductCardMobile.vue")
        : import("./ScheduleProductCard.vue");
      return component;
    },
    Breadcrumbs,
    PageTitle,
  },
  async mounted() {
    const filters = [
      {
        name: "userId",
        model: localStorage.getItem("userId"),
      },
    ];

    const userProducts = await filterCrud(filters, "users/products");

    userProducts.forEach((userProduct) => {
      if (userProduct.availableQuantity > 0) {
        userProduct.scheduled = false;
      } else {
        userProduct.scheduled = true;
      }

      this.products.push(userProduct.product);
    });
  },
};
</script>

<style lang="scss">
.schedule-product-list-content {
  padding: 20px 20px;
}

.schedule-product-list-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
