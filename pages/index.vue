<script setup lang="ts">
onBeforeUnmount(() => {
  console.log('cai gi day')
})
</script>

<template>
  <div class="h-[calc(100vh-100px)] flex-1">
    <div>ftech index page</div>
    <button @click="$router.push('/profile')">go to profile page</button>
  </div>
</template>
