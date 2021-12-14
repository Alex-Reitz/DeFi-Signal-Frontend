import axios from "axios";

const BASE_URL = "https://defisignal-backend.herokuapp.com";
//const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

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
  //Get eth metrics from Messari
  static async getEthMetrics() {
    let res = await this.request(`data/ethmetrics`);
    return res;
  }
  //Get SOL metrics from Messari
  static async getSolanaMetrics() {
    let res = await this.request(`data/solanametrics`);
    return res;
  }
  //Get BNB metrics from Messari
  static async getBNBMetrics() {
    let res = await this.request(`data/bnbmetrics`);
    return res;
  }
  //Get Polygon metrics from Messari
  static async getPolygonMetrics() {
    let res = await this.request(`data/polygonmetrics`);
    return res;
  }
  //Get gas data - DeFi Pulse
  static async getGas() {
    let res = await this.request(`data/gasdata`);
    return res;
  }
  //Get chart data - DeFi Llama
  static async charts() {
    let res = await this.request(`data/charts`);
    return res.charts;
  }
  //Get Eth chart data - DeFi Llama
  static async EthChart() {
    let res = await this.request(`data/ethchart`);
    return res.charts;
  }
  //Get Binance chart data - DeFi Llama
  static async BinanceChart() {
    let res = await this.request(`data/binancechart`);
    return res.charts;
  }
  //Get Solana chart data - DeFi Llama
  static async SolanaChart() {
    let res = await this.request(`data/solanachart`);
    return res.charts;
  }
  //Get Polygon chart data - DeFi Llama
  static async PolygonChart() {
    let res = await this.request(`data/polygonchart`);
    return res.charts;
  }
  //update user information
  static async update(username, data) {
    let res = await this.request(`users/${username}`, data, "patch");
    return res;
  }
  //Data on specific protocol
  static async getGeckoData(ID) {
    let res = await this.request(`data/${ID}`);
    return res;
  }
}

export default DeFiSignalApi;
