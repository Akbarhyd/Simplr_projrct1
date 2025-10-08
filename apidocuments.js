import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:3000',
});

export const setAuthToken = token => {
  API.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const uploadDocument = (file, description) => {
  const form = new FormData();
  form.append('file', file);
  form.append('description', description);
  return API.post('/documents/upload', form, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const listDocuments = () => API.get('/documents');
export const downloadDocument = id => API.get(`/documents/download/${id}`, {
  responseType: 'blob',
});
