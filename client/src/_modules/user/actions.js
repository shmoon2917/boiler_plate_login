import { userConstants } from "./constants";

export const userActions = {
  login,
};

function login(body) {
  return { type: userConstants.LOGIN_REQUEST, payload: body };
}
