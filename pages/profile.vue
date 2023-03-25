<script setup lang="ts">
definePageMeta({
  middleware: ['auth']
})
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] flex-1 p-7">
    <q-btn color="primary" @click="$router.push('/')"> home page </q-btn>
  </div>
</template>
