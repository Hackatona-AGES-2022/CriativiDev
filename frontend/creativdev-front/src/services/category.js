import api from './api';

const serviceName = '/categories';

export async function getAllCategories() {
  let response = null;
  await api
    .get(`${serviceName}`)
    .then(data => (response = data.data))
    .catch(error => {
      throw error;
    });
  return response;
}

export async function getCategoryById(id) {
  let response = null;
  await api
    .get(`${serviceName}/${id}`)
    .then(data => (response = data.data))
    .catch(error => {
      throw error;
    });
  return response;
}
