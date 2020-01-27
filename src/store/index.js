import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    async createCustomer(context, payload) {
      try {
        let apiRequest = await axios.post("register", payload);
        return apiRequest;
      } catch (error) {}
    },
    async loginUser(context, payload) {
      try {
        let apiRequest = await axios.post("login", payload);
        let token = await apiRequest.data.token.token;
        localStorage.setItem("logged_in_user_token", token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return apiRequest.data;
      } catch (error) {
        throw error.response.data;
      }
    },
    async getProfile(context) {
      try {
        let apiRequest = await axios.get("profile");
        let profile = await apiRequest;
        return profile.data;
      } catch (error) {
        throw error.response;
      }
    }
  },
  modules: {}
});
