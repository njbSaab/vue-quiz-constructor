<script>
import AppLayout from "@/views/AppLayout.vue";
import AppBtn from "@/components/MainBtn.vue";
import { useQuizStore } from "@/stores/quizStores";
import { useRouter } from "vue-router";
import { onMounted, reactive } from "vue";
import { getById } from "@/services/Resipe";

export default {
  name: "Quiz",
  components: {
    AppLayout,
    AppBtn,
  },

  setup() {
    const quizStore = useQuizStore(); // Доступ к Pinia
    const router = useRouter();
    const selectedQuiz = quizStore.selectedQuiz;

    const editableRecipe = reactive({}); // Объект для редактирования

    // Проверяем, если выбранный рецепт не найден, возвращаем на главную
    if (!selectedQuiz) {
      router.push("/");
      return;
    }

    // Получаем данные рецепта
    const fetchRecipeById = async () => {
      try {
        const response = await getById(selectedQuiz.idMeal);
        const recipe = response.data.meals[0]; // Первый элемент массива
        Object.assign(editableRecipe, recipe); // Копируем данные в реактивный объект
      } catch (error) {
        console.error("Ошибка загрузки рецепта:", error);
      }
    };

    // Удалить поле по ключу
    const removeField = (key) => {
      delete editableRecipe[key];
    };

    // Добавить новое поле
    const addField = () => {
      const newKey = `newField${Object.keys(editableRecipe).length + 1}`; // Генерация уникального ключа
      editableRecipe[newKey] = ""; // Добавление нового ключа с пустым значением
    };

    onMounted(fetchRecipeById); // Загружаем рецепт при монтировании

    return { editableRecipe, selectedQuiz, removeField, addField };
  },
};
</script>

<template>
  <AppLayout>
    <template #title>
      <h1 class="title text-3xl font-bold color-primary">
        Quiz: {{ selectedQuiz?.strMeal }}
      </h1>
    </template>
    <template #controls>
      <AppBtn text="Save Quiz"></AppBtn>
    </template>
    <template #inner>
      <div class="quiz-form">
        <!-- Перебираем поля рецепта -->
        <div
          v-for="(value, key) in editableRecipe"
          :key="key"
          class="field flex items-center my-2 gap-2"
        >
          <span class="field-label font-bold mr-4" style="width: 150px;">
            {{ key }}
          </span>
          <el-input
            v-model="editableRecipe[key]"
            :placeholder="`Enter ${key}`"
          />
          <div class="controll controll-removed flex items-center my-btn-dangger" @click="removeField(key)">
            <el-icon><Delete /></el-icon>
          </div>
        </div>
        <!-- Кнопка добавления нового поля -->
        <div class="controll controll-added flex items-center justify-center mx-2 my-4" @click="addField">
          <button class="my-btn-accent text-center">
            <el-icon><CirclePlus /></el-icon>
            <span class="ml-2">Add Field</span>
          </button>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style scoped>
.quiz-form {
  display: flex;
  flex-direction: column;
  padding: 0 40px;
}
.field {
  display: flex;
  align-items: center;
}
.field-label {
  min-width: 150px;
}
</style>