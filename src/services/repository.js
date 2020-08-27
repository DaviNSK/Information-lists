import api from './api';

export default class Repository {
  getFilter = async () => api.get('/filter');

  getFilterById = async (id) => api.get(`/journey/${id}`);

  getList = async () => api.get('/journey');
}
