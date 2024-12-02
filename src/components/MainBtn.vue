<template>
    <div class="btn-wrapper">
        <el-button type="primary myBtn" plain>{{text}}</el-button>
    </div>
</template>
    
<script>

export default {
props: {
    text:{
        type: String,
        default: ""
    }

},

  name: "MainBtn",
};
</script>

<style scoped>
@use "@/assets/styles/main.scss" as *;

</style>
    
