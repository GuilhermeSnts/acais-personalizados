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
    let customizationPrices = state.customization.map(i => i.price);
    let customizationTotalValue = 0;

    if (customizationPrices.length)
      customizationTotalValue =
        customizationPrices.reduce((acc, i) => acc + i) || 0;
    return sizePrice + flavorPrice + customizationTotalValue;
  },
  GET_PREP(state) {
    let sizePrep = state.size.prep;
    let flavorPrep = state.flavor.prep;
    let customizationPreps = state.customization.map(i => i.prep);
    let customizationTotalValue = 0;

    if (customizationPreps.length)
      customizationTotalValue =
        customizationPreps.reduce((acc, i) => acc + i) || 0;
    return sizePrep + flavorPrep + customizationTotalValue;
  }
};
