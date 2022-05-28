import api from "./api";

const serviceName = "/solicitations";

export async function createSolicitation(payload) {
  let response = null;
  await api
    .post(`${serviceName}`, payload)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}

export async function getAllSolicitations() {
  let response = null;
  await api
    .get(`${serviceName}`)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}

export async function getSolicitationById(id) {
  let response = null;
  await api
    .get(`${serviceName}/${id}`)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}
