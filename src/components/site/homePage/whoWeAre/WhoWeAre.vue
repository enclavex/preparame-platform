<template>
  <div class="who-we-are">
    <div class="who-we-are-container column">
      <div class="who-we-are-title">
        <h1>Quem <b>Somos</b></h1>
      </div>
      <div class="who-we-are-employees-container">
        <WhoWeAreEmployee v-for="employee in employees" :key="employee.name" :employee="employee"/>
      </div>
    </div>
  </div>
</template>

<script>
import WhoWeAreEmployee from "./WhoWeAreEmployee.vue";

export default {
  components: {
    WhoWeAreEmployee,
  },
  data() {
    return {
      employees: [
        {
          name: "Lucy Nunes",
          function: "Fundadora",
          img: "lucy"
        },
        {
          name: "Leandro de Andria",
          function: "Especialista em carreira e recrutador",
          img: "leandro"
        },
        {
          name: "Mayara Breder",
          function: "Especialista em carreira e recrutadora",
          img: "mayara"
        },
        {
          name: "Leticia Nunes",
          function: "Psicologa",
          img: "leticia"
        },
        {
          name: "Barbara Cardozo",
          function: "Psicologa",
          img: "barbara"
        },
        {
          name: "Lays Jasper",
          function: "Psicologa",
          img: "lays"
        },
      ]
    }
  },
};
</script>

<style lang="scss">
.who-we-are {
  display: flex;
  flex-direction: row;
}

.who-we-are-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.who-we-are-title {
  background: linear-gradient(272.04deg, #15AA7C 0%, #1A27B7 102.19%);
}

.who-we-are-title h1 {
  font-family: "nunito", sans-serif;
  font-weight: 400;
  margin: 5vh 5vw;
  color: #fff;
  text-align: left;
  font-size: 3rem;
}

.who-we-are-flowers img {
  height: 200px;
}

.who-we-are-employees-container {
  margin: 10vh auto;
  display: flex;
  gap: 1vh 5vw;
  max-width: 70vw;
  justify-content: space-around;
  flex-wrap: wrap;
}

@media (max-width: 600px) {
  .who-we-are {
    flex-direction: column;
  }

  .who-we-are-flowers {
    display: flex;
  }

  .who-we-are-flowers img {
    height: 200px;
    margin: 0 auto;
  }

  .who-we-are-title h1 {
    margin: 1vh 5vw;
    text-align: center;
    font-size: 2rem;
    max-width: 100vw;
  }

  .who-we-are-employees-container {
    margin: 20px auto;
  }
}
</style>
