<template>
  <div>
    <select class="base-select" :class="{ error }" v-model="size">
      <option :value="{}" disabled selected>{{ placeholder }}</option>
      <option :value="item" v-for="(item, index) in items" :key="index">{{
        item.name
      }}</option>
    </select>
    <p class="base-select-error-message">
      <small v-show="error">{{ errorMessage }}</small>
    </p>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",

  computed: {
    size: {
      get() {
        return this.value;
      },
      set(value) {
        console.log(value);
        this.$emit("input", value);
      }
    }
  },

  props: {
    items: Array,
    value: Object,
    placeholder: String,
    error: Boolean,
    errorMessage: String
  }
};
</script>

<style lang="sass" scoped>
.base-select
  border-radius: 25px
  padding: 8px 15px
  font-family: 'Roboto', sans-serif
  border: 1px solid #52219d
  appearance: none
  outline: 0
  cursor: pointer
  flex: 1
  color: #52219d
  cursor: pointer
  min-width: 180px
  &.error
    color: red
    border: 1px solid red
  &:hover
    color: #fff
    background-color: #52219d
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
    transition: all 0.3s ease 0s
    border: 1px solid #52219d
  option
    background-color: #52219d
    padding: 5px 10px
.base-select-error-message
  margin-top: 3px
  color: red
  font-size: 0.8em
</style>
