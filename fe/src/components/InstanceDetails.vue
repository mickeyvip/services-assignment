<template>
  <div class="flex-1 flex flex-col w-1/2 space-y-5 min-h-0">
    <div v-if="fetchingData" class="flex justify-center">
      <Spinner />
    </div>
    <template v-else>
      <div>
        <h3>Selected Instance</h3>
        <p>{{ selectedInstance }}</p>
      </div>
      <div class="flex-1 flex flex-col min-h-0" style="min-height: 130px;">
        <h3>Instance Details</h3>
        <p class="flex-1 overflow-auto">{{ selectedInstanceInfo }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import {mapActions, mapState} from 'pinia';
import {useStore as useServicesStore} from '../store/services.store';
import Spinner from './Spinner.vue';

export default {
  name: "InstanceDetails",
  components: {Spinner},
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
  computed: {
    ...mapState(useServicesStore, [
      'instances',
      'fetchingInstances',
      'fetchingServices',
      'selectedInstance',
    ]),
    selectedInstanceInfo() {
      if (!this.instances[this.serviceId]) {
        return 'N/A';
      }

      return this.instances[this.serviceId][this.instanceId];
    },
    fetchingData() {
      return this.fetchingServices || this.fetchingInstances;
    }
  },
  methods: {
    ...mapActions(useServicesStore, [
      'fetchServices',
      'fetchInstances',
      'setSelectedService',
      'setSelectedInstance',
    ]),
  },
  async mounted() {
    if (!this.services) {
      await this.fetchServices();
      await this.setSelectedService(this.serviceId);
    }
    if (!this.instances[this.serviceId]) {
      await this.fetchInstances(this.serviceId);
      await this.setSelectedInstance(this.serviceId, this.instanceId);
    }
  }
}
</script>

<style scoped>

</style>