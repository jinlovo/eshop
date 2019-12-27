<template>
    <div id="eOrder">
        <div class="parent">
            <div class="child" v-for="(book, i) in bookDetail" :key="i">
              <span>{{book.address}}</span><br>
              <span>{{book.age}}</span><br>
              <span>{{book.author}}</span><br>
              <span>{{book.email}}</span>
              <span :style="{color: book.color}">{{book.color}}</span>
              <span :style="{color: book.color}">{{book.image}}</span>
              <img :src="book.dataImage" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      bookDetail: this.$store.state.books[0].book
    }
  },
  mounted () {
    this.$store.dispatch('getShopBooks')
  }
}

</script>
<style lang="stylus">
#eOrder
  padding-bottom 3.125rem

img
  width 6.25rem
  height 3.125rem
</style>
