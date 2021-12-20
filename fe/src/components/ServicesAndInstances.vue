<template>
  <div class="flex-1 flex flex-col w-1/2 space-y-5 min-h-0">
    <div>
      <h3>Select a service:</h3>
      <VSelect
          :value="selectedService"
          @input="updateSelectedService"
          :options="services || []"
          :clearable="false"
          :disabled="fetchingServices || !services"
          :loading="fetchingServices"
      />
    </div>
    <div>
      <h3>Select an instance:</h3>
      <VSelect
          :value="selectedInstance"
          @input="updateSelectedInstance"
          :options="instanceNames || []"
          :clearable="false"
          :disabled="instancesSelectorDisabled"
          :loading="fetchingInstances"
      />
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'pinia';
import {useStore as useServicesStore} from '../store/services.store';

export default {
  name: 'ServicesAndInstances',
  computed: {
    ...mapState(useServicesStore, [
      'services', 'fetchingServices', 'selectedService',
      'instances', 'fetchingInstances', 'selectedInstance',
    ]),
    instanceNames() {
      if (!this.instances[this.selectedService]) {
        return [];
      }

      return Object.keys(this.instances[this.selectedService]);
    },
    instancesSelectorDisabled() {
      return !this.selectedService || this.fetchingInstances || !this.instanceNames;
    }
  },
  methods: {
    ...mapActions(useServicesStore, [
      'fetchServices',
      'fetchInstances',
      'setSelectedService',
      'setSelectedInstance',
    ]),
    updateSelectedService(serviceId) {
      this.setSelectedService(serviceId);
    },
    updateSelectedInstance(instanceId) {
      this.setSelectedInstance(this.selectedService, instanceId)
    }
  },
  watch: {
    selectedService() {
      this.fetchInstances(this.selectedService);
    }
  },
  mounted() {
    if (!this.services) {
      this.fetchServices();
    }
    this.selectedServiceInner = this.selectedService;
    this.selectedInstanceInner = this.selectedInstance;
  }
}
</script>

<style scoped>
</style>
