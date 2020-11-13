export default {
  GET_SIZES(state) {
    return state.sizes;
  },
  GET_FLAVORS(state) {
    return state.flavors;
  },
  GET_CUSTOMIZATIONS(state) {
    return state.customizations;
  },
  HAS_PRODUCTS(state) {
    let hasSizes = Object.values(state.sizes).length;
    let hasFlavors = Object.values(state.flavors).length;
    return hasSizes && hasFlavors;
  }
};
