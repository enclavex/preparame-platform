<template>
  <component :is="component" :col="col" v-if="component" />
</template>

<script>
export default {
  name: "dynamic-link",
  props: ["col"],
  data() {
    return {
      component: null,
    };
  },
  computed: {
    loader() {
      if (!this.col.type) {
        return null;
      }

      const type = this.col.type.replace(/\b\w/g, (l) => l.toUpperCase());

      return () => import(`./${type}`);
    },
  },
  methods: {
    alterData: function (name, data) {
      this.$root.$emit("alterData", { data, name });
    },
  },
  mounted() {
    this.loader()
      .then(() => {
        this.component = () => this.loader();
      })
      .catch(() => {
        this.component = () => import("./Default");
      });
  },
};
</script>
