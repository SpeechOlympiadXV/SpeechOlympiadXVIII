<script>
import GavelLogo from '../assets/images/gavel_logo.png'

export default {
  data() {
    return {
      logo: {
        filename: GavelLogo,
        alt: 'Gavel Logo'
      }
    }
  }
}
</script>

<template>
  <img :src="logo.filename" :alt="logo.alt" height="120" width="120">
</template>

<style scoped>
</style>