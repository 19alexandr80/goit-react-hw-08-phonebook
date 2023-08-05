import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export class PhoneBook {
  async registration(credentials) {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async login(credentials) {
    try {
      const response = await axios.post('/users/login', credentials);

      setAuthHeader(response.data.token);
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async logout(credentials) {
    try {
      const response = await axios.post('/users/login', credentials);

      clearAuthHeader();
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  async addUserPhoneBook(user) {
    try {
      const response = await axios.post(`/contacts`, user);
      return response;
    } catch (error) {
      console.error('errrrrror', error);
    }
  }
  async getUsers() {
    try {
      const response = await axios.get(`/contacts`);
      return response;
    } catch (error) {
      console.error('errrrrror', error);
    }
  }
  async deleteUsers(id) {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response;
    } catch (error) {
      console.error('errrrrror', error);
    }
  }
  async refreshUser(persistedToken) {
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      return res;
    } catch (error) {
      console.error('errrrrror', error);
    }
  }
}
