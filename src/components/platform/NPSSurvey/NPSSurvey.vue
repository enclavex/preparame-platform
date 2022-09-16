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
            class="nps-survey-question-container column"
            :id="question.index"
          >
            <div class="column">
              <div
                :class="{
                  'nps-survey-question': true,
                  'text-center': true,
                  'q-mt-lg': true,
                  'nps-survey-question-answered': question.answer > -1,
                }"
              >
                {{ `${question.index}. ${question.question}` }}
              </div>
              <div class="nps-survey-answer-container q-mb-lg row">
                <span
                  v-for="(option, optionIndex) in question.options"
                  :key="optionIndex"
                  @click="selectAnswer(question, optionIndex)"
                  :class="{
                    'nps-survey-answer': true,
                    'nps-survey-answer-selected':
                      optionIndex === question.answer,
                    'nps-survey-answered':
                      question.answer > -1 ||
                      focusedQuestion !== question.index,
                  }"
                  >{{ option }}</span
                >
              </div>
            </div>
            <q-separator></q-separator>
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

      window.scrollTo(0, 0);
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

      window.scrollTo(0, 0);
    },
    selectAnswer: function (question, optionIndex) {
      if (question.answer === -1) {
        this.focusedQuestion = question.index + 1;
      }

      question.answer = optionIndex;

      const element = document.getElementById(`${question.index + 1}`);

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    },
    saveSurvey: async function () {
      const userUpdate = {
        laborRisk: this.laborRisk,
        surveyAnswered: true,
        NPSSurvey: this.questions[0].answer,
      };

      const userUpdated = await saveCrud("users", userUpdate, "put");

      if (userUpdated.status == 204) {
        localStorage.setItem("surveyAnswered", "true");

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
      focusedQuestion: 1,
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
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "NPS",
        },
        {
          index: 2,
          question:
            "O quanto você se sentia respeitado na empresa, de forma geral?",
          answer: -1,
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 3,
          question: "O quanto você se sentia respeitado pelos seus líderes?",
          answer: -1,
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 4,
          question:
            "O quanto você gostaria de voltar a trabalhar nesta empresa no futuro?",
          answer: -1,
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 5,
          question:
            "O quanto você achou que seu processo de demissão foi respeitoso?",
          answer: -1,
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 6,
          question: "O quanto você se sentia seguro fisicamente na empresa?",
          answer: -1,
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 7,
          question: "O quanto você se sentia seguro emocionalmente na empresa?",
          answer: -1,
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          type: "grade",
          category: "laborRisk",
        },
        {
          index: 8,
          question:
            "O quanto você gostava do pacote de benefícios e remuneração da empresa?",
          answer: -1,
          options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
  justify-content: center;
  align-content: center;
  width: 80%;
  margin: 0 auto;
}

.nps-survey-question {
  font-size: 1.3rem;
  align-items: center;
  color: $text;
  width: 100% !important;
}

.nps-survey-question.nps-survey-question-answered {
  color: $text-transparent;
}

.nps-survey-answer {
  font-size: 1.3rem;
  padding: 10px;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 2px;
  border-radius: 2vw;
  height: 4vw;
  width: 4vw;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid $secondary;
  color: $secondary;
}

.nps-survey-answer-selected {
  background: $primary;
}

.nps-survey-answer-container {
  width: 100% !important;
  justify-content: center;
}

.nps-survey-answer.nps-survey-answered {
  border: 2px solid $secondary-transparent;
  color: $secondary-transparent;
}

.nps-survey-answer-selected.nps-survey-answered {
  background: $primary-transparent;
  color: $text-white;
  border: 2px solid $primary-transparent;
}

@media (orientation: portrait) {
  .nps-survey-question-container {
    width: 100%;
  }

  .nps-survey-answer {
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-top: 5px;
  }
}
</style>
