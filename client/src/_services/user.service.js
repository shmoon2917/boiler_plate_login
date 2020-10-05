import axios from "axios";

const API_URL = "/api/user";

const login = async (body) => {
  try {
    const response = await axios.post(API_URL + "/signin", body);
    const user = await handleResponse(response);

    if (user.accessToken) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    return user;
  } catch (error) {
    throw error;
  }
};

const register = async (body) => {
  try {
    const response = await axios.post(API_URL + "/signup", body);
    const data = await handleResponse(response);

    return data;
  } catch (error) {
    throw error;
  }
};

const handleResponse = (response) => {
  const { status, message, data } = response.data;

  if (status !== "ok") {
    const error = message;
    return Promise.reject(error);
  }

  return Promise.resolve(data);
};

export default {
  login,
  register,
};
