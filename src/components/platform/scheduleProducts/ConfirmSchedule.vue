<template>
  <q-dialog v-model="confirmSchedule">
    <q-card class="my-card">
      <q-card-section>
        <div class="col no-wrap items-center">
          <div class="col text-h4 ellipsis">Agendamento</div>
          <div class="col text-h6 ellipsis text-grey-7">{{ product.name }}</div>
        </div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">Informações do agendamento:</div>
        <div class="text-body2 text-grey-8">
          {{ this.dateSchedule }}
        </div>
        <div class="text-body2 text-grey-8">
          Especialista: {{ specialist.name }}
        </div>
        <br />
        <div class="text-caption text-grey-8">
          O cancelamento do agendamento pode ser feito até 24 horas antes da
          hora marcada. Após isso não poderá ser cancelado ou remarcado.
        </div>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-actions align="right">
        <q-btn
          v-close-popup
          color="primary"
          label="Agendar"
          @click="scheduleConfirmation"
        ></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "../../../global.js";
export default {
  data() {
    return {
      confirmSchedule: false,
      daySchedule: {},
      hourSchedule: {},
      product: {},
      dateSchedule: "",
      specialist: {},
    };
  },
  props: ["confirmScheduleFunctions"],
  mounted() {
    this.confirmScheduleFunctions.$on(
      "showScheduleConfirmDialog",
      this.showScheduleConfirmDialog
    );
  },
  methods: {
    showScheduleConfirmDialog: function (
      daySchedule,
      hourSchedule,
      specialist,
      product
    ) {
      this.confirmSchedule = true;
      this.daySchedule = daySchedule;
      this.hourSchedule = hourSchedule;
      this.specialist = specialist;
      this.product = product;

      this.dateSchedule = `Dia ${this.hourSchedule.dateSchedule.toLocaleDateString(
        undefined,
        { day: "numeric", month: "long", year: "numeric" }
      )} ás ${this.hourSchedule.dateSchedule.toLocaleTimeString(undefined, {
        hour: "numeric",
        minute: "numeric",
      })} horas.`;
    },
    scheduleConfirmation: async function () {
      await axios
        .put(`${baseApiUrl}/specialists/dateSchedule/${this.hourSchedule.id}`)
        .then(() => {
          this.$q.notify({
            type: "positive",
            message: "Agendado com sucesso",
            timeout: 1500,
            position: "center",
          });
          setTimeout(() => {
            this.$router.push({ path: "/platform" });
          }, 2000);
        })
        .catch(showError);
    },
  },
};
</script>

<style></style>
