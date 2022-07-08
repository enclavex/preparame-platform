<template>
  <div>
    <Presentation/>
    <HowItWorks/>
    <BestSellers/>
    <WhoWeAre/>
    <Testimonies/>
  </div>
</template>

<script>
  import Presentation from "../components/site/homePage/presentation/Presentation.vue";
  import HowItWorks from "../components/site/homePage/howItWorks/HowItWorks.vue";
  import BestSellers from "../components/site/homePage/bestSellers/BestSellers.vue";
  import Testimonies from "../components/site/homePage/testimonies/Testimonies.vue";
  import WhoWeAre from "../components/site/homePage/whoWeAre/WhoWeAre.vue";

  export default {
    components: {
      Presentation,
      HowItWorks,
      BestSellers,
      WhoWeAre,
      Testimonies,
    },
    provide: function() {
      return {
        goUrl: this.goUrl,
        click: this.click
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
      }
    }
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
