import api from "./api";

const serviceName = "/donations";

export async function createDonation(payload) {
  let response = null;
  await api
    .post(`${serviceName}`, payload)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}

export async function getAllDonations() {
  let response = null;
  await api
    .get(`${serviceName}`)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}

export async function getDonationById(id) {
  let response = null;
  await api
    .get(`${serviceName}/${id}`)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}
