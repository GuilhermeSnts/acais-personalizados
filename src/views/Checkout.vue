<template>
  <div class="checkout--page">
    <h1>Checkout</h1>

    <CheckoutGrid
      :prep="prep"
      :price="price"
      :size="size.name"
      :flavor="flavor.name"
      :customization="customization"
    />

    <BaseButton label="Finalizar" @click="finish">
      <ArrowRightIcon />
    </BaseButton>

    <BaseDialog :value="isBeingPrepared" title="Preparando o Pedido">
      <p>O pedido ficará pronto em: {{ prep_countdown }} minutos</p>
      <BaseButton label="Recebido" @click="finished">
        <ArrowRightIcon />
      </BaseButton>
    </BaseDialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BaseButton from "../components/BaseButton";
import BaseDialog from "../components/BaseDialog";
import CheckoutGrid from "../components/CheckoutGrid";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";

export default {
  name: "Checkout",

  data: () => ({
    prep_countdown: 0,
    isBeingPrepared: false
  }),

  computed: {
    ...mapGetters("checkout", {
      size: "GET_SIZE",
      flavor: "GET_FLAVOR",
      customization: "GET_CUSTOMIZATION",
      price: "GET_PRICE",
      prep: "GET_PREP"
    })
  },

  methods: {
    ...mapActions("checkout", ["DO_CLEAN"]),

    finish() {
      this.isBeingPrepared = true;
      this.prep_countdown = this.prep;
    },
    finished() {
      this.DO_CLEAN();
      this.$router.push("/");
    }
  },

  components: {
    BaseButton,
    BaseDialog,
    CheckoutGrid,
    ArrowRightIcon
  }
};
</script>
