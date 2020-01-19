<template lang="pug">
    #body-wrapper
        main.speaker-list
            h1 This Year's Speakers
            ul
                li(v-for="(speaker, index) in speakers" :key="index")
                    .row
                        img.speaker-img(:src="require(`~/assets${speaker.speakerImage}`)")
                        .talk-info
                            h4 {{ speaker.talkTitle }}
                            nuxt-link(:to="`/speakers/${speaker.slug}`") {{speaker.name}}
                            div(v-html="$md.render(speaker.talkDescription)")
</template>
<script>
    export default {
        computed: {
            speakers() {
                return this.$store.state.speakers;
            }
        }
    }
</script>
<style lang="sass" scoped>
h1
  font-size: 4rem
  background-color: $blue1
  color: $blue7
  font-weight: bold
li
  text-align: left
  padding: 0 4em

.row
    display: flex
    padding-bottom: 2em

.speaker-img
    margin: 0 10px
    border-radius: 100%
    width: 250px
    border: 1px solid $gray5
    @media(min-width: 900px)
    float: left

.talk-info
    flex-basis: 80%

</style>