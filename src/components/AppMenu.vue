<template>
    <div class="menu w-fit">
      <el-menu
        class="el-menu-vertical-demo"
        router
      >
        <el-menu-item index="0">
          <div class="logo w-[100px] h-auto p-2">
            <img src="https://i.imgur.com/4agXsdb.png" alt="" />
          </div>
        </el-menu-item>
        <!-- Ссылка на Home -->
        <el-menu-item :index="ROUTES_PATH.HOME"
         :class="{ active: isPathActive(ROUTES_PATH.HOME)}">
          <div class="menu-item flex flex-col items-center">
            <el-icon><CirclePlus /></el-icon>
            <span>Create new</span>
          </div>
        </el-menu-item>
        <!-- Ссылка на Categories -->
        <el-menu-item :index="ROUTES_PATH.CATEGORIES"
         :class="{ active: isPathActive(ROUTES_PATH.CATEGORIES)}">
          <div class="menu-item flex flex-col items-center">
            <el-icon><Setting /></el-icon>
            <span>Settings</span>
          </div>
        </el-menu-item>
      </el-menu>
    </div>
  </template>
  
  <script>
import { ROUTES_PATH } from "@/consts/router";
import { CirclePlus, Setting } from "@element-plus/icons-vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "AppMenu",
  setup() {
    const route = useRoute();

    const isPathActive = (path) => {
      return route.path === path;
    };

    onMounted(() => {
      isPathActive(ROUTES_PATH.HOME); // Пример вызова для проверки
    });

    return {
      ROUTES_PATH,
      isPathActive,
    };
  },
};
</script>

<style scoped>
@use "@/assets/styles/main.scss" as *;
</style>