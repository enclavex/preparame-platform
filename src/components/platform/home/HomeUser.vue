<template>
  <div id="q-app" class="schedule">
    <q-page>
      <Schedule />
    </q-page>
  </div>
</template>

<script>
import Schedule from "../schedule/Schedule.vue";

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
