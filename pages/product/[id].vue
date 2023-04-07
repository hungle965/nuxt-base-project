<script setup lang="ts">
const route = useRoute()
const { data, error } = useFetch(`/api/product/${route.params.id}`)
watch(error, () => {
  console.log(error.value?.response)
})
onMounted(() => {
  console.log(error.value?.response)
})
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
