<template>
  <q-card class="schedule q-ma-md">
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col q-ml-md q-mt-md text-h5 ellipsis">Minha Agenda</div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <EventSchedule
        v-for="(schedulesGroup, index) in groupSchedulesAdjusted"
        :key="index"
        :schedulesGroup="schedulesGroup"
        :userType="homeType"
      />
    </q-card-section>
  </q-card>
</template>

<script>
import { filterCrud } from "../../crud/utils/filterCrud.js";
import { formatDateToStringMasked } from "../../../../utils/formatDate.js";

export default {
  data() {
    return {
      groupSchedules: {},
      groupSchedulesAdjusted: [],
      schedules: [],
    };
  },
  components: {
    EventSchedule: () => {
      const component = window.mobileAndTabletCheck()
        ? import("../templates/EventScheduleMobile.vue")
        : import("../templates/EventSchedule.vue");
      return component;
    },
  },
  props: ["homeType"],
  async created() {
    const dateBegin = new Date();
    const dateEnd = new Date();

    dateBegin.setDate(dateBegin.getDate() - 1);
    dateEnd.setDate(dateEnd.getDate() + 7);

    const filters = [
      {
        name: this.homeType === "USER" ? "userId" : "specialistUserId",
        model: localStorage.getItem("userId"),
      },
      {
        name: "status",
        model: "UNAVAILABLE",
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

    this.schedules.forEach((schedule) => {
      let groupKey = `${schedule["productId"]}${schedule["userId"]}${schedule["specialistId"]}${formatDateToStringMasked(new Date(schedule["dateSchedule"]), "yyyy-mm-dd")}` ;

      if (!this.groupSchedules[groupKey]) {
        this.groupSchedules[groupKey] = [];
      }

      this.groupSchedules[groupKey].push(schedule);

      return schedule;
    });

    Object.entries(this.groupSchedules).map((schedule)=> {
      const scheduleAdjusted = {}

      scheduleAdjusted[schedule[0]] = schedule[1]

      this.groupSchedulesAdjusted.push(scheduleAdjusted)
    })    
  },
};
</script>

<style lang="scss">
.schedule {
  display: flex;
  flex-direction: column;
}
</style>
