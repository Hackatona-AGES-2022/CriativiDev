import api from "./api";

const serviceName = "/matches";

export async function createDonationSolicitationMatch(payload) {
  let response = null;
  await api
    .post(`${serviceName}`, payload)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}

export async function getMatchesBySolicitationId(solicitation_id) {
  let response = null;
  await api
    .get(`${serviceName}/solicitations/${solicitation_id}`)
    .then((data) => (response = data.data))
    .catch((error) => {
      throw error;
    });
  return response;
}

export async function getMatchesByDonationId(donation_id) {
    let response = null;
    await api
      .get(`${serviceName}/donations/${donation_id}`)
      .then((data) => (response = data.data))
      .catch((error) => {
        throw error;
      });
    return response;
}