<template lang="pug">
img(alt="Vue logo" src="./assets/logo-min.png")
p(class="border-1 border-dashed border-green-500")

div {{ pjson.description }}

p(class="border-1 border-dashed border-light-blue-500")
HelloWorld msg="Hello Vue 3 + Vite + PUG"
</template>

<script setup>
import pjson from '../package.json'

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>