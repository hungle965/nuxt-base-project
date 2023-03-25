<script setup lang="ts"></script>

<template>
  <div class="min-h-[calc(100vh-100px)] flex-1 p-7">
    <q-btn color="primary" @click="$router.push('/profile')">
      profile page
    </q-btn>
    <q-btn color="secondary" @click="$router.push('/login')">
      login page
    </q-btn>
  </div>
</template>
