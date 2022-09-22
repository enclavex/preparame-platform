<template>
  <div class="column">
    <div
      :class="{
        'nps-survey-question': true,
        'text-center': true,
        'q-mt-lg': true,
        'nps-survey-question-answered': question.answer > -1,
        'nps-survey-answered':
          question.answer > -1 || focusedQuestion !== question.index,
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
          'nps-survey-answer-selected': optionIndex === question.answerIndex,
          'nps-survey-answered':
            question.answer > -1 || focusedQuestion !== question.index,
        }"
        >{{ option }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["question", "focusedQuestion"],
  methods: {
    selectAnswer: function (question, optionIndex) {
      this.$parent.$parent.$parent.selectAnswer(question, optionIndex);
    },
  },
};
</script>

<style lang="scss">
.nps-survey-question {
  font-size: 1.3rem;
  font-weight: 700;
  align-items: center;
  color: $text;
  width: 100% !important;
}

.nps-survey-question.nps-survey-answered {
  color: $text-transparent;
  font-weight: 400;
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

.nps-survey-answer:nth-child(9) {
  color: rgb(0, 255, 0);
  border: 2px solid rgb(81, 255, 0);
}

.nps-survey-answer:nth-child(8) {
  color: rgb(119, 255, 0);
  border: 2px solid rgb(119, 255, 0);
}

.nps-survey-answer:nth-child(7) {
  color: rgb(170, 255, 0);
  border: 2px solid rgb(170, 255, 0);
}

.nps-survey-answer:nth-child(6) {
  color: rgb(208, 255, 0);
  border: 2px solid rgb(208, 255, 0);
}

.nps-survey-answer:nth-child(5) {
  color: rgb(255, 225, 0);
  border: 2px solid rgb(255, 225, 0);
}

.nps-survey-answer:nth-child(4) {
  color: rgb(255, 191, 0);
  border: 2px solid rgb(255, 191, 0);
}

.nps-survey-answer:nth-child(3) {
  color: rgb(255, 140, 0);
  border: 2px solid rgb(255, 140, 0);
}

.nps-survey-answer:nth-child(2) {
  color: rgb(255, 94, 0);
  border: 2px solid rgb(255, 94, 0);
}

.nps-survey-answer:nth-child(1) {
  color: rgb(255, 0, 0);
  border: 2px solid rgb(255, 0, 0);
}

.nps-survey-answer:nth-last-child(-n + 1) {
  color: rgb(0, 255, 0);
  border: 2px solid rgb(30, 255, 0);
}

.nps-survey-answer.nps-survey-answered:nth-child(9):not(.nps-survey-answer-selected) {
  color: rgb(125, 254, 125);
  border: 2px solid rgb(125, 254, 125);
}

.nps-survey-answer.nps-survey-answered:nth-child(8):not(.nps-survey-answer-selected) {
  color: rgb(187, 255, 128);
  border: 2px solid rgb(187, 255, 128);
}

.nps-survey-answer.nps-survey-answered:nth-child(7):not(.nps-survey-answer-selected) {
  color: rgb(211, 251, 130);
  border: 2px solid rgb(211, 251, 130);
}

.nps-survey-answer.nps-survey-answered:nth-child(6):not(.nps-survey-answer-selected) {
  color: rgb(230, 251, 133);
  border: 2px solid rgb(230, 251, 133);
}

.nps-survey-answer.nps-survey-answered:nth-child(5):not(.nps-survey-answer-selected) {
  color: rgb(251, 238, 141);
  border: 2px solid rgb(251, 238, 141);
}

.nps-survey-answer.nps-survey-answered:nth-child(4):not(.nps-survey-answer-selected) {
  color: rgb(249, 220, 135);
  border: 2px solid rgb(249, 220, 135);
}

.nps-survey-answer.nps-survey-answered:nth-child(3):not(.nps-survey-answer-selected) {
  color: rgb(249, 200, 140);
  border: 2px solid rgb(249, 200, 140);
}

.nps-survey-answer.nps-survey-answered:nth-child(2):not(.nps-survey-answer-selected) {
  color: rgb(250, 171, 126);
  border: 2px solid rgb(250, 171, 126);
}

.nps-survey-answer.nps-survey-answered:nth-child(1):not(.nps-survey-answer-selected) {
  border: 2px solid rgb(255, 142, 142);
  color: rgb(255, 142, 142);
}

.nps-survey-answer.nps-survey-answered:nth-last-child(-n
    + 1):not(.nps-survey-answer-selected) {
  color: rgb(135, 255, 135);
  border: 2px solid rgb(135, 255, 135);
}

.nps-survey-answer-selected {
  background: $primary;
}

.nps-survey-answer-container {
  width: 100% !important;
  justify-content: center;
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
