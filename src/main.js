import Vue from "vue";
import App from "./App.vue";

// import store from "./store.js"; // State is available application-wide

import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faPause, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faPlay, faPause, faTrash);

Vue.config.productionTip = false;

new Vue({
  // Add store to application
  // store,
  render: h => h(App)
}).$mount("#app");
