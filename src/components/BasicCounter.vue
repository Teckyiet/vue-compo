<script setup>
import { ref } from "vue";

const counter = ref(0);

const increment = ({ step = 1 }) => {
  counter.value += step
};
</script>

<template>
  <div class="">
    <h1 class="my-8 text-center text-5xl font-bold text-purple-800">My Basic Counter</h1>
    <div class="flex gap-4 justify-center">
      <button class="btn-primary">-</button>
      <div class="counter-display p-4 text-white text-3xl">{{ counter }}</div>
      <button @click="increment({step: 3})" class="btn-primary">+</button>
    </div>
  </div>
</template>

<style scoped lang="less"></style>