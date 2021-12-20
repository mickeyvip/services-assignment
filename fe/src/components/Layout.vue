<template>
  <div class="flex-1 flex flex-col">
    <h1 v-if="title">{{ title }}</h1>
    <hr>
    <div class="flex-1 mt-4 flex flex-col items-center overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>