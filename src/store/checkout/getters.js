export default {
  GET_SIZE(state) {
    return state.size;
  },
  GET_FLAVOR(state) {
    return state.flavor;
  },
  GET_CUSTOMIZATION(state) {
    return state.customization;
  },
  GET_PRICE(state) {
    let sizePrice = state.size.price;
    let flavorPrice = state.flavor.price;
    let customizationPrice = state.customization.price || 0;
    return sizePrice + flavorPrice + customizationPrice;
  },
  GET_PREP(state) {
    let sizePrep = state.size.prep;
    let flavorPrep = state.flavor.prep;
    let customizationPrep = state.customization.prep || 0;
    return sizePrep + flavorPrep + customizationPrep;
  }
};
