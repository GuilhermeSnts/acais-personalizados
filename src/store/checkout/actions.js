export default {
  DO_CHECKOUT(context, payload) {
    console.log(context, payload);
    return;
  },
  DO_CLEAN(context) {
    context.commit("SET_SIZE", {});
    context.commit("SET_FLAVOR", {});
    context.commit("SET_CUSTOMIZATION", {});
    context.commit("SET_PRICE", 0);
    context.commit("SET_PREP", 0);
  }
};
