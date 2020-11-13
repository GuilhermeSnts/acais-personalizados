<template>
  <div class="home-page">
    <h1>Açaí Personalizado</h1>
    <BaseButton label="Novo Pedido" to="/size-and-flavor">
      <BerryIcon />
    </BaseButton>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import BaseButton from "../components/BaseButton";
import BerryIcon from "../components/icons/BerryIcon";
export default {
  name: "Home",

  components: {
    BaseButton,
    BerryIcon
  },

  methods: {
    ...mapActions("products", ["DO_GET_PRODUCTS"])
  },

  created() {
    this.DO_GET_PRODUCTS();
  }
};
</script>
