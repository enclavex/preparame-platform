<template>
  <div class="responsible-demission">
    <Presentation />
    <Medias />
    <HelpEmployees />
    <Companies :showKnowMore="false"/>
    <CompaniesBeneficits />
    <EmployeesBeneficits />
    <FreeMentorship />
    <ManualDemission />
    <DemissionCourse />
  </div>
</template>

<script>
import Presentation from "./../components/site/responsibleDemission/presentation/Presentation.vue";
import Medias from "./../components/site/homePage/medias/Medias.vue";
import HelpEmployees from "./../components/site/responsibleDemission/helpEmployees/HelpEmployees.vue";
import Companies from "./../components/site/homePage/companies/Companies.vue";
import CompaniesBeneficits from "./../components/site/responsibleDemission/companiesBeneficits/CompaniesBeneficits.vue";
import EmployeesBeneficits from "./../components/site/responsibleDemission/employeesBeneficits/EmployeesBeneficits.vue";
import FreeMentorship from "./../components/site/responsibleDemission/freeMentorship/FreeMentorship.vue";
import ManualDemission from "./../components/site/responsibleDemission/manualDemission/ManualDemission.vue";
import DemissionCourse from "./../components/site/responsibleDemission/demissionCourse/DemissionCourse.vue";

export default {
  components: {
    Presentation,
    Medias,
    HelpEmployees,
    Companies,
    CompaniesBeneficits,
    EmployeesBeneficits,
    FreeMentorship,
    ManualDemission,
    DemissionCourse,
  },
};
</script>

<style></style>
