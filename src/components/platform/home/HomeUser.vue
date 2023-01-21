<template>
  <div id="q-app" class="home-external-user">
    <q-page>
      <div :class="{ row: !mobile }">
        <ExternalUserWelcomeCard
          v-if="loadUserCard && !mobile"
          :products="products"
          :interviewSimulator="interviewSimulator"
        />
        <ExternalUserWelcomeCardMobile
          v-else-if="loadUserCard && mobile"
          :products="products"
          :interviewSimulator="interviewSimulator"
        />
        <div :class="{ col: true, 'q-px-xl': !mobile, 'q-px-lg': mobile }">
          <div :class="{ row: true, 'q-col-gutter-xl': !mobile, 'q-col-gutter-lg': mobile }">
            <ExternalUserKitRealocationProCard v-if=false
              :class="{ 'col-6': !mobile, 'col-12': mobile }"
            />
            <ExternalUserIndividualMentorshipCard v-if=false
              :class="{ 'col-6': !mobile, 'col-12': mobile }"
            />
            <ExternalUserInterviewSimulatorCard
              :class="{ 'col-6': !mobile, 'col-12': mobile }"
            />
            <ExternalUserResumeCreatorCard
              :class="{ 'col-6': !mobile, 'col-12': mobile }"
            />
          </div>
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import ExternalUserWelcomeCard from "./externalUser/ExternalUserWelcomeCard.vue";
import ExternalUserWelcomeCardMobile from "./externalUser/ExternalUserWelcomeCardMobile.vue";
import ExternalUserKitRealocationProCard from "./externalUser/ExternalUserKitRealocationProCard.vue";
import ExternalUserInterviewSimulatorCard from "./externalUser/ExternalUserInterviewSimulatorCard.vue";
import ExternalUserResumeCreatorCard from "./externalUser/ExternalUserResumeCreatorCard.vue";
import ExternalUserIndividualMentorshipCard from "./externalUser/ExternalUserIndividualMentorshipCard.vue";

import { filterCrud } from "./../../general/crud/utils/filterCrud";

export default {
  data() {
    return {
      products: [],
      loadUserCard: false,
      mobile: false,
      interviewSimulator: false,
    };
  },
  components: {
    ExternalUserWelcomeCard,
    ExternalUserKitRealocationProCard,
    ExternalUserInterviewSimulatorCard,
    ExternalUserResumeCreatorCard,
    ExternalUserIndividualMentorshipCard,
    ExternalUserWelcomeCardMobile,
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  async created() {
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

    this.loadUserCard = true;

    this.interviewSimulator =
      (new Date() - new Date(localStorage.getItem("createdAt"))) /
        1000 /
        60 /
        60 /
        24 <=
      7;
  },
  methods: {
    goUrl: function (url) {
      this.$router.push({ path: `${url}/${this.product.id}` });
    },
  },
};
</script>

<style>
.home-external-user {
  height: 100%;
}
</style>
