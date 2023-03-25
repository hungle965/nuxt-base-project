<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <Header />
        <div class="flex">
          <slot />
        </div>
        <Footer />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
