
<template>
    <AppLayout>
        <template #title>
            <h1 class="title text-3xl font-bold color-primary">
                Quiz-contsructor
            </h1>
        </template>
        <template #controls>
            <AppBtn text="Create Quiz"></AppBtn>
        </template>
        <template #inner>
                <h2>{{ recipe }}</h2>  
        </template>
    </AppLayout>
</template>
    
<script>
import AppLayout from "@/views/AppLayout.vue";
import AppBtn from "@/components/MainBtn.vue";
import { ref, onMounted } from "vue";
import { Resipe } from "@/services";

export default {
  name: "Home",
  components: {
    AppLayout,
    AppBtn,
  },

  //fetching data
  setup() {
    const recipe = ref(null);

    const fetchRecipe = async () => {
      try {
        recipe.value = await Resipe.getByName('');
        console.log("Полученный рецепт:", recipe.value);
      } catch (error) {
        console.error("Ошибка загрузки рецепта:", error);
      }
    };

    onMounted(fetchRecipe);

    return { recipe };
  },
};
</script>

<style scoped>
@use "@/assets/styles/main.scss" as *;

</style>
    