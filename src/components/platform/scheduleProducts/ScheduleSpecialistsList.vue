<template>
  <q-page>
    <Breacrumbs :breadcrumbs="breadcrumbs" />
    <div class="col q-ml-md q-mt-md text-h5 ellipsis">Agendamento</div>
    <div class="col q-ml-md text-h6 ellipsis text-grey-7">
      {{ product.name }}
    </div>
    <ScheduleSpecialistCard
      v-for="specialist in specialists"
      :key="specialist.id"
      :specialist="specialist"
      :specialistSchedule="specialist.specialistSchedule"
      :product="product"
    />
  </q-page>
</template>

<script>
import ScheduleSpecialistCard from "./ScheduleSpecialistCard.vue";
import Breacrumbs from "../../general/Breacrumbs.vue";
import { filterCrud } from "./../crud/utils/filterCrud";

import {
  organizeSpecialistScheduleData,
  getDayOfWeek,
} from "./organizeSpecialistScheduleData";

export default {
  data() {
    return {
      productId: "",
      specialists: [],
      product: {},
      breadcrumbs: [
        {
          title: "Serviços",
          to: "/products",
        },
        {
          title: "Agendamento",
          to: "",
        },
      ],
    };
  },
  components: {
    ScheduleSpecialistCard,
    Breacrumbs,
  },
  async created() {
    this.productId = this.$route.params.productId;

    await this.loadSpecialists();
    await this.loadProduct();
  },
  methods: {
    loadProduct: async function () {
      const products = await filterCrud([], `products/${this.productId}`);
      this.product = products[0];
    },
    loadSpecialists: async function () {
      const filtersProductSpecialist = [
        {
          name: "productId",
          model: this.productId,
        },
      ];

      const productSpecialists = await filterCrud(
        filtersProductSpecialist,
        "specialists/products"
      );

      let actualDate = new Date();

      const dateBegin = getDayOfWeek(actualDate, 1, actualDate.getDay() <= 5);
      const dateEnd = getDayOfWeek(actualDate, 5, actualDate.getDay() <= 5);

      dateBegin.setHours(0, 0, 0);
      dateEnd.setHours(23, 59, 59);

      productSpecialists.forEach(async (productSpecialist) => {
        const specialists = await filterCrud(
          [],
          `specialists/${productSpecialist.specialistId}`
        );

        const specialist = specialists[0];

        const filtersSpecialistSchedule = [
          {
            name: "specialistId",
            model: specialist.id,
          },
          {
            name: "dateBegin",
            model: dateBegin,
          },
          {
            name: "dateEnd",
            model: dateEnd,
          },
        ];

        const specialistsSchedule = await filterCrud(
          filtersSpecialistSchedule,
          `specialists/schedule`
        );

        specialist.specialistSchedule = organizeSpecialistScheduleData(
          specialistsSchedule,
          dateBegin,
          dateEnd
        );

        this.specialists.push(specialist);
      });
    },
  },
};
</script>

<style lang="scss">
.specialist-list {
  width: 100%;
}
</style>
