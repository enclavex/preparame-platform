<template>
  <q-banner rounded class="event-schedule q-ma-sm text-white">
    <div class="row items-start items-center event-schedule">
      <div class="col event-schedule-day-info text-center text-h5 col-2">
        <div class="event-schedule-day">17</div>
        <div class="event-schedule-day text-caption">Mar, 2022</div>
      </div>
      <div
        class="row items-start q-ml-md items-center event-schedule-info col-9"
      >
        <div class="event-schedule-product col items-center col-8">
          <div class="text-subtitle1">LINKEDIN</div>
          <div class="text-caption text-weight-light">Lucy Nunes</div>
        </div>
        <div class="event-schedule-hour col-2">
          <div class="text-subtitle1 text-center">10:00</div>
        </div>
        <div class="col-2 text-center">
          <q-icon
            name="mdi-delete-outline"
            class="event-schedule-delete-icon text-h6"
            ><q-tooltip> Cancelar Agendamento </q-tooltip></q-icon
          >
        </div>
      </div>
    </div>
  </q-banner>
</template>

<script>
export default {};
</script>

<style lang="scss">
.event-schedule-delete-icon {
  cursor: pointer;
}

.event-schedule-delete-icon {
  cursor: pointer;
}

.event-schedule {
  pointer-events: none;
  transition: 0.3s all ease;
  background: $primary;

  &:hover {
    background: $negative; // hover applied to .parent but disabled by the previous pointer-events: none;
  }
  .event-schedule-delete-icon {
    pointer-events: auto;

    &:hover {
      animation: shake 0.7s;
      animation-iteration-count: infinite;
    }
  }
}
</style>
