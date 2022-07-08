<template>
  <q-card class="product-card q-ma-md">
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">{{ shortName }}</div>
        <q-badge
          class="q-ma-sm q-pa-xs"
          rounded
          color="primary"
          label="2 Disponíveis"
        ></q-badge>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle2">{{ name }}</div>
      <div class="text-caption text-grey">
        {{ name }}
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions class="row no-wrap justify-around">
      <q-btn class="col-4" color="primary" @click="goUrl('schedule')">
        Agendar
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      default: "Melhor forma de recolocação no mercado é voltar ao início.",
    },
    shortName: {
      type: String,
      required: true,
      default: "Análise de currículo",
    },
    productContent: {
      type: Array,
      required: false,
      default: () => {
        return [];
      },
    },
  },
  computed: {
    priceConverted() {
      return priceConvert(this.price);
    },
  },
  methods: {
    goUrl: function (url) {
      this.$router.push({ path: `${url}/${this.id}` });
    },
  },
};
</script>

<style lang="scss">
.product-card {
  width: 400px;
}
</style>
