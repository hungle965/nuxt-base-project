<script lang="ts" setup></script>
<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <header class="full-height">
          <div>ftech header</div>
          <q-btn color="secondary">123</q-btn>
        </header>
        <slot />
        <footer>ftech footer</footer>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
