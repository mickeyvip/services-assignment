<template>
  <div id="app" class="h-screen">
    <div class="app-container h-screen grid">
      <div class="sidebar border-r border-grey-400 border-solid w-16 flex">
        <Sidebar/>
      </div>
      <main class="p-5 overflow-auto flex">
        <RouterView/>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {Sidebar},
}
</script>

<style lang="scss">
</style>
