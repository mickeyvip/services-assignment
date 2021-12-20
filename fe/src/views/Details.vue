<template>
  <Layout title="Instance Details">
    <InstanceDetails :serviceId="serviceId" :instanceId="instanceId" />
  </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';
import InstanceDetails from '../components/InstanceDetails.vue';

export default {
  name: "Details",
  props: {
    serviceId: {
      type: String,
      default: '',
    },
    instanceId: {
      type: String,
      default: '',
    },
  },
  components: {
    InstanceDetails,
    Layout
  },
}
</script>

<style scoped>

</style>