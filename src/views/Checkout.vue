<template>
  <div class="checkout--page">
    <h1>Checkout</h1>
    <p><b>Tamanho: </b> {{ size }}</p>
    <p><b>Sabor: </b> {{ flavor }}</p>
    <p><b>Personalização</b> {{ customization }}</p>
    <br />
    <p><b>Valor</b> R$ {{ price }}</p>
    <p><b>Tempo de Preparo</b> {{ prep }} minutos</p>
    <br />
    <br />
    <br />
    <BaseButton label="Finalizar" @click="finish">
      <ArrowRightIcon />
    </BaseButton>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseButton from "../components/BaseButton";
import ArrowRightIcon from "../components/icons/ArrowRightIcon";

export default {
  name: "Checkout",

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
    finish() {
      //
    }
  },

  components: {
    BaseButton,
    ArrowRightIcon
  }
};
</script>
