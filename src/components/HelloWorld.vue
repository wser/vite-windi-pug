<template lang="pug">
h1 {{ msg }}
p
  a(href="https://vitejs.dev/guide/features.html" target="_blank") Vite Documentation 
  i &nbsp;|&nbsp;
  a(href="https://v3.vuejs.org/" target="_blank") Vue 3 Documentation

button(@click="state.count++" class="button hover:text-red-500 hover:color-yellow-200 p-4") count is: {{ state.count }}

p(class="border-1 border-dashed border-yellow-300")

HelloMarkdown

p(class="border-2 border-dashed border-light-gray-500")

//- added with vite-plugin-components
HelloTailwind  
  
</template>

<script setup>
import HelloMarkdown from './README.md'
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}

</style>