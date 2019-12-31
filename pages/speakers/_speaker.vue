<template lang="pug">
    div
        h1.talk-title {{speaker.talkTitle}}
        div.speaker-div
            div.speaker-info
                h3.speaker-name {{speaker.name}}
                h5.speaker-title {{speaker.speakerTitle}}
            div.speaker-img
                //- img(:src="require(`${speaker.speakerImage}`)")
        div.talk-description(v-html="$md.render(speaker.talkDescription)")
</template>
<script>
export default {
    async asyncData({params, payload}) {
        if (payload) return { speaker: payload }
        else {
            return {
                speaker: await require(`~/assets/content/speakers/${params.speaker}.json`)
            }
        }
    }
}
</script>