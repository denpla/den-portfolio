<template>
  <v-img
    :src="require('@/assets/back3a.png')"
    class="back3"
    height="50%"
    width="100%"
  />
</template>

<style lang="sass">
.back3
  position: absolute !important
  left: 0px
  top: 500px
  z-index: 0 !important

  ~ *
    z-index: 1 !important
</style>
