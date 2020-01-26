<template lang="pug">
    section
        .content-card
            img.speaker-image(:src="require(`~/assets${speaker.speakerImage}`)")
            h1.speaker-name {{speaker.name}}
            
            h1.talk-title {{speaker.talkTitle}}
            h5.speaker-title {{speaker.speakerTitle}}
            div.speaker-info
            div.bio
                div {{speaker.bio}}
</template>
<script>
export default {
    props: ["speaker"]
}
</script>

<style lang="sass" scoped>
section
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    z-index: 10
    background-color: rgba($blue5, .5)
.content-card
    position: absolute
    background-color: white
    width: 80%
    height: 80%
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
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