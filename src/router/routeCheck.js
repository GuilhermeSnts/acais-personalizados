import store from "../store";
export default {
  hasSizeAndFlavor: {
    beforeEnter: (to, from, next) => {
      let isCheckoutValid = store.getters["checkout/IS_CHECKOUT_VALID"];
      if (!isCheckoutValid) {
        next("/");
      } else {
        next();
      }
    }
  },
  hasProducts: {
    beforeEnter: (to, from, next) => {
      let hasProducts = store.getters["products/HAS_PRODUCTS"];
      if (!hasProducts) {
        next("/");
      } else {
        next();
      }
    }
  }
};
