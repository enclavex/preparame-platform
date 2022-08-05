<template>
  <q-banner
    rounded
    :class="{
      'event-schedule': true,
      'q-ma-xs': true,
      'text-white': true,
      'bg-grey': !eventValid,
      'bg-secondary': eventValid && !lessThen1Hour,
      'bg-primary': eventValid && lessThen1Hour,
    }"
  >
    <div class="col items-start items-center">
      <div class="col">
        <div class="text-weight-regular text-left text-subtitle2">{{ scheduleDay }} de {{ month }} às {{ hour }} horas</div>
      </div>
      <div class="col items-start items-center event-schedule-info">
        <div class="event-schedule-product col items-center">
          <div class="text-subtitle2 text-weight-regular">{{ productName }}</div>
          <div class="text-caption text-weight-light">
            {{ userType === "USER" ? specialistName : schedule.user.name }}
          </div>
        </div>
        <div class="event-schedule-hour">
          <div class="text-subtitle1 text-center"></div>
        </div>
        <div class="event-schedule-hour">
          <div class="text-subtitle1 text-left">
            <q-btn
              v-if="eventValid && lessThen1Hour"
              color="white"
              class="text-caption"
              flat
              @click="goMeet()"
              >Ir para reunião</q-btn
            >
            <div v-if="!eventValid" class="text-caption" color="white">
              Evento já terminou
            </div>
          </div>
        </div>
        <div v-if="eventValid && !lessThen24Hours">
          <q-btn
            color="white"
            class="text-caption"
            flat
            @click="confirm = true"
          >
            <q-tooltip> Cancelar Agendamento </q-tooltip>
            <q-icon
              v-if="eventValid && !lessThen24Hours && userType === 'USER'"
              name="mdi-delete-outline"
              class="event-schedule-delete-icon text-h5"
            ></q-icon>
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
            @click="cancelSchedule()"
          />
          <q-btn flat label="Não" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-banner>
</template>

<script>
import { saveCrud } from "../../crud/utils/saveCrud.js";

export default {
  data() {
    return {
      scheduleDay: "",
      month: "",
      specialistName: "",
      productName: "",
      hour: "",
      eventValid: true,
      lessThen24Hours: false,
      lessThen1Hour: false,
      confirm: false,
    };
  },
  props: ["schedule", "userType"],
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
    async cancelSchedule() {
      await saveCrud(
        `specialists/schedule/${this.schedule.id}/cancel`,
        {},
        "post"
      );

      document.location.reload(true);
    },
  },
  mounted() {
    let dateSchedule = new Date(this.schedule.dateSchedule);

    dateSchedule = new Date(
      dateSchedule.setHours(
        dateSchedule.getHours() + dateSchedule.getTimezoneOffset() / 60
      )
    );

    const actualDate = new Date();

    const actualDateAddEventDuration = new Date(
      actualDate.setHours(actualDate.getHours() + 1)
    );

    this.eventValid = !(actualDateAddEventDuration > dateSchedule);

    const diffHours = Math.abs(actualDate - dateSchedule) / 36e5;

    this.lessThen24Hours = diffHours < 24;
    this.lessThen1Hour = diffHours < 1;

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
