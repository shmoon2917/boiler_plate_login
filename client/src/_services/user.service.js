import axios from "axios";

const API_URL = "/api/user";

const login = async (body) => {
  try {
    // const response = await axios.post(API_URL + "/signin", body);
    const response = await Promise.resolve({ success: true });

    // if (user.accessToken) {
    //   localStorage.setItem("user", JSON.stringify(user));
    // }

    return response;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
};
