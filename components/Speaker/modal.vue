<template lang="pug">
    section.modal
        //- img.speaker-image(:src="require(`~/assets${speaker.speakerImage}`)")
        //- h4.speaker-name {{speaker.name}}
        
        //- h1.talk-title {{speaker.talkTitle}}
        //- Modal(v-if="active" :speaker="speaker")
        //- h5.speaker-title {{speaker.speakerTitle}}
        //- div.speaker-info
        //- div.bio
        //-     div {{speaker.bio}}
</template>
<script>
export default {
    data () {
        return {
            active: false
        }
    },
    props: ["speaker"]
}
</script>

<style lang="sass" scoped>
.speaker-image
    margin: 0 10px
    border-radius: 100%
    width: 250px
    border: 1px solid $gray5
    @media(min-width: 900px)
        float: left
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

.talk-info
    flex-basis: 80%
</style>