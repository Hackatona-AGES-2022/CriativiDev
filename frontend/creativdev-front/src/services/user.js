import api from './api';

const serviceName = '/users';

export async function registerUser(user) {
  let response = null;
  await api
    .post(`${serviceName}`, user)
    .then(data => (response = data.data))
    .catch(error => {
      throw error;
    });
  return response;
}

export async function getAllUsers() {
  let response = null;
  await api
    .get(`${serviceName}`)
    .then(data => (response = data.data))
    .catch(error => {
      throw error;
    });
  return response;
}

export async function getUserById(id) {
  let response = null;
  await api
    .get(`${serviceName}/${id}`)
    .then(data => (response = data.data))
    .catch(error => {
      throw error;
    });
  return response;
}
