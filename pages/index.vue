<script setup lang="ts">
const { data, error } = useFetch('/api/products')
</script>

<template>
  <div class="min-h-[calc(100vh-100px)] flex-1 p-7">
    <el-button color="primary" @click="$router.push('/profile')">
      profile page
    </el-button>
    <el-button color="secondary" @click="$router.push('/login')">
      login page
    </el-button>
    <div class="flex flex-col gap-2">
      <div v-for="item in data?.items" :key="item.id">
        <div
          class="cursor-pointer bg-slate-300"
          @click="$router.push(`/product/${item.id}`)"
        >
          <span class="mr-10">
            {{ item.name }}
          </span>

          <span> $ {{ item.price }} </span>
        </div>
      </div>
      <div>
        {{ error }}
      </div>
    </div>
  </div>
</template>
