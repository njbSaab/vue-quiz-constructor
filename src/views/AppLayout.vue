<template>
    <div class="root flex">
            <AppMenu></AppMenu>
        <main class="flex-1">
            <header class="header flex justify-between items-center px-[40px] py-[20px]">
               <div class="title">
                    <slot name="title"
                   
                    ></slot>
               </div>
               <div class="controls">
                    <slot name="controls"></slot>
               </div>
            </header>
            <div class="inner">
                <slot name="inner"> </slot>
            </div>
        </main>
    </div>
</template>
  
<script>
import AppMenu from "@/components/AppMenu.vue";

  export default {
    name: "AppLayout", 
    components: {
        AppMenu
    }

  };
  console.log("AppLayout.vue загружен");
</script>
  
<style scoped>
  @use "@/assets/styles/main.scss" as *;
</style>