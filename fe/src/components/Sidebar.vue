<template>
  <div class="flex-1 flex flex-col items-center bg-blue-100 shadow">
    <RouterLink
      custom
      :to="{ name: 'home' }"
      v-slot="{ isActive, navigate }"
      exact
    >
      <button
        @click="navigate"
        class="w-full flex justify-center p-2"
        :class="{ 'bg-blue-300': isActive }"
      >
        <img src="../assets/icons8-home-48.png" alt="Home">
      </button>
    </RouterLink>
    <RouterLink
        custom
        :to="{ name: 'details', params: { serviceId: selectedService, instanceId: selectedInstance } }"
        exact
        v-slot="{ isActive, navigate }"
    >
      <button
          @click="navigate"
          :disabled="detailsRouteDisabled"
          class="w-full flex justify-center p-2"
          :class="{ 'bg-blue-300': isActive && !detailsRouteDisabled, 'opacity-30':  detailsRouteDisabled}"
      >
        <img src="../assets/icons8-info-48.png" alt="Info">
      </button>
    </RouterLink>
  </div>
</template>

<script>
import {mapState} from 'pinia';
import {useStore as useServicesStore} from '../store/services.store';

export default {
  name: "Sidebar",
  computed: {
    ...mapState(useServicesStore, [
      'selectedService',
      'selectedInstance'
    ]),
    detailsRouteDisabled() {
      return !(this.selectedService && this.selectedInstance);
    }
  }
}
</script>

<style scoped>

</style>