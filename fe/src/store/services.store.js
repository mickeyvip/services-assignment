import {defineStore} from 'pinia';
import {fetchServices, fetchInstances} from '../api/servicesAndInstances';

export const useStore = defineStore('services', {
  state() {
    return {
      services: null,
      // a map of service name as a key and instances map as a value
      instances: {},
      selectedService: null,
      selectedInstance: null,
      fetchingServices: false,
      fetchingInstances: false,
    };
  },
  getters: {
    instanceNames(state) {
      return Object.keys(state.instances[state.selectedService] || {});
    }
  },
  actions: {
    fetchServices() {
      if (this.services) {
        return;
      }

      this.fetchingServices = true;

      return fetchServices()
        .then(services => {
          this.services = services;
          this.selectedService = this.services[0];
        })
        .catch(() => {
          this.services = null;
          this.instances = null;
          this.selectedService = null;
        })
        .finally(() => {
          this.fetchingServices = false;
        });
    },
    fetchInstances(serviceId) {
      if (this.instances[serviceId]) {
        return;
      }

      this.fetchingInstances = true;

      return fetchInstances(serviceId)
        .then(instances => {
          // need to create a new object for the change detection to work
          this.instances = {
            ...this.instances,
            [serviceId]: instances
          };
          this.selectedInstance = Object.keys(this.instances[serviceId])[0];
        })
        .catch(() => {
          // need to create a new object for the change detection to work
          const {serviceId, ...rest} = this.instances;
          this.instances = rest
          delete this.instances[serviceId];
          this.selectedInstance = null;
        })
        .finally(() => {
          this.fetchingInstances = false;
        });
    },
    setSelectedService(serviceId) {
      if (this.services && this.services.includes(serviceId)) {
        this.selectedService = serviceId;
      }
    },
    setSelectedInstance(serviceId, instanceId) {
      if (this.instances[serviceId] && instanceId in this.instances[serviceId]) {
        this.selectedInstance = instanceId;
      } else {
        this.selectedInstance = null;
      }
    }
  }
})