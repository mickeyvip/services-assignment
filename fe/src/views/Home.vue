<template>
  <Layout title="Instance Selection">
    <ServicesAndInstances />
  </Layout>
</template>

<script>
import ServicesAndInstances from '../components/ServicesAndInstances.vue';
import Layout from '../components/Layout.vue';

export default {
  name: "Home",
  components: {
    Layout,
    ServicesAndInstances
  }
}
</script>

<style scoped>

</style>