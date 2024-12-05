import { defineStore } from "pinia";

export const useQuizStore = defineStore("quizStore", {
  state: () => ({
    selectedQuiz: null, // Хранение выбранного рецепта
  }),
  actions: {
    setSelectedQuiz(recipe) {
      this.selectedQuiz = recipe;
    },
    clearSelectedQuiz() {
      this.selectedQuiz = null;
    },
  },
});
