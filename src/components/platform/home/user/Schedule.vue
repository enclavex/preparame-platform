<template>
  <q-card class="schedule q-ml-md q-mt-md">
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col q-ml-md q-mt-md text-h5 ellipsis">Minha Agenda</div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <EventSchedule v-for="schedule in schedules" :key="schedule.id" :schedule="schedule"/>
    </q-card-section>
  </q-card>
</template>

<script>
import EventSchedule from "./EventSchedule.vue";
import { filterCrud } from "./../../crud/utils/filterCrud.js";
import { formatDateToStringMasked } from "./../../../../utils/formatDate.js";

export default {
  data() {
    return {
      schedules: []
    }
  },
  components: {
    EventSchedule,
  },
  async mounted() {
    const dateBegin = new Date();
    const dateEnd = new Date();

    dateBegin.setDate(dateBegin.getDate() - 1);
    dateEnd.setDate(dateEnd.getDate() + 7);

    const filters = [
      {
        name: "userId",
        model: localStorage.getItem("userId"),
      },
      {
        name: "dateBegin",
        model: formatDateToStringMasked(dateBegin, "yyyy-mm-dd"),
      },
      {
        name: "dateEnd",
        model: formatDateToStringMasked(dateEnd, "yyyy-mm-dd"),
      },
    ];

    this.schedules = await filterCrud(filters, "specialists/schedule");
  },
};
</script>

<style lang="scss">
.schedule {
  display: flex;
  flex-direction: column;
}
</style>
