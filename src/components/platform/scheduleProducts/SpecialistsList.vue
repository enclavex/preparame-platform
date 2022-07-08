<template>
  <q-page>
    <q-breadcrumbs class="q-pl-md q-pt-md">
      <q-breadcrumbs-el label="Início" to="/platform" />
      <q-breadcrumbs-el label="Serviços" to="/products" />
      <q-breadcrumbs-el label="Agendamento" />
    </q-breadcrumbs>
    <div class="col q-ml-md q-mt-md text-h5 ellipsis">Agendamento</div>
    <div class="col q-ml-md text-h6 ellipsis text-grey-7">
      {{ product.name }}
    </div>
    <SpecialistCard
      v-for="specialist in specialists"
      :key="specialist.id"
      :specialist="specialist"
      :specialistSchedule="specialist.specialistSchedule"
      :product="product"
    />
  </q-page>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";
import SpecialistCard from "./SpecialistCard.vue";
import {
  organizeSpecialistScheduleData,
  getDayOfWeek,
} from "./organizeSpecialistScheduleData.js";

export default {
  data() {
    return {
      productId: "",
      specialists: [],
      product: {},
    };
  },
  components: {
    SpecialistCard,
  },
  async created() {
    this.productId = this.$route.params.productId;

    await this.loadSpecialists();
    await this.loadProduct();
  },
  methods: {
    loadProduct: async function () {
      await axios
        .get(`${baseApiUrl}/products/${this.productId}`)
        .then(async (product) => {
          this.product = product.data;
        })
        .catch(showError);
    },
    loadSpecialists: async function () {
      let actualDate = new Date();

      const dateBegin = getDayOfWeek(actualDate, 1, actualDate.getDay() <= 5);
      const dateEnd = getDayOfWeek(actualDate, 5, actualDate.getDay() <= 5);

      dateBegin.setHours(0, 0, 0);
      dateEnd.setHours(23, 59, 59);

      const config = {
        headers: {
          datebegin: dateBegin,
          dateend: dateEnd,
        },
      };

      await axios
        .get(`${baseApiUrl}/specialists/${this.productId}`, config)
        .then(async (specialists) => {
          this.specialists = specialists.data;

          if (this.specialists) {
            this.specialists.map((specialist) => {
              specialist.specialistSchedule = organizeSpecialistScheduleData(
                specialist.specialistScheduleAvailable,
                dateBegin,
                dateEnd
              );

              return true;
            });
          }
        })
        .catch(showError);
    },
  },
};
</script>

<style lang="scss">
.specialist-list {
  width: 100%;
}
</style>
