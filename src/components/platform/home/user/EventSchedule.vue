<template>
  <q-banner
    rounded
    :class="{
      'event-schedule': true,
      'q-ma-sm': true,
      'text-white': true,
      'bg-negative': valid,
      'bg-secondary': !valid,
    }"
  >
    <div class="row items-start items-center event-schedule">
      <div class="col event-schedule-day-info text-center text-h5 col-2">
        <div class="event-schedule-day">{{ scheduleDay }}</div>
        <div class="event-schedule-day text-caption">{{ month }}</div>
      </div>
      <div
        class="row items-start q-ml-md items-center event-schedule-info col-9"
      >
        <div class="event-schedule-product col items-center col-8">
          <div class="text-subtitle1">{{ productName }}</div>
          <div class="text-caption text-weight-light">{{ specialistName }}</div>
        </div>
        <div class="event-schedule-hour col-1">
          <div class="text-subtitle1 text-center">{{ hour }}</div>
        </div>
        <div class="event-schedule-hour col-2">
          <div class="text-subtitle1 text-center">
            <q-btn
              v-if="!valid"
              color="white"
              class="text-caption"
              flat
              @click="goMeet()"
              >Ir para reunião</q-btn
            >
          </div>
        </div>
        <div class="col-1 text-center">
          <q-btn v-if="!valid" color="white" class="text-caption" flat>
            <q-icon
              v-if="!valid"
              name="mdi-delete-outline"
              class="event-schedule-delete-icon text-h5"
              @click="confirm = true"
              ><q-tooltip> Cancelar Agendamento </q-tooltip></q-icon
            >
          </q-btn>
        </div>
      </div>
    </div>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="mdi-exclamation"
            color="negative"
            text-color="white"
          />
          <span class="q-ml-sm"
            >Deseja confirma o cancelamento do horário agendado?</span
          >
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            label="Sim"
            color="primary"
            v-close-popup
            @click="removeSchedule()"
          />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-banner>
</template>

<script>
import { removeCrud } from "./../../crud/utils/removeCrud.js";

export default {
  data() {
    return {
      scheduleDay: "",
      month: "",
      specialistName: "",
      productName: "",
      hour: "",
      valid: true,
      confirm: false,
    };
  },
  props: ["schedule"],
  methods: {
    goMeet() {
      if (this.schedule.hangoutLink) {
        window.location.href = this.schedule.hangoutLink;
      } else {
        this.$q.notify({
          type: "error",
          message: "Link não encontrado.",
        });
      }
    },
    async removeSchedule() {
      await removeCrud(this.schedule.id, "specialists/schedule");
      document.location.reload(true);
    },
  },
  mounted() {
    let dateSchedule = new Date(this.schedule.dateSchedule);

    dateSchedule = new Date(dateSchedule.setHours(dateSchedule.getHours() + (dateSchedule.getTimezoneOffset()/60)))

    const actualDate = new Date();

    this.valid = actualDate > dateSchedule;

    this.scheduleDay = dateSchedule.getDate();

    this.month = dateSchedule.toLocaleDateString(undefined, {
      month: "long",
      year: "numeric",
    });

    this.specialistName = this.schedule.specialist.name;

    this.productName =
      this.schedule.product && this.schedule.product.name
        ? this.schedule.product.name
        : "Serviço não identificado";

    let hour = `0${dateSchedule.getHours()}`;
    hour = hour.substring(hour.length - 2);

    let minute = `0${dateSchedule.getMinutes()}`;
    minute = minute.substring(minute.length - 2);

    this.hour = `${hour}:${minute}`;
  },
};
</script>

<style lang="scss">
.event-schedule-delete-icon {
  cursor: pointer;
}

.event-schedule-delete-icon {
  cursor: pointer;
}
</style>
