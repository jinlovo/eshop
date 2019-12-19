<template>
  <div>
    <router-view />
    <FooterGuide />
  </div>
</template>
<script>
import FooterGuide from '../src/components/FooterGuide/FooterGuide'

export default {
  components: {
    FooterGuide
  },
  mounted () {
    // this.$store.dispatch('')
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus/"></style>
