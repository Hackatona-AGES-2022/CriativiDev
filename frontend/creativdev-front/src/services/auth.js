import api from './api';

const serviceName = '/auth';

export async function login(email) {
  let response = null;
  await api
    .post(`${serviceName}`, { email })
    .then(data => (response = data.data))
    .catch(error => {
      throw error;
    });
  return response;
}