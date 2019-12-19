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
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus/"></style>