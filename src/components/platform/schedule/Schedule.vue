<template>
  <q-card class="schedule q-ml-md q-mt-md">
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col q-ml-md q-mt-md text-h5 ellipsis">Minha Agenda</div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <EventSchedule/>
      <EventSchedule/>
      <EventSchedule/>
    </q-card-section>
  </q-card>
</template>

<script>
import EventSchedule from "./EventSchedule.vue"
export default {
    components: {
        EventSchedule
    }
};
</script>

<style lang="scss">
.schedule {
  display: flex;
  flex-direction: column;
}
</style>
