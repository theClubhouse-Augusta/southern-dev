<template lang="pug">
    .speaker(@click="modalActivate")
        .speaker-img-container
            img.speaker-img(:src="require(`~/assets/${speaker.speakerImage}`)")
        .speaker-name-container
            h5.speaker-name {{speaker.name}}
</template>
<script>

export default {
    props: ["speaker"],
    methods: {
        modalActivate() {
            this.$emit("modalActivate", this.speaker);
        }
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