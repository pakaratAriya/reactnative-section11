import axios from "axios";

const API_KEY = "AIzaSyAQO45RPNsqIcjHWceTYL0Wd5WRkiiD3CQ";

export async function createUser(email, password) {
  const response = await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
