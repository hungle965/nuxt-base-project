<template>
  <div class="p-7">
    <div class="sticky top-7 w-[200px] bg-[#2D2D2D] rounded-[20px] p-5">
      <div
        v-for="(_, i) in Array(10)"
        class="p-2 text-[#fff] cursor-pointer hover:bg-slate-800 rounded select-none"
      >
        item {{ i }}
      </div>
    </div>
  </div>
</template>
