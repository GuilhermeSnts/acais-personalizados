export default {
  SET_SIZE(state, payload) {
    state.size = payload;
  },
  SET_FLAVOR(state, payload) {
    state.flavor = payload;
  },
  SET_CUSTOMIZATION(state, payload) {
    state.customization = payload;
  },
  SET_PRICE(state, payload) {
    state.price = payload;
  },
  SET_PREP(state, payload) {
    state.prep = payload;
  }
};
