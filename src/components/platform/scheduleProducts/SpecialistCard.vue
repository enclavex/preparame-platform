<template>
  <div>
    <div class="q-pa-sm row items-start">
      <q-card class="col-9 specialists-card" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="col-2 flex flex-center">
            <q-img class="rounded-borders" :src="specialist.user.avatarUrl"></q-img>
          </q-card-section>
          <q-card-section class="col-6">
            <div class="text-h5 q-mt-sm q-mb-xs">{{ specialist.name }}</div>
            <div class="text-caption text-grey">
              {{ specialist.bio }}
            </div>
            <a :href="specialist.linkedinUrl" target="_blank">
              <q-icon name="mdi-linkedin" size="36px" />
            </a>
          </q-card-section>
          <q-card-section class="col-4">
            <Schedule
              :specialistSchedule="specialistSchedule"
              :specialist="specialist"
              :product="product"
            />
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import Schedule from "./Schedule.vue";

export default {
  components: {
    Schedule,
  },
  props: {
    specialist: {
      type: Object,
      required: true,
    },
    specialistSchedule: {
      type: Array,
      required: false,
    },
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.specialists-card {
  min-height: 200px;
}
</style>
