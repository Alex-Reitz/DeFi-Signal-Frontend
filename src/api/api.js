import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class DeFiSignalApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.log(BASE_URL);
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${DeFiSignalApi.token}` };
    const params = method === "get" ? data : {};
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API error: ", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  //Login endpoint
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    console.log("login", res);
    return res;
  }
  //Signup/Register endpoint
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    console.log(res);
    return res;
  }
  //get current User
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default DeFiSignalApi;
