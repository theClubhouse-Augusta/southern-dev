<template lang="pug">
    .speaker(@click="active = !active")
        Modal(v-if="active" :speaker="speaker")
        .speaker-img-container
            img.speaker-img(:src="require(`~/assets${speaker.speakerImage}`)")
        .speaker-name-container
            h5.speaker-name {{speaker.name}}
</template>
<script>
import Modal from './modal';
export default {
    components: {
        Modal
    },
    data () {
        return { 
            active: false 
        }
    },
    props: ["speaker"],
    mounted () {
        console.log("speaker", this.speaker)
        console.log("index", this.index);
    }
} 
</script>

<style lang="sass" scoped>
.speaker
    position: relative
    border-radius: 5px
    box-shadow: $shadow1, $shadow3
    overflow: hidden

.speaker-img-container
    width: 100%
    height: 100%
img
    width: 100%
h5
    background-color: $primary-blue
    position: absolute
    bottom: 0
    width: 100%
</style>