<template>
  <div>
    <div class="Grid">
      <div class="Grid-cell u-1of4">{{this.$store.state.username}}</div>
      <div class="Grid-cell">2</div>
      <div class="Grid-cell u-1of3">3</div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="stylus">
    .Grid {
  display: flex;
}

.Grid-cell {
  flex: 1;
}

.Grid-cell.u-full {
  flex: 0 0 100%;
}

.Grid-cell.u-1of2 {
  flex: 0 0 50%;
  background-color green
}

.Grid-cell.u-1of3 {
  flex: 0 0 33.3333%;
  background-color yellow
}

.Grid-cell.u-1of4 {
  flex: 0 0 25%;
  background-color red
}
</style>