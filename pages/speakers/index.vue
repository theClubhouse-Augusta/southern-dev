<template lang="pug">
    #body-wrapper
        main.speaker-list
            Modal(v-if="activeSpeaker" :speaker="activeSpeaker")
            h1 This Year's Speakers
            ul
                li(v-for="(speaker, index) in speakers" :key="index")
<<<<<<< HEAD
                    Speaker(:speaker="speaker")
                    //-  @modalActivate="setModal" Uncomment for deploying modal
                     
=======
                    .row
                        img.speaker-img(:src="require(`~/assets/${speaker.speakerImage}`)")
                        .talk-info
                            h4 {{ speaker.talkTitle }}
                            nuxt-link(:to="`/speakers/${speaker.slug}`") {{speaker.name}}
                            div(v-html="$md.render(speaker.talkDescription)")
>>>>>>> 8e44577b735a92201a0a4c31fda08ec5c84d4fc2
</template>
<script>
    import Speaker from '../../components/Speaker';
    import Modal from '../../components/Modal';
    export default {
        components: {
            Speaker,
            Modal
        },
        data () {
            return {
                activeSpeaker: false
            }
        },
        computed: {
            speakers() {
                return this.$store.state.speakers;
            }
        },
        methods: {
            setModal(speaker) {
                console.log(speaker);
                this.activeSpeaker = speaker;
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