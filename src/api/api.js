import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class DeFiSignalApi {
  static token;

  static async request(endpoint, data = {}, method = "get") {
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
    return res;
  }
  //Signup/Register endpoint
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res;
  }
  //get current User
  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }
  //get news
  static async getNews() {
    let res = await this.request(`data/news`);
    return res;
  }
  //Get protocols from DeFi Llama
  static async getProtocols() {
    let res = await this.request(`data/protocols`);
    return res;
  }
  //Get market data from DeFi Pulse
  static async getMarketData() {
    let res = await this.request(`data/marketdata`);
    return res;
  }
  //Get gas data - DeFi Pulse
  static async getGas() {
    let res = await this.request(`data/gasdata`);
    return res;
  }
}

export default DeFiSignalApi;
