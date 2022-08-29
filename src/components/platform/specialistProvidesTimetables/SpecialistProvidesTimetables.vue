<template>
  <div class="specialist-provides-timetable">
    <q-page>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div class="specialist-provides-timetable-content">
        <PageTitle :title="title" />
        <div class="specialist-provides-timetable-select-content row">
          <SpecialistProvidesTimetablesCalendar />
          <SpecialistProvidesTimetablesHours
            :dateCalendar="dateCalendar"
            :specialist="specialist"
          />
        </div>
      </div>
    </q-page>
  </div>
</template>

<script>
import Breadcrumbs from "../../general/Breacrumbs.vue";
import PageTitle from "./../../general/PageTitle.vue";
import SpecialistProvidesTimetablesHours from "./SpecialistProvidesTimetablesHours.vue";
import SpecialistProvidesTimetablesCalendar from "./SpecialistProvidesTimetablesCalendar.vue";
import { filterCrud } from "./../../general/crud/utils/filterCrud.js";

export default {
  components: {
    Breadcrumbs,
    PageTitle,
    SpecialistProvidesTimetablesHours,
    SpecialistProvidesTimetablesCalendar,
  },
  data() {
    return {
      dateCalendar: new Date(),
      specialist: {},
      title: "Disponibilizar Horários para Agendamentos",
      breadcrumbs: [
        {
          title: "Disponibilizar Horários para Agendamentos",
          to: "",
        },
      ],
    };
  },
  created() {
    this.loadSpecialist();
  },
  methods: {
    loadSpecialist: async function () {
      const userId = localStorage.getItem("userId");

      const filters = [
        { name: "userId", model: userId },
        { name: "status", model: "ACTIVE" },
      ];

      const url = "specialists/";

      const specialists = await filterCrud(filters, url);

      if (specialists.length === 0 || specialists.length > 1) {
      } else {
        this.specialist = specialists[0];
      }
    },
  },
};
</script>

<style lang="scss">
.specialist-provides-timetable-content {
  padding: 20px 20px;
}
</style>
