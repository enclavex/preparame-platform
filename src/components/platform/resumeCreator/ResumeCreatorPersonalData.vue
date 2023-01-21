<template>
  <div class="resume-creator-personal-data row">
    <div class="resume-creator-personal-data-title col-12">Dados pessoais</div>

    <div class="col-12 row">
      <div class="col-8 q-gutter-md">
        <q-input
          id="name"
          class="q-gutter-md"
          rounded
          outlined
          v-model="name"
          color="secondary"
          name="name"
          label="Nome Completo"
          stack-label
        />
      </div>

      <div class="col-4 q-gutter-md">
        <q-input
          id="birthDate"
          class="q-gutter-md"
          rounded
          outlined
          color="secondary"
          v-model="birthDate"
          name="birthDate"
          label="Data de Nascimento"
          type="date"
          stack-label
        />
      </div>

      <div class="col-8 q-gutter-md">
        <q-input
          class="q-gutter-md"
          rounded
          outlined
          color="secondary"
          v-model="email"
          label="E-Mail"
          stack-label
        />
      </div>

      <div class="col-4 q-gutter-md">
        <q-input
          class="q-gutter-md"
          rounded
          outlined
          color="secondary"
          v-model="phone"
          label="Telefone"
          stack-label
        />
      </div>

      <div class="col-6 q-gutter-md">
        <q-input
          class="q-gutter-md"
          rounded
          outlined
          color="secondary"
          v-model="city"
          label="Cidade"
          stack-label
        />
      </div>

      <div class="col-6 q-gutter-md">
        <q-input
          class="q-gutter-md"
          rounded
          outlined
          color="secondary"
          v-model="state"
          label="Estado"
          stack-label
        />
      </div>

      <div class="col-6 q-gutter-md">
        <q-input
          class="q-gutter-md"
          rounded
          outlined
          color="secondary"
          v-model="linkedinUrl"
          label="Perfil LinkedIn"
          stack-label
        />
      </div>

      <div class="col-6 q-gutter-md">
        <q-input
          class="q-gutter-md"
          rounded
          outlined
          color="secondary"
          v-model="portfolioUrl"
          label="Perfil Portifólio"
          stack-label
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      birthDate: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      linkedinUrl: "",
      portfolioUrl: ""
    };
  },
};
</script>

<style lang="scss">
.resume-creator-personal-data {
  position: relative;
  width: 96vw;
  height: 40vh;
  margin: 0 auto 0 auto;
  background-color: white;
  top: 3vh;
  border-radius: 5px;
  padding: 15px;
  display: flex;
  flex-direction: row;
  align-content: center;
}

.resume-creator-personal-data-title {
  font-size: 2rem;
  color: $prepara-me-blue;
}
</style>
