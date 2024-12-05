<template>
  <AppLayout>
    <template #title>
      <h1 class="title text-3xl font-bold color-primary">
        Quiz-constructor
      </h1>
    </template>
    <template #controls>
      <AppBtn text="Create Quiz"></AppBtn>
    </template>
    <template #inner>
      <el-table
        class="home-table-quiz"
        :data="recipe"
        style="width: 100%"
        @row-click="navigateToQuiz"
      >
        <el-table-column prop="idMeal" label="Id" />
        <el-table-column prop="strMealThumb" label="Image">
          <template #default="scope">
            <img class="img" :src="scope.row.strMealThumb" alt="" />
          </template>
        </el-table-column>
        <el-table-column prop="strMeal" label="Name" />
        <el-table-column prop="strArea" label="Area" />
        <el-table-column prop="strCategory" label="Category" />
      </el-table>
    </template>
  </AppLayout>
</template>

<script>
import AppLayout from "@/views/AppLayout.vue";
import AppBtn from "@/components/MainBtn.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuizStore } from "@/stores/quizStores";
import { generateSlug } from "@/utils/generateSlug";
import { Resipe } from "@/services";

export default {
  name: "Home",
  components: {
    AppLayout,
    AppBtn,
  },

  setup() {
    const recipe = ref([]);
    const router = useRouter();
    const quizStore = useQuizStore(); // Инициализация Pinia-хранилища

    const fetchRecipe = async () => {
      try {
        const response = await Resipe.getByName("");
        recipe.value = response.data.meals || [];
        console.log("Полученные рецепты:", recipe.value);
      } catch (error) {
        console.error("Ошибка загрузки рецепта:", error);
      }
    };

    const navigateToQuiz = (row) => {
      quizStore.setSelectedQuiz(row); // Сохраняем выбранный элемент в Pinia
      const slug = generateSlug(row.strMeal); // Генерация slug для URL
      router.push(`/quiz/${slug}`); // Переход на страницу Quiz
    };

    onMounted(fetchRecipe);

    return { recipe, navigateToQuiz };
  },
};
</script>

<style scoped>
@use "@/assets/styles/main.scss" as *;

.img {
  width: 50px;
  height: auto;
  border-radius: 4px;
}
</style>
