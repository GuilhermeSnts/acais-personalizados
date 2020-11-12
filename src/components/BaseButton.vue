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
      background-color: #52219d
      border-radius: 25px
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
      transition: all 0.3s ease 0s
      padding: 10px 15px
      .icon
        fill: #fff !important
      &:hover
        background-color: #52219d
        box-shadow: 0px 15px 20px #52219d4D
        background-image: none
        color: #fff
        transform: translateY(-7px)
        .icon
          fill: white !important

    &.standard
      color: #333333
      background-color: #fff
      border-radius: 25px
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1)
      transition: all 0.3s ease 0s
      .icon
        fill: #333333
      &:hover
        background-color: #900020
        box-shadow: 0px 15px 20px rgba(144, 0, 32, 0.4)
        background-image: none
        color: #fff
        transform: translateY(-7px)
        .icon
          fill: white !important

    &.button--outline
      color: #333333
      background-color: #fff
      border-radius: 25px
      border: 1px solid #333333
      transition: all 0.3s ease 0s
      .icon
        fill: #333333
      &:hover
        border: 1px solid #900020
        background-image: none
        color: #900020
        .icon
          fill: #900020 !important
</style>
