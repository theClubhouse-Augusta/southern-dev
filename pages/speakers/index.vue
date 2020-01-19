<template lang="pug">
    #body-wrapper
        main.speaker-list
            h1 This Year's Speakers
            ul
                li(v-for="(speaker, index) in speakers" :key="index")
                    Speaker(:speaker="speaker")
</template>
<script>
    import Speaker from '../../components/Speaker/';
    export default {
        components: {
            Speaker
        },
        computed: {
            speakers() {
                return this.$store.state.speakers;
            }
        }
    }
</script>
<style lang="sass" scoped>
    ul
        display: flex
        flex-wrap: wrap
        align-items: center
        flex-direction: column
        justify-content: space-between
        @media(min-width: 600px)
            flex-direction: row
            justify-content: space-around
    li
        width: 90%
        max-width: 400px
        list-style-type: none
        margin: 20px auto
        @media(min-width: 600px)
            width: 40%
            margin: 40px 20px
</style>