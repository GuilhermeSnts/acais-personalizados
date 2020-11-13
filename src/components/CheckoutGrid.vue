<template>
  <div class="grid">
    <div class="row">
      <div class="field col">Tamanho:</div>
      <div class="value col">
        {{ size }}
      </div>
    </div>
    <div class="row">
      <div class="field col">Sabor:</div>
      <div class="value col">
        {{ flavor }}
      </div>
    </div>
    <div class="row" v-show="customization.length">
      <div class="field col">Adicionais:</div>
      <div class="value col">
        <span v-for="(item, index) in customization" :key="index"
          >{{ item.name }},
        </span>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="field col">Valor</div>
      <div class="value col">{{ price | real }}</div>
    </div>
    <div class="row">
      <div class="field col">Tempo de Preparo</div>
      <div class="value col">{{ prep }} minutos</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckoutGrid",

  props: {
    prep: Number,
    price: Number,
    size: String,
    flavor: String,
    customization: Array
  },

  filters: {
    real(val) {
      return val.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.grid
  width: 100%
  box-sizing: border-box
  display: flex
  flex-flow: column
  margin-bottom: 25px
  .row
    display: flex
    flex-flow: row
    width: 100%
    .col
      width: 50%
      padding: 3px 4px
      &.field
        text-align: right
        font-weight: 600
      &.value
        text-align: left
</style>
