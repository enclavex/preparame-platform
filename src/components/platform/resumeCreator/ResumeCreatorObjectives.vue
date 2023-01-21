<template>
  <div class="resume-creator-objectives row">
    <div class="resume-creator-objectives-title col-12">Objetivos</div>

    <div class="col-12 row">
      <div class="col-12 q-gutter-md">
        <q-input
          id="objectives"
          class="q-gutter-md"
          rounded
          outlined
          v-model="objectives"
          name="objectives"
          type="textarea"
          color="secondary"
        />
      </div>
    </div>
    <div class="resume-creator-objectives-title col-12">Resumo Profissional</div>
    <div class="col-12 row">
      <div class="col-12 q-gutter-md">
        <q-input
          id="professionalResume"
          class="q-gutter-md"
          rounded
          outlined
          v-model="professionalResume"
          name="professionalResume"
          type="textarea"
          color="secondary"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objectives: "",
      professionalResume: "",
    };
  },
};
</script>

<style lang="scss">
.resume-creator-objectives {
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

.resume-creator-objectives-title {
  font-size: 2rem;
  color: $prepara-me-blue;
}
</style>
