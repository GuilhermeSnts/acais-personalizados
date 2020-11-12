import Vue from "vue";
import Vuex from "vuex";

import checkout from "./checkout";
import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    checkout,
    products
  }
});
