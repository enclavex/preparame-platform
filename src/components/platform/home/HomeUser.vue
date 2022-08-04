<template>
  <div id="q-app" class="schedule">
    <q-page>
      <Schedule :homeType="'USER'"/>
    </q-page>
  </div>
</template>

<script>
import Schedule from "./templates/Schedule.vue";

export default {
  components: {
    Schedule,
  },
};
</script>

<style>
.schedule {
  height: 100%;
}
</style>
