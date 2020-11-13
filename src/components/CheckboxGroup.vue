<template>
  <div class="checkbox-group">
    <div
      class="checkbox-item"
      :class="isActiveClass(item)"
      @click="activate(item)"
      v-for="(item, index) in items"
      :key="index"
    >
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CheckboxGroup",

  props: {
    items: Array,
    value: Array
  },

  methods: {
    activate(item) {
      console.log("item: ", item);
      if (this.value.filter(i => i == item).length) {
        let value = this.value.filter(i => i != item);
        this.$emit("input", value);
      } else {
        let value = [...this.value];
        value.push(item);
        this.$emit("input", value);
      }
    },
    isActiveClass(item) {
      if (this.value.filter(i => i == item).length) {
        return "active";
      } else {
        return "";
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.checkbox-group
  display: flex
  flex-flow: column
  width: 300px
  box-sizing: border-box
  justify-content: center
  align-items: center
  margin-bottom: 20px
  width: 100%
  .checkbox-item
    width: 250px
    padding: 4px
    border: 1px solid lightgrey
    border-radius: 16px
    margin: 2px
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
    transition: all 0.3s ease 0s
    cursor: pointer
    &:hover
      background-color: $primary
      border: 1px solid $primary
      box-shadow: 0px 15px 20px $primaryWithAlpha
      background-image: none
      color: #fff
      transform: translateY(-7px)
    &.active
      border: 1px solid $primary
      color: $primary
      &:hover
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
        background: none
        transform: translateY(0px)
        color: $primary
</style>
