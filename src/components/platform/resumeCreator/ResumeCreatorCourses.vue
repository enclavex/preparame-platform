<template>
  <div class="resume-creator-addings row">
    <div class="resume-creator-addings-title col-12">Cursos</div>
    <div class="col-12 row">
      <div class="col-8 q-gutter-md">
        <q-input
          id="course"
          class="q-gutter-md"
          rounded
          outlined
          v-model="course"
          color="secondary"
          name="course"
          label="Curso"
          stack-label
        />
      </div>
      <div class="col-4 q-gutter-md">
        <q-input
          id="hours"
          class="q-gutter-md"
          rounded
          outlined
          v-model="hours"
          color="secondary"
          name="hours"
          label="Carga horária"
          stack-label
          mask="###"
        />
      </div>
      <div class="col-12 q-gutter-md">
        <q-input
          id="instituition"
          class="q-gutter-md"
          rounded
          outlined
          v-model="instituition"
          color="secondary"
          name="instituition"
          label="Instituição"
          stack-label
        />
      </div>
    </div>
    <div class="row q-mt-lg col-12 justify-between">
      <q-space></q-space>
      <q-btn
        label="Adicionar"
        color="primary"
        v-close-popup
        @click="addNew()"
      />
    </div>
    <div class="resume-creator-addings-content col-12 q-mt-lg">
      <q-banner
        v-for="item in addings"
        :key="item.id"
        inline-actions
        class="text-white bg-secondary q-ma-sm"
        rounded
      >
        <div class="row">
          <div class="resume-creator-addings-content-container col-4">
            <div class="resume-creator-addings-content-label">Curso</div>
            <div class="resume-creator-addings-content-item">
              {{ item.course }}
            </div>
          </div>
          <div class="resume-creator-addings-content-container col-2">
            <div class="resume-creator-addings-content-label">
              Carga horária
            </div>
            <div class="resume-creator-addings-content-item">
              {{ item.hours }}
            </div>
          </div>
          <div class="resume-creator-addings-content-container col-4">
            <div class="resume-creator-addings-content-label">Instituição</div>
            <div class="resume-creator-addings-content-item">
              {{ item.instituition }}
            </div>
          </div>
        </div>
        <template v-slot:action>
          <q-btn flat color="white" label="Excluir" @click="remove(item.id)" />
        </template>
      </q-banner>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addings: [],
      course: "",
      hours: null,
      instituition: "",
    };
  },
  methods: {
    remove(id) {
      this.addings = this.addings.filter((item) => item.id != id);
    },
    addNew() {
      if (this.course == "") {
        this.$q.notify({
          type: "error",
          message: "Curso está em branco",
        });

        return;
      }

      if (this.instituition == "") {
        this.$q.notify({
          type: "error",
          message: "Instituição está em branco",
        });

        return;
      }

      if (!this.hours > 0) {
        this.$q.notify({
          type: "error",
          message: "Carga horária está diferente do esperado",
        });

        return;
      }

      this.addings.push({
        id: Math.floor(Math.random() * 100),
        course: this.course,
        hours: this.hours,
        instituition: this.instituition,
      });

      this.course = "";
      this.hours = null;
      this.instituition = "";
    },
  },
};
</script>

<style lang="scss">
.resume-creator-addings {
  position: relative;
  width: 96vw;
  height: 50vh;
  margin: 0 auto 0 auto;
  background-color: white;
  top: 3vh;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-content: center;
}

.resume-creator-addings-title {
  font-size: 2rem;
  color: $prepara-me-blue;
}

.resume-creator-addings-content-label {
  font-size: 0.8rem;
}
</style>
