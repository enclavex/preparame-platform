<template>
  <component :is="component" />
</template>

<script>
export default {
  name: "dynamic-link",
  data() {
    return {
      component: null,
    };
  },
  computed: {
    loader() {
      let userType = localStorage.getItem("userType");

      switch (userType) {
        case "USER":
          userType = "User";
          break;
        case "SPECIALIST":
          userType = "Specialist";
          break;
        case "ADMIN":
          userType = "Admin";
          break;
        case "COMPANY_ADMIN":
          userType = "Company";
          break;
      }

      return () => import(`./Home${userType}`);
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

<style scoped>
.crud-filter .q-mr-sm,
.crud-register .q-mr-sm {
  margin-right: unset;
  padding-right: 8px;
}
</style>
