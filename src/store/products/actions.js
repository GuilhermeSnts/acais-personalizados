export default {
  DO_GET_SIZES({ commit }) {
    fetch("/api/sizes")
      .then(res => res.json())
      .then(json => {
        commit("SET_SIZES", json.sizes);
      });
  },
  DO_GET_FLAVORS({ commit }) {
    fetch("/api/flavors")
      .then(res => res.json())
      .then(json => {
        commit("SET_FLAVORS", json.flavors);
      });
  },
  DO_GET_CUSTOMIZATIONS({ commit }) {
    fetch("/api/customizations")
      .then(res => res.json())
      .then(json => {
        commit("SET_CUSTOMIZATIONS", json.customizations);
      });
  },

  DO_GET_PRODUCTS({ dispatch }) {
    dispatch("DO_GET_SIZES");
    dispatch("DO_GET_FLAVORS");
    dispatch("DO_GET_CUSTOMIZATIONS");
  }
};
