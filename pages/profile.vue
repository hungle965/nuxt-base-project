<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] flex-1 p-7">
    <el-button @click="$router.push('/')">home page</el-button>
  </div>
</template>
