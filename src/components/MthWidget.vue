<template>
  <div class="math-game-widget">
    <h2>Math Game</h2>
    <div class="question">
      <p>{{ num1 }} {{ operator }} {{ num2 }} = ?</p>
    </div>
    <div class="input">
      <input type="number" v-model="answer" />
      <button @click="checkAnswer">Check</button>
    </div>
    <p v-if="isCorrect" class="result correct">Correct!</p>
    <p v-else-if="isWrong" class="result wrong">Wrong! Try again.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      operator: '',
      answer: null,
      isCorrect: false,
      isWrong: false,
    };
  },
  mounted() {
    this.generateQuestion();
  },
  methods: {
    generateQuestion() {
      const operators = ['×', '÷', '^'];
      const randomOperatorIndex = Math.floor(Math.random() * operators.length);
      this.operator = operators[randomOperatorIndex];

      if (this.operator === '×') {
        this.generateMultiplicationQuestion();
      } else if (this.operator === '÷') {
        this.generateDivisionQuestion();
      } else if (this.operator === '^') {
        this.generateExponentiationQuestion();
      }
    },
    generateMultiplicationQuestion() {
      this.num1 = Math.floor(Math.random() * 10);
      this.num2 = Math.floor(Math.random() * 10);
    },
    generateDivisionQuestion() {
      const divisor = Math.floor(Math.random() * 9) + 1;
      this.num2 = Math.floor(Math.random() * 10);
      this.num1 = this.num2 * divisor;
    },
    generateExponentiationQuestion() {
      this.num1 = Math.floor(Math.random() * 5) + 1;
      this.num2 = Math.floor(Math.random() * 3) + 2;
    },
    checkAnswer() {
      if (this.operator === '×') {
        this.checkMultiplicationAnswer();
      } else if (this.operator === '÷') {
        this.checkDivisionAnswer();
      } else if (this.operator === '^') {
        this.checkExponentiationAnswer();
      }
    },
    checkMultiplicationAnswer() {
      const correctAnswer = this.num1 * this.num2;
      this.isCorrect = this.answer === correctAnswer;
      this.isWrong = !this.isCorrect;
      if (this.isCorrect) {
        this.generateQuestion();
      }
    },
    checkDivisionAnswer() {
      const correctAnswer = this.num1 / this.num2;
      this.isCorrect = this.answer === correctAnswer;
      this.isWrong = !this.isCorrect;
      if (this.isCorrect) {
        this.generateQuestion();
      }
    },
    checkExponentiationAnswer() {
      const correctAnswer = Math.pow(this.num1, this.num2);
      this.isCorrect = this.answer === correctAnswer;
      this.isWrong = !this.isCorrect;
      if (this.isCorrect) {
        this.generateQuestion();
      }
    },
  },
};
</script>

<style scoped>
.math-game-widget {
  text-align: center;
  padding: 20px;
}

.math-game-widget h2 {
  color: #333;
}

.question {
  margin-bottom: 20px;
}

.input {
  margin-bottom: 20px;
}

.result {
  margin-top: 10px;
}

.correct {
  color: green;
}

.wrong {
  color: red;
}
</style>
