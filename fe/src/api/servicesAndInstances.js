export function fetchServices() {
  return fetch('/api/v1/services')
    .then(res => res.json());
}

export function fetchInstances(serviceId) {
  return fetch(`/api/v1/instances/${encodeURIComponent(serviceId)}`)
    .then(res => res.json());
}