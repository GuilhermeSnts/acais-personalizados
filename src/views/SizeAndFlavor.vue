<template>
  <div class="size-and-flavor--page">
    <h1>Escolher Açaí</h1>
    <p>tamanho</p>
    <BaseSelect
      v-model="size"
      :items="GET_SIZES"
      placeholder="Escolha uma opção"
    />
    <p>Sabor</p>
    <BaseSelect
      v-model="flavor"
      :items="GET_FLAVORS"
      placeholder="Escolha uma opção"
    />
    <br />
    <br />
    <br />
    <br />
    <BaseButton label="Continuar" @click="checkOptionsAndProceed">
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
  name: "SizeAndFlavor",

  computed: {
    ...mapGetters("checkout", ["GET_SIZE", "GET_FLAVOR"]),
    ...mapGetters("products", ["GET_SIZES", "GET_FLAVORS"]),
    size: {
      get() {
        return this.GET_SIZE;
      },
      set(value) {
        console.log(value);
        this.SET_SIZE(value);
      }
    },
    flavor: {
      get() {
        return this.GET_FLAVOR;
      },
      set(value) {
        console.log(value);
        this.SET_FLAVOR(value);
      }
    }
  },

  methods: {
    ...mapMutations("checkout", ["SET_SIZE", "SET_FLAVOR"]),

    checkOptionsAndProceed() {
      if (this.size && this.flavor) {
        this.$router.push("/customize");
      }
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
