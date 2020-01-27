import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import VueIziToast from "vue-izitoast";
import "izitoast/dist/css/iziToast.css";
import VueProgressBar from "vue-progressbar";
import notifications from "../public/mixins/notifications.js";

Vue.config.productionTip = false;
Vue.use(VueProgressBar, {
  color: "#924efc",
  failedColor: "#ff2e2e",
  height: "4px"
});

Vue.use(VueIziToast);
Vue.mixin(notifications);

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
let token = localStorage.getItem("logged_in_user_token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
