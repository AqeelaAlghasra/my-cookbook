import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const getAuthConfig = () => {
  const token = localStorage.getItem("token");
  return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/${userId}`, getAuthConfig());
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await axios.put(
      `${API_URL}/${userId}`,
      userData,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(
      `${API_URL}/${userId}`,
      getAuthConfig()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error;
  }
};
