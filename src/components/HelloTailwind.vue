<template>
  <div 
    class="foo" 
    :class="{ 'hover:text-red-300 hover:bg-yellow-200': true}"
  >
    Hello Tailwind
  </div>
</template>

<style lang="postcss">
.foo {
  @apply rounded-full bg-pink-400 text-white px-5 p-4;
}

</style>