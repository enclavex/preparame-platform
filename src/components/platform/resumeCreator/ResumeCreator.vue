<template>
  <div class="resume-creator">
    <Breadcrumbs :breadcrumbs="breadcrumbs" />
    <ResumeCreatorPersonalData v-show="stepResume == 0"/>
    <ResumeCreatorObjectives v-show="stepResume == 1"/>
    <ResumeCreatorEducation v-show="stepResume == 2"/>
    <ResumeCreatorCourses v-show="stepResume == 3"/>
    <div class="row q-mt-lg justify-between">
      <q-btn
        v-if="stepResume > 0"
        outline
        label="Voltar"
        color="secondary"
        v-close-popup
        @click="backStep()"
        :class="{ 'resume-creator-btn': true }"
      />
      <q-space></q-space>
      <q-btn
        v-if="stepResume < 3"
        label="Próximo passo"
        color="secondary"
        v-close-popup
        @click="goStep()"
        :class="{ 'resume-creator-btn': true }"
      />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../../general/Breacrumbs.vue";
import ResumeCreatorPersonalData from "./ResumeCreatorPersonalData.vue";
import ResumeCreatorObjectives from "./ResumeCreatorObjectives.vue";
import ResumeCreatorEducation from "./ResumeCreatorEducation.vue";
import ResumeCreatorCourses from "./ResumeCreatorCourses.vue";

export default {
  data() {
    return {
      mobile: false,
      breadcrumbs: [
        {
          title: "Criador de Currículos",
          to: "",
        },
      ],
      stepResume: 0,
      personalData: {}
    };
  },
  components: {
    Breadcrumbs,
    ResumeCreatorPersonalData,
    ResumeCreatorObjectives,
    ResumeCreatorEducation,
    ResumeCreatorCourses
  },
  mounted() {
    this.mobile = window.mobileAndTabletCheck();
  },
  methods: {
    goStep() {
      this.stepResume ++

      console.log(this.stepResume)
    },
    backStep() {
      this.stepResume --
    }
  },
};
</script>

<style lang=scss>
.resume-creator {
  height: 95vh;
}

.resume-creator-btn {
  margin-top: 2vh;
  margin-left: 2vw;
  margin-right: 2vw;
  height: 50px;
  width: 250px;
  background-color: $prepara-me-blue;
  border-radius: 5px;
  color: $text-white;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
