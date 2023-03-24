<script setup lang="ts">
import { useCount } from '../composables/useFoo'
const { count, plus } = useCount()
</script>

<template>
  <header>
    <div>Header here {{ count }}</div>
    <button @click="plus">plus</button>
  </header>
</template>
