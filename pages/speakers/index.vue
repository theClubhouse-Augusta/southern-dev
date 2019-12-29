<template lang="pug">
    #body-wrapper
        main.speaker-list
            header
                h1 This Year's Speakers
            ul(v-for="(speaker, index) in speakers" :key="index")
                nuxt-link(:to="`speakers/${speaker.slug}`") {{speaker.name}} - {{speaker.title}}
                p {{speaker.talkDescription}}
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
</style>