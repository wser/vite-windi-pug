<template lang="pug">
h1 {{ msg }}

p
  a(href="https://vitejs.dev/guide/features.html" target="_blank") Vite Documentation 
  i &nbsp;|&nbsp;
  a(href="https://v3.vuejs.org/" target="_blank") Vue 3 Documentation

button(@click="state.count++" class="button hover:text-red-500 hover:color-yellow-200") count is: {{ state.count }}

p Edit&nbsp;
  code components/HelloWorld.vue&nbsp;
  to test hot module replacement.

HelloMarkdown
  
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