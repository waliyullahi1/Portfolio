<template>
    <div id="light-up-div" class="w-full h-screen">
      Hover over me!
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  let x = ref(0);
  let y = ref(0);
  
  let update = (e) => {
    x.value = e.pageX - e.target.offsetLeft;
    y.value = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', `${x.value}px`);
    e.target.style.setProperty('--y', `${y.value}px`);
  }
  
  onMounted(() => {
    const el = document.getElementById('light-up-div');
    el.addEventListener('mousemove', update);
  });
  
  onUnmounted(() => {
    const el = document.getElementById('light-up-div');
    el.removeEventListener('mousemove', update);
  });
  </script>
  
  <style scoped>
  #light-up-div {
    background: radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,1) 10%, rgba(255,255,255,0) 30%);
    --x: 50%;
    --y: 50%;
  }
  </style>
  