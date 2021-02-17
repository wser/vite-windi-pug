<template lang="pug">
img(alt="Vue logo" src="./assets/logo-min.png")
HelloWorld msg="Hello Vue 3 + Vite + PUG"
p Hi
b {{pjson.description}}
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>