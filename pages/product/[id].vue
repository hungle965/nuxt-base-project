<script setup lang="ts">
const route = useRoute()
const { data, error } = useFetch(`/api/product/${route.params.id}`)
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] flex-1 p-7">
    <div>
      {{ data?.id }}
      {{ data?.name }}
    </div>
    <div>
      {{ error?.response }}
    </div>
  </div>
</template>
