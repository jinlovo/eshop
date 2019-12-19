<template>
    <div id="footer">
        <ul id="eshop_footer">
            <li @click="toLog('/search')">1</li>
            <li @click="toLog('/msite')">2</li>
            <li @click="toLog('/order')">3</li>
            <li @click="toLog('/profile')">4</li>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {
        }
    },
    methods: {
         toLog(path)  {
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="stylus">
    #footer
        position fixed
        bottom 0
        width 100%
        height 3.125rem
        #eshop_footer
            display flex;
            flex-flow row wrap;
            align-content flex-start;
        #eshop_footer li
            box-sizing border-box;
            background-color white;
            flex 0 0 25%;
            height 3.125rem
            line-height 3.125rem
            text-align center
            border  1px solid red;
</style>
