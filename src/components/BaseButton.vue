<template>
  <div class="button-wrapper">
    <button class="button" :class="mode" @click="click(to)">
      <div class="icon"><slot /></div>
      <div class="text">{{ label }}</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "XButton",
  props: {
    icon: String,
    label: String,
    mode: {
      type: String,
      default: "primary"
    },
    to: String
  },

  methods: {
    click(to) {
      this.$emit("click");
      if (to) {
        this.$router.push(to);
      }
    }
  }
};
</script>

<style lang="sass" scoped>
.button-wrapper
  display: inline-block
  box-sizing: border-box
  .button
    cursor: pointer
    display: flex
    justify-content: left
    vertical-align: middle
    align-items: center
    padding: 8px 15px
    font-family: 'Roboto', sans-serif
    font-size: 11px
    text-transform: uppercase
    letter-spacing: 2.5px
    font-weight: 700
    border: none
    outline: none
    .icon
      width: 35px
      padding-right: 10px
      transition: all 0.3s ease 0s
    .text
      width: calc(100% - 35px)
      height: 100%
      align-content: center
      text-align: center
      text-transform: uppercase

    // Modes
    &.primary
      color: #fff
      background-color: $primary
      border-radius: 25px
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
      transition: all 0.3s ease 0s
      padding: 10px 15px
      .icon
        fill: #fff !important
      &:hover
        background-color: $primary
        box-shadow: 0px 15px 20px $primaryWithAlpha
        background-image: none
        color: #fff
        transform: translateY(-7px)
        .icon
          fill: white !important
</style>
