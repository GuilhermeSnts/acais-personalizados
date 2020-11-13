<template>
  <div class="customize--page">
    <h1>Personalizar</h1>
    <p>Complemento</p>
    <CheckboxGroup v-model="customization" :items="GET_CUSTOMIZATIONS" />

    <BaseButton label="Continuar" @click="proceed">
      <ArrowRightIcon />
    </BaseButton>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import CheckboxGroup from "../components/CheckboxGroup";
import BaseButton from "../components/BaseButton";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";

export default {
  name: "Customize",

  computed: {
    ...mapGetters("checkout", ["GET_CUSTOMIZATION"]),
    ...mapGetters("products", ["GET_CUSTOMIZATIONS"]),
    customization: {
      get() {
        return this.GET_CUSTOMIZATION;
      },
      set(value) {
        this.SET_CUSTOMIZATION(value);
      }
    }
  },

  methods: {
    ...mapMutations("checkout", ["SET_CUSTOMIZATION"]),

    proceed() {
      this.$router.push("/checkout");
    },

    getProductInfo() {}
  },

  components: {
    CheckboxGroup,
    BaseButton,
    ArrowRightIcon
  }
};
</script>
