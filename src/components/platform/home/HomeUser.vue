<template>
  <div id="q-app" class="home-external-user">
    <q-page>
      <div>
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
        <div :class="{ row: !mobile }">
          <UserCard
            v-if="loadUserCard"
            class="col-3"
            :products="products"
            :interviewSimulator="interviewSimulator"
          />
          <div
            :class="{
              col: true,
              'q-px-md': !mobile,
              'q-px-lg': mobile,
              'col-8': true,
            }"
          >
            <div
              :class="{
                'q-col-gutter-md': !mobile,
                'q-col-gutter-lg': mobile,
                'external-user-options': true,
              }"
            >
              <Schedule :homeType="'USER'"/>
              <ExternalUserInterviewSimulatorCard :class="{ 'col-12': true }" />
              <ExternalUserKitRealocationProCard
                v-if="!kitPro"
                :class="{ 'col-12': true }"
              />
              <ExternalUserIndividualMentorshipCard
                v-if="false"
                :class="{ 'col-12': true }"
              />

              <ExternalUserResumeCreatorCard :class="{ 'col-12': true }" />
            </div>
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
import Schedule from "./templates/Schedule.vue";
import UserCard from "./user/UserCard.vue";
import axios from "axios";
import { mapActions } from "vuex";
import { baseApiUrl, showError } from "../../../../src/global.js";

import { filterCrud } from "./../../general/crud/utils/filterCrud";

export default {
  data() {
    return {
      products: [],
      loadUserCard: false,
      mobile: false,
      interviewSimulator: false,
      periodTest: false,
      kitPro: false,
      daysToExpirePeriodTest: 0,
      daysToExpireUse: 0,
    };
  },
  components: {
    ExternalUserWelcomeCard,
    ExternalUserKitRealocationProCard,
    ExternalUserInterviewSimulatorCard,
    ExternalUserResumeCreatorCard,
    ExternalUserIndividualMentorshipCard,
    ExternalUserWelcomeCardMobile,
    UserCard,
    Schedule,
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();

    const userId = localStorage.getItem("userId");

    let config = {
      method: "GET",
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
      url: `${baseApiUrl}/users/${userId}`,
    };

    axios(config)
      .then(async (user) => {
        await this.setUserDates(user.data[0]);
        this.getExpiresDate();
      })
      .catch((err) => {
        console.log(err);
        showError(err);
      });
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

    this.getExpiresDate();
  },
  methods: {
    ...mapActions("users", ["setUserDates"]),
    goUrl: function (url) {
      this.$router.push({ path: `${url}/${this.product.id}` });
    },
    getExpiresDate: function () {
      this.daysToExpirePeriodTest =
        ((new Date() - new Date(localStorage.getItem("periodTest"))) /
          1000 /
          60 /
          60 /
          24) *
        -1;

      this.daysToExpireUse =
        ((new Date() - new Date(localStorage.getItem("expiresDate"))) /
          1000 /
          60 /
          60 /
          24) *
        -1;

      this.periodTest = this.daysToExpirePeriodTest > 0;
      this.kitPro = this.daysToExpireUse > 0;
    },
  },
};
</script>

<style>
.home-external-user {
  height: 100%;
}

.external-user-options {
  display: flex;
  flex-direction: column;
}
</style>
