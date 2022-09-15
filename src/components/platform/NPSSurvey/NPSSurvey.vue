<template>
  <div class="nps-survey">
    <q-page>
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      <div v-if="surveyAnswered" class="nps-survey-answered q-ma-md text-white">
        <q-card>
          <q-card-section class="bg-negative">
            Pesquisa já respondida. Não é possível responde-la novamente.
          </q-card-section>
        </q-card>
      </div>
      <q-card v-else-if="page === 1" class="schedule q-ma-md">
        <q-card-section>
          <div class="column no-wrap">
            <div class="col q-ml-md q-mt-md text-h5 ellipsis">
              Pesquisa de Satisfação
            </div>
            <div class="col q-ml-md q-mt-md text-h6 ellipsis">
              Selecione um valor para cada pergunta.
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <div
            v-for="(question, questionIndex) in questions"
            :key="questionIndex"
            class="nps-survey-question-container col-12 row"
          >
            <div class="nps-survey-question col-8">
              {{ `${question.index}. ${question.question}` }}
            </div>
            <div class="nps-survey-answer-container col-4 row">
              <span
                v-for="(option, optionIndex) in question.options"
                :key="optionIndex"
                @click="selectAnswer(question, optionIndex)"
                :class="{
                  'nps-survey-answer': true,
                  'col-1': true,
                  'nps-survey-answer-selected': optionIndex === question.answer,
                }"
                >{{ option }}</span
              >
            </div>
          </div>
          <br />
          <q-btn
            label="Continuar"
            color="primary"
            class="self-center"
            size="20px"
            @click="goFeelingsMap()"
          ></q-btn>
        </q-card-section>
      </q-card>
      <q-card v-if="page === 2" class="schedule q-ma-md">
        <q-card-section>
          <div class="column no-wrap">
            <div class="col q-ml-md q-mt-md text-h5 ellipsis">
              Mapa de Sentimentos | Como você se sente?
            </div>
            <div class="col q-ml-md q-mt-md text-h6 ellipsis">
              Selecione um ou mais itens para representar a forma como você se
              sente atualmente referente a sua última empresa.
            </div>
          </div>
        </q-card-section>
        <q-separator />
        <q-card-section class="column">
          <div
            v-for="(feeling, feelingIndex) in feelings"
            :key="feelingIndex"
            class="nps-survey-map-feelings-container col-12 row"
          >
            <q-checkbox v-model="feeling.checked" :label="feeling.feeling" />
          </div>
          <br />
          <div class="row">
            <q-space></q-space>
            <q-btn
              label="Voltar"
              color="primary"
              class="self-center"
              size="20px"
              @click="goNPSSurvey()"
            ></q-btn>
            <q-btn
              label="Finalizar"
              color="secondary"
              class="self-center q-ml-md"
              size="20px"
              @click="finishSurvey()"
            ></q-btn>
            <q-space></q-space>
          </div>
        </q-card-section>
      </q-card>
      <q-dialog v-model="showConfirmEndSurvey" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <span class="q-ml-sm"
              >Ao confirmar a finalização da pesquisa, não poderá mais
              repeti-la. <br /><br />
              Deseja mesmo continuar?</span
            >
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Voltar" color="negative" v-close-popup />
            <q-btn
              label="Finalizar"
              color="primary"
              v-close-popup
              @click="saveSurvey()"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-page>
  </div>
</template>

<script>
import { saveCrud } from "./../../general/crud/utils/saveCrud.js";
import Breadcrumbs from "../../general/Breacrumbs.vue";

export default {
  components: {
    Breadcrumbs,
  },
  methods: {
    goNPSSurvey: function () {
      this.page--;
    },
    goFeelingsMap: function () {
      const questionsNotAnswered = this.questions.filter((question) => {
        return question.answer === -1;
      });

      if (questionsNotAnswered.length > 0) {
        this.$q.notify({
          type: "error",
          message: "É necessário responder a todas as perguntas.",
        });
      } else {
        this.page++;
      }
    },
    selectAnswer: function (question, optionIndex) {
      question.answer = optionIndex;
    },
    saveSurvey: async function () {
      const userUpdate = {
        laborRisk: this.laborRisk,
        surveyAnswered: true,
        NPSSurvey: this.questions[0].answer,
      };

      const userUpdated = await saveCrud("users", userUpdate, "put");

      if (userUpdated.status == 204) {
        localStorage.setItem('surveyAnswered', 'true');

        this.$router.push("/platform");

        this.$q.notify({
          type: "success",
          message: "Pesquisa respondida com sucesso.",
        });
      }
    },
    finishSurvey: function () {
      const feelingsChecked = this.feelings.filter((feeling) => {
        return feeling.checked;
      });

      if (feelingsChecked.length == 0) {
        this.$q.notify({
          type: "error",
          message: "É necessário selecionar ao menos um sentimento.",
        });
      } else {
        var totalLaborRiskQuestion = 0;

        let laborRiskQuestions = this.questions.filter((question) => {
          return question.category === "laborRisk";
        });

        this.feelings.forEach((feeling) => {
          if (feeling.laborRiskCheck && feeling.checked) {
            laborRiskQuestions.push({
              question: feeling.feeling,
              answer: 0,
            });
          }
        });

        laborRiskQuestions.forEach((question) => {
          if (question.answer >= 0) {
            if (question.type == "YesNo") {
              if (question.answer == "Sim") {
                totalLaborRiskQuestion += 10;
              } else {
                totalLaborRiskQuestion += 0;
              }
            } else {
              totalLaborRiskQuestion += question.answer;
            }
          }
        });

        this.laborRisk = totalLaborRiskQuestion / laborRiskQuestions.length;

        this.showConfirmEndSurvey = true;
      }
    },
  },
  data() {
    return {
      page: 1,
      surveyAnswered: false,
      breadcrumbs: [
        {
          title: "Pesquisa",
          to: "",
        },
      ],
      showConfirmEndSurvey: false,
      laborRisk: 0,
      feelings: [
        {
          feeling: "Alíviado(a). Já queria sair da empresa.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Surpreso(a). Não esperava pela demissão.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Injustiçado(a). Minha demissão foi injusta.",
          checked: false,
          laborRiskCheck: true,
        },
        {
          feeling: "Bravo(a). Não concordo em como a demissão aconteceu.",
          checked: false,
          laborRiskCheck: true,
        },
        {
          feeling: "Desesperado(a). Preciso me recolocar urgente.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling:
            "Inseguro(a). Estou com a autoestima abalada com a demissão.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Inseguro(a). Não sei quais os passos para me recolocar.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Triste. Gostava muito do meu trabalho.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Triste. Gostava muito da empresa.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Triste. Gostava muito da minha equipe de trabalho.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Indiferente. Nem feliz e nem triste.",
          checked: false,
          laborRiskCheck: false,
        },
        {
          feeling: "Indiferente. Ainda tentando entender tudo que aconteceu.",
          checked: false,
          laborRiskCheck: false,
        },
      ],
      questions: [
        {
          index: 1,
          question:
            "O quanto você recomenda a empresa para seus amigos e familiares trabalharem?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "NPS",
        },
        {
          index: 2,
          question:
            "O quanto você se sentia respeitado na empresa, de forma geral?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 3,
          question: "O quanto você se sentia respeitado pelos seus líderes?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 4,
          question:
            "O quanto você gostaria de voltar a trabalhar nesta empresa no futuro?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 5,
          question:
            "O quanto você achou que seu processo de demissão foi respeitoso?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 6,
          question: "O quanto você se sentia seguro fisicamente na empresa?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 7,
          question: "O quanto você se sentia seguro emocionalmente na empresa?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 8,
          question:
            "O quanto você gostava do pacote de benefícios e remuneração da empresa?",
          answer: -1,
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 9,
          question:
            "Os cálculos da rescisão estão corretos? (abrir por cálculo? Ex: horas extras, insalubridade, FGTS, férias, etc)",
          answer: -1,
          options: ["Sim", "Não"],
          type: "YesNo",
          category: "laborRisk",
        },
      ],
    };
  },
  mounted() {
    this.surveyAnswered =
      localStorage.getItem("surveyAnswered") == "true" ? true : false;
  },
};
</script>

<style lang="scss">
.nps-survey {
  height: 100%;
}

.nps-survey-question-container {
  height: 6vh !important;
  justify-content: center;
  align-content: center;
}

.nps-survey-question {
  font-size: 1.3rem;
  display: flex;
  align-items: center;
}

.nps-survey-answer {
  font-size: 1.3rem;
  padding: 10px;
  color: $text-grey;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: $secondary;
  color: $text-white;
}

.nps-survey-answer-selected {
  background: $positive;
}
</style>
