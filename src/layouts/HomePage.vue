<template>
  <div>
    <Presentation />
    <Mentorships />
    <Medias />
    <Companies />
    <Testimonies />
    <WhoWeAre />
    <Newsletter />
  </div>
</template>

<script>
import Presentation from "../components/site/homePage/presentation/Presentation.vue";
import Mentorships from "../components/site/homePage/mentorships/Mentorships.vue";
import Medias from "../components/site/homePage/medias/Medias.vue";
import Companies from "../components/site/homePage/companies/Companies.vue";
import Testimonies from "../components/site/homePage/testimonies/Testimonies.vue";
import WhoWeAre from "../components/site/homePage/whoWeAre/WhoWeAre.vue";
import Newsletter from "../components/site/homePage/newsletter/Newsletter.vue";

export default {
  components: {
    Presentation,
    Mentorships,
    Medias,
    Companies,
    Testimonies,
    WhoWeAre,
    Newsletter,
  },
  provide: function () {
    return {
      goUrl: this.goUrl,
      click: this.click,
    };
  },
  data() {
    return {};
  },
  created() {
    window.scrollTo(0, 0);
  },
  methods: {
    goUrl(menu) {
      if (this.$router.currentRoute.path !== `/${menu}`) {
        this.$router.push({ path: `/${menu}` });
      }
    },
  },
};
</script>

<style>
@keyframes slide {
  to {
    transform: translateX(0px);
  }
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #888;
}
</style>
