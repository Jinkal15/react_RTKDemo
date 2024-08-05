// services/authService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const loginService = async (email: string, password: string) => {
  const response = await axios.get(`${API_URL}/users?email=${email}&password=${password}`);
  if (response.data.length === 0) {
    throw new Error('Invalid credentials');
  }
  return response.data[0];
};

export const registerService = async (user: any) => {
  const response = await axios.post(`${API_URL}/users`, user);
  return response.data;
};

export const updateUserService = async (user: any) => {
  const response = await axios.put(`${API_URL}/users/${user.id}`, user);
  return response.data;
};
