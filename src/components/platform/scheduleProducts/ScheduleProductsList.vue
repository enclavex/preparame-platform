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
        name: "status",
        model: "ACTIVE",
      },
      {
        name: "type",
        model: "SCHEDULED",
      },
    ];

    this.products = await filterCrud(filters, "products");
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
