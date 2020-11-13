<template>
  <div class="customize--page">
    <h1>Personalizar</h1>
    <p>Complemento</p>
    <BaseSelect
      v-model="customization"
      :items="GET_CUSTOMIZATIONS"
      placeholder="Escolha uma opção"
    />
    <BaseButton label="Continuar" @click="proceed">
      <ArrowRightIcon />
    </BaseButton>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import BaseSelect from "../components/BaseSelect";
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
        console.log(value);
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
    BaseSelect,
    BaseButton,
    ArrowRightIcon
  }
};
</script>
