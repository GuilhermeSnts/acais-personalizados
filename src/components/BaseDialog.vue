<template>
  <div class="dialog-screen" v-show="value">
    <div class="dialog-card">
      <div class="dialog-card-title">
        <h2>{{ title }}</h2>
      </div>
      <div class="dialog-card-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "XButton",
  props: {
    value: Boolean,
    title: String
  }
};
</script>

<style lang="sass" scoped>
.dialog-screen
  width: 100vw
  height: 100vh
  background: $primaryWithAlpha
  position: fixed
  z-index: 1
  top: 0
  left: 0
  overflow: auto
  display: flex
  justify-content: center
  align-items: center
  .dialog-card
    box-sizing: border-box
    display: flex
    flex-flow: column
    min-width: 250px
    min-height: 250px
    width: 100%
    height: 100%
    max-width: 350px
    max-height: 350px
    border-radius: 16px
    background: #fff
    padding: 10px
    .dialog-card-content
      width: 100%
      height: 100%
      display: flex
      flex-flow: column
      justify-content: space-around
      align-items: center
</style>
